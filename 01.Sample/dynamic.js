

function showtime(){
    let date=new Date();
    let h=date.getDate();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let time=h+":"+m+":"+s;
    document.getElementById("dc").innerHTML=time;
    setTimeout(showtime,1000);
}
showtime();
