"use strict"


//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region 

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo);
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      searchResults = searchByTraits(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  //original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = promptFor("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);

  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(person, people);
    break;
    case "family":
    // TODO: get person's family
    displayFamily(person, people);
    break;
    case "descendants":
    // TODO: get person's descendants
    break; 
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

//#endregion
//"eyecolor, height"
//["eyecolor", "height"]

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region 

//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", autoValid);
  let lastName = promptFor("What is the person's last name?", autoValid);

  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person single person object using the name they entered.
  return foundPerson[0];
}

//Search by traits
// function searchByTraits(people) {
//   let getTraitsList = "";
//   let getFilteredTraits;
// getFilteredTraits = searchByEyeColor(people);
// getFilteredTraits = searchByDOB(people);
// getFilteredTraits = searchByGender(people);
// getFilteredTraits = searchByHeight(people);
// getFilteredTraits = searchByWeight(people);
// getFilteredTraits = searchByOccupation(people);

// if(getFilteredTraits.length === 22) {
//   console.log("Would you like to search again?");
// }
// }
//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.
function searchByEyeColor(people){
  let eyeColor = promptFor("If you know the person's eye color, enter it below?", autoValid);
  
  let foundEyeColor = people.filter(function(potentialMatch) {
    if(potentialMatch.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }

  })
  return foundEyeColor[0];
}

function searchByDOB(people){
  let dob = promptFor("What is the person's birthday?", autoValid);

  let foundDOB = people.filter(function(potentialMatch){
    if(potentialMatch.dob === dob){
      return true;
    }
    else{
      return false;
    }
  })
  return foundDOB[0];
}
//TODO: add other trait filter functions here.
function searchByGender(people){
  let gender = promptFor("What is the gender of the person you're looking for?", autoValid);
  
  let foundGender = people.filter(function(potentialMatch) {
    if(potentialMatch.gender === male){
      return true;
    }
    else{
      return false;
    }

  })
  return foundGender[0];
}


function searchByWeight(people){
  let weight = promptFor("What is the weight of the person you're looking for?", autoValid);

  let foundWeight = people.filter(function(potentialMatch){
    if(potentialMatch.weight === weight){
      return true;
    }
    else{
      return false;
    }
  })
  return foundWeight[0];
}

function searchByHeight(people){
  let height = promptFor("What is the height of the person you're looking for?", autoValid);

  let foundHeight = people.filter(function(potentialMatch){
    if(potentialMatch.height == weight){
        return true;
    }
    else{
      return false;
    }
  })
  return foundHeight[0];
}


function searchByOccupation(people){
  let occupation = promptFor("What is the person's occupation?", autoValid);
  
  let foundOccupation = people.filter(function(potentialMatch) {
    if(potentialMatch.occupation === occupation){
      return true;
    }
    else{
      return false;
    }

  })
  return foundOccupation[0];
}

function searchByID(people){
  let id = promptFor("If you know the person's ID, enter it below.", autoValid);
  
  let foundID = people.filter(function(potentialMatch) {
    if(potentialMatch.id === id){
      return true;
    }
    else{
      return false;
    }

  })
  return foundID[0];
}

//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person, people){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display.
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "DOB: " + person.dob + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "ID: " + person.id + "\n";


  alert(personInfo);
  alert("Is this who you are looking for?")
  
  app(people);
}
console.log("Is this who you are looking for?")
//Display Family
function searchByParents(people) {
  let parents = ("");
  let foundParents = people.filter(function(potentialMatch) {
    if(potentialMatch.parents === parents) {
      return true;
    }
    else{
      return false;
    }
  })
  return foundParents[0];
}


// function displayFamily(person, people){
 
//   let parents = "parent1" + "\n";
//   let grandparent = "grandparent1" + "\n";
//   let siblings = "siblings1" + "\n";

//   //Display Descendants
//   let children = "children1" + "\n";
  

//   alert(personInfo);
//   app(people);
// }

//#endregion



//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  let response;
  let isValid;
  do{
    response = prompt(question).trim();
    isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
  
}

//#endregion