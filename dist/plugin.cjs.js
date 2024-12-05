'use strict';

var core = require('@capacitor/core');

const ThinkerNlbSoftPos = core.registerPlugin('ThinkerNlbSoftPos', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.ThinkerNlbSoftPosWeb()),
});

class ThinkerNlbSoftPosWeb extends core.WebPlugin {
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
class NullTransactionResponse {
    constructor(status, statusCode) {
        this.validationErrors = [];
        this.status = status;
        this.statusCode = statusCode;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NullTransactionResponse: NullTransactionResponse,
    ThinkerNlbSoftPosWeb: ThinkerNlbSoftPosWeb
});

exports.ThinkerNlbSoftPos = ThinkerNlbSoftPos;
//# sourceMappingURL=plugin.cjs.js.map
