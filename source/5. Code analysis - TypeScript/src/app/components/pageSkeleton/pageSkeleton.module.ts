import * as angular from "angular";
import FooterComponent from "./footer/footer.component";
import HeaderComponent from "./header/header.component";
import MenuComponent from "./menu/menu.component";

angular.module("App.PageSkeleton", [])
    .component("topMenu", new MenuComponent())
    .component("pageHeader", new HeaderComponent())
    .component("pageFooter", new FooterComponent());
