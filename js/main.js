function openNav() {
	console.log("Open Nav Clicked");
	// document.getElementById('navBarID').style.width = '250px';
	var element = document.getElementById("navBarID");
	element.classList.toggle("hidden");
}

function closeNav() {
	// document.getElementById('navBarID').style.width = '0px';
	var element = document.getElementById("navBarID");
	element.classList.toggle("hidden");
}




window.onload = function () {

	const form = document.getElementById('formsss');
	const name = document.getElementById('n1');
	const email = document.getElementById('e1');
	const subject = document.getElementById('s1');
	const massege = document.getElementById('t1');

	// firebase stuff
	var firebaseConfig = {
		apiKey: "AIzaSyCGsVgEbumNSYg79Np3-Nm424ASswQLj6w",
		authDomain: "myportfolioprojectform.firebaseapp.com",
		projectId: "myportfolioprojectform",
		storageBucket: "myportfolioprojectform.appspot.com",
		messagingSenderId: "1062207386633",
		appId: "1:1062207386633:web:b219e9fb6f029794e774d8"
	};

	firebase.initializeApp(firebaseConfig);
	var firestore = firebase.firestore();

	const db = firestore.collection("contactData");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const userName = name.value.trim();
		const userEmail = email.value.trim();
		const userSubject = subject.value.trim();
		const userMessage = massege.value.trim();

		if (checkInputs()) {
			// console.log(`Everything Fine....`);

			db.doc().set({
				name: userName,
				email: userEmail,
				subject: userSubject,
				message: userMessage
			}).then(() => {
				console.log("Data Saved");
				window.alert("Your Message Send Successfully");
			}).catch((err) => {
				console.log(err);
			});

			document.getElementById('n1').value = "";
			document.getElementById('e1').value = "";
			document.getElementById('s1').value = "";
			document.getElementById('t1').value = "";
		} else {
			console.log(`Something Wrong....`);
		}
	});

	function checkInputs() {

		const userName = name.value.trim();
		const userEmail = email.value.trim();
		const userSubject = subject.value.trim();
		const userMassage = massege.value.trim();

		let allRight = true;

		if (userName === "") {
			showError(name);
			allRight = allRight && false;
		} else {
			setSuccess(name);
			allRight = allRight && true;
		}

		if (userEmail === "") {
			showError(email);
			allRight = allRight && false;
		} else {
			setSuccess(email);
			allRight = allRight && true;
		}

		if (userSubject === "") {
			showError(subject);
			allRight = allRight && false;
		} else {
			setSuccess(subject);
			allRight = allRight && true;
		}

		if (userMassage === "") {
			showError(massege);
			allRight = allRight && false;
		} else {
			setSuccess(massege);
			allRight = allRight && true;
		}

		return allRight;
	}

	function setSuccess(input) {
		// console.log(input.parentElement);
		const parent = input.parentElement;
		const small = parent.querySelector('small');

		small.style.opacity = '0';
		// console.log(small);
	}

	function showError(input) {
		console.log(input.parentElement)
		const parent = input.parentElement;
		const small = parent.querySelector('small');

		small.style.opacity = '1';
		// console.log(small);
	}
}




// const scrollDiv = document.getElementById("scrollDiv1");

window.onscroll = function () {
	const scrollDiv = document.getElementById("hideA");
	// console.log(scrollDiv);

	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		hideScrollDiv();
	} else {
		showScrollDiv();
	}
}

function hideScrollDiv() {
	document.getElementsByClassName("scroll-down")[0].style.display = 'none';
}

function showScrollDiv() {
	// console.log('scrollDiv');
	// scrollDiv.className = "";
}