import * as angular from "angular";
import { ISettingsService } from "app/interfaces/services/ISettingsService";

export default class SettingsService implements ISettingsService {

    public baseUrl: string = "/";
    public menu: Object[] = [
        {
            caption: "Home",
            sref: "home",
        } ,
        {
            caption: "Component A",
            sref: "componentA",
        } ,
        {
            caption: "Component B",
            sref: "componentB",
        } ,
    ];
}
