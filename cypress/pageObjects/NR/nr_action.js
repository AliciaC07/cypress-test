import NRObjects from "./nr_objects";

const objects = new NRObjects()

export default class NRActions {
  clickAddNewClientBtn() {
    objects.addNewClientBtn().click();
  }
  clickNextStepBtn(){
    // objects.nextStepbtn().should('be.enabled');
    objects.nextStepbtn().realClick();
  }
  uploadImage() {
    objects.attachFileinput().attachFile("image.png")
    objects.nextStepbtn().realClick()
    objects.attachFileinput().attachFile("image.png")
  }
  fillGeneralInfoForm(client) {
    objects.generalInfoBtn().click();
    objects.inputField(1).type(client.id);
    objects.inputField(2).type(client.name);
    objects.inputField(3).type(client.lastname);
    objects.inputField(4).type(client.nickname);
    objects.inputField(5).type(client.birthDate);
    objects.inputField(6).type(client.email);
    objects.inputField(7).type(client.phone);
    objects.inputField(8).type(client.telephone);
    objects.genderSelect().click();
    objects.selectOption('Femenino').should('be.visible').click();

    objects.maritalStatusSelect().click();
    objects.selectOption('Soltero').should('be.visible').click()
  }
  fillDomicilioForm(client){
    objects.domicilioInfoBtn().click();
    objects.zoneSelect().click()
    objects.selectOption(client.zone).click();
    objects.addressInputField().type(client.address);
    objects.ownPropertychkbox().click()
    objects.timeInputField().type(client.timeAddress)
    objects.dependantsInputField().type(client.numDependientes)
  }
  fillJobInfoForm(client){
    objects.laboralInfoBtn().click()
    objects.salaryInputField().type(client.salary)
    objects.expensesInputField().type(client.expenses)
    objects.occupationInputField().type(client.occupation)
    objects.jobPhoneInputField().type(client.jobPhone)
    objects.jobAddressInputField().type(client.jobAddress)
  }
  fillReferenceForm(client){
    objects.clientReferenceInputField().type(client.reference)
    objects.clientReferenceNumberInputField().type(client.referencePhone)
  }
  clickRegisterButton(){
    objects.registerBtn().click()
  }

}