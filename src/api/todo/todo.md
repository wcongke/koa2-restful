### 获取todo列表
```bash
curl --request GET \
     --url http://localhost:20177/todos
```

### 获取todo详情
```bash
curl --request GET \
     --url http://localhost:20177/todo/1
```

### 新建todo
```bash
curl --request POST \
     --url http://localhost:20177/todo/add \
     --data '{"id": 6, "info": "todo 6"}'
```

### 更新todo
```bash
curl --request PATCH \
     --url http://localhost:20177/todo/edit \
     --data '{"id": 5, "info": "todo 5"}'
```

### 删除todo
```bash
curl --request DELETE \
     --url http://localhost:20177/todo/6
```

### 设置todo有效期
```bash
curl --request POST \
     --url http://localhost:20177/todo/endTime \
     --data '{\n	"id": 1,\n	"endTime": "2017-10-10"\n}'
```

### 获取todo有效期
```bash
curl --request GET \
     --url http://localhost:20177/todo/endTime/1
```
