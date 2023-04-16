"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;

        // preload rollover image
        const rolloverIMG = new Image();
        rolloverIMG.src   = newURL;
        
        
        // set up event handlers for hovering an image
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });

        //display new img after 1 second
        setInterval(() => image.src = newURL, 1000)
        //display new img after 2 seconds
        setInterval(() => image.src = oldURL, 2000)
    }
});