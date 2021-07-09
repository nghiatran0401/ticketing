import { Publisher, OrderCreatedEvent, Subjects } from '@keitickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
