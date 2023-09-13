# Hash === collection of key/value pairs; in Js an obj's value can be ANYTHING
# in Hashes the value has be a string and the KEY has to be a string

user = {
  "username" => "Tron",
  "password" => "Kill all humans"
}

user_2 = {
  :username => "Ryan"
}

# puts user.methods
puts user['username']
puts user_2[:username]
user_2[:username] = "New Name!"
puts user_2[:username]