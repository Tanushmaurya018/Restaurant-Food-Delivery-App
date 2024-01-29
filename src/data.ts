export type Product = {
  id?: number;
  name: string;
  desc?: string;
  img: string;
  price: number;
};

type Products = Product[];

export const FeaturedProduct: Products = [
  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },
  {
    id: 2,
    name: "Pasta",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 200,
  },
  {
    id: 2,
    name: "Pasta",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 200,
  },

  {
    id: 2,
    name: "Pasta",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 200,
  },

  {
    id: 2,
    name: "Pasta",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 200,
  },

  {
    id: 2,
    name: "Pasta",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 200,
  },
  {
    id: 2,
    name: "Pasta",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 200,
  },
  
];
export type Menu = {
  id?: number;
  name: string;
  desc?: string;
  img: string;
  theme?:{
    textcolor?:string;
    buttoncolor?:string;
    bgcolor?:string;
  };
};
type MenuArray=Menu[]
export const Menus:MenuArray = [
  {
    id: 1,
    name: "Cheezy Pizzas",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/m3.png",
  },
  {
    id: 2,
    name: "Italian Pasta",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/m1.png",
  },
  {
    id: 3,
    name: "Juicy Burgers",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/m2.png",
    theme:{
      textcolor:"text-black",
      buttoncolor:"bg-black",
      bgcolor:"bg-white",
    },
  },

];
