define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "G__tab_tracker_master_FullStackTest_server_doc_main_js",
    "groupTitle": "G__tab_tracker_master_FullStackTest_server_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/user/age/:age",
    "title": "Get User By age.",
    "version": "0.0.1",
    "name": "GetUserByAge",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Users age.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The age of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"first_name\": \"trish\",\n      \"last_name\": \"potebury\",\n      \"email\": \"tpotebury0@artisteer.com\",\n      \"gender\": \"female\",\n      \"age\": 19\n  },{\n      \"id\": 78,\n      \"first_name\": \"lars\",\n      \"last_name\": \"mattioli\",\n      \"email\": \"lmattioli25@mit.edu\",\n      \"gender\": \"female\",\n      \"age\": 30\n  }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/age/:min-:max",
    "title": "Get User By between age.",
    "version": "0.0.1",
    "name": "GetUserByBetweenAge",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "min",
            "description": "<p>minimum of age.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max",
            "description": "<p>maximum of age.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The age of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"first_name\": \"trish\",\n      \"last_name\": \"potebury\",\n      \"email\": \"tpotebury0@artisteer.com\",\n      \"gender\": \"female\",\n      \"age\": 19\n  },{\n      \"id\": 78,\n      \"first_name\": \"lars\",\n      \"last_name\": \"mattioli\",\n      \"email\": \"lmattioli25@mit.edu\",\n      \"gender\": \"female\",\n      \"age\": 30\n  }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/email/:email",
    "title": "Get User By email.",
    "version": "0.0.1",
    "name": "GetUserByEmail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The email of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"first_name\": \"trish\",\n  \"last_name\": \"potebury\",\n  \"email\": \"tpotebury0@artisteer.com\",\n  \"gender\": \"female\",\n  \"age\": 19\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/firstname/:fname",
    "title": "Get User By firstname.",
    "version": "0.0.1",
    "name": "GetUserByFirstname",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fname",
            "description": "<p>Users first_name.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The firstname of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"first_name\": \"trish\",\n  \"last_name\": \"potebury\",\n  \"email\": \"tpotebury0@artisteer.com\",\n  \"gender\": \"female\",\n  \"age\": 19\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/gender/:gender",
    "title": "Get User By gender.",
    "version": "0.0.1",
    "name": "GetUserByGender",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"male\"",
              "\"female\""
            ],
            "optional": false,
            "field": "gender",
            "description": "<p>User gender.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The gender of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"first_name\": \"trish\",\n      \"last_name\": \"potebury\",\n      \"email\": \"tpotebury0@artisteer.com\",\n      \"gender\": \"female\",\n      \"age\": 19\n  },{\n      \"id\": 78,\n      \"first_name\": \"lars\",\n      \"last_name\": \"mattioli\",\n      \"email\": \"lmattioli25@mit.edu\",\n      \"gender\": \"female\",\n      \"age\": 30\n  }\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User By id.",
    "version": "0.0.1",
    "name": "GetUserById",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"first_name\": \"trish\",\n  \"last_name\": \"potebury\",\n  \"email\": \"tpotebury0@artisteer.com\",\n  \"gender\": \"female\",\n  \"age\": 19\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/lastname/:lname",
    "title": "Get User By lastname.",
    "version": "0.0.1",
    "name": "GetUserByLastname",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lname",
            "description": "<p>Users last_name.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The lastname of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"first_name\": \"trish\",\n  \"last_name\": \"potebury\",\n  \"email\": \"tpotebury0@artisteer.com\",\n  \"gender\": \"female\",\n  \"age\": 19\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/search?firstname=&lastname=&email=&age=&gender=",
    "title": "Get User By Query String.",
    "version": "0.0.1",
    "name": "GetUserByQueryString",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Users first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Users last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"male\"",
              "\"female\""
            ],
            "optional": false,
            "field": "gender",
            "description": "<p>Users gender.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Users age.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The age of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/routes.js",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"first_name\": \"trish\",\n      \"last_name\": \"potebury\",\n      \"email\": \"tpotebury0@artisteer.com\",\n      \"gender\": \"female\",\n      \"age\": 19\n  },{\n      \"id\": 78,\n      \"first_name\": \"lars\",\n      \"last_name\": \"mattioli\",\n      \"email\": \"lmattioli25@mit.edu\",\n      \"gender\": \"female\",\n      \"age\": 30\n  }\n]",
          "type": "json"
        }
      ]
    }
  }
] });
