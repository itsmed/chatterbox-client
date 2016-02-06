// YOUR CODE HERE:
//object containing properties of chatterbox app
var app = {};


//object containing message properties
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};
$(document).ready(function(){
  $('.form-control').keypress(function(e) {
    if (e.which === 13) {
      var temp = $('.form-control').val();
      console.log(temp);
      $('.form-control').val('');
    }
  });
  
});

/////////////////////methods
var $chats = $('#chats');
var escaped = $(message).html();
//initialize app
app.init = function (){
  app.addRoom('name');
  app.fetch();
};

app.server = 'https://api.parse.com/1/classes/chatterbox';

app.addMessage = function(message) {
  app.clearMessages();
  var $post = $('<div></div>');
  var output = (message.username + ': ' + message.text);
  $post.text(output);
  $post.prependTo(chats);
};

app.clearMessages = function() {
  $(chats).html('');
};

app.addRoom = function(name){
  $('#roomSelect').on('click', function() {
    console.log('click', this);
  });
};

// enables user to send messages
app.send = function(data){
  //method to submit POST request data to server
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};
app.fetch = function(data){
  //method to submit GET request to server
  // console.log('data from fetch', data);
  $.ajax({
    url: app.server,
    type: 'GET',
    data: JSON,
    contentType: 'application/json',
    success: function (data) {
      // prepend the variable to the DOM
      console.log('data in fetch', data.results[0]);
      console.log('chatterbox: Message received', data);
      for(var i = 0; i < data.results.length; i++) {
        app.addMessage(data.results[i]);
        
      }
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive message');
    }
  });

};

app.init();
