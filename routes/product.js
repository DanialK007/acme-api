const express = require('express');
const router = express.Router();

const products = [
    {
        id: 1,
        image: "https://doublerkicks.com/cdn/shop/files/AURORA_CN8490-101_PHSRH000-3144.png?v=1690066897&width=1946",
        title: "Air Max Sneakers",
        description: "Experience the ultimate comfort and style with our Air Max sneakers.",
        category: "Sneakers",
        price: 150,
    },
    {
        id: 2,
        image: "https://as2.ftcdn.net/v2/jpg/04/86/94/63/1000_F_486946350_0JfeNZxGGwwewbDk3mjeAuLnt2WjU5oN.jpg",
        title: "Denim Jacket",
        description: "Add a classic touch to your outfit with our stylish denim jackets.",
        category: "Jacket",
        price: 80,
    },
    {
        id: 3,
        image: "https://img.freepik.com/premium-photo/brown-leather-jacket-white-background-white-clear-surface-png-transparent-background_94628-46582.jpg",
        title: "Leather Jacket",
        description: "Stay warm and look cool with our premium leather jackets.",
        category: "Jacket",
        price: 200,
    },
    {
        id: 4,
        image: "https://isto.pt/cdn/shop/files/StraightPleatedChinos_Khaki_FLatlay.webp?v=1713864008",
        title: "Chinos",
        description: "Versatile and comfortable, our chinos are perfect for any occasion.",
        category: "Pants",
        price: 60,
    },
    {
        id: 5,
        image: "https://st2.depositphotos.com/1000865/11724/i/450/depositphotos_117241808-stock-photo-leather-belt-isolated-on-white.jpg",
        title: "Leather Belt",
        description: "Complete your outfit with our stylish leather belts.",
        category: "Accessories",
        price: 30,
    },
    {
        id: 6,
        image: "https://img.freepik.com/premium-photo/beautiful-plain-color-bomber-jacket-white-background_1059430-1780.jpg",
        title: "Bomber Jacket",
        description: "Add a touch of style to your wardrobe with our trendy bomber jackets.",
        category: "Jacket",
        price: 100,
    },
    {
        id: 7,
        image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL2hpcHBvdW5pY29ybl9jYXJnb19wYW50c19hX2Zyb250X3ZpZXdfcHJvZHVjdF9waG90b19tb2NrdXBfbWluaV8zNjI0MTAwOC03MzU4LTRjNmEtYTdlOC1hZGFjYzRiOWMyMTFfMS5qcGc.jpg",
        title: "Cargo Pants",
        description: "Functional and fashionable, our cargo pants are a great addition to your wardrobe.",
        category: "Pants",
        price: 70,
    },
    {
        id: 8,
        image: "https://st4.depositphotos.com/2896569/21618/i/450/depositphotos_216182852-stock-photo-women-red-blue-chelsea-boots.jpg",
        title: "Chelsea Boots",
        description: "Step out in style with our elegant Chelsea boots.",
        category: "Sneakers",
        price: 120,
    },
    {
        id: 9,
        image: "https://pics.craiyon.com/2024-03-15/f5voRO7NSRKKkupmynIFAw.webp",
        title: "Casual Sneakers",
        description: "Perfect for everyday wear, our casual sneakers offer comfort and style.",
        category: "Sneakers",
        price: 90,
    },
    {
        id: 10,
        image: "https://t3.ftcdn.net/jpg/00/82/88/66/360_F_82886619_a4xje5obM5bAajAjnx6ZzWb0Is70kSQA.jpg",
        title: "Running Sneakers",
        description: "Run with ease and comfort in our high-performance running sneakers.",
        category: "Sneakers",
        price: 110,
    },
    {
        id: 11,
        image: "https://img.freepik.com/premium-photo/female-jeans-mom-fit-isolated-white-background-jeans-with-high-waist-casual-style_125869-2331.jpg",
        title: "Denim Jeans",
        description: "Our classic denim jeans are a must-have for any wardrobe.",
        category: "Pants",
        price: 75,
    },
    {
        id: 12,
        image: "https://i.ebayimg.com/images/g/vTQAAOSwCFhh4vm6/s-l500.jpg",
        title: "Sunglasses",
        description: "Protect your eyes and look great with our stylish sunglasses.",
        category: "Accessories",
        price: 50,
    },
    {
        id: 13,
        image: "https://www.shutterstock.com/image-photo/green-hooded-jacket-warm-sport-600nw-2216313349.jpg",
        title: "Puffer Jacket",
        description: "Stay warm and stylish with our insulated puffer jackets.",
        category: "Jacket",
        price: 130,
    },
    {
        id: 14,
        image: "https://cdn.create.vista.com/api/media/small/26919575/stock-vector-pair-sneakers-white-background-vector-illustration",
        title: "Canvas Sneakers",
        description: "Our canvas sneakers are perfect for a casual, laid-back look.",
        category: "Sneakers",
        price: 55,
    },
    {
        id: 15,
        image: "https://static.wixstatic.com/media/742a2f_0437d793db21471c949a434ea0dafd20~mv2.jpg/v1/fill/w_480,h_590,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/742a2f_0437d793db21471c949a434ea0dafd20~mv2.jpg",
        title: "Slim Fit Trousers",
        description: "Our slim fit trousers are perfect for a sharp and modern look.",
        category: "Pants",
        price: 65,
    },
    {
        id: 16,
        image: "https://img.freepik.com/premium-photo/black-beanie-hat-isolated-white-background-top-view-trendy-youth-headwear_513327-421.jpg",
        title: "Beanie",
        description: "Keep your head warm and stylish with our trendy beanies.",
        category: "Accessories",
        price: 25,
    },
    {
        id: 17,
        image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/315525f38bde0a0ec7c7299d954daab3.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        title: "Jogger Pants",
        description: "Stay comfortable and stylish with our jogger pants.",
        category: "Pants",
        price: 55,
    },
    {
        id: 18,
        image: "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1461755_lifestyle?$rl_pdp_mob_zoom$",
        title: "Trench Coat",
        description: "Stay stylish and protected from the elements with our trench coats.",
        category: "Jacket",
        price: 140,
    },
    {
        id: 19,
        image: "https://45rglobal.com/cdn/shop/files/5096024362_0d8f330a-34bc-4cd6-a5fe-48c0ad7039e7.jpg?v=1694661613&width=1445",
        title: "Corduroy Pants",
        description: "Add texture to your outfit with our stylish corduroy pants.",
        category: "Pants",
        price: 70,
    },
    {
        id: 20,
        image: "https://c4.wallpaperflare.com/wallpaper/704/236/11/clock-detail-jewelry-luxury-wallpaper-preview.jpg",
        title: "Watch",
        description: "Our watches are the perfect accessory for any outfit.",
        category: "Accessories",
        price: 200,
    },
    {
        id: 21,
        image: "https://sumaggo.com/wp-content/uploads/2020/11/1709-5.jpg",
        title: "Bomber Jacket",
        description: "Add a touch of style to your wardrobe with our trendy bomber jackets.",
        category: "Jacket",
        price: 100,
    },
    {
        id: 22,
        image: "https://img.freepik.com/premium-photo/windbreaker-jacket-white-background_960080-31597.jpg",
        title: "Windbreaker Jacket",
        description: "Stay dry and look great with our lightweight windbreaker jackets.",
        category: "Jacket",
        price: 85,
    },
    {
        id: 23,
        image: "https://i.ebayimg.com/images/g/KpQAAOSwc81hHazS/s-l1200.webp",
        title: "Cargo Pants",
        description: "Functional and fashionable, our cargo pants are a great addition to your wardrobe.",
        category: "Pants",
        price: 75,
    }
];

router.get('/', (req, res) => {
    res.json(products);
})

router.get('/:id', (req, res) => {
    const productId = req.params.id;
    const menu = menus.find(menu => menu.id === parseInt(productId));
    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
})

module.exports = router;