import { ISettingsService } from "app/interfaces/services/ISettingsService";
import { MenuService } from "./service/menuService";

export default class MenuController {
    public menuItems: any[] ;

    constructor(settingsService: ISettingsService) {
        this.menuItems = new MenuService(settingsService).getMenuItems();
    }
}
