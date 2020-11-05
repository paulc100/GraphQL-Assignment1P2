const cloudinary = require('cloudinary').v2
const bodyParser = require('body-parser')

const startServer = async () => {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    cloudinary.config({
        cloud_name: "paulacit",
        api_key: "957697833911882",
        api_secret: "RZaIdkxwN4AG4fuMVF5djGYyGEc",
    });

    app.get("/", (req, res) => {
        const data = {
            image: req.body.image
        }

        cloudinary.uploader.upload(data.image)
            .then((results) => {
                res.status(200).send({
                    message: "success",
                    results
                })
            }).catch((e) => {
                res.status(500).send({
                    message: "failure",
                    e
                })
            })
    })

    app.listen(4000, () => {
        console.log('App is running on localhost:4000')
    })
};

startServer();