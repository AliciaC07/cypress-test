export default class NRObjects{
  addNewClientBtn(){
    return cy.get("span").contains("Registrar Cliente")
  }
  attachFileinput(){
    return cy.get('input[type="file"]')
  }
  nextStepbtn(){
    return cy.get('span',{timeout:60000}).contains("Próximo paso")
    .should('be.visible') // Verifica que sea visible
    .should('not.be.disabled') // Verifica que no esté deshabilitado
    .then(() => {
      cy.wait(2000); // Espera 2 segundos después de confirmar que el botón está habilitado
    });
  }
  generalInfoBtn(){
    return cy.get("span").contains("Información General")
  }
  domicilioInfoBtn(){
    return cy.get("span").contains("Domicilio")
  }
  inputField(index){
    return cy.get("input.t-input").eq(index)
  }
  genderSelect(){
    return cy.get('[formcontrolname="gender"]')
  }
  selectOption(option){
    return cy.get('span').contains(option)
  }
  maritalStatusSelect(){
    return cy.get('[formcontrolname="maritalStatus"]')
  }
  zoneSelect(){
    return cy.get('[formcontrolname="zoneId"]')
  }
  addressInputField(){
    return cy.get('[formcontrolname="directionAddress"]')
  }
  ownPropertychkbox(){
    return cy.get('[formcontrolname="ownProperty"]') 
  }
  timeInputField(){
    return cy.get('[formcontrolname="timeInTheSamePlace"]')
  }
  dependantsInputField(){
    return cy.get('[formcontrolname="dependantsNumber"]')
  }
  laboralInfoBtn(){
    return cy.get("span").contains("Información laboral")
  }
  salaryInputField(){
    return cy.get('[formcontrolname="salary"]')
  }
  expensesInputField(){
    return cy.get('[formcontrolname="expenses"]')
  }
  occupationInputField(){
    return cy.get('[formcontrolname="occupation"]')
  }
  jobPhoneInputField(){
    return cy.get('[formcontrolname="workPhone"]')
  }
  jobAddressInputField(){
    return cy.get('[formcontrolname="workDirection"]')
  }
  clientReferenceInputField(){
    return cy.get('[formcontrolname="refNameValue"]')
  }
  clientReferenceNumberInputField(){
    return cy.get('[formcontrolname="refPhoneValue"]')
  }
  registerBtn(){
    return cy.get("span").contains("Registrar")
  }


}