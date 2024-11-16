import { response } from "./../helpers/index";
import { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { IMessage } from "../type";
import { EStatusMessage } from "../types";

const message = new Schema<IMessage>(
    {
        conversationId: {
            type: Schema.Types.ObjectId,
            ref: "conversation",
        },
        senderId: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        content: {
            type: String,
        },
        type: {
            type: Number,
            enum: Object.values(EStatusMessage).filter(
                (item) => typeof item === "number"
            ),
        },
        readBy: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            },
        ],
    },
    configSchema
);

export default model<IMessage>("message", message);
