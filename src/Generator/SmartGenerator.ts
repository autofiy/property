import { DefaultMiddlewareGroup } from './../Middleware/MiddlewareGroup';
import { TitleMapperMiddleware } from './../Middleware/TitleMapperMiddleware';
import { AutoDetectMiddleware } from '../Middleware/AutoDetectMiddleware';
import { PassedPropertiesMiddleware } from '../Middleware/PassedPropertiesMiddleware';
import { MiddlewareGroup } from './../Middleware/MiddlewareGroup';
import { GeneratorBase } from "./Generator";
import { ExtraPropertiesMiddleware } from '../Middleware/ExtraPropertiesMiddleware';
import { Middleware } from '../Middleware/Middleware';

export class SmartPropertyGenerator extends GeneratorBase {

    protected getMiddlewareGroup(): MiddlewareGroup {
        const configuration = this.getOptions();
        // const orderingFactory = new DefaultPropertyOrderingFactory(configuration);
        const middlewareArr: Middleware[] = [
            new PassedPropertiesMiddleware(configuration),
            new AutoDetectMiddleware(this.getRow()),
            new TitleMapperMiddleware(configuration),
            new ExtraPropertiesMiddleware(configuration),
            // new OrderingPropertyMiddleware(orderingFactory.getOrdering()),
        ];
        return new DefaultMiddlewareGroup(middlewareArr);
    }

}