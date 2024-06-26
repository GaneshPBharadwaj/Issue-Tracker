import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      issues: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "issue",
        },
      ],
      labels: [
        {
          type: String,
        },
      ],
    },
    {
      timestamps: true,
    }
);
  
export const Project = mongoose.model("project", projectSchema);