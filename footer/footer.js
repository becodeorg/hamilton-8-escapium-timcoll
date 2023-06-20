let navigationItems =document.querySelectorAll('.navigation-items');
for (items of navigationItems)
{
    items.onmouseover = function(e){
        e.currentTarget.style.color="white";
        e.currentTarget.style.transition="all .2s";
        e.currentTarget.previousSibling.style.visibility='visible';
        e.currentTarget.previousSibling.style.transition='all .2s';
    }
    items.onmouseleave = function(e){
        e.currentTarget.style.color="gray";
        e.currentTarget.previousSibling.style.visibility='hidden';
    
    }


}