// 卡牌图像资源 - 你可以替换成你自己的图片
const cardImages = [
    'assets/images/card/101st_airborne.png',
    'assets/images/card/101st_bezhitsa.png',
    'assets/images/card/110_panzergrenadier.png',
    'assets/images/card/114th_infantry_regiment.png',
    'assets/images/card/119_grenadier.png',
];

// 背面图像
const backImages = [
    'assets/images/back/BasicBritainB.jpg',
    'assets/images/back/BasicGermanB.jpg',
    'assets/images/back/JapanBasicB.jpg',
    'assets/images/back/SovietBasicB.jpg',
    'assets/images/back/UsaBasicB.jpg'
];

const cardContainer = document.getElementById('cardContainer');
const messageEl = document.getElementById('message');
let flippedCards = 0;
let currentCards = [];

// 获取随机卡背图像
function getRandomBackImage() {
    return backImages[Math.floor(Math.random() * backImages.length)];
}

// 初始化卡牌
function initCards() {
    cardContainer.innerHTML = '';
    flippedCards = 0;
    
    // 随机选择5张不同的卡牌
    currentCards = [...cardImages].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    currentCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.index = index;
        
        const cardFront = document.createElement('div');
        cardFront.className = 'card-face card-front';
        const frontImg = document.createElement('img');
        frontImg.src = card;
        frontImg.alt = `加载中`;
        cardFront.appendChild(frontImg);
        
        const cardBack = document.createElement('div');
        cardBack.className = 'card-face card-back';
        const backImg = document.createElement('img');
        backImg.src = getRandomBackImage(); // 随机选择卡背图像
        backImg.alt = '加载中';
        cardBack.appendChild(backImg);
        
        cardElement.appendChild(cardFront);
        cardElement.appendChild(cardBack);
        
        cardElement.style.transform = 'rotateY(180deg)';
        
        cardElement.addEventListener('click', flipCard);
        cardContainer.appendChild(cardElement);
    });
}

// 翻转卡牌
function flipCard(event) {
    const card = event.currentTarget;
    if (card.classList.contains('flipped')) return;
    
    card.classList.add('flipped');
    card.style.transform = 'rotateY(0deg)'; // 翻转卡牌到正面
    flippedCards++;
    
    if (flippedCards === currentCards.length) {
        setTimeout(initCards, 1000);
    }
}

// 初始化游戏
initCards();
