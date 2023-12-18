
export class Utils {

    static dateFormatting(inputDate: Date) {
        if (typeof inputDate === 'string')
            return inputDate
        const year = inputDate.getFullYear();
        const month = String(inputDate.getMonth() + 1).padStart(2, "0");
        const day = String(inputDate.getDate()).padStart(2, "0");
        return `${year}/${month}/${day}`;
    }
}

Utils.dateFormatting(new Date())