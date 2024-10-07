import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "chai aur code",
  });
});

// const registerAadmi = async (req, res) => {
//   res.status(200).json({
//     message: "ok",
//   });
// };
// export { registerAadmi };

export { registerUser };
