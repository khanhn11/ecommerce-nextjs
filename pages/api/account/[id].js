import dbConnect from "@/util/mongo";
import Account from "@/models/Account";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const account = await Account.findById(id);
        if (!account) {
          res.status(404).json({ message: "Account not found" });
        }
        res.status(200).json(account);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "An error occurred while getting the account." });
      }
      break;

    case "PUT":
      try {
        const account = await Account.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        res.status(200).json(account);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while updating the account.",
        });
      }
      break;

    case "DELETE":
      try {
        const account = await Account.findById(id);

        if (!account) {
          return res.status(404).json({ message: "Account not found." });
        }

        await Account.findByIdAndDelete(id);
        res.status(200).json({ message: "Successfully deleted the product" });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "An error occurred while deleting the product." });
      }
  }
};

export default handler;
