# Sample code for creating a node chain based on the Pluralsight course in Data Strucutures
# implemented in the Ruby programming language

module NodeChain
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end
end

first = NodeChain::Node.new(3)
second = NodeChain::Node.new(4)
third = NodeChain::Node.new(90)
fourth = NodeChain::Node.new(24)

first.next = second
second.next = third
third.next = fourth

node = first
while defined? node.value
  puts ">>> #{node.value}"
  node = node.next
end
