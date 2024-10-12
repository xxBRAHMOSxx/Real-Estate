import jwt from "jsonwebtoken"

export const shouldBeLoggedIn = async (req, res) => {
    console.log(req.userId)
    res.status(200).json({ message: "successfyll" })
}

export const shouldBeAdmin = async (req, res) => {
    const token = req.cookies.token
    if (!token) return res.status(401).json({ message: "login first" })
    //now verify if the token is valid
    //in this case the payload is user information
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) return res.status(403).json({ message: "Token is not valid" })
        if (!payload.isAdmin) return res.status(403).json({ message: "outside your paygrade" })
    })
    res.status(200).json({ message: "successfyll" })
}