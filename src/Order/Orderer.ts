import { PropertiesConfiguration } from '../Core/PropertiesConfiguration';
import { Property } from '../Core/Property';

export interface Orderer {
    order(properties: Property[]): Property[];

    getConfiguration(): PropertiesConfiguration;
}

export abstract class OrdererBase implements Orderer {

    private readonly configuration : PropertiesConfiguration;

    constructor(configuration : PropertiesConfiguration){
        this.configuration = configuration;
    }

    order(properties: Property[]): Property[] {
        const orderByArray = this.getOrderedPropertiesName(properties);
        const orderedProperties = [];
        for (let name of orderByArray) {
            const property = properties.find(p => p.name === name);
            if (property) {
                orderedProperties.push(property);
            }
        }
        return orderedProperties;
    }

    getConfiguration() : PropertiesConfiguration {
        return  this.configuration;
    }

    abstract getOrderedPropertiesName(properties: Property[]): string[];
}