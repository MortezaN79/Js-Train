function complete(n){
	 let sum=0;
	 for(let i=1; i<n; i++){
	 	   if(n%i===0){
	 	   	  sum+=i
	 	   }
	 }
	 return sum===n?'YES':'NO'
}

console.log(complete(27))


console.log(complete(6))


for(let i=1;i<2000;i++){
	   if(complete(i)==='YES')
	      console.log(i)
}
