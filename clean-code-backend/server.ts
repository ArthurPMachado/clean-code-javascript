import { PostgresOrdersRepository } from "./repositories/postgres/postgres-orders-repository";
import { SubmitOrder } from "./use-cases/submit-order";

const submitOrder = new SubmitOrder(
  new PostgresOrdersRepository(),
)

submitOrder.execute({customerDocument: "11122233344", total: 100})
