(function() {
 'use strict';

var serverURL = "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats";

var chatTemplate = _.template($('[data-template-name=chat]').text());
var $chatter = $('.chatter');


function postChat(msg) {
 msg.preventDefault();
 var chatData = {
   username: $('.chat-text').attr('.user-name'),
   createdAt: fromNow(),
   message: $('.chat-text').val()
 };
}
   $.ajax({
     url: serverURL,
     type: "POST",
     data: {
       // message: " ",
       // username: " ",
       // createdAt: " "
     }
     // .done(function(chat)
   });
   //   $chatter.append(chatTemplate(chat));
   // });

   $(document).ready(function(){
       $.ajax({
         url: serverURL,
         type: "GET",
     })
   // .done(chatTemplate);
   .done(function(data){
     _.each(data, function(message){
       if ("")
     })
   });
});

})();
