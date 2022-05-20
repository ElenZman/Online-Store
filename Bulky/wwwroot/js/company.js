﻿var dataTable;
$(document).ready(function (){
    loadDataTable();
});

function loadDataTable(){
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/Company/GetAll"
        },
        "columns": [
            { "data": "name", "width": "15%" },
            { "data": "streetAddress", "width": "15%" },
            { "data": "city", "width": "15%" },
            { "data": "state", "width": "15%" },
            { "data": "phoneNumber", "width": "15%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                    <div class="w-75 btn-group" role="group">
                    <a href="/Admin/Company/Upsert?id=${data}"
                       class="btn btn-primary btn-sm mx-2">&nbsp;<i class="bi bi-pencil-square"></i>Edit</a>
                    <a onClick=Delete('/Admin/Company/Delete/${data}')
                     class="btn btn-danger btn-sm mx-2">&nbsp;<i class="bi bi-trash"></i>Delete</a>
                     </div>
                     `
                },
                "width": "20%"
            }
         ]
    });
}
function Delete(url) {
    Swal.fire({
        title: 'Areyou sure?',
        text: "You won't be able to revirt this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (data) {
                    if (data.success) {
                        dataTable.ajax.reload();
                        toastr.success(data.message);
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    })
}