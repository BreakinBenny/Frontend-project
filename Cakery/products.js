/*
function showCupcakeProps() {
    document.getElementById("cupcakeprops").hidden = false;
}
function hideCupcakeProps() {
    document.getElementById("cupcakeprops").hidden = true;
}

function showWeddingCakeProps() {
    document.getElementById("weddingcakeprops").hidden = false;
}
function hideWeddingCakeProps() {
    document.getElementById("weddingcakeprops").hidden = true;
}
*/

function startWebsite() {
    const cupcake1 = document.getElementById("firstcupcake");
    const weddingcake1 = document.getElementById("firstweddingcake");
    //const weddingcake = document.getElementById("weddingcakeitem");

    //firstcupcake.forEach(giveprice => {
        // Should loop for each item, but preferably not cupcakes and
        // wedding cakes at the same time in forEach!
        const cupcakepriceRow = document.createElement("p");
        const weddingcakepriceRow = document.createElement("p");
        let priceValue = Math.floor(Math.random() * 101);

        cupcakepriceRow.innerHTML = `
            <p>Price: ${priceValue} SEK</p>
        `;
        cupcake1.appendChild(cupcakepriceRow);

        priceValue = Math.floor(Math.random() * 101);
        weddingcakepriceRow.innerHTML = `
            <p>Price: ${priceValue} SEK</p>
        `;
        weddingcake1.appendChild(weddingcakepriceRow);

        /*
        data.forEach(tableData => {
            const sportsTableRow = document.createElement("tr");

            sportsTableRow.innerHTML = `
                <td>${tableData.id} (${tableData.objectId})</td>
               <!-- <td>${tableData.name}</td> -->
                <td>${tableData.createdAt}</td>
                <td>${tableData.country}</td>
                <td>${tableData.sport}</td>
                <td>${tableData.group}</td>
                <td>${tableData.homeName}</td>
                <td>${tableData.awayName}</td>
                <td>${tableData.state}</td>
            `;

            sportsTable.appendChild(sportsTableRow);
        });
        */

    //});

    
}

startWebsite();
