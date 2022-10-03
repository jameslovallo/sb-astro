export default (img, w, h) => {
	return [
		img.filename,
		'/m',
		'/',
		w,
		'x',
		h,
		'/filters:quality(80):fill(transparent)',
		img.focus ? `:focal${img.focus})` : '',
	].join('')
}
