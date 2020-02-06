function showhide()

{
    var click=document.getElementById('dropcontent');
    if(click.style.display==="none")
    {
        click.style.display="block";
    }
   
else{
    click.style.display="none";

}
}
function hiddenshow()
{
    var btnclick=document.getElementById("content");
    if(btnclick.style.display==="none")
    {
    btnclick.style.display="block";
    }
    else{
        btnclick.style.display="none";
    }
}