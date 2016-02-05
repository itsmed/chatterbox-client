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

var escaped = $(message).html()
//initialize app
app.init = function (){

};

;//enables user to send messages
app.send = function(escaped){
  //method to submit POST request data to server
  $.ajax({
    url:'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(escaped),
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
  $.ajax({
    url: undefined,
    type: 'GET',
    data: JSON,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message received');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive message');
    }
  });
};
