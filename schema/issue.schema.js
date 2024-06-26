import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
    {
      title: {
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
  
export const Issue = mongoose.model("issue", issueSchema);