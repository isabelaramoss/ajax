document.addEventListener('DOMContentLoaded', function(){
  const nameElement = document.querySelector('#name');
  const usernameElement = document.querySelector('#username');
  const avatarElement = document.querySelector('#avatar');
  const repositoriesElement = document.querySelector('#repos');
  const followersElement = document.querySelector('#followers');
  const followingElement = document.querySelector('#following');
  const linkElement = document.querySelector('#link');

  fetch('https://api.github.com/users/isabelaramoss')
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      avatarElement.src = json.avatar_url;
      nameElement.innerText = json.name;
      usernameElement.innerText = json.login;
      followingElement.innerText = json.following;
      followersElement.innerText = json.followers;
      repositoriesElement.innerHTML = json.public_repos;
      linkElement.href = json.html_url;
    })
})

