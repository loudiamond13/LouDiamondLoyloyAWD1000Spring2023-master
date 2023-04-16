"use strict"

$(document).ready(() => {

    $("#faq_rollovers h2").each(function()
    {   
        $('.hidden').hide()
        //console.log(this)

        $(this).mouseenter(evt =>{
            evt.preventDefault()
            
            $(this).next().show()
           
            
        })

        $(this).mouseleave(evt =>{
            evt.preventDefault()
            
            $(this).next().hide()
            
            
        })
    })

    /*$("li h2").mouseover( event =>
    {
        event.preventDefault()
        const cursorH2 = event.currentTarget
        console.log(this)
        //$(".hidden", this).css("display","visible")
        $(">.hidden", this).css('display','block')
    })*/

   // $(".hidden").hide()
/*
    $("#faq_rollovers li").mouseenter( event =>
    {
        event.preventDefault()
        $(">.hidden",this).css({display: "block"})
       
    })*/

})