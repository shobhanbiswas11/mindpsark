const express = require("express");
const { Donor, validateDonor, DonorPropertyArr } = require("../models/donor");
const router = express.Router();
const _ = require("lodash");
const paginate = require("../middlewares/paginate");

router.get("/", paginate(Donor), (req, res) => {
  res.send(res.paginatedResult);
});

router.post("/", async (req, res) => {
  const err = validateDonor(req.body);
  if (err) return res.header(400).send(err);

  // in this point The form Validation in Complete, Now I Can Store The data in the database
  let donor = new Donor(_.pick(req.body, DonorPropertyArr));

  // Saving the donor to the database
  try {
    donor = await donor.addToDatabase();
    res.header("x-auth", donor.generateJwt()).send(`Welcome ${donor.name}`);
  } catch (error) {
    console.log(error);
  }
});

// Handling Login request
router.post("/login", async ({ body }, res) => {
  // Checking if the username and password is correct or not
  let user = await Donor.findOne({
    username: body.username,
    password: body.password
  });

  if (!user) return res.header(400).send("username or password is wrong");

  // Sending Json Web Token
  res.header("x-auth", user.generateJwt()).send(`Welcome ${user.name}`);
});

module.exports = router;
