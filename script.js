const d = document
const $main = d.querySelector('main')

fetch('CheatSheetGIT.md')
	.then((res) => (res.ok ? res.text() : Promise.reject(res)))
	.then((text) => {
		//console.log(text)
		$main.innerHTML = new showdown.Converter().makeHtml(text)
	})
	.catch((err) => {
		console.log(err)
		let message = err.statusText || 'Ocurrio un error!!!'
		$main.innerHTML = `Error ${err.status}: ${message}`
	})
