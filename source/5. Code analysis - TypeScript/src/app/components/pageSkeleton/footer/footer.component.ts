import "./footer.scss";
export default class FooterComponent implements ng.IComponentOptions {
        public template: string;
        constructor() {
            this.template =  require("./footer.tpl.html");
        }
}
