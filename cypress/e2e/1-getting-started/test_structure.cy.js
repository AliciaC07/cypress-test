let add = (a,b) => a +b;
let subtract = (a,b) => a -b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;


//decribe
describe('Unit testing for our dummy app',() =>{
    context('Math with POSITIVE numbers', ()=>{
        it('should add positive numbers', () => {
            expect(add(1,2)).to.eq(3);

        });
        it('should subtract positive numbers', () => {
            expect(subtract(4,2)).to.eq(2);

        });
        it('should divide positive numbers', () => {
            expect(divide(4,2)).to.eq(2);
        });
        it('should multiply positive numbers', () => {
            expect(multiply(4,2)).to.eq(8);
        });

    });
    describe('Math with DECIMAL numbers', ()=>{
        it('should add decimal numbers', () => {
            expect(add(1.5,2.5)).to.eq(4);



        });
        it('should subtract decimal numbers', () => {
            expect(subtract(4.5,2.5)).to.eq(2);


        });

    });
})