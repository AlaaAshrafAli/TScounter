var _a, _b, _c;
var Counter = /** @class */ (function () {
    function Counter() {
        this.value = 0;
        this.update();
    }
    Counter.prototype.increase = function () {
        this.value++;
        this.update();
    };
    Counter.prototype.decrease = function () {
        this.value--;
        this.update();
    };
    Counter.prototype.reset = function () {
        this.value = 0;
        this.update();
    };
    Counter.prototype.update = function () {
        document.getElementById("displayCount").innerHTML = this.value.toString();
    };
    return Counter;
}());
var counter = new Counter();
(_a = document.getElementById("increase")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    counter.increase();
});
(_b = document.getElementById("decrease")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    counter.decrease();
});
(_c = document.getElementById("reset")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    counter.reset();
});
counter.update();
