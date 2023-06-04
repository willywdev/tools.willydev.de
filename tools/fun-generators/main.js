let searchBarStatus = false;
let errormsg1 = "Nothing Found 😢";
let errormsg2 = "Please enter more than 2 characters 🫡";
let errormsg3 = "Found something 😁";

const elements = {
    search: document.querySelector("#search"),
    searchBar: document.querySelector("#searchBar"),
    logo: document.querySelector("#logo"),
    checkSearchBar: () => {
        if (!searchBar.value) {
            if (searchBar.classList.contains("invisible") === true) {
                elements.toggleSearchBar();
            } else if (searchBarStatus === true) {
                elements.toggleSearchBar();
            }
        } else if (searchBar.value != errormsg1 && searchBar.value != errormsg2 && searchBar.value != errormsg3) {
            searchAlgo.search(searchBar.value);
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
      if (searchBarStatus === false) {
        searchBarStatus = true;
      } else if (searchBarStatus === true) {
        searchBarStatus = false;
      }
      // searchAlgo.search(searchBar.value);
    },
  };
  
const searchAlgo = {
    getItems: document.querySelectorAll(".searchAlgorithm"),
    search: (textValue) => {
       if (textValue.length > 2) {
            searchAlgo.getItems.forEach(element => {
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