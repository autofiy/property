import { AutoDetectMiddleware } from './../../Middleware/AutoDetectMiddleware';
describe("AutoDetectMiddleware", () => {

    it("should detect properties", () => {
        const item: any = { a: 'A', b: 'B' };
        const middleware = new AutoDetectMiddleware(item);
        const properties = middleware.handle([]);
        expect(properties).toEqual([{ name: 'a', title: 'a' }, { name: 'b', title: 'b' }]);
    })

});