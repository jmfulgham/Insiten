let companyList = [
    {
        "Company Name": "ABC REIT",
        "Status": "Researching",
        "Company Information": "ABC REIT specializes in commerical real estate properties. Their specialties include property sales, leasing, leins, and land.",
        "Key Contacts": "Alan Smith, Phone: 404-123-4567, Email: asmith@abcreit.com",
        "Financial Performance": "On track: Actual revenue lower than predicted, but higher than 2017"
    },

    {
        "Company Name": "One Financial Trust",
        "Status": "Approved",
        "Company Information": "One Financial Trust is a small credit union.",
        "Key Contacts": "Natalie Lane, Phone: 404-789-1011, Email: n.lane@oft.org",
        "Financial Performance": "Exceeds Expectations: A boost in community involvement has led to a significant increase in mortage and personal loans."
    },

    {
        "Company Name": "Sunshine Retirment Homes, LLC",
        "Status": "Pending",
        "Company Information": "Retirement home communities.",
        "Key Contacts": "Alan Smith, Phone: 404-123-4567, Email: asmith@abcreit.com",
        "Financial Performance": "On track: SRH LLC is on track to open 3 more retirement communites in the first half of 2018."
    }

]
let name = "123 Construction Company, LLC";
let status = "Pending";
let companyInfo= "Construction Company";
let keyContacts = "Mone\'t Fulgham; Phone: 4049019199, Email: monetfulgham@gmail.com";
let finPerf = "On track: Scheduled to develop 10 properties in Q2 2018";

function createNewDiv(index){
    let newDiv=`<section class="newCompany"` + index + `col-6"></section>`;
    $('#future-investment').append(newDiv);
}

function createMultipleDivs(arrayOfObjs){
    arrayOfObjs.forEach(function(index){
        console.log("Executed", index);
        createNewDiv(index);
    });
}

//so far I've added multiple divs to the DOM for each company in companyList. Next is to figure out the loop to add Company
//Names correctly to each div. Will stop here tonight and pick up tomorrow.

function addCompanyName(name) {
    //add the company name to the div
    $('.newCompany').append("<h2>" + name + "</h2>");
}
function addObjectCompanyName(objectOfCompany){
    let first= objectOfCompany[0]["Company Name"];
    addCompanyName(first);
}

function addMultipleCompanyNames(arrayOfObjs){
    arrayOfObjs.forEach(function (names){
        addObjectCompanyName(names);
    })
}

function addCompanyStatus(status) {
    $('.newCompany').append("<li><b>Status</b>: " + status + "</li>");
}

function addCompanyInfo(companyInfo){
    $('.newCompany').append("<li><b>Company Info</b>: " + companyInfo + "</li>");
}

function addKeyContacts(keyContacts){
    $('.newCompany').append("<li><b>Key Contacts</b>: " + keyContacts + "</li>");
}

function addFinancialPerformance(finPerf){
    $('.newCompany').append("<li><b>Financial Performance</b>: " + finPerf + "</li></ul>");
}

function addButton(){
    $('.newCompany').append("<button>Edit</button><button>Delete</button>");
}

function addDiv(){
    createMultipleDivs(companyList);
    addMultipleCompanyNames(companyList);
    addCompanyStatus(status);
    addCompanyInfo(companyInfo);
    addKeyContacts(keyContacts);
    addFinancialPerformance(finPerf);
    addButton();
}
$(addDiv)