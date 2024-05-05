interface optionsResultItem {
    iron?: string;
    coal?: string;
    bronze?: string;
    pitch?: string;
    wood?: string;
    cloth?: string;
    hour?: string;
}

export const calculateResultItem = (options: optionsResultItem, sales7 = false, sales_10 = false) => {
    if (sales7) {
        Object.values(options).forEach(element => {
            console.log(options)
        });

        return options;
    }
    if (sales_10) {
        Object.values(options).forEach(element => {
            console.log(element);
        });

        return options;
    }

    return options;
}