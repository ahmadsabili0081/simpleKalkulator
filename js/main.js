let historyLayar  = document.querySelector('#history__value');
let clickNumber = document.querySelector('.inputKeyboard');
// variable ini akan menentukkan apakah layar yang ada dikalkulatr ini akan direset atau tidak
let resetLayar = false;
// variable ini akan menentukkan apakah variabe ini mau dihitung atau tidak
let blhHitung = false;
let tmpVal = '';
let operator = ''

clickNumber.addEventListener('click', (e) => {
  let tombolClick = e.target;
  let result = tombolClick.innerText;
  if(result == "C"){
    historyLayar.value = "";
  }else if(result == "CE"){
    historyLayar.value = historyLayar.value.slice(0, -1);
  }else if(result == "="){
    historyLayar.value = eval(historyLayar.value);
    if(blhHitung == true){
      historyLayar.value = eval(tmpVal + operator + historyLayar.value)
      blhHitung = false
    }
  }else if(tombolClick.classList.contains('operator')){
    if(blhHitung == true){
      historyLayar.value = eval(tmpVal + operator + historyLayar.value)
      blhHitung = false
    }
    tmpVal = historyLayar.value;
    operator = result;
    resetLayar = true;
  }else{
    if(resetLayar == true){
      historyLayar.value  = result;
      resetLayar = false;
      blhHitung = true;
    }else{
      historyLayar.value = historyLayar.value + result;
    }
  }
});