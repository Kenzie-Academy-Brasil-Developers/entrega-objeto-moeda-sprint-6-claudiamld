const coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random()*(2-0)+0);
        return this.state
    },
    toString: function() {
        let stateText = ''
        if(coin.flip() === 0) {
            stateText = 'Tails'
        } else if(coin.flip() === 1) {
            stateText = 'Heads'
        }
        return stateText
    },
    toHTML: function(){
        const image = document.createElement('img')
        image.src = './assets/coroa.jpeg'
        image.alt = 'Tails'
        image.style.width = '100px';
        if(coin.flip() === 1) {
            image.src = './assets/cara-dogg.png'
            image.alt = 'Heads'
        }
        return image;
    },
}

function display20Flips() {
    const results = [];
    const displayFlips = document.createElement('div')
    document.body.appendChild(displayFlips)
    let showResults = document.createElement('div')
    showResults.style.fontSize = '22px'
    showResults.style.marginLeft = '100px'
    showResults.style.marginTop = '30px'

    for(let i = 0; i <= 20; i++) {
        let flips = coin.toString()

        if(flips === 'Heads') {
            results.push(' Heads')
        } else {
            results.push(' Tails')
        }
    }

    showResults.innerText = results;
    displayFlips.appendChild(showResults)
}
display20Flips();

function display20Images() {
    const results = [];
    let showImages = document.createElement('div')
    showImages.style.marginTop = '50px'
    showImages.style.width = '800px'
    showImages.style.marginLeft = '300px'

    for(let i = 1; i <= 20; i++) {
        let flips = coin.toHTML()
        showImages.appendChild(flips)
    }
    document.body.appendChild(showImages)
}
display20Images()