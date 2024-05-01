const urlAllCountries = 'http://universities.hipolabs.com/search';
let urlCountry = '';
const countrySelect = document.getElementById('countrySelect');
const universitySelect = document.getElementById('universitySelect');
const chooseCountryBtn = document.getElementById('chooseCountryBtn');
const chooseUniversityBtn = document.getElementById('chooseUniversityBtn');
const universityInfoBlock = document.getElementById('universityInfo');
let universitiesData = [];

const populateCountryDropdown = async () => {
    try {
        const response = await fetch(urlAllCountries);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const uniqueCountriesSet = new Set();
        data.forEach(entry => uniqueCountriesSet.add(entry.country));

        // Konvertiere das Set wieder in ein Array und sortiere es alphabetisch
        const uniqueCountries = Array.from(uniqueCountriesSet).sort();

        // Füge jede eindeutige Länderoption zur Dropdown-Liste hinzu
        uniqueCountries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });
    } catch (error) {
        console.log(error.message);
    }
};

const getUniversitiesData = async () => {
    try {
        const response = await fetch(urlCountry);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

function showUniversities(data) {
    // Vorherige Daten löschen
    universitySelect.innerHTML = '';
    universityInfoBlock.style.display = 'block'; // Universitätsinfo anzeigen

    data.sort((a, b) => a.name.localeCompare(b.name));

    // Erstelle eine leere Option als Platzhalter
    const placeholderOption = document.createElement('option');
    placeholderOption.textContent = 'Select a university';
    universitySelect.appendChild(placeholderOption);

    // Füge jede Universität als Option zur Dropdown-Liste hinzu
    data.forEach(university => {
        const option = document.createElement('option');
        option.value = university.name;
        option.textContent = university.name;
        universitySelect.appendChild(option);
    });

    // Speichere die Universitätsdaten in der globalen Variable
    universitiesData = data;
}

function chooseCountry() {
    chooseCountryBtn.addEventListener('click', async () => {
        // Aktualisierung der URL für das ausgewählte Land
        const selectedCountry = countrySelect.value;
        urlCountry = `http://universities.hipolabs.com/search?country=${selectedCountry}`;

        // Abrufen der Universitätsdaten für das ausgewählte Land
        const universitiesData = await getUniversitiesData();

        showUniversities(universitiesData);
    });
}

function chooseUniversity() {
    chooseUniversityBtn.addEventListener('click', () => {
        const selectedUniversityName = universitySelect.value;
        const selectedUniversityData = universitiesData.find(university => university.name === selectedUniversityName);

        if (selectedUniversityData) {

            universityInfoBlock.innerHTML = `
                <p>Name:  ${selectedUniversityData.name}</p>
                <p>Country:  ${selectedUniversityData.country}</p>
                <p>State/Province:  ${selectedUniversityData['state-province'] || 'N/A'}</p>
                <p>Domains:  ${selectedUniversityData.domains.join(', ')}</p>
                <p>Website:  <a href="${selectedUniversityData.web_pages[0]}">${selectedUniversityData.web_pages[0]}</a></p>
            `;
        } else {
            universityInfoBlock.textContent = "University information not available.";
        }
    });
}

function resetSelections() {
    countrySelect.selectedIndex = 0; // Auswahl für Land zurücksetzen
    universitySelect.innerHTML = ''; // Auswahl für Universität zurücksetzen
    universityInfoBlock.innerHTML = ''; // Universitätsinformationen löschen
    universityInfoBlock.style.display = 'none'; // Block für Universitätsinformationen ausblenden
}

const resetSelectionBtn = document.getElementById('resetSelectionBtn');
resetSelectionBtn.addEventListener('click', resetSelections);

populateCountryDropdown();
chooseCountry();
chooseUniversity();

