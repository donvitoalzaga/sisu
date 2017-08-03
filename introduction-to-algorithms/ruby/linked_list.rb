class Node
  attr_accessor :data, :next

  def initialize(data)
    @data = data
    @next = nil
  end
end

class LinkedList
  attr_accessor :head, :data

  def initialize(data)
    @head = Node.new(data)
  end

  def append(data)
    return false if not defined? @head
    current = @head
    while not current.next.nil?
      current = current.next
    end
    current.next = Node.new(data)
  end

  def prepend(data)
    new_head = Node.new(data)
    new_head.next = @head
    @head = new_head
  end

  def remove(data)
    return false if not defined? @head
    if @head.data == data
      @head = @head.next
    end
    current = @head
    while not current.next.nil?
      if current.next.data == data
       current.next = current.next.next
      end
      current = current.next
    end
  end

  def has_cycle?
    current = @head
    while not current.next.nil?
      if current.data == current.next.data
        return true
        break
      end
      current = current.next
    end
    return false
  end
end

list = LinkedList.new(3)
list.prepend(2)
list.append(5)
list.append(7)
list.remove(5)
puts list.inspect

list2 = LinkedList.new(5)
list2.append(6)
list2.append(8)
list2.append(8)
puts list2.has_cycle?

list3 = LinkedList.new(5)
list3.append(6)
list3.append(8)
list3.append(10)
puts list3.has_cycle?
