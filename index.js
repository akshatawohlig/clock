let a;
let date;
let hours;
let time;
let amorpm;
setInterval(() => {

    a=new Date();
    date=a.toLocaleDateString();
    hours=a.getHours();
    amorpm=hours>12?"PM":"AM";
    time=hours+":"+a.getMinutes()+":"+a.getSeconds()+ amorpm;
    amorpm=
    document.getElementById("myLable").innerHTML=time+" on "+ date;
    
},0);
document.getElementById("myBtn").onclick=function(){

    getLondonTime();
    setInterval(getLondonTime,1000)
    getNewyorkTime();
    setInterval(getNewyorkTime,1000)
    getSydneyTime();
    setInterval(getSydneyTime,1000)
    // getDubaiTime()
    // setInterval(getDubaiTime,1000)


}
     let getLondonTime=function(){
        document.getElementById("londonTime").innerHTML=new Date().toLocaleString("en-US",
        {timeZone:'Europe/london',timeStyle:"medium",hourCycle:"h24"});
    }
    let getNewyorkTime=function(){
        document.getElementById("NewYorkTime").innerHTML=new Date().toLocaleString("en-US",
        {timeZone:'America/New_York',timeStyle:"medium",hourCycle:"h24"});
    }
    let getSydneyTime=function(){
        document.getElementById("sydneyTime").innerHTML=new Date().toLocaleString("en-US",
        {timeZone:'Australia/sydney',timeStyle:"medium",hourCycle:"h24"});
    }
    // let getDubaiTime=function(){
    //     document.getElementById("DubaiTime").innerHTML=new Date().toLocaleString("en-US",
    //     {timeZone:'UAE',timeStyle:"medium",hourCycle:"h24"});
    // }
    
    
   
        // getLondonTime();
        // setInterval(getLondonTime,1000)
        // getNewyorkTime();
        // setInterval(getNewyorkTime,1000)
        // getSydneyTime
        // setInterval(getSydneyTime,1000)
    