export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setStatus = (status: boolean): void => {
    this.status = status
    console.log('Status alterado com sucesso!')
  }

  getStatus = (): boolean => {
    return this.status
  }

  setBalance = (balance: number): void => {
    this.balance = balance
    console.log('Saldo alterado com sucesso!')
  }

  getBalance = (): number => {
    return this.balance
  }
  
  list = (): void => {
    console.log('Saldo: ', this.balance)
  }

  deposit = (value: number): number => {
    if (this.status === false || value < 0) {
      console.log('Depósito não permitido!')
    } else {
      this.balance += value
      console.log('Depósito realizado com sucesso!')
    }
    return this.balance
  }

  withdraw = (value: number): number => {
    if (value > this.balance || this.status === false) {
      console.log('Saldo insuficiente / Saque nao permitido')
    } else {
      this.balance -= value
      console.log('Saque realizado com sucesso!')
    }
    return this.balance
  }
}
