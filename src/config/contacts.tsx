interface IContact {
    id: number | string,
    alt: string,
    icon: string,
    href: string
}

const contacts: IContact[] = [
    { id: 1, alt: 'instagram', icon: 'instagram', href: 'https://www.instagram.com/sandi9999a/' },
    { id: 2, alt: 'github', icon: 'git', href: 'https://github.com/aleksandar9999a' },
    { id: 3, alt: 'linkedin', icon: 'linkedin', href: 'https://www.linkedin.com/in/alexandar-todorov/' }
]

export default contacts;