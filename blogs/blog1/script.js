function shareOnFacebook() {
    // Replace "your-blog-url" with the actual URL of your blog
    var url = "/blogs/blog1/index.html";
    var encodedUrl = encodeURIComponent(url);
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl, "_blank");
  }
  
  function shareOnTwitter() {
    // Replace "your-blog-url" with the actual URL of your blog
    var url = "/blogs/blog1/index.html";
    var encodedUrl = encodeURIComponent(url);
    window.open("https://twitter.com/intent/tweet?url=" + encodedUrl, "_blank");
  }
  
  function shareOnLinkedIn() {
    // Replace "your-blog-url" with the actual URL of your blog
    var url = "/blogs/blog1/index.html";
    var encodedUrl = encodeURIComponent(url);
    window.open("https://www.linkedin.com/shareArticle?url=" + encodedUrl, "_blank");
  }