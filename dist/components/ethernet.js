"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ethernet = void 0;
const base_1 = require("./base");
/**
 * Handles the Ethernet services of a device.
 */
class Ethernet extends base_1.Component {
    constructor(device) {
        super('Eth', device);
        /**
         * IP address of the device.
         */
        this.ip = null;
    }
}
__decorate([
    base_1.characteristic
], Ethernet.prototype, "ip", void 0);
exports.Ethernet = Ethernet;
//# sourceMappingURL=ethernet.js.map