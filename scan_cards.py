import os
import json
from collections import defaultdict

# 定义卡牌图片的根目录
CARD_IMAGES_DIR = 'assets/images/card'

# 定义输出 JSON 文件路径
OUTPUT_JSON = 'cardImages.json'

def scan_card_images():
    # 使用 defaultdict 来按国家分类卡牌图片路径
    card_images = defaultdict(list)

    # 遍历卡牌图片目录
    for country in os.listdir(CARD_IMAGES_DIR):
        country_dir = os.path.join(CARD_IMAGES_DIR, country)
        if os.path.isdir(country_dir):
            # 遍历国家目录中的图片文件
            for filename in os.listdir(country_dir):
                if filename.endswith('.PNG') or filename.endswith('.png'):
                    # 将图片路径添加到对应国家的列表中，并替换反斜杠为正斜杠
                    path = os.path.join(country_dir, filename).replace('\\', '/')
                    card_images[country].append(path)

    return card_images

def save_to_json(card_images, output_file):
    # 将字典保存为 JSON 文件
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(card_images, f, indent=4, ensure_ascii=False)

if __name__ == '__main__':
    # 扫描卡牌图片
    card_images = scan_card_images()
    
    # 将结果保存到 JSON 文件
    save_to_json(card_images, OUTPUT_JSON)
    
    print(f'卡牌图片已成功扫描并保存到 {OUTPUT_JSON}') 