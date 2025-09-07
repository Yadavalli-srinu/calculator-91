let displays=document.getElementById("displays")
function Percentage() { displays.value += "%"; }
function add0() { displays.value += "0"; }
function add00() { displays.value += "00"; }
  function add1() { displays.value += "1"; }
  function add2() { displays.value += "2"; }
  function add3() { displays.value += "3"; }
  function add4() { displays.value += "4"; }
  function add5() { displays.value += "5"; }
  function add6() { displays.value += "6"; }
  function add7() { displays.value += "7"; }
  function add8() { displays.value += "8"; }
  function add9() { displays.value += "9"; }
  function addPlus() { displays.value += "+"; }
  function addMinus() { displays.value += "-"; }
  function addMultiply() { displays.value += "*"; }
  function addDivide() { displays.value += "/"; }
  function addDot() { displays.value += "."; }
  function clearDisplay() {
    displays.value = "";
  }
    function deleteLast() {
    displays.value = displays.value.slice(0, -1);
  }
  function calculate() {
    try {
      displays.value = eval(displays.value);
    } catch {
      displays.value = "Error";
    }
  }