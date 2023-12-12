function countWords() {
      var text = document.getElementById('textInput').value;
      var words = text.trim().split(/\s+/).filter(function(word) {
        return word.length > 0;
      });

      var wordCountElement = document.getElementById('wordCount');
      wordCountElement.getElementsByClassName('counter-number')[0].textContent = words.length;
      wordCountElement.classList.add('active');

      var charCountElement = document.getElementById('charCount');
      charCountElement.getElementsByClassName('counter-number')[0].textContent = text.length;
      charCountElement.classList.add('active');

      if (words.length > 10) {
        
        wordCountElement.classList.add('green');
      } else {
        wordCountElement.classList.remove('green');
      }

      if (text.length > 100) {
        charCountElement.classList.add('red');
      } else {
        charCountElement.classList.remove('red');
      }
    }
 
        function openPopup(popupId) {
            const popup = document.getElementById(popupId);
            popup.style.display = "block";
        }

        function closePopup(popupId) {
            const popup = document.getElementById(popupId);
            popup.style.display = "none";
        }
