import os
import random

# 定义文件夹路径
card_images_dir = 'assets/images/card'
back_images_dir = 'assets/images/back'

# 获取卡面图像文件列表
card_images = [os.path.join(card_images_dir, f) for f in os.listdir(card_images_dir) if f.endswith(('.jpg', '.png', '.jpeg'))]

# 获取卡背图像文件列表
back_images = [os.path.join(back_images_dir, f) for f in os.listdir(back_images_dir) if f.endswith(('.jpg', '.png', '.jpeg'))]

# 生成 JavaScript 代码
js_code = f"""// 卡牌图像资源 - 从 assets/images/card/ 文件夹中随机选择
const cardImages = [
    {',\n    '.join(f"'{img}'" for img in card_images)}
];

// 背面图像资源 - 从 assets/images/back/ 文件夹中随机选择
const backImages = [
    {',\n    '.join(f"'{img}'" for img in back_images)}
];

const cardContainer = document.getElementById('cardContainer');
const messageEl = document.getElementById('message');
let flippedCards = 0;
let currentCards = [];

// 获取随机卡背图像
function getRandomBackImage() {{
    return backImages[Math.floor(Math.random() * backImages.length)];
}}

// 初始化卡牌
function initCards() {{
    cardContainer.innerHTML = '';
    flippedCards = 0;
    messageEl.textContent = '点击卡牌翻转它们';
    
    // 随机选择5张不同的卡牌
    currentCards = [...cardImages].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    currentCards.forEach((card, index) => {{
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
        
        cardElement.addEventListener('click', flipCard);
        cardContainer.appendChild(cardElement);
    }});
}}

// 翻转卡牌
function flipCard(event) {{
    const card = event.currentTarget;
    if (card.classList.contains('flipped')) return;
    
    card.classList.add('flipped');
    flippedCards++;
    
    if (flippedCards === currentCards.length) {{
        messageEl.textContent = '所有卡牌已翻开！即将生成新卡牌...';
        setTimeout(initCards, 1000);
    }}
}}

// 初始化游戏
initCards();
"""

# 将生成的 JavaScript 代码写入文件
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

print("JavaScript 文件已生成：script.js") 