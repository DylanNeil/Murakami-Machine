$(document).ready(function() {
  var randomQuote;
  var randomAuthor;
  var randomNum;

  function getQuote() {

     
    
    var quotes = [" “Pain is inevitable. Suffering is optional.” ",

      " “Don't feel sorry for yourself. Only assholes do that.” ",

      " “Life is not like water. Things in life don't necessarily flow over the shortest possible route.”  ",

      "“Taking crazy things seriously is a serious waste of time.” ",

      "“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”",

      "“The most important thing we learn at school is the fact that the most important things can't be learned at school.”",

      "“Life is a lot more fragile than we think. So you should treat others in a way that leaves no regrets. Fairly, and if possible, sincerely.” ",

      "“Mediocrity's like a spot on a shirt—it never comes off.” ",

      "“I can bear any pain as long as it has meaning.”",

      "“That's what the world is, after all: an endless battle of contrasting memories.”",

      "“Even if we could turn back, we'd probably never end up where we started.”"
    ];

    var author = [
      " - What I Talk About When I Talk About Running",
      " - Norwegian Wood",
      " - 1Q84",
      " - Kafka on the Shore",
      " - Norwegian Wood",
      " - What I Talk About When I Talk About Running",
      " - Dance Dance Dance",
      " - Dance Dance Dance",
      " - 1Q84",
      " - 1Q84",
      " - 1Q84",
    ];

    randomNum = Math.floor((Math.random() * quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  } //function getQuote

  $("#newQuote").on("click", function() {
    
    getQuote();
   
  });

  $("#newQuote").on("click").addClass("animated fadeIn");
  
  $("#tweet").on("click", function() {

    window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });

});