let searchBarStatus = false;
/* Toggling searchBarStatus always, when it changes its state of visible and invisible */
let errormsg1 = "Nothing Found 😢";
let errormsg2 = "Please enter more than 2 characters 🫡";
let errormsg3 = "Found something 😁";

const elements = {
    search: document.querySelector("#search"),
    searchBar: document.querySelector("#searchBar"),
    logo: document.querySelector("#logo"),
    checkSearchBar: () => {
        /* Checking if anything is written in the SearchBox. If not, it just acts as a toggle. */
        if (!searchBar.value) {
            if (searchBar.classList.contains("invisible") === true) {
                elements.toggleSearchBar();
            } else if (searchBarStatus === true) {
                elements.toggleSearchBar();
            }
            /* Checking if Text in SearchBox is equal to the error messages, seen later */
        } else if (searchBar.value != errormsg1 && searchBar.value != errormsg2 && searchBar.value != errormsg3) {
            searchAlgo.search(searchBar.value);
            /* Wait after Search, until User sees Error Message. Replace this when you master Async Await */
            setTimeout(() => {
                elements.toggleSearchBar();
                searchBarStatus = false;
                searchBar.value = "";
            }, 2000);  
        }
    },
    toggleSearchBar: () => {
      logo.classList.toggle("invisible");
      logo.classList.toggle("absolute");
      searchBar.classList.toggle("invisible");
      searchBar.classList.toggle("slideitin");
      /* Toggling the searchBarStatus, so i can always check, if it is currently open or not */
      if (searchBarStatus === false) {
        searchBarStatus = true;
      } else if (searchBarStatus === true) {
        searchBarStatus = false;
      }
    },
  };
  
const searchAlgo = {
    getItems: document.querySelectorAll(".searchAlgorithm"),
    search: (textValue) => {
        /* Remove length check later, to implement live search. */
       if (textValue.length > 2) {
            searchAlgo.getItems.forEach(element => {
                /* TODO: Toggle Visible/Invisible if characters in SearchBox match any Generators 
                    Currently: Checks if any Text > 2 Chars is found on Elements with the .searchAlgorithm Class */
                if(element.textContent.toLowerCase().includes(textValue.toLowerCase())) {
                    elements.searchBar.value = "Found something 😁";     
                } else {
                    elements.searchBar.value = "Nothing Found 😢";
                }
            }) 
        } else {
            elements.searchBar.value = "Please enter more than 2 characters 🫡";
            }
        }
    }