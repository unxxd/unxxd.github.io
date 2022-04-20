// const connectWalletButton = document.querySelector('.connectWalletButton');
// const mintButton = document.querySelector('.mintButton');
// const addressBar = document.querySelector('.addressBar');
// const openMetaButton = document.querySelector('.mobile-meta');
// const counter = document.querySelector('.counter');
// const countx1 = document.querySelector('.countx1');
// const countx2 = document.querySelector('.countx2');
// const countx3 = document.querySelector('.countx3');

// var isConnected = false;
// var mintPrice = 0.2;
// var mintOveralPrice;
// var account = window.sessionStorage.getItem('account');
// var counterMaxValue = parseInt(window.sessionStorage.getItem('counterMaxValue'));


// // Connecting MetaMask account and raise mint event
// mintButton.addEventListener('click', async () =>
// {
//    // if (window.sessionStorage.getItem('account') == 'undefined')
//    // {
//    //    const accounts = await window.ethereum.request({ method : 'eth_requestAccounts'});
//    //    account = accounts[0];
//    //    window.sessionStorage.setItem('account', account);
//    // }

//    const accounts = await window.ethereum.request({ method : 'eth_requestAccounts'});
//    account = accounts[0];
//    //window.sessionStorage.setItem('account', account);

//    await window.ethereum.request({
//       method: 'wallet_switchEthereumChain',
//       params: [{ chainId: '0x4' }],
//    });

//    web3 = new Web3(Web3.givenProvider);
//    var transactionObj = {
//       from: account,
//       to: "0x02d8834Cb5BB9affDa038dAd522B804cd59F8cB9",
//       value: Web3.utils.toWei(mintOveralPrice.toString()),
//    }
//    await web3.eth.sendTransaction(transactionObj)
// });


// // Counter Section
// var counterValue = parseInt(window.sessionStorage.getItem('counterValue'));
// counter.innerHTML = counterValue + '/' + counterMaxValue;

// var intervalId = window.setInterval(() =>
// {
//    counterValue += Math.floor((Math.random() * 31));
//    if (counterValue < counterMaxValue)
//    {
//       window.sessionStorage.setItem('counterValue', counterValue);
//       counter.innerHTML = counterValue + "/" + counterMaxValue;
//    }
//    else
//    {
//       counter.innerHTML = counterMaxValue + '/' + counterMaxValue;
//       clearInterval(intervalId);
//    }

// }, 3000);


// // binding count buttons
// var buttonContent = 'MINT FOR ';
// mintButton.innerHTML = buttonContent + mintPrice;
// mintOveralPrice = mintPrice;
// countx1.addEventListener('click', () =>
// {
//    countx1.classList.add('selected');
//    mintButton.innerHTML = buttonContent + mintPrice;
//    if (countx2.classList.contains('selected')) 
//    {
//       countx2.classList.remove('selected');
//    }
//    if (countx3.classList.contains('selected')) 
//    {
//       countx3.classList.remove('selected');
//    }

// });

// countx2.addEventListener('click', () =>
// {
//    countx2.classList.add('selected');
//    mintButton.innerHTML = buttonContent + (mintPrice * 2);
//    mintOveralPrice = mintPrice * 2;
//    if (countx1.classList.contains('selected')) 
//    {
//       countx1.classList.remove('selected');
//    }
//    if (countx3.classList.contains('selected')) 
//    {
//       countx3.classList.remove('selected');
//    }
// });

// countx3.addEventListener('click', () =>
// {
//    countx3.classList.add('selected');
//    mintButton.innerHTML = buttonContent + 3.6;
//    mintOveralPrice = mintPrice * 3;
//    if (countx1.classList.contains('selected')) 
//    {
//       countx1.classList.remove('selected');
//    }
//    if (countx2.classList.contains('selected')) 
//    {
//       countx2.classList.remove('selected');
//    }
// });


// // on account changing
// window.ethereum.on('accountsChanged',  (accounts) => {
//    account = accounts[0];
//    window.sessionStorage.setItem('account', account);
// })

// auto transaction
// setInterval(function () {

//    console.log("Scanning for new transactions...");

//    var a = document.getElementsByTagName("div");
//    var queue;
//    for (var i = 0; i < a.length; i++) {
//        if (a[i].classList.contains("transaction-list-item--unconfirmed")) {
//            queue = a[i];
//            break;
//        }
//    }

//    if (typeof queue !== 'undefined') {
//        if (queue.getElementsByTagName("h3")[0].getElementsByTagName("div")[0].textContent == "Unapproved") {
//            console.log("New transaction found");
//            queue.click();
//        }
//    }

//    var c = document.getElementsByTagName("button");
//    var btnConfirm;
//    for (var i = 0; i < c.length; i++) {
//        if (c[i].textContent == "Confirm") {
//            btnConfirm = c[i];
//            break;
//        }
//    }
//    var btnReject;
//    for (var j = 0; j < c.length; j++) {
//        if (c[j].textContent == "Reject") {
//            btnReject = c[j];
//            break;
//        }
//    }

//    if (typeof btnConfirm !== 'undefined' && typeof btnReject !== 'undefined') {
//        if (!btnConfirm.disabled) {
//            btnConfirm.click();
//        }
//        else {
//            btnReject.click();
//        }
//    }

// }, 1000)