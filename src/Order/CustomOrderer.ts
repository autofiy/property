import { Property } from "../Core/Property";
import { OrdererBase } from "./Orderer";

export class CustomOrderer extends OrdererBase {

    getOrderedPropertiesName(properties: Property[]): string[] {
        const orderBy = this.getConfiguration().orderBy as (properties: Property[]) => string[];
        return orderBy(properties);
    }

}