
let comments = [];

document.addEventListener("DOMContentLoaded", function(e) {

    let name = document.getElementById('name');
    let textarea = document.getElementById('name')
    
    let comment = {
      name: name.value,
      body: textarea.value,
      time: Math.floor(Date.now() / 1000)
    };     

    name.value = '';
    textarea.value = '';

    comments.push(comment);
    saveComments();
    showComments();
     
    
  
  });


  function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  function loadComments(){
    if(localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
  }


  function showComments(){
    let commentField = document.getElementById('comment-wrapper');
    let out = '';
    comments.forEach(function(item)){
      out += `<div class='name'>${timeConverter(item.name)}</div>`;
      out += `<div class='date'>${timeConverter(item.name)}</div>`;
    }
  }

  let send = document.getElementById('messauge').addEventListener('click', function(){
    // alert(11)
  });