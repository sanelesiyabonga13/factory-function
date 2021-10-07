function cart() {
    let smallQty = 0;
    let medQty = 0;
    let largeQty = 0;

    let smallCost = 0;
    let medCost = 0;
    let largeCost = 0;
    let totalCart = 0;

    function btnClickff(event) {
        if (event === "smallAdd") {
            smallQty++;
        } else if (event === "medAdd") {
            medQty++;
        } else if (event === "largeAdd") {
            largeQty++;
        }

        if (event === "smallMin") {
            smallQty--;
            if (smallQty < 0) {
                smallQty = 0;
            }
        } else if (event === "medMin") {
            medQty--;
            if (medQty < 0) {
                medQty = 0;
            }
        } else if (event === "largeMin") {
            largeQty--;
            if (largeQty < 0) {
                largeQty = 0;
            }
        }
    }

    function qtyUpdate() {
        return {
            smallQty,
            medQty,
            largeQty
        }
    }

    function priceUpdate() {
        smallCost = (smallQty * 59).toFixed(2);
        medCost = (medQty * 79).toFixed(2);
        largeCost = (largeQty * 139).toFixed(2);
        totalCart = (smallQty * 59.00 + medQty * 79.00 + largeQty * 139.00).toFixed(2);

        return {
            smallCost,
            medCost,
            largeCost,
            totalCart
        }
    }

    function change(amt) {
        return (amt - totalCart).toFixed(2);
    }

    function resetCart() {
        smallQty = 0;
        medQty = 0;
        largeQty = 0;
        smallCost = 0;
        medCost = 0;
        largeCost = 0;
        totalCart = 0;

        return {
            smallQty,
            medQty,
            largeQty,
            smallCost,
            medCost,
            largeCost,
            totalCart,
        }
    }

    return {
        btnClickff,
        qtyUpdate,
        priceUpdate,
        change,
        resetCart,
    }


}