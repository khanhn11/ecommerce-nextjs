import dbConnect from "@/util/mongo";
import Order from "@/models/Order";

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const orders = await Order.find();
        res.status(200).json(orders);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while retrieving products.",
        });
      }
      break;

    case "POST":
      try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
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
