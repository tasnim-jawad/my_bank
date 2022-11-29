//login btn event handler
const loginBtn = document.getElementById("login")
loginBtn.addEventListener("click" , function () {
    const loginArea = document.getElementById("login_area");
    loginArea.style.display = "none"
    const transeectionArea = document.getElementById("transeection_area");
    transeectionArea.style.display = "block"
    
})


//transeection btn event handler
const addDeposit =document.getElementById("addDeposit");
addDeposit.addEventListener("click" ,function() {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    if (depositAmount == '' || depositNumber == NaN) {
        alert('You did not enter any amont. please anter an amount first ')
        document.getElementById("depositAmount").value ='';
    }else if(depositAmount <= -1){
        alert('add a valid number ');
        document.getElementById("depositAmount").value ='';
    }else{
        spanNumberUpdate("currentDeposit" ,depositNumber)
        spanNumberUpdate("currentBalance",depositNumber)


        document.getElementById("depositAmount").value ='';

    } 

    
})


function spanNumberUpdate(id ,depositNumber) {
    const current =document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;

    document.getElementById(id).innerText = total;
}
function spanNumberUpdateNegetiv(id ,depositNumber) {
    const current =document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber - depositNumber;

    document.getElementById(id).innerText = total;
}





const addWithdraw =document.getElementById("addWithdraw");
addWithdraw.addEventListener("click" ,function() {
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    if (withdrawAmount == '' || withdrawNumber == NaN) {
        alert('You did not enter any amont. please anter an amount first ')
        document.getElementById("withdrawAmount").value ='';
    }else if(withdrawAmount <= -1){
        alert('add a valid number ');
        document.getElementById("withdrawAmount").value ='';
    }else{

        const currentBalance =document.getElementById("currentBalance").innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        // alert(currentBalanceNumber)
        if (withdrawNumber <= currentBalanceNumber) {
            spanNumberUpdate("currentWithdraw" ,withdrawNumber)
            spanNumberUpdateNegetiv("currentBalance" ,withdrawNumber)
        }else{
            alert('you have not enough balance')
        }
        document.getElementById("withdrawAmount").value ='';
    }
})

