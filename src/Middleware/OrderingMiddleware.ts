import { Orderer } from '../Order/Orderer';
import { Property } from '../Core/Property';
import { MiddlewareBase } from './Middleware';
export class OrderingMiddleware extends MiddlewareBase {

    private readonly orderer: Orderer;

    constructor(orderer: Orderer) {
        super();
        this.orderer = orderer;
    }

    handle(properties: Property[]): Property[] {
        return this.orderer.order(properties);
    }

}