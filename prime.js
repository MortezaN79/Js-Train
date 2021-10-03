function prime(a,b){
	 for(let i=a+1; i<b; i++){
	 	  if(isPrime(i)){
	 	  	  console.log(i+',')
	 	  }
	 }
}
function isPrime(n){
	 for(let i=2; i<n;i++){
	 	   if(n%i==0){
	 	   	 return false
	 	   }
	 }
	 return true
}

prime(4,10)
console.log('----')
prime(11,20)
