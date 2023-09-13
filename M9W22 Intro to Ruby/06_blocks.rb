names = ['alice', 'jessica', 'joey']

# names.forEach(name, idx =>)
names.each do |name|
  puts "Hello #{name}"
end

my_block = Proc.new do |name|
  puts "Hello #{name}"
end

def accept_block
  puts "Before"
  # yield === callback("Steven")
  yield "Steven"
  puts "Ends"
end

# accept_block(my_block)
accept_block &my_block