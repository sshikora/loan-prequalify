export default function loanFetch(data) {
    if (data.creditScore < 600 || data.purchasePrice > data.yearlyIncome/5){
        return ({application: false, message: `You didn't get the loan`})
    } else if (data.purchasePrice > 1000000) {
        return ({applicaton: false, message:'Bad Request'})
    } else {
        return ({application: true, message: `You Got the Loan!`})
    }
}