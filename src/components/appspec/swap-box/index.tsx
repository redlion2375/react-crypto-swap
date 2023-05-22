/**
 * Work flow for Fixed-Rate Flow API
 * API - Get the list of currently available currencies with the 'List of available currencies' method. Use fixedRate=true request parameter.
 * UI - Ask a user to select a pair to exchange. For example, BTC (Bitcoin) to ETH (Ethereum);
 * API - Ask a user for the amount to exchange and check if this amount is bigger than the minimum exchange amount and less than the maximum amount (minimum and maximum exchange amounts may be obtained from the 'Exchange range fixed-rate' method);
 * API - Call the 'Estimated fixed-rate exchange amount' method to get the estimated amount for the exchange (in our example, the ETH estimated amount).
 * UI - Show a user the estimated exchange amount and ask for confirmation;
 * UI - Inform a user that a deposit must be made within a certain timeframe (20 minutes), otherwise exchange will not proceed;
 * UI - Ask a user for their wallet address to send the funds after the exchange is completed (their refund address, extra ID, refund extra ID);
 * API - Call the 'Create fixed-rate exchange' method to create an exchange and get the deposit address (in our example, the generated BTC wallet address is returned from this method). The deposit must be made within a certain timeframe (20 minutes), otherwise exchange will not proceed;
 * UI - Ask a user to send the funds that they want to exchange to the deposit address within a certain time frame (in our example, user has to send BTC);
 * UI - A user sends coins, ChangeNOW performs an exchange and makes a withdrawal to user address (in our example, to their ETH address);
 * API - With 'Transaction status' you can get the transaction status and display it to a user for them to obtain all the info on the exchange.
 */

import { useState, useEffect } from 'react';
import * as ChangeNOWAPIPack from './changeNowApi';
import './swap-form-style.css';
import swap_btn_img from '../../../assets/images/swap3.webp';

const SwapForm = () => {
    const [availableCurrencies, setAvailableCurrencies] = useState(null);
    useEffect(() => {
        const fetchCurrencies = async () => {
            const data = await ChangeNOWAPIPack.getAvailableCurrencies();
            console.log(data.data);
            setAvailableCurrencies(data.data);
        }
        fetchCurrencies();
    }, []);
    return (
        <div className={"swap-widget"}>
            <h1>Cryptocurrency Exchange</h1>
            <input type='number' className={"sending-amount"} />
            <input type='number' className="receiving-amount" disabled />
            <button className='swap-btn'>
                <img src={swap_btn_img} className='swap-btn-img' />
                <span>Swap</span>
            </button>
        </div>
    );
}

export default SwapForm;