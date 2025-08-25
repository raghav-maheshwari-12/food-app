const testUserController = (req, res) => {
    console.log("✅ testUserController was called");
  try {
    res.status(200).send("<h1>Test user Data</h1>");
  } catch (error) {
    console.log("error In Test API", error);
  }
};
// exports
module.exports = { testUserController };


