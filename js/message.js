function saveStorage(id){
    var data = document.getElementById(id).value;
    var time = new Date().getTime();//获得当前日期和时间的时间戳
    localStorage.setItem(time,data);
    alert("数据已保存。")
    loadStorage('msg');
}


function loadStorage(id){
    var result = '<table border="1">';
    for(var i = 0;i < localStorage.length;i++){ //localStorage.length所有保存在localStorage中的数据条数
        var key = localStorage.key(i); //得到localStorage中与相应索引号对应的数据
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        var datestr = date.toGMTString();
        result += '<tr><td>' + value + '</td><td>' + datestr + '</td></tr>';
    }
    result += '</table>';
    var target = document.getElementById(id);
    target.innerHTML = result;
}

function clearStorage(){
    localStorage.clear();
    alert("全部数据被清除。");
    loadStorage('msg');
}