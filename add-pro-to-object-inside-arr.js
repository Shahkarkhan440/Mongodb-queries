
//Add new property to each object inside array of objects

//Example Collection.

// { 
//     "_id" : ObjectId("12"), 
//     "userId" : ObjectId("1213"), 
//     "referByCreatedAt" : ISODate("2022-02-17T07:12:52.407+0000"), 
//     "referByEmail" : "abc@gmail.com", 
//     "referByName" : "Joelle khan", 
//     "referralCode" : "kjjoio00", 
//     "referrals" : [
//         {
//             "userSubmitTrxId" : null, 
//             "referUserId" : ObjectId("123"), 
//             "rewardStrm" : 111.11, 
//             "name" : "ali hamza", 
//             "email" : "ha@gmail.com", 
//             "referralDate" : ISODate("2022-02-17T07:58:35.671+0000"), 
//             "adminTrxId" : "xcvxcv"
//         }, 
//         {
//             "userSubmitTrxId" : null, 
//             "referUserId" : ObjectId("123"), 
//             "rewardStrm" : 111.11, 
//             "name" : "ali hamza", 
//             "email" : "ha@gmail.com", 
//             "referralDate" : ISODate("2022-02-18T05:22:16.052+0000"), 
//             "adminTrxId" : "xcvxcv"
//         }
//     ]
// }


//Want to update, or add a new property to referrals aray objects


db.getCollection("mycollection").updateMany(
    {},
    { $set: { "referrals.$[elem].rewarded": NumberInt(1) } },
    {
        arrayFilters: [{ "elem.userSubmitTrxId": null }]
    }
)


//OutPut

// { 
//     "_id" : ObjectId("12"), 
//     "userId" : ObjectId("1213"), 
//     "referByCreatedAt" : ISODate("2022-02-17T07:12:52.407+0000"), 
//     "referByEmail" : "abc@gmail.com", 
//     "referByName" : "Joelle khan", 
//     "referralCode" : "kjjoio00", 
//     "referrals" : [
//         {
//             "userSubmitTrxId" : null, 
//             "referUserId" : ObjectId("123"), 
//             "rewardStrm" : 111.11, 
//             "name" : "ali hamza", 
//             "email" : "ha@gmail.com", 
//             "referralDate" : ISODate("2022-02-17T07:58:35.671+0000"), 
//             "rewarded" : 1, 
//             "adminTrxId" : "xcvxcv"
//         }, 
//         {
//             "userSubmitTrxId" : null, 
//             "referUserId" : ObjectId("123"), 
//             "rewardStrm" : 111.11, 
//             "name" : "ali hamza", 
//             "email" : "ha@gmail.com", 
//             "referralDate" : ISODate("2022-02-18T05:22:16.052+0000"), 
//             "rewarded" : 1, 
//             "adminTrxId" : "xcvxcv"
//         }
//     ]
// }


/**
 * Array filters are a new construct in MongoDB 3.6 that fix the above limitations in the positional operator.
 * The positional operator's behavior hasn't changed in MongoDB 3.6, but array filters let you work around the above limitations of $
 * **/

//http://thecodebarbarian.com/a-nodejs-perspective-on-mongodb-36-array-filters.html#comment-3929752586