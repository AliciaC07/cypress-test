export default class MenuObjects{
  sideBarContainer(){
    return cy.get("app-sidebar .sidenav") 
  }
  menuOption(option){
    return cy.get('span').contains(option)
  }
  
}