import mongoose from "mongoose";

const flightbookingSchema = new mongoose.Schema(
   {
      userId: {
         type: String
      }, 
      userEmail: {
         type: String
      },
      airlines: {
         type: String,
         required: true,
      },
      fullName: {
         type: String,
         required: true,
      },
      NoOfpassengers: {
         type: Number,
         required: true
      },
      phone: {
         type: Number,
         required: true
      },
      bookAt: {
         type: Date,
         required: true
      },
      departure:{
        type:String,
        required:true
      },
      destination:{
        type:String,
        required:true
      },
      bill:{
         type:Number,
         required:true
      }

   },
   { timestamps: true }
);

export default mongoose.model("FlightBooking", flightbookingSchema);
