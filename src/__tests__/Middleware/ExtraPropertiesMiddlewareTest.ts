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
    })
});