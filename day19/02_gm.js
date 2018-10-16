var gm = require("gm");

gm('./1.jpg')
// .flip() // 翻转
// .magnify() // 扩大一倍尺寸
// .rotate('green', 45) // 旋转多少度,填充颜色
// .blur(7, 3) // 模糊
// .crop(300, 300, 150, 130) // 剪切图片
.edge(3)
// .drawCircle(500,500,200,200) // 圆心坐标x,y 偏移原点距离坐标x,y
.write('./2.jpg', function (err) {
  if (!err) console.log('crazytown has arrived');
})