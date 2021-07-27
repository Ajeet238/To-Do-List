add = document.getElementById("add");

let update = function () {
    tt = document.getElementById("title").value;
    dd = document.getElementById("description").value;
    if (localStorage.getItem('list') == null) {
        console.log("updating list");
        list_arr = [];
        list_arr.push([tt, dd]);
        localStorage.setItem('list', JSON.stringify(list_arr));
    }
    else {
        liststr = localStorage.getItem('list');
        list_arr = JSON.parse(liststr);
        list_arr.push([tt, dd]);
        localStorage.setItem('list', JSON.stringify(list_arr));
    }


    table_body = document.getElementById("bd");
    let str = "";
    list_arr.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary" id="del">Delete</button></td>
        </tr>
        `;
    });
    table_body.innerHTML = str;
;}


add.addEventListener("click", update);
