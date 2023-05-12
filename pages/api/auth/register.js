import Account from "@/models/Account";
import User from "@/models/User";
import { EmailToken } from "@/util/jwt.util";
import { sendConfirmationEmail } from "@/util/nodemailer.util";
import CryptoJS from "crypto-js";
import dbConnect from "@/util/mongo";

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;

  if (method === "POST") {
    try {
      const {
        firstName,
        lastName,
        address,
        phoneNumber,
        username,
        email,
        password,
      } = req.body;

      const existingAccount = await Account.findOne({
        $or: [{ username }, { email }],
      });

      if (existingAccount) {
        return res.status(400).send({
          error: "Username or email already in use",
        });
      }

      const hashedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.PASS_SEC
      ).toString();

      const account = await Account.create({
        username,
        email,
        password: hashedPassword,
      });

      //return res.status(200).send(account);

      const user = await User.create({
        firstName,
        lastName,
        address,
        phoneNumber,
        account: account._id,
      });

      // const confirmationCode = EmailToken(account._id);
      // sendConfirmationEmail(firstName, email, account._id, confirmationCode);

      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
};

export default handler;
