// YOUR CODE HERE:
//object containing properties of chatterbox app
var app = {};


//object containing message properties
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
};

app.clearMessages = function() {
  $(chats).html('');
};

app.addRoom = function() {

};

//settimeout
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

//set timeout
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
      // console.log('data in fetch', data);
      console.log('chatterbox: Message received', data.results);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive message');
    }
  });

};
app.init();
