/*function translateToMorse() {
    const input = document.getElementById('text-input').value.toLowerCase();
    const translation = document.getElementById('translation');
    const morseCodeMapping = {
      'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
      'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
      'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
      'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
      'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
      'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
      '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
      '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
      '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
      ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
      '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
    };
  
    let morseCode = '';
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);
      if (morseCodeMapping[char]) {
        morseCode += morseCodeMapping[char] + ' ';
      }
    }
  
    translation.textContent = morseCode;
  }
 */ 

 function translateToMorse() {
  const input = document.getElementById('text-input').value.toLowerCase();
  const translation = document.getElementById('translation');
  const morseCodeMapping = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
    'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
    'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
    'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
    'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
    '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
    ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
    '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
  };

  let morseCode = '';
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    if (morseCodeMapping[char]) {
      morseCode += morseCodeMapping[char] + ' ';
    }
  }

  translation.textContent = morseCode;

  // Save translation to localStorage
  const translations = localStorage.getItem('translations');
  let savedTranslations = translations ? JSON.parse(translations) : [];
  savedTranslations.push({ text: input, morseCode: morseCode });
  localStorage.setItem('translations', JSON.stringify(savedTranslations));
}

// Retrieve saved translations on page load
window.addEventListener('DOMContentLoaded', () => {
  const translations = localStorage.getItem('translations');
  if (translations) {
    const savedTranslations = JSON.parse(translations);
    const historyList = document.getElementById('translation-history');

    savedTranslations.forEach((translation) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${translation.text} ➜ ${translation.morseCode}`;
      historyList.appendChild(listItem);
    });
  }
});
