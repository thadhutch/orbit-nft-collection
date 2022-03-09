import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'OrbitNFTCollection',
  tokenName: 'ORBIT',
  tokenSymbol: 'ORB',
  hiddenMetadataUri: 'ipfs://QmeshU7wTMn8W4RH1yLWGzHWTAj5sHxQNoSJhTBWZwQpPD/nftmetadata.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0x64CeE6c2beFeB3077F97b74c7027B7247d42e563',
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
