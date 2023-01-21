class GoodDog
	def initialize(name)
		@name = name
	end

	def speak
		puts "#{@name} says arf!"
	end
end
  
sparky = GoodDog.new("Sparky")
sparky.speak