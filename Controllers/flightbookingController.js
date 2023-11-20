import FlightBooking from './../models/flightBooking.js';

// create new booking
export const createBooking = async (req, res) => {
   const newBooking = new FlightBooking(req.body);

   try {
      const savedBooking = await newBooking.save();

      res.status(200).json({ success: true, message: "Your tour is booked!", data: savedBooking });
   } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Internal server error!" });
   }
};

// get single booking
export const getBooking = async (req, res) => {
   const id = req.params.id;

   try {
      const book = await FlightBooking.findById(id);

      if (book) {
         res.status(200).json({ success: true, message: "Successful!", data: book });
      } else {
         res.status(404).json({ success: false, message: "Not Found!" });
      }
   } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error!" });
   }
};

// get all booking
export const getAllBooking = async (req, res) => {
   try {
      const books = await FlightBooking.find();

      res.status(200).json({ success: true, message: "Successful!", data: books });
   } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error!" });
   }
};
