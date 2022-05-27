
function taxCalculator(n){
    if(n<250000){
        return "no tax"
    }
    if(n<=500000){
        let rebate = Math.floor(n/2);
        let amount = n-rebate;
        let tax = Math.floor(amount*0.1);
        return tax;
    }
    if(n<=1000000){
        let rebate = Math.floor(n*0.3);
        let amount = n-rebate;
        let tax = Math.floor(amount*0.2);
        return tax;
    }
    if(n>1000000){
        let rebate = Math.floor(n*0.1);
        let amount = n-rebate;
        let tax = Math.floor(amount*0.3);
        return tax;
    }

}


module.exports = taxCalculator;