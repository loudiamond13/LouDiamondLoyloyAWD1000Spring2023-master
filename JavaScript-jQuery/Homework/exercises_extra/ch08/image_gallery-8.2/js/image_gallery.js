"use strict";

//loading the images
const loadImgs = () =>
{
    //getting the image attributes for all links inside the UL
    $("#image_list a").each(function() {
     
        //taking each attribute. 
        const imgPath   = $(this).attr('href')
        const imgTitle  = $(this).attr('title')

       // const loadedImg=
       //   storing loaded img to new image elemnt
        const loadedImg = new Image()
        loadedImg.src   = imgPath   
        loadedImg.title = imgTitle
       
       
        //click evt listener
    $(this).click(evt =>{
        //prevent default
            evt.preventDefault()
            //const clickedImg    = evt.currentTarget
          // const clickedImgSrc = clickedImg.getAttribute('href')

          //replace the text(h2 el) and image in html 
          $("#caption").text(loadedImg.title)
           $("#image").attr('src', loadedImg.src)
          
        
        
        //console.log(imgPath)
       //   console.log(imgTitle)
       // console.log(loadedImg)
        //console.log(clickedImgSrc)  
    })
    })




}


$(document).ready(()=>{
    // calling the loading func when doc ready
    loadImgs()

    $("a")[0].focus()//focus to the first link when loaded
})
   

























/*

    $("#image_list a").click(evt =>{
        evt.preventDefault()
        viewImgs(evt)
    })
    //console.log(gallery_list.attr('href'))
})
   // let asd=[]

   /* let asd = $("ul a")//.attr('href'))
    let aaa= []
    aaa = asd.attr('href')
    console.log(aaa)*/
   //let imageURL = []
   //let imageList 
 
      // const imageHref  = $(this).attr('href')
       // imageTitle = $(this).attr('title')
      // console.log(imageHref)
      // console.log(imageTitle)
        
       //preload images
      // const clickedImg     = new Image()
       // clickedImg.src = imageHref
       // clickedImg.title = imageTitle
       // 
/*
        $(this).click(evt =>{
            evt.preventDefault()
            const triggerImg = evt.currentTarget


            if(triggerImg.title == clickedImg.title){
                $("#caption").text=(clickedImg.title)
                $("#image").src = clickedImg.src
            }

            
            evt.preventDefault()
           // console.log(triggerImg+triggerImg+clickedImg)
        })
       */
        
 /*
   
    $("#image_list a").click(evt =>{
        evt.preventDefault()
        const triggerImg = evt.currentTarget
      //  console.log(triggerImg.title)
        
       

        const imageLists = $("#image_list a").each(function(){
        })
        console.log(imageLists.attr('href'))
    })
   
   */

/*
    const imageLinks = $("ul a")
    let imageUrl=[]
    imageUrl = imageLinks.attr("href")
    console.log(imageUrl[0])
    //preload images
   // imageLinks.forEach( link => {
       // const
  //  imageLinks.on('click', evts)

  const gallery = $("#image_list a")

    const gallery_list = $("#image_list").each((a) => {
        const title = $(this).pathname
        a = $(this).attr('href')
        console.log(title)
    })*//*
**/////
