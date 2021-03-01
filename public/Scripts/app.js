// File name: app.ejs
// Name: Krunal Parmar
// Student Id: 301146813
// Date: 06/02/2021
// ExpressPortfolio
// Copyright © 2021 Centennial College. All rights reserved.
// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/business-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
