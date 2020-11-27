import { PropertiesConfiguration } from './../../Core/PropertiesConfiguration';
import { ExtraPropertiesMiddleware } from './../../Middleware/ExtraPropertiesMiddleware';
import { PassedPropertiesMiddleware } from './../../Middleware/PassedPropertiesMiddleware';
import { DefaultMiddlewareGroup } from './../../Middleware/MiddlewareGroup';
import { AutoDetectMiddleware } from '../../Middleware/AutoDetectMiddleware';

describe("DefaultMiddlewareTest", () => {
    it("return properties without breaking", () => {
        const configuration: PropertiesConfiguration = { extraProperties: [{ name: 'action', title: 'Action' }] };
        const group = new DefaultMiddlewareGroup([
            new PassedPropertiesMiddleware(configuration),
            new AutoDetectMiddleware({ name: 'Ali', year: 1993 }),
            new ExtraPropertiesMiddleware(configuration),
        ]);
        const properties = group.execute();
        expect(properties).toEqual([
            { name: 'name', title: 'name' }, { name: 'year', title: 'year' }, { name: 'action', title: 'Action' }
        ]);
    });


    it("return properties with breaking", () => {
        const configuration: PropertiesConfiguration = {
            extraProperties: [{ name: 'action', title: 'Action' }],
            properties: [{ name: 'break', title: 'Break' }]
        };
        const group = new DefaultMiddlewareGroup([
            new PassedPropertiesMiddleware(configuration),
            new AutoDetectPropertiesMiddleware({ name: 'Ali', year: 1993 }),
            new ExtraPropertiesMiddleware(configuration),
        ]);
        const properties = group.execute();
        expect(properties).toEqual([{ name: 'break', title: 'Break' }]);
    });
})