## Event hunter API

### Entidades

Evento, usuário

### Relação 
n para n. Um evento pode ter vários usuários e um usuário pode ter vários eventos

## Rotas

#### Eventos

```
POST /events
```
##### Create

###### Input (MULTI-PART FORM DATA)

```json
  {
    "name": "string",
    "description": "string",
    "address": "string",
    "date": "string",
    "time": "string",
    "value": "string",
    "banner": "File",
    "latitude": "number",
    "longitude": "number"
  }
```

###### Return
```
Status 201 Created
Created object
```

##### List all

```
GET /events
```

###### Response

```json
[
  {
    "id": 1,
    "name": "Foo event",
    "description": "Foo bar description",
    "address": "Foo address",
    "date": "01/12/2020",
    "time": "08 - 18",
    "value": "free",
    "banner": "localhost:3000/uploads/image-name.ext",
    "latitude": 123,
    "longitude": 456,
    "likes_amount": 0,
    "active": true
  }
]
```

##### List one by id

```
GET /events/:id
```

###### Response

```json
  {
    "id": 1,
    "name": "Foo event",
    "description": "Foo bar description",
    "address": "Foo address",
    "date": "01/12/2020",
    "time": "08 - 18",
    "value": "free",
    "banner": "localhost:3000/uploads/image-name.ext",
    "latitude": 123,
    "longitude": 456,
    "likes_amount": 0,
    "active": true
  }
```

##### Update

```
PUT /events
```
:construction: Work in progress :construction:


##### Delete

```
DELETE /events
```
:construction: Work in progress :construction:


#### Usuário


##### Create

```
POST /users
```

###### Input

```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
```

###### Return
```
Status 201 Created
Created object
```

##### List all

```
GET /users
```

###### Response

```json
[
  {
    "id": 1,
    "name": "Foo event",
    "email": "foo@bar.com",
  }
]
```

##### List one by id

```
GET /users/:id
```

###### Response

```json
  {
    "id": 1,
    "name": "Foo event",
    "email": "foo@bar.com",
  }
```

##### Update

```
PUT /users
```
:construction: Work in progress :construction:


##### Delete
```
DELETE /users
```
:construction: Work in progress :construction:
