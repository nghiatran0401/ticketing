import { Subjects, Publisher, OrderCancelledEvent } from '@keitickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
