let DarkModeButton = document.getElementById("dark_mode"); 

DarkModeButton.onclick = function() { 
let title = getElementById("title");
let firstPic = getElementById("pic_of_myself1");
let secondPic = getElementById("pic_of_myself2"); 
let descriptionTitle = getElementById("stuff_about_me");
let descriptionParagraph = getElementById("description_paragraph"); 
let fillerTitle = getElementById("i_love_sugary_sweet_stuff"); 
let sugaryParagraph = getElementById("filler_paragraph"); 
    
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
    }

    if (title.style.backgroundColor == "white") {
        title.style.backgroundColor = "black"; 
    }

    if (firstPic.style.backgroundColor == "white") {
        firstPic.style.backgroundColor = "black"; 
    }

    if (secondPic.style.backgroundColor == "white") {
        secondPic.style.backgroundColor = "black"; 
    }

    if (descriptionTitle.style.backgroundColor == "white") {
        descriptionTitle.style.backgroundColor = "black";
    }

    if (descriptionParagraph.style.backgroundColor == "white") {
        descriptionParagraph.style.backgroundColor = "black";
    }

    if (fillerTitle.style.backgroundColor == "white") {
        fillerTitle.style.backgroundColor = "black";
    }

    if (sugaryParagraph.style.backgroundColor == "white") {
        sugaryParagraph.style.backgroundColor = "black";
    }
    
    if (descriptionTitle.style.color == "mediumvioletred") {
        descriptionTitle.style.color = "magenta"; 
    }

    if (descriptionParagraph.style.color == "black") {
        descriptionParagraph.style.color = "red";
    }

    if (fillerTitle.style.color == "mediumvioletred") {
        fillerTitle.style.color = "magenta"; 
    }

    if (sugaryParagraph.style.color == "black") {
        sugaryParagraph.style.color = "red";
    }
}