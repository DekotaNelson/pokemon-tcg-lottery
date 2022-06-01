
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


function getFetch(){
  const name = document.querySelector('input').value
  const url = `https://api.pokemontcg.io/v2/cards?q=name:${name}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data)
        if(data.data == undefined || data.data.length == 0){
          alert(`${name} not found. Please check spelling or try another card.`)
        }
        else{
          window.location = '#services'
          const cardContainer = document.querySelector('.row');
          removeAllChildNodes(cardContainer);
          for(let i = 0; i < data.data.length; i++){
            let item = new ProductInfo(data.data[i])
            item.createCard(i)
            window.location = '#section'
        }
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

class ProductInfo{
  constructor(card){
    this.name = card.name
    this.image = card.images.small
    if(card.tcgplayer.prices.normal == undefined && card.tcgplayer.prices.holofoil == undefined && card.tcgplayer.prices.reverseHolofoil == undefined){
      this.marketSellPrice = card.tcgplayer.prices.unlimitedHolofoil.market
      this.highPrice = card.tcgplayer.prices.unlimitedHolofoil.high
      this.lowPrice = card.tcgplayer.prices.unlimitedHolofoil.low
    }
    else if(card.tcgplayer.prices.normal == undefined && card.tcgplayer.prices.holofoil == undefined){
      this.marketSellPrice = card.tcgplayer.prices.reverseHolofoil.market
      this.highPrice = card.tcgplayer.prices.reverseHolofoil.high
      this.lowPrice = card.tcgplayer.prices.reverseHolofoil.low
    }
    else if(card.tcgplayer.prices.normal == undefined){
      this.marketSellPrice = card.tcgplayer.prices.holofoil.market
      this.highPrice = card.tcgplayer.prices.holofoil.high
      this.lowPrice = card.tcgplayer.prices.holofoil.low
    }
    else{
      this.marketSellPrice = card.tcgplayer.prices.normal.market
      this.highPrice = card.tcgplayer.prices.normal.high
      this.lowPrice = card.tcgplayer.prices.normal.low
    }
    this.marketLink = card.cardmarket.url
  }

  createCard(i){
    

    let cardArticle = document.createElement('article');
    cardArticle.classList.add('col-md-4', 'col-sm-6', 'col-xs-12', 'wow', 'fadeInUp', `cardArticle${i}`);
    document.querySelector('.row').appendChild(cardArticle)

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('service-block', 'text-center', `cardDiv${i}`);
    document.querySelector(`.cardArticle${i}`).appendChild(cardDiv);
    
    let cardImgDiv = document.createElement('div');
    cardImgDiv.classList.add('service-icon', 'text-center', `cardImgDiv${i}`);
    document.querySelector(`.cardDiv${i}`).appendChild(cardImgDiv);
    
    let cardImg = document.createElement('img');
    cardImg.classList.add('cardImg');
    cardImg.src = this.image
    document.querySelector(`.cardImgDiv${i}`).appendChild(cardImg);

    let cardNameH3 = document.createElement('h3');
    cardNameH3.innerText = this.name
    document.querySelector(`.cardDiv${i}`).appendChild(cardNameH3);

    let cardMarketSellPrice = document.createElement('li');
    cardMarketSellPrice.innerText = `Market Price: ${this.marketSellPrice}`
    document.querySelector(`.cardDiv${i}`).appendChild(cardMarketSellPrice);

    let cardHighPrice = document.createElement('li');
    cardHighPrice.innerText = `Highest Price: ${this.highPrice}`
    document.querySelector(`.cardDiv${i}`).appendChild(cardHighPrice);

    let cardLowPrice = document.createElement('li');
    cardLowPrice.innerText = `Lowest Price: ${this.lowPrice}`
    document.querySelector(`.cardDiv${i}`).appendChild(cardLowPrice);

    let cardMarketLink = document.createElement('a');
    cardMarketLink.href = this.marketLink
    cardMarketLink.innerText = `Market History Link`
    document.querySelector(`.cardDiv${i}`).appendChild(cardMarketLink);
    
  }
  // showInfo(){
  //   document.getElementById('productPhoto').src = this.image
  //   document.getElementById('productName').innerText = this.name

  // }

  // listIngredients(){
  //   let table = document.getElementById('ingredientTable')
  //   for(let i = 1; i < table.rows.length;){
  //     table.deleteRow(i)
  //   }

  //   if(!(this.ingredients == null)){
  //     for(let key in this.ingredients){
  //       let newRow = table.insertRow(-1)
  //       let newICell = newRow.insertCell(0)
  //       let newVCell = newRow.insertCell(1)
  //       let newIText = document.createTextNode(
  //         this.ingredients[key].text
  //       )
  //       let vegStatus = this.ingredients[key].vegetarian == null ? 'unknown' : this.ingredients[key].vegetarian
  //       let newVText = document.createTextNode(vegStatus)
  //       newICell.appendChild(newIText)
  //       newVCell.appendChild(newVText)
  //       if (vegStatus === 'no') {
  //         newVCell.classList.add('non-vegi-item')
  //        }
  //      else if (vegStatus === 'unknown' || vegStatus === 'maybe') {
  //         newVCell.classList.add('unknown-item')
  //       }
  //     }
  //   }
  // }
}
