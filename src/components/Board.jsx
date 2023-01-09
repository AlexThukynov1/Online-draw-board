import React from 'react';
import '../styles/board.scss'
import { useEffect, useRef } from 'react';
import CanvasState from '../store/CanvasState';
import Brush from '../tools/Brush';
import ToolState from "../store/ToolState"
import { observer } from 'mobx-react-lite';


const Board = observer(() => {
    const canvasRef = useRef()

    useEffect(() => {
        CanvasState.setCanvas(canvasRef.current)
        ToolState.setTool(new Brush(CanvasState.canvas))
        // ToolState.setTool(new Brush(CanvasState.canvas))
    }, []);

    const mouseDownHeandler = () => {
        CanvasState.addToUndo(canvasRef.current.toDataURL())
        console.log('add')
    }
    
    return (
        <div className='board'>
            <canvas
                onMouseDown={() =>mouseDownHeandler()}
                ref={canvasRef}
                width={1250}
                height={650}
            />
        </div>
    );
});

export default Board;