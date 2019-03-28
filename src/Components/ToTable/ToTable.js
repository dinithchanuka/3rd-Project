import _ from 'lodash';


export function getData(dbRef, collection, fields) {
    return dbRef.collection(collection).get().then(querySnapshot=>{
        let data = [];
        querySnapshot.forEach(doc => {
            data.push(_.pick(doc.data(), fields));
        });
        return data;
    });
}

