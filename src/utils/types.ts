export interface Item {
	title: string
	route: string
}

export interface ItemImg {
	img: string
	name: string
	position?: string
	number?: number | string
	description?: { mail?: string; web?: string; text?: string }
}

export interface ItemCatImg {
	img: string
	title: string
	rows?: number
	cols?: number
	author?: string
}
