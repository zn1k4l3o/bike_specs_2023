import { Int32 } from "mongodb";
import mongoose, { Schema } from "mongoose";

const bikeSchema = new Schema(
  {
    Brand: String,
    Model: String,
    Year: Int32,
    Images: {
        type: [String]
    }
  },
  {
    timestamps: true,
  }
);

const Bike = mongoose.models.Bike || mongoose.model("Bike", bikeSchema);

export default Bike;