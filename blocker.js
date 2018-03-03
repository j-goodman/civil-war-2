var ALLBLOCKS = [];

var Block = function (type, text) {
    types = {
        block: ['section', 'block'],
        bubble: ['section', 'bubble small'],
    };
    this.node = document.createElement(types[type][0]);
    this.node.className = types[type][1];
    this.type = type;
    if (text) {
        this.text(text);
    }
    if (type === 'bubble') {
        this.setupBubble();
    }
    ALLBLOCKS.push(this);
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
    this.content = 'Now is the winter of our discontent made glorious summer by this son of York, and all the clouds that lour\'d upon our house in the deep bosom of the ocean buried.';
    this.node.onclick = function () {
        ALLBLOCKS.map((block) => {
            if (block.type === 'bubble') {
                block.node.classList.remove('big');
                block.node.classList.add('small');
                block.node.innerText = block.title;
            }
        });
        if (this.node.className.includes('small')) {
            this.node.classList.remove('small');
            this.node.classList.add('big');
            this.node.innerText = this.content;
        } else {
            this.node.classList.remove('big');
            this.node.classList.add('small');
            this.node.innerText = this.title;
        }
    }.bind(this);
};