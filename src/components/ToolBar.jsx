import React from 'react'
import Brush from '../tools/Brush'
import Rect from '../tools/Rect'
import Circle from '../tools/Circle'
import Eraser from '../tools/Eraser'
import Line from '../tools/Line'
import ToolState from '../store/ToolState'
import CanvasState from '../store/CanvasState'
import '../styles/tool-bar.scss'

function ToolBar() {

    const ChangeColor = (e) => {
        ToolState.setBorderColor(e.target.value)
        ToolState.setFillColor(e.target.value)
    }

    return (
        <div className='tool-bar'>
            <button className={"tool-bar__btn brush"} onClick={() => ToolState.setTool(new Brush(CanvasState.canvas))} />
            <button className={"tool-bar__btn rectangle"} onClick={() => ToolState.setTool(new Rect(CanvasState.canvas))}  />
            <button className={"tool-bar__btn circle"} onClick={() => ToolState.setTool(new Circle(CanvasState.canvas))}/>
            <button className={"tool-bar__btn eraser"} onClick={() => ToolState.setTool(new Eraser(CanvasState.canvas))} />
            <button className={"tool-bar__btn line"}  onClick={() => ToolState.setTool(new Line(CanvasState.canvas))} />
            <button className={"tool-bar__btn clear"} title="Clear all board"  onClick={() => CanvasState.toClearAll()} />
            <input className='color' type={'color'} onChange={e => ChangeColor(e)}/>
            <button className={"tool-bar__btn undo"} onClick={() => CanvasState.undo()} />
            <button className={"tool-bar__btn redo"} onClick={() => CanvasState.redo()} />
            <button className={"tool-bar__btn save"}/>
        </div>
    )
}

export default ToolBar
