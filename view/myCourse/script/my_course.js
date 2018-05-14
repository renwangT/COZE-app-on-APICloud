function goHome(){
    api.execScript({
        name: 'root',
        script: 'switchItem(0);'
    });
}
