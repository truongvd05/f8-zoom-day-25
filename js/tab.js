const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const wrap = $(".wrap");
const tabs = $$(".tab");
const content = $$(".content-tab");
const body = document.body;

const params = new URLSearchParams(location.search);
const tabId = wrap.id;
const tabIndex = params.get(tabId) ?? 0;
// activate default on the first page load
if (params) {
    tabs[tabIndex].classList.add("active");
    console.log(tabIndex);
}
// add active + URLsearchParams
tabs.forEach((item, index) => {
    item.onclick = function () {
        if (index) {
            params.set(tabId, index);
        } else {
            params.delete(tabId);
        }
        const Url = params.size ? `?${params}` : "";
        const saveUrl = `${location.pathname}${Url}${location.hash}`;
        history.replaceState(null, null, saveUrl);

        removeClass();
        item.classList.add("active");
        if (item.classList.contains("active")) {
            addAtribute();
            content[index].removeAttribute("hidden");
        }
    };
});

// remove active
function removeClass() {
    tabs.forEach((item) => {
        item.classList.remove("active");
    });
}

// add attribute hidden
function addAtribute() {
    content.forEach((item) => {
        item.setAttribute("hidden", "");
    });
}

// press keybroad to active
const keyNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
body.addEventListener("keydown", function (e) {
    if (keyNumber.includes(e.key) && e.key <= tabs.length) {
        let num = parseInt(e.key);
        num--;
        removeClass();
        tabs[num].classList.add("active");
        addAtribute();
        content[num].removeAttribute("hidden");
    }
    return;
});
