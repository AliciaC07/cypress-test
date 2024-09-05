///Test for the creation of client

describe("Test for the client creation", () => {
  beforeEach(() => {
    cy.visit("https://develop.neoroutemee.com/auth/login");
    cy.fixture("login_creds.json").then((data) => {
      cy.get("input[type=text]").should('be.visible').type(data.username);
      cy.get("input[type=password]").should('be.visible').type(data.password);
    });
    cy.get("span").contains(" Iniciar Sesión").click();
  });

  it("user goes to create client", () => {
    cy.get("app-sidebar .sidenav") 
      .trigger("mouseover"); 
    cy.get('a[href="/client/client-list"]')
      .click();

    cy.get("span").contains("Registrar Cliente").click();

    //registrando cliente
    cy.log("upload image ID");
    const filePath = "image.png";
    cy.get('input[type="file"]').attachFile(filePath);
    cy.get(".textLink").should("contain", "Elegir archivo");
    cy.get("span").contains(" Próximo paso ").click();
    cy.log("upload image profile");
    cy.get('input[type="file"]').attachFile(filePath);
    cy.get("span").contains(" Próximo paso ").click();

    //Info general
    cy.get("span").contains(" Información General* ").click();

    cy.fixture("new_client.json").then((client) => {
      cy.get("input.t-input").eq(1).type(client.id);
      cy.get("input.t-input").eq(2).type(client.name);
      cy.get("input.t-input").eq(3).type(client.lastname);
      cy.get("input.t-input").eq(4).type(client.nickname);
      cy.get("input.t-input").eq(5).type(client.birthDate);
      cy.get("input.t-input").eq(6).type(client.email);
      cy.get("input.t-input").eq(7).type(client.phone);
      cy.get("input.t-input").eq(8).type(client.telephone);

      cy.get('tui-combo-box[formcontrolname="gender"]') 
        .click();

      cy.get('span').contains('Femenino').should('be.visible').click();
  
      cy.get('tui-combo-box[formcontrolname="maritalStatus"]').click();
      cy.get('span').contains('Soltero').should('be.visible').click();
      
      //domicilio
      cy.get("span").contains("Domicilio*").click();
      cy.get('tui-combo-box[formcontrolname="zoneId"').click();
      cy.get('span').contains(client.zone).click();
      
      cy.get('tui-input[formcontrolname="directionAddress"]')
      .type(client.address);
      cy.get('tui-checkbox-block[formcontrolname="ownProperty"]') 
        .click();
      cy.get('tui-input[formcontrolname="timeInTheSamePlace"]').type(client.timeAddres);
      cy.get('tui-input-number[formcontrolname="dependantsNumber"]').type(client.numDependientes);

      ///Info laboral
      cy.get("span").contains("Información laboral").click();
      cy.get('tui-input-number[formcontrolname="salary"]').type(client.salary);
      cy.get('tui-input-number[formcontrolname="expenses"]').type(client.expenses);
      cy.get('tui-input[formcontrolname="occupation"]').type(client.occupation);
      cy.get('tui-input[formcontrolname="workPhone"]').type(client.jobPhone);
      cy.get('tui-input[formcontrolname="workDirection"]').type(client.jobAddress);
      cy.get("span").contains(" Próximo paso ").click();

      //referencia personal
      cy.get('tui-input[formcontrolname="refNameValue"]').type(client.reference);
      cy.get('tui-input-phone[formcontrolname="refPhoneValue"]').type(client.referencePhone);
      cy.get("span").contains("Registrar").click();



      
    });
    
  });
});
