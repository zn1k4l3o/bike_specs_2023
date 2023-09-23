const { MongoClient, ObjectId } = require("mongodb");

export default async function handler(req, res) {
  const { itemId } = req.query;

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();

    const database = client.db("test");
    const collection = database.collection("models_images");

    const projection = {
      Brand: 0,
      Model: 0,
      Year: 0,
      Category: 0,
      Rating: 0,
      "Displacement (ccm)": 0,
      "Power (hp)": 0,
      "Torque (Nm)": 0,
      "Engine cylinder": 0,
      "Engine stroke": 0,
      Gearbox: 0,
      "Bore (mm)": 0,
      "Stroke (mm)": 0,
      "Fuel capacity (lts)": 0,
      "Fuel system": 0,
      "Fuel control": 0,
      "Cooling system": 0,
      "Transmission type": 0,
      "Dry weight (kg)": 0,
      "Wheelbase (mm)": 0,
      "Seat height (mm)": 0,
      "Front brakes": 0,
      "Rear brakes": 0,
      "Front tire": 0,
      "Rear tire": 0,
      "Front suspension": 0,
      "Rear suspension": 0,
      "Color options": 0,
    };
    const item = await collection.findOne(
      { _id: new ObjectId(itemId) },
      { projection: projection }
    );

    if (!item) {
      console.log("Item not found");
      res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await client.close();
  }
}
