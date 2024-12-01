

export const operations = [
    { value: "+", label: "Sčítání" },
    { value: "-", label: "Odčítání" },
    { value: "*", label: "Násobení" },
    { value: "/", label: "Dělení" },
];
export function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return null;
    }
}