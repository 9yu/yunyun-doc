define({ "api": [
  {
    "type": "post",
    "url": "/comment",
    "title": "创建",
    "name": "Comment",
    "group": "Comment",
    "parameter": {
      "examples": [
        {
          "title": "Request Body (parsed)",
          "content": "pid: 129\npurl: /article/94.html\nptitle: 酱！\ncomment: I LOVE U!\nparent: 1",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sid",
            "description": "<p>Site id，默认从 referer 提取</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pid",
            "description": "<p>文章绝对 id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "purl",
            "description": "<p>文章 url，不带&quot;/&quot;后缀: /article/94.html</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ptitle",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "content",
            "description": "<p>评论</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "parent",
            "description": "<p>回复 cid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201 CREATED": [
          {
            "group": "201 CREATED",
            "type": "Array",
            "optional": false,
            "field": "ownlist",
            "description": "<p>用户拥有的评论 cid 列表</p>"
          },
          {
            "group": "201 CREATED",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Comment id</p>"
          },
          {
            "group": "201 CREATED",
            "type": "Number",
            "optional": false,
            "field": "approved",
            "description": "<p>0 or 1，是否审核通过</p>"
          },
          {
            "group": "201 CREATED",
            "type": "String",
            "optional": false,
            "field": "agent",
            "description": "<p>用户代理</p>"
          },
          {
            "group": "201 CREATED",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>UTC+0 时间戳</p>"
          },
          {
            "group": "201 CREATED",
            "type": "Number",
            "optional": false,
            "field": "modified",
            "description": "<p>初始值为 0</p>"
          },
          {
            "group": "201 CREATED",
            "type": "Number",
            "optional": false,
            "field": "parent",
            "description": "<p>没有嵌套则为 0</p>"
          },
          {
            "group": "201 CREATED",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>处理后内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "Comment",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongSiteConfig",
            "description": "<p>站点配置错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PreservedProfile",
            "description": "<p>需要鹳狸猿权限</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>未登陆</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ban",
            "description": "<p>session 被封禁</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidComment",
            "description": "<p>非法评论</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "UnexpectedError",
            "description": "<p>未知错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/comment",
    "title": "一则评论",
    "name": "CommentLine",
    "group": "Comment",
    "examples": [
      {
        "title": "Example:",
        "content": "GET https://yunyun.moe/api/comment?sid=yunyun&cid=699",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uhash",
            "description": "<p>拥有者 hash id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "approved",
            "description": "<p>是否通过审核</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "agent",
            "description": "<p>用户代理</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>创建时间戳 UTC+0</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "modified",
            "description": "<p>修改时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "parent",
            "description": "<p>回复 cid</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sid",
            "description": "<p>Site id，默认从 referer 提取</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>评论 id</p>"
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
            "field": "WrongSiteConfig",
            "description": "<p>站点配置错误</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "UnexpectedError",
            "description": "<p>未知错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/comment/list",
    "title": "评论列表",
    "description": "<p>pid 和 purl 选填一项</p>",
    "name": "CommentList",
    "group": "Comment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sid",
            "description": "<p>Site id，默认从 referer 提取</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pid",
            "description": "<p>文章绝对 id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "purl",
            "description": "<p>文章 url，不带&quot;/&quot;后缀: /article/94.html</p>"
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
            "field": "WrongSiteConfig",
            "description": "<p>站点配置错误</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "UnexpectedError",
            "description": "<p>未知错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/comment",
    "title": "删除",
    "name": "Delete",
    "group": "Comment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ownlist",
            "description": "<p>更新用户拥有的 cid 列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sid",
            "description": "<p>Site id，默认从 referer 提取</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>评论 id</p>"
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
            "field": "WrongSiteConfig",
            "description": "<p>站点配置错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>未登陆</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ban",
            "description": "<p>session 被封禁</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidComment",
            "description": "<p>非法评论</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "UnexpectedError",
            "description": "<p>未知错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/comment",
    "title": "修改",
    "name": "Modify",
    "group": "Comment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "modified",
            "description": "<p>UTC+0 时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>处理后内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sid",
            "description": "<p>Site id，默认从 referer 提取</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>评论 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Sting",
            "optional": false,
            "field": "content",
            "description": "<p>评论</p>"
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
            "field": "WrongSiteConfig",
            "description": "<p>站点配置错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>未登陆</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ban",
            "description": "<p>session 被封禁</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidComment",
            "description": "<p>非法评论</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "UnexpectedError",
            "description": "<p>未知错误</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/comment/origin",
    "title": "原评论",
    "name": "Origin",
    "group": "Comment",
    "examples": [
      {
        "title": "Example:",
        "content": "GET https://yunyun.moe/api/comment/origin?sid=yunyun&cid=699",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>原评论内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sid",
            "description": "<p>Site id，默认从 referer 提取</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>评论 id</p>"
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
            "field": "WrongSiteConfig",
            "description": "<p>站点配置错误</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>未登陆</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ban",
            "description": "<p>session 被封禁</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidComment",
            "description": "<p>非法评论</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "UnexpectedError",
            "description": "<p>未知错误</p>"
          }
        ]
      }
    }
  },
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
    "group": "D__Sync_Local_I_9yu_web_git_yunyun_doc_main_js",
    "groupTitle": "D__Sync_Local_I_9yu_web_git_yunyun_doc_main_js",
    "name": ""
  },
  {
    "type": "put",
    "url": "/user",
    "title": "修改资料",
    "name": "Change",
    "group": "Inside",
    "description": "<p>PUT 参数至少填一个 <br/> 需要开启 withcredentials</p>",
    "error": {
      "examples": [
        {
          "title": "Error:",
          "content": "HTTP/1.1 401 Unauthorized\n{ \n   \"error\": \"WrongProfile\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongProfile",
            "description": "<p>资料有问题</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PreservedProfile",
            "description": "<p>需要鹳狸猿权限</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>未登陆</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "Inside",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>35 个字符限制</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>不进行所有权、有效性验证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>Https 头像链接，png/jpg/jpeg/gif 后缀，默认用 Gravatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>用户 url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bio",
            "description": "<p>个人介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "moetype",
            "description": "<p>萌属性</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "notify",
            "description": "<p>是否开启邮件提醒 0 or 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success 200 OK: ",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "创建用户",
    "name": "Create",
    "group": "Inside",
    "description": "<p style=\"color:red;\">系统函数</p>",
    "success": {
      "fields": {
        "201 Created": [
          {
            "group": "201 Created",
            "type": "String",
            "optional": false,
            "field": "uhash",
            "description": "<p>用户角色 hash</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "Inside",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>35 个字符限制</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>不进行所有权、有效性验证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>Https 头像链接，png/jpg/jpeg/gif 后缀，默认用 Gravatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>用户 url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bio",
            "description": "<p>个人介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "moetype",
            "description": "<p>萌属性</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "notify",
            "description": "<p>是否开启邮件提醒 0 or 1</p>"
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
            "field": "WrongProfile",
            "description": "<p>资料有问题</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PreservedProfile",
            "description": "<p>需要鹳狸猿权限</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>未登陆</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user",
    "title": "用户信息",
    "name": "Connect",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uhash",
            "description": "<p>用户 hash id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sid",
            "description": "<p>Site id，默认从 referer 提取</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example:",
        "content": "GET https://yunyun.moe/api/user?sid=yunyun&uhash=213u912sada9u",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Https 头像链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Strnig",
            "optional": false,
            "field": "bio",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "moetype",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uhash",
            "description": "<p>用户角色 hash</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "admin",
            "description": "<p>0 or 1，是否是鹳狸猿</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ownlist",
            "description": "<p>拥有的 cid 列表</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error:",
          "content": "HTTP/1.1 404 Not Found\n{ \n   \"error\": \"NoSession\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ban",
            "description": "<p>session 被封禁</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>未登陆</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/me",
    "title": "我的信息",
    "name": "UserSelf",
    "group": "User",
    "description": "<p>需要开启 withcredentials</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "GET https://yunyun.moe/api/user/me",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Https 头像链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Strnig",
            "optional": false,
            "field": "bio",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "moetype",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uhash",
            "description": "<p>用户角色 hash</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "admin",
            "description": "<p>0 or 1，是否是鹳狸猿</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ownlist",
            "description": "<p>拥有的 cid 列表</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error:",
          "content": "HTTP/1.1 404 Not Found\n{ \n   \"error\": \"NoSession\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ban",
            "description": "<p>session 被封禁</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoSession",
            "description": "<p>未登陆</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./doc.js",
    "groupTitle": "User"
  }
] });
