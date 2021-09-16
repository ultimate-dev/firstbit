const multer = require("multer");

const memory = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});

const disk = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "compress/uploads");
  },
  filename: function (req, file, callback) {
    let ext = file.mimetype.split("/")[1];
    callback(null, Date.now() + "." + ext);
  },
});

module.exports = (type) => {
  if (type == "memory")
    return multer({ storage: memory, limits: { fieldSize: 100 * 1024 * 1024 } });
  else if (type == "disk")
    return multer({ storage: disk, limits: { fieldSize: 100 * 1024 * 1024 } });
  else
    return multer({ storage: memory, limits: { fieldSize: 100 * 1024 * 1024 } });
};
