import MenuController from "./menu.controller";

export default class MenuComponent implements ng.IComponentOptions {
        public template: string;
        public controller: any;

        constructor() {
            this.template =  require("./menu.tpl.html");
            this.controller = MenuController;
        }
}
