import jwt from 'jsonwebtoken';

const getToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}

const authMiddleware = {
    verifyToken: (req, res, next) => {
        let token = getToken(req);
        if (!token) {
            return res.status(401).send({
                success: false,
                message: 'Unauthorized'
            });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    }
}

export default authMiddleware;