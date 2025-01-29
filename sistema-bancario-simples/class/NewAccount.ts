import { DioAccount } from "./DioAccount"

export class NewAccount extends DioAccount {
  
    constructor(name: string, accountNumber: number){
      super(name, accountNumber)
    }

    deposit = (value: number): number => {
        let balance = this.getBalance()
        balance += value
        balance += 10
        this.setBalance(balance)
        console.log('Depósito realizado com sucesso!')
        return balance
    }
}