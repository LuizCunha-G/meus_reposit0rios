function calculateCost() {
    // Obter os valores inseridos pelo usuário
    let medicineCost = parseFloat(document.getElementById("medicine").value);
    let salesRevenue = parseFloat(document.getElementById("medicine-sales").value);
    let damagedMedicine = parseInt(document.getElementById("damaged-medicine").value);

    // Calcular o custo dos produtos danificados
    let lossPercentage = 0.05;
    let lossPerDamagedMedicine = salesRevenue * lossPercentage;
    let totalLoss;

    if (damagedMedicine > 0) {
        totalLoss = damagedMedicine * lossPerDamagedMedicine;
    } else {
        totalLoss = 0;
    }

    // Calcular o custo total
    let totalCost = medicineCost + totalLoss;

    // Exibir o resultado na página
    let totalCostElement = document.getElementById("totalCost");
    totalCost.innerHTML = `Custo total mensal: R$ ${totalCost.toFixed(2)}`;
}