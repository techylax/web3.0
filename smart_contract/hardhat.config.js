
require('@nomiclabs/hardhat-waffle');

module.exports =
{
    solidity :'0.8.0',
    networks:
    {
        goerli:
        {
            url:'https://eth-goerli.g.alchemy.com/v2/k3NaIpon6wnqdBiO0NKObpYoQSpJVNAi',
            accounts: ['9155028d14d6aea20aa599042e2ff5c2d96d16f7b63523f958659ab4a62d4b6f']
        }
    }
}