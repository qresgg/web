function MyMathPower(b, n) {
    let r = b;
    for (let i = 1; i < n; i++) {
        r *= b;
    }
    console.log(`The ${n}th power of ${b} equals ${r}`);
    return r;
}
function MyMathPowerDefault1(b, n) {
    b || 5;
    n || 9;
    return MyMathPower;
}
function MyMathPowerDefault2(b = 5, n = 9){
    return MyMathPower(b, n);
}
// b - основа степеня
// r - степінь 
// n - показник степеня

function TestAllFunctions(){
    MyMathPowerDefault1(3,4);
    MyMathPowerDefault1(5);
    MyMathPowerDefault1(null, 4);
    MyMathPowerDefault1();
    MyMathPowerDefault2(2,4);
    MyMathPowerDefault2(2);
    MyMathPowerDefault2(null, 6);
    MyMathPowerDefault2();
}

TestAllFunctions();