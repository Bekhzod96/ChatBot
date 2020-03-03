loginName = '';
$(function() {
  $(document).ready(function() {
    message1 = "I am BeKa's chat bot";
    message2 = '<p>How can I help you?</p>';
    message3 = "<p>I don't understand what you mean?</p>";
    message4 = '<p>I can search it for you in google</p>';
    message5 = '<p>You can all me ChatBot</p>';
    message6 = '<p>Do you want to paly with me?</p>';
    message7 = '<p>Could you tell me more abou</p>';

    count = 1;
  });
  $('.loginBtn').click(function() {
    loginName = 'BeKa';
    loginName = $('.loginInp').val();
    $('.chatBox').show();
    $('.loginBox').hide();
  });
  $('.mesBtn').click(function() {
    let d = new Date();
    dateIndicator = d.getFullYear() + '.' + d.getMonth() + '.' + d.getDate();
    hours =
      '<div class="hours">' + d.getHours() + ':' + d.getMinutes() + '</div>';
    newMessage = '<div class="send-message"> <div>';
    newMessage +=
      '<div class="user">' +
      loginName +
      '</div>' +
      $('.mesInp').val() +
      '</div>';
    tmpHtml = $('.message').html();
    tmpHtml += newMessage + hours + '</div>';
    $('.message').html(tmpHtml);
    $('.btn1').trigger('click');
    $('.mesInp').val('');

    switch (count) {
      case 1:
        botMessage = '<div class="send-message botMessage"> <div> <p>Hi ';
        botMessage += loginName + '</p>' + message1 + message2;

        break;

      case 2:
        botMessage = '<div class="send-message botMessage"> <div>' + message3;
        break;
      case 3:
        botMessage = '<div class="send-message botMessage"> <div>' + message4;
        break;
      case 5:
        botMessage = '<div class="send-message botMessage"> <div>' + message5;
        break;
      case 6:
        botMessage = '<div class="send-message botMessage"> <div>' + message6;
        break;
      case 7:
        botMessage = '<div class="send-message botMessage"> <div>' + message7;
        count = 2;
        break;
    }
    bot = $('.message').html();
    bot += botMessage + '</div></div>';
    $('.message').html(bot);
    count++;
  });
});
