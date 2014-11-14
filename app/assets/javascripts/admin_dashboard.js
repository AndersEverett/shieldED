

bindEvents = function() {
  // $.ajaxSetup({cache: false}});
  $(".search-form").on('ajax:success', function(e, data){
    var listItems = [];
    
    $.each(data, function (obj, val){
      $a = $("<a />", {
        "href" : "#",
        "text" : (val.id + ": " + val.date + " " + val.details),
        "class" : "linker",
        "id" : val.id
      })

      $li = $("<li />", {
        "class" : "list-style"
      }).append($a)

      listItems.push($li)
    });

    $(".report ul").append(listItems)

    $(".admin-search").hide(400);
    $(".report").show(400);
    bindLinker();
  });
  $(".search-form").on('ajax:error', function(e, data) {console.log(data)});
};

bindLinkToEvent = function() {
  $(".show-event").on('ajax:success', function(e, data){
    $(".report").hide(400);
    $(".admin-search").hide(400);
    $(".show-event-details").hide(0).empty().html(data).show(400)
    // $(".show-event-details").show(400);
    activateEventTagging()
  });
  $(".search-form").on('ajax:error', function(e, data) {console.log(data)});
};

bindButtonClose = function() {
  $("#button-close").on('click', function() {
    $(".report").hide(400);
    $(".admin-search").show(400);
    $(".report ul").empty();
  });
};

bindLinker = function() {
  $(".linker").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/events/'+this.id+'/show_partial',
    })
    .done(function(data) {
      $(".report").hide(400);
      $(".admin-search").hide(400);
      $(".show-event-details").empty().html(data)
      $(".show-event-details").show(400);
    })
    .fail(function() {
      console.log("error");
    })
  })
},

bindOpenCharts = function() {
  $('#charts').on('click', function(event) {
    event.preventDefault();
    $('.admin-charts').show(400)
    $('#not-charts').hide(400)
    })
  },

bindSearchTab = function() {
  $('#search-els').on('click', function(event) {
    event.preventDefault();
    $('.admin-charts').hide(400);
    $('#not-charts').show(400);
    $('.show-event-details').hide(400);
    $('.admin-search').show(400);
  })
},



$( document ).ready(function() {
 
   bindEvents();
  $(".report").hide();
   bindLinkToEvent();
   bindButtonClose();
   bindOpenCharts();
   bindSearchTab();
});
