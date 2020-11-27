import { PropertiesConfiguration } from "../Core/PropertiesConfiguration";
import { Property } from "../Core/Property";
import { MiddlewareGroup } from '../Middleware/MiddlewareGroup';


export interface Generator {
    generate(): Property[];
}

export abstract class GeneratorBase implements Generator {

    private readonly configurations: PropertiesConfiguration;
    private readonly data : any;

    public constructor(configuration : PropertiesConfiguration , data: any) {
        this.configurations = configuration;
        this.data = data;
    }

    generate(): Property[] {
        return this.getMiddlewareGroup().execute();
    }

    protected getOptions(): PropertiesConfiguration {
        return this.configurations;
    }

    protected getRow(): any {
        let data = this.data;
        if (!data || !Array.isArray(data) || data.length === 0) {
            return {};
        }
        return data[0];
    }

    protected abstract getMiddlewareGroup(): MiddlewareGroup;

}


