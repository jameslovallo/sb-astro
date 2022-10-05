export default (blok) => {
	const fixVal = (val, fallback) => {
		return val && typeof val === 'string' ? val : fallback
	}
	const r = () => {
		let { xsmall, small, medium, large, xlarge } = blok.responsive
		xsmall = fixVal(xsmall, 12)
		small = fixVal(small, xsmall)
		medium = fixVal(medium, small)
		large = fixVal(large, medium)
		xlarge = fixVal(xlarge, large)
		return `--xs: ${xsmall}; --sm: ${small}; --md: ${medium}; --lg: ${large}; --xl: ${xlarge};`
	}
	const v = blok.vertical_alignment
		? ` align-self: ${blok.vertical_alignment};`
		: ''
	return r() + v
}
