window.onload= function () {


        var scroll=document.getElementById("scroll");//滑动整体页面
        var panel=document.getElementsByClassName("panel");//页签，ie不兼容，换成id会成功

        var windowHeight=window.innerHeight;
        scroll.style.height=windowHeight+"px";//获取窗口高度作为滑动窗口高度
        for(var i=0;i<panel.length;i++){
            panel[i].style.height=windowHeight+"px";
        }
        /*下面是关于鼠标滚动*/
        var inputC=document.getElementsByTagName("input");
        var wheel= function (event) {
            var delta=0;
            if(!event)//for ie
                event=window.event;
            if(event.wheelDelta){//ie,opera
                delta=event.wheelDelta/120;
            }else if(event.detail){
                delta=-event.detail/3;
            }//五大浏览器（IE、Opera、 Safari、Firefox、Chrome）中Firefox 使用detail，其余四类使用wheelDelta
            if(delta){
                handle(delta,inputC);
            }
            if(event.preventDefault)
                event.preventDefault();
            event.returnValue=false;
        };
        if(window.addEventListener){//for ff
            window.addEventListener('DOMMouseScroll',wheel,false);//将wheel函数监听到ff浏览器上
        }
        window.onmousewheel=wheel;//触发鼠标滚轮事件
    };
    function handle(delta,arr) {
        var num;
        for(var i=0;i<arr.length;i++){//得到当前checked元素的下标
            if(arr[i].checked){
                num=i;
            }
        }
        if(delta>0 && num>0){//向上滚动
            num--;
            arr[num].checked=true;
        }else if(delta<0 && num<arr.length-1){//向下滚动
            num++;
            arr[num].checked=true;
        }
    }