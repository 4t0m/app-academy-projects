let Student = function (fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
};

Student.prototype.name = function () {
  return `${this.fname} ${this.lname}`;
};

Student.prototype.courses = function () {
  return this.courses;
};

Student.prototype.enroll = function (course) {
  if (course.students().indexOf(this) === -1) {
    this.courses.forEach(function (enrolledCourse) {
      if (enrolledCourse.conflictsWith(course)) {
        throw "New course conflicts.";
      }
    });
    this.courses.push(course);
    course.students().push(this);
  }
};

Student.prototype.courseLoad = function () {
  let load = {};
  this.courses.forEach( function(course) {
    if (load[course.dept]) {
      load[course.dept] += course.numCredits;
    } else {
      load[course.dept] = course.numCredits;
    }
  });
  return load;
};

let Course = function (courseName, dept, numCredits, days, timeBlock) {
  this.courseName = courseName;
  this.dept = dept;
  this.numCredits = numCredits;
  this.enrolled_students = [];
  this.days = days;
  this.timeBlock = timeBlock;
};

Course.prototype.students = function () {
  return this.enrolled_students;
};

Course.prototype.addStudent = function (student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function (otherCourse) {
  let conflicts = false;
  if (this.timeBlock === otherCourse.timeBlock) {
    this.days.forEach(function (day) {
      if (otherCourse.days.indexOf(day) !== -1) {
        console.log("SAME DAY");
        conflicts = true;
      }
    });
  }
  return conflicts;
};

let bob = new Student('bob', 'man');
let male = new Student('male', 'man');
let chem = new Course('Chemistry', 'Sci', 4, ['mon', 'fri'], 1);
let painting = new Course('Painting', 'Art', 4, ['mon', 'fri'], 1);
// let phys = new Course('Physics', 'Sci', 4);

bob.enroll(chem);
bob.enroll(chem);
bob.enroll(painting);
painting.addStudent(bob);
// phys.addStudent(bob);
// console.log(bob.courseLoad());
// console.log(bob.courses);
