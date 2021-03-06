/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Compose = {\n  render: () => {\n    let new_div = document.createElement(\"div\");\n    new_div.className = \"new-message\";\n    new_div.innerHTML = Compose.renderForm();\n    new_div.addEventListener('change', (event) => {\n      let change_name = event.target.name;\n      let change_value = event.target.value;\n      MessageStore.updateDraftField(change_name, change_value);\n    });\n    new_div.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      MessageStore.sendDraft();\n      window.location.hash = \"inbox\";\n    })\n    return new_div;\n  },\n\n  renderForm: () => {\n    let draft = MessageStore.getDraftMessage();\n    let form = `\n    <p class='new-message-header'>New Message</p>\n    <form class='compose-form'>\n      <input placeholder='Recipient' name='to' type='text' value='${draft.to}'>\n      <input placeholder='Subject' name='subject' type='text' value='${draft.subject}'>\n      <textarea name='body' rows='20'>${draft.body}</textarea>\n      <button type='submit' class='btn btn-primary submit-message'>Send</button>\n    </form>\n    `;\n    return form;\n  }\n}\n\nmodule.exports = Compose;\n\n\n//# sourceURL=webpack:///./src/compose.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Inbox = {\n  render: () => {\n    let ul = document.createElement(\"ul\");\n    ul.className = \"messages\";\n    let inbox_messages = MessageStore.getInboxMessages();\n    for(let i = 0; i < inbox_messages.length; i++){\n      let new_dom = Inbox.renderMessage(inbox_messages[i]);\n      ul.appendChild(new_dom);\n    }\n    return ul;\n  },\n\n  renderMessage: (message) => {\n    let new_li = document.createElement(\"li\");\n    new_li.className = \"message\";\n    new_li.innerHTML = `\n    <span class=\"from\">${message.from}</span>\n    <span class=\"subject\">${message.subject}</span>\n    <span class=\"body\">${message.body}</span>\n    `;\n    return new_li;\n  }\n}\n\nmodule.exports = Inbox;\n\n\n//# sourceURL=webpack:///./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\nconst Inbox = __webpack_require__(/*! ./inbox.js */ \"./src/inbox.js\");\nconst Sent = __webpack_require__(/*! ./sent.js */ \"./src/sent.js\");\nconst Compose = __webpack_require__(/*! ./compose.js */ \"./src/compose.js\");\n\nconst routes = {\n  inbox: Inbox,\n  sent: Sent,\n  compose: Compose\n};\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n  let content = document.querySelector(\".content\");\n  let router = new Router(content, routes);\n  router.start();\n  let navs = document.querySelectorAll(\".sidebar-nav li\")\n  for(let i = 0; i < navs.length; i++){\n    navs[i].addEventListener(\"click\", () => {\n      let location_name = navs[i].innerText.toLowerCase();\n      window.location.hash = location_name;\n    });\n  };\n  window.location.hash = \"inbox\";\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let messages = {\n  sent: [\n    {to: \"hihow142@gmail.com\", from: \"hamedw96@gmail.com\", subject: \"I am a person\",\n    body: \"Hey how's it going man been a long time.\"\n    },\n  {\n    to: \"person@mail.com\", subject: \"zzz\", body: \"so booring\"\n  }\n  ],\n  inbox: [\n    {from: \"grandma@mail.com\", subject: \"Fwd: Fwd: Fwd: Check this out\",\n        body: \"Stay at home mom discovers cure for leg cramps. Doctors hate her\"},\n    {from: \"person@mail.com\", subject: \"Questionnaire\", body: \"Take this free quiz win $1000 dollars\"}\n  ]\n}\n\nclass Message {\n  constructor(from=\"hamedw96@gmail.com\", to=\"\", subject=\"\", body=\"\"){\n    this.from = from;\n    this.to = to;\n    this.subject = subject;\n    this.body = body;\n  }\n\n}\n\nlet messageDraft = new Message();\n\nconst MessageStore = {\n  getInboxMessages: () => {\n    return messages.inbox;\n  },\n  getSentMessages: () => {\n    return messages.sent;\n  },\n  getDraftMessage: () => {\n    return messageDraft;\n  },\n  updateDraftField: (field, value) => {\n    messageDraft[field] = value;\n  },\n  sendDraft: () => {\n    messages.sent.push(messageDraft);\n    messageDraft = new Message();\n  }\n}\n\nmodule.exports = MessageStore;\n\n\n//# sourceURL=webpack:///./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Router {\n  constructor(node, routes){\n    this.node = node;\n    this.routes = routes;\n  }\n\n  start(){\n    window.addEventListener(\"hashchange\", this.render.bind(this));\n  }\n\n  activeRoute(){\n    let route = window.location.hash.substring(1, window.location.hash.length);\n    return this.routes[route];\n  }\n\n  render(){\n    const self = this;\n    let component = this.activeRoute();\n    if(component === undefined){\n      self.node.innerHTML = \"\";\n    } else {\n      self.node.innerHTML = \"\";\n      self.node.appendChild(component.render());\n    }\n  }\n}\n\nmodule.exports = Router;\n\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Sent = {\n  render: () => {\n    let ul = document.createElement(\"ul\");\n    ul.className = \"messages\";\n    let sent_messages = MessageStore.getSentMessages();\n    for(let i = 0; i < sent_messages.length; i++){\n      let new_dom = Sent.renderMessage(sent_messages[i]);\n      ul.appendChild(new_dom);\n    }\n    return ul;\n  },\n\n  renderMessage: (message) => {\n    let new_li = document.createElement(\"li\");\n    new_li.className = \"message\";\n    new_li.innerHTML = `\n    <span class=\"to\">To: ${message.to}</span>\n    <span class=\"subject\">${message.subject}</span>\n    <span class=\"body\">${message.body}</span>\n    `;\n    return new_li;\n  }\n}\n\nmodule.exports = Sent;\n\n\n//# sourceURL=webpack:///./src/sent.js?");

/***/ })

/******/ });