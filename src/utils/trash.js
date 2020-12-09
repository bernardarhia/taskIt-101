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
      [table]: data,
    });
  
    return Object.keys(newData)
  };  


  const fetchTrashTables = async()=>{
    const database =
    (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));

    return database
  }


  const fetchFromTrash = async table =>{
    const database =(await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));

    const findTable = database[table];

    delete database[table]
    const newData = await localForage.setItem(DATABASE, {
      ...database,
    });

    return {[table]:findTable};
  }


  const removeFromTrash = async (table) =>{
    const database =(await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));

    const findTable = database[table];

    delete database[table]
    const newData = await localForage.setItem(DATABASE, {
      ...database,
    });

    return newData;
  }
  export {addOneToTrash,fetchTrashTables, fetchFromTrash,removeFromTrash}