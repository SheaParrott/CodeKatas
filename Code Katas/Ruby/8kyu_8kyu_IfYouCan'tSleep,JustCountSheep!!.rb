# If you can't sleep, just count sheep!!

# Task:
# Given a non-negative integer, 3 for example, return a 
# string with a murmur: "1 sheep...2 sheep...3 sheep...". 
# Input will always be valid, i.e. no negative integers.


def count_sheep(num)
  answer = ''
  i = 0
  loop do
    i += 1
    answer += "#{i} sheep..."
    if i == num
      break
    end
  end
  answer
end

# best practice from solutions

def count_sheep(num)
  (1..num).map {|i| "#{i} sheep..."}.join
end