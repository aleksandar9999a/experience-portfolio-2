import constellation_config from "../config/constellationConfig";
import { IStarCoords } from "../interfaces/interfaces";

export default class Star {
    private width: number;
    private height: number;
    private context: CanvasRenderingContext2D | null;
    private stars: IStarCoords[] = [];
    private constellation_config: any;

    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.constellation_config = constellation_config;
    }

    setWindowSize(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    private generateRandomCoords() {
        const x = Math.random() * this.width;
        const y = Math.random() * this.height;
        const vx = (this.constellation_config.velocity - (Math.random() * 0.5));
        const vy = (this.constellation_config.velocity - (Math.random() * 0.5));
        const radius = this.constellation_config.star.randomWidth
            ? (Math.random() * this.constellation_config.star.width)
            : this.constellation_config.star.width;

        return { x, y, vx, vy, radius };
    }

    create() {
        if (!this.context) {
            return;
        }

        for (let i = 0; i < this.constellation_config.length; i++) {
            const star = this.generateRandomCoords();
            this.createCustomStar(star);
            this.stars.push(star)
        }
    }

    private createCustomStar({ x, y, radius }: IStarCoords) {
        if (!this.context) {
            return;
        }

        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2, false);
        this.context.fill();
    }

    private increaseCoords(star: IStarCoords) {
        if (star.y < 0 || star.y > this.height) {
            star.vy = -star.vy;
        } else if (star.x < 0 || star.x > this.width) {
            star.vx = -star.vx;
        }

        star.x += star.vx;
        star.y += star.vy;

        return star;
    }

    animate() {
        if (!this.context) {
            return;
        }

        this.context.clearRect(0, 0, this.width, this.height);

        this.stars.map(star => {
            const currStar = this.increaseCoords(star);
            this.createCustomStar(currStar);
            return currStar;
        });
    }

    private isValidDistance(iStar: IStarCoords, jStar: IStarCoords) {
        return (iStar.x - jStar.x) < this.constellation_config.distance
            && (iStar.y - jStar.y) < this.constellation_config.distance
            && (iStar.x - jStar.x) > -this.constellation_config.distance
            && (iStar.y - jStar.y) > -this.constellation_config.distance;
    }

    private isValidRadius(iStar: IStarCoords, x: number, y: number) {
        return (iStar.x - x) < this.constellation_config.radius
            && (iStar.y - y) < this.constellation_config.radius
            && (iStar.x - x) > -this.constellation_config.radius
            && (iStar.y - y) > -this.constellation_config.radius;
    }

    private writeLine(iStar: IStarCoords, jStar: IStarCoords) {
        if (!this.context) {
            return;
        }

        this.context.beginPath();
        this.context.moveTo(iStar.x, iStar.y);
        this.context.lineTo(jStar.x, jStar.y);
        this.context.stroke();
        this.context.closePath();
    }

    private initWriting(starOne: IStarCoords, starTwo: IStarCoords) {
        if (
            this.context
            && (
                this.isValidDistance(starOne, starTwo)
                && (
                    this.isValidRadius(starOne, this.width * 0.1, this.height * 0.3)
                    || this.isValidRadius(starOne, this.width * 0.8, this.height * 0.6)
                )
            )
        ) {
            this.writeLine(starOne, starTwo);
        }
    }

    line() {
        if (!this.context) {
            return;
        }

        this.stars.forEach(starOne => this.stars.forEach(starTwo => this.initWriting(starOne, starTwo)));
    }
}