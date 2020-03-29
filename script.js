
const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://learn.accountingcpd.net/ACPD/API/Test/SampleObject', true)
request.onload = function() {
  let counter = 0
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(item => {

      const photo = document.createElement('img')
      photo.src = `images/${item.imageSrc}`
      photo.setAttribute('class', 'photo')

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const cardtext = document.createElement('div')
      cardtext.setAttribute('class', 'cardtext')

      const h3 = document.createElement('h3')
      h3.textContent = item.title

      const p = document.createElement('p')
      item.description = item.description.substring(0, 300)
      p.textContent = `${item.description}...`

      const p2 = document.createElement('p')
      p2.textContent = `£${item.price}...`

      container.appendChild(card)
      card.appendChild(photo)
      card.appendChild(cardtext)
      cardtext.appendChild(h3)
      cardtext.appendChild(p)
      cardtext.appendChild(p2)

      counter = counter + 1

      if (counter > 10) {
        card.classList.add("hidden")
      }

    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()

const loadMoreBtn =  document.querySelector('#load-more-comments');
loadMoreBtn.addEventListener('click', function(){

  let loadedElements = document.querySelectorAll(".hidden"), i;

  for (i = 0; i < 5; ++i) {
    loadedElements[i].classList.remove("hidden");
    loadMoreBtn.scrollIntoView({behavior: "smooth"});
  }

});





