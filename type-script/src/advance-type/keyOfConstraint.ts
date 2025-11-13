// keyof: type operator
type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVheicleOne: MyVehicle1 = 'bike' 