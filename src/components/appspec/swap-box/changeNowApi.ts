import axios, { AxiosResponse } from 'axios';
import { personInfo } from '../constant/sensd';

//fetches full list of available fixed rate
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

