function MyMathPower(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    console.log(`The ${exponent}th power of ${base} equals ${result}`);
}

function MyMathPowerDefault1(base, exponent) {
    base = base || 7; 
    exponent = exponent || 3;
    MyMathPower(base, exponent);
}

function MyMathPowerDefault2(base = 7, exponent = 3) {
    MyMathPower(base, exponent);
}

function TestAllFunctions() {
    console.log("Calling MyMathPowerDefault1 with both parameters:");
    MyMathPowerDefault1(7, 3);

    console.log("Calling MyMathPowerDefault1 with exponent parameter missing:");
    MyMathPowerDefault1(undefined, 3);

    console.log("Calling MyMathPowerDefault1 with base parameter missing:");
    MyMathPowerDefault1(7);

    console.log("Calling MyMathPowerDefault1 with both parameters missing:");
    MyMathPowerDefault1();

    console.log("Calling MyMathPowerDefault2 with both parameters:");
    MyMathPowerDefault2(7, 3);

    console.log("Calling MyMathPowerDefault2 with exponent parameter missing:");
    MyMathPowerDefault2(undefined, 3);

    console.log("Calling MyMathPowerDefault2 with base parameter missing:");
    MyMathPowerDefault2(7);

    console.log("Calling MyMathPowerDefault2 with both parameters missing:");
    MyMathPowerDefault2();
}

TestAllFunctions();