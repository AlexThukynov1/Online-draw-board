import {makeAutoObservable} from "mobx";

class CanvasState {
    canvas = null;
    undoList = [];
    redoList = [];
    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas) {
        this.canvas = canvas
    }
    addToUndo(item) {
        this.undoList.push(item)
    }
    addToRedo(item) {
        this.redoList.push(item)
    }
    undo () {
        let ctx = this.canvas.getContext('2d')
        console.log(this.undoList)
        if(this.undoList.length > 0) {
            let dataUrl = this.undoList.pop()
            this.addToRedo(this.canvas.toDataURL())
            let img = new Image()
            img.src = dataUrl
            img.onload = () => {
                ctx. clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx. drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        } else {
            ctx. clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
    }
    redo() {
        let ctx = this.canvas.getContext('2d')
        console.log(this.undoList)
        if(this.undoList.length > 0) {
            let dataUrl = this.redoList.pop()
            this.addToUndo(this.canvas.toDataURL())
            let img = new Image()
            img.src = dataUrl
            img.onload = () => {
                ctx. clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx. drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        }
    }
    toClearAll() {
        let ctx = this.canvas.getContext('2d')
        let img = new Image()
            img.src = this.canvas.toDataURL()
            img.onload = () => {
                ctx. clearRect(0, 0, this.canvas.width, this.canvas.height)
                this.addToUndo(this.canvas.toDataURL())
            }
    }

}

export default new CanvasState();