# JQuery动画总结 #

从基本动画方法`hide()`和`show()`和`fadeout()`，然后到`slideUp()`和`slideDown()`,再到自定义动画方法`animate()`,

最后到交互动画方法`toggel()`，`slideToggle()`,`fadeTo()`和`fadeToggle()`。

# 1.改变样式属性 #

| 方法名 | 说明                     | 
| ---------------|:------------------------:|
| fadeIn()和fadeOut() |      只改变不透明度     |
|   hide()和show() | 同时修改多个样式属性即高度，宽度和不透明度   |
|slideUp()和slideDown()|只改变高度|
|fadeTo()|只改变不透明度|
|toggle()|只用来代替hide()方法和show()方法，所以会同时修改多个样式属性即高度，宽度和不透明度|
|slideToggle()|用来代替slideUp()方法和slideDown()方法，所以只能改变高度|
|fadeToggle()|用来代替fadeIn()方法和fadeOut()方法，所以只能改变不透明度|
|animate()|属于自定义动画的方法，以上各种动画方法实质内部都调用了animate()方法。此外，直接使用animate()方法还能自定义其他样式属性，例如："left","marginLeft","scrollTop"等 |  


## 2.动画队列 ##

**1. 一组元素上的动画效果**

 a: 当在一个animated()方法中应用多个属性时，动画是同时发生的。

 b: 当以链式的写法应用动画方法时，动画是按照顺序发生的(除非queue选项值为false).

**2.多组元素上的动画效果**

 a:默认情况下，动画都是同时发生的.
 
 b：当以回调的形式应用动画方式时(包括动画的回调函数和queue()方法的回调函数),动画是按照回调顺序发生的。





 

