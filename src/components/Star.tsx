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
        this.create();
    }

    setWindowSize(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    private generateRandomCoords() {
        const x = Math.random() * this.width;
        const y = Math.random() * this.height;
        const n = Math.random() * 0.5;
        const vx = this.constellation_config.velocity - n;
        const vy = this.constellation_config.velocity - n;
        const radius = this.constellation_config.star.randomWidth
            ? Math.random() * this.constellation_config.star.width
            : this.constellation_config.star.width;

        return { x, y, vx, vy, radius };
    }

    create() {
        for (let i = 0; i < this.constellation_config.length; i++) {
            const star = this.generateRandomCoords();
            this.createCustomStar(star);
            this.stars.push(star)
        }
    }

    private createCustomStar({ x, y, radius }: IStarCoords) {
        this.context!.beginPath();
        this.context!.arc(x, y, radius, 0, Math.PI * 2, false);
        this.context!.fill();
    }

    private increaseCoords(star: IStarCoords) {
        if (star.y < 0 || star.y > this.height) {
            star.vy = -star.vy;
        }

        if (star.x < 0 || star.x > this.width) {
            star.vx = -star.vx;
        }

        star.x += star.vx;
        star.y += star.vy;

        return star;
    }

    animate() {
        this.context!.clearRect(0, 0, this.width, this.height);

        this.stars.forEach((starOne, i) => {
            const currStar = this.increaseCoords(starOne);
            this.createCustomStar(currStar);
            this.stars.slice(i + 1).forEach(starTwo => this.initWriting(currStar, starTwo));
        });
    }

    private isValidCoords(iStar: IStarCoords, jStar: { x: number, y: number }, param: string) {
        return (iStar.x - jStar.x) < this.constellation_config[param]
            && (iStar.y - jStar.y) < this.constellation_config[param]
            && (iStar.x - jStar.x) > -this.constellation_config[param]
            && (iStar.y - jStar.y) > -this.constellation_config[param];
    }

    private writeLine(iStar: IStarCoords, jStar: IStarCoords) {
        this.context!.beginPath();
        this.context!.moveTo(iStar.x, iStar.y);
        this.context!.lineTo(jStar.x, jStar.y);
        this.context!.stroke();
        this.context!.closePath();
    }

    private initWriting(starOne: IStarCoords, starTwo: IStarCoords) {
        if (this.isValidCoords(starOne, starTwo, 'distance')) {
            this.writeLine(starOne, starTwo);
        }
    }
}