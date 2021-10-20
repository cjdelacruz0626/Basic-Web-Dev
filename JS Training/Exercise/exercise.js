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
  
  function signIn(user, password) {
    if(user === peoples[0].username && password === peoples[0].password) {
      console.log(newsFeed);
    } else {
      alert("Sorry, Wrong password ka");
    }
  }
  
  signIn(promptUserName, promptPassword);