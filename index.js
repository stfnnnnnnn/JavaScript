/*Full Name*/
const firstName = document.querySelector('#first-name');
const firstNameText = document.querySelector('#txt-first-Name');

const lastName = document.querySelector('#last-name');
const lastNameText = document.querySelector('#txt-last-Name');


/*Question and Answer*/
const q1 = document.querySelector('#q1');
const a1 = document.querySelector('#a1');

const q2 = document.querySelector('#q2');
const a2 = document.querySelector('#a2');

/*Submit Button*/
let correctAnswers = 0;




q1.addEventListener('change', function(){
	let q1Value = q1[q1.selectedIndex].value;
	a1.textContent = q1Value;
	if (q1Value === "cow"){
		a1.textContent = 'Correct!';
		correctAnswers++;
	} else {
		a1.textContent = 'Incorrect, please try again.';
	}
});



q2.addEventListener('change', function(){
	let q2Value = q2[q2.selectedIndex].value;
	a2.textContent = q2Value;

	if (q2Value === "prisoner"){
		a2.textContent = 'Correct!';
		correctAnswers++;
	} else {
		a2.textContent = 'Incorrect, please try again.';
	}
});


document.getElementById("submit-button").addEventListener("click", myFunction);
	
		function myFunction() {
		alert ('Good day, '+ firstName.value + " "+ lastName.value + "." + " " +
			'You have' + " " + correctAnswers + '/2 questions correct.'
			);
	}

