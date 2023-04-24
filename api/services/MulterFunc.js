const multer = require("multer");
const path = require("path");

function multerFunc() {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      req.destFile = "uploads";
      cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
      const fullname = new Date().getMilliseconds() + "-" + file.originalname;

      cb(null, fullname);
    },
  });

  const upload = multer({ dest: path.join(__dirname, "../uploads"), storage });

  return upload;
}

module.exports = multerFunc;
