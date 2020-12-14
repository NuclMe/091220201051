
    let comments = [];
    loadComments();



  document.getElementById('message').onclick  = function(){

    let name = document.getElementById('name');
    let textarea = document.getElementById('comment-text')
    
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
  };

  document.getElementById('comment-text').onkeydown=(function(event){
    if((event.ctrlKey) && ((event.keyCode == 0xA)||(event.keyCode == 0xD)))
    {
      comments.push(comment);
      saveComments();
      showComments();     
    }
  })

 
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
      
     out +=`<div class='header'>
      <div class='name'>${item.name}</div>
      <div class='date'>${timeConverter(item.time)}</div>
     </div> `
     
      out += `<div class='comment-inner'>${item.body}</div>`;
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

