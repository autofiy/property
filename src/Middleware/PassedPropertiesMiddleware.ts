import { Property } from './../Core/Property';
import { PropertiesConfiguration } from "../Core/PropertiesConfiguration";
import { MiddlewareBase } from "./Middleware";

export class PassedPropertiesMiddleware extends MiddlewareBase {

    private readonly configuration: PropertiesConfiguration;

    constructor(configuration: PropertiesConfiguration) {
        super();
        this.configuration = configuration;
    }

    handle(properties: Property[]): Property[] {
        let passedProperties = this.configuration.properties;
        if (passedProperties) {
            this.break();
            return passedProperties;
        }
        return properties;
    }

}