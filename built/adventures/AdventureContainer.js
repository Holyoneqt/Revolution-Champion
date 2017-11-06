define(["require", "exports", "knockout", "./Adventure"], function (require, exports, ko, Adventure_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdventureContainer = /** @class */ (function () {
        function AdventureContainer() {
            this.data = ko.observableArray([
                new Adventure_1.Adventure('Plains', 3, 1, 1, 2),
                new Adventure_1.Adventure('Forest', 4, 5, 4, 7),
                new Adventure_1.Adventure('Cave', 5, 20, 18, 25),
                new Adventure_1.Adventure('Icy Mountain', 5, 30, 28, 35),
                new Adventure_1.Adventure('Abandoned Town', 7, 50, 45, 60),
                new Adventure_1.Adventure('Gates to Farfall', 10, 75, 70, 100)
            ]);
        }
        AdventureContainer.prototype.all = function () {
            return this.data;
        };
        return AdventureContainer;
    }());
    exports.AdventureContainer = AdventureContainer;
});
//# sourceMappingURL=AdventureContainer.js.map