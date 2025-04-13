export function searchItem(code, data1){
    return data1.find(i => i.code == code); 
}

export function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
  
  export function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }