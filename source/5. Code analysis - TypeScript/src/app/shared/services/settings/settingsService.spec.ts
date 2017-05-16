import SettingsService from "./settingsService";
declare let angular: any;

describe("Service: SettingsService", () => {
    let settingsService: SettingsService;
    let module;
    beforeEach(() => {
        settingsService = new SettingsService();
        module = angular.mock.module("App");
    });

    describe("on getting url", () => {
        it("url should start with '/'", () => {
            let url = settingsService.baseUrl;
            expect(url[0] === ("/")).toBe(true);
        });
    });

    describe(" when getting menu Items ", () => {
        it("all Items Shoul have caption and sref fields", () => {
            let menu = settingsService.menu;
            angular.forEach(menu , (v: any ) => {
                    expect(v.sref).toBeDefined();
                    expect(v.caption).toBeDefined();
                });
        });
    });
});