class ProperBst
  attr_accessor :key, :left, :right

  def initialize(data)
    @key  = data
    @left  = nil
    @right = nil
  end

  def insert(data)
    if data <= @key
      @left.nil? ? @left = ProperBst.new(data) : @left.insert(data)
    elsif data > @key
      @right.nil? ? @right = ProperBst.new(data) : @right.insert(data)
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

class InversetBst
  attr_accessor :key, :left, :right

  def initialize(data)
    @key  = data
    @left  = nil
    @right = nil
  end

  def insert(data)
    if data > @key
      @left.nil? ? @left = InversetBst.new(data) : @left.insert(data)
    elsif data <= @key
      @right.nil? ? @right = InversetBst.new(data) : @right.insert(data)
    end
  end

  def contains(data)
    if data == @key
      return true
    elsif data > @key
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

class CheckProperBst
  attr_accessor :node
  
  def initialize(node)
  	@node = node
  end

  def perform
  	# root checking only
    key = @node.key
    if @node.left.key > key
      puts "false"
    elsif @node.right.key < key
      puts "false"
    end

    if @node.left.key < key
      puts "true"
    elsif @node.right.key > key
      puts "true"
    end
  end
end

proper = ProperBst.new(9)
proper.insert(12)
proper.insert(2)
proper.insert(4)
# puts proper.inspect

improper = InversetBst.new(9)
improper.insert(12)
improper.insert(2)
improper.insert(4)

CheckProperBst.new(proper).perform
CheckProperBst.new(improper).perform
