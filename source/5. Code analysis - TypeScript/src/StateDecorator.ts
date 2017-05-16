import * as angular from "angular";
import {Ng1StateDeclaration , StateProvider} from "angular-ui-router";

export function State(state: Ng1StateDeclaration) {
    return (target) => {
        StatesBootstraper.getInstance().addState(state);
    };
}

export class StatesBootstraper {
    public static getInstance(): StatesBootstraper {
        return StatesBootstraper.instance;
    }

    private static instance: StatesBootstraper = new StatesBootstraper();
    private states: any[] = [];

    private constructor() {
    }

    public addState(stateDeclaration: Ng1StateDeclaration): void {
        this.states.push(stateDeclaration);
    }

    public registerStates(stateProvider: StateProvider): void {
        angular.forEach(this.states , (state) => {
            stateProvider.state(state);
        });
        this.states = [];
    };
}
