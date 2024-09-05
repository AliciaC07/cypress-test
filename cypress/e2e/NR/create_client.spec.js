import MenuActions from "../../pageObjects/Menu/menuActions";
import NRActions from "../../pageObjects/NR/nr_action";
///Test for the creation of client

const menu = new MenuActions()
const nr = new NRActions()

const email = Cypress.env().login.username;
const password = Cypress.env().login.password;
const client = Cypress.env().test_client;

describe("Test for the client creation", () => {
  beforeEach(() => {
    cy.login(email, password)
  });

  it("user goes to create client", () => {
    menu.menuGoTo('Clientes')
    nr.clickAddNewClientBtn()
    nr.uploadImage()
    nr.clickNextStepBtn()
    nr.fillGeneralInfoForm(client)
    nr.fillDomicilioForm(client)
    nr.fillJobInfoForm(client)
    nr.clickNextStepBtn()
    nr.fillReferenceForm(client)
    nr.clickRegisterButton()
  });
});
