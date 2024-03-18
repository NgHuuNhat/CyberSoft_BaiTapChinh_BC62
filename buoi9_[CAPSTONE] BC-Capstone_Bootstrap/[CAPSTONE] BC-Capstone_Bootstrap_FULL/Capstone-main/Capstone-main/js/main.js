// section7

//click li
function changeLi(clickedLi, contentId) {

  // loại bỏ lớp active từ tất cả các Li
  var allLi = document.querySelectorAll('.abc');
  allLi.forEach(function(li) {
      li.classList.remove('active-li');
  });
  //thêm lớp active cho Li được click
  clickedLi.classList.add('active-li');

  // Ẩn tất cả các nội dung
  var allContents = document.querySelectorAll('.products-content');
  allContents.forEach(function(content) {
      content.classList.remove('active-content');
  });
  // Hiển thị nội dung tương ứng với tab được click
  document.getElementById(contentId).classList.add('active-content');

}

//click h2
function changeH2(clickH2, contentId) {
  // Kiểm tra xem tab hiện tại có đang ở trạng thái "active" không
  var isActive = clickH2.classList.contains('active-h2');

  // Loại bỏ tất cả các lớp active-h2 từ các H2
  var allH2 = document.querySelectorAll('.abc1');
  allH2.forEach(function(h2) {
      h2.classList.remove('active-h2');
  });

  // Loại bỏ tất cả các lớp active-content từ tất cả các nội dung
  var allContents = document.querySelectorAll('.products-content');
  allContents.forEach(function(content) {
      content.classList.remove('active-content');
      content.classList.remove('resp-accordion-closed');
  });

  // Nếu tab không đang ở trạng thái "active", thêm lớp active-h2 và hiển thị nội dung
  if (!isActive) {
      clickH2.classList.add('active-h2');
      document.getElementById(contentId).classList.add('active-content');
  }
}



// section8
$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
      items: 2, // Số lượng hiển thị
      loop: true, // Lặp vô hạn
      margin: 10, // Khoảng cách giữa các phần tử
      autoplay: false, // Tự động chuyển động
      autoplayTimeout: 2000, // Thời gian chờ giữa các lần chuyển động (miliseconds)
      autoplayHoverPause: true,
      // rtl:true, //Hiển thị nội dung từ phải sang trái
      // nav:true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 2
          }
      }
  });

});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("movetop").style.display = "block";
  } else {
      document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}