interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: '운장', // Site author
	title: '운장 아카이브', // Site title.
	description: '잡다한 생각', // Description to display in the meta tags
	lang: 'ko-KR',
	ogLocale: 'ko_KR',
	shareMessage: '이 글을 공유하세요.', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
