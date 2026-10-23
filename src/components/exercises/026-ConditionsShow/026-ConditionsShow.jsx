function ConditionsShow() {
  let text;
	const show = true;
	
	if (show) {
		text = <p>text</p>;
	} else {
    text = <p>маленьки да удаленький</p>
  }
	
	return <div>
		{text}
	</div>;
}

export default ConditionsShow;