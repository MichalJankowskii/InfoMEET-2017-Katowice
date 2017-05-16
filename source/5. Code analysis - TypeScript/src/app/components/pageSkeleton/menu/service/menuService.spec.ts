import SettingsService from "../../../../shared/services/settings/settingsService";
import {MenuService} from "./menuService";

declare let angular: any;

describe("Service: MenuService", () => {
    let menuService: MenuService;
    let settings;
    let CreateService = () => {
              return new MenuService(settings as SettingsService) ;
         };
    beforeEach(angular.mock.module("App"));

    beforeEach(angular.mock.inject(($injector) => {
                settings = $injector.get("settingsService"); ;
         }));

    it("should be created and dependency should be inected ", () =>  {
         let s = CreateService();

         expect(settings.menu).toBeDefined();
         expect(settings).toBeDefined();
         expect(s).toBeDefined();

    });
    it("should return this same menu items as settings service (and should have at least one item )", () =>  {
         let s = CreateService();
         expect(s.getMenuItems()).toBe(settings.menu);
         expect(s.getMenuItems().length).toBeGreaterThan(0);
        },
    );

});
