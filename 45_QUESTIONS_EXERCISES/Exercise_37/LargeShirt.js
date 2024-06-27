//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeshirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("A ".concat(size, " shirt will be printed with the message: \"").concat(message, "\"."));
}
makeshirt();
makeshirt("Medium");
makeshirt("Small", "Hello World!");
