const circleBox = document.querySelector(".global-circle");

class MainBall {
  constructor(x, y) {
    this.size = Math.round(Math.random() * 70) + 30;
    this.color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )}, ${Math.random()})`;
    this.x = x;
    this.y = y;
    this.el = document.createElement("DIV");
    this.el.style.width = this.size + "px";
    this.el.style.height = this.size + "px";
    this.el.style.backgroundColor = this.color;
    this.el.classList.add("circle");
    this.el.onclick = createNewBall;
    circleBox.appendChild(this.el);
    this.interval = null;
    this.el.style.top = this.x + "px";
    this.el.style.left = this.y + "px";
  }

  play() {
    if (!this.interval) {
      let randomNumberX = Math.round(Math.random() * 10) / 10;
      let randomNumberY = Math.round(Math.random() * 10) / 10;

      this.interval = setInterval(() => {
        this.x += randomNumberX;
        this.y += randomNumberY;

        if (this.y >= window.innerHeight - this.size || this.y <= 0) {
          randomNumberY *= -1;
        }
        if (this.x >= window.innerWidth - this.size || this.x <= 0) {
          randomNumberX *= -1;
        }
        this.el.style.top = this.y + "px";
        this.el.style.left = this.x + "px";
      }, 1);
    }
  }

  pause() {
    clearInterval(this.interval);
    this.interval = null;
  }
}

const ball = new MainBall(0, 0);
ball.play();

function createNewBall(e) {
  const ball = new MainBall(e.target.offsetLeft, e.target.offsetTop);
  ball.play();
}
