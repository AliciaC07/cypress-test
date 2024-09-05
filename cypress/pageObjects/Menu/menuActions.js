import MenuObjects from "./menuObjects";

const objects = new MenuObjects();

export default class MenuActions{
  menuGoTo(option){
    objects.sideBarContainer().realHover();
    objects.menuOption(option).click()
  }

}