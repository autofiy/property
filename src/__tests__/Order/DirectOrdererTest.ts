import { Property } from '../../Core/Property';
import { DirectOrderer } from './../../Order/DirectOrderer';
describe('DirectOrderer', () => {

    it('should return order as is', function () {
        const ordering = new DirectOrderer();
        const properties: Property[] = [{name: 'name', title: 'name'}, {name: 'age', title: 'age'}, {
            name: 'email',
            title: 'email'
        }];
        const result = ordering.order(properties);
        expect(result).toEqual(properties);
    });

});