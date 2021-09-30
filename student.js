let studentList = [];
let studentinfo = {};
function info(e) {
  studentinfo = { ...studentinfo, [e.target.name]: e.target.value }; //adding input element name values to an object by on change event
  // ...is the spread operator to add key values to an object
  // "[e.target.name]:e.target.value "is a symbol (every input element name and value we will add to an object)
}
document.getElementById("btn").onclick = () => {
  let ul = document.querySelector("#res"); //retriving ul from the document
  studentList.push(studentinfo); //adding student data to an array
  studentList.forEach((student) => {
    if (
      student.sname != undefined &&
      student.mno != undefined &&
      student.mail != undefined
    ) {
      let li = document.createElement("li"); //creating li tag dynamically
      li.innerHTML ="name:"+ student.sname + ",mobileNo: " + student.mno + ",mailId:" + student.mail;

      ul.appendChild(li);
    }
    studentinfo = {}; //clear the form data
  });
};
