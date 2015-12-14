//temp work file
var sentence1 = 'More food please.';
/*
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.
 HINT: the 'split' method on String will be useful.
*/

// TODO: part #1: use a for loop to replace the words in sentence 1 with
// 'chirp' (10 points)

var temp1=sentence1.split(" ");

//you now have an array that contains each word
//use for loop to change eachn word to chirp
for (i=0;i<temp1.length;i++) {
temp1[i]="chirp"
}
//need to then concatenate them together
sentence1=temp1.join(" ")+"."

//thebn assign that to the original sentence

