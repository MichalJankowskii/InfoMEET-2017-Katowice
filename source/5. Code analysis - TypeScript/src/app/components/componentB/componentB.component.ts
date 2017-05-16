import {State }from "StateDecorator";

@State( {
    component: "componentB",
    name: "componentB",
    url: "/componentB",
})
export default class ComponentB implements ng.IComponentOptions {
        public template: string;

        constructor() {
            this.template = require("./componentB.tpl.html");
        }
}
