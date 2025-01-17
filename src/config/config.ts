// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Mamás Autónomas',
	siteDescription:
		'FoImpulsa tu independencia económica, fortalece tu oficio y construye una red de apoyo mientras creces personal y profesionalmente.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Mamás Autónomas. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
