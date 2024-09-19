import Web3 from 'web3'
import './style.css'


const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/xxxxxxxx'))

let abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "addNumbers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "divNumbers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "mulNumbers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]

let address = "0xf9ad12448ba0cb6257aacec1573010d3d5860f62"

const contract = new web3.eth.Contract(abi, address)
console.log(contract)


async function addNumber() {
    let a = parseInt(document.getElementById('a').value)
    let b = parseInt(document.getElementById('b').value)
    let result = await contract.methods.addNumbers(a, b).call()
    document.getElementById('result').innerHTML = result
}

async function multiply() {
    let a = parseInt(document.getElementById('a').value)
    let b = parseInt(document.getElementById('b').value)
    let result = await contract.methods.mulNumbers(a, b).call()
    document.getElementById('result').innerHTML = result
}

async function divide() {
    let a = parseInt(document.getElementById('a').value)
    let b = parseInt(document.getElementById('b').value)
    let result = await contract.methods.divNumbers(a, b).call()
    document.getElementById('result').innerHTML = result
}


document.getElementById('add').addEventListener('click', addNumber)
document.getElementById('divide').addEventListener('click', divide)
document.getElementById('multiply').addEventListener('click', multiply)