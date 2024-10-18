const { Router } = require("express");
const {
  getUserFavourites,
  addToFavourite,
  removeFavourite,
  getAllFavourites,
} = require("../controllers/favourite");

const router = Router();

router.get("/:id", getUserFavourites);
router.post("/add", addToFavourite);
router.post("/remove", removeFavourite);
router.get("/", getAllFavourites);

module.exports = router;
