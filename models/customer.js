const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: "First Name is Required",
    minlength: [1, 'First name must be at least 1 character.']
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: "Last Name is Required",
    minlength: [1, 'Last name must be at least 1 character.']
  },
  nickname: {
    type: String,
  },
  email: {
    type: String,
    required: "Email is Required",
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  phoneNumber: {
    type: String,
    required: "Phone number is Required",
    match: [/^\b\d{3}[-.]?\d{3}[-.]?\d{4}\b$/, "Please enter a valid phone "],
  },
  numberType: {
    type: String
    // required: "Phone type is Required",
    // choice: [

    // ]
  },
  promoContactByEmail: {
    type: Boolean,
    required: "",
    default: false
  },
  promoContactBySMS: {
    type: Boolean,
    required: "",
    default: false
  },
  appContactByEmail: {
    type: Boolean,
    required: "",
    default: true
  },
  appContactBySMS: {
    type: Boolean,
    required: "",
    default: false
  },
  streetAddress: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipcode: {
    type: String
  },
  zip4: {
    type: String
  },
  isLead: {
    type: Boolean,
    default: true
  },
  leadType: {
    type: String
  },
  leadSource: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  },
  notes: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Note"
    }
  ],
  appointments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment"
    }
  ]
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
