function switchItem(index){
    api.execScript({
        name: 'root',
        script: 'switchItem('+index+');'
    });

}
