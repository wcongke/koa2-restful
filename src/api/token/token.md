### 设置Token
```bash
curl --request GET \
     --url 'http://localhost:20177/setToken?userId=123'
```

### 验证Token
```bash
curl --request GET \
     --url 'http://localhost:20177/existsToken?token=0ec281b4675ca4540b8f66ecf7b1a620022a8d3a'
```

### 删除Token
```bash
curl --request DELETE \
     --url 'http://localhost:20177/delToken?token=0ec281b4675ca4540b8f66ecf7b1a620022a8d3a'
```