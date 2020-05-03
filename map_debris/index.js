function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    return arr.map(item => {
        const T = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
        return { name: item.name, orbitalPeriod: T }
    });
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);