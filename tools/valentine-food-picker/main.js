const videos = {
    name: ["Nahim Sky",
         "First Dates",
          "Sturmwaffel oder Strictly Dumpling",
          "Rosins Restaurants",
          "Take Me Out!",
          "Date or Drop"],
    thumbnail: ["images/nahimsky.jpg",
                "images/firstdates.jpg",
                "images/sturmimikey.jpg",
                "images/rosins.jpg",
                "images/takemeout.jpg",
                "images/dateordrop.jpg"
    ]
                };

function hideSecondStageButtons() {
    const secondStageButtonsFood = document.querySelectorAll('.secondStageFood');
    secondStageButtonsFood.forEach(element => {
        element.classList.remove("show");
        element.classList.add("hidden");
    })
    showFirstStageButtons();
}

function hideFirstStageButtons() {
    const firstStageButtons = document.querySelectorAll(".firstStage");
    firstStageButtons.forEach(element => {
        element.classList.add("hidden");
    })
}

function showFirstStageButtons() {
    const firstStageButtons = document.querySelectorAll(".firstStage");
    firstStageButtons.forEach(element => {
        element.classList.remove("hidden");
        element.classList.add("show");
    })
}

function showSecondStageButtons() {
    const secondStageButtonsFood = document.querySelectorAll('.secondStageFood');
    secondStageButtonsFood.forEach(element => {
        element.classList.remove("hidden");
        element.classList.add("show");
    });
    hideFirstStageButtons();
}

function wasGucken() {
    const number = Math.floor((Math.random() * 6)) + 1;
    hideFirstStageButtons();
    const h1 = document.querySelector('#text');
    const videosThumbnail = document.querySelector('#videosThumbnail');
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

function goBack() {
    hideSecondStageButtons();
    const h1 = document.querySelector('#text');
    h1.textContent = "Wähle eine Kategorie:";
    h1.classList.remove("show");
    const videosThumbnail = document.querySelector('#videosThumbnail');
    videosThumbnail.classList.add("hidden");
    videosThumbnail.src = "";
}

function wasEssen() {
    showSecondStageButtons();
}    

function food(foodType) {
    switch (foodType) {
        case 'burger': 
            alert("Hello");
            break;
    }
}