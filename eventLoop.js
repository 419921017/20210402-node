setTimeout(() => {
    console.log('1');
}, 0)

Promise.resolve().then(() => {
    console.log(5);
})
process.nextTick(() => {
    console.log(4)
})
setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3);
    })
}, 0)