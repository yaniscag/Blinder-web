const gameForm = document.querySelector('#gameForm');
const playlistIdEntry = document.querySelector('#playlistIdEntry');


gameForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page et donc la réinitialisation des variables
    playlistId = playlistIdEntry.value;

});
