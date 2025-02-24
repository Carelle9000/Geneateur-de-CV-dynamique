    document.getElementById("cvForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const age = document.getElementById("age").value.trim();
    const sexe = document.getElementById("gender").value.trim();
    const poste = document.getElementById("poste").value.trim();
    const situation = document.getElementById("situation").value.trim();
    const descrition = document.getElementById("descritpion").value.trim();
    const email = document.getElementById("email").value.trim();
    const adresse = document.getElementById("adresse").value.trim();
    const telephone= document.getElementById("telephone").value.trim();
    const Nentreprise = document.getElementById("Nentreprise").value.trim();
    const posteocc = document.getElementById("posteocc").value.trim();
    const duree = document.getElementById("duree").value.trim();
    const mission = document.getElementById("mission").value.trim();
    const diplome = document.getElementById("diplome").value.trim();
    const Etablissement = document.getElementById("Etablissement").value.trim();
    const anneeob = document.getElementById("anneeob").value.trim();
    const competence = document.getElementById("competence").value.trim();
    const niveauc = document.getElementById("niveauc").value.trim();
    const loisir = document.getElementById("loisir").value.trim();
    const passion = document.getElementById("passion").value.trim();
    const NomR = document.getElementById("nomR").value.trim();
    const posteR = document.getElementById("posteR").value.trim();
    const ContactR = document.getElementById("conctactR").value.trim();
    const langue = document.getElementById("langue").value.trim();
    const niveaulangue = document.getElementById("niveaulangue").value.trim();
    const cvOutput = document.getElementById("cvOutput");
    cvOutput.innerHTML = `
    ///////////////////////////
    ///////////////////////////    
    //////////////////////////
    /////////////////////////
            ////////////////
            ///////////////
    `;
});

//Téléchargement du CV
function exporterCV() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(document.getElementById("cvOutput").innerText, 10, 10);
    doc.save('cv.pdf');
    console.log("Exportation du CV en cours...");
}
document.getElementById("exportButton").addEventListener("click", exporterCV);


//Remplissage des informations du cv avec les données du formulaire
document.getElementById('cvForm').addEventListener('input', function() {
    document.getElementById('nom').textContent = document.getElementById('nom').value;
    document.getElementById('age').textContent = document.getElementById('age').value;
    document.getElementById('gender').textContent = document.getElementById('gender').value;
    document.getElementById('poste').textContent = document.getElementById('poste').value;
    document.getElementById('situation').textContent = document.getElementById('situation').value;
    document.getElementById('description').textContent = document.getElementById('description').value;
    document.getElementById('email').textContent = document.getElementById('email').value;

});
  

//Fonction de vérification de remplissage des champs
function validateForm() {
    
    const nom = document.getElementById("nom").value.trim();
    const age = document.getElementById("age").value.trim();
    const sexe = document.getElementById("gender").value.trim();
    const poste = document.getElementById("poste").value.trim();
    const situation = document.getElementById("situation").value.trim();
    const descrition = document.getElementById("descritpion").value.trim();
    const email = document.getElementById("email").value.trim();
    const adresse = document.getElementById("adresse").value.trim();
    const telephone= document.getElementById("telephone").value.trim();
    const Nentreprise = document.getElementById("Nentreprise").value.trim();
    const posteocc = document.getElementById("posteocc").value.trim();
    const duree = document.getElementById("duree").value.trim();
    const mission = document.getElementById("mission").value.trim();
    const diplome = document.getElementById("diplome").value.trim();
    const Etablissement = document.getElementById("Etablissement").value.trim();
    const anneeob = document.getElementById("anneeob").value.trim();
    const competence = document.getElementById("competence").value.trim();
    const niveauc = document.getElementById("niveauc").value.trim();
    const loisir = document.getElementById("loisir").value.trim();
    const passion = document.getElementById("passion").value.trim();
    const NomR = document.getElementById("nomR").value.trim();
    const posteR = document.getElementById("posteR").value.trim();
    const ContactR = document.getElementById("conctactR").value.trim();
    const langue = document.getElementById("langue").value.trim();
    const niveaulangue = document.getElementById("niveaulangue").value.trim();

    if (!nom || !age || !gender || !poste || !situation || !descrition || !email || !adresse || !telephone || !Nentreprise
        || !posteocc || !duree || !mission || !diplome || !Etablissement || !anneeob || !competence || !niveauc || !loisir
        || !passion || !NomR || !posteR || !conctactR || !langue || !niveaulangue) {
        alert("Tous les champs doivent être remplis !");
        return false; // Empêche la soumission du formulaire
    }
    return true; // Permet la soumission du formulaire
}

document.getElementById('cvForm').addEventListener('input', function() {
    document.getElementById('nom').textContent = document.getElementById('name').value;
    document.getElementById('age').textContent = document.getElementById('email').value;
    document.getElementById('sexe').textContent = document.getElementById('phone').value;
    document.getElementById('cvExperience').textContent = document.getElementById('experience').value;
});

//Vérification des emails
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
 
//vérification des numéros de téléphone
function validatePhone(telephone) {
    const telRegex = /^\d{10}$/; // 10 chiffres consécutifs
    return telRegex.test(phone);
}
function validatecontact(conctactR) {
    const phoneRegex = /^\d{10}$/; // 10 chiffres consécutifs
    return phoneRegex.test(phone);
}

//Vérification de l'age limite
function checkAge() {
    // Récupérer la valeur du champ d'âge
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value.trim(), 10); // Convertir en entier

    // Vérifier si l'âge est dans la plage de 18 à 65 ans
    if (age < 18 || age > 65) {
        alert("L'âge doit être compris entre 18 et 65 ans !");
        ageInput.focus(); // Mettre le focus sur le champ d'âge
        return false; // Indiquer que la validation a échoué
    }

    return true; // Indiquer que la validation a réussi
}


//Vérification des dates
function validateDateRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return start <= end;
}

//Utilisation des fonctions
const email = document.getElementById('email').value.trim();
if (!validateEmail(email)) {
    alert("Email invalide !");
}

const telephone = document.getElementById('telephone').value.trim();
if (!validatePhone(telephone)) {
    alert("Numéro de téléphone invalide !");
}

const conctactR = document.getElementById('contactR').value.trim();
if (!validatePhone(conctactR)) {
    alert("Numéro de téléphone invalide !");
}

const dateOfBirth = document.getElementById('age').value.trim(); // Assurez-vous d'avoir un champ pour la date de naissance
if (!checkAge(dateOfBirth)) {
    alert("L'âge doit être compris entre 18 et 65 ans !");
}

const startDate = document.getElementById('date_debut').value.trim(); // Champ pour la date de début
const endDate = document.getElementById('date_fin').value.trim(); // Champ pour la date de fin
if (!validateDateRange(startDate, endDate)) {
    alert("La date de début doit être antérieure à la date de fin !");
}
