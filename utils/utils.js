export const getNumber = (text) => {
    if(!parseInt(text)) return false;
    text = parseInt(text).toString();
    if(text.length !== 10 && text.length !== 12) return false;
    if(text.length === 12 && text.slice(0,2) !== '91') return false;
    if(text.length === 10) text = "91"+text
    return text
}
export const getNumbers = (text) =>text.split(",").map(t=>getNumber(t))

export const isURL = (text) => text.startsWith("http://") || text.startsWith("https://")
export const isTwitter = (text) => text.startsWith("https://twitter.com")


export const CSVToArray = (strData,strDelimiter) => {
    strDelimiter = strDelimiter || ",";
    let objPattern = new RegExp(
      "(\\" +
        strDelimiter +
        "|\\r?\\n|\\r|^)" +
        '(?:"([^"]*(?:""[^"]*)*)"|' +
        '([^"\\' +
        strDelimiter +
        "\\r\\n]*))",
      "gi"
    );
    let arrData = [[]];
    let arrMatches = null;
    while ((arrMatches = objPattern.exec(strData))) {
    let strMatchedDelimiter = arrMatches[1];
      if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
        arrData.push([]);
      }
      let strMatchedValue;
      if (arrMatches[2]) {
        strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
      } else {
        strMatchedValue = arrMatches[3];
      }
      arrData[arrData.length - 1].push(strMatchedValue);
    }
  
    return arrData;
}

export const ArraysToDict = (data) => {
    let return_data = [];
    for (let i = 1; i < data.length; i++) {
      let item = {};
      for (let col in data[i]) {
        item[data[0][col].replace(/\s/, "").toLowerCase()] = data[i][col];
      }
      return_data.push(item);
    }
    return return_data;

}
export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}