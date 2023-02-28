// function addNewMovie(event) {
//   event.preventDefault();
//   console.log("working button!");

//   // ;
// }
const movies = [];

$("#submit").click(function (event) {
  event.preventDefault();
  const favMovie = $("#film").val();
  const movieRating = Number($("#rating").val());
  if (favMovie.length < 3) return;
  if (movieRating < 0 || movieRating > 10) return;
  movies.push({favMovie:favMovie, movieRating: movieRating});
  $("ul").append(
    `<li>${favMovie}: ${movieRating} <button class='delete'>Delete</button></li>`
  );
});

function deleteMovie(event) {
  $(event.target).parent().remove();
}

$("#fav-movies-list").on("click", ".delete", deleteMovie);

// const movieList = [];
// $('li').each(function(){
//   movieList.push($(this).text());
// });

// var myArray = $("li").map(function() {
//   return $(this).text();
// }).get();