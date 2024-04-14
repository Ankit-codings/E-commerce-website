// import { todayDeal } from "./todayDeal.js";

// Function to scroll back to top of page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  
  // Show/hide the back to top button based on scroll position
  window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  //-------------today deal--------------
  
  // console.log("------Today Deals-------");
  
  // let todayDealProductListEl = document.querySelector(
  //   ".todays_deals_product_list"
  // );
  // console.log(todayDealProductListEl);
  
  // let todayDealProductHTML = "";
  
  // let todayDeallength = todayDeal.length;
  
  // for (let i = 0; i < todayDeallength; i++) {
  //   // console.log(todayDeal[i]);
  
  //   todayDealProductHTML += `
  //     <div class="todays_deals_product_item">
  //       <div class="todayDeals_product_image">
  //       <img src=${todayDeal[i].img} />
  //       </div>
  //       <div class="discount_Container">
  //         <a href="#">Up tp ${todayDeal[i].discount} off</a>
  //         <a href="#">${todayDeal[i].DealofDay}</a>
  //       </div>
  //       <p>${todayDeal[i].desc}</p>
  //     </div>
  //   `;
  // }
  
  // todayDealProductListEl.innerHTML = todayDealProductHTML;
  // // console.log(todayDealProductHTML);
  
  // let today_deal_btn_prevEl = document.getElementById("today_deal_btn_prev");
  // let today_deal_btn_nextEl = document.getElementById("today_deal_btn_next");
  // let today_deals_product_itemEl = document.querySelectorAll(
  //   ".today_deals_product_item"
  // );
  
  // let startProduct = 0;
  
  // today_deal_btn_prevEl.addEventListener("click", () => {
  //   // alert("prev");
  //   console.log("taped");
  
  //   if (startProduct < 0) {
  //     startProduct += 500;
  //   }
  //   today_deals_product_itemEl.forEach((el) => {
  //     el.style.transform = `translateX(${startProduct}%)`;
  //   });
  // });
  
  // today_deal_btn_nextEl.addEventListener("click", () => {
  //   // alert("next");
  //   console.log("taped");
  
  //   if (startProduct > -2000) {
  //     startProduct -= 500;
  //   }
  //   today_deals_product_itemEl.forEach((el) => {
  //     el.style.transform = `translateX(${startProduct}%)`;
  //   });
  // });