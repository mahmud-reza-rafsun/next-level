

interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string
    };
    smartWatch: T;
    bike?: X
};

interface Smartwatch {
    heartRate: number;
    stopWatch: boolean;
}

interface SmartWatch {
    heartRate: number;
    callSupport: boolean,
    calculator: boolean,
    AiFeature: boolean,
}

interface RichBike {
    brand: string;
    model: string
}

const poorDeveloper: Developer<Smartwatch> = {
    name: "Rafsun",
    salary: 20,
    device: {
        brand: 'Lenovo',
        model: "G40 - G80",
        releasedYear: '2014'
    },
    smartWatch: {
        heartRate: 61.65,
        stopWatch: true
    }
}



const richDeveloper: Developer<SmartWatch, RichBike> = {
    name: "Rafsun",
    salary: 20,
    device: {
        brand: 'Lenovo',
        model: "G40 - G80",
        releasedYear: '2014'
    },
    smartWatch: {
        heartRate: 61.65,
        callSupport: true,
        calculator: true,
        AiFeature: true
    },
    bike: {
        brand: "Yamaha",
        model: "R15"
    }
}

console.log({ poorDeveloper }, { richDeveloper });

