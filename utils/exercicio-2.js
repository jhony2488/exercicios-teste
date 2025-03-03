function updateDataObject(currentObject, newDataObject) {
  for (let [chave] of Object.entries(currentObject)) {
    if (newDataObject[chave]) {
      currentObject[chave] = newDataObject[chave]
    }
  }

  return currentObject
}

module.exports= updateDataObject;
