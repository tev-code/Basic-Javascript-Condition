const checkBox = document.querySelector('input');
const para = document.querySelector('p');
let shoppingDone = false;


checkBox.addEventListener('change',function() {
checkBox.disabled = true;
shoppingDone = true;
updateAllowance();
});

function updateAllowance() {
if(shoppingDone === true) {
      var childsAllowance = 10;
} else {
      var childsAllowance = 5;
}

para.textContent = 'Child has earned $' + childsAllowance + ' this week.';
}

updateAllowance();