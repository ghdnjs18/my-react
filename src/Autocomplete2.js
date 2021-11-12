import { useState } from "react/cjs/react.development";

function Autocomplete2 () {
    const [_inp, setInp] = useState(null);
    const [_arr, setArr] = useState([]);
    const [_currentFocus, setCurrentFocus] = useState();

    const _setAutocomplete = ({inp, arr}) => {
        // 자동검색할 배열
        setArr(arr);

        // 기존의 input 값과 같지 않다면, 리스너 해제
        if (_inp === inp) return

        // 기존 리스너해제
        _removeListener();

        // 새로운 input의 리스너 추가 (리엑트는 할 필요가없는데 ? )
        setInp(inp);
        // _inp.addEventListener("input", inputEvent);
        // _inp.addEventListener("keydown", keydownEvent);
    }

    const inputEvent = (e) => {
        var a, b, i, val = this.value;

        // 이전 생성된 div 제거
        closeAllLists();
    }

    // 생성된 div 제거
    const closeAllLists = (elmnt) => {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != _inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    // 리스너 해제
    const _removeListener = () => {
        if (_inp !== null) {
            console.log(_inp)
            _inp.removeEventListener("input", inputEvent, false);
            _inp.removeEventListener("keydown", keydownEvent, false);
        }
    }
}

export default Autocomplete2;