import dbConnect from "@/util/mongo";
import Order from "@/models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const order = await Order.findById(id);
        if (!order) {
          res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "An error occurred while getting the order." });
      }
      break;

    case "PUT":
      try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json(order);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while updating the order.",
        });
      }
      break;

    case "DELETE":
      try {
        const order = await Order.findById(id);
        if (!order) {
          return res.status(404).json({ message: "Order not found." });
        }
        await Order.findByIdAndDelete(id);
        res.status(200).json({ message: "Successfully deleted the order" });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "An error occurred while deleting the order." });
      }
  }
};

export default handler;
