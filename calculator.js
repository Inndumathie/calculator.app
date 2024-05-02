function Matrixmultiplication() {
    var row1 = parseInt(document.getElementById("row1").value);
    var col1 = parseInt(document.getElementById("col1").value);
    var row2 = parseInt(document.getElementById("row2").value);
    var col2 = parseInt(document.getElementById("col2").value);

    if (isNaN(row1) || isNaN(col1) || isNaN(row2) || isNaN(col2)) {
        alert("Please enter valid dimensions for both matrices.");
        return;
    }

    if (col1 !== row2) {
        alert("Number of columns in Matrix 1 should be equal to number of rows in Matrix 2 for multiplication.");
        return;
    }

    var matrix1 = [];
    var matrix2 = [];

    for (var i = 0; i < row1; i++) {
        matrix1[i] = [];
        for (var j = 0; j < col1; j++) {
            matrix1[i][j] = parseInt(prompt("Enter value for Matrix 1 at row " + (i + 1) + " and column " + (j + 1)));
        }
    }

    for (var i = 0; i < row2; i++) {
        matrix2[i] = [];
        for (var j = 0; j < col2; j++) {
            matrix2[i][j] = parseInt(prompt("Enter value for Matrix 2 at row " + (i + 1) + " and column " + (j + 1)));
        }
    }

    var result = multiply(matrix1, matrix2);

    document.getElementById("result").innerHTML = "<h2>Result:</h2>" + result.map(row => row.join(" ")).join("<br>");
}

function multiply(matrix1, matrix2) {
    var result = [];

    for (var i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (var j = 0; j < matrix2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }

    return result;
}


    var result = multiplyMatrices(matrix1, matrix2);

    document.getElementById("result").innerHTML = "<h2>Result:</h2>" + result.map(row => row.join(" ")).join("<br>");
}

function multiplyMatrices(matrix1, matrix2) {
    var result = [];

    for (var i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (var j = 0; j < matrix2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }

    return result;
}
