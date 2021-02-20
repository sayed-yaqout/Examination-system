function getCookies(keyName){
    var cookies =document.cookie;
    var outerArray =cookies.split("; ");
    var arr=[];
    var j =0;
    for(var i=0;i<outerArray.length;i++,j=j+2){
        arr[j]=outerArray[i].split("=")[0] ;
        arr[j+1]=outerArray[i].split("=")[1] ;
    }
    for(var i=0;i<arr.length;i=i+2){
        if(keyName===arr[i]){
            return arr[i+1];
        }
    }
    return "not found"; 
}


function setCookies(keyName,value,expDate){
    var d = new Date();
    d.setTime(d.getTime() + (expDate * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = keyName + "=" + value + ";" + expires + ";path=/";
}


function allCookieList(){
    var cookies= document.cookie;
    return cookies;
}

function hasCookie(keyName){
    var cookies = document.cookie;
    var outerArray =cookies.split("; ");
    var arr=[];
    var j =0;
    for(var i=0;i<outerArray.length;i++,j=j+2){
        arr[j]=outerArray[i].split("=")[0] ;
        arr[j+1]=outerArray[i].split("=")[1] ;
    }
    for(var i=0;i<arr.length;i=i+2){
        if(keyName===arr[i]){
            return true;
        }
    }

    return false;
}