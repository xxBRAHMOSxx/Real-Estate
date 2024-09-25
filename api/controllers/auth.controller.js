import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    //destructuring the req
    const { username, email, password } = req.body;

    try {

        //HASH THE PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        //CREATE NEW USER AND SAVE TO DATA BASE
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })
        console.log(newUser);
        res.status(201).json({ message: "user created successfully" })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "there was an error creating new user" })
    }
};
export const login = async (req, res) => {

    const { username, password } = req.body;

    try {
        //check if user exists
        const user = await prisma.user.findUnique({
            where: { username }
        });
        if (!user) return res.status(401).json({ message: "Invalid Credentials" });

        //check password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials" });

        //generate cookie tokens and send to users
        // res.setHeader("Set-Cookie","test=" + "myvalue").json({message:"successful"})
        res.cookie("test2", "myValue2", {
            httpOnly: true
            //secure:true  (use in production mode)
        }).status(200).json({ message: "login successful" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failure to login" });
    }

};
export const logout = (req, res) => {

};
