import {Transformer} from '../Transformer/Transformer';
import {Property} from "./Property";

export interface PropertiesConfiguration {
    properties?: Property[];
    titles?: { [name: string]: string };
    extraProperties?: Property[];
    orderBy?: string[] | ((properties: Property[]) => string[]);
    renderTitle?: {
        [name: string]: (property: Property, autofiyable: any) => any;
    },
    renderValue?: {
        [name: string]: (property: Property, data: any, metadata: any, autofiyable: any) => any;
    },
    transformer?: {
        [name: string]: (metadata: any, autofiyable: any) => Transformer
    },
    extra?: any;
}