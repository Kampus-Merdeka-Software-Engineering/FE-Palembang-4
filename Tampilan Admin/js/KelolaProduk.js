const table = document.getElementById('dataTable');
const showEntriesInput = document.getElementById('showEntries');
const searchInput = document.getElementById('searchInput');
const currentPageDisplay = document.getElementById('currentPage');

const data = [
  {
    no: 1,
    image: 'img/Flannel.png',
    name: 'Flannel Shirt',
    category: 'Clothes',
    price: 'Rp100.000'
  },
  {
    no: 2,
    image: 'img/Turtleneck.png',
    name: 'Turtle Neck',
    category: 'Clothes',
    price: 'Rp50.000'
  },
  {
    no: 3,
    image: 'img/Cardingan.png',
    name: 'Cardingan',
    category: 'Clothes',
    price: 'Rp500.000'
  },
  {
    no: 4,
    image: 'img/blouse.png',
    name: 'Blouse',
    category: 'Clothes',
    price: 'Rp80.000'
  },
  {
    no: 5,
    image: 'img/fleece.png',
    name: 'Fleece',
    category: 'Clothes',
    price: 'Rp150.000'
  },
  {
    no: 6,
    image: 'img/pullover.png',
    name: 'Pullover Sweat',
    category: 'Clothes',
    price: 'Rp400.000'
  },
  {
    no: 7,
    image: 'img/Baggy-Jeans.png',
    name: 'Baggy Jeans',
    category: 'Jeans',
    price: 'Rp200.000'
  },
  {
    no: 8,
    image: 'img/Classic-Fit.png',
    name: 'Classicfit',
    category: 'Clothes',
    price: 'Rp4250.000'
  },
  {
    no: 9,
    image: 'img/slimfit-Jeans.png',
    name: 'Slimfit Jeans',
    category: 'Jeans',
    price: 'Rp200.000'
  },
  {
    no: 10,
    image: 'img/skinny.png',
    name: 'Skinny Jeans',
    category: 'Jeans',
    price: 'Rp230.000'
  },
  {
    no: 11,
    image: 'img/boyfriend.png',
    name: 'Boyfriend',
    category: 'Jeans',
    price: 'Rp280.000'
  },
  {
    no: 12,
    image: 'img/straight.png',
    name: 'straight Jeans',
    category: 'Jeans',
    price: 'Rp120.000'
  },
];


let currentPage = 1;
let entriesPerPage = 5; // Default entries per page
function populateTableSearch() {
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, dataToShow.length);
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';
  if(dataToShow.length !== 0){
    for (let i = startIndex; i < endIndex; i++) {
      const rowData = dataToShow[i];
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${rowData.no}</td>
      <td><img src="${rowData.image}" alt="Product Image"/></td>
      <td>${rowData.name}</td>
      <td>${rowData.category}</td>
      <td>${rowData.price}</td>
      `;
      tbody.appendChild(row);
    }
  }else{
    const row = document.createElement('tr');
    row.innerHTML = `
      <td colspan="5">Data Tidak Ditemukan</td>
    `;
    tbody.appendChild(row);
  }

  currentPageDisplay.textContent = currentPage;
}


function populateTable() {
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, data.length);
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';
  for (let i = startIndex; i < endIndex; i++) {
    const rowData = data[i];
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${rowData.no}</td>
    <td><img src="${rowData.image}" alt="Product Image"/></td>
    <td>${rowData.name}</td>
    <td>${rowData.category}</td>
    <td>${rowData.price}</td>
    `;
    tbody.appendChild(row);
  }
 
  currentPageDisplay.textContent = currentPage;
}

function updateTable() {
  entriesPerPage = parseInt(showEntriesInput.value) || 10;
  currentPage = 1;
  populateTable();
}

function nextPage() {
  const maxPage = Math.ceil(data.length / entriesPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    populateTable();
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    populateTable();
  }
}

function searchTable() {
    const searchValue = searchInput.value.toLowerCase();

    const filteredData = data.filter(item => {
      // Ubah pencarian agar mencakup semua kolom
      for (const prop in item) {
        if (item[prop].toString().toLowerCase().includes(searchValue)) {
          return true;
        }
      }
      return false;
    });

    currentPage = 1;
    console.log('Filtered Data:', filteredData);
    dataToShow = filteredData;  // Update dataToShow dengan hasil pencarian
    populateTableSearch();  // Panggil populateTable untuk menampilkan hasil pencarian
  }


// Initialize the table
populateTable();

// Event listeners
showEntriesInput.addEventListener('input', updateTable);
searchInput.addEventListener('input', searchTable);