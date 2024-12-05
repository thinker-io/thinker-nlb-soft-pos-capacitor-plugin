import { WebPlugin } from '@capacitor/core';
import type { ThinkerNlbSoftPosPlugin, PurchaseTransactionOptions, VoidTransactionOptions, TransactionResponse, ValidationError } from './definitions';
export declare class ThinkerNlbSoftPosWeb extends WebPlugin implements ThinkerNlbSoftPosPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    initiatePurchaseTransaction(options: PurchaseTransactionOptions): Promise<TransactionResponse>;
    initiateVoidTransaction(options: VoidTransactionOptions): Promise<TransactionResponse>;
}
export declare class NullTransactionResponse implements TransactionResponse {
    status: string;
    statusCode: number;
    result: any;
    validationErrors: ValidationError[];
    constructor(status: string, statusCode: number);
}
