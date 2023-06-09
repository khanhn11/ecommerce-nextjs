import dbConnect from "@/util/mongo";
import Category from "@/models/Category";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const cateogires = await Category.find();
        res.status(200).json(cateogires);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while retrieving categories.",
        });
      }
      break;

    case "POST":
      try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "An error occurred while creating a category.",
        });
      }
      break;
  }
};

export default handler;
