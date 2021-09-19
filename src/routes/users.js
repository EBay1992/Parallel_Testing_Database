const express = require("express");
const router = express.Router();
const UserRepo = require("../repos/user-repo");

router.get("/users", async (req, res) => {
  const users = await UserRepo.find();

  res.send(users);
});
router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await UserRepo.findById(id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("not found");
  }
});

router.post("/users", async (req, res) => {
  const { username, bio } = req.body;
  const user = await UserRepo.insert(username, bio);
  res.status(201).send(user);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;

  const user = await UserRepo.update(id, username, bio);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("not found");
  }
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await UserRepo.delete(id);
  if (deletedUser) {
    res.send("the user successfully deleted");
  } else {
    res.status(404).send("not found");
  }
});

module.exports = router;
