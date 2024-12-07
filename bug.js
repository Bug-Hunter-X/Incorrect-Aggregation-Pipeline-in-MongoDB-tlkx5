```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /*filter*/ } },
  {$group: {_id: "$field", sum: {$sum: "$value"}}}, //Error: using string instead of field
]);
```