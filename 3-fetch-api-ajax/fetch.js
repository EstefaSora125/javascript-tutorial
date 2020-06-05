
'use strict'

const URLS = 'https://api.github.com/repos/push-dev/frontend-roadmap/commits';

function loadJson(url) {
    return fetch(url)
      .then(response => response.json());
  }

   async function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
      let img = document.createElement('img');
      let paragraph = document.createElement('h1');
      img.src = githubUser.avatar_url;
      img.className = "promise-image";
      paragraph.innerHTML = 'Name: ' + githubUser.login;
      document.body.append(paragraph);
      document.body.append(img);     
      
      setTimeout(() => {
        resolve(githubUser);
      }, 5000);
    });
  }

  loadJson(URLS).then(githubUser => githubUser[0].author).then(showAvatar);