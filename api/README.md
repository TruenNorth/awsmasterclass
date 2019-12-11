# Node.js REST API Example

This example shows how to implement a simple REST API using Node.js and Docker. The API has five endpoints that all return a simple response in JSON.

* GET /
* GET /:id
* POST /
* PUT /
* DELETE /

## Test

#### GET /

```
curl -i http://localhost:3000/

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:38:31 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is GET method."}
```

#### GET /:id

```
curl -i http://localhost:3000/123

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:39:04 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is GET method with id=123."}
```

#### POST /

```
curl -i -x POST http://localhost:3000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:38:47 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is POST method."}
```

#### PUT /

```
curl -i -x PUT http://localhost:3000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:40:48 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is PUT method."}
```

#### DELETE /

```
curl -i -x DELETE http://localhost:3000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:41:11 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is DELETE method."}
```
