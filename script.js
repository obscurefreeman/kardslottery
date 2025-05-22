// 卡牌图像资源 - 你可以替换成你自己的图片
const cardImages = [
    'assets/images/card/101st_airborne.png',
    'assets/images/card/101st_bezhitsa.png',
    'assets/images/card/110_panzergrenadier.png',
    'assets/images/card/114th_infantry_regiment.png',
    'assets/images/card/119_grenadier.png',
    'assets/images/card/122nd_korsun.png',
    'assets/images/card/133rd_ironman.png',
    'assets/images/card/13th_engineers_battalion.png',
    'assets/images/card/158_nachschub.png',
    'assets/images/card/1st_signal_regiment.png',
    'assets/images/card/1st_yokosuka.png',
    'assets/images/card/2nd_raiding_brigade.png',
    'assets/images/card/327th_pathfinders.png',
    'assets/images/card/329th_engineer_battalion.png',
    'assets/images/card/35_grenadier.png',
    'assets/images/card/3rd_canadian_division.png',
    'assets/images/card/4th_guards_rifles.png',
    'assets/images/card/4th_kuban_cossacks.png',
    'assets/images/card/593rd_jasco.png',
    'assets/images/card/5th_medical_battalion.png',
    'assets/images/card/6th_airborne.png',
    'assets/images/card/6th_airlanding_brigade.png',
    'assets/images/card/83rd_naval_brigade.png',
    'assets/images/card/85_pioneer_company.png',
    'assets/images/card/8_fallschirmjger.png',
    'assets/images/card/96_infantry_regiment.png',
    'assets/images/card/97th_rifles.png',
    'assets/images/card/a34_comet.png',
    'assets/images/card/a6m221_zero.png',
    'assets/images/card/admiral_hipper.png',
    'assets/images/card/admiral_yamamoto.png',
    'assets/images/card/afrika_korps.png',
    'assets/images/card/air_defense.png',
    'assets/images/card/alpenfestung.png',
    'assets/images/card/a_few_good_men.png',
    'assets/images/card/b26_marauder.png',
    'assets/images/card/b29_superfortress.png',
    'assets/images/card/banzai.png',
    'assets/images/card/beaufighter_tf_mk_x.png',
    'assets/images/card/beaufighter_vi_f.png',
    'assets/images/card/beriev_be4.png',
    'assets/images/card/big_red_one.png',
    'assets/images/card/bismarck.png',
    'assets/images/card/black_prince.png',
    'assets/images/card/bm13n_us6.png',
    'assets/images/card/bp43_armored_train.png',
    'assets/images/card/c6n_saiun.png',
    'assets/images/card/carrier_battle.png',
    'assets/images/card/case_blue.png',
    'assets/images/card/churchill_mk_iii_avre.png',
    'assets/images/card/cobelligerents.png',
    'assets/images/card/depths_of_winter.png',
    'assets/images/card/desert_dust.png',
    'assets/images/card/desperate_measures.png',
    'assets/images/card/dornier_do_18g.png',
    'assets/images/card/e13a_jake.png',
    'assets/images/card/envelop.png',
    'assets/images/card/exhaust_all_options.png',
    'assets/images/card/f1m2_pete.png',
    'assets/images/card/f6f_hellcat.png',
    'assets/images/card/fast_heinz.png',
    'assets/images/card/from_the_deep.png',
    'assets/images/card/front_formation.png',
    'assets/images/card/gambit.png',
    'assets/images/card/greif.png',
    'assets/images/card/hell_on_wheels.png',
    'assets/images/card/heroes_of_the_soviet_union.png',
    'assets/images/card/high_altitude_bombing.png',
    'assets/images/card/his_majestys_chosen.png',
    'assets/images/card/hms_illustrious.png',
    'assets/images/card/hms_talbot.png',
    'assets/images/card/home_defense.png',
    'assets/images/card/ijn_shinano.png',
    'assets/images/card/iosef_stalin_ii.png',
    'assets/images/card/isolation.png',
    'assets/images/card/isu152.png',
    'assets/images/card/jade_division.png',
    'assets/images/card/kawanishi_h6k.png',
    'assets/images/card/ki30_ann.png',
    'assets/images/card/ki49_storm_dragon.png',
    'assets/images/card/king_tiger.png',
    'assets/images/card/kokuras_sword.png',
    'assets/images/card/komet.png',
    'assets/images/card/kv1_1941.png',
    'assets/images/card/lancaster_b_iii.png',
    'assets/images/card/leopold.png',
    'assets/images/card/long_range_desert_group.png',
    'assets/images/card/m24_chaffee.png',
    'assets/images/card/m26_pershing.png',
    'assets/images/card/m4_firefly.png',
    'assets/images/card/m6.png',
    'assets/images/card/mass_deployment.png',
    'assets/images/card/maus.png',
    'assets/images/card/mayhem.png',
    'assets/images/card/me_262a_schwalbe.png',
    'assets/images/card/monty.png',
    'assets/images/card/night_bombing.png',
    'assets/images/card/night_witches.png',
    'assets/images/card/no_43_commando.png',
    'assets/images/card/on_the_ascent.png',
    'assets/images/card/p40b_tomahawk.png',
    'assets/images/card/p40_kittyhawk.png',
    'assets/images/card/p40_n5.png',
    'assets/images/card/p51_b.png',
    'assets/images/card/panther_d.png',
    'assets/images/card/panzerzug_61_bp42.png',
    'assets/images/card/panzer_iiil.png',
    'assets/images/card/patton.png',
    'assets/images/card/pby_catalina.png',
    'assets/images/card/reich_research.png',
    'assets/images/card/royal_research.png',
    'assets/images/card/rule_britannia.png',
    'assets/images/card/sexton.png',
    'assets/images/card/shifting_attack.png',
    'assets/images/card/siberian_transfer.png',
    'assets/images/card/sincerely_yours.png',
    'assets/images/card/soul_of_old_japan.png',
    'assets/images/card/spitfire_mk_iia.png',
    'assets/images/card/strategic_bombing.png',
    'assets/images/card/strategic_focus.png',
    'assets/images/card/stuka_87g.png',
    'assets/images/card/t3485_1945.png',
    'assets/images/card/the_great_expanse.png',
    'assets/images/card/the_rangers.png',
    'assets/images/card/to_the_last_man.png',
    'assets/images/card/tractor_factories.png',
    'assets/images/card/type_4_chito.png',
    'assets/images/card/type_96_aa_gun.png',
    'assets/images/card/ultra.png',
    'assets/images/card/upgrade.png',
    'assets/images/card/us_military_research.png',
    'assets/images/card/victory_march.png',
    'assets/images/card/wave_after_wave.png',
    'assets/images/card/wellington.png',
    'assets/images/card/winter_offensive.png',
    'assets/images/card/yak_7.png',
    'assets/images/card/yamato.png',
    'assets/images/card/yank.png',
    'assets/images/card/zhukov.png'
];

// 背面图像
const backImages = [
    'assets/images/back/BasicBritainB.jpg',
    'assets/images/back/BasicGermanB.jpg',
    // 'assets/images/back/FinlandBack.jpg',
    // 'assets/images/back/FranceBack.jpg',
    // 'assets/images/back/ItalyBack.jpg',
    'assets/images/back/JapanBasicB.jpg',
    // 'assets/images/back/polishBack.jpg',
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
