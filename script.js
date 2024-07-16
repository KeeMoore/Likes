function incrementLike(button) {
    var postId = button.getAttribute('data-post-id');
    var likeCountElement = document.getElementById('likeCount' + postId);
    var likeCount = Number(likeCountElement.innerText);
    
    likeCountElement.innerText = likeCount + 1; // Increment the like count
    
    if (button.innerHTML == 'Like') {
      button.innerHTML = 'Unlike'; // Change to the new text
    } else {
      button.innerHTML = 'Like'; // Change to the original text
    }
  }
  