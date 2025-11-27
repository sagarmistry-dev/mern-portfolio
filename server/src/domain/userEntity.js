class UserEntity {
  constructor({ name, email, password, role = "admin" }) {
    this.name = name;
    this.email = email;
    this.password = password; 
    this.role = role;
  }
}

module.exports = UserEntity;
