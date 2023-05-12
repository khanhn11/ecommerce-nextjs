import dbConnect from "@/util/mongo";
import Product from "@/models/Product";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while retrieving products.",
        });
      }
      break;

    case "POST":
      try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while creating a product.",
        });
      }
      break;
  }
};

export default handler;
