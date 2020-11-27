import { Property } from "../../Core/Property";
import { CustomOrderer } from "../../Order/CustomOrderer";

describe('CustomOrderer', () => {
    it('should order properties based on function', function () {
        const properties: Property[] = [
            {name: 'age', title: 'age'},
            {name: 'name', title: 'name'},
            {name: 'email', title: 'email'}
        ];
        const orderFunction = (passedProperties: Property[]) => {
            expect(passedProperties).toEqual(properties);
            return ['name', 'email'];
        }
        const ordering = new CustomOrderer({orderBy: orderFunction});
        const result = ordering.order(properties);
        expect(result).toEqual([
            {name: 'name', title: 'name'},
            {name: 'email', title: 'email'},
        ]);
    });
});