const router = require("express").Router();
// Import all of the API routes from /api/index.js
const apiRoutes = require("./api");

// Add prefix of `/api` to all of the api routes imported
router.use("/api", apiRoutes);

router.use((req, res) => {
  return res.send("Error");
});

module.exports = router;
