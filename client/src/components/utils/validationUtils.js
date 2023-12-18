export function hasEmptyValues(obj, setErrorFunction) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!obj[key]) {
          setErrorFunction({ message: "All fields must be filled!" });
          return true; // Found an empty value
        }
      }
    }
    return false; // No empty values found
  }