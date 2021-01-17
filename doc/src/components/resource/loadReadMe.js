import marked from './marked';
const hljs = require('highlight.js');

export default (el, url, vm) => {
  $.get(url, function (data) {
    let content = $(marked(data));
    let container = $('.readme', el);
    container.append(content);
    // let menus = [];

    // $("#left").append(lis);
    // 完成代码高亮
    $('code', container).map(function () {
      $(this).addClass('javascript');
      // Prism.highlightElement(this);
      hljs.highlightBlock(this);
    });

    // let titles = $("h1,h2,h3,h4", container);
    // titles.each(function (i, n) {
    //   let _n = $(n);
    //   n.id = _n.text();
    //   let li = $("<li class='" + n.tagName + "'>" + _n.text() + "</li>");
    //   li.on("click", function (argument) {
    //     $(".selected", lis).removeClass("selected");
    //     li.addClass("selected");
    //     window.location.hash = "#doc_" + _n.text();
    //     $("html,body").animate({
    //       "scrollTop": (_n.position().top - 60)
    //     })
    //   });
    //   lis.append(li);
    // })
    vm.$parent.initLeftMenu(true);
  });
};
