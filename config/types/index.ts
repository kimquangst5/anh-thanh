export enum ERole {
    USER = 1,
    SELLER = 2,
    ADMIN = 3,
}
export enum EMethod {
    CLIENT = 1,
    GOOGLE = 2,
}
export enum EStatusUser {
    UNVERIFIED = 1,
    VERIFIED = 2,
    BAN = 3,
}
export enum EStatusSeller {
    ACTIVE = 1,
    INACTIVE = 2,
}
export enum EStatusStock {
    NEGOTIATE = 1,
    EDIT = 2,
}

export enum ESort {
    ASC = "asc",
    DESC = "desc",
}
export enum EStatusOrder {
    PENDING = 1,
    ACCEPT = 2,
    CANCEL = 3,
    COMPLETE = 4,
    DONE = 5,
    DISPUTE = 6,
}

export enum EStatusHistoryOrder {
    PENDING = 1,
    ACCEPT = 2,
    CANCEL = 3,
    DONE = 4,
    DISPUTE = 5,
    REDELIVERY = 6,
    CANCEL_REDELIVERY = 7,
    COMPLETE = 8,
}

export enum EInflowUser {
    DEPOSIT_USDT = 1,
    REFUND_SELLER_ORDER = 2,
    COMMISSION_REF_INTRODUCTION = 3,
    COMMISSION_REF_REFERRED = 4,
    COMMISSION_REF_BUYER_ORDER = 5,
    COMMISSION_REF_BUYER_TOKEN_ORDER = 6,
    COMMISSION_REF_SELLER_ORDER = 7,
    COMMISSION_REF_SELLER_TOKEN_ORDER = 8,
    COMMISSION_BUYER_TOKEN_ORDER = 9,
    COMMISSION_SELLER_TOKEN_ORDER = 10,
    REFUND_ORDER_CANCEL_BUYER = 11,
    REFUND_ORDER_CANCEL_DELIVERY_DISPUTE = 12,
    DEPOSIT_BANKING = 13,
}

export enum EOutflowUser {
    BUY = 1,
    WITHDRAW = 2,
    FEE_ORDER_CANCEL_SELLER = 3,
    FEE_ORDER_CANCEL_DELIVERY_DISPUTE = 4,
}
export enum ETypeFlow {
    INFLOW = 1,
    OUTFLOW = 2,
}
export enum EInflowAdmin {
    NEW_ORDER = 1,
    FEE_ORDER_CANCEL_BUYER = 2,
    FEE_ORDER_CANCEL_DELIVERY_DISPUTE = 3,
}
export enum EOutflowAdmin {
    REFUND_ORDER = 1,
    DISPUTE_REFUND = 2,
    REFUND_REF_TOKEN_INTRO = 3,
    REFUND_REF_TOKEN_REFERRED = 4,
    REFUND_ORDER_CANCEL_BUYER = 5,
    REFUND_ORDER_CANCEL_DELIVERY_DISPUTE = 6,
    REFUND_REF_BUYER_ORDER = 7,
    REFUND_REF_BUYER_TOKEN_ORDER = 8,
    REFUND_REF_SELLER_ORDER = 9,
    REFUND_REF_SELLER_TOKEN_ORDER = 10,
    REFUND_BUYER_TOKEN_ORDER = 11,
    REFUND_SELLER_TOKEN_ORDER = 12,
}
export enum EStatusFlow {
    PENDING = 1,
    COMPLETE = 2,
}
export enum EStyleAttribute {
    NORMAL = 1,
    API = 2,
}
export enum EStatusAttribute {
    PENDING = 1,
    ACCEPT = 2,
    BAN = 3,
    REFUSE = 4,
    CLOSE = 5,
}

export enum EStatusTransaction {
    PENDING = 1,
    DONE = 2,
    REJECT = 3,
}

export enum ETypeWallet {
    META_MASK = "META_MASK",
    TON_KEEPER = "TON_KEEPER",
}

export enum ETypeTransaction {
    USDT = 1,
    BANKING = 2,
}

export enum EStatusMessage {
    SENT = 1,
    RECALL = 2,
    DELETE = 3,
}
export enum EStatusReview {
    UNVERIFIED = 1,
    VERIFIED = 2,
}

export enum ETypeMessage {
    TEXT = 1,
    IMAGE = 2,
}
export enum ETypeOrderRef {
    REFUND_REF_BUYER = 1,
    REFUND_REF_BUYER_TOKEN = 2,
    REFUND_REF_SELLER = 3,
    REFUND_REF_SELLER_TOKEN = 4,
    REFUND_TOKEN_BUYER = 5,
}
export enum EStatusOrderRef {
    PENDING = 1,
    COMPLETE = 2,
}

export enum EStatusSponsorship {
    PENDING = 1,
    INPROGRESS = 2,
    CLOSED = 3,
}
export enum EStatusWithdraw {
    PENDING = 1,
    COMPLETE = 2,
    HOLD = 3,
}

export enum EPriorityLevel {
    TOP_DONATE = 1,
    REGISTER_EVENT = 2,
    NORMAL = 3,
}
