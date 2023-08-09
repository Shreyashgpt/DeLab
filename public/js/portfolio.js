const sections = $(".section");
const sectBtns = $(".controls");
const sectBtn = $(".control");
const allSections = $(".main-content");

function pageTransitions() {
  // btn click active class
  sectBtn.click(function () {
    let currentBtn = $(".active-btn");
    currentBtn.removeClass("active-btn");
    $(this).addClass("active-btn");
  });

  allSections.click(function (e) {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from other btns.
      sectBtn.removeClass("active");

      // $(e.target).addClass("active");

      // hide other sections.
      sections.removeClass("active");

      const element = $("#" + id);
      element.addClass("active");
    }
  });

  // Toggle Theme

  const themeBtn = $(".theme-btn");
  themeBtn.click(() => {
    let ele = $("body");
    ele.toggleClass("light-mode");
  });
}

pageTransitions();
