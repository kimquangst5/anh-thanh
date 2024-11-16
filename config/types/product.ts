import { ERole, ESort } from "../types";
import { ObjectId } from "mongoose";
import { TSort } from "./repository";
import { IBoothType, ICategory, IProduct } from "../type";

export type TSortProduct = {
    createdAt?: ESort;
    sold?: ESort;
    averageRating?: ESort;
    status?: ESort;
    price: ESort;
    name: ESort;
};

export type TFilterProduct = {
    hot?: string;
    search?: string;
    category?: ObjectId[];
    booth?: ObjectId;
    minPrice?: string;
    maxPrice?: string;
    averageRating?: number[];
    sellerId?: ObjectId;
    sort?: TSort;
    limit?: number;
    page?: number;
    count?: boolean;
    byRole?: ERole;
};

export type TQueryProduct = TFilterProduct & {
    limit?: string;
    page?: string;
};

export interface Product {
    productId: string;
    attributeId: string;
    quantity: number;
    price: number;
    warranty: number;
    totalPrice: number;
    userId: string;
    requiredComplete: number | null;
}

export interface ProductWithNote extends Product {
    content: string;
}
export type TFilterProductAdmin = {
    status?: number;
    name?: string;
    from?: Date;
    to?: Date;
    limit?: number;
    page?: number;
    isAcceptStatus?: boolean;
};

export type TFilterProductUser = {
    status?: number;
    name?: string;
    category?: string;
    booth?: string;
    minPrice?: number;
    maxPrice?: number;
    averageRating?: number;
    sellerId?: string;
    limit?: number;
    page?: number;
    sort?: string;
};

export type TProductCart = IProduct & {
    categoryId: ICategory & {
        boothTypeId: IBoothType;
    };
};
