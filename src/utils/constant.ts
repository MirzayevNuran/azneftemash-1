import { Item, ItemCatImg, ItemImg } from './types'

import cImgE from '../assets/catalogHome/4.jpg'
import cImgNine from '../assets/catalogHome/5.jpg'
import eight from '../assets/catalogHome/8.jpg'
import cImgF from '../assets/catalogHome/n1.jpeg'
import cImgSecond from '../assets/catalogHome/n2.jpeg'
import cImgTh from '../assets/catalogHome/n3.jpeg'
import cImgFo from '../assets/catalogHome/n4.jpeg'
import cImgFi from '../assets/catalogHome/n5.jpeg'
import cImgS from '../assets/catalogHome/nasos-nb-125-1.jpeg'
import cImgSe from '../assets/catalogHome/nasos-nb-125.jpeg'
import pTwo from '../assets/catalogHome/p-2.gif'
import cImgT from '../assets/catalogHome/up-100-china-1.jpeg'
import chief from '../assets/img/chief.jpg'
import val from '../assets/img/val.gif'

export const navItems: Array<Item> = [
	{
		title: 'Home',
		route: '/',
	},
	{
		title: 'About Us',
		route: 'about',
	},
	{
		title: 'Catalog',
		route: 'catalog',
	},
	{
		title: 'Our Progresses',
		route: 'ourprogresses',
	},
	// {
	// 	title: 'Metal Konstruksiya',
	// 	route: 'MetalKonstruksiya',
	// },
	// {
	// 	title: 'Ruselboru',
	// 	route: 'Ruselboru',
	// },
	{
		title: 'Contact',
		route: 'contact',
	},
]

export const itemIMG: Array<ItemImg> = [
	{
		img: chief,
		name: 'Valiyev Shahmar Rustam',
		position: 'president of "Azneftemash" OJSC',
	},
	{
		img: val,
		name: 'Aliyev V.A.',
		position: 'Plant manager "Azneftemash"',
	},
]

export const itemCatalog: Array<ItemCatImg> = [
	{
		img: cImgSe,
		title: 'Breakfast',
		rows: 2,
		cols: 2,
	},
	{
		img: cImgSecond,
		title: 'Burger',
	},
	{
		img: cImgTh,
		title: 'Camera',
	},
	{
		img: cImgFo,
		title: 'Coffee',
		cols: 2,
	},
	{
		img: cImgFi,
		title: 'Hats',
		cols: 2,
	},
	{
		img: cImgE,
		title: 'Honey',
		author: '@arwinneil',
		rows: 2,
		cols: 2,
	},
	{
		img: cImgF,
		title: 'Basketball',
	},
	{
		img: cImgS,
		title: 'Fern',
	},
	{
		img: cImgNine,
		title: 'Mushrooms',
		rows: 2,
		cols: 2,
	},
	{
		img: pTwo,
		title: 'Tomato basil',
	},
	{
		img: eight,
		title: 'Sea star',
	},
	{
		img: cImgT,
		title: 'Bike',
		cols: 2,
	},
]
