const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const Jwt = require("jsonwebtoken");
const _ = require("lodash");

/*

{
	"name" : "Saikat Biswas",
	"bloodGroup" : "O+",
	"email" : "saiktabiswas145@gmail.com",
	"age" : 26,
	"gender" : "male",
	"state" : "West Bengal",
	"district": "Kolkata",
	"contactNumber" : 8001183565,
	"alternateNumber" : 8584942395,
	"whatsappNumber" : 8001183565,
	"username" : "saikat11",
	"password" : "12345"
}


 */

const schema = Joi.object({
  name: Joi.string()
    .required()
    .min(2)
    .max(30),
  bloodGroup: Joi.string()
    .required()
    .valid("A+", "A-", "O+", "O-", "AB+", "AB-", "B+", "B-"),
  age: Joi.number()
    .integer()
    .min(18)
    .max(100)
    .required(),
  gender: Joi.valid("male", "female", "other").required(),
  state: Joi.string().required(),
  district: Joi.string().required(),
  address: Joi.string(),
  contactNumber: Joi.number()
    .integer()
    .required(),
  alternateNumber: Joi.number().integer(),
  whatsappNumber: Joi.number().integer(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] }
  }),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required()
});

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodGroup: {
    type: String,
    required: true,
    enum: ["A+", "A-", "O+", "O-", "AB+", "AB-", "B+", "B-"]
  },
  age: { type: Number, required: true },
  gender: { type: String, required: true, enum: ["male", "female", "other"] },
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: String,
  contactNumber: { type: Number, required: true },
  alternateNumber: Number,
  whatsappNumber: Number,
  email: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now }
});

// Attaching a method to the prototype of the object created by the model
donorSchema.methods.addToDatabase = async function() {
  return await this.save();
};

// Making A array of Donor Property
const DonorPropertyArr = [];
for (const property in donorSchema.tree) {
  if (donorSchema.tree.hasOwnProperty(property)) {
    property !== "_id" && DonorPropertyArr.push(property);
  }
}

// Attaching JWT making method
donorSchema.methods.generateJwt = function() {
  return Jwt.sign(_.pick(this, ["_id", "username"]), "secretKey");
};

// Making Model
const Donor = mongoose.model("Donor", donorSchema);

function validateDonor(donor) {
  const { error } = schema.validate(donor, { abortEarly: true });
  if (error) return error.details[0].message;
  else return null;
}

module.exports = {
  Donor,
  validateDonor,
  DonorPropertyArr
};
