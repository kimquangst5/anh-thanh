import { Schema, model } from "mongoose";
import { configSchema } from "../configs/modules";
import { IConversation } from "../type";

const conversationSchema = new Schema<IConversation>(
    {
        members: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            },
        ],
        lastMessage: {
            type: Schema.Types.ObjectId,
            ref: "message",
        },
    },
    configSchema
);

export default model<IConversation>("conversation", conversationSchema);
