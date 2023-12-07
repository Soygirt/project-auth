import { User } from "./models";

// Middleware to authenticate the user on login. Next() makes the program continue to the next middleware
export const authenticateUser = async (req, res, next) => {
    
    const accessToken = req.header("Authorisation");
    try {
        const user = await User.findOne({ accessToken: accessToken });
        if (user) {
            req.user = user ;
            next();
        } else {
            res.status(401).json({ success: false, response: "Please log in" }); 
        }
    } catch (e) {
        res.status(500).json({ success: false, response: e.message })
    }
};