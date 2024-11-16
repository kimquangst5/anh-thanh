import { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { IReport } from "type";

const reportSchema = new Schema<IReport>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        content: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        subject: {
            type: String,
            required: true,
        },
    },
    configSchema
);

export default model<IReport>("report", reportSchema);
