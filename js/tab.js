const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab");
const content = $$(".content-tab");
const body = document.body;

// console.log(content);

// active mặc định khi tải trang
tabs.forEach((item, index) => {
    if (item.classList.contains("active")) {
        addAtribute();
        content[index].removeAttribute("hidden");
    }
});

// add active
tabs.forEach((item, index) => {
    item.onclick = function () {
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
