//==============  CVS Table ==============//
// const CSVfile = [
//     {
//         ID: '42',
//         Name: 'Bruce',
//         Occupation: 'knight',
//         Age: 41
//     },
//     {
//         ID: '57',
//         Name: 'Bob',
//         Occupation: 'Fry Cook',
//         Age: 19
//     },

//     {
//         ID: '63',
//         Name: 'Blaine',
//         Occupation: 'Quiz  Master',
//         Age: 58

//     },
//     {
//         ID: '98',
//         Name: 'Bill',
//         Occupation: 'Doctor’s Assistant',
//         Age: 26
//     }];

// for (let i = 0; i < CSVfile.length; i++) {
//     CSVfile[i] = CSVfile[i] + "\n";
// }

// // console.log(CSVfile);


// const dataArray = Object.entries(CSVfile);
// for (i=0; i<dataArray.length; i++){
// console.log(dataArray[i]+"\n");
// }


//====================== Part 3: Feeling Loopy  ======================================/
// ====> Loop through the characters of a given CSV string.===========
const CSVstring = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";

for (let i = 0; i < CSVstring.length; i++) {
    CSVstring[i] = CSVstring[i] + "\n";
    console.log(CSVstring)
};
//=============> Store each “cell” of data in a variable.  <=============

let row1 = "ID,name,Occupation,Age \n";//There will only be 4 cells per row.

let row2 = "42,Bruce,Knight,41\n";//There will be no escaped characters other than “\n”.


let row3 = "57,Bob,Fry Cook,19\n";
;
let row4 = "63,Blaine,Quiz Master,58\n";

let row5 = "98,Bill,Doctors Assistant,26";



//==================> Log each row of data. <==================
console.log(row1, row2, row3, row4, row5);



//================> PART 2: Expanding Functionality==============

//=================Declare a variable that stores the number of columns in each row of data within the CSV.====//
//Store your results in a two-dimensional array.
const rowData = [

    ['ID', 'name', 'Occupation', 'Age'],
    ['42', 'Bruce', 'Knight', '41'],
    ['57', 'Bob', 'Fry Cook', '19'],
    ['63', 'Blaine', 'Quiz Master', '58'],
    ['98', 'Bill', 'Doctors Assistant', '26']
]


// console.Log each row of data.
console.log(rowData);