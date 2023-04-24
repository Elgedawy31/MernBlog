const { UserModel } = require("../models/User.models.js");
const bcrypt = require("bcryptjs");

const RegisterFunc = async (req, res) => {
  try {
    const fileName = `${req.protocol}://${req.headers.host}/${req.destFile}/${req.file.filename}`;

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new UserModel({
      password: hash,
      username: req.body.username,
      email: req.body.email,
      image: fileName,
    });

    const userData = await newUser.save();

   

    res.status(200).json({ username:userData.username , id:userData._id , avatar:userData.image });
  } catch (error) {
    res.status(500).json({ error, message: "from register " });
  }
};

const Loginfunc = async (req, res) => {
  const { username, password } = req.body;
  try {
    const UserData = await UserModel.findOne({ username: username });

    const passOk = bcrypt.compareSync(password, UserData.password);

    if (passOk) {
      res.status(200).json({ username:UserData.username , id:UserData._id , avatar:UserData.image });

    } else {
      res.status(500).json({ message: "passwordNotFounded" });
    }
  } catch (error) {
    res.status(500).json({ error, message: "Username Not Founded" });
  }
};


module.exports = { RegisterFunc, Loginfunc };
