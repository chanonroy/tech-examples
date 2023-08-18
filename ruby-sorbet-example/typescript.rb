# typed: true
# require 'sorbet-runtime'

extend T::Sig

# string
sig {params(x: String).returns(Integer)}
def example(x)
  return 1
end
