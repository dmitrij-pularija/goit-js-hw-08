import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("timeupdate", throttle(playPosition, 1000));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

function playPosition({ seconds }) {
  localStorage.setItem("videoplayer-current-time", seconds);
}
