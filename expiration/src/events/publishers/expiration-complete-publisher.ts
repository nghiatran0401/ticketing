import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@keitickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
