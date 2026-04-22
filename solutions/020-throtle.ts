function throtle(fn: Function, limit: number) {
	let isThrottled = false;
	return function(...args: any[]) {
        if (!isThrottled) {
            fn(...args);
            // 2. Blocăm ușa
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
            }, limit);
        }
    };
}

const click = throtle( () => console.log("shoot"), 2000);

//simulam un click rapid de 50 de ori
for (let index = 0; index < 50; index++) {
	click()
}

//pur si simplu nu apelam daca e deja folosit

//ca si cum la un lift daca se urca o persoana si apasa pe butonul de etaj, alta persoana nu mai poate intra in lift deloc pana nu ajunge prima persoana