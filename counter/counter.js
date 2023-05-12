let count=0;
// const dec=document.getElementById("dec");
// const inc=document.getElementById("dec");
// const reset=document.getElementById("dec");
const val=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
btns.forEach(function(btn)
{
    btn.addEventListener("click",function(e)
    {
        const style = e.currentTarget.classList;
        if(style.contains("dec"))
        {
            count--;
        }
        else if(style.contains("inc"))
        {
            count++;
        }
        else if(style.contains("reset"))
        {
            count= 0;
        }
        if(count>0)
        {
            val.style.color="green";
        }
        else if(count<0)
        {
            val.style.color="red";
        }
        else{
            val.style.color="black";
        }
        val.textContent= count;
    });
   
});