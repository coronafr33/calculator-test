

const a = document.getElementById("display");

function AppendtoDisplay(input){
	a.value += input;

}


function clearDisplay(){
	a.value = "";

}

function calculate(){
	a.value = eval(a.value);
}

function DeletetoDisplay(){
	a.value = a.value.slice(0,-1);
}

// function Addpercent(){
// 	const b = a.value;

// 	if(b.includes('%')){
// 		const parts=b.split('%');
// 		if (parts ===2) {
// 			const percentage = parseFloat(const[0])/100 * parseFloat(const[1]);
// 			a.value = percentage;
// 			return input;
// 		}
// 	}
// }

// function AppendtoDisplay(input) {
//     document.getElementById('display').value += input;
// }

// function clearResult() {
//     document.getElementById('display').value = '';
// }

// function calculateResult() {
//     const resultField = document.getElementById('display');
//     try {
//         resultField.value = eval(resultField.value);
//     } catch (error) {
//         resultField.value = 'Error';
//     }
// }


