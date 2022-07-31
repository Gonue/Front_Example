const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d") //붓
const lineWidth = document.querySelector("#line-width");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));//HTMLCollection 으로받아 JS Array로 변환
const color = document.querySelector("#color");
const modeBtn = document.getElementById("mode-btn")
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn")
canvas.width = 800;
canvas.height= 800;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;
function onMove(event) {
    if (isPainting) {       //isPainting이 true라면 storke값 반환
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY); //false라면 좌표값만 이동
  }
  function startPainting() {
    isPainting = true;
  }
  function cancelPainting() {
    isPainting = false;
  }
  function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}
  function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
  }
  function onColorClick(event){
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
  }
  function onModeClick(){
    if(isFilling){
        isFilling = false
        modeBtn.innerText = "채우기"
    }else {
        isFilling = true
        modeBtn.innerText = "그리기"

    }
  }
  function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0, 800, 800);
    }
  }

  function onDestroyClick(){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0, 800, 800);
  }
  function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false
    modeBtn.innerText ="채우기";
  }

  canvas.addEventListener("mousemove", onMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", cancelPainting);
  canvas.addEventListener("mouseleave", cancelPainting);
  canvas.addEventListener("click", onCanvasClick);
  lineWidth.addEventListener("change", onLineWidthChange);
  color.addEventListener("change",onColorChange);
  colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
  modeBtn.addEventListener("click", onModeClick);
  destroyBtn.addEventListener("click",onDestroyClick);
  eraserBtn.addEventListener("click",onEraserClick);

  