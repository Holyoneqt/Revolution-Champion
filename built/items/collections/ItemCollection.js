define(["require", "exports", "../../util/ItemStacker"], function (require, exports, ItemStacker_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Base Class for all Item Collections. Cannot be instanciated.
     * @export
     * @abstract
     * @class ItemCollection
     */
    var ItemCollection = /** @class */ (function () {
        function ItemCollection() {
            this.items = new Array();
        }
        /**
         * Adds an Item to the Collection.
         * @param {Item} item Item to add.
         * @memberof ItemCollection
         */
        ItemCollection.prototype.add = function (item) {
            this.items.push(item);
        };
        /**
         * Gets a given amount of Random Items from the Collection. (Default is 1 Item);
         * @param {number} [amount=1] Amount of Items to return
         * @memberof ItemCollection
         */
        ItemCollection.prototype.getRandom = function (amount) {
            if (amount === void 0) { amount = 1; }
            var stacker = new ItemStacker_1.ItemStacker();
            for (var i = 0; i < amount; i++) {
                var next = this.items[Math.floor(Math.random() * this.items.length)];
                stacker.addItem(next);
            }
            return stacker.get();
        };
        return ItemCollection;
    }());
    exports.ItemCollection = ItemCollection;
});
//# sourceMappingURL=ItemCollection.js.map