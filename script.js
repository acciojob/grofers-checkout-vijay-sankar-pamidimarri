const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let arrval=document.getElementsByClassName("price");
let ct=0;
for(let i=0;i<arrval.length;i++){
	ct+=parseFloat(arrval[i].textContent || 0);
}
	console.log(ct);
document.querySelector("#val").textContent=ct;
};

getSumBtn.addEventListener("click", getSum);

