function FizzBuzz(num){
	  if(num%15==0) return'FizzBuzz'
	  if(num%5==0) return'Fizz'
	  if(num%3==0) return'Buzz'
	  
	  return num
}
console.log(FizzBuzz(60))

console.log(FizzBuzz(25))

console.log(FizzBuzz(15))

console.log(FizzBuzz(39))

console.log(FizzBuzz(95))

console.log(FizzBuzz(14))
