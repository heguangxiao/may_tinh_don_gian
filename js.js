function xoadulieu(){
    document.getElementById('inputNumber').value = '0';
    maytinh = 0;
    bien1 = 0;
    bien2 = 0;
    flagB = 0;
};

let bien1 = 0;
let bien2 = 0;
let maytinh = 0;
let flagB = 0;

function inputNumber(bien) {
    bbien  = document.getElementById('inputNumber').value;
    if(flagB == 0){
        if ( bien1 == '0'){
            bien1 = '' + bien;
        } else {
            bien1 = bien1 + bien;
        }
        document.getElementById('inputNumber').value = bien1;
    } else {
        if ( bien2 == '0'){
            bien2 = '' + bien;
        } else {
            bien2 = bien2 + bien;
        }
        document.getElementById('inputNumber').value = bien2;
    }
}

function inputDau(flagAAA) {
    if (flagB!=0){
        tinhtoan();
        flagB = 0;
    }

    if (maytinh==0){
        document.getElementById('inputNumber').value = bien1;
    } else {
        bien2 = 0;
        document.getElementById('inputNumber').value = maytinh;
    }

    flagB = parseInt(flagAAA);
}

function tinhtoan() {

    if(maytinh!=0){
        document.getElementById('inputNumber').value = maytinh;
    }

    let bin1 = parseInt(bien1);
    let bin2 = parseInt(bien2);

    switch (flagB) {
        case 0:
            maytinh = 0;
            break;
        case 1:
            maytinh = bin1 + bin2;
            break;
        case 2:
            maytinh = bin1 - bin2;
            break;
        case 3:
            maytinh = bin1 * bin2;
            break;
        case 4:
            maytinh = bin1 / bin2;
            break;
        default:
            break;
    }
    document.getElementById('inputNumber').value = maytinh;
    bien1 = ''+maytinh;
    bien2 = 0;
    flagB = 0;
}