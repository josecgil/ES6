/* class support */

//old way

function Distance(value, unit) {
    this.METERS_IN_1KM = 1000;
    this.METERS_IN_1MILE = 1609.34;

    switch (unit) {
        case "m":
            this.distanceInMeters=value;
            break;
        case "km":
            this.distanceInMeters=value * this.METERS_IN_1KM;
            break;
        case "miles":
            this.distanceInMeters=value * this.METERS_IN_1MILE;
            break;
    }
}

Distance.prototype.add=function(distance) {
    const newDistanceInMeters=this.distanceInMeters+distance.inMeters();
    return new Distance(newDistanceInMeters, "m");
};

Distance.prototype.inMeters=function() {
    return this.distanceInMeters;
};

Distance.prototype.inKilometers=function() {
    return this.distanceInMeters/this.METERS_IN_1KM;
};

let bcnToMad=new Distance(500, "km");
let madToSev=new Distance(242.956, "miles");
let totalDistanceInKm=bcnToMad.add(madToSev).inKilometers();

console.log(totalDistanceInKm);

//new way

//constructor
//methods
//static methods
//getters & setters
//inheritance

//No private / public still "_" convention

class NewDistance {

    static get METER() { return "m"; } //mimics and static const
    static get KM() { return "km"; }
    static get MILES() { return "miles"; }

    get _METERS_IN_1KM() { return 1000; }
    get _METERS_IN_1MILE() { return 1609.34; }

    constructor(value, unit) {
        switch (unit) {
            case Distance.METER:
                this.distanceInMeters = value;
                break;
            case Distance.KM:
                this.distanceInMeters = value * this._METERS_IN_1KM;
                break;
            case Distance.MILES:
                this.distanceInMeters = value * this._METERS_IN_1MILE;
                break;
        }
    }

    add(distance) {
        const newDistanceInMeters = this.distanceInMeters + distance.inMeters();
        return new Distance(newDistanceInMeters, Distance.METER);
    }

    inMeters() {
        return this.distanceInMeters;
    }

    inKilometers() {
        return this.distanceInMeters / this._METERS_IN_1KM;
    }
}

bcnToMad=new NewDistance(500, NewDistance.KM);
madToSev=new NewDistance(242.956, NewDistance.MILES);
totalDistanceInKm=bcnToMad.add(madToSev).inKilometers();

console.log(totalDistanceInKm);

class AstronomicalDistance extends Distance {

    static get LIGHT_YEAR() { return "light-year" }

    get _METERS_IN_1LIGHT_YEAR() { return Number("1.057E16"); }

    constructor(value, unit) {
        super(value, unit);
        switch (unit) {
            case AstronomicalDistance.LIGHT_YEAR:
                this.distanceInMeters = value * this._METERS_IN_1LIGHT_YEAR;
                break;
        }
    }
}

const distanceToAlphaCentauri=new AstronomicalDistance(4.367, AstronomicalDistance.LIGHT_YEAR);
const totalDistanceToNearestStarInKm=distanceToAlphaCentauri.inKilometers();
console.log(totalDistanceToNearestStarInKm);
