import { PropertiesConfiguration } from './../../Core/PropertiesConfiguration';
import { PassedPropertiesMiddleware } from './../../Middleware/PassedPropertiesMiddleware';
import { mock } from "jest-mock-extended";
import { Property } from '../../Core/Property';

describe("PassedPropertiesMiddleware", () => {
    it("should return passed properties from configuration", () => {
        const properties = [{ name: 'test', title: 'Test' }];
        const configuration = mock<PropertiesConfiguration>({
            properties: properties
        });
        const middleware = new PassedPropertiesMiddleware(configuration);
        const result = middleware.handle([]);
        expect(result).toEqual(properties);
        expect(middleware.shouldBreak()).toEqual(true);
    });


    it("should return properties passed to handle method when no properties in configuration exists", () => {
        const middleware = new PassedPropertiesMiddleware({});
        const properties: Property[] = [{ name: 'test', title: 'Test' }];
        const result = middleware.handle(properties);
        console.log(result);
        expect(result).toEqual(properties);
        expect(middleware.shouldBreak()).toEqual(false);
    });

});