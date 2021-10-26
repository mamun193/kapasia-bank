// login button 
var loginBtn = document.getElementById("verify");
loginBtn.addEventListener("click",function()
{
     console.log("clack me");
     var loginAriea = document.getElementById("login_Ariea");
     loginAriea.style.display  =  "none" ;
     const  thisIsBlack  =  document.getElementById("transaction_area");
     thisIsBlack . style.display = "block";
}) 
// deposit button event heandlear

 const depositBtn = document .getElementById("AddDeposit");
depositBtn.addEventListener("click" , function(){
     const despositAmount = document.getElementById("depositAmount") .ariaValueMax;
       depositNumber = parseFloat(despositAmount);
       const currentDeposit = document.getElementById("currentDeposit").innerText; 
       currentDepositNumber = parseFloat(currentDeposit);
       totalDeposit = depositNumber +   currentDepositNumber;
       document.getElementById("currentDeposit").innerText = totalDeposit;
       document.getElementById("depositAmount").value;
})
