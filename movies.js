// function addNewMovie(event) {
//   event.preventDefault();
//   console.log("working button!");

//   // ;
// }

$("#submit").click(function (event) {
  event.preventDefault();
  const favMovie = $("#film").val();
  const movieRating = $("#rating").val();
  $("ul").append(
    `<li>${favMovie}: ${movieRating} <button class='delete'>Delete</button></li>`
  );
});

function deleteMovie(event) {
  $(event.target).parent().remove();
}

$("#fav-movies-list").on("click", ".delete", deleteMovie);
