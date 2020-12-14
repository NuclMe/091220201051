
document.addEventListener("DOMContentLoaded", function(e) {

    let send = document.getElementById('messauge').addEventListener('click'{

    });
    console.log(send)
    let textarea = document.getElementById('name').value;     
     console.log(textarea)
  });



var messageBox = document.search.message;
 
// обработчик ввода символа
function onkeypress(e){
    // получаем элемент printBlock
    var printBlock = document.getElementById("printBlock");
    // получаем введенный символ
    var val = String.fromCharCode(e.keyCode);
    // добавление символа
    printBlock.textContent += val;
}
 
function onkeydown(e){
    if(e.keyCode===8){ // если нажат Backspace
     
        // получаем элемент printBlock
        var printBlock = document.getElementById("printBlock"), 
            length = printBlock.textContent.length;
        // обрезаем строку по последнему символу
        printBlock.textContent = printBlock.textContent.substring(0, length-1);
    }
}
 
messageBox.addEventListener("keypress", onkeypress);
messageBox.addEventListener("keydown", onkeydown);