import { PropertiesConfiguration } from './../../Core/PropertiesConfiguration';
import { ExtraPropertiesMiddleware } from './../../Middleware/ExtraPropertiesMiddleware';
describe("ExtraPropertiesMiddleware", () => {
    it("should append the extra properties", () => {
        const configuration: PropertiesConfiguration = {
            extraProperties: [{ name: 'action', title: 'Action' }]
        };
        const middleware = new ExtraPropertiesMiddleware(configuration);
        const properties = middleware.handle([{ name: 'name', title: 'Name' }]);
        expect(properties).toEqual([
            { name: 'name', title: 'Name' }, { name: 'action', title: 'Action' }
        ]);
    });

    it("should return empty array if passed properties are empty", () => {
        const configuration: PropertiesConfiguration = {
            extraProperties: [{ name: 'action', title: 'Action' }]
        };
        const middleware = new ExtraPropertiesMiddleware(configuration);
        const properties = middleware.handle([]);
        expect(properties).toEqual([]);
    });


    it("should passed properties when no extra properties supplied", () => {
        const configuration: PropertiesConfiguration = {};
        const middleware = new ExtraPropertiesMiddleware(configuration);
        const properties = middleware.handle([{ name: 'name', title: 'Name' }]);
        expect(properties).toEqual([{ name: 'name', title: 'Name' }]);
    });
});