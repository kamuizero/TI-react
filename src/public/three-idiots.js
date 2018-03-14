const threeIdiots = (value) => {

    let valor = 'smart';
    let isDivisibleByThree, containsThree = false;

    if (value % 3 === 0) {
        isDivisibleByThree = true;
    }

    if (containsThree.toString().includes("3")) {
        containsThree = true;
    }

    if (isDivisibleByThree && containsThree) {
        valor = 'dumb';
    } else if (isDivisibleByThree) {
        valor = 'idiot';
    } else if (containsThree) {
        valor = 'stupid';
    }

    return valor;
};

export default threeIdiots;