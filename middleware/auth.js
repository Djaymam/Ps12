const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    const authToken = req.headers.authorization;
    console.log('Header', authToken);
    // const token = authToken.split(' ');
    // console.log('TOKEN', token[1]);

    jwt.verify(authToken, "d3ddc7b93c75f7edc3fb6c8d04de8322e35cb6f8", function (err, decoded) {
        console.log(err, decoded);
        if (err) {
            return res.status(401).json({
                error: 'Token Invalid'
            })
        }

        req.userId = decoded.id;
        console.log('User ID', decoded.id);
        next();
    });
}