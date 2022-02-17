
//global variables
const qeustions = document.getElementsByClassName('faq__q');
// functions
function hideAll(){
	for(qeustion of qeustions){
		if(qeustion.classList.contains("faq__q-show"))
		{
			qeustion.classList.remove("faq__q-show")
		}
	}
}
function show(eve){
	
	hideAll();
	eve.target.classList.add("faq__q-show");
}
// execute
for(qeustion of qeustions){
	qeustion.addEventListener('click',show)
}