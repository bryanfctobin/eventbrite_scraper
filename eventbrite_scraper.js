var attendees = document.querySelectorAll('[data-automation] tr');
var myList = [];
for (var i = 1; i < attendees.length; i++) {
    var firstName, lastName, email, ticketType, age, race, gender, degree, shirtSize, dietaryRestrictions, dietaryRestrictionsDetails, reasonForAttending, emailConsent, jobTitle, company;
    firstName = attendees[i].cells[3].innerText;
    lastName = attendees[i].cells[4].innerText;
    email = attendees[i].cells[5].innerText;
    ticketType = attendees[i].cells[7].innerText;
    age = attendees[i].cells[13].innerText;
    race = attendees[i].cells[14].innerText;
    gender = attendees[i].cells[16].innerText;
    degree = attendees[i].cells[18].innerText;
    shirtSize = attendees[i].cells[19].innerText;
    dietaryRestrictions = attendees[i].cells[20].innerText;
    dietaryRestrictionsDetails = attendees[i].cells[21].innerText;
    reasonForAttending = attendees[i].cells[22].innerText;
    emailConsent = attendees[i].cells[23].innerText;
    jobTitle = attendees[i].cells[26].innerText;
    company = attendees[i].cells[27].innerText;
    myList.push({
        "firstName":  firstName,
        "lastName": lastName,
        "email": email,
        "ticketType": ticketType,
        "age": age,
        "race": race,
        "gender": gender,
        "degree": degree,
        "shirtSize": shirtSize,
        "dietaryRestrictions": dietaryRestrictions,
        "dietaryRestrictionsDetails": dietaryRestrictionsDetails,
        "reasonForAttending": reasonForAttending,
        "emailConsent": emailConsent,
        "jobTitle": jobTitle,
        "company": company
    })
}