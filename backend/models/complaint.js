const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema(
  {
    complaintId: { type: String, required: true },
    department: {type: String, required: true},
    description: { type: String, required: true },
    location: [
      {
        district: { type: String, required: true },
        landmark: { type: String },
        additionalInfo: { type: String },
      }
    ],
    evidences: { type: any, required: true },
    complaintNote: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", ComplaintSchema);