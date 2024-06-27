//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeshirt(size:string="Large" , message:string="I love Typescript"){//default
    console.log(`A ${size} shirt will be printed with the message: "${message}".`);
}
makeshirt();
makeshirt("Medium");
makeshirt("Small","Hello World!");