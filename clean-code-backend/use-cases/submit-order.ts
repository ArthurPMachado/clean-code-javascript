import { Order } from "../domain/purchases/order"

interface SubmitOrderRequest {
  customerDocument: string
  total: number
}

interface SubmitOrderResponse {

}

export class SubmitOrder {
  async execute({ customerDocument, total }: SubmitOrderRequest) {
    const order = new Order(total, customerDocument)

    // Persist on database
  }
}
