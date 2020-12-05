import localForage from "localforage";

const DATABASE = "taskIt";
async function createDb() {
  (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));
}
createDb();

// create a table
const createTable = async (table) => {
  const database =
    (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));

  if (table === "") throw new Error("Please provide a table name");
  const createdTable = await localForage.setItem(DATABASE, {
    ...database,
    [table]: {},
  });
  if (createdTable) return true;
  return;
};

// delete a specific table
const deleteTable = async (table) => {
  const database =
    (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));
  const oops = database[table];
  delete database[table];
  const newData = await localForage.setItem(DATABASE, {
    ...database,
  });
  // returned 3 data because I will send them to the trash route
  return { newData, oops, table };
};

const findTable = async (table) => {
  const database =
    (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));

  const tableToFind = database[table];
  return tableToFind ?? "Didn't find table";
};
// add task data to table
const addOne = async (table, data) => {
  const database =
    (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));

  if (!data) return "Can't send an empty data";
  if (typeof data !== "object" || Array.isArray(data)) {
    return false;
  }
  const newData = await localForage.setItem(DATABASE, {
    ...database,
    [table]: { ...data, item: [] },
  });

  return newData;
};

// add data to table items
const addItem = async (table, item) => {
  const database =
    (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));

  if (!item || Object.keys(item).length < 4) return "Can't send an empty data";
  if (typeof item !== "object" || Array.isArray(item)) {
    return false;
  }
  const tableData = database[table];
  const tableItemData = database[table].item;
  const newData = await localForage.setItem(DATABASE, {
    ...database,
    [table]: { ...tableData, item: [...tableItemData, item] },
  });

  return newData;
};

// delete item using id
const deleteItem = async (table, id) => {
  const database =
    (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));
  const tableData = database[table];
  if (!tableData) {
    return false;
  }
  let tableItemData = tableData.item;
  const newData = tableItemData.filter((item) => item.id !== id);
  return await localForage.setItem(DATABASE, {
    ...database,
    [table]: { ...tableData, item: [...newData] },
  });
};
// 0553786281
// find a single Item in the items arr
const findItem = async (table, id) => {
  const database =
    (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));
  const tableItem = database[table];
  if (!tableItem) throw new Error("Cannot find data");
  return tableItem.item.find((data) => data.id === id);
};

// update a single Item
const updateItem = async (table, id, data) => {
  const database =
    (await localForage.getItem(DATABASE)) ||
    (await localForage.setItem(DATABASE, {}));

  
};
export {
  createTable,
  deleteTable,
  findTable,
  addOne,
  addItem,
  deleteItem,
  findItem,
  updateItem,
};

/* 

{
  tasks: {
    id:''
    tags:[Web Development],
    date:string,
    startDate:string,
    finishDate:string,
    item:[{id:string, text:string, isCompleted:boolean, duration}]
  }
}
*/
