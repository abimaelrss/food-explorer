const knex = require("../database/knex");

const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const checkUserExists = await knex("users").where({ email });

    if (checkUserExists.length > 0) {
      throw new AppError("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

     await knex("users").insert({ name, email, password: hashedPassword });

    return response.status(201).json();
  }

  // async uptade(request, response) {
  //   const { name, email, password, old_password } = request.body;
  //   const user_id = request.user.id;

  //   const database = await sqliteConnection();
  //   const user = await database.get("SELECT * FROM users WHERE id = (?)", [
  //     user_id,
  //   ]);

  //   if (!user) {
  //     throw new AppError("Usuário não encontrado!");
  //   }

  //   const userWithUpdatedEmail = await database.get(
  //     "SELECT * FROM users WHERE email = (?)",
  //     [email]
  //   );

  //   if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
  //     throw new AppError("Este e-mail já está em uso!");
  //   }

  //   user.name = name;
  //   user.email = email;

  //   if (password && old_password) {
  //     throw new AppError(
  //       "Você precisa informar a senha antiga para definir a nova!"
  //     );
  //   }

  //   if (password && old_password) {
  //     const checkOldPassword = await compare(old_password, user.password);

  //     if (!checkOldPassword) {
  //       throw new AppError("A senha antiga não confere!");
  //     }

  //     user.password = await hash(password, 8);
  //   }

  //   await database.run(
  //     `UPDATE users SET 
  //     name = ?, 
  //     email = ?, 
  //     password = ?, 
  //     updated_at = DATETIME('now') 
  //     WHERE id = ?`,
  //     [user.name, user.email, user.password, user_id]
  //   );

  //   return response.json();
  // }
}

module.exports = UserController;
