var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, model_name, options) {
    if (options === void 0) { options = {}; }
    var car = __assign({ manufacturer: manufacturer, model_name: model_name }, options);
    return car;
}
var car1 = createCar('Toyota', 'Camry', { color: 'Blue', sunroof: true });
var car2 = createCar('Ford', 'Mustang', { color: 'Red', engine: 'V8' });
console.log(car1);
console.log(car2);
