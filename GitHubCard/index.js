/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



axios.get(`https://api.github.com/users/meloegel`)
  .then(response => {
    console.log(response.data)
    let card = document.querySelector('.cards')
    card.appendChild(gitHubInfo(response.data))
  })
  .catch(error => {
    console.log(error)
  })


const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];




function gitHubInfo(gitHubUserName){
  const {avatar_url, name, login, location, url, followers, following, bio}  = gitHubUserName
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const givenName = document.createElement('h3')
  const userName = document.createElement('p')
  const local = document.createElement('p')
  const profile = document.createElement('p')
  const userAddress = document.createElement('a')
  const follows = document.createElement('p')
  const follow = document.createElement('p')
  const bios = document.createElement('p')
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(givenName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(local)
  cardInfo.appendChild(profile)
  profile.appendChild(userAddress)
  cardInfo.appendChild(follows)
  cardInfo.appendChild(follow)
  cardInfo.appendChild(bios)
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  givenName.classList.add('name')
  userName.classList.add('username')
  givenName.textContent = `${name}`
  userName.textContent = `${login}`
  local.textContent = `${location}`
  userAddress.textContent = `${url}`
  follows.textContent = `${followers}`
  follow.textContent = `${following}`
  bios.textContent = `${bio}`
  img.src = avatar_url
  return card
}


followersArray.forEach(user => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => {
      console.log(res.data)
      let card = document.querySelector('.cards')
      card.appendChild(gitHubInfo(res.data))
    })
    .catch(err => err)
})




// console.log(gitHubInfo())

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    
*/
