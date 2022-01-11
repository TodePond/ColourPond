Habitat.install(window)

on.load(() => {

	document.body.style["background-color"] = Colour.Black.toString()
	document.body.style["user-select"] = "none"

	const style = HTML `<style>
		.thing {
			font-family: Rosario;
			font-size: 25px;
			display: inline-block;
			margin: 10px;
			padding: 10px 15px;
			font-weight: bold;
			cursor: pointer;
			user-select: none;
		}
	</style>`

	document.head.appendChild(style)
})

const createColourThing = (name) => {
	const colour = Colour[name]
	name = name.as(UpperCase)

	if (!colour.isDark) {
		const style = `
			background-color: ${colour};
			color: ${Colour.Black};
		`
		const div = HTML `<div class="thing" style="${style}">${name}</div>`
		document.body.appendChild(div)
		
		const style2 = `
			color: ${colour};
			background-color: ${Colour.Grey};
		`
		const div2 = HTML `<div class="thing" style="${style2}">${name}</div>`
		document.body.appendChild(div2)

		const style3 = `
			color: ${colour};
			background-color: ${Colour.Black};
		`
		const div3 = HTML `<div class="thing" style="${style3}">${name}</div>`
		document.body.appendChild(div3)
	}
	
	if (!colour.isLight) {
		const style = `
			background-color: ${colour};
			color: ${Colour.White};
		`
		const div = HTML `<div class="thing" style="${style}">${name}</div>`
		document.body.appendChild(div)
		
		const style3 = `
			color: ${colour};
			background-color: ${Colour.White};
		`
		const div3 = HTML `<div class="thing" style="${style3}">${name}</div>`
		document.body.appendChild(div3)
	}
	
	/*const stylea = `
		color: ${colour};
		background-color: ${Colour.LightGrey};
	`
	const diva = HTML `<div class="thing" style="${stylea}">${name}</div>`
	document.body.appendChild(diva)*/

	document.body.appendChild(HTML`<br>`)
}

for (const name in Colour) {
	if (name[0].is(UpperCase)) {
		createColourThing(name)
	}
}


$$(".thing").forEach(thing => thing.on.click(() => {
	const name = thing.textContent.as(LowerCase)
	const Name = name[0].as(UpperCase) + name.slice(1)
	const colour = Colour[Name]
	navigator.clipboard.writeText(colour.hex)
}))
