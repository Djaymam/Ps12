const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    const authToken = req.headers.authorization;
    //console.log('Header', authToken);
    // const token = authToken.split(' ');
    // console.log('TOKEN', token[1]);

    jwt.verify(authToken,process.env.AUTH_KEY, function (err, decoded) {
        //console.log(err, decoded);
        if (err) {
            return res.status(401).json({
                error: 'Token Invalid'
            })
        }

        req.userId = decoded.id;
        //console.log('User ID', decoded.id);
        next();
    });
}