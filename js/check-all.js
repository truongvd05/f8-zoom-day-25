const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const checkInput = $$(".item");
const list = $(".list");
const input = $$(".checkbox-item");
const all = $(".checkbox-all");
const body = document.body;

console.log(all);

input.forEach((item) => {
    item.onclick = function (e) {
        const target = e.target.closest("input");

        target.toggleAttribute("checked");
        checkAllInput();
    };
});

function checkAllInput() {
    const checkmax = input.length;
    const checkInput = [...input].filter((item) => item.checked);
    if (checkInput.length === checkmax) {
        all.indeterminate = false;
        all.checked = true;
    } else if (checkInput.length) {
        all.indeterminate = true;
    } else {
        all.indeterminate = false;
    }
    const title = $(".title");
    title.textContent = `số row check là ${escapeseHTML(checkInput.length)}`;
}

function escapeseHTML(html) {
    const div = document.createElement("div");
    div.textContent = html;
    return div.innerHTML;
}
