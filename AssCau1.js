
function checksnt(n){
    if(n < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
var num = prompt('Nhập số n: ');
var check = /[0-9]/gi.test(num);
if(check == true){
    for(let i = 1; i <= num;i++){
        if(checksnt(i)){
            console.log(i);
        }
    }
}
else{
    alert('Bạn nhập sai');
}