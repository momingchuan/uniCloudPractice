'use strict';
const db=uniCloud.database()
exports.main = async (event, context) => {

 // let res = await db.collection("users").get();
  // let res = await db.collection("users").count();
  
  let {name,tel}=event;
  
  let res = await db.collection("users").add({
	  name,
	  tel
	  
  })
 return res;

};
