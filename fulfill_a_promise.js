var p = new Promise(function(resolve, reject) {
setTimeout(function() {
    resolve('FULFILLED!');
}, 300);
})

p.then(function(success) {
    console.log(success);
});

//  or p.then(console.log); instead of p.then etc