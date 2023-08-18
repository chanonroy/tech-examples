# typed: true

class Person
    attr_accessor :name
  end
  
  # The annotation for .returns is wrong!
  sig {params(person: Person).returns(String)}
  def name_length(person)
    person.name.length
  end
  
  person = Person.new
  person.name = 'Jenny Rosen'
  name_length(person)