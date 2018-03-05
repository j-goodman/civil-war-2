var Block = function (type, text) {
    types = {
        block: ['section', 'block'],
        bubble: ['section', 'bubble small'],
    };
    this.node = document.createElement(types[type][0]);
    this.node.block = this;
    this.node.className = types[type][1];
    this.type = type;
    if (text) {
        this.text(text);
    }
    if (type === 'bubble') {
        this.setupBubble();
    }
};

Block.prototype.nest = function (...blocks) {
    var i;
    for (i=0; i<blocks.length; i++) {
        this.node.appendChild(blocks[i].node);
    }
};

Block.prototype.addToPage = function () {
    document.body.appendChild(this.node);
};

Block.prototype.text = function (text) {
    this.node.innerText = text;
};

Block.prototype.setupBubble = function () {
    this.title = this.node.innerText;
    this.content = '';
    this.childBlocks = [];
    this.node.onclick = function (event) {
        event.stopPropagation();
        Array.from(this.node.parentNode.getElementsByClassName('bubble')).map((node) => {
            if (node !== this.node) {
                node.block.bubbleCollapse();
            }
        });
        if (this.node.className.includes('small')) {
            this.node.className = 'bubble big';
            this.node.innerText = this.content;
            if (this.childBlocks) {
                this.childBlocks.map((child) => {
                    this.node.appendChild(child.node);
                });
            }
        } else {
            this.bubbleCollapse();
        }
    }.bind(this);
};

Block.prototype.bubbleCollapse = function () {
  this.node.className = 'bubble small';
  this.node.innerText = this.title;
  while (this.node.children[1]) {
      this.node.removeChild(this.node.children[1]);
  }
}