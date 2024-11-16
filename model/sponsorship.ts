import mongoose, { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { ISponsorship } from "type";
import { EPriorityLevel, EStatusSponsorship } from "../types";

const SponsorshipSchema = new Schema<ISponsorship>(
    {
        sponsorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
        },
        startDate: {
            type: Number,
        },
        endDate: {
            type: Number,
        },
        priorityLevel: {
            type: Number,
            enum: Object.values(EPriorityLevel).filter(
                (value) => typeof value === "number"
            ),
            default: EPriorityLevel.NORMAL,
        },
        status: {
            type: Number,
            enum: Object.values(EStatusSponsorship).filter(
                (value) => typeof value === "number"
            ),
            default: EStatusSponsorship.PENDING,
        },
    },
    configSchema
);

export default model<ISponsorship>("sponsorship", SponsorshipSchema);
