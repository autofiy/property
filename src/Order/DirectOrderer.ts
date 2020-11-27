import { Property } from "../Core/Property";
import { OrdererBase } from "./Orderer";

export class DirectOrderer extends OrdererBase {

    constructor() {
        super({});
    }

    getOrderedPropertiesName(properties: Property[]): string[] {
        return properties.map(p => p.name);
    }

}