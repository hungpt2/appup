'use strict';
var multer = require('multer');

var appRoot = process.env.PWD
//console.log("======> App Root :: ",appRoot);

// Multipart upload using multer
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, appRoot+'/examples-server/public/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
});

module.exports = function(app) {
    var template = require('../controllers/controller');

    // Datatable Route
    app.route('/datatable')
        .get(template.list_datatable);

    // Dropdown Route
    app.route('/dropdown')
        .get(template.list_dropdown);

    // Upload image file
    var upload = multer({storage: storage}).single('files')
    app.post('/uploadImage', function (req, res) {
        console.log("===> fileUpload");
        upload(req, res, function (err) {
            console.log("======> requested file :: ",req.file);
            console.log("===> error :: ",err);
            if (err) {
                res.status(500);
                res.json({'message': 'Error occurred while uploading'});
            }

           var uploadedFileUrl = 'http://localhost:3000/uploads/'+req.file.originalname;
            res.json({
                'message': 'File uploaded successfully',
                'src': uploadedFileUrl
            });
        })
    });

};