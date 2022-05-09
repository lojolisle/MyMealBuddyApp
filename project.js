window.onload = function() {
  
    // Variables or constants used
    const firstButton = document.querySelector(".first-button"); 
    const welcomeContainer = document.querySelector(".welcome-container");
    const optionContainer = document.querySelector(".option-container");
    const choiceContainer = document.querySelector(".choice-container");
    const mealContainer = document.querySelector(".meal-container");
    const mealImgFleContainer = document.querySelector(".meal-flex-container > img");
    const selectedMenuMsg = document.querySelector(".selected-menu-msg");
    const selectedOptionMsg = document.querySelector(".selected-option-msg");
    const title = document.querySelector(".title");
    const mealName = document.querySelector(".meal-name");

    const imgObj = {
        breakfastVeg: "image/bfveg.jpg",
        breakfastNonVeg : "image/boiledEggs.jpg",
        breakfastCombo : "image/bfcombo.jpg",
        lunchVeg: "image/lunchveg.jpg",
        lunchNonVeg : "image/lunchnonveg.jpg",
        lunchCombo : "image/chicken-korma.jpg",
        dinnerVeg: "image/dinnerveg.jpg",
        dinnerNonVeg : "image/dinnernonveg.jpg",
        dinnerCombo : "image/dinnercombo.jpg"
    }
    const receipeTitleObj  = {
        breakfastVegTitle: "Apple Cinnamon Pancake with Fruits",
        breakfastNonVegTitle : "Breakfast Bread Bowl",
        breakfastComboTitle : "Avacado, Chevre and Bacon Omelete",
        lunchVegTitle: "Pasta Salad",
        lunchNonVegTitle : "Lamb Chops with Mushrooms",
        lunchComboTitle : "Steak, Egg and Brocolli with Rice",
        dinnerVegTitle: "Green Salad",
        dinnerNonVegTitle : "Pepperoni Pizza",
        dinnerComboTitle : "Hot Chicken Wings with Pickles"
    }

    // Events
    resetOptionButtons();
    firstButton.onclick = openOptionContainer;
  
    //functions
    // function to container on start
    function openOptionContainer(e) {
        e.preventDefault();
        welcomeContainer.style.display = "none";
        optionContainer.style.display = "block";
        title.innerHTML = "Decide hassle free on what to eat just by few clicks";
        scrollTop(1000);
        addButtonEventListeners(); 
    }

    // function that adds the three buttons and also add click event listener
    function addButtonEventListeners() {
        var buttons = document.getElementsByTagName("button");
        for (i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                choiceContainer.style.display = "block";
                selectedMenuMsg.innerHTML = "What type of food you prefer today for  "+ this.innerHTML;
                mealContainer.style.display = "none";
                resetOptionButtons();
                getSelectedOption(this.innerHTML);
                scrollTop(1300);
            });
        }  
    }

    // function that will open up the radio button options 
    // and based on selection displays appropriate meal iamge
    function getSelectedOption(selection) {
        var foodChoices = document.radioForm.foodChoice;
        for (var i = 0; i < foodChoices.length; i++) {
            foodChoices[i].addEventListener('change', function() {     
                selectedOptionMsg.innerHTML = "Enjoy your "+ this.value.charAt(0).toUpperCase() + this.value.slice(1) + " "+ selection + "!!";
                mealContainer.style.display = "block";
                console.log(this.value)
                switch(selection) {
                    case "Breakfast":
                        if (this.value == "nonvegetarian") {
                            mealImgFleContainer.src = imgObj.breakfastNonVeg;
                            mealName.innerHTML = receipeTitleObj.breakfastNonVegTitle
                        } else if(this.value == "vegetarian") {
                            mealImgFleContainer.src = imgObj.breakfastVeg;
                            mealName.innerHTML = receipeTitleObj.breakfastVegTitle;
                        } else {
                            mealImgFleContainer.src = imgObj.breakfastCombo;
                            mealName.innerHTML = receipeTitleObj.breakfastComboTitle;
                        }
                    break;
                    case "Lunch":
                        if (this.value == "nonvegetarian") {
                            mealImgFleContainer.src = imgObj.lunchNonVeg;
                            mealName.innerHTML = receipeTitleObj.lunchNonVegTitle;
                        }else if(this.value == "vegetarian") {
                            mealImgFleContainer.src = imgObj.lunchVeg;
                            mealName.innerHTML = receipeTitleObj.lunchVegTitle;
                        } else {
                            mealImgFleContainer.src = imgObj.lunchCombo;
                            mealName.innerHTML = receipeTitleObj.lunchComboTitle;
                        }
                    break;
                    case "Dinner":
                        if (this.value == "nonvegetarian") {
                            mealImgFleContainer.src = imgObj.dinnerNonVeg;
                            mealName.innerHTML = receipeTitleObj.dinnerNonVegTitle;
                        }else if(this.value == "vegetarian") {
                            mealImgFleContainer.src = imgObj.dinnerVeg;
                            mealName.innerHTML = receipeTitleObj.dinnerVegTitle;
                        } else {
                            mealImgFleContainer.src = imgObj.dinnerCombo;
                            mealName.innerHTML = receipeTitleObj.dinnerComboTitle;
                        }
                    break;
                    default :

                }
                scrollTop(1400);
            });
        }
    }

    // used to reset any selection
    function resetOptionButtons() {
        var foodChoices = document.radioForm.foodChoice;
        for (var i = 0; i < foodChoices.length; i++) {
            foodChoices[i].checked = false;
        }
    }

    // used to scroll page to view port
    function scrollTop(topValue) {
        window.scrollTo({
            top: topValue,           
            behavior: 'smooth',
        })
    }
}
