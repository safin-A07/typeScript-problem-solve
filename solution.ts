function formatValue(value: string | number | boolean) {
    if (typeof value == 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'boolean') {
        if (value === false) {
            return true;
        }
        else {
            return false;
        }
    }
}

function getLength(value: string | any[]) {
    if (typeof value === "string") {
        let number = value.length;
        return number;
    }
    else if (Array.isArray(value)) {
        let arraySize = value.length;
        return arraySize;
    }

}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }

}

function filterByRating(values: { title: string, rating: number }[]) {
    let arr: { title: string, rating: number }[] = [];
    values.forEach(book => {
        if (book.rating >= 4) {
            arr.push(book);
        }
    });
    return arr;
}

function filterActiveUsers(value: { id: number, name: string, email: string, isActive: boolean }[]) {
    let arr: { id: number, name: string, email: string, isActive: boolean }[] = [];
    value.forEach(val => {
        if (val.isActive === true) {
            arr.push(val)
        }
    })
    return arr;
}

interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}
function printBookDetails(value: Book) {
    return console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable ? "Yes" : "No"}`)
}


function getUniqueValues(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
    const result: (number | string)[] = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!result.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
}



type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const itemTotal = product.price * product.quantity;


        const discountAmount = product.discount ? (itemTotal * product.discount) / 100 : 0;

        const totalItemPrice = itemTotal - discountAmount;

        total += totalItemPrice;
    }

    return total;
}


console.log(getUniqueValues([1, 2, "apple"], [2, "banana", "apple"]));