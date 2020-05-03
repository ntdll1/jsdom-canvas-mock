function Image() {
} 

Object.defineProperty(Image.prototype, 'naturalWidth', {
    get: function () {
        return 20;
    }
});

Object.defineProperty(Image.prototype, 'naturalHeight', {
    get: function () {
        return 20;
    }
});

function createCanvas () {
}   

module.exports = {
    createCanvas,    
    Image
}
