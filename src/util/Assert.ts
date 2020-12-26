import Player from "../constants/Player";
import Action from "../constants/Action";
import Exclusivity from "../constants/Exclusivity";

export const Assert = {
    isString(arg: any): void {
        if (typeof arg !== "string") {
            throw new Error("Expected argument to be string, but was " + typeof arg);
        }
    },
    isPlayer(arg: any) {
        if (!Object.keys(Player).includes(arg)) {
            throw new Error("Expected argument to be a valid Player value, but was " + arg);
        }
    },
    isPlayerOrUndefined(arg: any) {
        if (arg === undefined) {
            return;
        }
        this.isPlayer(arg);
    },
    isAction(arg: any) {
        if (!Object.keys(Action).includes(arg)) {
            throw new Error("Expected argument to be a valid Action value, but was " + arg);
        }
    },
    isExclusivity(arg: any) {
        if (!Object.keys(Exclusivity).includes(arg)) {
            throw new Error("Expected argument to be a valid Exclusivity value, but was " + arg);
        }
    },
    isBoolean(arg: any) {
        if (![true, false].includes(arg)) {
            throw new Error("Expected argument to be a valid boolean value, but was " + arg);
        }
    }
};