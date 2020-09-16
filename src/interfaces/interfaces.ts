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

export default interface ITab {
    id: number,
    name: string,
    route: string,
    icon: string,
    auth?: boolean
}
