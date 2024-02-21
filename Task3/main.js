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
    return MyMathPower(b, n)
}