import { ISettingsService } from "app/interfaces/services/ISettingsService";
export class MenuService {
    constructor(private settings: ISettingsService) {
    }
    public getMenuItems(): Object[] {
        return this.settings.menu;
    }
}
