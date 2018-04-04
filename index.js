let companyList = [{
        "Company Code": "ABC",
        "Company Name": "ABC REIT",
        "Status": "Researching",
        "Company Information": "ABC REIT specializes in commercial real estate properties. Their specialties include property and land sales, leasing, and tax liens.",
        "Key Contacts": "Alan Smith, Phone: 404-123-4567, Email: asmith@abcreit.com",
        "Financial Performance": "2017YE Portfolio Holdings: $52.7mm, <br>2017YE Revenue: $82.3mm, <br>2017YE Expenses: $13.1mm, <br>Percentage of liquid assets: 17.85%"
    },

    {
        "Company Code": "OFT",
        "Company Name": "One Financial Trust",
        "Status": "Approved",
        "Company Information": "One Financial Trust is a small credit union.",
        "Key Contacts": "Natalie Lane, Phone: 404-789-1011, Email: n.lane@oft.org",
        "Financial Performance": "2017YE Portfolio Holdings: $32.7mm, <br>2017YE Revenue: $42.13mm, <br>2017YE Expenses: $3.1mm, <br>Percentage of liquid assets: 4.85%"
    },

    {
        "Company Code": "SRH",
        "Company Name": "Sunshine Retirement Homes, LLC",
        "Status": "Denied",
        "Company Information": "Retirement home communities.",
        "Key Contacts": "Alan Smith, Phone: 404-123-4567, Email: asmith@abcreit.com",
        "Financial Performance": "2017YE Portfolio Holdings: $12.7mm, <br>2017YE Revenue: $7.3mm, <br>2017YE Expenses: $3.1mm, <br>Percentage of liquid assets: 1.5%"
    }
]

function storeNewTargetInformation() {
    $('.submit').on('click', function (event) {
        event.preventDefault();
        let companyCode = $("input[name='companyCode']").val();
        let targetName = $("input[name='targetName']").val();
        let companyStatus = $("#status :selected").text();
        let info = $("input[name='info']").val();
        let contacts = $("input[name='contacts']").val();
        let financials = $("textarea[name='financials']").val();
        if (companyCode, targetName, companyStatus, info, contacts, financials === "") {
            $('.create-new-company').append("<section><h3>All fields are required. Please try again</h3></section>");
            return;
        }
        addNewTarget(companyCode, targetName, companyStatus, info, contacts, financials);
        $('.create-new-company').append("<section><h3>Target added!</h3></section>");
    });
}

function addNewTarget(companyCode, targetName, companyStatus, info, contacts, financials) {
    createNewSection(targetName, companyCode);
    addCompanyStatus(companyStatus, companyCode);
    addCompanyInfo(info, companyCode);
    addKeyContacts(contacts, companyCode);
    addFinancialPerformance(financials, companyCode);
    addButton(companyCode);
    handleEditButton(companyCode);
    handleDeleteButton(companyCode)
}

function createNewSection(name, code) {
    let newSection = "<section aria-live='polite' class='newCompany " + code + "' col-12><h2>" + name + "</h2><ul class='target-li" + code + "'></ul></section>";
    let futureInvestment = $('#future-investment');
    futureInvestment.append(newSection);
}

function createMultipleDivs(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        let name = obj["Company Name"];
        let code = obj["Company Code"];
        createNewSection(name, code);
    });
}

function addCompanyStatus(status, code) {
    let newStatus = "<li class='status-list" + code + "'><b>Status</b>:" + status + "</li>";
    $(".target-li" + code).append(newStatus);

}

function addObjCompanyStatus(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        let status = "<li>" + obj['Status'] + "</li>";
        let code = obj["Company Code"];
        addCompanyStatus(status, code);
    });
}

function addCompanyInfo(companyInfo, code) {
    $(".target-li" + code).append("<li><b>Company Info</b>:" + companyInfo + "</li>");
}

function addObjCompanyInfo(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        let companyInfo = "<li>" + obj['Company Information'] + "</li>";
        let code = obj["Company Code"];
        addCompanyInfo(companyInfo, code);
    });
}

function addKeyContacts(keyContacts, code) {
    $(".target-li" + code).append("<li><b>Key Contacts</b>: " + keyContacts + "</li>");
}

function addObjKeyContacts(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        let keyContacts = "<li>" + obj['Key Contacts'] + "</li>";
        let code = obj["Company Code"];
        addKeyContacts(keyContacts, code);
    });
}

function addFinancialPerformance(financialPerformance, code) {
    $(".target-li" + code).append("<li><b>Financial Performance</b>: " + financialPerformance + "</li></ul>");
}

function addObjFinancialPerformance(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        let financialPerformance = "<li>" + obj['Financial Performance'] + "</li>";
        let code = obj["Company Code"];
        addFinancialPerformance(financialPerformance, code);
    });
}

function addButton(code) {
    $(".target-li" + code).append("<button class='edit" + code + "'>Edit</button><button class='delete" + code + "'>Delete</button>");
}

function addMultipleButtons(arrayOfObjs) {
    arrayOfObjs.forEach(function (obj) {
        let code = obj["Company Code"];
        addButton(code);
        handleEditButton(code);
        handleDeleteButton(code);
    });
}

function handleSelectMenu(code) {
    let oldStatus = $(".status-list" + code).next("li");
    oldStatus.empty();
    $('.status-list' + code).replaceWith("<li><b>Status</b><select name=status id=statusList" + code + "><option value=‘pending’>Pending</option><option value=‘approved’>Approved</option><option value=‘researching’>Researching</option><option value=‘denied’>Denied</option></select></li>");
    $(".edit" + code).on('click', function (event) {
        if ($(event.target).text() === "Save") {
            $("#statusList" + code).removeAttr('disabled', 'disabled');
            return;
        } else {
            $("#statusList" + code).prop('disabled', 'disabled');
        }
    })
}

function handleEditButton(code) {
    $(".edit" + code).on('click', function (event) {
        if ($(event.target).text() === "Edit") {
            toggleEditSave(code);
            handleSelectMenu(code);
        } else {
            toggleEditSave(code);
        }
    })
}

function handleDeleteButton(code) {
    $(".delete" + code).on('click', function (event) {

        $("." + code).remove();
    });
}

function toggleEditSave(code) {
    let isEditable = $("." + code).is('.editable');
    $("." + code).prop('contenteditable', !isEditable);
    $("." + code).toggleClass('contenteditable');
    $("." + code).toggleClass('editable');
    isEditable ? $(".edit" + code).text('Edit') : $(".edit" + code).text('Save');
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
$(storeNewTargetInformation)