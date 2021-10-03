function callHardpass(N){
        hardpass(N,2);
        hardpass(N,3);
        hardpass(N,5);
        hardpass(N,7);
}
function hardpass(size,num) {
        if(size===1){
           console.log(num)
           return;
        }
        let a=num*10+1;
        let b=num*10+3;
        let c=num*10+7;
        let d=num*10+9;
        if(isPrimary(a))
            hardpass(size-1,a);
        if(isPrimary(b))
            hardpass(size-1,b);
        if(isPrimary(c))
            hardpass(size-1,c);
        if(isPrimary(d))
            hardpass(size-1,d);
}
function isPrimary( num) {
   if(num==2)
      return true;
   if ((num % 2 == 0 || num == 1))
      return false;
   for (let j=3; j<num; j+=2){
        if (num % j == 0){
            return false;
        }
    }
    return true
}

callHardpass(3)
