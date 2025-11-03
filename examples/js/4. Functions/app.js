function solveEquation(a, b, c) {
    
    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        console.log("No real roots");
    }

    if (delta === 0) {
        const root = -b / (2 * a);
        console.log("One real root:", root);
    }

    if (delta > 0) {
        const root1 = (-b + Math.sqrt(delta)) / (2 * a);
        const root2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Two real roots:", root1, root2);
    }
}

solveEquation(1, -3, 2); // Two real roots: 2 1
solveEquation(1, 2, 1);  // One real root: -1
solveEquation(1, 0, 1);  // No real roots





