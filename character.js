var myText = document.getElementById("my-text");
var result = document.getElementById("result");

var limit = 1000000;
myText.addEventListener("input",function(){
    var textlength =myText.value.length;
    console.log(textlength);
    result.textContent=textlength + "/" + limit;
});
