require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth payment update include clip off tackle'; 
let testAccounts = [
"0xe9411ae7679c6c2af96a135d58e83f849ea18cb1481f28697da195bd4880a03a",
"0xa53a6f6f830789bc414f21492a4ad6823ee872c61a721f3560084da70531d97a",
"0x53737b65eece3ecc147fb1abfc0bfc8b48d97f207f38c1d71c4675dfaa0ce19c",
"0x2503b056427e0272d69805c43064d6625b1f3e2dd522dc779e1adbca7cb2b307",
"0x2facf30db90ee729acbe6c97b99d77740c70f3d5f339c61ab01f7873a7a46204",
"0xc13899639e1b35105fa67202622bf0e40f553d9071066f8ca1290c39217cb361",
"0x34f0027a1741dc17f5ec60da66cb0f439fb853e03dae6731b5b55cda35779821",
"0x661d2317f66ef430c5e1b5ec3d3dc845bb49a9d560a4404e67f6e5732f743f5d",
"0x078cf0531c8a4b2cfc229abe1f7719b62f9781fa8d4d4da5420035e4c7fbfe6e",
"0x46960ed5913339178939b9f10724031a2f89b04b58f2f4b3d32f28e41a9b5aa1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


