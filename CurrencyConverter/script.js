const rates = {
    USD:1,
    INR:86,
    EUR:0.85,
    GBP:0.74
};

function convert(){

    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if(amount==="" || amount<=0){
        alert("Enter valid amount");
        return;
    }

    let usd = amount / rates[from];
    let result = usd * rates[to];

    document.getElementById("result").innerHTML =
        amount+" "+from+" = "+result.toFixed(2)+" "+to;
}