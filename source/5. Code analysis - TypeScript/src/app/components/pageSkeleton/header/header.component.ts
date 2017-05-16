import "./header.scss";
export default class HeaderComponent implements ng.IComponentOptions {
        public template: string;
        public bindings: any;

        constructor() {
            this.bindings = {
                caption: "@",
            };
            this.template =  require("./header.tpl.html");
        }
}
