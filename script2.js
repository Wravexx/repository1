let cards = document.querySelector('.cards');

let pics = ['bmw.jpeg', 'mers.jpeg', 'lexus.jpeg', 'porcshe.jpeg', 'range.jpeg', 'bentleuy.jpeg']
let pics2 = ['bmw.back.jpeg', 'mers.back.jpeg', 'lexus.back.jpeg', 'porcshe.back.jpeg', 'range.back.jpeg', 'bentley.back.jpeg']
let texts = ['BMW X5 M Competition', 'Mercedes-Benz AMG G 63', 'Lexus F Sport', 'Porsche Cayenne Turbo GT Coupe', 'Land Rover Sport D350 Autobiography', 'BENTLEY Continental GT Speed']
let texts2 = ['12 697 180 ₽', '33 925 424 ₽', '8 913 934 ₽', '12 288 934 ₽', '13 885 852 ₽', '26 741 803 ₽']
let texts3 = ['BUY', 'BUY', 'BUY','BUY','BUY','BUY']

for (let i = 0; i < pics.length; i+=1) {
    let img = document.createElement('img');
    img.src = pics[i]
    img.addEventListener('mouseover', function(){
        img.src = pics2[i]
    })
    img.addEventListener('mouseleave', function(){
        img.src = pics[i]
    })

    let text = document.createElement('p');
    text.className = 'text'
    text.innerHTML = texts[i]

    let text2 = document.createElement('p');
    text2.className = 'text2'
    text2.innerHTML = texts2[i]

    let text3 = document.createElement('p');
    text3.className = 'text3'
    text3.innerHTML = texts3[i]

    let card = document.createElement('div');
    let card2 = document.createElement('div');
    card2.className = 'card2'
    card.className = 'card'
    card.appendChild(img)
    card2.appendChild(text)
    card2.appendChild(text2)
    card2.appendChild(text3)
    card.appendChild(card2)

    cards.appendChild(card)
}
