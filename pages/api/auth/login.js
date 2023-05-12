import dbConnect from "@/util/mongo";
import Account from "@/models/Account";
const { AccessToken } = require("@/util/jwt.util");
const CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method == "POST") {
    try {
      const { username, password } = req.body;
      const account = await Account.findOne({ username });

      //console.log(account);
      //response if there is no user account

      if (!account) {
        return res.status(401).json("Invalid Username!");
      }

      // response if user is not confirmed
      if (!account.isVerified) {
        return res.status(401).json("Please confirm your email to login");
      }

      // decode password
      const hashedPassword = CryptoJS.AES.decrypt(
        account.password,
        process.env.PASS_SEC
      );

      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      // compare password
      if (OriginalPassword !== password) {
        return res.status(401).json("Invalid Password!");
      }

      // assign access token to account
      const token = AccessToken(account.username, account.isAdmin);

      // set token to cookie
      res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/`);

      return res.status(200).json({
        id: account._id,
        username: account.username,
        isAdmin: account.isAdmin,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error logging in" });
    }
  }
};

export default handler;
