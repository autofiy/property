import { PropertiesConfiguration } from './../Core/PropertiesConfiguration';
import { DefaultMiddlewareGroup } from './../Middleware/MiddlewareGroup';
import { TitleMapperMiddleware } from './../Middleware/TitleMapperMiddleware';
import { AutoDetectMiddleware } from '../Middleware/AutoDetectMiddleware';
import { PassedPropertiesMiddleware } from '../Middleware/PassedPropertiesMiddleware';
import { MiddlewareGroup } from './../Middleware/MiddlewareGroup';
import { GeneratorBase } from "./Generator";
import { ExtraPropertiesMiddleware } from '../Middleware/ExtraPropertiesMiddleware';
import { Middleware } from '../Middleware/Middleware';
import { OrdererFactory } from '../Order/OrdererFactory';
import { OrderingMiddleware } from '../Middleware/OrderingMiddleware';

export class SmartGenerator extends GeneratorBase {

    private readonly ordererFactory: OrdererFactory;

    constructor(configuration: PropertiesConfiguration, data: any, orderFactory: OrdererFactory) {
        super(configuration, data);
        this.ordererFactory = orderFactory;
    }

    protected getMiddlewareGroup(): MiddlewareGroup {
        const configuration = this.getOptions();
        const middlewareArr: Middleware[] = [
            new PassedPropertiesMiddleware(configuration),
            new AutoDetectMiddleware(this.getRow()),
            new TitleMapperMiddleware(configuration),
            new ExtraPropertiesMiddleware(configuration),
            new OrderingMiddleware(this.ordererFactory.getOrderer()),
        ];
        return new DefaultMiddlewareGroup(middlewareArr);
    }

}