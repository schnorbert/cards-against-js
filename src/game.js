import './view/base.scss';
import './view/navbar.scss';
import './view/game.scss';

import { GameController } from './controllers/game_controller';
import { TimerBar } from "./controllers/timer_controller";

const controller = new GameController();
const timer = new TimerBar(
    document.getElementById("timer"),
    document.getElementById("timer-text"),
    document.getElementById("timer-slider"),
    10000, 5);
timer.start();

const title = document.getElementById("title");
title.onmouseover = function (event) {
    this.innerText = "Cards Against Schönherz";
};

title.onmouseleave = function (event) {
    this.innerText = "Cards Against Humanity";
};
