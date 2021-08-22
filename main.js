var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);
  if(ip===0 || qty===0 || curr===0){
    showOutput('Please Enter valid Input!!!')
  }
  else{
    console.log(ip,qty,curr,typeof(ip));
    calculateProfitAndLoss(ip, qty, curr);
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, the <span class="loss">Loss</span> is <span class="loss">₹ ${loss}</span> and the Percent is <span class="loss">${lossPercentage} %</span>`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the <span class="profit">Profit</span> is <span class="profit">₹ ${profit}</span> and the Percent is <span class="profit">${profitPercentage} %</span>`
    );
  } else {
    showOutput(`<span class="stable">No pain no gain and no gain no pain</span>`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
