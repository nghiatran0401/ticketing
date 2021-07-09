import { Publisher, Subjects, TicketUpdatedEvent } from '@keitickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
