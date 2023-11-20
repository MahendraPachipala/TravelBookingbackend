import mongoose from "mongoose";

const hotelbookingSchema = new mongoose.Schema(
   {
      userId: {
         type: String
      }, 
      userEmail: {
         type: String
      },
      HotelName: {
         type: String,
         required: true,
      },
      fullName: {
         type: String,
         required: true,
      },
      guestSize: {
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
      bill:{
         type:Number,
         required:true
      }

   },
   { timestamps: true }
);

export default mongoose.model("hotelBooking", hotelbookingSchema);
