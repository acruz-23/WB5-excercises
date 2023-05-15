let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];
function findProg200Start(courses) {
  return courses.CourseId === "PROG200";
}
function findPROJ500(courses) {
  return (courses.CourseId = "PROJ500");
}
function coursesLessThan50(courses) {
  return +courses.Fee <= 50;
}

function coursesinClassroom1(courses) {
  return courses.Location === "Classroom 1";
}

let prog200 = courses.find(findProg200Start);
console.log("Prog200 Start date:", prog200.StartDate);

let proj500 = courses.find(findPROJ500);
console.log("PROJ500 title:", proj500.Title);

let cheaperThan50 = courses.filter(coursesLessThan50);
console.log("Courses less than $50:", cheaperThan50);

let meetinClassroom1 = courses.filter(coursesinClassroom1);
console.log("courses that meet in classroom 1:", meetinClassroom1);
