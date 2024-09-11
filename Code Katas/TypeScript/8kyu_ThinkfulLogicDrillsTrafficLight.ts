// 8 kyu Thinkful - Logic Drills: Traffic light

// You're writing code to control your town's traffic lights. You need a function to handle each change from
// green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and
// returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

export function updateLight(current: string): string {
    const ordinalLightColors: string[] = ['green', 'yellow', 'red'];
    const currentIndex: number = ordinalLightColors.indexOf(current);
    return ordinalLightColors[currentIndex == 2 ? 0 : (currentIndex + 1)]
}

// This is a clever solution. Certainly more performant than mine.
const lights = {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
};

export const updateLightAgain = (current: string): string => {
    return lights[current];
};

// This is good best practice solution. Certainly more performant than mine.
export function updateLightOnceMore(current: string): string {
    switch(current) {
        case "green": return "yellow";
        case "yellow": return "red";
        case "red": return "green";
    }

    return "";
}

// This is a solid one liner
export const updateLightYetAgain = ($: string) => $ === 'green' ? 'yellow' : $ === 'yellow' ? 'red' : $ === 'red' ? 'green' : 'error'