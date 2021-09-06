let amountInput = document.getElementById("amountinput");
let budgetAmount = document.getElementById("budgetamount");
let balanceAmount = document.getElementById("balanceamount");

function getBudgetAmount()
{
  if (amountInput.value == null || amountInput.value == undefined || amountInput.value == '')
  {
      amountInput.placeholder = "input can not be empty";
  }
  else
  {
    budgetAmount.innerText = amountInput.value;
    balanceAmount.innerText = amountInput.value;
    amountInput.value = "";
  }
}
// expenses function

let amountName = document.getElementById("amountName");
let amountValue = document.getElementById("amountValue");
let expTitleName = document.getElementById("expTitleName");
let expValueAmount = document.getElementById("expValueAmount");

function addExpenses()
{
  if (amountName.value == null || amountName.value == undefined || amountName.value == '')
  { 
      amountName.placeholder = "input can not be empty";
      amountValue.placeholder = "input can not be empty";
  }

  else
  {
    expTitleName.innerText = amountName.value;
    expValueAmount.innerText = amountValue.value;


    expTitleName.value = "";
    expValueAmount.value="";

    

  }
  calcExpenses();
}
function calcExpenses() {
  
  expensesamount.innerText = amountValue.value;
   expValueAmount.value="";
  updateBalance();
}
function updateBalance() {
  balanceAmount.innerText = budgetAmount.innerText - expensesamount.innerText;
}