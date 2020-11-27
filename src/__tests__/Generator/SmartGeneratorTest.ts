import { DefaultOrdererFactory, OrdererFactory } from './../../Order/OrdererFactory';
import { PropertiesConfiguration } from './../../Core/PropertiesConfiguration';
import { SmartGenerator } from './../../Generator/SmartGenerator';

describe("SmartGenerator", () => {
    it("should generate properties", () => {
        const configuration: PropertiesConfiguration = {
            extraProperties: [{ name: 'action', title: 'Action' }],
            orderBy: ["name", "id", "action"],
            titles: { name: "THE Name" },
        };
        const data: any = { id: 1, name: "Ali Faris" };
        const ordererFactory: OrdererFactory = new DefaultOrdererFactory(configuration);
        const generator = new SmartGenerator(configuration, data, ordererFactory);
        const properties = generator.generate();
        expect(properties).toEqual([
            { name: "name", title: "THE Name" },
            { name: "id", title: "id" },
            { name: "action", title: "Action" }
        ]);
    });


    it("should generate properties using passed properties", () => {
        const configuration: PropertiesConfiguration = {
            properties: [{ name: "test", title: "Test" }],
            extraProperties: [{ name: 'action', title: 'Action' }],
            orderBy: ["name", "id", "action"],
            titles: { name: "THE Name" },
        };
        const data: any = { id: 1, name: "Ali Faris" };
        const ordererFactory: OrdererFactory = new DefaultOrdererFactory(configuration);
        const generator = new SmartGenerator(configuration, data, ordererFactory);
        const properties = generator.generate();
        expect(properties).toEqual([
            { name: "test", title: "Test" },
        ]);
    });
});