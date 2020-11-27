import { TitleMapperMiddleware } from './../../Middleware/TitleMapperMiddleware';
import { Property } from './../../Core/Property';
import { PropertiesConfiguration } from './../../Core/PropertiesConfiguration';
describe("TitleMapperMiddleware", () => {

    it("should map titles", () => {
        const configuration: PropertiesConfiguration = {
            titles: {
                age: 'THE Age',
                year: 'THE Year'
            }
        };
        const middleware = new TitleMapperMiddleware(configuration);
        const properties: Property[] = [{ name: 'name', title: 'name' }, { name: 'age', title: 'age' }, { name: 'year', title: 'Year' }];
        const result = middleware.handle(properties);
        const toMatchProperties: Property[] = [{ name: 'name', title: 'name' }, { name: 'age', title: 'THE Age' }, { name: 'year', title: 'THE Year' }];
        expect(result).toEqual(toMatchProperties);
    })

});