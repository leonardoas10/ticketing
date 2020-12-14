import { Publisher, OrderCancelledEvent, Subjects } from '@leotickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}
