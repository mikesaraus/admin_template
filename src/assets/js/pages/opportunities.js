const table = document.getElementById('table-opportunities');

// Table
new gridjs.Grid({
    columns: [{
            id: 'tipo',
            name: 'Tipo',
            width: '100px',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">${cell}</div>`, 'div')
        },
        {
            id: 'ciudad',
            name: 'Ciudad',
            width: '80px',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">${cell}</div>`, 'div')
        },
        {
            id: 'direccion',
            name: 'Direccion',
            width: '250px',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">${cell}</div>`, 'div')
        },
        {
            id: 'descripcion',
            name: 'Descripcion',
            width: '400px',
            formatter: (cell, row) => gridjs.html(`
            <div class="cell-top-exapandable p-0">
            <div class="accordion">
                <div class="accordion-item">
                <div class="accordion-header">
                    <button class="accordion-button fw-medium collapsed bg-light" type="button" data-bs-toggle="collapse" 
                    id="#collapseOne-${row.id}" data-bs-target="#collapseOne-${row.id}" >
                      <span class="text-ruby">${cell}</span>
                    </button>
                </div><div id="collapseOne-${row.id}"></div>
                </div>
            </div>
            </div>`, 'div')
        },
        {
            id: 'estado',
            name: 'Estado',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">
                    <span class="badge ${
                        cell == 'Borrador' ? 'badge-soft-dark' :
                        cell == 'Pendiente Revision'  ? 'badge-soft-danger' :
                        cell == 'Pendiente' ? 'badge-soft-warning' :
                        'badge-soft-success'
                    }">${cell}</span>
                    </div>`)
        },
        {
            id: 'actions',
            name: '',
            width: '60px',
            formatter: (cell, row) => gridjs.html(`<div class="text-center cell-top-exapandable p-0">
                    <div class="dropdown">
                        <a class="btn btn-transparent btn-sm dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                            <i class="fa fa-bars"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">
                                <i class="mdi mdi-square-edit-outline"></i> Editar
                            </a></li>
                            <li><a class="dropdown-item" href="#">
                                <i class="mdi mdi-trash-can-outline"></i> Borrar
                            </a></li>
                        </ul>
                    </div>
                </div>`)
        },
    ],
    pagination: {
        enabled: true,
        limit: 10,
        prevButton: true,
        nextButtont: true,

    },
    sort: false,
    fixedHeader: true,
    height: 'calc(100vh - 350px)',
    data: [
        { tipo: 'INfree', ciudad: 'Madrid', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Borrador', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Borrador', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Pendiente Revision', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purusNullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitaefaucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Borrador', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Publicado', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Pendiente', actions: ' ' },
        { tipo: 'INfree', ciudad: 'Madrid', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Borrador', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Borrador', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Pendiente Revision', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Borrador', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Publicado', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Pendiente', actions: ' ' },
        { tipo: 'INfree', ciudad: 'Madrid', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Borrador', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Borrador', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Pendiente Revision', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Borrador', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Publicado', actions: ' ' },
        { tipo: 'JointVenture', ciudad: 'Sevilla', direccion: 'Ac sed lacus Enim maecenas eu', descripcion: 'Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn', estado: 'Pendiente', actions: ' ' },
    ],
}).render(table);

// const pagination = table.querySelector('.gridjs-pagination');
// const pagination_previous = pagination.querySelector('button[title="Previous"]');
// const pagination_next = pagination.querySelector('button[title="Next"]');
// pagination_previous.innerText = '';
// pagination_previous.innerHTML = `<i class='bx bx-chevron-left'></i>`;
// pagination_next.innerText = '';
// pagination_next.innerHTML = `<i class='bx bx-chevron-right'></i>`;