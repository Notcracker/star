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
var kasko_service_1 = require('./kasko.service');
var template_service_1 = require('../../common/template.service');
var dynamic_loader_component_1 = require('../../common/dynamic-loader.component');
var KaskoComponent = (function () {
    function KaskoComponent(kaskoService, templateService, dynamicComponentLoader) {
        this.kaskoService = kaskoService;
        this.templateService = templateService;
        this.dynamicComponentLoader = dynamicComponentLoader;
    }
    KaskoComponent.prototype.ngOnInit = function () {
        var data = this.kaskoService.getTemplateData();
        this.forTemplate = this.templateService.generateTemplate(data);
    };
    ;
    KaskoComponent.prototype.ngAfterViewInit = function () {
        this.dynamicComponentLoader.addComponent(this.forTemplate, this.container);
    };
    ;
    __decorate([
        core_1.ViewChild('container', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], KaskoComponent.prototype, "container", void 0);
    KaskoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kasko',
            template: "\n    <div #container></div>\n  ",
            providers: [
                kasko_service_1.KaskoService,
                template_service_1.TemplateService,
                dynamic_loader_component_1.DynamicComponentLoader
            ]
        }), 
        __metadata('design:paramtypes', [kasko_service_1.KaskoService, template_service_1.TemplateService, dynamic_loader_component_1.DynamicComponentLoader])
    ], KaskoComponent);
    return KaskoComponent;
}());
exports.KaskoComponent = KaskoComponent;
//# sourceMappingURL=kasko.component.js.map