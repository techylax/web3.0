pragma solidity ^0.8.0;
contract Transcations {

uint236 transactionCount;
event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword)

struct TransferStru
{
    address sender;
    address receiver;
    unit amount;
    string message;
    uint256 timestamp;
    string keyword;

}

TransferStruct[] transactions;

function addToBlockchain(address payable receiver,uint amount, string memory message,string memory keyword) public {

transactionCount +=1;
transactions.push(TransferStruct(msg.sender, receiver,amount,message,block.timestamp,keyword));
emit Transfer(msg.sender, receiver,amount,message,block.timestamp,keyword);
}

function getAllTransactions() public  view returns ( TransferStruct[] memory){

    return transactions;
}

function getTransactionCount() public  view returns ( uint256){

    return transactions;
}

}