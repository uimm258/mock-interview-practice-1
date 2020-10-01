'use strict';

//When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics.



function getLyrics(artist, title) {
  let artistcode=$("#js-query-artist").val();
  let titlecode=$("#js-query-title").val();

  let searchURL=`https://api.lyrics.ovh/v1/${artistcode}/${titlecode}`

  fetch(searchURL)
    .then(response=>response.json())
    .then(responseJson=>displayResults(responseJson))
    .catch(error=>alert('No artist/title found. Please try again'));
    watchForm();

    console.log(searchURL)
};

function displayResults(responseJson) {
  console.log(responseJson)
  $('#results-list').empty();

  let results = '';
  responseJson.data.map(result=>{
    result += 
    `<li>
      <h3>${result.artist}</h3>
      <h3>${result.title}</h3>
      <p>${result.lyrics}</p>
    </li>`
  });
  $('#result').removeClass('hidden');
  $('#results-list').html(results);

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getLyrics();
    })

}

$(watchForm);

