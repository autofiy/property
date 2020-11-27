import { PropertiesConfiguration } from "../Core/PropertiesConfiguration";
import { Property } from "../Core/Property";
import { MiddlewareBase } from "./Middleware";

export class ExtraPropertiesMiddleware extends MiddlewareBase {

    private readonly configuration: PropertiesConfiguration;

    constructor(configuration: PropertiesConfiguration) {
        super();
        this.configuration = configuration;
    }

    handle(properties: Property[]): Property[] {
        if (properties.length === 0) {
            return properties;
        }
        let extraProperties = this.configuration.extraProperties;
        if (extraProperties) {
            return properties.concat(extraProperties);
        }
        return properties;
    }

}