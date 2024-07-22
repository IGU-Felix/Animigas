import { createUser , findUserByEmail } from "../model/User.js"
import bcrypt from 'bcrypt'

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
        },
      );
  
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
  