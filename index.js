var huDirective={
  install:function (Vue) {
    Vue.directive('focus', {
      inserted: function (el) {
        el.addEventListener('click',function () {
          var newDiv=document.createElement("div");
          newDiv.style.display='block';
          newDiv.style.position = 'fixed';
          newDiv.style.top= '0';
          newDiv.style.left='0';
          newDiv.style.width ='100%';
          newDiv.style.height='100%';
          newDiv.style.background='rgba(0,0,0,.5)';
          newDiv.style.zIndex='10000';
          newDiv.style.overflow='auto';
          newDiv.addEventListener('click',function () {
            newDiv.style.display='none';
          })
          //console.log(document.getElementsByTagName('div'))
          document.getElementsByTagName('div')[0].appendChild(newDiv)
          var n=document.createElement("img");
          n.style.position = 'fixed';
          n.style.top= '50%';
          n.style.left='50%';
          n.style.transform='translate(-50%,-50%)'
          //n.style.width ='40%';
          n.style.height='50%';
          //n.style.maxHeight='50%';
          n.src=el.src;
          n.style.zIndex='10';
          n.style.opacity=1;
          newDiv.appendChild(n);
        })
      }
    })
  }
}
export default huDirective;
