let block = document.getElementById('col');

        // создать
        const Red = () => {
            block.style.backgroundColor = "red";
            block.style.boxShadow = "0 0 15px 5px red"
        }
        const Blue = () => {
            block.style.backgroundColor = "blue";
            block.style.boxShadow = "0 0 15px 5px blue"
        }
        const Green = () => {
            block.style.backgroundColor = "green";
            block.style.boxShadow = "0 0 15px 5px green"
        }
        const Yellow = () => {
            block.style.backgroundColor = "yellow";
            block.style.boxShadow = "0 0 15px 5px yellow"
        }
        const Brown = () => {
            block.style.backgroundColor =  "chocolate";
            block.style.boxShadow = "0 0 15px 5px chocolate"
        }
        const Pink = () => {
            block.style.backgroundColor =  "pink";
            block.style.boxShadow = "0 0 15px 5px pink"
        }
        const Black = () => {
            block.style.backgroundColor =  "black";
            block.style.boxShadow = "0 0 15px 5px black";
            block.style.color = "white";
        }


        // вывод
        const red = () => {
            block.addEventListener('click', Red());
        }
        const blue = () => {
            block.addEventListener('click', Blue());
        }
        const green = () => {
            block.addEventListener('click', Green());
        }
        const yellow = () => {
            block.addEventListener('click', Yellow());
        }
        const brown = () => {
            block.addEventListener('click', Brown());
        }
        const pink = () => {
            block.addEventListener('click', Pink());
        }
        const black = () => {
            block.addEventListener('click', Black());
        }