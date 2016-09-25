

function print(x) {
    var str = "";
    for (var j = 0; j < x; j++) {
        str = "";
        for (var k = 0; k < x - j - 1; k++) {
            str += " ";
        }
        for (var i = 0; i < 2 * j + 1; i++) {
            str += "*";
        }
        console.log(str);
    }
}

window.onload = function () {
    print(5);
};
//# sourceMappingURL=main.js.map