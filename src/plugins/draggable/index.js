class Draggable {
  constructor(element, options = {}) {
    this.isDragging = false;
    this.options = options;
    this.element = element;
    if (this.element) {
      this.init();
    }
    this.moveFn = (event) => {
      this.move(event);
    };
    this.upFn = (event) => {
      this.up(event);
    };
    this.clickFn = (event) => {
      this.click(event);
    };
  }

  init() {
    const element = this.element;
    element.addEventListener('mousedown', (event) => {
      this.mousedown(event);
    });
    if (this.options.container) {
      this.options.container.addEventListener('mousedown', (event) => {
        this.mousedown(event);
      });
    }
  }

  mousedown(event) {
    if (this.isDragging) return;
    document.onselectstart = () => { return false; };
    document.ondragstart = () => { return false; };
    document.body.addEventListener('mousemove', this.moveFn);
    document.body.addEventListener('mouseup', this.upFn);
    document.body.addEventListener('click', this.clickFn);
    this.isDragging = true;

    if (this.options.start) {
      this.options.start(event);
    }
  }

  move(event) {
    if (this.options.drag) {
      this.options.drag(event);
    }
  }

  click(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  up(event) {
    document.body.removeEventListener('mousemove', this.moveFn);
    document.body.removeEventListener('mouseup', this.upFn);
    setTimeout(() => {
      document.body.removeEventListener('click', this.clickFn);
    }, 200);
    document.onselectstart = null;
    document.ondragstart = null;

    this.isDragging = false;

    if (this.options.end) {
      this.options.end(event);
    }
  };

  destroy() {
    document.removeEventListener('mousemove', this.moveFn);
    document.removeEventListener('mouseup', this.upFn);
    document.removeEventListener('click', this.clickFn);
    document.onselectstart = null;
    document.ondragstart = null;
  }
}

export default Draggable;
