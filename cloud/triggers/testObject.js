Parse.Cloud.beforeSave('TestObject', function(req, res){
  if(!req.object.get('foo')){
    res.error('You have to define a value for foo!!!');
  }else{
    res.success();
  }
});