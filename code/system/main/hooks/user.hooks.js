const Bcrypt = require("bcrypt");

const Hooks = (Schema) => {
  Schema.pre("save", async function (Next) {
    try {
      const User = this;
      if (User.isModified("Password")) {
        const Salt = await Bcrypt.genSalt(10);
        User.Password = await Bcrypt.hash(User.Password, Salt);
      }
      if (User.Pin) {
        if (User.isModified("Pin")) {
          const Salt = await Bcrypt.genSalt(10);
          User.Pin = await Bcrypt.hash(User.Pin, Salt);
        }
      }
      Next();
    } catch (error) {
      Next(error);
    }
  });
};

module.exports = { UserHooks: Hooks };
