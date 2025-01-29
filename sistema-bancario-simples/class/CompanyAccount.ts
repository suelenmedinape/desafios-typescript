import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): number => {
    let balance = this.getBalance()
    if (this.getStatus() === false || loan < 0) {
      console.log('Empréstimo não permitido!')
    } else {
      balance += loan
      console.log('Empréstimo realizado com sucesso!')
      this.setBalance(balance)
    }
    return balance
  }
}
