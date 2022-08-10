export const getColumnValue = (row, columnDefinition) => {
    if(typeof columnDefinition.template === 'function'){
        return columnDefinition.template(row, columnDefinition);
    }

    if (Array.isArray(row[columnDefinition.name]) && row[columnDefinition.name].length > 1) {
        return row[columnDefinition.name].join(', ');
    }
    return row[columnDefinition.name];
};