
import { ROOT_DIV } from "../Helper/cosntants.js";
import { globalState } from "../scripts/index.js";
import { renderHighlight } from "../Render/main.js";
import { heightlight_state } from "../Helper/cosntants.js";

function whitePawnClick({ piece }) {
    const current_pos = piece.current_position;
    const flatArray = globalState.flat();
    //position
    if(piece.current_position[1] == '2'){
        const heightlightSquareIds = [ 
            `${current_pos[0]}${Number(current_pos[1]) + 1}`,
            `${current_pos[0]}${Number(current_pos[1]) + 2}`,
        ];

        heightlightSquareIds.forEach((heightlight) => { 
            globalState.forEach((row) => {
              row.forEach((element) => {
                if(element.id == heightlight) {
                    element.heightlight = true;

                }
              });
            });
            if(heightlight_state) clearHightlight();
            renderHighlight(heightlight);
            heightlight_state = true;
          });
    }
}

function GlobalEvent(){
    ROOT_DIV.addEventListener("click", function(e) {
        if (e.target.localName === "img") {
           const clickId = e.target.parentNode.id;
           const flatArray = globalState.flat();
           const square  = flatArray.find((el) => el.id == clickId);
           if (square.piece.piece_name == "WHITE_PAWN") {
            whitePawnClick(square);
           }

        }
    });
}

export { GlobalEvent };