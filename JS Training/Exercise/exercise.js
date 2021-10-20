const peoples = [
    {
      username: "jenny30",
      password: "jenny30"
    },
    {
      username: "cjdc26",
      password: "cjdc26"
    },
  ];
  
  const newsFeed = [
    {
      username: 'JB',
      timeline: 'Wow na wow ang araw ko ngayon',
    },
    {
      username: 'Jacob',
      timeline: 'Sana all na lang talaga',
    },
  ];
  
  const promptUserName = prompt("What is your username?");
  const promptPassword = prompt("What is your password?");

  function isUserValid(user, passwod) {
    for (let index = 0; index < peoples.length; index++) {
        
        if(peoples[index].username === user && peoples[index].password === password) {
            return true;
        }
    }
    return false;
  }
  
  function signIn(user, password) {    
    if(isUserValid(user, password)) {
      console.log(newsFeed);
    } else {
      alert("Sorry, Wrong password ka");
    }
  }
  
  signIn(promptUserName, promptPassword);