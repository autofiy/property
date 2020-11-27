import { Property } from '../Core/Property';
import { PropertiesConfiguration } from "../Core/PropertiesConfiguration";
import { MiddlewareBase } from "./Middleware";

export class TitleMapperMiddleware extends MiddlewareBase {

    private configuration: PropertiesConfiguration;

    public constructor(configuration: PropertiesConfiguration) {
        super();
        this.configuration = configuration;
    }

    handle(properties: Property[]): Property[] {
        return properties.map(property => {
            const title = this.configuration.titles?.[property.name];
            if (title) {
                property.title = title;
            }
            return { ...property };
        });
    }

}