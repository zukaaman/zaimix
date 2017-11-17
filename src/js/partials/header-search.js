document.addEventListener("DOMContentLoaded", function(event) {
  var searchButton = document.querySelector(".blog-header__search-button");
  var searchWrapper = document.querySelector(".blog-header__search-wrapper");
  var searchInput = document.querySelector(".blog-header__search-input");

  searchButton.addEventListener("click", function() {
    searchWrapper.classList.toggle("blog-header__search-wrapper--open");
    searchButton.classList.toggle("blog-header__search-button--open");
    searchInput.classList.toggle("blog-header__search-input--open");
  });
});
