

$.ajax({
  url: "http://tiny-pizza-server.herokuapp.com/collections/greenville-chats",
  type: "GET",
  data: {
    message: "Hi!",
    username: "jacobsmith",
    createdAt: "Thu Jan 29 2015 13:34:05 GMT-0500 (EST)"
  }
});


    var sideTemplate = _.template($('[data-template-name=sidebar]').text());
    var $sidebar = $('.sidebar');

    $.ajax(
      myGitHubAddress).done(function(side) {
      $sidebar.append(sideTemplate(side));

      });
