bindEvents = function() {
  $(".search-form").on('ajax:success', function(e, data){
    $.each(data, function (obj, val){
      $(".report ul").append('<div><li><a href>' +val.id+': ' + val.date + '</li>' + val.details + '</div></a><br>')
    });
    $(".admin-search").hide(400);
    console.log(data)
    $(".report").show(400);
  });
  $(".search-form").on('ajax:error', function(e, data) {console.log(data)});
};

bindLinkToEvent = function() {
  $(".show-event").on('ajax:success', function(e, data){
    $(".report").hide(400);
    $(".show-event-details").empty().html(data)
    $(".admin-search").hide(400);
    $(".show-event-details").show(400);
  });
  $(".search-form").on('ajax:error', function(e, data) {console.log(data)});
};

bindButtonClose = function() {
  $("#button-close").on('click', function() {
    $(".report").hide(400);
    $(".admin-search").show(400);
  });
};

$( document ).ready(function() {
   bindEvents();
  $(".report").hide();
   bindLinkToEvent();
   bindButtonClose();
});
