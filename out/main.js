function Print_Pyramid(totalLine) {
    for (var currentLine = 0; currentLine < totalLine; currentLine++) {
        var singleLineStr = "";
        for (var spaceCount = totalLine - currentLine; spaceCount > 0; spaceCount--) {
            singleLineStr += " ";
        }
        for (var starCount = 0; starCount < (currentLine * 2) - 1; starCount++) {
            singleLineStr += "*";
        }
        console.log(singleLineStr);
    }
}
window.onload = function () {
    Print_Pyramid(5);
};
