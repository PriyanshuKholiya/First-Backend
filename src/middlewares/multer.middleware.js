import multer from "multer";

const storage = multer.diskStorage({ //how - with what filename and where - destination files are stored
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

export const upload = multer({
    storage, 
});

