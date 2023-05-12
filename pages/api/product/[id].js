import dbConnect from "@/util/mongo";
import Product from "@/models/Product";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "An error occurred while getting the product." });
      }
      break;

    case "PUT":
      try {
        const product = await Product.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json(product);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while updating the product.",
        });
      }
      break;

    case "DELETE":
      try {
        const product = await Product.findById(id);
        if (!product) {
          return res.status(404).json({ message: "Product not found." });
        }
        await Product.findByIdAndDelete(id);
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
