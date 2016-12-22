"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var osago_service_1 = require('./osago.service');
var template_service_1 = require('../../common/template.service');
var dynamic_loader_component_1 = require('../../common/dynamic-loader.component');
var OsagoComponent = (function () {
    function OsagoComponent(osagoService, templateService, dynamicComponentLoader) {
        this.osagoService = osagoService;
        this.templateService = templateService;
        this.dynamicComponentLoader = dynamicComponentLoader;
    }
    OsagoComponent.prototype.ngOnInit = function () {
        var data = this.osagoService.getTemplateData();
        this.forTemplate = this.templateService.generateTemplate(data);
    };
    OsagoComponent.prototype.ngAfterViewInit = function () {
        this.dynamicComponentLoader.addComponent(this.forTemplate, this.container);
    };
    __decorate([
        core_1.ViewChild('container', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], OsagoComponent.prototype, "container", void 0);
    OsagoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kasko',
            template: "\n    <div #container></div>\n  ",
            providers: [
                osago_service_1.OsagoService,
                template_service_1.TemplateService,
                dynamic_loader_component_1.DynamicComponentLoader
            ]
        }), 
        __metadata('design:paramtypes', [osago_service_1.OsagoService, template_service_1.TemplateService, dynamic_loader_component_1.DynamicComponentLoader])
    ], OsagoComponent);
    return OsagoComponent;
}());
exports.OsagoComponent = OsagoComponent;
//# sourceMappingURL=osago.component.js.map