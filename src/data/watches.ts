import w1 from "@/assets/w1.jpg";
import w2 from "@/assets/w2.jpg";
import w3 from "@/assets/w3.jpg";
import w4 from "@/assets/w4.jpg";
import w5 from "@/assets/w5.jpg";
import w6 from "@/assets/w6.jpg";
import w7 from "@/assets/w7.jpg";
import w8 from "@/assets/w8.jpg";
import w9 from "@/assets/w9.jpg";
import w10 from "@/assets/w10.jpg";
import w11 from "@/assets/w11.jpg";
import w12 from "@/assets/w12.jpg";

export type Watch = {
  name: string;
  price: number;
  category: string;
  image: string;
};

export const watches: Watch[] = [
  { name: "Classic Steel 40", price: 6500, category: "Men's", image: w1 },
  { name: "Noir Leather", price: 4800, category: "Formal", image: w2 },
  { name: "Mesh Slim Silver", price: 5200, category: "Women's", image: w3 },
  { name: "Pulse Square Smart", price: 9500, category: "Smart", image: w4 },
  { name: "Canvas Field", price: 3200, category: "Casual", image: w5 },
  { name: "Heritage Dress", price: 7400, category: "Formal", image: w6 },
  { name: "Chrono Blue", price: 9800, category: "Men's", image: w7 },
  { name: "Rose Petite", price: 5900, category: "Women's", image: w8 },
  { name: "Orbit Round Smart", price: 8700, category: "Smart", image: w9 },
  { name: "Everyday White", price: 2400, category: "Casual", image: w10 },
  { name: "Midnight Steel", price: 8200, category: "Men's", image: w11 },
  { name: "Silver Mini", price: 3900, category: "Women's", image: w12 },
];

export const categories = [
  "Men's Watches",
  "Women's Watches",
  "Smart Watches",
  "Casual Watches",
  "Formal Watches",
];
