import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
} from '@leotickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}
