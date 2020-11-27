import { Property } from "../Core/Property";
import { OrdererBase } from "./Orderer";

export class SimpleOrderer extends OrdererBase {
    getOrderedPropertiesName(properties: Property[]): string[] {
        return this.getConfiguration().orderBy as string[];
    }
}
