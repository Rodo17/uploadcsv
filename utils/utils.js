exports.csvStringToArray = (document) => {
  const columnsNames = [
    { name: 'UUID' },
    { name: 'VIN' },
    { name: 'Make' },
    { name: 'Model' },
    { name: 'Mileage' },
    { name: 'Year' },
    { name: 'Price' },
    { name: 'Zip Code' },
    { name: 'Create Date' },
    { name: 'Update Date' },
  ];

  const documentSplited = document.split('\n');

  const data = documentSplited[0].replace('\r', '').split(',');
  for (let i = 0; i < data.length; i++) {
    const column = columnsNames.find((c) => c.name === data[i]);

    if (column) {
      const poss = columnsNames.indexOf(column);
      columnsNames[poss].index = i;
    }
  }

  const docArray = [];
  for (let i = 0; i < documentSplited.length; i++) {
    const docData = documentSplited[i].replace('\r', '').split(',');
    const obj = {
      UUID: docData[columnsNames[0].index],
      VIN: docData[columnsNames[1].index],
      Make: docData[columnsNames[2].index],
      Model: docData[columnsNames[3].index],
      Mileage: docData[columnsNames[4].index],
      Year: docData[columnsNames[5].index],
      Price: docData[columnsNames[6].index],
      'Zip Code': docData[columnsNames[7].index],
      'Create Date': docData[columnsNames[8].index],
      'Update Date': docData[columnsNames[9].index],
    };

    if (verifyDocumentData(obj))
      docArray.push(obj);
  }
  
  return docArray;
};

const verifyDocumentData = (data) => {
  if (
    data.hasOwnProperty('UUID') &&
    data.hasOwnProperty('VIN') &&
    data.hasOwnProperty('Make') &&
    data.hasOwnProperty('Model') &&
    data.hasOwnProperty('Mileage') &&
    data.hasOwnProperty('Year') &&
    data.hasOwnProperty('Price') &&
    data.hasOwnProperty('Zip Code') &&
    data.hasOwnProperty('Create Date') &&
    data.hasOwnProperty('Update Date')
  )
    return true;
  return false;
};
