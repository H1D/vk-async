                                                                                                             

###Requirements

jQuery 1.2.1+

###Usage
Put script tags to the &lt;head> of your page

```
<script type="text/javascript" src='http://yandex.st/jquery/1.6.2/jquery.min.js'></script>
<script type="text/javascript" src='/media/vk-async.min.js'></script>
```

Push all VK-related code to be executed after VK API initialization like that:

```
VK_async.ready(function () {
    VK.init({apiId: YOUR_API_ID, onlyWidgets: true});
    VK.Widgets.Comments("vk_comments");
});
```

###API
By default (_http://userapi.com/js/api/openapi.js?31_) is used to load VK API. You can change URL like that:

```
<script type="text/javascript">
   VK_async.setAPIScriptPath('http://userapi.com/js/api/openapi.js?32');
</script>
```











