"use strict"



$(document).ready(()=>{

    $("#jdom a").click( event =>
    {
        event.preventDefault
        const clickedLink = event.currentTarget

        $(clickedLink).prev().toggleClass("hide")

        if ($(clickedLink).prev().attr(`class`) != `hide`)
        {
            $(clickedLink).text(`Show Less`)
        }
    })


})