const axios = require('axios');

const userList = document.getElementById('users-list');
const restList = document.getElementById('restaurants-list');
const reserveList = document.getElementById('reservations-list');

let restaurants = [
    {
      name: "Raos",
      location: [-73.932, 40.7940]
    },
    {
      name: "Masa",
      location: [-73.980, 40.7685]
    },
    {
      name: "Bouley",
      location: [-74.01394, 40.705137]
    },
    {
      name: "Marc Forgione",
      location: [-74.009567, 40.716526]
    },
    {
      name: "Tamarind",
      location: [-74.008929, 40.718977]
    },
    {
      name: "Hop Lee Restaurant",
      location: [-73.998509, 40.71423]
    },
    {
      name: "Jungsik",
      location: [-74.0089, 40.718679]
    },
    {
      name: "The Capital Grille",
      location: [-74.010846, 40.708475]
    },
    {
      name: "Pylos",
      location: [-73.984152, 40.726096]
    },
    {
      name: "Joe's Shanghai",
      location: [-73.997761, 40.714601]
    },
    {
      name: "Cafe Katja",
      location: [-73.990565, 40.717719]
    },
    {
      name: "Rosanjin",
      location: [-74.007724, 40.716403]
    },
    {
      name: "Kittichai",
      location: [-74.003242, 40.724014]
    },
    {
      name: "Bianca Restaurant",
      location: [-73.992662, 40.725495]
    },
    {
      name: "Rayuela",
      location: [-73.989756, 40.721266]
    },
    {
      name: "Mas Farmhouse",
      location: [-74.003875, 40.729269]
    },
    {
      name: "Xe Lua",
      location: [-73.998626, 40.716544]
    }
];

let users, sales;

const renderUser = (users) => {
    let html = `
         ${users.map((user, idx) => `
           <li>
           <a href='#${idx}'>
             ${user.name}
             </a>
           </li>
         `).join('')}
    `
    userList.innerHTML = html;
};

const renderRest = (rests) => {
    let html = `
         ${rests.map((rest) => `
           <li>
             ${rest.name}
           </li>
         `).join('')}
    `
    restList.innerHTML = html;
};

const renderReserve = (reserves) => {
    let html = `
         ${reserves.map((reserve) => `
           <li>
             ${restaurants[reserve.restaurantId - 1].name}
           </li>
         `).join('')}
    `
    reserveList.innerHTML = html;
};

window.addEventListener('hashchange', async() => {
    const userId = window.location.hash.slice(1) * 1;
    const url = `/api/users/${userId}/reservations`;
    reserves = (await axios.get(url)).data;
    renderReserve(reserves);
    renderUser(users);
})

const init = async() => {
    try {
        users = (await axios.get('/api/users')).data;
        rests = (await axios.get('/api/restaurants')).data;
        renderUser(users);
        renderRest(rests);
    }
    catch(ex) {
        console.log(ex);
    }
};

init();