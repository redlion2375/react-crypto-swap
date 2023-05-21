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
    const apiUrl = `https://api.changenow.io/v1/exchange-deposit/fixed-rate/${send_amount}/${from_to}?api_key=your_api_key&useRateId=true`;

    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
}

//change crypto(this is fixed-rate)
export const changeCrypto = async (transaction_id: String): Promise<AxiosResponse<any>> => {
    const apiKey = personInfo.apiKey;
    const apiUrl = `https://api.changenow.io/v1/transactions/fixed-rate/${ apiKey }`;

    try {
        const response = await axios.post(apiUrl, {
            api_key: apiKey,
            active: true
        })
        return response;
    } catch (error: any) {
        throw new Error(`Error fetching currencies: ${error.message}`);
    }
}