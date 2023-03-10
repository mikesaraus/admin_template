const table=document.getElementById("table-opportunities");new gridjs.Grid({columns:[{id:"tipo",name:"Tipo",width:"100px",formatter:(a,i)=>gridjs.html(`<div class="cell-top-exapandable">${a}</div>`,"div")},{id:"ciudad",name:"Ciudad",width:"80px",formatter:(a,i)=>gridjs.html(`<div class="cell-top-exapandable">${a}</div>`,"div")},{id:"direccion",name:"Direccion",width:"250px",formatter:(a,i)=>gridjs.html(`<div class="cell-top-exapandable">${a}</div>`,"div")},{id:"descripcion",name:"Descripcion",width:"400px",formatter:(a,i)=>gridjs.html(`\n            <div class="cell-top-exapandable p-0">\n            <div class="accordion">\n                <div class="accordion-item">\n                <div class="accordion-header">\n                    <button class="accordion-button fw-medium collapsed bg-light" type="button" data-bs-toggle="collapse" \n                    id="#collapseOne-${i.id}" data-bs-target="#collapseOne-${i.id}" >\n                      <span class="text-ruby">${a}</span>\n                    </button>\n                </div><div id="collapseOne-${i.id}"></div>\n                </div>\n            </div>\n            </div>`,"div")},{id:"estado",name:"Estado",formatter:(a,i)=>gridjs.html(`<div class="cell-top-exapandable">\n                    <span class="badge ${"Borrador"==a?"badge-soft-dark":"Pendiente Revision"==a?"badge-soft-danger":"Pendiente"==a?"badge-soft-warning":"badge-soft-success"}">${a}</span>\n                    </div>`)},{id:"actions",name:"",width:"60px",formatter:(a,i)=>gridjs.html('<div class="text-center cell-top-exapandable p-0">\n                    <div class="dropdown">\n                        <a class="btn btn-transparent btn-sm dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">\n                            <i class="fa fa-bars"></i>\n                        </a>\n                        <ul class="dropdown-menu dropdown-menu-end">\n                            <li><a class="dropdown-item" href="#">\n                                <i class="mdi mdi-square-edit-outline"></i> Editar\n                            </a></li>\n                            <li><a class="dropdown-item" href="#">\n                                <i class="mdi mdi-trash-can-outline"></i> Borrar\n                            </a></li>\n                        </ul>\n                    </div>\n                </div>')}],pagination:{enabled:!0,limit:10,prevButton:!0,nextButtont:!0},sort:!1,fixedHeader:!0,height:"calc(100vh - 350px)",data:[{tipo:"INfree",ciudad:"Madrid",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae orn, Nullam ac tortor vitae purus faucibus orn",estado:"Borrador",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Borrador",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Pendiente Revision",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purusNullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitaefaucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Borrador",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Publicado",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Pendiente",actions:" "},{tipo:"INfree",ciudad:"Madrid",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Borrador",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Borrador",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Pendiente Revision",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Borrador",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Publicado",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Pendiente",actions:" "},{tipo:"INfree",ciudad:"Madrid",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Borrador",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Borrador",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Pendiente Revision",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Borrador",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Publicado",actions:" "},{tipo:"JointVenture",ciudad:"Sevilla",direccion:"Ac sed lacus Enim maecenas eu",descripcion:"Nullam ac tortor vitae purus faucibus orn, Nullam ac tortor vitae purus faucibus orn",estado:"Pendiente",actions:" "}]}).render(table);