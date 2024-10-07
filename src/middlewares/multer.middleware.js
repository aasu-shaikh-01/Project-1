import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // const unlinkSyncfix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "_" + unlinkSyncfix);
  },
});

const upload = multer({ storage: storage });
