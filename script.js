

  		let customers = [
   		   { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
    	 	{ id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
     		{ id: 4, name: 'shep', email: 'shep@gmail.com'},
     ];


     	const createButton = document.querySelector('.buttonCreate');
     	const custName = document.querySelector('input[name="custName"]');
     	const custEmail = document.querySelector('input[name="custEmail"]');
 		const checkBox = document.querySelector('input[name="isVIP"]');
 		const errorMessageName = document.querySelector('#custNameErr');
 		const errorMessageEmail = document.querySelector('#custEmailErr');
 		const customerRows = document.querySelector('.customerRows');


 		customers.forEach( customer => customerRows.append(customer)
 			);
 
 
 		createButton.addEventListener('click', (ev) => {

 		})


 		 custName.addEventListener('keyup', (ev) => {

 		 	if(!ev.target.value) {
 		 		errorMessageName.innerHTML = 'name required';
 		 	} else {
 		 		errorMessageName.innerHTML = '';

 		 	}

 		 })

 		 custEmail.addEventListener('keyup', (ev) => {

 		 	if(!ev.target.value) {
 		 		errorMessageEmail.innerHTML = 'email required';
 		 	} 

 		 	if(!ev.target.value.includes('@')) {
 		 		errorMessageEmail.innerHTML = 'email must contain an @';
 		 	} 
 		 	else {
 		 		errorMessageEmail.innerHTML = '';
 		 	}

 		 })




    

    	if (isVIP.checked) {

    	}

