import './view/style.scss';

const title = document.getElementById("title");
title.onmouseover = function (event) {
    this.innerText = "Cards Against Schönherz";
};

title.onmouseleave = function (event) {
    this.innerText = "Cards Against Humanity";
};
