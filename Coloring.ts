


function coloring(color: string[]) {

    let time = 0;
    let temp = " ";
    for (let i = 0; i < color.length; i++ ){

        if (i = 0){
            time = time + 2;
            temp = color[i];
        }
        else {
            if (temp == color[i]) {
                time = time + 2
                temp = color[i]
            }

            else {
                time = time + 3;
                temp = color[i]
            }
            


        }

    }

    return time;
}
