import { EStatusHistoryOrder, EStatusOrder } from "./index";
import { ObjectId } from "mongoose";
import { Product, ProductWithNote } from "./product";
import { IProduct, IOrder, IUser, IBoothType, ICategory } from "../type";

export interface ReqBodyCreateOrder {
    products: ProductWithNote[];
    totalPrice: number;
}

export interface HistoryOrder {
    orderId: ObjectId;
    content: string;
    file: string[];
    status: EStatusHistoryOrder;
    userId: ObjectId;
}

export type IOrderObject = IOrder & {
    productId: IProduct;
};

export type TOrderRefund = IOrder & {
    customerId: ObjectId;
    productId: IProduct & {
        categoryId: ICategory & {
            boothTypeId: IBoothType;
        };
        sellerId: ObjectId;
    };
};
