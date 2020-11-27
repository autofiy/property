import { PropertiesConfiguration } from "../Core/PropertiesConfiguration";
import { CustomOrderer } from "./CustomOrderer";
import { DirectOrderer } from "./DirectOrderer";
import { Orderer } from "./Orderer";
import { SimpleOrderer } from "./SimpleOrderer";


export interface OrdererFactory {
    getOrderer(): Orderer;
}

export class DefaultOrdererFactory implements OrdererFactory {

    private readonly configuration: PropertiesConfiguration;

    constructor(configuration: PropertiesConfiguration) {
        this.configuration = configuration;
    }

    getOrderer(): Orderer {
        const orderBy = this.configuration.orderBy;
        if (Array.isArray(orderBy)) {
            return new SimpleOrderer(this.configuration);
        }

        if (typeof orderBy === "function") {
            return new CustomOrderer(this.configuration);
        }

        return new DirectOrderer();
    }


}