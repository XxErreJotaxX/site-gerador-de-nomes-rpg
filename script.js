document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const saveButton = document.getElementById('saveButton');
    const clearButton = document.getElementById('clearButton');
    const generatedName = document.getElementById('generatedName');
    const savedNames = document.getElementById('savedNames');
    const nameCategory = document.getElementById('nameCategory');

    const names = {
        characters: ['Aragorn', 'Gandalf', 'Legolas', 'Gimli', 'Frodo'],
        cities: ['Minas Tirith', 'Gondor', 'Rohan', 'Hobbiton', 'Mordor'],
        weapons: ['Andúril','Sting', 'Glamdring', 'Orcrist', 'Gúthwinë'],
    };

    function getRandomName(category) {
        const nameList = names[category];
        const randomIndex = Math.floor(Math.random() * nameList.length);
        return nameList[randomIndex];
    }

    generateButton.addEventListener('click', () => {
        const selectedCategory = nameCategory.value;
        const name = getRandomName(selectedCategory);
        generatedName.textContent = name;
    });

    saveButton.addEventListener('click', () => {
        const name = generatedName.textContent;
        if (name) {
            const listItem = document.createElement('li');
            listItem.textContent = name;
            savedNames.appendChild(listItem);
        }
    });

    clearButton.addEventListener('click', () => {
        savedNames.innerHTML = ''; // Limpa a lista de nomes salvos
    });
});
