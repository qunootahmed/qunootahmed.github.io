document.getElementById('btn').addEventListener('click', function(e){
    alert('Hello')
    console.log(e.type)
    console.log(e.clientX)
    console.log(e.clientY)
    this.style.color='purple'  
})

document.getElementById('btn').addEventListener('mouseover', function (f) {
    this.style.cursor='pointer'
})

setInterval (async function(){
document.querySelector('#bulb').classList.toggle("bulb-container")
}, 300)

// let promise = new Promise (function (resolve, reject) {
// // a promise of code execution
// resolve(55)
// })
// console.log(promise)

let p = new Promise ((resolve, reject) => {
    if (2+2 == 5)
    resolve('done')
    else
    reject(new Error('Something went wrong'))
}).then(result =>{
    console.log(result)
}, (error => {
    console.log(error)
}))

const originalLog = console.info;
console.info = [];
console.info = function(...args) {
    console.info.push(args);
    originalLog.apply(console, args);
};
console.info.forEach(log => {
    console.log('Captured log:', log);
});