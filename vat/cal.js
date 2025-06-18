function calculate() {
    const p = $("#basePrice").val();
    console.log("Base Price",p)
    const vatRate = 7;
    const vat = (p * vatRate) / 100;
    console.log("VAT", vat);
    const total = parseFloat(p) + vat;
    console.log("Total Price", total);
    
    $("#result").html(`
        <p>Base Price: ${p}</p>
        <p>VAT (7%): ${vat.toFixed(2)}</p>
        <p>Total Price: ${total.toFixed(2)}</p>
    `);

}

function reverse_calculate(){
    const p = $("#totalPrice").val();
    console.log("Total Price", p)
    const vatRate = 7;
    const vat = (p * vatRate) / (100 + vatRate);
    console.log("VAT", vat)
    const baseprice = parseFloat(p) - vat;
    console.log("Base Price", baseprice);

    $("#result2").html(`
        <p>Base Price: ${baseprice.toFixed(2)}</p>
        <p>VAT (7%): ${vat.toFixed(2)}</p>
        <p>Total Price: ${p}</p>
    `);
}