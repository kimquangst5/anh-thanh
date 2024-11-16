import { configSchema } from "../configs/modules";
import { Schema, model } from "mongoose";
import { IWalletConfig } from "../type";

const WalletConfigSchema = new Schema<IWalletConfig>(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
    },
    configSchema
);
export default model<IWalletConfig>("walletConfig", WalletConfigSchema);
