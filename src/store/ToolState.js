import {makeAutoObservable} from "mobx";

class ToolState {
    tool = null;
    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }

    setFillColor(color) {
        this.tool.fillColor = color
    }

    setBorderColor(color) {
        this.tool.borderColor = color
    }

    setLineWidth(width) {
        this.tool.lineWidth = width
    }
}

export default new ToolState();