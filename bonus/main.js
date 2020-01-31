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

          var source = $('.templates').html();

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

  $('select').change(function() {

    var selezioneGenere = $(this).val();
    console.log(selezioneGenere);
    $('.cd').hide();

    $('.cd').each(function() {
      var genereCd = $(this).attr('value');
      if (genereCd == selezioneGenere) {
        $(this).show();
      };
    });

  });


  $('button').on('click', function () {

    var selezioneGenere = $('select').val();
    console.log(selezioneGenere);
    $('.cd').hide();

    $('.cd').each(function() {
      var genereCd = $(this).attr('value');
      if (genereCd == selezioneGenere) {
        $(this).show();
      };
    });

    // for (var i = 0; i < libreriaCd.length; i++) {
    //   if (genereCd == selezioneGenere) {
    //       $(this).show();
    //     };
    // }

  });

});
