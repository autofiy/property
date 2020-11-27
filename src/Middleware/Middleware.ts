import { Property } from "../Core/Property";

export interface Middleware {
    handle(properties : Property[]) : Property[];

    shouldBreak() : boolean;
}


export abstract class MiddlewareBase implements Middleware {

    private _shouldBreak : boolean;

    constructor() {
        this._shouldBreak = false;
    }

    protected break() : void {
        this._shouldBreak = true;
    }

    abstract handle(properties : Property[]) : Property[];

    public shouldBreak() : boolean {
        return this._shouldBreak;
    }

}