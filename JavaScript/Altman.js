function calculateZ() {
    let totalCapital = parseFloat(document.getElementById("totalCapital").value);
    let fixedAssets = parseFloat(document.getElementById("fixedAssets").value);
    let totalCurrentAssets = parseFloat(document.getElementById("totalCurrentAssets").value);
    let profitBeforeInterest = parseFloat(document.getElementById("profitBeforeInterest").value);
    let longTermLiabilities = parseFloat(document.getElementById("longTermLiabilities").value);
    let totalLiabilities = parseFloat(document.getElementById("totalLiabilities").value);
    let salesRevenue = parseFloat(document.getElementById("salesRevenue").value);
    
    if (isNaN(totalCapital) || isNaN(fixedAssets) || isNaN(totalCurrentAssets) || isNaN(profitBeforeInterest) || 
        isNaN(longTermLiabilities) || isNaN(totalLiabilities) || isNaN(salesRevenue)) {
        document.getElementById("result").innerText = "Please enter valid numbers in all fields.";
        return;
    }
    
    let x1 = totalCapital / totalCurrentAssets;
    let x2 = fixedAssets / totalCurrentAssets;
    let x3 = profitBeforeInterest / totalCapital;
    let x4 = longTermLiabilities / totalLiabilities;
    let x5 = salesRevenue / totalCapital;
    let z = (1.2 * x1) + (1.4 * x2) + (3.3 * x3) + (0.6 * x4) + (0.999 * x5);
    
    let message = "";
    if (z >= 2.99) {
        message = "The company is performing well and is unlikely to go bankrupt.";
    } else if (z < 2.99 && z > 1.81) {
        message = "The company is in the gray area.";
    } else {
        message = "The company is at risk of financial distress.";
    }
    
    document.getElementById("result").innerText = "Z-score: " + z.toFixed(2) + "\n" + message;
}