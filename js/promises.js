 const wait = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {


            resolve()
            },

            num
        );
    });
 };


 wait(1000).then(() => console.log('You\'ll see this after 1 second'));
 wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
 wait(8000).then(() => console.log('You\'ll see this after 8 seconds'));