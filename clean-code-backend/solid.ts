interface Card {
  number: number
  cvv: number
  expiration: number
}

interface PaymentMethod {
  getDiscountAmount: (amount: number) => number
}

class Billet implements PaymentMethod {
  getDiscountAmount (amount: number): number {
    return amount * 0.1
  }
}

class Credit implements PaymentMethod, Card {
  private installments: number

  constructor(installments: number) {
    this.installments = installments
  }

  getDiscountAmount(amount: number): number {
    if (this.installments === 1) {
      return amount * 0.05
    }

    if(this.installments <= 6) {
      return amount * 0.02
    }

    return 0
  }
}

class Debit implements PaymentMethod, Card {
  getDiscountAmount(amount: number): number {
    return amount * 0.05
  }
}

class Pix implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.20
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethod

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod
  }

  public execute(amount: number) {
    return this.paymentMethod.getDiscountAmount(amount)
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Credit(6))

calculateOrderDiscount.execute(2000)

// SRP -> Each class is only executing the discount that will be applied and nothing more
// OCP -> CalculateOrderDiscount can execute any new PaymentMethod without changing what is does
// LSP -> You can pass any class that implement a PaymentMethod on CalculateOrderDiscount
// ISP -> The Credit and Debit classes are using 2 interfaces, instead of being 1 interface only
// DIP -> Its the variable that instantiate the CalculateOrderDiscount that needs to pass the dependencies
