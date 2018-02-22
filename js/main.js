
function drawPuppiesAndKitty(where, howMany)
{
  var myDiv = document.getElementById(where);

  for (var i = 0; i < howMany; i++)
  {
    var myP = document.createElement('p');
    if (i === 5)
    {
      myP.innerText = i + ': ' + '=(^.^)=';
    }
    else
    {
      myP.innerText = i + ': ' + '/(^.^)\\';
    }
    myDiv.appendChild(myP);
  }
}

// drawPuppiesAndKitty("myDiv", 7);
// drawPuppiesAndKitty("myDiv2", 6);

function drawPets(where, arrayOfPets)
{
  var myDiv = document.getElementById(where);
  for (var i = 0; i < arrayOfPets.length; i ++)
  {
    var pet = arrayOfPets[i];
    var myP = document.createElement('p');
    myP.id = where + '_' + i;
    switch (pet)
    {
      case 'P':
        myP.innerText = i + ': ' + '/(^.^)\\';
        break;
      case 'K':
        myP.innerText = i + ': ' + '=(^.^)=';
        break;
      default:
        myP.innerText = i + ': ' + '???';
        break;
    }
    myDiv.appendChild(myP);
  }
}

var pets = ['P', 'K', 'P', 'P', 'K', 'P']; 
drawPets('myDiv3', pets);

function hideAndSeek(where)
{
  var petNumberInput = document.getElementById('petNumber');
  if (isNaN(petNumberInput.value) || petNumberInput.value === '')
  {
    alert('Please enter a number!')
    return;
  }

  var petID = where + "_" + petNumberInput.value;
  var petP = document.getElementById(petID);

  if (petP === null)
  {
    alert("Pet number doesn't exist!");
  }

  if (petP.className != 'hidden')
  {
    petP.className = 'hidden';
  }
  else
  {
    petP.className = '';
  }
}