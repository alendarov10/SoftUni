function areaOfFigures(shape, inputTwo, inputThree) {
    let area = 0;
    if (shape == "square") {
        let side = inputTwo;
        area = side * side;
    } else if (shape == "rectangle") {
        let sideA = inputTwo;
        let sideB = inputThree;
        area = sideA * sideB;
    } else if (shape == "circle") {
        let radius = inputTwo;
        area = Math.PI * radius * radius;
    } else if (shape == "triangle") {
        let side = inputTwo;
        let h = inputThree;
        area = side * h / 2;
    }
    console.log(area.toFixed(3));
}
areaOfFigures("square", 5);