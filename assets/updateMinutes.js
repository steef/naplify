function updateMinutes() {
    const inputInMinutes = document.getElementById('inputInMinutes').value;
    const displayInMinutes = document.getElementById('displayInMinutes');

    displayInMinutes.innerText = `${inputInMinutes} minutes`;
}

window.updateMinutes = updateMinutes;
