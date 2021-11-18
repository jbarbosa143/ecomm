const allProducts = [
  {
    id: "1",
    name: "Mario Kart 8 Delux",
    description: "Multiplayer GoKart",
    brand: "Mario Kart 8 Delux",
    price: 5000,
    image:
      "http://cdn.wccftech.com/wp-content/uploads/2017/01/NintendoSwitch_MarioKart8Deluxe_artwork_illustration_01.jpg",
  },
  {
    id: "2",
    name: "Grand Theft Auto V",
    description: "MMO, Violence and boring",
    brand: "Grand Theft Auto V",
    price: 2900,
    image:
      "http://cdn.wccftech.com/wp-content/uploads/2015/04/Grand-Theft-Auto-5-PC-Defenitive.jpg",
  },
  {
    id: "3",
    name: "Mine Craft",
    description: "MMO Survial",
    brand: "MineCraft",
    price: 2000,
    image:
      "https://www.mobipicker.com/wp-content/uploads/2016/01/minecraft-768x432.jpg",
  },
  {
    id: "4",
    name: "Jurassic World",
    description: "Dinosuar Goes RarW!",
    brand: "Jurassic World",
    price: 5900,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6478/6478483_sd.jpg",
  },
];

export const fetchProducts = () =>
  new Promise((resolve, reject) => {
    console.log("fetch the products");
    setTimeout(() => {
      try {
        resolve(allProducts);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });
