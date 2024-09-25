import bcrypt from "bcrypt";

export const register = async (req, res) => {
    //destructuring the req
    const {username,email,password} = req.body;

    //HASH THE PASSWORD
    const hashedPassword =await bcrypt.hash(password,10);
    console.log(hashedPassword);
    //CREATE NEW USER AND SAVE TO DATA BASE
}
export const login = (req, res) => {

}
export const logout = (req, res) => {

}