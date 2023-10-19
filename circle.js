const circle = (radius) => {
    const diameter = 2*radius;
    const perimeter = 2*radius*Math.PI;
    const area = Math.PI*(radius**2);
    return `Circle of radius : ${radius} \n Diameter : ${diameter} \n Perimeter : ${perimeter} \n Area : ${area}`;
};


console.log(circle(4));