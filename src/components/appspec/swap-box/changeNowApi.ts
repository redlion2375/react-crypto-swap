import axios, { AxiosResponse } from 'axios';
import { personInfo } from '../constant/sensd';

//fetches list of available currencies by fixed rate
export const getAvailableCurrencies = async (): Promise<AxiosResponse<any>> => {
    const apiUrl = `https://api.changenow.io/v1/currencies?active=true&fixedRate=true`;

    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
}

//fetches list of available currencies to a specific one
export const getAvailableCurrenciesTo = async (ticker: String): Promise<AxiosResponse<any>> => {
    const apiUrl = `https://api.changenow.io/v1/currencies-to/${ ticker }?fixedRate=true`;

    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
}

//fetches info for a specific coin/token which is passed as a parameter.
export const getInfoOf = async (ticker: String) => {
    const apiUrl = `https://api.changenow.io/v1/currencies/${ ticker }`;

    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${ error.message }`);
    }
}

//fetches user transaction history
export const getTransactionHistory = async (from: String, to: String, dateFrom: String, dateTo: String) => {
    const apiKey = personInfo.apiKey;
    const apiUrl = `https://api.changenow.io/v1/transactions/${ apiKey }?from=${ from }&to=${ to }&status=waiting&limit=50&offset=0&${dateFrom}&${dateTo}`;

    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${ error.message }`);
    }
}

//fetches full list of market info with fixed rate
//successful response's fields: {from, to, min, max, rate, minerFee}
export const getAvailableFixedRateMarkets = async (): Promise<AxiosResponse<any>> => {
    const apiKey = personInfo.apiKey;
    const apiUrl = `https://api.changenow.io/v1/market-info/fixed-rate/${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
};

//gets estimated fixed-rate exchange amount
//successful response fields: {estimatedAmount, networkFee, transactionSpeedForecast, warningMessage, rateId}
//Formula for estimated amount: estimatedAmount = ( rate * amount ) - networkFee
export const getEstimatedFixedRateExchangeAmount = async (send_amount: String, from_to: String): Promise<AxiosResponse<any>> => {
    const apiKey = personInfo.apiKey;
    //This API endpoint returns fixed-rate estimated exchange amount of coins to be received upon exchange.
    const apiUrl = `https://api.changenow.io/v1/exchange-amount/fixed-rate/${send_amount}/${from_to}?api_key=${apiKey}&useRateId=true`;

    try {
        const response = await axios.get(apiUrl)
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
}


//This API endpoint returns fixed-rate estimated exchange amount of coins to be received upon exchange.
//successful response fields: {estimatedDeposit, rateID}
export const getEstimatedFixedRateExchangeAmountReverse = async (send_amount: String, from_to: String): Promise<AxiosResponse<any>> => {
    const apiKey = personInfo.apiKey;
    const apiUrl = `https://api.changenow.io/v1/exchange-deposit/fixed-rate/${send_amount}/${from_to}?api_key=${apiKey}&useRateId=true`;

    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
}

//The API endpoint returns minimal payment amount and maximum payment amount required to make an exchange. If you try to exchange less than minimum or more than maximum, the transaction will most likely fail. Any pair of assets has minimum amount and some of pairs have maximum amount.
//successful response fields: {minAmount, maxAmount}
export const getEstimatedRangeFixedRate = async (from_to: String): Promise<AxiosResponse<any>> => {
    const apiKey = personInfo.apiKey;
    const apiUrl = `https://api.changenow.io/v1/exchange-range/fixed-rate/${from_to}?api_key=${apiKey}&useRateId=true`;

    try {
        const response = await axios.get(apiUrl)
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
}

//create fixed rate exchange
//The API endpoint creates a transaction, generates an address for sending funds and returns transaction attributes.
//successful response fields: {id, payinAddress, payoutAddress, payoutExtrald, fromCurrency, toCurrency, amount, refundAddress, refundExtrald, payoutExtraldName, validUntil, rateId}
/**
 * 
 * @param requestObj
 * @type 
 * {
     "from": "btc",
     "to": "xlm",
     "address": "GAM6Y7R5LKBYOC5VCF3L3B24EMM2IA5S7KTWTR65G65N7BJQRV32OGFB",
     "amount": "12.0645",
     "extraId": "123456789",
     "refundAddress": "1Nh7uHdvY6fNwtQtM1G5EZAFPLC33B59rB",
     "refundExtraId": "",
     "userId": "",
     "payload": "",
     "contactEmail": ""
}
 */
export const createFixedRateExchange = async (requestObj: Object): Promise<AxiosResponse<any>> => {
    const apiKey = personInfo.apiKey;
    const apiUrl = `https://api.changenow.io/v1/transactions/fixed-rate/${apiKey}`;

    try {
        const response = await axios.post(apiUrl, {
            ...requestObj
        })
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
}


//create fixed rate exchange reverse
//The API endpoint creates a transaction, generates an address for sending funds and returns transaction attributes.
//successful response fields: {}
/**
 * required request fields: 
 * {
     "from": "btc",
     "to": "xlm",
     "address": "GAM6Y7R5LKBYOC5VCF3L3B24EMM2IA5S7KTWTR65G65N7BJQRV32OGFB",
     "amount": "12.0645",
     "extraId": "123456789",
     "refundAddress": "1Nh7uHdvY6fNwtQtM1G5EZAFPLC33B59rB",
     "refundExtraId": "",
     "userId": "",
     "payload": "",
     "contactEmail": ""
}
 * 
*/
export const createReverseFixedRateExchange  = async (requestObj: Object): Promise<AxiosResponse<any>> => {
    const apiKey = personInfo.apiKey;
    const apiUrl = `https://api.changenow.io/v1/transactions/fixed-rate/from-result/${apiKey}`;

    try {
        const response = await axios.post(apiUrl, {
            ...requestObj
        })
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
}