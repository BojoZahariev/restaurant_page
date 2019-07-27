const addressDiv = () => {
	let address = document.createElement('div');
	address.id = 'address';
    address.textContent = 'ul. "Mladezhka" 32А, Plovdiv, Bulgaria'

	return address;
};

const mapDiv = () => {
	let mapLocation = document.createElement('div');
	mapLocation.id = 'map';

	return mapLocation;
};

const hoursDiv = () => {
	let hours = document.createElement('div');
    hours.id = 'hours';
    hours.textContent = 'Opening Hours: 9:30am–9:30pm'

	return hours;
};

const bigContainerLocation = () => {
	let big = document.createElement('div');
	big.classList.add('big-container');
	big.appendChild(addressDiv());
	big.appendChild(mapDiv());
	big.appendChild(hoursDiv());

	return big;
};

export { bigContainerLocation };
