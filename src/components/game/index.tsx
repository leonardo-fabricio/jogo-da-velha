import { useEffect, useState } from "react";
import styled from "styled-components";
import { dataInitial, ValueSquare } from "./data";

export default function Game() {
  const [squares, setSquares] = useState(dataInitial);
  const [moves, setMoves] = useState(0);
  const [winner, setWinner] = useState<"X" | "O" | undefined | "Empate">(
    undefined
  );

  const handleValueSquare = (index: number) => {
    setMoves(moves + 1);
    const newArray = JSON.parse(JSON.stringify(squares));
    newArray[index].value = moves % 2 == 0 ? "X" : "O";
    newArray[index].filled = true;
    setSquares(newArray);
  };
  const handleReset = () => {
    setSquares(dataInitial);
    setWinner(undefined);
  };
  function checkWinner() {
    // Check horizontal lines
    if (
      squares[0].value !== undefined &&
      squares[0].value === squares[1].value &&
      squares[0].value === squares[2].value
    ) {
      return squares[0].value;
    }

    if (
      squares[3].value !== undefined &&
      squares[3].value === squares[4].value &&
      squares[3].value === squares[5].value
    ) {
      return squares[3].value;
    }

    if (
      squares[6].value !== undefined &&
      squares[6].value === squares[7].value &&
      squares[6].value === squares[8].value
    ) {
      return squares[6].value;
    }

    // Check vertical lines
    if (
      squares[0].value !== undefined &&
      squares[0].value === squares[3].value &&
      squares[0].value === squares[6].value
    ) {
      return squares[0].value;
    }

    if (
      squares[1].value !== undefined &&
      squares[1].value === squares[4].value &&
      squares[1].value === squares[7].value
    ) {
      return squares[1].value;
    }

    if (
      squares[2].value !== undefined &&
      squares[2].value === squares[5].value &&
      squares[2].value === squares[8].value
    ) {
      return squares[2].value;
    }

    // Check diagonal lines
    if (
      squares[0].value !== undefined &&
      squares[0].value === squares[4].value &&
      squares[0].value === squares[8].value
    ) {
      return squares[0].value;
    }

    if (
      squares[2].value !== undefined &&
      squares[2].value === squares[4].value &&
      squares[2].value === squares[6].value
    ) {
      return squares[2].value;
    }

    // Return null if no winner
    return null;
  }
  function checkFilledSquares() {
    return squares.filter((item) => item.filled === true).length;
  }

  useEffect(() => {
    if (checkFilledSquares() == 9) {
      setWinner("Empate");
    } else {
      const winner = checkWinner();
      if (winner) {
        setWinner(winner);
      }
    }
  }, [squares]);

  return (
    <>
      <GameContainer>
        <GameMain>
          {squares.map((item, index) => {
            return (
              <Square
                key={index}
                value={item.value}
                onClick={() => {
                  if (!item.filled) handleValueSquare(index);
                }}
              />
            );
          })}
        </GameMain>

        {winner && (
          <>
            <Alert>{winner == "Empate" ? "Partida Empatada": `${winner} Venceu!`} </Alert>
            <NewGame onClick={handleReset}>Jogar Novamente</NewGame>
          </>
        )}
      </GameContainer>
    </>
  );
}

const GameContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  flex-direction: column;
  row-gap: 24px;
`;

const GameMain = styled.div`
  width: 400px;
  height: 400px;
  gap: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
`;

const Square = styled.button<ValueSquare>`
  border: none;
  background: #adadad;
  width: 130px;
  height: 130px;
  cursor: pointer;
  font-size: 20px;

  :active {
    opacity: 0.6;
  }
  ::after {
    content: "${(props) => props.value}";
  }
`;

const Alert = styled.span`
  background: #4aff4a;
  color: black;
  position: absolute;
  top: 8px;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
`;

const NewGame = styled.button`
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: black;
  color: white;
  padding: 8px;
  :active {
    opacity: 0.6;
  }
`;
