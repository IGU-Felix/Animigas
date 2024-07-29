import { createUser , findUserByEmail } from "../model/User.js"
import bcrypt from 'bcrypt'
import {randomUUID} from "node:crypto"
 
const addImage = async (buffer) => {
  let newName = `${randomUUID()}.png`;
  let tmpImg = await jimp.read(buffer);
  tmpImg.cover(500, 500).quality(80).write(`./public/media/${newName}`);
  return newName;
};
 
export const cadastro = async (req, res) => {
    try {
      const data = req.body;
      const user = await findUserByEmail(data.email);
      if (user) {
        res.status(500).json({
          error: "Email already exists!",
        });
        return;
      }
      const passwordHash = await bcrypt.hash(data.password_hash, 10);
 
      // Criar o usuário
      await createUser(
        {
          name: data.name,
          email: data.email,
          passwordHash,
          adm: data.adm,
          imagem: []
        },
      );
 
      if (req.files) {
        for (let i = 0; i < req.files.imagem.length; i++) {
          if (
            ["image/jpeg", "image/jpg", "image/png"].includes(
              req.files.imagem[i].mimetype
            )
          ) {
            let url = await addImage(req.files.imagem[i].data);
            data.signup.push({
              url,
              default: false,
            });
          }
        }
      } else {
        let url = `${process.env.BASE}/media/default.png`;
        data.sigup.push({
          url,
          default: false,
        });
      }
      res.status(201).json("Usuário Criado");
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to create user", message: error.message });
    }
  };
  export const signin = async (req, res) => {
    try {
      const data = req.body;
      // Verificar se o email existe
      const user = await findUserByEmail(data.email);
      if (!user) {
        res.status(500).json({ error: "Email or password invalid!" });
        return;
      }
      // Verificar se a senha está correta
      const match = await bcrypt.compare(data.password_hash, user.passwordHash);
      if (!match) {
        res.status(500).json({ error: "Email or password invalid!" });
        return;
      }
      // Retornar o status
      res.status(200).json({ id: user.id });
    } catch (error) {
      res.status(500).json({ error: "Failed to log in", message: error.message });
    }
  };