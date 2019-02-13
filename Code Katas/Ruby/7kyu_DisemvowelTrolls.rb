# Trolls are attacking your comment section!

# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# Note: for this kata y isn't considered a vowel.


# long way
def disemvowel(str)
  lookup = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  characters = str.split('')
  characters.each_with_index do |value, index|
    lookup.each_with_index do |v, i|
      characters[index] = characters[index].include?(v) ? '' : characters[index]
    end
  end
  characters.join('') 
end

# now the power of ruby is unfolded
def disemvowel(str)
  str.gsub /[aeiou]/i, ''
end
