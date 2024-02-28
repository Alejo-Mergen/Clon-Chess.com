
import * as piece from "../Data/pieces.js";
import { ROOT_DIV } from "../Helper/cosntants.js";
import { globalState } from "../scripts/index.js";

// const ROOT_DIV = document.getElementById("root")

function piecesRender(data){
    data.forEach((row) => {
        row.forEach((square) => {
            if(square.piece) {
                const squareEl = document.getElementById(square.id);

                const piece = document.createElement('img')
                piece.src = square.piece.img;
                piece.classList.add("piece")

                squareEl.appendChild(piece);

            }
        });
    });
}

function initGameRender(data){
    data.forEach((element) => {
        const rowEl = document.createElement("div")    
        element.forEach((square) => {
            const squareDiv = document.createElement('div')
            squareDiv.id = square.id
            squareDiv.classList.add(square.color, "square")
            //black
            if (square.id[1] == 7){
                square.piece = piece.blackPawn(square.id);
            }
            if (square.id == "h8" || square.id == "a8"){
                square.piece = piece.blackRook(square.id);
            }
            if (square.id == "g8" || square.id == "b8"){
                square.piece = piece.blackKnight(square.id);
            }
            if (square.id == "f8" || square.id == "c8"){
                square.piece = piece.blackBishop(square.id);
            }
            if (square.id == "d8"){
                square.piece = piece.blackQueen(square.id);
            }
            if (square.id == "e8"){
                square.piece = piece.blackKing(square.id);
            }
            //white
            if (square.id == "e1"){
                square.piece = piece.whiteKing(square.id);
            }
            if (square.id == "d1"){
                square.piece = piece.whiteQueen(square.id);
            }
            if (square.id == "f1" || square.id == "c1"){
                square.piece = piece.whiteBishop(square.id);
            }
            if (square.id == "g1" || square.id == "b1"){
                square.piece = piece.whiteKnight(square.id);
            }
            if (square.id == "h1" || square.id == "a1"){
                square.piece = piece.whiteRook(square.id);
            }

            if (square.id[1] == 2){
                square.piece = piece.whitePawn(square.id);
            }
            rowEl.appendChild(squareDiv);
        });
        rowEl.classList.add('squareRow')
        ROOT_DIV.appendChild(rowEl)
    });

    piecesRender(data);
}


function renderHighlight(squareId){
    const heightlightSpan = document.createElement("span");
    heightlightSpan.classList.add("highlight");
    document.getElementById(squareId).appendChild(heightlightSpan);
}

function clearHightlight() {
    globalState.forEach((row) => {
        row.forEach((element) => {
          if(element.id == heightlight) {
            element.heightlight = true;
          }
        });
      });
}


export { initGameRender, renderHighlight };