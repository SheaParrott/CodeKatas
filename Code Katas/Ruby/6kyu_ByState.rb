# Given a string with friends to visit in different states:

# ad3="John Daggett, 341 King Road, Plymouth MA
# Alice Ford, 22 East Broadway, Richmond VA
# Sal Carpenter, 73 6th Street, Boston MA"
# we want to produce a result that sorts the names by state
#  and lists the name of the state followed by the name of 
#  each person residing in that state (people's names sorted). 
#  When the result is printed we get:

# Massachusetts
# .....^John Daggett 341 King Road Plymouth Massachusetts
# .....^Sal Carpenter 73 6th Street Boston Massachusetts
# ^Virginia
# .....^Alice Ford 22 East Broadway Richmond Virginia
# Spaces not being always well seen, in the above result 
# ^ means a white space.

# Not printed, the resulting string will be:

# "Massachusetts\n..... John Daggett 341 King Road Plymouth 
# Massachusetts\n..... Sal Carpenter 73 6th Street Boston
#  Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway 
#  Richmond Virginia"
# Notes
# There can be a blank last line in the given string of adresses.
# The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.
# You can see another example in the "Sample tests".
# States
# For the lazy ones:

# 'AZ': 'Arizona',
# 'CA': 'California',
# 'ID': 'Idaho',
# 'IN': 'Indiana',
# 'MA': 'Massachusetts',
# 'OK': 'Oklahoma',
# 'PA': 'Pennsylvania',
# 'VA': 'Virginia'

def bystate(str)
  arr = str.to_s.delete(',').split("\n").sort
  answer = []
  lastState = ''
  lookup = [
  ['AZ','Arizona'],
  ['CA', 'California'],
  ['ID', 'Idaho'],
  ['IN', 'Indiana'], 
  ['MA', 'Massachusetts'],
  ['OK', 'Oklahoma'], 
  ['PA', 'Pennsylvania'],
  ['VA', 'Virginia']]
  lookup.each do |abbreviation, name|
    while arr.find { |e| /#{abbreviation}/ =~ e } 
      foundString = arr.find { |e| (/#{abbreviation}/ =~ e)}
      foundReplaced = "\r\n..... " + foundString.gsub(/#{abbreviation}/, "") + name
      
      if lastState == ''
        answer.concat(Array.new(1, (name + foundReplaced)))
      elsif lastState == name
        answer.concat(Array.new(1, (foundReplaced)))
      else
        answer.concat(Array.new(1, ("\r\n " + name + "\r\n..... " + foundString.gsub(/#{abbreviation}/, name))))
      end
      arr = arr.reject{|i| i == foundString}
      lastState = name
    end
  end
  answer.join("")
end


# Not many votes on this one. However, this had a vote of 1
# for best practice

def subst(str)
  s = [" MA", " VA", " OK", " PA", " CA", " AZ", " ID", " IN"]
  st = [", Massachusetts", ", Virginia", ", Oklahoma", ", Pennsylvania", ", California", ", Arizona", ", Idaho", ", Indiana"]
  i = 0; a = str
  while (i < s.length) do
      a = a.gsub(s[i], st[i])
      i += 1
  end
  a
end
def bystate(str)
  a = subst(str)
  arr = a.split("\n")
  narr= []
  arr.each { |x| y = x.split(","); narr << [y[3], x] }
  narr = narr.sort
  i = 0; last = ""; res= ""
  while (i < narr.length) do
      e = narr[i][0]
      if (e != last) then
          last = e
          res += "\r\n" + e + "\r\n..... " + narr[i][1].split(",").join("")
      else
          res += "\r\n..... " + narr[i][1].split(",").join("")
      end
      i += 1
  end
  res[3..-1]
end

# I ran this one by Gavin Stark from SDG. This is his answer. Wow!
# I learned an use-case for group_by and the value of using a hash
# to complete a task. I aspire to gain the knowledge and skill to 
# produce and accomplish future code challenges in an eligant way
# such as done below. I will revist this answer and kata to better
# understand how I can accomplish my aspirations. 


# “Success is like a snowball. It takes momentum to build and the 
# more you roll it in the right direction the bigger it gets.”

# -Steve Ferrante

STATES = {
'AZ' => 'Arizona',
'CA' => 'California',
'ID' => 'Idaho',
'IN' => 'Indiana',
'MA' => 'Massachusetts',
'OK' => 'Oklahoma',
'PA' => 'Pennsylvania',
'VA' => 'Virginia'
} # this is our lookup table 

def bystate(str)
  p str.
    split("\n"). # Splitting up the string and converting this to an array at each new line 
    group_by { |entry| entry[-2..-1] }. # turning the array to a hash where the key is the last two items from the string in the array
    sort_by { |abbreviation, entries| abbreviation }. # Sorting the keys alphabetically 
    map { |abbreviation, entries| [STATES[abbreviation.upcase], entries] }. # Replacing the key values to the state name by using the current key abbreviations and finding it in the STATES lookup table
    to_h. # turning the arrays inside the array back to a hash. This is a way to organise the data in a more readable format. This is an optional step. The code executes whether this is done or not. ("array in arrays"; also heard this called a tuple. However, I believe this is more of a Python term)
    map { |state, entries| "#{state}\r\n#{entries.sort.map { |entry| "..... #{entry[0..-3]}#{state}" }.join("\r\n")}".delete(",") }. # iterating through all the keys to create a string. This is taking the name of the key adding the new line. Then, iterating through each entry to the hash to finish the string. The second part of the string is using all the string minus where the abbreviation is listed and the abbreviating is being replaced with the state name provided from the key. Then we are joining the string together and adding a "\r\n". Then deleting all commas. At this point we have an array where all state locations and entries are grouped in one string 
    join("\r\n ") # Joining the array into one string and adding "\r\n" at each point where the string ends. 
end