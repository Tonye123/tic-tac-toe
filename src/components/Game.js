import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helper';

const styles = {
    width:'200px',
    margin: '20px auto'
}

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setIsXnext] = useState(true)
    const winner = calculateWinner(board)
    const handleClick = (i) => {
        const boardCopy = [...board];

        if(winner || boardCopy[i]) return;

        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy)
        setIsXnext(!xIsNext)

    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    }

   
    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}
