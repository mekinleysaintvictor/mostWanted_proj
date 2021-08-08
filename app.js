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
      searchResults = searchByName(people); //search by name

      searchResults = searchByName(people);

      searchResults = searchByGender(people); //search by name

      break;
    case 'no':
      // TODO: search by traits
      searchResults = searchByGender(people);
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

  let displayOption = promptFor("Found " + person.firstName + " " + person.lastName + " . If this is the person you are looking for, do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);

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
    displayDescendants(person, people);
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
function searchByTraits(people){
  let searchType = promptFor("What traits would you like to search by? Enter: 'eye color', 'DOB', 'gender', 'weight', 'height', 'ID' or 'occupation'", autoValid);
  let searchResults;
  switch(searchType){
    case 'eye color':
      searchResults = searchByEyeColor(people);
      break;
    case 'DOB':
      searchResults = searchByDOB(people);
      break;
    case 'gender':
      searchResults = searchByGender(people);
      break;
    case 'weight':
      searchResults = searchByWeight(people);
      break;
    case 'height':
      searchResults = searchByHeight(people);
      break;
    case 'occupation':
      searchResults = searchByOccupation(people);
      break;
    case 'ID':
      searchResults = searchByID(people);
      break;
    default:
      app(people);
      break;
  }

  mainMenu(searchResults, people);
}
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

//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.
function searchByEyeColor(people){
  let eyeColor = promptFor("What is the person's eye color?", autoValid);
  let foundPerson;

  let foundEyeColor = people.filter(function(potentialMatch) {
    if(potentialMatch.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  foundPerson = customValidation(foundEyeColor);
  return foundPerson;
}

function searchByDOB(people){
  let dob = promptFor("If you know the person's DOB, enter it below.", autoValid);
  let foundPerson;

  let foundDOB = people.filter(function(potentialMatch){
    if(potentialMatch.dob === dob){
      return true;
    }
    else{
      return false;
    }
  })
  foundPerson = customValidation(foundDOB);
  return foundPerson;
}
//TODO: add other trait filter functions here.
function searchByGender(people){
  let gender = promptFor("If you know the person's gender, enter it below.", autoValid);
  let foundPerson;

  let foundGender = people.filter(function(potentialMatch) {
    if(potentialMatch.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })
  foundPerson = customValidation(foundGender);
  return foundPerson;
}

function searchByWeight(people){
  let weight = promptFor("If you know the person's weight, enter it below.", autoValid);
  let foundPerson;

  let foundWeight = people.filter(function(potentialMatch){
    if(potentialMatch.weight === parseInt(weight)){
      return true;
    }
    else{
      return false;
    }
  })
  foundPerson = customValidation(foundWeight);
  return foundPerson;
}

function searchByHeight(people){
  let height = promptFor("If you know the person's height, enter it below.", autoValid);
  let foundPerson;

  let foundHeight = people.filter(function(potentialMatch){
    if(potentialMatch.height == parseInt(height)){
        return true;
    }
    else{
      return false;
    }
  })
  foundPerson = customValidation(foundHeight);
  return foundPerson;
}

function searchByOccupation(people){
  let occupation = promptFor("If you know the person's occupation, enter it below.", autoValid);
  let foundPerson;

  let foundOccupation = people.filter(function(potentialMatch) {
    if(potentialMatch.occupation === occupation){
      return true;
    }
    else{
      return false;
    }
  })
  foundPerson = customValidation(foundOccupation);
  return foundPerson;
}

function searchByID(people){
  let id = promptFor("If you know the person's ID, enter it below.", autoValid);
  let personFound;

  let foundID = people.filter(function(potentialMatch) {
    if(potentialMatch.id === parseInt(id)){
      return true;
    }
    else{
      return false;
    }
  })
  personFound = customValidation(foundID);
  return personFound;
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
  alert("Click 'OK' to search again.")
  app(people);
}
//Display Family
function displayFamily(person, people) {
  let familyInfo = "Parent(s) ID: " + person.parents + "\n";
  familyInfo += "Children ID: " + person.children + "\n";
  familyInfo += "Current Spouse ID: " + person.currentSpouse + "\n";
  familyInfo += "Sibling(s) ID: " + person.siblings + "\n";

alert(familyInfo);
app(people);
}

//Display Descendants
function displayDescendants(person, people) {
  let descendantsInfo = "Grandparent(s) ID: " + person.grandparents + "\n";
  descendantsInfo += "Grandchildren ID: " + person.grandchildren + "\n";
  
  alert(descendantsInfo);
  app(people);
  }


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
  let foundPerson;
  let answer;
  for(let i = 0; i < input.length; i++){
    answer = promptFor("Is " + input[i].firstName + " " + input[i].lastName + " the person you are looking for? Type 'yes' or 'no' below.", yesNo);
    if(answer == "yes"){
      foundPerson = input[i];
      break;
    }else{
      foundPerson;
    }
  }
  return foundPerson;
}



//#endregion