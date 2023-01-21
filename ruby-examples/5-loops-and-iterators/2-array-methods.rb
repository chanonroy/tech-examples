items = [1, 2, 3, 4, 5]

# Filter

evenNumbers = items.select! {|i| i.even?}
print evenNumbers

# Map

itemsPlusOne = items.map {|i| i + 1}
print itemsPlusOne

# Reduce

sum = items.reduce {|sum, num| sum + num }
print sum