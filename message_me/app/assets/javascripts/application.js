// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require semantic-ui/modal
//= require semantic-ui/dropdown
//= require_tree .


scroll_bottom = function() {
  if ($('#message-container').length > 0) {
    $('#message-container').scrollTop($('#message-container')[0].scrollHeight)
  }
}

submit_message = function() {
  $('#message_body').on('keydown', function(event) {
    if (event.keyCode == 13) {
      $('button').click();
      clear_input();
    }
  });
}

clear_input = function() {
  $('#message_body').val('');
}


$(document).on('turbolinks:load', function() {
  submit_message()
  $('.ui.dropdown').dropdown();

  $('.message .close')
  .on('click', function() {
    $(this).closest('.message').transition('fade');
  });

  scroll_bottom();
});
