import { Subjects, Publisher, PaymentCreatedEvent } from '@leotickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}
