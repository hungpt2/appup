var usersData = require('./usersdata');

module.exports = (app, baseurl) => {
    
    // Get All users
    app.get(baseurl+'/user', function (req, res) {
        return res.json(usersData.usersData);
    });

    // Get specific user
    app.get(baseurl+'/user/:userId', function (req, res) {
        return res.json(usersData.usersData[0]);
    });

    // Create User
    app.post(baseurl+'/user', function (req, res) {
        console.log("========> Create User :: ", req.body);

        // Validate request
        if(!req.body) {
            return res.status(400).send({
                message: "Content cannot be empty"
            });
        }

        if(req.body.first_name == 'madan') {
            return res.status(200).send({
                userId: 10
            });
        }
        else {
            return res.status(500).send({
                message: "Error occurred while saving user"
            });
        }
    });
    
    // Update User
    app.put(baseurl+'/user', function (req, res) {
        console.log("========> Update User :: ", req.body);

        return res.status(200).send({
            userId: 10
        });
    });

    // Delete User
    app.delete(baseurl+'/user/:userId', function (req, res) {
        console.log("========> Update User :: ", req.body);

        return res.status(200).send();
    });
}