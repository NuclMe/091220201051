
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
    comments.forEach(function(item){
      out += `<div class='name'>${timeConverter(item.name)}</div>`;
      out += `<div class='date'>${item.time}</div>`;
      out += `<div class='comment-inner'>${timeConverter(item.body)}</div>`;
    });
    commentField.innerHTML = out;
  }

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }