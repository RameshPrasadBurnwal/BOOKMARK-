let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let submitBtn = document.getElementById("submitBtn");
let bookmarksList = document.getElementById("bookmarksList");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");



siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

submitBtn.onclick = function() {
    let siteName = siteNameInput.value;
    let siteUrl = siteUrlInput.value;
    let listItem = document.createElement("li");
    bookmarksList.appendChild(listItem);
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = "";
    bookmarkUrl.textContent = "";
    bookmarkUrl.href = siteUrl;
    bookmarkUrl.setAttribute("target", "_blank");
    bookmarksList.classList.add("d-none");
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkUrl);
    if (siteName !== "" && siteUrl !== "") {

        bookmarkName.textContent = siteName;
        bookmarkUrl.textContent = siteUrl;
        bookmarksList.classList.toggle("d-none");

    } else if (siteName === "" && siteUrl === "") {
        siteNameErrMsg.textContent = "Required*";
        siteUrlErrMsg.textContent = "Required*";
    } else if (siteName === "") {
        siteNameErrMsg.textContent = "Required*";
    } else if (siteUrl === "") {
        siteUrlErrMsg.textContent = "Required*";
    }


};
bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
});