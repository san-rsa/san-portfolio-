let num1 = Math.floor(Math.random()*6) + 1
let num_1 =Math.floor(Math.random()*2) + 1
 let num_2 = Math.floor(Math.random()*6) + 1
 let num_3=Math.floor(Math.random()*5) + 1
 let num_4 = Math.floor(Math.random()*12) + 1;
let num2 = Math.floor(Math.random()*9) + 1
let num3 = Math.floor(Math.random()*16) + 1

const GraphicsDesign = []
const uif = ["chair", "chat", "recipe", "restaurant"]
let ui = Math.floor(Math.random()*uif.length)

if (uif[ui] == "chair") {
  num1 = Math.floor(Math.random()*2) + 1
} else if (uif[ui] == "chat") {
  num1 = Math.floor(Math.random()*6) + 1
} else if (uif[ui] == "recipe") {
  num1 = Math.floor(Math.random()*5) + 1
} else if (uif[ui] == "restaurant") {
  num1 = Math.floor(Math.random()*12) + 1
}



const Type = [
    {
      title: "UI/UX RESEARCH AND DESIGN ",
      getImageSrc: () => require("../images/uiux/" + uif[ui] + "/" + num1 + ".png"),
      
    },
 
    {
      title: "GRAPHICS DESIGN",
      getImageSrc: () => require("../images/graphics/" + num3 + ".jpg"),
    },
    {
      title: "WEB DESIGN AND DEVELOPMENT ",
      getImageSrc: () => require("../images/web/" + num2 + ".png"),
    }
  ];


function graphics() {
  for (let i = 1; i <= 8; i++) {
    let img = {
  title: "BALLYMUN BIKE LIBRARY ",
  getImageSrc: () => require("../images/graphics/" + i +".jpg"),
}

GraphicsDesign.push(img)
};

for (let i = 9; i <= 10; i++) {
let img = 
{
  title: "POP UPREPAIR CAFE ",
  getImageSrc: () => require("../images/graphics/" + i +".jpg"),
}

GraphicsDesign.push(img)        
}

for (let i = 11; i <= 13; i++) {
let img = 
{
  title: "CHRISTMAS ",
  getImageSrc: () => require("../images/graphics/" + i +".jpg"),
}
GraphicsDesign.push(img)        
}

for (let i = 14; i <= 16; i++) {
  let img = 
  {
    title: "TUESDAY SEWING CLUB",
    getImageSrc: () => require("../images/graphics/" + i +".jpg"),
  }
  GraphicsDesign.push(img)        
  }


return GraphicsDesign
}
  

 
  const WebDeevelopment = [
    {
      title: "FYYUR WEB APP ",
      getImageSrc: () => require("../images/web/1.png"),
      link:"https://github.com/san-rsa/fyyur-app"
    },
    {
      title: "BEE SNAIL CART ",
      getImageSrc: () => require("../images/web/2.png"),
      link:"https://bee-cart.onrender.com/"
    },
    {
      title: "TINDOG ",
      getImageSrc: () => require("../images/web/3.png"),
      link:"https://tdog.onrender.com/"
    },
    {
      title: "FRONT-END CHALLENGE  ",
      getImageSrc: () => require("../images/web/5.png"),
      link:"https://github.com/san-rsa/nft-preview-card"
    },
    {
      title: "SIMON CHALLENGE  ",
      getImageSrc: () => require("../images/web/6.png"),
      link:"https://san-rsa.github.io/Simon-challenge-/"
    },
    {
      title: "DRUMKIT MINI ",
      getImageSrc: () => require("../images/web/7.png"),
      link:"https://san-rsa.github.io/Drum-kit-mini/"
    },
    {
      title: "DICEE GAME ",
      getImageSrc: () => require("../images/web/8.png"),
      link:"https://san-rsa.github.io/dice-game/"
    },
    {
    title: "TODO WEB APP ",
    getImageSrc: () => require("../images/web/9.png"),
    link:"https://san-todo.onrender.com/"
  },
  ];
  
  
  const Uiux = [
    {
      title: "SAN'S CHAIR ",
      getImageSrc: () => require("../images/uiux/" + "chair/" + num_1 + ".png"),
      link:"https://www.figma.com/proto/aSQcsKkQMKiDprEIqsxNhT/san-armchair?type=design&node-id=99-16&t=Dy4sMeLDnxfbmqyo-1&scaling=scale-down&page-id=98%3A2&starting-point-node-id=99%3A16&show-proto-sidebar=1&mode=design"
    },
    {
      title: "SAN'S CHAT ",
      getImageSrc: () => require("../images/uiux/" + "chat/" + num_2 + ".png"),
      link:"https://docs.google.com/presentation/d/1Xhwh7vT_e6phjmdIeVliUn2LQJFVUyVI/edit?usp=sharing&ouid=101178579710550755680&rtpof=true&sd=true"
    },
    {
      title: "SAN'S RECIPE ",
      getImageSrc: () => require("../images/uiux/" + "recipe/" + num_3 + ".png"),
      link:"https://docs.google.com/presentation/d/1A7EAMnj5kRVRpD-uBHGgNawEhtLJafC1/edit?usp=sharing&ouid=101178579710550755680&rtpof=true&sd=true"
    },
    {
      title: "SAN'S RESTAURANT ",
      getImageSrc: () => require("../images/uiux/" + "restaurant/" + num_4 + ".png"),
      link:"https://docs.google.com/presentation/d/1BY4bjeGikhPrGtfCrC6QrHsis48fKJ8W/edit?usp=sharing&ouid=101178579710550755680&rtpof=true&sd=true"
    },
  ];

  graphics()
export  {Uiux, WebDeevelopment, GraphicsDesign, Type}