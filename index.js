add = document.getElementById("add");

let update = function () {
    var tt = document.getElementById("title").value;
    var dd = document.getElementById("description").value;

    // updating local storage   
    if (localStorage.getItem('list') == null) {
        console.log("updating list");
        list_arr = [];
        if (dd != "" && tt != "") {
            list_arr.push([tt, dd]);
            localStorage.setItem('list', JSON.stringify(list_arr));
        }

    }
    else {
        liststr = localStorage.getItem('list');
        list_arr = JSON.parse(liststr);
        if (dd != "" && tt != "") {
            list_arr.push([tt, dd]);
            localStorage.setItem('list', JSON.stringify(list_arr));
        }
    }

    // updating list
    table_body = document.getElementById("bd");
    let str = "";
    list_arr.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-primary" id="del" onclick="del(${index})">Delete</button></td>
        </tr>
        `;
    });
    table_body.innerHTML = str;
    ;
}
update();
// activate add to list buttun
add.addEventListener("click", update);

// deleting list row

let del = function (item) {
    
    console.log("deleting " + item)
    liststr = localStorage.getItem('list');
    list_arr = JSON.parse(liststr);
    list_arr.splice(item, 1);
    localStorage.setItem('list', JSON.stringify(list_arr));

    location.reload();
    
}

// reset buttun

let reset = function(){
    if( confirm("Are You Sure To Reset The List?"))
   
    localStorage.clear();
    location.reload();
   // update();
}
