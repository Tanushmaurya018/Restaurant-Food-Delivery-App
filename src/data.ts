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
  slug?:string,
  name: string;
  desc?: string;
  img: string;
  theme?:{
    textcolor?:string;
    buttontextcolor?:string;
    bgcolor?:string;
  };
};
type MenuArray=Menu[]

export const Menus:MenuArray = [
  {
    id: 1,
    slug:"pizza",
    name: "Cheezy Pizzas",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/m3.png",
  },

  {
    id: 2,
    slug:"pasta",
    name: "Italian Pasta",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/m1.png",
  },
  {
    id: 3,
    slug:"burger",
    name: "Juicy Burgers",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/m2.png",
    theme:{
      textcolor:"text-black",
      
      buttontextcolor:"text-white",
      bgcolor:"bg-black",
    },
  },

];

export const Pizzas:Products=[


  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },
  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },

  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },

  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },
  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },

  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },

  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },

  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },
  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },

  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p1.png",
    price: 400,
  },
]
export const Pastas:Products=[


  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p5.png",
    price: 400,
  },
  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p5.png",
    price: 400,
  },

  {
    id: 1,
    name: "Corn Pizza",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p5.png",
    price: 400,
  },


]
export const Burgers:Products=[


  {
    id: 1,
    name: "Burger 1",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p11.png",
    price: 400,
  },
  {
    id: 1,
    name: "Burger 1",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p11.png",
    price: 400,
  },

  {
    id: 1,
    name: "Burger 1",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p11.png",
    price: 400,
  },

  {
    id: 1,
    name: "Burger 1",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p9.png",
    price: 400,
  },
  {
    id: 1,
    name: "Burger 1",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p10.png",
    price: 400,
  },

  {
    id: 1,
    name: "Burger 1",
    desc: "jbfdkjfbdkjbd",
    img: "/temporary/p12.png",
    price: 400,
  },

]