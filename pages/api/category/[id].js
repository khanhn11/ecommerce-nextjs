import dbConnect from "@/util/mongo";
import Category from "@/models/Category";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const category = await Category.findById(id);
        if (!category) {
          return res.status(404).json({ message: "Category not found." });
        }
        res.status(200).json(category);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "An error occurred while getting the category." });
      }
      break;

    case "PUT":
      try {
        const category = await Category.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json(category);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while updating the category.",
        });
      }
      break;

    case "DELETE":
      try {
        const category = await Category.findById(id);
        if (!category) {
          return res.status(404).json({ message: "Category not found." });
        }
        await Category.findByIdAndDelete(id);
        res.status(200).json({ message: "Successfully deleted the category." });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "An error occurred while deleting the category." });
      }
  }
};

export default handler;
