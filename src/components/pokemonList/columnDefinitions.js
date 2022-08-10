const getColumnDefinitions = () => {
  return [
    {
      id: 1,
      name: 'name',
      width: '15%',
    },
    {
      id: 2,
      name: 'num',
      width: '10%',
    },
    {
      id: 3,
      name: 'type',
      width: '20%',
    },
    {
      id: 4,
      name: 'height',
      width: '10%',
    },
    {
      id: 5,
      name: 'weight',
      width: '10%',
    },
    {
      id: 6,
      name: 'weaknesses',
      width: '20%',
    },
    {
      id: 7,
      name: 'next_evolution',
      width: '15%',
      template: (row, columnDefinition) => {
        return row[columnDefinition.name]?.length &&
          row[columnDefinition.name].map((evolution) => {
            return `${evolution.num} -> ${evolution.name}`;
          }).join('\n');
      }
    }
  ];
};

export default getColumnDefinitions;
