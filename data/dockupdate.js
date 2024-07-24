<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=">
  <title>MAC DOCK ver.2</title>
</head>
<body>
  
  <ul class="dock">
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/skype-128.png"></a></li>
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/blogger-128.png"></a></li>
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/yahoo-128.png"></a></li>
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/amazon-128.png"></a></li>
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/Facebook-icon-128.png"></a></li>
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/youtube-icon-128.png"></a></li>
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/Twitter-icon-128.png"></a></li>
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/rss-icon-128.png"></a></li>
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/pinterest-icon-128.png"></a></li>
      <li><a href="#"><img src="https://cdn0.iconfinder.com/data/icons/social-15/200/evernote-128.png"></a></li>
  </ul>
  
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script type="text/javascript">
    $(function(){
      var $li = $('.dock li');
      $li.hover(function(){
        $(this).prev().addClass('second');
        $(this).next().addClass('second');
      },function(){
        $(this).prev().removeClass('second');
        $(this).next().removeClass('second');
      })
    })
  </script>
  
  
</body>
</html>