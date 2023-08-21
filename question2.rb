def solution(riddle)
    alphabet = ('a'..'z').to_a
    riddle = riddle.chars
    
    (0...riddle.length).each do |i|
      if riddle[i] == '?'
        prev_char = i > 0 ? riddle[i - 1] : nil
        next_char = i < riddle.length - 1 ? riddle[i + 1] : nil
        
        available_letters = alphabet - [prev_char, next_char].compact.uniq
        riddle[i] = available_letters.sample
      end
    end
    
    riddle.join
  end
  
  # Tests
  puts solution("ab?ac?")    
  puts solution("rd?e?wg??")  
  puts solution("????????")   
  