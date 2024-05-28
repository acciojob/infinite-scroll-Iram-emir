//your code here!
let doc = document.getElementById('infi-list');
let i;


for (i = 1; i <= 10; i++) {
    doc.innerHTML += `<li>Item ${i}</li>`;
}

let a = doc.lastChild;

a.addEventListener('mouseover', () => {
	
        for (let j = 11; j <= 12; j++) {
            doc.innerHTML += `<li>Item ${j}</li>`;
        }
   
});

