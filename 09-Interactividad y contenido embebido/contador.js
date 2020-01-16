var a = 0;
function contador(){
    a = a + 1;
    postMessage(a);
    setTimeout("timedCount()",500);
}

contador();