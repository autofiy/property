import { SimpleOrderer } from '../../Order/SimpleOrderer';
import { OrderingMiddleware } from './../../Middleware/OrderingMiddleware';
describe("OrderingMiddleware" , () => {

    it("should return properties ordered" , () => {
        const simpleOrderer = new SimpleOrderer({orderBy : ["year" , "name"]});
        const middleware = new OrderingMiddleware(simpleOrderer);
        const properties = middleware.handle([{name : 'name' , title : 'name'} , {name : 'year' , title : 'year'}]);
        expect(properties).toEqual([{name : 'year' , title : 'year'} , {name : 'name' ,  title : 'name'}]);
    });

});