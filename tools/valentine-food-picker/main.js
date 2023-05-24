
function goBack() {
    const firstStageButtons = document.querySelectorAll(".firstStage");
    const secondStageButtonsFood = document.querySelectorAll('.secondStageFood');    
    secondStageButtonsFood.forEach(element => {
        element.classList.remove("show");
        element.classList.add("hidden");
    })
    firstStageButtons.forEach(element => {
        element.classList.remove("hidden");
        element.classList.add("show");
    })
}


function wasEssen() {
    const firstStageButtons = document.querySelectorAll(".firstStage");
    const secondStageButtonsFood = document.querySelectorAll('.secondStageFood');
    secondStageButtonsFood.forEach(element => {
        element.classList.remove("hidden");
        element.classList.add("show");
    });
    firstStageButtons.forEach(element => {
        element.classList.add("hidden");
    })
}    