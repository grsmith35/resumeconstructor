const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const fs = require('fs');
const {Document, Packer, Paragraph} = require('docx');
const { saveAs } = require('file-saver');
const docx = require('docx')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/create', (req, res) => {
    const doc = new docx.Document({
        sections: [{
            properties: {},
            children: [
                new docx.Paragraph({
                    children: [
                        new docx.TextRun("Hello World"),
                        new docx.TextRun({
                            text: "Foo Bar",
                            bold: true,
                        }),
                        new docx.TextRun({
                            text: "\tGithub is the best",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }],
    });
    docx.Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync('/resumes/downloadedresume.docx', buffer)
    }) 
    res.json(req.body);
})

app.get('*', (req, res) => {
    res.sendFile('index.html');
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})