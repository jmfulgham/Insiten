
function createNewTarget(){
    //when I click 'add new target' it appends to the company list
    //with all user input details

}


function sendToCompanyInfo(){
    //when the user clicks button
    //send full company details into Prospect div
    //allow to edit and update and delete
}

function editCompanyInfo(info){
    //when a user clicks edit
    //they can edit all the company information
    //call save function
    //event.target
    //
    $('.edit').on('click', event =>{
        let e = event.target;
        console.log(e, info);
        
        
        
    })
    
}

function saveCompanyInfo(){
    //after user edits information
    //details save and edit fields turn off
}
$(editCompanyInfo);