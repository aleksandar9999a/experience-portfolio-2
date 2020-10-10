const constellation_config = {
    star: {
        color: '#08fdd8',
        width: 1,
        randomWidth: false
    },
    line: {
        color: '#08fdd8',
        width: 0.05,
        randomWidth: true
    },
    width: window.innerWidth - 20,
    height: window.innerHeight,
    velocity: 0.2,
    length: window.innerWidth < 500 ? 50 : 150,
    distance: 80,
    radius: 200
}

export default constellation_config