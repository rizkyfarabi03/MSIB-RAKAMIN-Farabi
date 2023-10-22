const multer = require('multer');
const path = require('path');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    }
});

const multerMiddleware = multer({ storage: diskStorage }).single('photo');

module.exports = multerMiddleware;