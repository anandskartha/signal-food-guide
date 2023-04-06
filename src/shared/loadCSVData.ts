
const csvToJSON = (csv: string, delimiter = ',') => {
     
    const titles = csv.slice(0, csv
        .indexOf('\n')).split(delimiter);

    const titleValues = csv.slice(csv
        .indexOf('\n') + 1).split('\n');
 
    const ansArray = titleValues.map((v) => {
 
        const values = v.split(delimiter);
        const storeKeyValue = titles.reduce(
            (obj: any, title: string, index: number) => {
                if (values[index]) {
                    obj[title.replace(/[^a-zA-Z0-9]/g, '')] = values[index].replace(/[^a-zA-Z0-9+ ]/g, '');
                    return obj;
                }
            }, {})
        return storeKeyValue;
    }).filter((obj: any) => obj)
    return ansArray
};

const loadCSVData = async(fileName: string) => {
    const response = await fetch( `./data/${fileName}` )
    const content = await response.text()
    const data = csvToJSON(content)
    return data
}

export default loadCSVData
