let companyList = [{
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

document.body.onload = addDiv;


function addDiv(){
    //spread information to the three divs in HTML
    //replace HTML already in mockup
    //<div class="future-investment row">
    console.log("Loaded");
    const div = document.getElementById('future-investment');
    let divChild = document.createElement('section');
    divChild.className = "newCompany col-6";
    divChild.innerHTML='<h1>This is a test</h1>';
    console.log(divChild, div);
    div.appendChild(divChild);
    
    //document.getElementsByClassName('future-investment').appendChild(div);
}

function addAllSections() {
    //add sections for each company
}

function addCompanyName() {
    //loop through each section and add company name with h3 tag
}

function addAllCompanyNames() {
    //add ALL company names with h3 tag
}

function addCompanyStatus() {

}

function addAllCompanyStatuses() {

}
