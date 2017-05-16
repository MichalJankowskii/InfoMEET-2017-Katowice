import * as angular from "angular";
import { appHttpConfig } from "./app/config/httpConfig/httpConfig";
import { provideState } from "./app/config/stateConfig/stateConfig";
import "./imports/basic";
import "./imports/libs";
import "./imports/styles";

const externalModulesNames: any[] = [
  "ui.router",
  "ui.bootstrap",
  "ngAnimate",
  "ngSanitize",
  "App.Services",
  "App.PageSkeleton",
  "App.Home",
  "App.ComponentA",
  "App.ComponentB",
];
let baseModule: angular.IModule = angular.module("App", externalModulesNames);
baseModule.config(provideState);
baseModule.config(appHttpConfig);
angular.bootstrap(document, [baseModule.name]);
