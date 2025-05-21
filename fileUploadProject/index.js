const express = require('express')
const path = require('path')
const multer = require('multer')


const app = express();
const fs = require('fs');
const uploadPath = path.join(__dirname, 'upload');

// Set up Storage Engine 


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');    // uploads Folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
})


const upload = multer({storage})

// upload endpoint 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.post('/upload', upload.single('file'), (req, res) => {

    res.json({
        message: 'File Uploaded Successfully',
        file: req.file,
    })
})




// Start Server 


app.listen(3000, () => {
    console.log(`Server is Running.....${3000}`);
    
})