const secondStageButtonsFood = document.querySelectorAll('.secondStageFood');
const firstStageButtons = document.querySelectorAll(".firstStage");
const backButton = document.querySelector('#back');
const h1 = document.querySelector('#text');
const videosThumbnail = document.querySelector('#videosThumbnail');

const siteFunction = {
    hideFirstStageButtons() {
        firstStageButtons.forEach(element => {
            element.classList.add("hidden");
    })
    },
    showFirstStageButtons() {
        firstStageButtons.forEach(element => {
            element.classList.remove("hidden");
            element.classList.add("show");
    })
    },   
    hideSecondStageButtons() {
        secondStageButtonsFood.forEach(element => {
            element.classList.remove("show");
            element.classList.add("hidden");
    })
        this.showFirstStageButtons();
    },
    showSecondStageButtons() {
        secondStageButtonsFood.forEach(element => {
            element.classList.remove("hidden");
            element.classList.add("show");
    });
        this.hideFirstStageButtons();
    },
    showBackButton() {
        backButton.classList.remove('hidden');
    },
    hideBackButton() {
        backButton.classList.add('hidden');
    },
    goBack () {
        this.hideSecondStageButtons();
        h1.textContent = "Wähle eine Kategorie:";
        h1.classList.remove("show");
        videosThumbnail.classList.add("hidden");
        videosThumbnail.src = "";
        this.hideBackButton();
    }
};

const videos = {
    name: ["Nahim Sky",
         "First Dates",
          "Sturmwaffel oder Strictly Dumpling",
          "Rosins Restaurants",
          "Take Me Out!",
          "Date or Drop"],
    thumbnail: ["images/nahimsky.webp",
                "images/firstdates.webp",
                "images/sturmimikey.webp",
                "images/rosins.webp",
                "images/takemeout.webp",
                "images/dateordrop.webp"
    ],
    wasGucken() {
        siteFunction.showBackButton();
        const number = Math.floor((Math.random() * 6)) + 1;
        siteFunction.hideFirstStageButtons();
        videosThumbnail.classList.remove("hidden");
        h1.classList.add("show");
        switch (number) {
            case 1:
                h1.textContent = videos.name[0];
                videosThumbnail.src = videos.thumbnail[0];
                break;
            case 2:
                h1.textContent = videos.name[1];
                videosThumbnail.src = videos.thumbnail[1];
                break;
            case 3:
                h1.textContent = videos.name[2];
                videosThumbnail.src = videos.thumbnail[2];
                break;
            case 4:
                h1.textContent = videos.name[3];
                videosThumbnail.src = videos.thumbnail[3];
                break;
            case 5:
                h1.textContent = videos.name[4];
                videosThumbnail.src = videos.thumbnail[4];
                break;
            case 6:
                h1.textContent = videos.name[5];
                videosThumbnail.src = videos.thumbnail[5];
                break;
        }
    }
};

const restaurants = {
    burger: ["Devrans", "McDonalds", "Delfi Grill"],
    indisch: ["Bombay Wuppertal", "Delhi Roma"],
    arabPizza:["Devrans", "2M Grill", "Döner Planet"] ,
    italPizza: ["Tonys Pizzeria", "Dominos"],
    sushi: ["King Sushi", "Sushi Hub", "Langerfelder Nem Sushi"],
    doener: ["Devrans", "Royal Döner", "Istanbul Grill"],
    cheap: ["Ferman Nachtexpress", "Amirco Pizza & Pasta", "Spices"],
    thumbnails: ["images/burger.webp",
                "images/indisch.webp",
                "images/arabpizza.webp",
                "images/italpizza.webp",
                "images/sushi.webp",
                "images/doener.webp",
                "images/cheap.webp"
            ],
    wasEssen() {
        siteFunction.showSecondStageButtons();
        siteFunction.showBackButton();
    },
    restaurantPicker(category) {
        siteFunction.showBackButton();
        siteFunction.hideSecondStageButtons();
        siteFunction.hideFirstStageButtons();
        let number = 0;
        h1.classList.add("show");
        switch (category) {
            case 'burger': 
                number = Math.floor(Math.random() * restaurants.burger.length);
                h1.textContent = restaurants.burger[number];
                videosThumbnail.src = restaurants.thumbnails[0];
                videosThumbnail.classList.remove("hidden");           
                break;
            case 'indisch': 
                number = Math.floor(Math.random() * restaurants.indisch.length);
                h1.textContent = restaurants.indisch[number];
                videosThumbnail.src = restaurants.thumbnails[1];
                videosThumbnail.classList.remove("hidden");  
                break;
            case 'arabPizza': 
                number = Math.floor(Math.random() * restaurants.arabPizza.length);
                h1.textContent = restaurants.arabPizza[number];
                videosThumbnail.src = restaurants.thumbnails[2];
                videosThumbnail.classList.remove("hidden");  
                break;
            case 'italPizza': 
                number = Math.floor(Math.random() * restaurants.italPizza.length);
                h1.textContent = restaurants.italPizza[number];
                videosThumbnail.src = restaurants.thumbnails[3];
                videosThumbnail.classList.remove("hidden");  
                break;
            case 'sushi': 
                number = Math.floor(Math.random() * restaurants.sushi.length);
                h1.textContent = restaurants.sushi[number];
                videosThumbnail.src = restaurants.thumbnails[4];
                videosThumbnail.classList.remove("hidden");  
                break;
            case 'doener': 
                number = Math.floor(Math.random() * restaurants.doener.length);
                h1.textContent = restaurants.doener[number];
                videosThumbnail.src = restaurants.thumbnails[5];
                videosThumbnail.classList.remove("hidden");  
                break;
            case 'cheap': 
                number = Math.floor(Math.random() * restaurants.cheap.length);
                h1.textContent = restaurants.cheap[number];
                videosThumbnail.src = restaurants.thumbnails[6];
                videosThumbnail.classList.remove("hidden");  
                break;
        } 
    }
};

