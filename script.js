// 卡牌图像资源 - 你可以替换成你自己的图片
let cardImages = [];

// 国家与卡背图像的映射
const backImageMap = {
    'britain': 'assets/images/back/BasicBritainB.jpg',
    'german': 'assets/images/back/BasicGermanB.jpg',
    'finland': 'assets/images/back/FinlandBack.jpg',
    'france': 'assets/images/back/FranceBack.jpg',
    'italy': 'assets/images/back/ItalyBack.jpg',
    'japan': 'assets/images/back/JapanBasicB.jpg',
    'polish': 'assets/images/back/polishBack.jpg',
    'soviet': 'assets/images/back/SovietBasicB.jpg',
    'usa': 'assets/images/back/UsaBasicB.jpg'
};

const cardContainer = document.getElementById('cardContainer');
const messageEl = document.getElementById('message');
let flippedCards = 0;
let currentCards = [];

// 获取卡牌对应的卡背图像
function getBackImage(cardPath) {
    const country = cardPath.split('/')[3]; // 获取国家名
    return backImageMap[country] || 'assets/images/back/default.jpg'; // 默认卡背
}

// 加载卡牌图片路径
async function loadCardImages() {
    const response = await fetch('info.json');
    const data = await response.json();
    cardImages = Object.values(data).flat(); // 将所有国家的卡牌图片合并成一个数组
    initCards(); // 初始化卡牌
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
        backImg.src = getBackImage(card); // 根据卡牌路径获取对应卡背
        backImg.alt = '加载中';
        cardBack.appendChild(backImg);
        
        cardElement.appendChild(cardFront);
        cardElement.appendChild(cardBack);
        
        cardElement.style.transform = 'rotateY(180deg)';
        
        cardElement.addEventListener('click', flipCard);
        cardContainer.appendChild(cardElement);
    });
}

// 添加悬浮按钮
function createCountinueButton() {
    const countinueButton = document.createElement('button');
    countinueButton.id = 'countinueButton';
    countinueButton.textContent = '继续';
    countinueButton.classList.add('countinue-btn'); // 使用预定义的样式类
    countinueButton.style.position = 'fixed';
    countinueButton.style.bottom = '20px';
    countinueButton.style.right = '20px';
    countinueButton.style.zIndex = '1000';
    document.body.appendChild(countinueButton);

    countinueButton.addEventListener('click', () => {
        initCards();
        countinueButton.remove();
    });
}

// 修改 flipCard 函数
function flipCard(event) {
    const card = event.currentTarget;
    if (card.classList.contains('flipped')) return;
    
    card.classList.add('flipped');
    card.style.transform = 'rotateY(0deg)'; // 翻转卡牌到正面
    flippedCards++;
    
    if (flippedCards === currentCards.length) {
        createCountinueButton(); // 显示刷新按钮
    }
}


window.ipc = {
    postMessage: (channel, data) => require('electron').ipcRenderer.send(channel, data),
    on: (channel, callback) => require('electron').ipcRenderer.on(channel, callback)
}

document.getElementById('minimize-btn').addEventListener('click', minimizeWindow);
document.getElementById('maximize-btn').addEventListener('click', maximizeWindow);
document.getElementById('close-btn').addEventListener('click', closeWindow);

// 窗口控制函数
function minimizeWindow() {
    window.ipc.postMessage('window-minimize');
}

function maximizeWindow() {
    window.ipc.postMessage('window-maximize');
}

function closeWindow() {
    window.ipc.postMessage('window-close');
}

// 初始化游戏
loadCardImages();
