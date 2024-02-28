//black
function blackPawn(current_position) {
    return {
      current_position, 
      img: "Assets/image/pieces/black/pawn.png",
      piece_name : "BLACK_PAWN",
    };
}
function blackKnight(current_position) {
  return {
    current_position, 
    img: "Assets/image/pieces/black/knight.png",
    piece_name : "BLACK_KNIGHT",
  };
}

function blackRook(current_position){
  return {
      current_position, 
      img: "Assets/image/pieces/black/rook.png",
      piece_name : "BLACK_ROOK",
    };

}

function blackBishop(current_position) {
return {
  current_position, 
  img: "Assets/image/pieces/black/bishop.png",
  piece_name : "BLACK_BISHOP",
};
}

function blackQueen(current_position) {
return {
  current_position, 
  img: "Assets/image/pieces/black/queen.png",
  piece_name : "BLACK_QUEEN",
};
}

function blackKing(current_position) {
return {
  current_position, 
  img: "Assets/image/pieces/black/king.png",
  piece_name : "BLACK_KING",
};
}

//white

function whitePawn(current_position) {
    return {
      current_position, 
      img: "Assets/image/pieces/white/pawn.png",
      piece_name : "WHITE_PAWN",
    };
}

function whiteRook(current_position){
    return {
        current_position, 
        img: "Assets/image/pieces/white/rook.png",
        piece_name : "WHITE_ROOK",
      };

}

function whiteKnight(current_position) {
  return {
    current_position, 
    img: "Assets/image/pieces/white/knight.png",
    piece_name : "WHITE_KNIGHT",
  };
}

function whiteBishop(current_position) {
  return {
    current_position, 
    img: "Assets/image/pieces/white/bishop.png",
    piece_name : "WHITE_BISHOP",
  };
}

function whiteQueen(current_position) {
  return {
    current_position, 
    img: "Assets/image/pieces/white/queen.png",
    piece_name : "WHITE_QUEEN",
  };
}

function whiteKing(current_position) {
  return {
    current_position, 
    img: "Assets/image/pieces/white/king.png",
    piece_name : "WHITE_KING",
  };
}




export { 
  blackPawn,  
  blackBishop,
   blackKing, 
   blackKnight, 
   blackQueen, 
   blackRook,
   whitePawn, 
   whiteKnight, 
   whiteBishop, 
   whiteKing, 
   whiteQueen,
   whiteRook 
  };
