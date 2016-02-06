// YOUR CODE HERE:
//object containing properties of chatterbox app
var app = {};


//object containing message properties
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

/////////////////////methods
var $chats = $('#chats');
var escaped = $(message).html();
//initialize app
app.init = function (){
  // app.addMessage(message);
  app.addRoom('name');
  app.fetch();
};
// when a button is clicked or enter is pushed
// variable message gets .message value from user
// add message to chats
// add message to server
// refresh new chats?
app.addMessage = function(message) {
  // $chats.html('');
  // console.log("this in the addMess", this);
  // get the message JSON String
  // console.log('message', this);
  // build up a html element in a variable
  var $post = $('<div></div>');
  // add the message data to the element
  var output = ('<p><strong>'+ message.username + ':</strong>' + message.text + '</p>');
  $post.html(output);
  $post.appendTo(chats);
  // $chats.append($post);
  // app.send(message);
  // app.fetch();
  // console.log($(chats).html(escaped));
};

app.clearMessages = function() {
  $(chats).html('');
};

app.addRoom = function(name){
  $('#roomSelect').on('click', function() {
    console.log('click', this);
  });
};

//enables user to send messages
app.send = function(data){
  //method to submit POST request data to server
  $.ajax({
    url:'https://api.parse.com/1/classes/chatterbox',
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
    url: 'https://api.parse.com/1/classes/chatterbox',
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
