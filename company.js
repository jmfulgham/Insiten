let companyList = [
    {
        "Company Code": "ABC",
        "Company Name": "ABC REIT",
        "Status": "Researching",
        "Company Information": "ABC REIT specializes in commerical real estate properties. Their specialties include property sales, leasing, leins, and land.",
        "Key Contacts": "Alan Smith, Phone: 404-123-4567, Email: asmith@abcreit.com",
        "Financial Performance": "On track: Actual revenue lower than predicted, but higher than 2017"
    },

    {
        "Company Code": "OFT",
        "Company Name": "One Financial Trust",
        "Status": "Approved",
        "Company Information": "One Financial Trust is a small credit union.",
        "Key Contacts": "Natalie Lane, Phone: 404-789-1011, Email: n.lane@oft.org",
        "Financial Performance": "Exceeds Expectations: A boost in community involvement has led to a significant increase in mortage and personal loans."
    },

    {
        "Company Code": "SRH",
        "Company Name": "Sunshine Retirement Homes, LLC",
        "Status": "Pending",
        "Company Information": "Retirement home communities.",
        "Key Contacts": "Alan Smith, Phone: 404-123-4567, Email: asmith@abcreit.com",
        "Financial Performance": "On track: SRH LLC is on track to open 3 more retirement communites in the first half of 2018."
    }
]

let name;
let code;
let status;
let companyInfo;
let keyContacts;
let financialPerformance;

//format div with the name and class name
function createNewSection(name, code) {
    let newSection = `<section class="newCompany ` + code + ` col-6"><h2>` + name + `</h2><ul></ul></section>`;
    let futureInvestment = $('#future-investment');
    futureInvestment.append(newSection);
}


//creating sections for each company in arr of obj
function createMultipleDivs(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        name = obj["Company Name"];
        code = obj["Company Code"]
        createNewSection(name, code)
    });
}

function addCompanyStatus(status, code) {
    $(`.` + code).append("<ul><li><b>Status</b>: " + status + "</li>");
}

function addObjCompanyStatus(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        status = "<li>" + obj['Status'] + "</li>";
        code = obj["Company Code"];
        addCompanyStatus(status, code);
    }); 
}

function addCompanyInfo(companyInfo, code) {
    $(`.` + code).append("<li><b>Company Info</b>: " + companyInfo + "</li>");
}

function addObjCompanyInfo(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        companyInfo = "<li>" + obj['Company Information'] + "</li>";
        code = obj["Company Code"];
        addCompanyInfo(companyInfo, code);
    });
}
function addKeyContacts(keyContacts, code) {
    $(`.` + code).append("<li><b>Key Contacts</b>: " + keyContacts + "</li>");
}

function addObjKeyContacts(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        keyContacts = "<li>" + obj['Key Contacts'] + "</li>";
        code = obj["Company Code"];
        addKeyContacts(keyContacts, code);
    });
}

function addFinancialPerformance(financialPerformance, code){
    $(`.` + code).append("<li><b>Financial Performance</b>: " + financialPerformance + "</li></ul>");
}

function addObjFinancialPerformance(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        financialPerformance = "<li>" + obj['Financial Performance'] + "</li>";
        code = obj["Company Code"];
        addFinancialPerformance(financialPerformance, code);
    });
}

function addButton(code) {
    $(`.` + code).append(`<button class='edit` + code +`'>Edit</button><button class='delete` + code +`'>Delete</button>`);
}

function addMultipleButtons(arrayOfObjs){
    arrayOfObjs.forEach(function (obj){
        code = obj["Company Code"];
        addButton(code);
        handleEditButton(code);
      handleDeleteButton(code);
    });
}

function handleEditButton(code) {
    $(`.edit` + code).on('click', event => {
        if ($(event.target).text() === "Save") {        
            console.log("saved");
        }
        toggleEditSave(code);
    })
}

function handleDeleteButton(code){
    $(`.delete` + code).on('click', event => {
  
        $(`.` + code).remove();
    })
}


function toggleEditSave(code) {
    let isEditable = $(`.` + code).is('.editable');
    $(`.` + code).prop('contenteditable', !isEditable);
    $(`.` + code).toggleClass('contenteditable');
  $(`.` + code).toggleClass('editable');
    isEditable ?  $(`.edit` + code).text('Edit') : $(`.edit` + code).text('Save');
}




function addDiv() {
    createMultipleDivs(companyList);
    addObjCompanyStatus(companyList);
     addObjCompanyInfo(companyList);
    addObjKeyContacts(companyList);
    addObjFinancialPerformance(companyList);
    addMultipleButtons(companyList);
}
$(addDiv)