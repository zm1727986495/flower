let ary = [{
    "name": "忘情巴黎",
    "detail": "浪漫唯美 女神挚爱",
    "pic": "https://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg",
    "dec": "19枝红玫瑰 永远爱你 永久的爱意。",
    "price": 172,
    "type":"love",
    "arypic": [
    {
        "img":"https://img01.hua.com/uploadpic/newpic/9012009.jpg"
    },
     {
        "img":"https://img01.hua.com/uploadpic/newpic/201505161715457343.jpg"
    },
     {
        "img":"https://img01.hua.com/uploadpic/newpic/201505161715590781.jpg"
    },
     {
        "img":"https://img01.hua.com/uploadpic/newpic/201505161716191250.jpg"
    }
    ]
}, {
    "name": "眷念",
    "detail": "特惠款",
    "pic": "https://img01.hua.com/uploadpic/newpic/9012060.jpg_220x240.jpg",
    "dec": "戴安娜粉玫瑰33枝，石竹梅围绕。",
    "price": 245,
    "type":"love",
    "arypic": [
        {
            "img":"https://img01.hua.com/uploadpic/newpic/9012060.jpg"
        },
        {
            "img":"https://img01.hua.com/uploadpic/newpic/201512091752427187.jpg"
        },
        {
            "img":"https://img01.hua.com/uploadpic/newpic/201512091752490937.jpg"
        },
        {
            "img":"https://img01.hua.com/uploadpic/newpic/201512091752561250.jpg"
        }
    ]
},
    {
        "name": "母爱",
        "detail": "热销款",
        "pic": "https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg",
        "dec": "紫红色康乃馨9枝，粉色多头康乃馨10枝。",
        "price": 178,
        "type":"family",
        "arypic": [
            {
                "img":"https://img01.hua.com/uploadpic/newpic/9012092.jpg"
            },
            {
                "img":"https://img01.hua.com/uploadpic/newpic/201708091917222536.jpg"
            },
            {
                "img":"https://img01.hua.com/uploadpic/newpic/201708091917272068.jpg"
            },
            {
                "img":"https://img01.hua.com/uploadpic/newpic/201708091920351663.jpg"
            }
        ]
    },
    {
    "name": "温情祝福",
    "detail": "",
    "pic": "https://img01.hua.com/uploadpic/newpic/9012190.jpg_220x240.jpg",
    "dec": "紫红色康乃馨9枝，粉色多头香水百合2枝，紫色桔梗4枝。",
    "price": 272,
    "type":"family",
    "arypic": [
    {
        "img":"https://img01.hua.com/uploadpic/newpic/9010947.jpg"
    },
     {
        "img":"https://img01.hua.com/uploadpic/newpic/201707281814193620.jpg"
    },
     {
        "img":"https://img01.hua.com/uploadpic/newpic/201707281814252976.jpg"
    },
     {
        "img":"https://img01.hua.com/uploadpic/newpic/201707281814316820.jpg"
    }
    ]
}, {
        "name": "To温暖你心",
        "detail": "",
        "pic": "https://img01.hua.com/uploadpic/newpic/1073094.jpg_220x240.jpg",
        "dec": "苔藓小兔+粉色永生玫瑰＋粉边紫心奥斯丁。",
        "price": 288,
        "type":"friend",
        "arypic": [
            {
                "img":"https://img01.hua.com/uploadpic/newpic/1073094.jpg"
            },
            {
                "img":"https://img01.hua.com/uploadpic/newpic/201607071721133750.jpg"
            },
            {
                "img":"https://img01.hua.com/uploadpic/newpic/201607071721244843.jpg"
            },
            {
                "img":"https://img01.hua.com/uploadpic/newpic/201607071721416562.jpg"
            }
        ]
    },
    {
    "name": "海洋之恋",
    "detail": "德国工艺 见证永恒爱情",
    "pic": "https://img01.hua.com/uploadpic/newpic/1073147.jpg_220x240.jpg",
        "dec": "厄瓜多尔进口蓝色永生玫瑰5朵，白玫瑰5朵,浅蓝色奥斯丁4朵。",
    "price": 195,
    "type":"friend",
    "arypic": [
    {
        "img":"https://img01.hua.com/uploadpic/newpic/1073147.jpg"
    },
     {
        "img":"https://img01.hua.com/uploadpic/newpic/201710231112471063.jpg"
    },
     {
        "img":"https://img01.hua.com/uploadpic/newpic/201710231112570723.jpg"
    },
     {
        "img":"https://img01.hua.com/uploadpic/newpic/201710231113039139.jpg"
    }
    ]
}];

let roseN = 0,
    elderN = 0,
    amorN = 0;

let result = [];
for (let i = 1; i < 300; i++) {
    let n = Math.round(Math.random() * 5),
        item = JSON.parse(JSON.stringify(ary[n])),
        m = 0;
    item = { id: i, ...item };
    switch (item.type) {
        case 'rose':
            ++roseN;
            m = roseN;
        case 'elder':
            ++elderN;
            m = elderN;
        default:
            ++amorN;
            m = amorN;
    }
    m = (m < 100 && m >= 10) ? '0' + m : (m < 10 ? '00' + m : m);
    result.push(item);
}
console.log(result);
require('../utils/promiseFS').writeFile('./homelist.json', result);

