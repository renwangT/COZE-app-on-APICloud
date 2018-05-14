apiready = function(){
    api.parseTapmode();
    var aBtn = $api.domAll('.btn');
    sort = $api.dom('.sort-list');
}
var sort = document.querySelector('.sort-list'),
    all = document.querySelector('.all'),
    allBtn = document.getElementById('all'),
    topBut = document.querySelector('.top-but'),
    up = document.querySelector('.up'),
    item = document.querySelector('.newest'),
    cont = document.getElementById('content'),
    find = document.querySelector('.find-num'),
    more = document.querySelector('.loading_moer');
    leftOn = false,
    rightOn = false;
!function (){
    var aLis = document.querySelectorAll('.sort-list li');
    var allList = all.querySelectorAll('li');
    var len = aLis.length;
    for(var i=0;i<len;i++){
        aLis[i].onclick = function(){
            for(var i=0;i<len;i++){
                aLis[i].classList.remove('active');
            }
            this.classList.add('active')
            sort.style.display = "none";
            leftOn = !leftOn;
            cont.innerHTML = this.innerHTML;
            up.style.display = "none";
            topBut.style.borderColor = "#ddd";
            item.style.display = 'none';
            more.innerHTML = '<div class="none"></div>';
        }
    }
    for(var i=0;i<allList.length;i++){
        allList[i].onclick = function (){
            fnAll()
            allBtn.innerHTML = this.lastElementChild.innerHTML;
            item.style.display = 'none';
            find.style.display = 'block';
            more.innerHTML = '<div class="none"></div>';
        }
    }

}()
//加载更多
function LoadMore(el){
    el.innerHTML = '<div class="none"></div>';
}
function fnSort(){
    // alert(sort)
    if(!leftOn){
        sort.style.display = "block";
        topBut.style.borderColor = "#23b8ff";
        up.style.display = "block";
    }else{
        sort.style.display = "none";
        topBut.style.borderColor = "#ddd";
        up.style.display = "none";
    }
    leftOn = !leftOn;
}
function fnAll(){
    if(!rightOn){
        all.style.display = "block";
    }else{
        all.style.display = "none";
    }
    rightOn = !rightOn;
}
