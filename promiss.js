
let i = 10; 
setTimeout(function(){
    i = 100; 
    console.log('안녕' , i ); 
},0);

console.log("끝!",i );


let p = new Promise( function (resolve, reject) {
    setTimeout(function () {
        console.log(i);
        // resolve('^^');
        reject('TT');
    });
});

p.then(function (value){
    console.log(value);
});

p.catch(function (reject){
    console.log(reject);
});