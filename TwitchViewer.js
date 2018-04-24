var arr = ["ninja", "freecodecamp", "tsm_bjergsen", "tsm_myth"];

$(document).ready(function() {
  $("#click").click(function() {
    $.each(arr, function(index, channel) {
      var api =
        "https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/" +
        channel;
      $.getJSON(api, function(data) {
        //console.log(data);
        console.log(data);
      });
    });
  });
});
