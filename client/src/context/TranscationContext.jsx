import React, {useEffect,useState} from 'react';
import {ethers } from 'ethers';
import {contractABI, contractAddress} from  '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log(
        {
            provider,
            signer,
            transactionsContract
        }

    );
}

export const TransactionsProvider = ({ children }) => {
    return (
        <TransactionContext.Provider value = {{}}>
            {children}
        </TransactionContext.Provider>
    );
}