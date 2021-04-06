function OrFunction(x, y, modulo) {
    return (x | y) % modulo
}
     
function ExpFunction(x, y, modulo) {
    return (x ^ y) % modulo
}
     
function AnyFunction(x, y, f) {
    return eval(f)
}

function fillBuffer(inputValue, inputFunction, targetCanvas) {
    const pixelSize = 4
    const context = targetCanvas.getContext('2d')
     
    const canvasWidth = context.canvas.width
    const canvasHeight = context.canvas.height
    context.clearRect(0, 0, canvasWidth, canvasHeight)
     
    const bufferCanvas = document.createElement('canvas')
    bufferCanvas.width = canvasWidth
    bufferCanvas.height = canvasHeight
    const bufferContext = bufferCanvas.getContext('2d')
     
     
    const xLoop = Math.floor(canvasWidth / pixelSize)
    const yLoop = Math.floor(context.canvas.height / pixelSize)
     
    for (let x = 0; x < xLoop; x++) {
        for (let y = 0; y < yLoop; y++) {
            switch (inputFunction) {
                case "OrFunction":
                    var modulo = parseInt(document.getElementById(inputValue).value)
                    var functionResult = OrFunction(x, y, modulo)
                    break;
             case "ExpFunction":
                    var modulo = parseInt(document.getElementById(inputValue).value)
                    var functionResult = ExpFunction(x, y, modulo)
                    break;
             case "AnyFunction":
                    const anyFunction = document.getElementById(inputValue).value
                    var functionResult = AnyFunction(x, y, anyFunction)
                    break;
           }
     
           if (functionResult) {
                bufferContext.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize)
           }
         }
       }
     
       context.drawImage(bufferCanvas, 0, 0);
       bufferCanvas.remove();
     }
     
function generateOr() {
    fillBuffer("OrInput", "OrFunction", OrCanvas)
}
     
function generateExp() {
    fillBuffer("ExpInput", "ExpFunction", ExpCanvas)
}
     
function generateAny() {
    fillBuffer("AnyInput", "AnyFunction", AnyCanvas)
}
     