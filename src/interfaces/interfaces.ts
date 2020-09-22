export interface IConstellationConfig {
	star: IConfigDefault,
	line: IConfigDefault,
	width: number,
	height: number,
	velocity: number,
	length: number,
	distance: number,
	radius: number
}

interface IConfigDefault {
	color: string,
	width: number,
	randomWidth: boolean
}

export interface IStarCoords {
    x: number,
    y: number,
    vx: number;
    vy: number;
    radius: number;
}

export interface ITab {
    id: number,
    name: string,
    route: string,
    icon: string,
    auth?: boolean
}

export interface IUser {
    firstName: string,
    lastName: string,
    devType: string
}

export interface IContact {
    id: number | string,
    alt: string,
    icon: string,
    href: string
}

export type TIconsOptions = {
    [key: string]: string
}

export interface ITimelineItems {
    id: number,
    title: string,
    desc: string,
    link?: string,
    start?: string,
    end?: string
}

export interface IUploadedImage {
    _id: string,
    url: string
}

export interface IProject {
    _id?: string,
    title: string,
    description: string, 
    link: string,
    creatorId?: string,
    images: IUploadedImage[]
}

export interface IEmail {
    _id?: string,
    isAnswered?: boolean,
    name: string,
    email: string,
    subject: string,
    message: string
}