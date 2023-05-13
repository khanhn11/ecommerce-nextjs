import dbConnect from "@/util/mongo";
import Account from "@/models/Account";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const accounts = await Account.find();
      res.status(200).json(accounts);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occured while retrieving accounts." });
    }
  }
};

export default handler;
