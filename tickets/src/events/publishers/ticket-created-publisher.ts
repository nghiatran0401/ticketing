import { Publisher, Subjects, TicketCreatedEvent } from '@keitickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated; // 'readonly': like Java 'final' keyword
}
