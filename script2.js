a = eth.accounts[0]
web3.eth.defaultAccount = a;

var simpleSource = 'import "strings.sol"; contract KYCCorporate {    using strings for *;    string public CorporateID; 	    string public LegalName  ;     string public EntityStructure;     string public Ownership;   								                           	    function KYCCorporate(string _CorporateID, string _LegalName, string _EntityStructure, string _Ownership)     {         CorporateID  = _CorporateID; LegalName = _LegalName; EntityStructure = _EntityStructure;         Ownership = _Ownership;	            } function setLegalName(string _LegalName) { LegalName = _LegalName; }     function getLegalName() constant returns (string retVal) 	    {         return  CorporateID.toSlice().concat(LegalName.toSlice());        }	    } '


var simpleCompiled = web3.eth.compile.solidity(simpleSource);
var simpleContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"CorporateID","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"EntityStructure","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getLegalName","outputs":[{"name":"retVal","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"LegalName","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_LegalName","type":"string"}],"name":"setLegalName","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"Ownership","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"_CorporateID","type":"string"},{"name":"_LegalName","type":"string"},{"name":"_EntityStructure","type":"string"},{"name":"_Ownership","type":"string"}],"payable":false,"type":"constructor"}]);

//var simpleContract = web3.eth.contract(simpleCompiled.KYCCorporate.info.abiDefinition);
var simple = simpleContract.new("3252FGH","Shell UK Pty Ltd","Public Listed","Wholly Listed", {from:web3.eth.accounts[0], data: "606060405234620000005760405162000c9038038062000c90833981016040528080518201919060200180518201919060200180518201919060200180518201919050505b8360009080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200009257805160ff1916838001178555620000c3565b82800160010185558215620000c3579182015b82811115620000c2578251825591602001919060010190620000a5565b5b509050620000eb91905b80821115620000e7576000816000905550600101620000cd565b5090565b50508260019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013b57805160ff19168380011785556200016c565b828001600101855582156200016c579182015b828111156200016b5782518255916020019190600101906200014e565b5b5090506200019491905b808211156200019057600081600090555060010162000176565b5090565b50508160029080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001e457805160ff191683800117855562000215565b8280016001018555821562000215579182015b8281111562000214578251825591602001919060010190620001f7565b5b5090506200023d91905b80821115620002395760008160009055506001016200021f565b5090565b50508060039080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200028d57805160ff1916838001178555620002be565b82800160010185558215620002be579182015b82811115620002bd578251825591602001919060010190620002a0565b5b509050620002e691905b80821115620002e2576000816000905550600101620002c8565b5090565b50505b505050505b61099280620002fe6000396000f30060606040523615610076576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303d7f0d31461007b578063049417ab14610111578063d000025f146101a7578063d7b59e041461023d578063e0dce2ac146102d3578063fbdd78521461032a575b610000565b34610000576100886103c0565b60405180806020018281038252838181518152602001915080519060200190808383600083146100d7575b8051825260208311156100d7576020820191506020810190506020830392506100b3565b505050905090810190601f1680156101035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b346100005761011e61045e565b604051808060200182810382528381815181526020019150805190602001908083836000831461016d575b80518252602083111561016d57602082019150602081019050602083039250610149565b505050905090810190601f1680156101995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610000576101b46104fc565b6040518080602001828103825283818151815260200191508051906020019080838360008314610203575b805182526020831115610203576020820191506020810190506020830392506101df565b505050905090810190601f16801561022f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b346100005761024a61066a565b6040518080602001828103825283818151815260200191508051906020019080838360008314610299575b80518252602083111561029957602082019150602081019050602083039250610275565b505050905090810190601f1680156102c55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3461000057610328600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610708565b005b34610000576103376107ad565b6040518080602001828103825283818151815260200191508051906020019080838360008314610386575b80518252602083111561038657602082019150602081019050602083039250610362565b505050905090810190601f1680156103b25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104565780601f1061042b57610100808354040283529160200191610456565b820191906000526020600020905b81548152906001019060200180831161043957829003601f168201915b505050505081565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104f45780601f106104c9576101008083540402835291602001916104f4565b820191906000526020600020905b8154815290600101906020018083116104d757829003601f168201915b505050505081565b60206040519081016040528060008152506106646105b360018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105a95780601f1061057e576101008083540402835291602001916105a9565b820191906000526020600020905b81548152906001019060200180831161058c57829003601f168201915b505050505061084b565b61065660008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561064c5780601f106106215761010080835404028352916020019161064c565b820191906000526020600020905b81548152906001019060200180831161062f57829003601f168201915b505050505061084b565b61088b90919063ffffffff16565b90505b90565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107005780601f106106d557610100808354040283529160200191610700565b820191906000526020600020905b8154815290600101906020018083116106e357829003601f168201915b505050505081565b8060019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061075457805160ff1916838001178555610782565b82800160010185558215610782579182015b82811115610781578251825591602001919060010190610766565b5b5090506107a791905b808211156107a357600081600090555060010161078b565b5090565b50505b50565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108435780601f1061081857610100808354040283529160200191610843565b820191906000526020600020905b81548152906001019060200180831161082657829003601f168201915b505050505081565b6040604051908101604052806000815260200160008152506000602083019050604060405190810160405280845181526020018281525091505b50919050565b60206040519081016040528060008152506020604051908101604052806000815250600083600001518560000151016040518059106108c75750595b908082528060200260200182016040525b5091506020820190506108f48186602001518760000151610919565b61090d8560000151820185602001518660000151610919565b8192505b505092915050565b60005b60208210151561094257825184526020840193506020830192505b60208203915061091c565b6001826020036101000a039050801983511681855116818117865250505b505050505600a165627a7a72305820388cc75a557b507bbebef1b71b8b09c7d8a5673fa8a81ad31471f903bffd0f3e0029",
	gas: 1000000, privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]}, function(e, contract) {
  if (e) {
    console.log("err creating contract", e);
  } else {
    if (!contract.address) {
      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
    } else {
      console.log("Contract mined! Address: " + contract.address);
      console.log(contract);
    }
  }
});