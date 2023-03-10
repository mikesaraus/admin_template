const table = document.getElementById('table-mis-opportunities');

// Table
new gridjs.Grid({
    columns: [{
            id: 'title1',
            name: 'Title',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">${cell}</div>`, 'div')
        },
        {
            id: 'title2',
            name: 'Title',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">${cell}</div>`, 'div')
        },
        {
            id: 'title3',
            name: 'Title',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">${cell}</div>`, 'div')
        },
        {
            id: 'title4',
            name: 'Title',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">${cell}</div>`, 'div')
        },
        {
            id: 'title6',
            name: 'Title',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">${cell}</div>`, 'div')
        },
        {
            id: 'title6',
            name: 'Title',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable">${cell}</div>`, 'div')
        },
        {
            id: 'actions',
            name: 'Actions',
            formatter: (cell, row) => gridjs.html(`<div class="cell-top-exapandable p-0">
                        <a class="btn btn-transparent btn-sm p-1" href="#" role="button">
                            <i class="mdi mdi-shape-square-plus h5"></i>
                        </a>
                        <a class="btn btn-transparent btn-sm p-1" href="#" role="button">
                            <i class="mdi mdi-square-edit-outline h5"></i>
                        </a>
                        <a class="btn btn-transparent btn-sm p-1" href="#" role="button">
                            <i class="mdi mdi-cloud-download-outline h5"></i>
                        </a>
                        <a class="btn btn-transparent btn-sm p-1" href="#" role="button">
                            <i class="mdi mdi-trash-can-outline h5"></i>
                        </a>
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
        { title1: "Nibh platea elit aliquet", title2: "Nibh platea elit aliquet", title3: "Quam", title4: "Rhoncus", title5: "A", title6: "Tincidunt", actions: null },
        { title1: "Consequat consectetur", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Aenean ut", title2: "Nibh platea elit aliquet", title3: "Askp", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Aenean ut", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Tincidunt", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Aenean ut", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Aenean ut", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Tincidunt", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Consequat consectetur", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Nibh platea elit aliquet", title2: "Nibh platea elit aliquet", title3: "Quam", title4: "Rhoncus", title5: "A", title6: "Tincidunt", actions: null },
        { title1: "Consequat consectetur", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Aenean ut", title2: "Nibh platea elit aliquet", title3: "Askp", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Aenean ut", title2: "Nibh platea elit aliquet", title3: "Askp", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Aenean ut", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Tincidunt", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Aenean ut", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Aenean ut", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Tincidunt", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Consequat consectetur", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
        { title1: "Nibh platea elit aliquet", title2: "Nibh platea elit aliquet", title3: "Quam", title4: "Rhoncus", title5: "A", title6: "Tincidunt", actions: null },
        { title1: "Consequat consectetur", title2: "Nibh platea elit aliquet", title3: "Nibh platea elit aliquet", title4: "Nibh platea elit aliquet", title5: "Nibh platea elit aliquet", title6: "Nibh platea elit aliquet", actions: null },
    ],
}).render(table);