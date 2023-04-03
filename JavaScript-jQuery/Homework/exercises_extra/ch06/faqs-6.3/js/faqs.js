"use strict";
const $ = selector => document.querySelector(selector);

// the event handler for the click event of each h2 element
const toggle = evt => {
	
	const faqs = document.querySelectorAll("h2");
	//const divs = faqs.nextElementSibling
	const h2Element = evt.currentTarget;               // get the clicked h2
	const divElement = h2Element.nextElementSibling;   // get h2's sibling div
	
	
	
	divElement.classList.toggle("open")
	h2Element.classList.toggle("minus")

	for(let faq of faqs)
	{	

		if (faq !== h2Element)// if it is not the clicked faq
								// remove attributes/hide
		{
			faq.classList.remove("minus")
			faq.nextElementSibling.classList.remove("open")

		}
					//divElement.classList.remove("open")
		//else{
		//	faq.classList.replace("minus")
		//}

		//div.addEventListener("click", function(){
			//h2Element.classList.toggle("minus")
			//divElement.classList.toggle("open")
		//})
		
		//console.log(faq)
		//faq.classList.toggle(".minus")
	}
	/*h2Element.classList.toggle("minus");
	divElement.classList.toggle("open");*/
	
	//alert(faq[0].textContent)
	

	evt.preventDefault();           // cancel default action of h2's child <a>
	
	
};

document.addEventListener("DOMContentLoaded", () => {
	// get the h2 tags
	const h2Elements = document.querySelectorAll("#faqs h2");
	//alert(h2Elements[2].textContent)
	// attach event handler for each h2 tag
	for (let h2Element of h2Elements) {
		h2Element.addEventListener("click", toggle);
		
	}
	
	// set focus on first h2 tag's <a> tag
	//h2Elements[0].firstChild.focus();
});
