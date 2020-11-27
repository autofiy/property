import { Property } from "../../Core/Property";
import { SimpleOrderer } from "../../Order/SimpleOrderer";

describe('SimpleOrderer', () => {

    it('should order based on string array', function () {
        const ordering = new SimpleOrderer({ orderBy: ['name', 'email', 'age'] });
        const properties: Property[] = [
            { name: 'age', title: 'age' },
            { name: 'name', title: 'name' },
            { name: 'email', title: 'email' }
        ];
        const result = ordering.order(properties);
        expect(result).toEqual([
            { name: 'name', title: 'name' },
            { name: 'email', title: 'email' },
            { name: 'age', title: 'age' },
        ]);
    });


    it('should skip not found property', function () {
        const ordering = new SimpleOrderer({ orderBy: ['not exists', 'name'] });
        const properties: Property[] = [{ name: 'name', title: 'name' }];
        const result = ordering.order(properties);
        expect(result).toEqual([{ name: 'name', title: 'name' }]);
    });

});