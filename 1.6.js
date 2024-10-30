function add(num1, num2) {
    return num1 + num2;
}
var add1 = function (num1) {
    return num1;
};
var poorUser = {
    name: 'nafis',
    balance: 0,
    addBalance: function (balance) {
        this.balance += balance;
        return "Your balance is ".concat(this.balance);
    }
};
var arr = [1, 4, 10];
var newArray = arr.map(function (x) { return x * x; });
console.log(newArray);
