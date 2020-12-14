import { Publisher, OrderCreatedEvent, Subjects } from '@leotickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}
