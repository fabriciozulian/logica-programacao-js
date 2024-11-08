function count (sheep){
    var x =0;
    for(var i=0 ; i > sheep.length ; i++ ){
        if(sheep[i] === true)
        {
            x++;
        }
    }
    return x;
}