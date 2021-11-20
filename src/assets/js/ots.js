// var form = document.getElementById("test");
// var selectedOption = $("input:radio[name=age]:checked").val()
// alert(selectedOption);

document.test.onclick = function(){
  var radVal = document.test.age.value;
  result = 'You selected: '+radVal;
  alert(result)
}