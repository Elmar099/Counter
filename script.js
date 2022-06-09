let inc = document.getElementById('increment')
let dec = document.getElementById('decrement')
let dis = document.getElementById('display')

let count = 0;
inc.addEventListener('click', function(){
    count += 1;
    dis.innerHTML = count;
    if(count > 10){
        dis.style.backgroundColor = "green";
}
})

dec.addEventListener('click', function() {
    count -= 1;
    dis.innerHTML = count;
    if(count < -10){
        dis.style.backgroundColor = "red";
    }
})

