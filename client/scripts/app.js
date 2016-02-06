// YOUR CODE HERE:
//object containing properties of chatterbox app
var app = {};


//object containing message properties
<<<<<<< HEAD
// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

/////////////////////methods
var $chats = $('#chats');

//initialize app
app.init = function (){
  // app.addMessage();
  // app.fetch();
  // app.send();
};

$('.submit').click(function() {

  var message = $('#messageInput').val();
  $('#messageInput').val('');
  app.addMessage(message);
});

//listener for click event
app.addMessage = function(message) {
  //user enters text
  //escape text
  //statement that appends message to chats element in DOM
  $(message).appendTo('#chats');
=======
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
>>>>>>> 942f501d02dc31fc86a389636e49352397839a9d
};

app.clearMessages = function() {
  $(chats).html('');
};

app.addRoom = function(name){
  $('#roomSelect').on('click', function() {
    console.log('click', this);
  });
};

<<<<<<< HEAD
//settimeout
=======
//enables user to send messages
>>>>>>> 942f501d02dc31fc86a389636e49352397839a9d
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

//set timeout
app.fetch = function(data){
  //method to submit GET request to server
  // console.log('data from fetch', data);
  $.ajax({
<<<<<<< HEAD
    url: 'https://api.parse.com/1/classes/chatterbox',
=======
    url: app.server,
>>>>>>> 942f501d02dc31fc86a389636e49352397839a9d
    type: 'GET',
    data: JSON,
    contentType: 'application/json',
    success: function (data) {
<<<<<<< HEAD
      // prepend the variable to the DOM
      // console.log('data in fetch', data);
      console.log('chatterbox: Message received', data.results);
=======
            // prepend the variable to the DOM
      console.log('data in fetch', data.results[0]);
      console.log('chatterbox: Message received', data);
      for(var i = 0; i < data.results.length; i++) {
        app.addMessage(data.results[i]);
        
      }
>>>>>>> 942f501d02dc31fc86a389636e49352397839a9d
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive message');
    }
  });

};

app.init();
