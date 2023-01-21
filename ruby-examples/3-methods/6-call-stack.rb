def first
	puts "first method"
end
  
def second
  first()
  puts "second method"
end
  
second()