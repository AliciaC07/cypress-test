describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })

    it('Enters page', () =>{
      cy.visit('https://google.com');
      cy.get('textarea[name=q]').type('Hora en segundos{enter}');
      
    })
  })