describe('Demo de hooks', function(){
    before(
        function(){
            cy.log('before')
        }
    );
    beforeEach(
        function(){
            cy.log('beforeEach')
        }
    );
    it('should be test #1', function(){
        console.log('test #1');

    });
    it('should be test #1', function(){

        console.log('test #2');
    });
    it('should be test #1', function(){

        console.log('test #3');

    });
    afterEach(
        function(){
            cy.log('afterEach')
        }
    );
    after(
        function(){
            cy.log('after')
        }
    );
})