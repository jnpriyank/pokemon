export const sortByName = (data) => {
    return data?.sort((a, b) => {
        let aNameUpperCase = a.name.toUpperCase();
        let bNameUpperCase = b.name.toUpperCase();
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
};