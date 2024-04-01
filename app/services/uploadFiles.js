const Multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");


const fileStorage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/files");
  },

  filename: (req, file, cb) => {
    cb(null, uuidv4() + Date.now() + "." + file.mimetype.split("/")[1]);
  },
});

exports.uploadFiles = Multer({
  storage: fileStorage,
});

function createFileStorage(storagePath) {
  return Multer.diskStorage({
    destination: (req, file, cb) => {
      if (!fs.existsSync(storagePath)) {
        fs.mkdirSync(storagePath, { recursive: true });
      }
      cb(null, storagePath);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const filename =
        path.basename(file.originalname, ext) + "-" + Date.now() + ext;
      cb(null, filename);
    },
  });
}

exports.uploadFilesWithStorageName = (storageName) => {
  const storagePath = `static/${storageName}`;
  const fileStorage = createFileStorage(storagePath);
  return Multer({ storage: fileStorage });
};
