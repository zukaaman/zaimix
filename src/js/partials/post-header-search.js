document.addEventListener("DOMContentLoaded", function(event) {
  var searchButtonPost = document.querySelector(".blog-post-header__search-button");
  var searchWrapperPost = document.querySelector(".blog-post-header__search-wrapper");
  var searchInputPost = document.querySelector(".blog-post-header__search-input");

  searchButtonPost.addEventListener("click", function() {
    searchWrapperPost.classList.toggle("blog-post-header__search-wrapper--open");
    searchButtonPost.classList.toggle("blog-post-header__search-button--open");
    searchInputPost.classList.toggle("blog-post-header__search-input--open");
  });
});
