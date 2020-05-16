require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember promote include enrich suspect senior'; 
let testAccounts = [
"0x68be17bf0d73dcd83406724e462c0babb6c02d2b13bb67e257088f2c6baa58a6",
"0xfb79d249eed2c2b60d6205c742d2b96bdad5665549fd43c5f643f1fac14e59da",
"0x09155bcb4a967f4ca77fe2cfcb5d77b7611f90ba79b6acc35d0a8747acf0aa78",
"0x065dc7edc79420566769eb0dc9cb728a572590721ae71e792ca0f43ab3a86539",
"0x97d057e74f3e1811b4d208f2aef42a506a1d95bd6b77b5150dd99a279385fc69",
"0xbf07a25497d7082fbe35820d04fd534bf277b80d053a9c1452c303298e7625b6",
"0x9cfa606085f07a15cad1c3161cfbf6cafd03bc60bd7b9974363c28253165f13c",
"0xffa9822cee6d4d6696f3609f4dcc223af1c3a0da2b414722b5c4ca8a7a0622fe",
"0xfa286e2102bbdb7e01fb3000f908f5ec87eaf7c51e181395d706e30c6e11e8f5",
"0xbedf4c7ee0967053f648cdc2a0dd360e13bf20f4a7ec767014e1b3a7ff25ad6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
