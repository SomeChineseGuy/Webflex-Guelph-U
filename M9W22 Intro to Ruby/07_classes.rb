# const car = new Class {
# constructor () {}
# }
# Private Class, Read Class, Write Class, Read AND Write Class
class Car
# constructor () {}
  def initialize make, model, year
    # this.make = make
    # this.model = model
    @make = make
    @model = model
    @year = year
  end
  attr_accessor :make
  attr_accessor :model
  attr_accessor :year

  # attr_reader :make
  # attr_reader :model
  # attr_reader :year

  # attr_writer :make
  # attr_writer :model
  # attr_writer :year

  # def make 
  #   return @make
  # end

  # def model 
  #   @model
  # end

  # def year
  #   @year
  # end

  # def make_write (make_writer)
  #   @make = make_writer
  # end
end

my_car = Car.new("Ford", "F150", 1990)

puts my_car.make
puts my_car.model
puts my_car.year

puts my_car.make="Honda"
puts my_car.methods