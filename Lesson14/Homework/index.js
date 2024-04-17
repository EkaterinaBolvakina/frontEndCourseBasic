function clickExploreBtn() {
    const btn = document.getElementById('btn-exploreId');

    btn.addEventListener('click', () => {

        const object = {
            name: 'MOON256 - XM',
            manufacturer: 'Reflex Aerospace',
            crew: {
                numberOfPerson: 7,
                namesOfPerson: ['Captain Cook', 'Bail Nightwrecker', 'Giles Daywar', 'Vrad Waterdiver', 'Tatooine', 'Endor', 'Dagobah'],
            },
            maxSpeed: '586,800 km/h',
        };

        const name = document.getElementById('divNameId');
        name.innerText = object.name;

        const manufacturer = document.getElementById('divManufacturerId');
        manufacturer.innerText = object.manufacturer;

        const maxSpeed = document.getElementById('divMaxSpeedId');
        maxSpeed.innerText = object.maxSpeed;

        const crew = document.getElementById('divCrewId');
        const personNames = object.crew.namesOfPerson;
        for (let i = 0; i < personNames.length; i++) {
            const personDiv = document.createElement('div');
            personDiv.innerText = personNames[i];
            crew.appendChild(personDiv);
        }

        btn.style.display = 'none'; // Verstecke den Button
        document.querySelector('.info-wrapper').style.display = 'block'; // Zeige die Infowrapper an
    })
}
clickExploreBtn();

function clickHideBtn() {
    const btn = document.getElementById('btn-hideId');

    btn.addEventListener('click', () => {
        document.querySelector('.manufacturerDiv').style.visibility = 'hidden';
    });
}
clickHideBtn();

