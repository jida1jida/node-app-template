// this is just a duplicate of dashboard.js for now, with a few things commented out! -jake
// you can access this page at localhost:3000/mainmenu until we implement navigation

//ADD ALL EVENT LISTENERS INSIDE DOMCONTENTLOADED
//AT THE BOTTOM OF DOMCONTENTLOADED, ADD ANY CODE THAT NEEDS TO RUN IMMEDIATELY
document.addEventListener('DOMContentLoaded', () => {
    
    //////////////////////////////////////////
    //ELEMENTS TO ATTACH EVENT LISTENERS
    //////////////////////////////////////////
    const logoutButton = document.getElementById('logoutButton');
    const refreshButton = document.getElementById('refreshButton');
    const meditationButton = document.getElementById('meditationButton');
    //////////////////////////////////////////
    //END ELEMENTS TO ATTACH EVENT LISTENERS
    //////////////////////////////////////////


    //////////////////////////////////////////
    //EVENT LISTENERS
    //////////////////////////////////////////
    // Log out and redirect to login
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('jwtToken');
        window.location.href = './logon.html';
    });

    // // Refresh list when the button is clicked
    // refreshButton.addEventListener('click', async () => {
    //     renderUserList();
    // });

    // Redirect to the meditation page when the Meditation button is clicked
    meditationButton.addEventListener('click', () => {
        window.location.href = '/meditation.html'; // Adjust the path if necessar
    });
    //////////////////////////////////////////
    //END EVENT LISTENERS
    //////////////////////////////////////////


    //////////////////////////////////////////////////////
    //CODE THAT NEEDS TO RUN IMMEDIATELY AFTER PAGE LOADS
    //////////////////////////////////////////////////////
    // Initial check for the token
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        window.location.href = '/';
    } else {
        DataModel.setToken(token);
        renderUserList();
    }
    //////////////////////////////////////////
    //END CODE THAT NEEDS TO RUN IMMEDIATELY AFTER PAGE LOADS
    //////////////////////////////////////////
});
//END OF DOMCONTENTLOADED


//////////////////////////////////////////
//FUNCTIONS TO MANIPULATE THE DOM
//////////////////////////////////////////
async function renderUserList() {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '<div class="loading-message">Loading user list...</div>';
    const users = await DataModel.getUsers(); 
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.textContent = user;
        userListElement.appendChild(userItem);
    });
}
//////////////////////////////////////////
//END FUNCTIONS TO MANIPULATE THE DOM
//////////////////////////////////////////