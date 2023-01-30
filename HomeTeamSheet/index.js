module.exports = {
	name: "newteamsheet",
	description: "should be working",
	category: "Basic",
	icon: "image",
	hasEntries: true,
	props: [
		{
			name: "image",
			description: "Show the selected image",
			type: "ImageFile"
		}
	],
	entry_props: [

		{
			name: "name",
			description: "Name",
			type: "String"
		},
		{
			name: "fd1",
			description: "Forwards 1",
			type: "String"
		},
		{
			name: "fd2",
			description: "Forwards 2",
			type: "String"
		},
		{
			name: "fd3",
			description: "Forwards 3",
			type: "String"
		},
		{
			name: "fd4",
			description: "Forwards 4",
			type: "String"
		},
		{
			name: "fd5",
			description: "Forwards 5",
			type: "String"
		},
		{
			name: "fd6",
			description: "Forwards 6",
			type: "String"
		},
		{
			name: "fd7",
			description: "Forwards 7",
			type: "String"
		},
		{
			name: "fd8",
			description: "Forwards 8",
			type: "String"
		},
		{
			name: "bk1",
			description: "Backs 9",
			type: "String"
		},
		{
			name: "bk2",
			description: "Backs 10",
			type: "String"
		},
		{
			name: "bk3",
			description: "Backs 11",
			type: "String"
		},
		{
			name: "bk4",
			description: "Backs 12",
			type: "String"
		},
		{
			name: "bk5",
			description: "Backs 13",
			type: "String"
		},
		{
			name: "bk6",
			description: "Backs 14",
			type: "String"
		},
		{
			name: "bk7",
			description: "Backs 15",
			type: "String"
		},
		{
			name: "bk8",
			description: "DOR",
			type: "String"
			
		}
	],

	vue_template: renderPug(getFile("template.pug").toString()),
	vue_component: getFile("component.js").toString(),
	css: renderStylus(getFile("style.styl").toString())
}
