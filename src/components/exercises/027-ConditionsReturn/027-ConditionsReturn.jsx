function ConditionsReturn() {
  let text;
	const isAdmin = true;
	
	if (isAdmin) {
		text = <div><p>text1</p></div>;
	} else {
		text = <p>tt</p>;
	}
	
	return text;
}

export default ConditionsReturn;