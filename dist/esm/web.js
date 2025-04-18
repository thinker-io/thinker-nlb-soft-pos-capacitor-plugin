import { WebPlugin } from '@capacitor/core';
export class ThinkerNlbSoftPosWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async initiatePurchaseTransaction(options) {
        console.log('ECHO - INITIATE_PURCHASE', options);
        return new NullTransactionResponse('NULL_TRANSACTION_RESPONSE', -1);
    }
    async initiateVoidTransaction(options) {
        console.log('ECHO - INITIATE_VOID', options);
        return new NullTransactionResponse('NULL_TRANSACTION_RESPONSE', -1);
    }
}
export class NullTransactionResponse {
    constructor(status, statusCode) {
        this.validationErrors = [];
        this.status = status;
        this.statusCode = statusCode;
        this.activityResult = '';
        this.extrasData = '';
    }
}
//# sourceMappingURL=web.js.map