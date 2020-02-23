const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

const appointmentSchema = new Schema({
  startDatetime: {
    type: Date,
    required: "Must have a start date and time scheduled for appointment"
  },
  endDatetime: {
    type: Date,
    required: "Must have an end date and time scheduled for appointment"
  },
  detail: {
    type: String
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "Must be assigned to an employee"
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: "Must assign appointment to a customer"
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "Must log who created the appointment"
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "Must log who updated the appointment"
  }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
