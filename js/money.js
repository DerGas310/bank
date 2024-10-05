 export class Money{
    constructor(){
        this.money = {USD: 0, RUB: 0}
    }
  
  validation(amount, currency){
    if(amount < 0 || currency !== 'RUB' && currency !== 'USD'){      
      console.log("ошибка")
      return null
    }
    else{
      return 1
    }
  }
  
  deposit(amount, currency){
    if(this.validation(amount, currency)){
      this.money[currency] += amount
    return this.money
    }
  }

  withdraw(amount, currency){
    if(this.validation(amount, currency)){
      if(amount <= this.money[currency]){
        this.money[currency] -= amount
      }
      return this.money
    }
  }
    

  returnBalanceStr(){
    return `RUB: ${this.money.RUB} USD: ${this.money.USD}`
  }
}