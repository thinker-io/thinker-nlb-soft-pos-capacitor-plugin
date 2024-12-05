package io.thinker.plugins.nlbsoftpos.responses;

import java.util.ArrayList;
import java.util.List;

public class ValidationErrorFactory {

    public static ValidationError getValidationErrorByCode(int code) {
        List<ValidationError> validationErrors = ValidationErrorFactory.getValidationErrorCollection();
        for(ValidationError validationError : validationErrors) {
            if(validationError.getErrorCode() == code) return validationError;
        }
        return null;
    }

    private static List<ValidationError> getValidationErrorCollection() {
        List<ValidationError> collection = new ArrayList<>();

        collection.add(new ValidationError(
                3000,
                "PIN code is optional parameter, but if you decide to send it via request then it must be exactly 4 characters long!"
        ));

        collection.add(new ValidationError(
                3001,
                "Mandatory parameter [amount]! Amount is mandatory parameter!"
        ));

        collection.add(new ValidationError(
                3002,
                "Amount parameter must be in one of the 2 following formats [XXXX] or [XXXX.YY]!"
        ));

        collection.add(new ValidationError(
                3003,
                "Mandatory parameter [packageName]! Package name of your application is mandatory field!"
        ));

        collection.add(new ValidationError(
                3004,
                "Mandatory parameter [transactionType]! Transaction type must be either 'POS' or 'IPS'!"
        ));

        collection.add(new ValidationError(
                3005,
                "Mandatory parameter [transactionClass]! Transaction type must be either 'purchase' or 'void'!"
        ));

        collection.add(new ValidationError(
                3006,
                "Parameter [transactionClass] must be of type 'purchase'!"
        ));

        collection.add(new ValidationError(
                3007,
                "Parameter [transactionClass] must be of type 'void'!"
        ));

        collection.add(new ValidationError(
                3008,
                "Mandatory parameter [authorizationCode]! You must send authorization code to make a void transaction!"
        ));

        collection.add(new ValidationError(
                3009,
                "Mandatory parameter [merchantUniqueID]! Merchant unique ID is reference generated by your application to correlate transactions!"
        ));

        collection.add(new ValidationError(
                3010,
                "Request data sent to the ThinkerNlbSoftPos plugin is malformed! Please check your request object and verify it against the plugin documentation!"
        ));

        return collection;
    }
}