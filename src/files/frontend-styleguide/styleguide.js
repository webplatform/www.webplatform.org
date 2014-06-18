$(document).ready(function(){
  var heading = [
    '<div style="padding:5px 10px;background:#E35689;color:#FFF;">',
      'This is a <strong>Styleguide</strong>, a static workspace to focus on styling ',
      'without requiring any backend. All links should be disabled, except ',
      'when a mouse-hover label says otherwise.',
    '</div>'
  ];
  $(heading.join('')).prependTo('body');
  $('body').find('a.allow-link').attr('title', 'Link is enabled');
  $('body').on('click', 'a:not(.allow-link)', function(event){
      event.preventDefault();
      alert("Remember, this is a static version. This link is inactive.");
  });
  $(window).roughDraft({
      'author' : 'lorem',
      'illustrator' : 'placehold'
  });
});