import { Property } from '../Core/Property';
import { Middleware } from './Middleware';

export interface MiddlewareGroup {
    getMiddlewareArray(): Middleware[];
    execute(): Property[];
}

export class DefaultMiddlewareGroup implements MiddlewareGroup {

    private readonly middlewareArray: Middleware[];
    constructor(middlewareArray: Middleware[]) {
        this.middlewareArray = middlewareArray;
    }

    getMiddlewareArray(): Middleware[] {
        return this.middlewareArray;
    }

    public execute(): Property[] {
        const middlewareArr = this.getMiddlewareArray();
        let result: Property[] = [];
        for (let middleware of middlewareArr) {
            result = middleware.handle(result);
            if (middleware.shouldBreak()) {
                break;
            }
        }
        return result;
    }

}
