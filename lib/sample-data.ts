import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Hania",
      email: "hania@gmail.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Mavia",
      email: "mavia@gmail.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],
  products: [
    {
      name: "Gul Ahmed Fine Cotton",
      slug: "Latest one of best fashion collection",
      category: "Men's Cotton",
      images: ["/assets/images/cotton5.webp", "/assets/images/cotton5-2"],
      price: "5500",
      brand: "Gul Ahmed",
      rating: "4.5",
      numReviews: 10,
      stock: 5,
      description: "A best cotton for full summer Season with elegemt colors",
      isFeatured: true,
      banner: "/assets/images/banner-1.jpeg",
    },
    {
      name: "Grace cotton of shining",
      slug: "Latest in colors and desgins",
      category: "Men's Cotton",
      images: ["/assets/images/cotton6.webp", "/assets/images/cotton6-2.webp"],
      price: "4500",
      brand: "Grace",
      rating: "4.2",
      numReviews: 8,
      stock: 10,
      description: "Fine cotton of all the way",
      isFeatured: true,
      banner: "/assets/images/banner-2.jpeg",
    },
    {
      name: "SHOWERPROOF SPORTSUIT TRACK PANTS",
      slug: "showerproof-sportsuit-track-pants",
      category: "Track Pants",
      images: ["/assets/images/cotton7.webp", "/assets/images/cotton7-2.webp"],

      price: "149.95",
      brand: "Nike",
      rating: "4.9",
      numReviews: 3,
      stock: 0,
      description:
        "Stay stylish, whatever the weather. These showerproof track pants are here to protect you from the rain. ",
    },
    {
      name: "MEN'S LACOSTE SPORT FRENCH CAPSULE TRACKSUIT PANTS",
      slug: "mens-lacoste-sport-french-capsule-tracksuit-pants",
      category: "Track Pants",
      images: ["/assets/images/cotton8.webp", "/assets/images/cotton8-2.webp"],
      price: "125.95",
      brand: "Lacoste",
      rating: "3.6",
      numReviews: 5,
      stock: 10,
      description:
        "A tricolour design brings a distinctive edge to these lightweight tracksuit pants made of diamond taffeta. ",
    },
  ],
};

export default sampleData;
