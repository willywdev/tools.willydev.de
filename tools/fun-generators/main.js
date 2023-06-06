/* Toggling searchBarStatus always, when it changes its state of visible and invisible */
let searchBarStatus = false;
/* Theme Switcher */
const themen = document.querySelectorAll(".themes");
themen.forEach((e) => {
  e.addEventListener("click", () => {
    html.setAttribute("data-theme", e.dataset.name);
    localStorage.setItem("data-theme", e.dataset.name);
  });
});

const elements = {
  search: document.querySelector("#searchItems"),
  searchBar: document.querySelector("#searchBar"),
  logo: document.querySelector("#logo"),
  deleteSearch: document.querySelector("#deleteSearch"),
  searchIcon: document.querySelector("#search"),
  /* Getting the Screenwidth of the device used. */
  screenWidth: (width =
    window.innerWidth > 0 ? window.innerWidth : screen.width),
  themePicker: document.querySelector("#themePicker"),
  /* Simple function to check if SearchBar is open or closed. Second outer "else if" Statement calls the Search Function */
  checkSearchBar: () => {
    if (!searchBar.value) {
      if (searchBar.classList.contains("invisible") === true) {
        elements.openSearchBar();
        searchBar.focus();
      } else if (searchBarStatus === true) {
        elements.closeSearchBar();
      }
    } else if (searchBarStatus === true && searchBar.value != "") {
      searchAlgo.search(searchBar.value);
    }
  },
  openSearchBar: () => {
    if (elements.screenWidth <= 600) {
      logo.classList.add("invisible");
      logo.classList.add("absolute");
      themePicker.classList.add("invisible");
      themePicker.classList.add("absolute");
      search.classList.add("invisible");
      search.classList.add("absolute");
    }
    searchBar.classList.remove("invisible");
    searchBar.classList.remove("absolute");
    searchBar.classList.add("slideitin");
    deleteSearch.classList.remove("invisible");
    deleteSearch.classList.remove("absolute");
    /* Toggling the searchBarStatus, so i can always check, if it is currently open or not */
    searchBarStatus = true;
  },
  closeSearchBar: () => {
    if (elements.screenWidth <= 600) {
      logo.classList.remove("invisible");
      logo.classList.remove("absolute");
      themePicker.classList.remove("invisible");
      themePicker.classList.remove("absolute");
      search.classList.remove("invisible");
      search.classList.remove("absolute");
    }
    searchBar.classList.remove("slideitin");
    searchBar.classList.add("invisible");
    searchBar.classList.add("absolute");
    deleteSearch.classList.add("invisible");
    deleteSearch.classList.add("absolute");
    searchBarStatus = false;
  },
  deleteSearchContent: () => {
    if (searchBar.value === "") {
      elements.closeSearchBar();
      searchAlgo.searchReset();
    } else {
      searchBar.value = "";
      searchAlgo.searchReset();
    }
  },
};

const searchAlgo = {
  getItems: document.querySelectorAll(".searchAlgorithm"),
  search: (textValue) => {
    /* Remove length check later, to implement live search. */
    if (textValue.length > 1) {
      searchAlgo.getItems.forEach((element) => {
        if (
          element.textContent.toLowerCase().includes(textValue.toLowerCase())
        ) {
          /* Element found. Parent Div found. Do nothing with it, but make any other elements invisible */
        } else {
          /* elements.searchBar.value = errormsg1; */
          /* Add Class of Invisible to all Divs that dont match the Search Bar Input */
          element.closest(".card").classList.add("invisible");
          element.closest(".card").classList.add("absolute");
        }
      });
    }
  },
  searchReset: () => {
    searchAlgo.getItems.forEach((element) => {
      element.closest(".card").classList.remove("invisible");
      element.closest(".card").classList.remove("absolute");
    });
  },
};
/* Adding EventListeners */
/* Adding EventListener to look for a change in input(searchbar) */
searchBar.addEventListener("input", () => {
  searchAlgo.searchReset();
  searchAlgo.search(searchBar.value);
});
