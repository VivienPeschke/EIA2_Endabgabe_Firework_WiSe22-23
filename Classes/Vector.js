"use strict";
var testfirework;
(function (testfirework) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    testfirework.Vector = Vector;
})(testfirework || (testfirework = {}));
//# sourceMappingURL=Vector.js.map