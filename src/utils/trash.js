import localForage from "localforage";

const DATABASE = "Trash";
async function createDb() {
    (await localForage.getItem(DATABASE)) ||
      (await localForage.setItem(DATABASE, {}));
  }
  createDb();
  const addOneToTrash = async (table, data) => {
    const database =
      (await localForage.getItem(DATABASE)) ||
      (await localForage.setItem(DATABASE, {}));
  
      if(!table)return
    if (!data) return "Can't send an empty data";
    if (typeof data !== "object" || Array.isArray(data)) {
      return false;
    }
    const newData = await localForage.setItem(DATABASE, {
      ...database,
      [table]: {item: [{...data}] },
    });
  
    return Object.keys(newData)
  };  



  export {addOneToTrash}