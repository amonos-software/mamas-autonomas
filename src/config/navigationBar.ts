// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Mamás Autónomas',
		text: 'Mamás Autónomas.'
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		// { name: 'Pricing', link: '/pricing' },
		{ name: 'Nuestros beneficios', link: '#features' },
		// {
		// 	name: 'Resources',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		// { name: 'Contacto', link: '/contact' }
	],
	navActions: [{ name: '¡Únete a nosotras!', link: '/', style: 'primary', size: 'lg' }]
}
