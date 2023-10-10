//////////////////////////////
/* Results Page Related API */
//////////////////////////////

/* Feature: User Role Selection */

// Display the role selection modal
function showRoleSelectionModal() {
    const modal = document.getElementById('role-selection-modal');
    const mainResults = document.getElementById('main-results');

    // Blur the background underneath the modal
    mainResults.classList.add('blurred');

    modal.style.display = 'block';

    const patientButton = document.getElementById('patient-button');
    const professionalButton = document.getElementById('professional-button');

    // Update the results page based on the choice
    patientButton.addEventListener('click', function() {
        let selectedRole = 'patient';
        modal.style.display = 'none';
        fetch('/results', {
            method: 'POST',
            body: `user_role=${selectedRole}`,
        }).then(response => response.json())
        .then(data => {
            if (data.success) {
                updatePageContent(selectedRole);
                mainResults.classList.remove('blurred');
            }
        });
    });

    professionalButton.addEventListener('click', function() {
        let selectedRole = 'professional';
        modal.style.display = 'none';
        fetch('/results', {
            method: 'POST',
            body: `user_role=${selectedRole}`,
        }).then(response => response.json())
        .then(data => {
            if (data.success) {
                updatePageContent(selectedRole);
                mainResults.classList.remove('blurred');
            }
        });
    });
}

function updatePageContent(userRole) {
    const screeningResultsHeader = document.getElementById('screening-results-header')
    const screeningResults = document.getElementById('screening-results');

    // Make the screening results section only visible to professional
    if (userRole === 'professional') {
        screeningResultsHeader.style.display = 'block';
        screeningResults.style.display = 'block';
    }
    else {
        screeningResultsHeader.style.display = 'none';
        screeningResults.style.display = 'none';

        // Reveal the "Request Full View" Button
        const requestButton = document.getElementById('request-button');
        requestButton.style.display = 'block';
    }
}

// Trigger the role selection modal once the results page has been loaded
document.addEventListener('DOMContentLoaded', function () {
    showRoleSelectionModal();

    const saveNameButton = document.getElementById('save-name-button');
    const patientNameInput = document.getElementById('patient-name');
    const nameDisplay = document.getElementById('name-display');

    // Prevent the input field from submitting and refreshing the results page
    saveNameButton.addEventListener('click', function() {
        nameDisplay.textcontent = patientNameInput.value;
    });

    patientNameInput.addEventListener('keydown', function(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
            nameDisplay.textcontent = patientNameInput.value;

        }
    });

    // For user-patient view: display the request-fullview-modal
    const requestButton = document.getElementById('request-button');
    const requestFullViewModal = document.getElementById('request-fullview-modal');
    const confirmButton = document.getElementById('confirm-button');
    const cancelButton = document.getElementById('cancel-button');

    requestButton.addEventListener('click', function() {
        requestFullViewModal.style.display = 'block';
    });

    // Update the results page view based on the user's choice
    confirmButton.addEventListener('click', function() {
        // Hide the request-fullview-modal
        requestFullViewModal.style.display = 'none';
        requestButton.style.display = 'none';

        // Update userRole
        sessionStorage.setItem('userRole', 'professional');
        updatePageContent(sessionStorage.getItem('userRole'));
    });

    // Cancel the modal
    cancelButton.addEventListener('click', function() {
        requestFullViewModal.style.display = 'none';
    });
});

/* Feature: Session Timeout */

// Set the time limit to 30 min
const sessionTimeout = 30*60*1000;

// Display the redirect-modal
function showModal() {
    const redirectModal = document.getElementById('redirect-modal');
    const mainResults = document.getElementById('main-results');

    redirectModal.style.display = 'block';
    mainResults.classList.add('blurred');

    // Close the modal once user clicks the close button
    const closeButton = document.getElementById('close-modal-button');
    closeButton.addEventListener('click', function() {
        redirectModal.style.display = 'none';
        mainResults.classList.remove('blurred');
        window.location.href = '/';
    });
}

// Trigger the timeout after the time limit
let sessionTimer = setTimeout(() => {
    showModal();
    clearTimeout(sessionTimer);
}, sessionTimeout);
