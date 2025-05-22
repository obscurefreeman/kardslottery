// 卡牌图像资源 - 你可以替换成你自己的图片
const cardImages = [
    'https://via.placeholder.com/120x180/4CAF50/FFFFFF?text=卡牌1',
    'https://via.placeholder.com/120x180/FF5722/FFFFFF?text=卡牌2',
    'https://via.placeholder.com/120x180/9C27B0/FFFFFF?text=卡牌3',
    'https://via.placeholder.com/120x180/00BCD4/FFFFFF?text=卡牌4',
    'https://via.placeholder.com/120x180/E91E63/FFFFFF?text=卡牌5',
    'https://via.placeholder.com/120x180/607D8B/FFFFFF?text=卡牌6',
    'https://via.placeholder.com/120x180/795548/FFFFFF?text=卡牌7',
    'https://via.placeholder.com/120x180/3F51B5/FFFFFF?text=卡牌8'
];

// 背面图像
const backImage = 'assets/images/back/BasicBritainB.jpg';

const cardContainer = document.getElementById('cardContainer');
const messageEl = document.getElementById('message');
let flippedCards = 0;
let currentCards = [];

// 初始化卡牌
function initCards() {
    cardContainer.innerHTML = '';
    flippedCards = 0;
    messageEl.textContent = '点击卡牌翻转它们';
    
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
        backImg.src = backImage;
        backImg.alt = '加载中';
        cardBack.appendChild(backImg);
        
        cardElement.appendChild(cardFront);
        cardElement.appendChild(cardBack);
        
        cardElement.addEventListener('click', flipCard);
        cardContainer.appendChild(cardElement);
    });
}

// 翻转卡牌
function flipCard(event) {
    const card = event.currentTarget;
    if (card.classList.contains('flipped')) return;
    
    card.classList.add('flipped');
    flippedCards++;
    
    if (flippedCards === currentCards.length) {
        messageEl.textContent = '所有卡牌已翻开！即将生成新卡牌...';
        setTimeout(initCards, 1000);
    }
}

// 初始化游戏
initCards();