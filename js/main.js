function addNewRow(){
    let table = document.getElementById("table");
    let row = table.insertRow(0);

    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(2);
    let cell5 = row.insertCell(2);
    let cell6 = row.insertCell(2);
    let cell7 = row.insertCell(2);




    let inputItem1 = document.createElement('input');
    let inputItem2 = document.createElement('input');
    let inputItem3 = document.createElement('input');
    let inputItem4 = document.createElement('input');
    let inputItem5 = document.createElement('input');
    let inputItem6 = document.createElement('input');
    let inputItem7 = document.createElement('input');

    cell1.appendChild(inputItem1);
    cell2.appendChild(inputItem2);
    cell3.appendChild(inputItem3);
    cell4.appendChild(inputItem4);
    cell5.appendChild(inputItem5);
    cell6.appendChild(inputItem6);
    cell7.appendChild(inputItem7);

}

function dublicateObj(){
    let itm = document.getElementById("trr").lastChild;
    let cln = itm.cloneNode(true);

}