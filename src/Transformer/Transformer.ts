import { Property } from "../Core/Property";


export interface Transformer<T = string> {
    transform(property: Property): T;
}

export abstract class TransformerBase<T = string> implements Transformer<T> {

    private readonly item: any;

    public constructor(item: any) {
        this.item = item;
    }

    protected getItem(): any {
        return this.item;
    }

    abstract transform(property: Property): T;

}


export class CustomTransformer<T = string> extends TransformerBase<T> {

    private readonly transformCallback: (item: any, property: Property) => T;

    constructor(item: any, transformCallback: (item: any, property: Property) => T) {
        super(item);
        this.transformCallback = transformCallback;
    }

    transform(property: Property): T {
        return this.transformCallback(this.getItem(), property);
    }
}


export class DirectTransformer extends TransformerBase {

    transform(property: Property): string {
        return this.getItem()[property.name];
    }

}