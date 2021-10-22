const userSocialMedias = {
  github: 'huannvictor',
  youtube: 'channel/UCgxRqPYLAHiOFwsaaeZdaVg',
  facebook: 'huannvictor',
  instagram: 'huannvictor',
  twitter: 'huannvictor'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const site = li.getAttribute('class')
    li.children[0].href = `https://www.${site}.com/${userSocialMedias[site]}`
  }
}
changeSocialMediaLinks()

function getGithubUserInfo() {
  const url = `https://api.github.com/users/${userSocialMedias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userPhoto.src = data.avatar_url
      userName.textContent = data.name
      userLogin.textContent = data.login
      userGitHubLink.href = data.html_url
      userBio.textContent = data.bio
    })
}

getGithubUserInfo()
