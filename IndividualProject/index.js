//let sportsdata = [];
async function loadData(/*sportsdata*/) {
    /*try {
        let response = await fetch("./sport-poll.json");
        let data = await response.json();
        console.log(data);
        //data = id + " " + name + " " ;
        //document.getElementById("json").innerHTML = json.map();
        //sportsdata = data[0].id + " (" + data[0].objectId + ") || " + data[0].name + " || " + data[0].country + " || " + data[0].sport + " || " + data[0].group + " || HOME: " + data[0].homeName + ", AWAY: " + data[0].awayName + " || " + data[0].state;
        sportsdata = data;
    } catch (error) {
        console.log("JSON laddas inte!");
        return;
    }*/
    fetch("./sport-poll.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //sportsdata = data;
        const sportsTable = document.getElementById("sportsDB");

        //sportsdata.forEach(tableData => {
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
    });
    //document.getElementById("sportsDB").hidden = true;
/*
*/
}

loadData();

function filterToSport() {
    fetch("./sport-poll.json")
    .then(response => response.json())
    .then(data => {
        let filterSport = prompt("What sport do you want to filter to? (Snooker, football, tennis...)").toUpperCase().trim();
        let filteredtableData = data;
        const FilteredTable = document.getElementById("otherTableDB");
        data.forEach(filteredtableData => {
            if (filteredtableData.sport != filterSport) {
                console.log("Item's sport doesn't match, skipping...");
                return;
            }
            const filteredTableRow = document.createElement("tr");

          filteredTableRow.innerHTML = `
                <td>${filteredtableData.id} (${filteredtableData.objectId})</td>
                <!-- <td>${filteredtableData.name}</td> -->
                <td>${filteredtableData.createdAt}</td>
                <td>${filteredtableData.country}</td>
                <td>${filteredtableData.sport}</td>
                <td>${filteredtableData.group}</td>
                <td>${filteredtableData.homeName}</td>
                <td>${filteredtableData.awayName}</td>
                <td>${filteredtableData.state}</td>
            `;

        });
        //filteredtableData = filteredtableData.filter(checkSport);
        console.log(filteredtableData);
        console.dir(otherTableDB);


        //const OtherTableHeader = createElement("thead");
        //const OtherTableRow = createElement("tr");
        //const OtherTableDB = createElement("tbody");

        document.getElementById("otherTable").hidden = false;
    });
}
function checkSport(filterSport) {
    return sport == filterSport;
}