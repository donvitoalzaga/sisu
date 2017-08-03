# Binary Search Tree Implementation

class Node
  attr_accessor :key, :left, :right

  def initialize(data)
    @key  = data
    @left  = nil
    @right = nil
  end

  def insert(data)
    if data <= @key
      @left.nil? ? @left = Node.new(data) : @left.insert(data)
    elsif data > @key
      @right.nil? ? @right = Node.new(data) : @right.insert(data)
    end
  end

  def contains(data)
    if data == @key
      return true
    elsif data < @key
      if @left.nil?
        return false
      else
        return @left.contains(data)
      end
    else
      if @right.nil?
        return false
      else
        return @right.contains(data)
      end
    end
  end
end

n = Node.new(9)
n.insert(4)
n.insert(2)
n.insert(10)
n.insert(12)
n.insert(14)

puts n.contains(4)
puts n.contains(2)
puts n.contains(10)
puts n.contains(12)
puts n.contains(14)

puts n.contains(5)
puts n.contains(11)

puts n.inspect
