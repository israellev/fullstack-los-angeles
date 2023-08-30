
export class Utils {

    // private url = "http://localhost:3000"

    // async getData() {
    //     const data = await fetch(this.url)
    //     Utils.dateFormatting()
    //     return data
    // }

    static dateFormatting(inputDate: Date) {
        if (typeof inputDate === 'string')
            return inputDate
        const year = inputDate.getFullYear();
        const month = String(inputDate.getMonth() + 1).padStart(2, "0");
        const day = String(inputDate.getDate()).padStart(2, "0");
        return `${year}/${month}/${day}`;
    }
}

/*  non-staic fucntions: */
// const utilss = new Utils() // 1. create class instance
// const userData = utilss.getData() // 2. use function

// static functions:
Utils.dateFormatting(new Date())