const elements = Array.from(document.getElementsByClassName("spin"));
const ROTATE_CLASSNAME = "rotate360";
const RETURN_TO_DEFAULT_STATE = 1000; // 1s

elements.map(element => {
  element.addEventListener("click", e => {
    e.target.classList.add(ROTATE_CLASSNAME);
    setTimeout(() => {
      e.target.classList.remove(ROTATE_CLASSNAME);
    }, 1000);
  });
});
