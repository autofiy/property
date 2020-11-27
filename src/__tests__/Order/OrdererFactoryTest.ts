import { DirectOrderer } from './../../Order/DirectOrderer';
import { CustomOrderer } from '../../Order/CustomOrderer';
import { SimpleOrderer } from '../../Order/SimpleOrderer';
import { DefaultOrdererFactory } from './../../Order/OrdererFactory';
describe('DefaultOrdererFactory', () => {

    it('should generate SimpleOrdering', function () {
        const factory = new DefaultOrdererFactory({
            orderBy: ['a', 'b']
        });
        const ordering = factory.getOrderer();
        expect(ordering).toBeInstanceOf(SimpleOrderer);
    });

    it('should generate CustomOrdering', function () {
        const factory = new DefaultOrdererFactory({
            orderBy: () => ['a', 'b']
        });
        const ordering = factory.getOrderer();
        expect(ordering).toBeInstanceOf(CustomOrderer);
    });

    it('should generate NoOrdering', function () {
        const factory = new DefaultOrdererFactory({});
        const ordering = factory.getOrderer();
        expect(ordering).toBeInstanceOf(DirectOrderer);
    });

});