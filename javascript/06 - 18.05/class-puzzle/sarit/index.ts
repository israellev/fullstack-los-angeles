export {};

const getFullName = (firstName: string, lastName: string): void => {
    const greetingMessage = `Welcome ${firstName} ${lastName}! We were waiting for you`;
    console.log(greetingMessage);
};

getFullName("Sarit", "Tsvika");