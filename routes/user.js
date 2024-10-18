const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getYourProfile,
} = require("../controllers/user");

const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.get("/:id/my-profile", getYourProfile);

module.exports = router;
