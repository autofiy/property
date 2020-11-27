import { CustomTransformer, DirectTransformer } from './../../Transformer/Transformer';
describe("Transformer", () => {

    describe("CustomTransformer", () => {
        it("should transform value", () => {
            const transformer = new CustomTransformer({ name: 'Ali' }, (item: any) => item.name + "_TRANSFORMED");
            const value = transformer.transform({ name: 'name', title: 'name' });
            expect(value).toEqual("Ali_TRANSFORMED");
        });
    });

    describe("DirectTransformer", () => {
        it("should return value directly", () => {
            const transformer = new DirectTransformer({ name: 'Ali' });
            const value = transformer.transform({ name: 'name', title: 'name' });
            expect(value).toEqual("Ali");
        });
    });

});