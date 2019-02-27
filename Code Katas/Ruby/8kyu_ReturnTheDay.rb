# Complete the function which returns the weekday 
# according to the input number:
# 1 returns "Sunday"
# 2 returns "Monday"
# 3 returns "Tuesday"
# 4 returns "Wednesday"
# 5 returns "Thursday"
# 6 returns "Friday"
# 7 returns "Saturday"
# Otherwise returns "Wrong, please enter a number 
# between 1 and 7"

def what_day?(n)
  answer = "Wrong, please enter a number between 1 and 7"
  lookup = [
  [1, "Sunday"], 
  [2, "Monday"], 
  [3, "Tuesday"], 
  [4, "Wednesday"], 
  [5, "Thursday"], 
  [6, "Friday"], 
  [7, "Saturday"]]
  lookup.each do |v, d|
    if n == v
      answer = d
    end
  end
  answer
end

# best practice from solutions

week = [
  '',
  'Sunday',
  'Monday', 
  'Tuesday', 
  'Wednesday',
  'Thursday', 
  'Friday', 
  'Saturday']
case n
  when 1..7
    week[n]
  else
    'Wrong, please enter a number between 1 and 7'  
end
end