const movies = [
  {
    title: "Fantastic Mr.Fox",
    hasSeen: true,
    stars: 5,
  },
  {
    title: "Luca" ,
    hasSeen: true,
    stars: 4,
  },
  {
    title: "Thor" ,
    hasSeen: false,
    stars: null,
  },
  {
    title: "Casablanca" ,
    hasSeen: false,
    stars: null,
  },
];

movies.forEach(function(movies){
    if (movies.hasSeen == true) {
        console.log("You have seen " + movies.title + " and gave it " + movies.stars + " stars.");
    } else {
        console.log("You have not seen " + movies.title);
    }
  });
// Sorry for the absence their has been a lot of personal issues arising along with
//  work, finding a new place to live, and interviews my time has been spread pretty thin
//  Im happy to be back at it and can get some more work done this weekend
//  Thanks for reading I hope all is well
//  - Austin
