import {State }from "StateDecorator";

@State( {
    component: "componentA",
    name: "componentA",
    url: "/componentA",
})
export default class ComponentA implements ng.IComponentOptions {
        public template: string;

        constructor() {
            this.template = require("./componentA.tpl.html");
        }
}
