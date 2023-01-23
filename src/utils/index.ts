export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomUserName(): string {
    const usernames = ["Small", "Blue", "Ugly", "Bear", "Dog", "Banana"];
    return usernames[Math.floor(Math.random() * usernames.length)];
}

export function getRandomPhoneNumber(): string {
    const digits = Math.floor(Math.random() * 9000000000) + 1000000000;
    const digitsArr = digits.toString().split('')
    digitsArr.splice(2, 0, ' ')

    return `+${digitsArr.join('')}`;
}