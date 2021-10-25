const name = 'Lucas Pereira'

const LinksSocialMedia = {
  github: 'lucasmdpereira',
  linkedin: 'in/lucasmdpereira',
  instagram: 'estupendosenhor',
  twitter: 'EstupendoSenhor'
}

function changeSocailMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

changeSocailMediaLinks()
getGitHubProfileInfos()
