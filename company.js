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

function addDiv(){
    console.log("Loaded");
    let newDiv=`<section class="newCompany col-6"><h2>The company name</h2></section>`;
    $('future-investment').append(newDiv);
    console.log(newDiv, 'done');
}


function addCompanyName(name) {
    //add the company name to the div
    let section = document.getElementById('newCompany');
    name = "Company 123";
    section.innerHTML= name;
}


// var d1 = document.getElementById('one');
// d1.insertAdjacentHTML('beforeend', '<div id="two">two</div>');

function addAllCompanyNames() {
    //add ALL company names with h3 tag
}

function addCompanyStatus() {

}

function addAllCompanyStatuses() {

}

function addAllSections() {
    //add sections for each company
}

$(addDiv)