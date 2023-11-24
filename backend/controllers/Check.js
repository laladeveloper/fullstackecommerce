const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.check = catchAsyncErrors(async (req, res, next) => {
          
      res
        .status(200)
        .json({ success: true, message:"server is working" });
    });
    