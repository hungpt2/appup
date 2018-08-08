module.exports = (app, baseurl) => {
    
    // Login request
    app.post(baseurl+'/login', function (req, res) {

        console.log("Login request body", req.body);

        // Validate request
        if(!req.body) {
            return res.status(400).send({
                message: "Content cannot be empty"
            });
        }

        var loginRequest = req.body;

        if(loginRequest.username == "madan") {
            return res.status(200).send({
                message: "Hello Madan"
            });
        }
        else {
            return res.status(401).send({
                message: "Invalid Credentials"
            });
        }        
    });
};