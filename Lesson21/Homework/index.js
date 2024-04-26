const delay = (value) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof value !== 'number') {
                reject('The argument is not a number');
            } else {
               resolve(value ** 2); // resolve(value * value);
            }
        }, 5000);
    });
}

delay(5)
.then(data => {
    console.log(data);
}).catch(error => {
    console.log('ERROR 1XX: ', error);
})

delay('5')
.then(data => {
    console.log(data);
}).catch(error => {
    console.log('ERROR 1XX: ', error);
})