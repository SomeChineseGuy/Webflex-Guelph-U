# Js we have for..of for..in c-style loop
# Ruby has one way to loop over arrays and that is for..in === for..of

# names = ['Joe', 'Henry', 'Steve']
# for name in names do
#   puts "Hello #{name}"
# end

# for(let i = 0; i > 100; i++)
# i = 0
# loop do
#   puts i
#   i +=  1
#   if(i > 10)
#     break
#   end
# end
# EVERYTHING in ruby is an Object
# puts "Hello how are you?".length()
# puts 10.methods

num = 0
while (num < 10) do
  num += 1
  puts num
end

until (num > 10) do
  num += 1
  puts num
end

puts [].methods