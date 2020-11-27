import { Property } from '../Core/Property';
import { MiddlewareBase } from './Middleware';

export class AutoDetectMiddleware extends MiddlewareBase {

    private readonly dataItem: any;

    constructor(dataItem: any) {
        super();
        this.dataItem = dataItem;
    }

    handle(properties: Property[]): Property[] {
        const keys = Object.keys(this.dataItem);
        return properties.concat(keys.map(key => ({ name: key, title: key })));
    }

}