const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const output = document.getElementById("result");


//functions to complete task

//makes string lowercase and removes all punctuation and spacing
const cleanString = (str) => {
  let newStr = str.toLowerCase();
  const regex = /[\s\\\\!_()\/?,.-]/g;
  newStr = newStr.replace(regex, "");
  return newStr;
};

const isEqual = (str1, str2) => {
  if(str1 === str2) {
    return true;
  } else {
    return false;
  }
};

const isPalindrome = (str) => {
  let word = str;
  word = cleanString(word);
  const wordReversed = word.split('').reverse().join('')
  console.log(wordReversed);
  if(isEqual(word, wordReversed)) {
    return true;
  } else {
    return false;
  }
};

checkBtn.addEventListener("click", () => {
  const text = textInput.value;

  if(text.length === 0) {
    alert("Please input a value");
  } else {
    updateResult();
  }
});

const updateResult = () => {
  const text = textInput.value;
  let HTMLString;
  if(isPalindrome(text)) {
    HTMLString = `<p class="result">${text} is a palindrome</p>`;
  } else {
    HTMLString = `<p class="result">${text} is not a palindrome</p>`;
  }
  output.innerHTML = HTMLString;
};






