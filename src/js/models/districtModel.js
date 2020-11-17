export class Districtinfo {
    constructor(id) {
        this.id = id;
    }
    getDistrictData(district) {
        try {
            console.log(district);
            this.confirmed = district["delta"].confirmed;
            this.deceased = district["delta"].deceased;
            this.recovered = district["delta"].recovered;
        } catch (error) {
            this.confirmed = district["total"].confirmed;
            this.deceased = district["total"].deceased;
            this.recovered = district["total"].recovered;

        }


    }
}