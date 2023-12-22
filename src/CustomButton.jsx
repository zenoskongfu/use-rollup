const { Button } = require("rollup-build");
const CustomButton = () => {
	return (
		<div>

			<Button contents='custom Button' />
		</div>
	);
};

module.exports = CustomButton;
