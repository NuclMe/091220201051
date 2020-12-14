
let comments = [];

document.addEventListener("DOMContentLoaded", function(e) {

    let name = document.getElementById('name');
    let textarea = document.getElementById('name')
    
    let comment = {
      name: name.value,
      body: textarea
      time: Math.floor(Date.now() / 1000)
    };     
     
    let send = document.getElementById('messauge').addEventListener('click', function(){
      // alert(11)
    });
  
  });



