$(document).ready(function() {
  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function (data, stato)
      {
        console.log(data.response);
        var libreriaCd = data.response;
        for (var i = 0; i < libreriaCd.length; i++) {
          var cd = libreriaCd[i];
          console.log('cd' + i);
          console.log(cd);
          var source = $('.templates').html();
          console.log(source);

          var template = Handlebars.compile(source);

          var context = cd;
          var html = template(context);

          $('.cds-container').append(html);



        }
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    }
  );


});
