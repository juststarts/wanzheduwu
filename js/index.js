function setItemHeight() {
  let cWidth = document.body.clientWidth;
  let defaultHeight = 10;
  let defaultAddHeight = 0.9375;
  if(cWidth <= 1024){
    defaultHeight = 4.5
    defaultAddHeight = 0.4375
  }
  let element = document.getElementsByClassName('ctn-understand')[0].children[1].children
  for (let i = 0; i < element.length; i++) {
    element[i].children[1].style.height = (defaultHeight += defaultAddHeight) + 'rem'
    switch (i) {
      case 0:
      case 1:
      case 2:
        element[i].children[1].style.background = '#ff8e64'
        element[i].children[0].style.color = '#ff8e64'
        console.log(element[i].children[1].style.color)
        break
      case 3:
      case 4:
      case 5:
        element[i].children[1].style.background = '#18cb08'
        element[i].children[0].style.color = '#18cb08'
        break
      case 6:
      case 7:
      case 8:
        element[i].children[1].style.background = '#5eb6ff'
        element[i].children[0].style.color = '#5eb6ff'
        break
      case 9:
      case 10:
      case 11:
        element[i].children[1].style.background = '#998aff'
        element[i].children[0].style.color = '#998aff'
        break
      default:
    }
  }
}
setItemHeight();

 //加载页面时执行一次
 changeImg();
//监听浏览器宽度的改变
window.onresize = function(){
    changeImg();
};
function changeImg(){
  let cWidth = document.body.clientWidth;
  if(cWidth > 1024){
    document.getElementById("banner-img").src = "./images/banner.png";
  }else{
    document.documentElement.style.fontSize = document.documentElement.offsetWidth / 40 + 'px';
    document.getElementById("banner-img").src = "./images/m-banner.png";
  }


}