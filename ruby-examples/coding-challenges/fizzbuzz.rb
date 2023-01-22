# FizzBuzz
# divisible by 3 and 5 "FizzBuzz"
# divisible by 3 "Fizz"
# divisible by 5 "Buzz"

def fizzbuzz(n)
	if !(n.is_a? Integer) 
		return
	end

	(1..n).map do |num|
		fizz = (num % 3 == 0)
   		buzz = (num % 5 == 0)

		if fizz && buzz
			"FizzBuzz"
		elsif fizz
			"Fizz"
		elsif buzz
			"Buzz"
		else
			num
		end
	end
end

result = fizzbuzz(15)
print result