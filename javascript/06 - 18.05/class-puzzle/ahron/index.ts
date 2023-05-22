export{};

const getFullName = (firstName:string, lastName:string):string => {
    const Full = `${[firstName]} ${[lastName]}`;
    return Full;
};

const firstName = (prompt(`what yuore name ?`));
const lastName = (prompt(`waht youre last name ?`));
const Full = getFullName(firstName , lastName);
console.log (Full);
