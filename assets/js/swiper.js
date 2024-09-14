// import Swiper bundle with all modules installed
// 匯入全部模組
import Swiper from "swiper/bundle";

// test

const mySwiper2 = new Swiper(".mySwiper2", {
  // 循環播放
  loop: true,
  // 左右箭頭
  navigation: {
    prevEl: ".mySwiper2-button-prev",
    nextEl: ".mySwiper2-button-next",
  },
  slidesPerView: 1,
  centeredSlides: true, //active slide 置中

  breakpoints: {
    768: {
      slidesPerView: 1.2, // slide 預覽
      spaceBetween: 40, // slide 間距
    },
  },
  // 自動撥放
  autoplay: {
    delay: 2000,
  },
});
// 參考文章:https://blog.csdn.net/qq_42855675/article/details/112850049

// 首頁

const featureSwiper = new Swiper(".featureSwiper", {
  slidesPerView: 2, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 16, // 每個內容之間的間隔為 24px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: true, // 循環播放

  // 分頁展示方式
  pagination: {
    el: ".feature-Swiperr-pagination",
    type: "fraction", // 分數
  },

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".feature-Swiper-button-next",
    prevEl: ".feature-Swiper-button-prev",
  },

  //RWD
  breakpoints: {
    992: {
      slidesPerView: 4, // 一次呈現幾張
      slidesPerGroup: 4, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 48px
      loop: false,
    },
  },
});

const searchSwiper = new Swiper(".searchSwiper", {
  slidesPerView: 3, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 0, // 每個內容之間的間隔為 24px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: true, // 循環播放
  freeMode: true,

  // 分頁展示方式
  pagination: {
    el: ".searchSwiper-pagination",
    type: "fraction", // 分數
  },

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".searchSwiper-button-next",
    prevEl: ".searchSwiper-button-prev",
  },

  //RWD
  breakpoints: {
    576: {
      slidesPerView: 5, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 0, // 每個內容之間的間隔為 48px
      loop: true, // 循環播放
      freeMode: true,
    },
    768: {
      slidesPerView: 6, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 0, // 每個內容之間的間隔為 48px
      loop: true, // 循環播放
      freeMode: true,
    },
    992: {
      slidesPerView: 8, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 0, // 每個內容之間的間隔為 48px
      loop: true, // 循環播放
      freeMode: true,
    },
    1200: {
      slidesPerView: 9, // 一次呈現幾張
      slidesPerGroup: 9, // 一個群組內有幾張投影片
      spaceBetween: 0, // 每個內容之間的間隔為 48px
      loop: false,
    },
  },
});

const indexSwiper1 = new Swiper(".indexSwiper1", {
  slidesPerView: 1, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 16, // 每個內容之間的間隔為 24px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: true, // 循環播放

  // 分頁展示方式
  pagination: {
    el: ".indexSwiper1-pagination",
    type: "fraction", // 分數
  },

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".indexSwiper1-button-next",
    prevEl: ".indexSwiper1-button-prev",
  },

  //RWD
  breakpoints: {
    992: {
      slidesPerView: 3, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 48px
      loop: true,
    },
  },
});

const indexSwiper2 = new Swiper(".indexSwiper2", {
  slidesPerView: 1, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 16, // 每個內容之間的間隔為 24px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: true, // 循環播放

  // 分頁展示方式
  pagination: {
    el: ".indexSwiper2-pagination",
    type: "fraction", // 分數
  },

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".indexSwiper2-button-next",
    prevEl: ".indexSwiper2-button-prev",
  },

  //RWD
  breakpoints: {
    992: {
      slidesPerView: 3, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 48px
      loop: true,
    },
  },
});

const indexSwiper3 = new Swiper(".indexSwiper3", {
  slidesPerView: 1, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 16, // 每個內容之間的間隔為 24px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: true, // 循環播放

  // 分頁展示方式
  pagination: {
    el: ".indexSwiper3-pagination",
    type: "fraction", // 分數
  },

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".indexSwiper3-button-next",
    prevEl: ".indexSwiper3-button-prev",
  },

  //RWD
  breakpoints: {
    992: {
      slidesPerView: 3, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 48px
      loop: true,
    },
  },
});


// product-info.html
// 產品規格 section-1
const productImageSwiper = new Swiper(".productImageSwiper", {
  spaceBetween: 4,
  slidesPerView: 4,
  //RWD
  breakpoints: {
    992: {
      spaceBetween: 8, // 每個內容之間的間隔為 8px
    },
  },
});
// 上方所展示的大張圖片的swiper
const productImageSwiper2 = new Swiper(".productImageSwiper2", {
  spaceBetween: 4,
  thumbs: {
    swiper: productImageSwiper,
  },
});


// 猜你喜歡
const swiper = new Swiper(".likeSwiper", {
  spaceBetween: 16,
  slidesPerView: 1.1,
  loop: true, // 循環播放

  navigation: {
    nextEl: ".like-swiper-button-next",
    prevEl: ".like-swiper-button-prev",
  },

  //RWD
  breakpoints: {
    992: {
      spaceBetween: 20, // 每個內容之間的間隔為 8px
      slidesPerView: 2.1,
    },

    1200: {
      spaceBetween: 24, // 每個內容之間的間隔為 8px
      slidesPerView: 3,
    },
  },
});


const planselectSwiper = new Swiper(".planselectSwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".planselectSwiper-button-next",
    prevEl: ".planselectSwiper-button-prev",
  },

});

const planselectSwiper2 = new Swiper(".planselectSwiper2", {
  navigation: {
    nextEl: ".planselectSwiper2-button-next",
    prevEl: ".planselectSwiper2-button-prev",
  },
  thumbs: {
    swiper: planselectSwiper,
  },
});

const planselect2Swiper = new Swiper(".planselect2Swiper", {
  slidesPerView: 7,
  navigation: {
    nextEl: ".planselect2Swiper-button-next",
    prevEl: ".planselect2Swiper-button-prev",
  },
  //RWD
});

const planselect2Swiper2 = new Swiper(".planselect2Swiper2", {
  navigation: {
    nextEl: ".planselect2Swiper2-button-next",
    prevEl: ".planselect2Swiper2-button-prev",
  },
  thumbs: {
    swiper: planselect2Swiper,
  },
});

//planselect4第一塊
const planselect4Swiper = new Swiper(".planselect4Swiper", {
  spaceBetween: 4,
  slidesPerView: 4,
  //RWD
  breakpoints: {
    992: {
      spaceBetween: 8, // 每個內容之間的間隔為 8px
    },
  },
});
// 上方所展示的大張圖片的swiper
const planselect4Swiper2 = new Swiper(".planselect4Swiper2", {
  spaceBetween: 4,
  thumbs: {
    swiper: planselect4Swiper,
  },
});

//planselect4第二塊
const planselect4_2Swiper = new Swiper(".planselect4_2Swiper", {
  spaceBetween: 4,
  slidesPerView: 4,
  //RWD
  breakpoints: {
    992: {
      spaceBetween: 8, // 每個內容之間的間隔為 8px
    },
  },
});
// 上方所展示的大張圖片的swiper
const planselect4_2Swiper2 = new Swiper(".planselect4_2Swiper2", {
  spaceBetween: 4,
  autoHeight:true,
  thumbs: {
    swiper: planselect4_2Swiper,
  },
});

//planselect4第三塊
const planselect4_3Swiper = new Swiper(".planselect4_3Swiper", {
  spaceBetween: 4,
  slidesPerView: 4,
  //RWD
  breakpoints: {
    992: {
      spaceBetween: 8, // 每個內容之間的間隔為 8px
    },
  },
});
// 上方所展示的大張圖片的swiper
const planselect4_3Swiper2 = new Swiper(".planselect4_3Swiper2", {
  spaceBetween: 4,
  thumbs: {
    swiper: planselect4_3Swiper,
  },
});



//planselect最外層的Swiper
var planselect5Swiper = new Swiper(".planselect5Swiper", {
  navigation: {
    nextEl: ".planselect5Swiper-button-next",
    prevEl: ".planselect5Swiper-button-prev",
  },
});



//992px以下的planselect
const planselect6Swiper2 = new Swiper(".planselect6Swiper2", {
  slidesPerView: 1, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 16, // 每個內容之間的間隔為 24px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: true, // 循環播放

  pagination: {
    el: ".swiper-pagination",
  },

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".planselect6Swiper2-button-next",
    prevEl: ".planselect6Swiper2-button-prev",
  },

  //RWD
  breakpoints: {
    992: {
      slidesPerView: 3, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 24, // 每個內容之間的間隔為 48px
      loop: true,
    },
  },
});