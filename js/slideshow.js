const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let index = 0;

const controls = $(".wrap-btn");
const slideShow = $(".inner");
const imgs = $$(".img");

let a = 0;

// create dot
function createDot() {
    const wrapBox = $(".wrap-dot");
    imgs.forEach(() => {
        const span = document.createElement("span");
        span.className = "dot";
        wrapBox.appendChild(span);
    });
}
createDot();

// chuyển tiếp tơi ảnh khi bấm vào dot
const dots = $$(".dot");
dots.forEach((dot, index) => {
    dot.onclick = function () {
        a = index;
        removeActive();
        dotRemove(dots);
        imgs[a].classList.add("active");
        dots[a].classList.add("dot-active");
    };
});

// khởi tạo active cho dot đầu tiên
$$(".dot")[0].classList.add("dot-active");

// handle click
controls.onclick = function (e) {
    const controlsImg = e.target.closest(".btn");
    const dots = $$(".dot");
    const btnNext = $(".next");

    if (controlsImg.matches(".next")) {
        a++;
        if (a === imgs.length) {
            a = 0;
        }
        removeActive();
        dotRemove(dots);
        imgs[a].classList.add("active");
        dots[a].classList.add("dot-active");
    }

    if (controlsImg.matches(".return")) {
        --a;
        if (a < 0) {
            a = imgs.length - 1;
        }
        removeActive();
        dotRemove(dots);
        imgs[a].classList.add("active");
        dots[a].classList.add("dot-active");
    }
};

// remove active
function removeActive() {
    imgs.forEach((img) => {
        img.classList.remove("active");
    });
}

// remove dot active
function dotRemove(dots) {
    dots.forEach((dot) => {
        dot.classList.remove("dot-active");
    });
}

function loop() {
    a++;
    if (a === imgs.length) {
        a = 0;
    }
    removeActive();
    dotRemove(dots);
    imgs[a].classList.add("active");
    dots[a].classList.add("dot-active");
}

let loopImg = setInterval(loop, 3000);

// hover thì ảnh ko chuyển tiếp nữa
slideShow.addEventListener("mouseenter", () => {
    clearInterval(loopImg);
});

// ko hover thì ảnh chuyển tiếp
slideShow.addEventListener("mouseleave", () => {
    loopImg = setInterval(loop, 3000);
});
