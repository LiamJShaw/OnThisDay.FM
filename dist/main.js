/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* { \n    margin: 0;\n    padding: 0;\n    font-family: 'Courier New', Courier, monospace;\n}\n\nbody {\n    background-color: rgb(24, 24, 24);\n    color: whitesmoke;\n}\n\n.container {\n    padding: 1rem;\n    margin: 1rem;\n}\n\n.tracks {\n    margin: 1rem;\n}\n\n.go-button {\n    padding: 0.5rem 3rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,8CAA8C;AAClD;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["* { \n    margin: 0;\n    padding: 0;\n    font-family: 'Courier New', Courier, monospace;\n}\n\nbody {\n    background-color: rgb(24, 24, 24);\n    color: whitesmoke;\n}\n\n.container {\n    padding: 1rem;\n    margin: 1rem;\n}\n\n.tracks {\n    margin: 1rem;\n}\n\n.go-button {\n    padding: 0.5rem 3rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/spotify-web-api-js/src/spotify-web-api.js":
/*!****************************************************************!*\
  !*** ./node_modules/spotify-web-api-js/src/spotify-web-api.js ***!
  \****************************************************************/
/***/ ((module) => {

/* global module */


/**
 * Class representing the API
 */
var SpotifyWebApi = (function () {
  var _baseUri = 'https://api.spotify.com/v1';
  var _accessToken = null;
  var _promiseImplementation = null;

  var WrapPromiseWithAbort = function (promise, onAbort) {
    promise.abort = onAbort;
    return promise;
  };

  var _promiseProvider = function (promiseFunction, onAbort) {
    var returnedPromise;
    if (_promiseImplementation !== null) {
      var deferred = _promiseImplementation.defer();
      promiseFunction(
        function (resolvedResult) {
          deferred.resolve(resolvedResult);
        },
        function (rejectedResult) {
          deferred.reject(rejectedResult);
        }
      );
      returnedPromise = deferred.promise;
    } else {
      if (window.Promise) {
        returnedPromise = new window.Promise(promiseFunction);
      }
    }

    if (returnedPromise) {
      return new WrapPromiseWithAbort(returnedPromise, onAbort);
    } else {
      return null;
    }
  };

  var _extend = function () {
    var args = Array.prototype.slice.call(arguments);
    var target = args[0];
    var objects = args.slice(1);
    target = target || {};
    objects.forEach(function (object) {
      for (var j in object) {
        if (object.hasOwnProperty(j)) {
          target[j] = object[j];
        }
      }
    });
    return target;
  };

  var _buildUrl = function (url, parameters) {
    var qs = '';
    for (var key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        var value = parameters[key];
        qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
      }
    }
    if (qs.length > 0) {
      // chop off last '&'
      qs = qs.substring(0, qs.length - 1);
      url = url + '?' + qs;
    }
    return url;
  };

  var _performRequest = function (requestData, callback) {
    var req = new XMLHttpRequest();

    var promiseFunction = function (resolve, reject) {
      function success(data) {
        if (resolve) {
          resolve(data);
        }
        if (callback) {
          callback(null, data);
        }
      }

      function failure() {
        if (reject) {
          reject(req);
        }
        if (callback) {
          callback(req, null);
        }
      }

      var type = requestData.type || 'GET';
      req.open(type, _buildUrl(requestData.url, requestData.params));
      if (_accessToken) {
        req.setRequestHeader('Authorization', 'Bearer ' + _accessToken);
      }

      req.onreadystatechange = function () {
        if (req.readyState === 4) {
          var data = null;
          try {
            data = req.responseText ? JSON.parse(req.responseText) : '';
          } catch (e) {
            console.error(e);
          }

          if (req.status >= 200 && req.status < 300) {
            success(data);
          } else {
            failure();
          }
        }
      };

      if (type === 'GET') {
        req.send(null);
      } else {
        var postData = null;
        if (requestData.postData) {
          if (requestData.contentType === 'image/jpeg') {
            postData = requestData.postData;
            req.setRequestHeader('Content-Type', requestData.contentType);
          } else {
            postData = JSON.stringify(requestData.postData);
            req.setRequestHeader('Content-Type', 'application/json');
          }
        }
        req.send(postData);
      }
    };

    if (callback) {
      promiseFunction();
      return null;
    } else {
      return _promiseProvider(promiseFunction, function () {
        req.abort();
      });
    }
  };

  var _checkParamsAndPerformRequest = function (
    requestData,
    options,
    callback,
    optionsAlwaysExtendParams
  ) {
    var opt = {};
    var cb = null;

    if (typeof options === 'object') {
      opt = options;
      cb = callback;
    } else if (typeof options === 'function') {
      cb = options;
    }

    // options extend postData, if any. Otherwise they extend parameters sent in the url
    var type = requestData.type || 'GET';
    if (type !== 'GET' && requestData.postData && !optionsAlwaysExtendParams) {
      requestData.postData = _extend(requestData.postData, opt);
    } else {
      requestData.params = _extend(requestData.params, opt);
    }
    return _performRequest(requestData, cb);
  };

  /**
   * Creates an instance of the wrapper
   * @constructor
   */
  var Constr = function () {};

  Constr.prototype = {
    constructor: SpotifyWebApi
  };

  /**
   * Fetches a resource through a generic GET request.
   *
   * @param {string} url The URL to be fetched
   * @param {function(Object,Object)} callback An optional callback
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getGeneric = function (url, callback) {
    var requestData = {
      url: url
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Fetches information about the current user.
   * See [Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMe = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches current user's saved tracks.
   * See [Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMySavedTracks = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/tracks'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Adds a list of tracks to the current user's saved tracks.
   * See [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.addToMySavedTracks = function (trackIds, options, callback) {
    var requestData = {
      url: _baseUri + '/me/tracks',
      type: 'PUT',
      postData: trackIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Remove a list of tracks from the current user's saved tracks.
   * See [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeFromMySavedTracks = function (
    trackIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/tracks',
      type: 'DELETE',
      postData: trackIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Checks if the current user's saved tracks contains a certain list of tracks.
   * See [Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.containsMySavedTracks = function (
    trackIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/tracks/contains',
      params: { ids: trackIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get a list of the albums saved in the current Spotify user's "Your Music" library.
   * See [Get Current User's Saved Albums](https://developer.spotify.com/web-api/get-users-saved-albums/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMySavedAlbums = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/albums'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Save one or more albums to the current user's "Your Music" library.
   * See [Save Albums for Current User](https://developer.spotify.com/web-api/save-albums-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} albumIds The ids of the albums. If you know their Spotify URI, it is easy
   * to find their album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.addToMySavedAlbums = function (albumIds, options, callback) {
    var requestData = {
      url: _baseUri + '/me/albums',
      type: 'PUT',
      postData: albumIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Remove one or more albums from the current user's "Your Music" library.
   * See [Remove Albums for Current User](https://developer.spotify.com/web-api/remove-albums-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} albumIds The ids of the albums. If you know their Spotify URI, it is easy
   * to find their album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeFromMySavedAlbums = function (
    albumIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/albums',
      type: 'DELETE',
      postData: albumIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Check if one or more albums is already saved in the current Spotify user's "Your Music" library.
   * See [Check User's Saved Albums](https://developer.spotify.com/web-api/check-users-saved-albums/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} albumIds The ids of the albums. If you know their Spotify URI, it is easy
   * to find their album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.containsMySavedAlbums = function (
    albumIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/albums/contains',
      params: { ids: albumIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get the current user’s top artists based on calculated affinity.
   * See [Get a User’s Top Artists](https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyTopArtists = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/top/artists'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get the current user’s top tracks based on calculated affinity.
   * See [Get a User’s Top Tracks](https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyTopTracks = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/top/tracks'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get tracks from the current user’s recently played tracks.
   * See [Get Current User’s Recently Played Tracks](https://developer.spotify.com/web-api/web-api-personalization-endpoints/get-recently-played/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyRecentlyPlayedTracks = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/player/recently-played'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Adds the current user as a follower of one or more other Spotify users.
   * See [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} userIds The ids of the users. If you know their Spotify URI it is easy
   * to find their user id (e.g. spotify:user:<here_is_the_user_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.followUsers = function (userIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/',
      type: 'PUT',
      params: {
        ids: userIds.join(','),
        type: 'user'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Adds the current user as a follower of one or more artists.
   * See [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} artistIds The ids of the artists. If you know their Spotify URI it is easy
   * to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.followArtists = function (artistIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/',
      type: 'PUT',
      params: {
        ids: artistIds.join(','),
        type: 'artist'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Add the current user as a follower of one playlist.
   * See [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Object} options A JSON object with options that can be passed. For instance,
   * whether you want the playlist to be followed privately ({public: false})
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.followPlaylist = function (playlistId, options, callback) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/followers',
      type: 'PUT',
      postData: {}
    };

    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Removes the current user as a follower of one or more other Spotify users.
   * See [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} userIds The ids of the users. If you know their Spotify URI it is easy
   * to find their user id (e.g. spotify:user:<here_is_the_user_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.unfollowUsers = function (userIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/',
      type: 'DELETE',
      params: {
        ids: userIds.join(','),
        type: 'user'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Removes the current user as a follower of one or more artists.
   * See [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} artistIds The ids of the artists. If you know their Spotify URI it is easy
   * to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.unfollowArtists = function (artistIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/',
      type: 'DELETE',
      params: {
        ids: artistIds.join(','),
        type: 'artist'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Remove the current user as a follower of one playlist.
   * See [Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.unfollowPlaylist = function (playlistId, callback) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/followers',
      type: 'DELETE'
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Checks to see if the current user is following one or more other Spotify users.
   * See [Check if Current User Follows Users or Artists](https://developer.spotify.com/web-api/check-current-user-follows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} userIds The ids of the users. If you know their Spotify URI it is easy
   * to find their user id (e.g. spotify:user:<here_is_the_user_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an array of boolean values that indicate
   * whether the user is following the users sent in the request.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.isFollowingUsers = function (userIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/contains',
      type: 'GET',
      params: {
        ids: userIds.join(','),
        type: 'user'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Checks to see if the current user is following one or more artists.
   * See [Check if Current User Follows](https://developer.spotify.com/web-api/check-current-user-follows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} artistIds The ids of the artists. If you know their Spotify URI it is easy
   * to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an array of boolean values that indicate
   * whether the user is following the artists sent in the request.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.isFollowingArtists = function (artistIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/contains',
      type: 'GET',
      params: {
        ids: artistIds.join(','),
        type: 'artist'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Check to see if one or more Spotify users are following a specified playlist.
   * See [Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<string>} userIds The ids of the users. If you know their Spotify URI it is easy
   * to find their user id (e.g. spotify:user:<here_is_the_user_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an array of boolean values that indicate
   * whether the users are following the playlist sent in the request.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.areFollowingPlaylist = function (
    playlistId,
    userIds,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/followers/contains',
      type: 'GET',
      params: {
        ids: userIds.join(',')
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Get the current user's followed artists.
   * See [Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} [options] Options, being after and limit.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an object with a paged object containing
   * artists.
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing a paging object which contains
   * artists objects. Not returned if a callback is given.
   */
  Constr.prototype.getFollowedArtists = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/following',
      type: 'GET',
      params: {
        type: 'artist'
      }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches information about a specific user.
   * See [Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} userId The id of the user. If you know the Spotify URI it is easy
   * to find the id (e.g. spotify:user:<here_is_the_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getUser = function (userId, options, callback) {
    var requestData = {
      url: _baseUri + '/users/' + encodeURIComponent(userId)
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of the current user's playlists.
   * See [Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} userId An optional id of the user. If you know the Spotify URI it is easy
   * to find the id (e.g. spotify:user:<here_is_the_id>). If not provided, the id of the user that granted
   * the permissions will be used.
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getUserPlaylists = function (userId, options, callback) {
    var requestData;
    if (typeof userId === 'string') {
      requestData = {
        url: _baseUri + '/users/' + encodeURIComponent(userId) + '/playlists'
      };
    } else {
      requestData = {
        url: _baseUri + '/me/playlists'
      };
      callback = options;
      options = userId;
    }
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a specific playlist.
   * See [Get a Playlist](https://developer.spotify.com/web-api/get-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getPlaylist = function (playlistId, options, callback) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches the tracks from a specific playlist.
   * See [Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getPlaylistTracks = function (
    playlistId,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Gets the current image associated with a specific playlist.
   * See [Get a Playlist Cover Image](https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist-cover/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:playlist:<here_is_the_playlist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getPlaylistCoverImage = function (playlistId, callback) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/images'
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Creates a playlist and stores it in the current user's library.
   * See [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} userId The id of the user. If you know the Spotify URI it is easy
   * to find the id (e.g. spotify:user:<here_is_the_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.createPlaylist = function (userId, options, callback) {
    var requestData = {
      url: _baseUri + '/users/' + encodeURIComponent(userId) + '/playlists',
      type: 'POST',
      postData: options
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Change a playlist's name and public/private state
   * See [Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Object} data A JSON object with the data to update. E.g. {name: 'A new name', public: true}
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.changePlaylistDetails = function (
    playlistId,
    data,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId,
      type: 'PUT',
      postData: data
    };
    return _checkParamsAndPerformRequest(requestData, data, callback);
  };

  /**
   * Add tracks to a playlist.
   * See [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<string>} uris An array of Spotify URIs for the tracks
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.addTracksToPlaylist = function (
    playlistId,
    uris,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'POST',
      postData: {
        uris: uris
      }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback, true);
  };

  /**
   * Replace the tracks of a playlist
   * See [Replace a Playlist's Tracks](https://developer.spotify.com/web-api/replace-playlists-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<string>} uris An array of Spotify URIs for the tracks
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.replaceTracksInPlaylist = function (
    playlistId,
    uris,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'PUT',
      postData: { uris: uris }
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Reorder tracks in a playlist
   * See [Reorder a Playlist’s Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {number} rangeStart The position of the first track to be reordered.
   * @param {number} insertBefore The position where the tracks should be inserted. To reorder the tracks to
   * the end of the playlist, simply set insert_before to the position after the last track.
   * @param {Object} options An object with optional parameters (range_length, snapshot_id)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.reorderTracksInPlaylist = function (
    playlistId,
    rangeStart,
    insertBefore,
    options,
    callback
  ) {
    /* eslint-disable camelcase */
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'PUT',
      postData: {
        range_start: rangeStart,
        insert_before: insertBefore
      }
    };
    /* eslint-enable camelcase */
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Remove tracks from a playlist
   * See [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<Object>} uris An array of tracks to be removed. Each element of the array can be either a
   * string, in which case it is treated as a URI, or an object containing the properties `uri` (which is a
   * string) and `positions` (which is an array of integers).
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeTracksFromPlaylist = function (
    playlistId,
    uris,
    callback
  ) {
    var dataToBeSent = uris.map(function (uri) {
      if (typeof uri === 'string') {
        return { uri: uri };
      } else {
        return uri;
      }
    });

    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'DELETE',
      postData: { tracks: dataToBeSent }
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Remove tracks from a playlist, specifying a snapshot id.
   * See [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<Object>} uris An array of tracks to be removed. Each element of the array can be either a
   * string, in which case it is treated as a URI, or an object containing the properties `uri` (which is a
   * string) and `positions` (which is an array of integers).
   * @param {string} snapshotId The playlist's snapshot ID against which you want to make the changes
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeTracksFromPlaylistWithSnapshotId = function (
    playlistId,
    uris,
    snapshotId,
    callback
  ) {
    var dataToBeSent = uris.map(function (uri) {
      if (typeof uri === 'string') {
        return { uri: uri };
      } else {
        return uri;
      }
    });
    /* eslint-disable camelcase */
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'DELETE',
      postData: {
        tracks: dataToBeSent,
        snapshot_id: snapshotId
      }
    };
    /* eslint-enable camelcase */
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Remove tracks from a playlist, specifying the positions of the tracks to be removed.
   * See [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<number>} positions array of integers containing the positions of the tracks to remove
   * from the playlist.
   * @param {string} snapshotId The playlist's snapshot ID against which you want to make the changes
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeTracksFromPlaylistInPositions = function (
    playlistId,
    positions,
    snapshotId,
    callback
  ) {
    /* eslint-disable camelcase */
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'DELETE',
      postData: {
        positions: positions,
        snapshot_id: snapshotId
      }
    };
    /* eslint-enable camelcase */
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Upload a custom playlist cover image.
   * See [Upload A Custom Playlist Cover Image](https://developer.spotify.com/web-api/upload-a-custom-playlist-cover-image/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {string} imageData Base64 encoded JPEG image data, maximum payload size is 256 KB.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.uploadCustomPlaylistCoverImage = function (
    playlistId,
    imageData,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/images',
      type: 'PUT',
      postData: imageData.replace(/^data:image\/jpeg;base64,/, ''),
      contentType: 'image/jpeg'
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Fetches an album from the Spotify catalog.
   * See [Get an Album](https://developer.spotify.com/web-api/get-album/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} albumId The id of the album. If you know the Spotify URI it is easy
   * to find the album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAlbum = function (albumId, options, callback) {
    var requestData = {
      url: _baseUri + '/albums/' + albumId
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches the tracks of an album from the Spotify catalog.
   * See [Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} albumId The id of the album. If you know the Spotify URI it is easy
   * to find the album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAlbumTracks = function (albumId, options, callback) {
    var requestData = {
      url: _baseUri + '/albums/' + albumId + '/tracks'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple albums from the Spotify catalog.
   * See [Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} albumIds The ids of the albums. If you know their Spotify URI it is easy
   * to find their album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAlbums = function (albumIds, options, callback) {
    var requestData = {
      url: _baseUri + '/albums/',
      params: { ids: albumIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a track from the Spotify catalog.
   * See [Get a Track](https://developer.spotify.com/web-api/get-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} trackId The id of the track. If you know the Spotify URI it is easy
   * to find the track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getTrack = function (trackId, options, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/tracks/' + trackId;
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple tracks from the Spotify catalog.
   * See [Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getTracks = function (trackIds, options, callback) {
    var requestData = {
      url: _baseUri + '/tracks/',
      params: { ids: trackIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches an artist from the Spotify catalog.
   * See [Get an Artist](https://developer.spotify.com/web-api/get-artist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} artistId The id of the artist. If you know the Spotify URI it is easy
   * to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtist = function (artistId, options, callback) {
    var requestData = {
      url: _baseUri + '/artists/' + artistId
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple artists from the Spotify catalog.
   * See [Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} artistIds The ids of the artists. If you know their Spotify URI it is easy
   * to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtists = function (artistIds, options, callback) {
    var requestData = {
      url: _baseUri + '/artists/',
      params: { ids: artistIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches the albums of an artist from the Spotify catalog.
   * See [Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} artistId The id of the artist. If you know the Spotify URI it is easy
   * to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtistAlbums = function (artistId, options, callback) {
    var requestData = {
      url: _baseUri + '/artists/' + artistId + '/albums'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of top tracks of an artist from the Spotify catalog, for a specific country.
   * See [Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} artistId The id of the artist. If you know the Spotify URI it is easy
   * to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {string} countryId The id of the country (e.g. ES for Spain or US for United States)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtistTopTracks = function (
    artistId,
    countryId,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/artists/' + artistId + '/top-tracks',
      params: { country: countryId }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of artists related with a given one from the Spotify catalog.
   * See [Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} artistId The id of the artist. If you know the Spotify URI it is easy
   * to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtistRelatedArtists = function (
    artistId,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/artists/' + artistId + '/related-artists'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of Spotify featured playlists (shown, for example, on a Spotify player's "Browse" tab).
   * See [Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getFeaturedPlaylists = function (options, callback) {
    var requestData = {
      url: _baseUri + '/browse/featured-playlists'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of new album releases featured in Spotify (shown, for example, on a Spotify player's "Browse" tab).
   * See [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getNewReleases = function (options, callback) {
    var requestData = {
      url: _baseUri + '/browse/new-releases'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
   * See [Get a List of Categories](https://developer.spotify.com/web-api/get-list-categories/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getCategories = function (options, callback) {
    var requestData = {
      url: _baseUri + '/browse/categories'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get a single category used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
   * See [Get a Category](https://developer.spotify.com/web-api/get-category/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} categoryId The id of the category. These can be found with the getCategories function
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getCategory = function (categoryId, options, callback) {
    var requestData = {
      url: _baseUri + '/browse/categories/' + categoryId
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   * See [Get a Category's Playlists](https://developer.spotify.com/web-api/get-categorys-playlists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} categoryId The id of the category. These can be found with the getCategories function
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getCategoryPlaylists = function (
    categoryId,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/browse/categories/' + categoryId + '/playlists'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Array<string>} types An array of item types to search across.
   * Valid types are: 'album', 'artist', 'playlist', and 'track'.
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.search = function (query, types, options, callback) {
    var requestData = {
      url: _baseUri + '/search/',
      params: {
        q: query,
        type: types.join(',')
      }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches albums from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchAlbums = function (query, options, callback) {
    return this.search(query, ['album'], options, callback);
  };

  /**
   * Fetches artists from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchArtists = function (query, options, callback) {
    return this.search(query, ['artist'], options, callback);
  };

  /**
   * Fetches tracks from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchTracks = function (query, options, callback) {
    return this.search(query, ['track'], options, callback);
  };

  /**
   * Fetches playlists from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchPlaylists = function (query, options, callback) {
    return this.search(query, ['playlist'], options, callback);
  };

  /**
   * Fetches shows from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchShows = function (query, options, callback) {
    return this.search(query, ['show'], options, callback);
  };

  /**
   * Fetches episodes from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchEpisodes = function (query, options, callback) {
    return this.search(query, ['episode'], options, callback);
  };

  /**
   * Get audio features for a single track identified by its unique Spotify ID.
   * See [Get Audio Features for a Track](https://developer.spotify.com/web-api/get-audio-features/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} trackId The id of the track. If you know the Spotify URI it is easy
   * to find the track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAudioFeaturesForTrack = function (trackId, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/audio-features/' + trackId;
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Get audio features for multiple tracks based on their Spotify IDs.
   * See [Get Audio Features for Several Tracks](https://developer.spotify.com/web-api/get-several-audio-features/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAudioFeaturesForTracks = function (trackIds, callback) {
    var requestData = {
      url: _baseUri + '/audio-features',
      params: { ids: trackIds }
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Get audio analysis for a single track identified by its unique Spotify ID.
   * See [Get Audio Analysis for a Track](https://developer.spotify.com/web-api/get-audio-analysis/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} trackId The id of the track. If you know the Spotify URI it is easy
   * to find the track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAudioAnalysisForTrack = function (trackId, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/audio-analysis/' + trackId;
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Create a playlist-style listening experience based on seed artists, tracks and genres.
   * See [Get Recommendations Based on Seeds](https://developer.spotify.com/web-api/get-recommendations/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getRecommendations = function (options, callback) {
    var requestData = {
      url: _baseUri + '/recommendations'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Retrieve a list of available genres seed parameter values for recommendations.
   * See [Available Genre Seeds](https://developer.spotify.com/web-api/get-recommendations/#available-genre-seeds) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAvailableGenreSeeds = function (callback) {
    var requestData = {
      url: _baseUri + '/recommendations/available-genre-seeds'
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Get information about a user’s available devices.
   * See [Get a User’s Available Devices](https://developer.spotify.com/web-api/get-a-users-available-devices/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyDevices = function (callback) {
    var requestData = {
      url: _baseUri + '/me/player/devices'
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Get information about the user’s current playback state, including track, track progress, and active device.
   * See [Get Information About The User’s Current Playback](https://developer.spotify.com/web-api/get-information-about-the-users-current-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyCurrentPlaybackState = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/player'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get the object currently being played on the user’s Spotify account.
   * See [Get the User’s Currently Playing Track](https://developer.spotify.com/web-api/get-the-users-currently-playing-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyCurrentPlayingTrack = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/player/currently-playing'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Transfer playback to a new device and determine if it should start playing.
   * See [Transfer a User’s Playback](https://developer.spotify.com/web-api/transfer-a-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} deviceIds A JSON array containing the ID of the device on which playback should be started/transferred.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.transferMyPlayback = function (
    deviceIds,
    options,
    callback
  ) {
    var postData = options || {};
    postData.device_ids = deviceIds;
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player',
      postData: postData
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Play a track on the user's active device
   * See [Start/Resume a User's Playback](https://developer.spotify.com/documentation/web-api/reference/player/start-a-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.play = function (options, callback) {
    options = options || {};
    var params =
      'device_id' in options ? { device_id: options.device_id } : null;
    var postData = {};
    ['context_uri', 'uris', 'offset', 'position_ms'].forEach(function (field) {
      if (field in options) {
        postData[field] = options[field];
      }
    });
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/play',
      params: params,
      postData: postData
    };

    // need to clear options so it doesn't add all of them to the query params
    var newOptions = typeof options === 'function' ? options : {};
    return _checkParamsAndPerformRequest(requestData, newOptions, callback);
  };

  /**
   * Add an item to the end of the user’s current playback queue.
   * See [Add an Item to the User's Playback Queue](https://developer.spotify.com/documentation/web-api/reference/player/add-to-queue/) on
   * the Spotify Developer site for more information about the endpoint.
   * @param {string} uri The uri of the item to add to the queue. Must be a track or an episode uri.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.queue = function (uri, options, callback) {
    options = options || {};
    var params =
      'device_id' in options
        ? { uri: uri, device_id: options.device_id }
        : { uri: uri };
    var requestData = {
      type: 'POST',
      url: _baseUri + '/me/player/queue',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Pause playback on the user’s account.
   * See [Pause a User’s Playback](https://developer.spotify.com/web-api/pause-a-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.pause = function (options, callback) {
    options = options || {};
    var params =
      'device_id' in options ? { device_id: options.device_id } : null;
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/pause',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Skips to next track in the user’s queue.
   * See [Skip User’s Playback To Next Track](https://developer.spotify.com/web-api/skip-users-playback-to-next-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.skipToNext = function (options, callback) {
    options = options || {};
    var params =
      'device_id' in options ? { device_id: options.device_id } : null;
    var requestData = {
      type: 'POST',
      url: _baseUri + '/me/player/next',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Skips to previous track in the user’s queue.
   * Note that this will ALWAYS skip to the previous track, regardless of the current track’s progress.
   * Returning to the start of the current track should be performed using `.seek()`
   * See [Skip User’s Playback To Previous Track](https://developer.spotify.com/web-api/skip-users-playback-to-next-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.skipToPrevious = function (options, callback) {
    options = options || {};
    var params =
      'device_id' in options ? { device_id: options.device_id } : null;
    var requestData = {
      type: 'POST',
      url: _baseUri + '/me/player/previous',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Seeks to the given position in the user’s currently playing track.
   * See [Seek To Position In Currently Playing Track](https://developer.spotify.com/web-api/seek-to-position-in-currently-playing-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {number} position_ms The position in milliseconds to seek to. Must be a positive number.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.seek = function (position_ms, options, callback) {
    options = options || {};
    var params = {
      position_ms: position_ms
    };
    if ('device_id' in options) {
      params.device_id = options.device_id;
    }
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/seek',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off.
   * See [Set Repeat Mode On User’s Playback](https://developer.spotify.com/web-api/set-repeat-mode-on-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {String} state A string set to 'track', 'context' or 'off'.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.setRepeat = function (state, options, callback) {
    options = options || {};
    var params = {
      state: state
    };
    if ('device_id' in options) {
      params.device_id = options.device_id;
    }
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/repeat',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Set the volume for the user’s current playback device.
   * See [Set Volume For User’s Playback](https://developer.spotify.com/web-api/set-volume-for-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {number} volume_percent The volume to set. Must be a value from 0 to 100 inclusive.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.setVolume = function (volume_percent, options, callback) {
    options = options || {};
    var params = {
      volume_percent: volume_percent
    };
    if ('device_id' in options) {
      params.device_id = options.device_id;
    }
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/volume',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Toggle shuffle on or off for user’s playback.
   * See [Toggle Shuffle For User’s Playback](https://developer.spotify.com/web-api/toggle-shuffle-for-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {bool} state Whether or not to shuffle user's playback.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.setShuffle = function (state, options, callback) {
    options = options || {};
    var params = {
      state: state
    };
    if ('device_id' in options) {
      params.device_id = options.device_id;
    }
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/shuffle',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a show from the Spotify catalog.
   * See [Get a Show](https://developer.spotify.com/documentation/web-api/reference/shows/get-a-show/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} showId The id of the show. If you know the Spotify URI it is easy
   * to find the show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getShow = function (showId, options, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/shows/' + showId;
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple shows from the Spotify catalog.
   * See [Get Several Shows](https://developer.spotify.com/documentation/web-api/reference/shows/get-several-shows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} showIds The ids of the shows. If you know their Spotify URI it is easy
   * to find their show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getShows = function (showIds, options, callback) {
    var requestData = {
      url: _baseUri + '/shows/',
      params: { ids: showIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches current user's saved shows.
   * See [Get Current User's Saved Shows](https://developer.spotify.com/documentation/web-api/reference/library/get-users-saved-shows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMySavedShows = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/shows'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Adds a list of shows to the current user's saved shows.
   * See [Save Shows for Current User](https://developer.spotify.com/documentation/web-api/reference/library/save-shows-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} showIds The ids of the shows. If you know their Spotify URI it is easy
   * to find their show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.addToMySavedShows = function (showIds, options, callback) {
    var requestData = {
      url: _baseUri + '/me/shows',
      type: 'PUT',
      postData: showIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Remove a list of shows from the current user's saved shows.
   * See [Remove Shows for Current User](https://developer.spotify.com/documentation/web-api/reference/library/remove-shows-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} showIds The ids of the shows. If you know their Spotify URI it is easy
   * to find their show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeFromMySavedShows = function (
    showIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/shows',
      type: 'DELETE',
      postData: showIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Checks if the current user's saved shows contains a certain list of shows.
   * See [Check Current User's Saved Shows](https://developer.spotify.com/documentation/web-api/reference/library/check-users-saved-shows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} showIds The ids of the shows. If you know their Spotify URI it is easy
   * to find their show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.containsMySavedShows = function (
    showIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/shows/contains',
      params: { ids: showIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches the episodes of a show from the Spotify catalog.
   * See [Get a Show's Episodes](https://developer.spotify.com/documentation/web-api/reference/shows/get-shows-episodes/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} showId The id of the show. If you know the Spotify URI it is easy
   * to find the show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getShowEpisodes = function (showId, options, callback) {
    var requestData = {
      url: _baseUri + '/shows/' + showId + '/episodes'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches an episode from the Spotify catalog.
   * See [Get an Episode](https://developer.spotify.com/documentation/web-api/reference/episodes/get-an-episode/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} episodeId The id of the episode. If you know the Spotify URI it is easy
   * to find the episode id (e.g. spotify:episode:<here_is_the_episode_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getEpisode = function (episodeId, options, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/episodes/' + episodeId;
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple episodes from the Spotify catalog.
   * See [Get Several Episodes](https://developer.spotify.com/documentation/web-api/reference/episodes/get-several-episodes/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} episodeIds The ids of the episodes. If you know their Spotify URI it is easy
   * to find their episode id (e.g. spotify:episode:<here_is_the_episode_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getEpisodes = function (episodeIds, options, callback) {
    var requestData = {
      url: _baseUri + '/episodes/',
      params: { ids: episodeIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Gets the access token in use.
   *
   * @return {string} accessToken The access token
   */
  Constr.prototype.getAccessToken = function () {
    return _accessToken;
  };

  /**
   * Sets the access token to be used.
   * See [the Authorization Guide](https://developer.spotify.com/web-api/authorization-guide/) on
   * the Spotify Developer site for more information about obtaining an access token.
   *
   * @param {string} accessToken The access token
   * @return {void}
   */
  Constr.prototype.setAccessToken = function (accessToken) {
    _accessToken = accessToken;
  };

  /**
   * Sets an implementation of Promises/A+ to be used. E.g. Q, when.
   * See [Conformant Implementations](https://github.com/promises-aplus/promises-spec/blob/master/implementations.md)
   * for a list of some available options
   *
   * @param {Object} PromiseImplementation A Promises/A+ valid implementation
   * @throws {Error} If the implementation being set doesn't conform with Promises/A+
   * @return {void}
   */
  Constr.prototype.setPromiseImplementation = function (PromiseImplementation) {
    var valid = false;
    try {
      var p = new PromiseImplementation(function (resolve) {
        resolve();
      });
      if (typeof p.then === 'function' && typeof p.catch === 'function') {
        valid = true;
      }
    } catch (e) {
      console.error(e);
    }
    if (valid) {
      _promiseImplementation = PromiseImplementation;
    } else {
      throw new Error('Unsupported implementation of Promises/A+');
    }
  };

  return Constr;
})();

if ( true && typeof module.exports === 'object') {
  module.exports = SpotifyWebApi;
}


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateToUnixTime": () => (/* binding */ dateToUnixTime)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! spotify-web-api-js */ "./node_modules/spotify-web-api-js/src/spotify-web-api.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_1__);


// Spotify


let spotify = new (spotify_web_api_js__WEBPACK_IMPORTED_MODULE_1___default())();

var client_id = '74ac949ca587402484dcef1408b4d7f3';
var client_secret = '313a2c15fc844ca5bc22755572874ee7';

// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//     spotify.setAccessToken(token);
//   }
// });

spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function (data) {
      console.log('Artist albums', data);
    },
    function (err) {
      console.error(err);
    }
  );

// Spotify above here

let tracksContainer = document.querySelector(".tracks");

// Last.FM API
// Get all tracks for a specific date
function getTracks(date) {

    let fromDate = date;
    let toDate = date + 86399; // 24 hours (-1s) in seconds

    let currentPage = 1;
    let totalPages = 2; // Placeholder value. Will be replace on the first while run.

    let tracks = [];

    // while(currentPage < totalPages) {

    fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks
                                        &user=legendeater
                                        &page=${currentPage}
                                        &from=${fromDate}
                                        &to=${toDate}
                                        &limit=200
                                        &api_key=d1fe8154dbbbd2656d9748992effc9ca
                                        &format=json`, 
                                        {mode: 'cors'}
                                    )
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {

        console.log(response);

        totalPages = response.recenttracks['@attr'].totalPages;

        // for each track in tracks, add the title and artist as an object
        for (let i = 0; i < response.recenttracks.track.length; i++) {

            tracks.push({track: response.recenttracks.track[i].name, 
                        artist: response.recenttracks.track[i].artist["#text"]
                    });
        }

        for (let i = 0; i < tracks.length; i++) {

            console.log(tracks[i]);

            const trackP = document.createElement('p');
            trackP.textContent = tracks[i].artist + " - " + tracks[i].track;
            tracksContainer.appendChild(trackP);
        }
    });
}

// Get all tracks for every instance of a date through the years, from today back to 2000

// Convert a date string to Unix time
const dateToUnixTime = (dateString) => {
    const date = new Date(dateString);
    const timeInMs = date.getTime();
    const unixTimestamp = Math.floor(timeInMs / 1000);
    return unixTimestamp;
}

// Take a year off a Unix date
// 31,536,000 seconds in a year


const goButton = document.querySelector(".go-button");

goButton.addEventListener("click", () => {

    // for each track, add the name as a <p> to .tracks
    
    tracksContainer.innerHTML = "";

    let datePicker = document.querySelector(".date");
    let datePicked = new Date(datePicker.value);

    let unixDate = dateToUnixTime(datePicked);

    getTracks(unixDate);
});



// OKAY! So no more Spotify API. Learn web scraping and get the spotify url from this:

// <a class="
// hidden-xs play-this-track-playlink play-this-track-playlink--spotify
        
// js-playlink

// href="https://open.spotify.com/track/42Y6p0Kc3suygNBwWklv2T" 
//   target="_blank" data-playlink-affiliate="spotify" data-spotify-id="42Y6p0Kc3suygNBwWklv2T" 
//   data-spotify-url="https://open.spotify.com/track/42Y6p0Kc3suygNBwWklv2T" data-track-name="Baby Criminal" 
//   data-track-url="/music/Viagra+Boys/_/Baby+Criminal" 
//   data-artist-name="Viagra Boys" data-artist-url="/music/Viagra+Boys" 
//   title="Play on Spotify" data-single-track="" data-analytics-action="PlayTrackOnPage" 
//   data-analytics-label="spotify">
// Spotify
// </a>

// BUT not everything has the link, so show in the GUI what is linked in the copypasta and what isn't
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLHlCQUF5QjtBQUN0QztBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxlQUFlO0FBQzVCO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxjQUFj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V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCOztBQUU3QjtBQUMrQzs7QUFFL0Msa0JBQWtCLDJEQUFhOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBLHdCQUF3Qjs7QUFFeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0Isd0NBQXdDOztBQUVoRSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUEsd0JBQXdCLG1CQUFtQjs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOzs7O0FBSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb250aGlzZGF5LmZtLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL29udGhpc2RheS5mbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb250aGlzZGF5LmZtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb250aGlzZGF5LmZtLy4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd2ViLWFwaS1qcy9zcmMvc3BvdGlmeS13ZWItYXBpLmpzIiwid2VicGFjazovL29udGhpc2RheS5mbS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL29udGhpc2RheS5mbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vbnRoaXNkYXkuZm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29udGhpc2RheS5mbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vbnRoaXNkYXkuZm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb250aGlzZGF5LmZtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb250aGlzZGF5LmZtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb250aGlzZGF5LmZtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29udGhpc2RheS5mbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbnRoaXNkYXkuZm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29udGhpc2RheS5mbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29udGhpc2RheS5mbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29udGhpc2RheS5mbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb250aGlzZGF5LmZtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7IFxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4udHJhY2tzIHtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZ28tYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDNyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHsgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbi50cmFja3Mge1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5nby1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiBnbG9iYWwgbW9kdWxlICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBBUElcbiAqL1xudmFyIFNwb3RpZnlXZWJBcGkgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgX2Jhc2VVcmkgPSAnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEnO1xuICB2YXIgX2FjY2Vzc1Rva2VuID0gbnVsbDtcbiAgdmFyIF9wcm9taXNlSW1wbGVtZW50YXRpb24gPSBudWxsO1xuXG4gIHZhciBXcmFwUHJvbWlzZVdpdGhBYm9ydCA9IGZ1bmN0aW9uIChwcm9taXNlLCBvbkFib3J0KSB7XG4gICAgcHJvbWlzZS5hYm9ydCA9IG9uQWJvcnQ7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgdmFyIF9wcm9taXNlUHJvdmlkZXIgPSBmdW5jdGlvbiAocHJvbWlzZUZ1bmN0aW9uLCBvbkFib3J0KSB7XG4gICAgdmFyIHJldHVybmVkUHJvbWlzZTtcbiAgICBpZiAoX3Byb21pc2VJbXBsZW1lbnRhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIGRlZmVycmVkID0gX3Byb21pc2VJbXBsZW1lbnRhdGlvbi5kZWZlcigpO1xuICAgICAgcHJvbWlzZUZ1bmN0aW9uKFxuICAgICAgICBmdW5jdGlvbiAocmVzb2x2ZWRSZXN1bHQpIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc29sdmVkUmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKHJlamVjdGVkUmVzdWx0KSB7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlamVjdGVkUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybmVkUHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh3aW5kb3cuUHJvbWlzZSkge1xuICAgICAgICByZXR1cm5lZFByb21pc2UgPSBuZXcgd2luZG93LlByb21pc2UocHJvbWlzZUZ1bmN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmV0dXJuZWRQcm9taXNlKSB7XG4gICAgICByZXR1cm4gbmV3IFdyYXBQcm9taXNlV2l0aEFib3J0KHJldHVybmVkUHJvbWlzZSwgb25BYm9ydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICB2YXIgX2V4dGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgdmFyIHRhcmdldCA9IGFyZ3NbMF07XG4gICAgdmFyIG9iamVjdHMgPSBhcmdzLnNsaWNlKDEpO1xuICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcbiAgICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgZm9yICh2YXIgaiBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgIHRhcmdldFtqXSA9IG9iamVjdFtqXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgdmFyIF9idWlsZFVybCA9IGZ1bmN0aW9uICh1cmwsIHBhcmFtZXRlcnMpIHtcbiAgICB2YXIgcXMgPSAnJztcbiAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1ldGVycykge1xuICAgICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJhbWV0ZXJzW2tleV07XG4gICAgICAgIHFzICs9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSArICcmJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHFzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIGNob3Agb2ZmIGxhc3QgJyYnXG4gICAgICBxcyA9IHFzLnN1YnN0cmluZygwLCBxcy5sZW5ndGggLSAxKTtcbiAgICAgIHVybCA9IHVybCArICc/JyArIHFzO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xuICB9O1xuXG4gIHZhciBfcGVyZm9ybVJlcXVlc3QgPSBmdW5jdGlvbiAocmVxdWVzdERhdGEsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgdmFyIHByb21pc2VGdW5jdGlvbiA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmFpbHVyZSgpIHtcbiAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChyZXEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGUgPSByZXF1ZXN0RGF0YS50eXBlIHx8ICdHRVQnO1xuICAgICAgcmVxLm9wZW4odHlwZSwgX2J1aWxkVXJsKHJlcXVlc3REYXRhLnVybCwgcmVxdWVzdERhdGEucGFyYW1zKSk7XG4gICAgICBpZiAoX2FjY2Vzc1Rva2VuKSB7XG4gICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgX2FjY2Vzc1Rva2VuKTtcbiAgICAgIH1cblxuICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gcmVxLnJlc3BvbnNlVGV4dCA/IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCkgOiAnJztcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICBzdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmYWlsdXJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ0dFVCcpIHtcbiAgICAgICAgcmVxLnNlbmQobnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcG9zdERhdGEgPSBudWxsO1xuICAgICAgICBpZiAocmVxdWVzdERhdGEucG9zdERhdGEpIHtcbiAgICAgICAgICBpZiAocmVxdWVzdERhdGEuY29udGVudFR5cGUgPT09ICdpbWFnZS9qcGVnJykge1xuICAgICAgICAgICAgcG9zdERhdGEgPSByZXF1ZXN0RGF0YS5wb3N0RGF0YTtcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCByZXF1ZXN0RGF0YS5jb250ZW50VHlwZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc3REYXRhID0gSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGEucG9zdERhdGEpO1xuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlcS5zZW5kKHBvc3REYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwcm9taXNlRnVuY3Rpb24oKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3Byb21pc2VQcm92aWRlcihwcm9taXNlRnVuY3Rpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxLmFib3J0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0ID0gZnVuY3Rpb24gKFxuICAgIHJlcXVlc3REYXRhLFxuICAgIG9wdGlvbnMsXG4gICAgY2FsbGJhY2ssXG4gICAgb3B0aW9uc0Fsd2F5c0V4dGVuZFBhcmFtc1xuICApIHtcbiAgICB2YXIgb3B0ID0ge307XG4gICAgdmFyIGNiID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdCA9IG9wdGlvbnM7XG4gICAgICBjYiA9IGNhbGxiYWNrO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICAvLyBvcHRpb25zIGV4dGVuZCBwb3N0RGF0YSwgaWYgYW55LiBPdGhlcndpc2UgdGhleSBleHRlbmQgcGFyYW1ldGVycyBzZW50IGluIHRoZSB1cmxcbiAgICB2YXIgdHlwZSA9IHJlcXVlc3REYXRhLnR5cGUgfHwgJ0dFVCc7XG4gICAgaWYgKHR5cGUgIT09ICdHRVQnICYmIHJlcXVlc3REYXRhLnBvc3REYXRhICYmICFvcHRpb25zQWx3YXlzRXh0ZW5kUGFyYW1zKSB7XG4gICAgICByZXF1ZXN0RGF0YS5wb3N0RGF0YSA9IF9leHRlbmQocmVxdWVzdERhdGEucG9zdERhdGEsIG9wdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3REYXRhLnBhcmFtcyA9IF9leHRlbmQocmVxdWVzdERhdGEucGFyYW1zLCBvcHQpO1xuICAgIH1cbiAgICByZXR1cm4gX3BlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBjYik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHdyYXBwZXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICB2YXIgQ29uc3RyID0gZnVuY3Rpb24gKCkge307XG5cbiAgQ29uc3RyLnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogU3BvdGlmeVdlYkFwaVxuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgcmVzb3VyY2UgdGhyb3VnaCBhIGdlbmVyaWMgR0VUIHJlcXVlc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBmZXRjaGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEdlbmVyaWMgPSBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogdXJsXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB1c2VyLlxuICAgKiBTZWUgW0dldCBDdXJyZW50IFVzZXIncyBQcm9maWxlXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1jdXJyZW50LXVzZXJzLXByb2ZpbGUvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0TWUgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZSdcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGN1cnJlbnQgdXNlcidzIHNhdmVkIHRyYWNrcy5cbiAgICogU2VlIFtHZXQgQ3VycmVudCBVc2VyJ3MgU2F2ZWQgVHJhY2tzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC11c2Vycy1zYXZlZC10cmFja3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0TXlTYXZlZFRyYWNrcyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3RyYWNrcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdCBvZiB0cmFja3MgdG8gdGhlIGN1cnJlbnQgdXNlcidzIHNhdmVkIHRyYWNrcy5cbiAgICogU2VlIFtTYXZlIFRyYWNrcyBmb3IgQ3VycmVudCBVc2VyXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NhdmUtdHJhY2tzLXVzZXIvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdHJhY2tJZHMgVGhlIGlkcyBvZiB0aGUgdHJhY2tzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgdHJhY2sgaWQgKGUuZy4gc3BvdGlmeTp0cmFjazo8aGVyZV9pc190aGVfdHJhY2tfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmFkZFRvTXlTYXZlZFRyYWNrcyA9IGZ1bmN0aW9uICh0cmFja0lkcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS90cmFja3MnLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBwb3N0RGF0YTogdHJhY2tJZHNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBsaXN0IG9mIHRyYWNrcyBmcm9tIHRoZSBjdXJyZW50IHVzZXIncyBzYXZlZCB0cmFja3MuXG4gICAqIFNlZSBbUmVtb3ZlIFRyYWNrcyBmb3IgQ3VycmVudCBVc2VyXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3JlbW92ZS10cmFja3MtdXNlci8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB0cmFja0lkcyBUaGUgaWRzIG9mIHRoZSB0cmFja3MuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciB0cmFjayBpZCAoZS5nLiBzcG90aWZ5OnRyYWNrOjxoZXJlX2lzX3RoZV90cmFja19pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUucmVtb3ZlRnJvbU15U2F2ZWRUcmFja3MgPSBmdW5jdGlvbiAoXG4gICAgdHJhY2tJZHMsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS90cmFja3MnLFxuICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICBwb3N0RGF0YTogdHJhY2tJZHNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdXNlcidzIHNhdmVkIHRyYWNrcyBjb250YWlucyBhIGNlcnRhaW4gbGlzdCBvZiB0cmFja3MuXG4gICAqIFNlZSBbQ2hlY2sgQ3VycmVudCBVc2VyJ3MgU2F2ZWQgVHJhY2tzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2NoZWNrLXVzZXJzLXNhdmVkLXRyYWNrcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB0cmFja0lkcyBUaGUgaWRzIG9mIHRoZSB0cmFja3MuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciB0cmFjayBpZCAoZS5nLiBzcG90aWZ5OnRyYWNrOjxoZXJlX2lzX3RoZV90cmFja19pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuY29udGFpbnNNeVNhdmVkVHJhY2tzID0gZnVuY3Rpb24gKFxuICAgIHRyYWNrSWRzLFxuICAgIG9wdGlvbnMsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvdHJhY2tzL2NvbnRhaW5zJyxcbiAgICAgIHBhcmFtczogeyBpZHM6IHRyYWNrSWRzLmpvaW4oJywnKSB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiB0aGUgYWxidW1zIHNhdmVkIGluIHRoZSBjdXJyZW50IFNwb3RpZnkgdXNlcidzIFwiWW91ciBNdXNpY1wiIGxpYnJhcnkuXG4gICAqIFNlZSBbR2V0IEN1cnJlbnQgVXNlcidzIFNhdmVkIEFsYnVtc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtdXNlcnMtc2F2ZWQtYWxidW1zLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldE15U2F2ZWRBbGJ1bXMgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9hbGJ1bXMnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogU2F2ZSBvbmUgb3IgbW9yZSBhbGJ1bXMgdG8gdGhlIGN1cnJlbnQgdXNlcidzIFwiWW91ciBNdXNpY1wiIGxpYnJhcnkuXG4gICAqIFNlZSBbU2F2ZSBBbGJ1bXMgZm9yIEN1cnJlbnQgVXNlcl0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9zYXZlLWFsYnVtcy11c2VyLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGFsYnVtSWRzIFRoZSBpZHMgb2YgdGhlIGFsYnVtcy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkksIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBhbGJ1bSBpZCAoZS5nLiBzcG90aWZ5OmFsYnVtOjxoZXJlX2lzX3RoZV9hbGJ1bV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuYWRkVG9NeVNhdmVkQWxidW1zID0gZnVuY3Rpb24gKGFsYnVtSWRzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL2FsYnVtcycsXG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHBvc3REYXRhOiBhbGJ1bUlkc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBvbmUgb3IgbW9yZSBhbGJ1bXMgZnJvbSB0aGUgY3VycmVudCB1c2VyJ3MgXCJZb3VyIE11c2ljXCIgbGlicmFyeS5cbiAgICogU2VlIFtSZW1vdmUgQWxidW1zIGZvciBDdXJyZW50IFVzZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvcmVtb3ZlLWFsYnVtcy11c2VyLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGFsYnVtSWRzIFRoZSBpZHMgb2YgdGhlIGFsYnVtcy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkksIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBhbGJ1bSBpZCAoZS5nLiBzcG90aWZ5OmFsYnVtOjxoZXJlX2lzX3RoZV9hbGJ1bV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUucmVtb3ZlRnJvbU15U2F2ZWRBbGJ1bXMgPSBmdW5jdGlvbiAoXG4gICAgYWxidW1JZHMsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9hbGJ1bXMnLFxuICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICBwb3N0RGF0YTogYWxidW1JZHNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBvbmUgb3IgbW9yZSBhbGJ1bXMgaXMgYWxyZWFkeSBzYXZlZCBpbiB0aGUgY3VycmVudCBTcG90aWZ5IHVzZXIncyBcIllvdXIgTXVzaWNcIiBsaWJyYXJ5LlxuICAgKiBTZWUgW0NoZWNrIFVzZXIncyBTYXZlZCBBbGJ1bXNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvY2hlY2stdXNlcnMtc2F2ZWQtYWxidW1zLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGFsYnVtSWRzIFRoZSBpZHMgb2YgdGhlIGFsYnVtcy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkksIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBhbGJ1bSBpZCAoZS5nLiBzcG90aWZ5OmFsYnVtOjxoZXJlX2lzX3RoZV9hbGJ1bV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuY29udGFpbnNNeVNhdmVkQWxidW1zID0gZnVuY3Rpb24gKFxuICAgIGFsYnVtSWRzLFxuICAgIG9wdGlvbnMsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvYWxidW1zL2NvbnRhaW5zJyxcbiAgICAgIHBhcmFtczogeyBpZHM6IGFsYnVtSWRzLmpvaW4oJywnKSB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVzZXLigJlzIHRvcCBhcnRpc3RzIGJhc2VkIG9uIGNhbGN1bGF0ZWQgYWZmaW5pdHkuXG4gICAqIFNlZSBbR2V0IGEgVXNlcuKAmXMgVG9wIEFydGlzdHNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXVzZXJzLXRvcC1hcnRpc3RzLWFuZC10cmFja3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0TXlUb3BBcnRpc3RzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvdG9wL2FydGlzdHMnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVzZXLigJlzIHRvcCB0cmFja3MgYmFzZWQgb24gY2FsY3VsYXRlZCBhZmZpbml0eS5cbiAgICogU2VlIFtHZXQgYSBVc2Vy4oCZcyBUb3AgVHJhY2tzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC11c2Vycy10b3AtYXJ0aXN0cy1hbmQtdHJhY2tzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldE15VG9wVHJhY2tzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvdG9wL3RyYWNrcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdHJhY2tzIGZyb20gdGhlIGN1cnJlbnQgdXNlcuKAmXMgcmVjZW50bHkgcGxheWVkIHRyYWNrcy5cbiAgICogU2VlIFtHZXQgQ3VycmVudCBVc2Vy4oCZcyBSZWNlbnRseSBQbGF5ZWQgVHJhY2tzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3dlYi1hcGktcGVyc29uYWxpemF0aW9uLWVuZHBvaW50cy9nZXQtcmVjZW50bHktcGxheWVkLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldE15UmVjZW50bHlQbGF5ZWRUcmFja3MgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9wbGF5ZXIvcmVjZW50bHktcGxheWVkJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGN1cnJlbnQgdXNlciBhcyBhIGZvbGxvd2VyIG9mIG9uZSBvciBtb3JlIG90aGVyIFNwb3RpZnkgdXNlcnMuXG4gICAqIFNlZSBbRm9sbG93IEFydGlzdHMgb3IgVXNlcnNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZm9sbG93LWFydGlzdHMtdXNlcnMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXNlcklkcyBUaGUgaWRzIG9mIHRoZSB1c2Vycy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHVzZXIgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOjxoZXJlX2lzX3RoZV91c2VyX2lkPilcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIGFuIGVtcHR5IHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZm9sbG93VXNlcnMgPSBmdW5jdGlvbiAodXNlcklkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9mb2xsb3dpbmcvJyxcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkczogdXNlcklkcy5qb2luKCcsJyksXG4gICAgICAgIHR5cGU6ICd1c2VyJ1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGN1cnJlbnQgdXNlciBhcyBhIGZvbGxvd2VyIG9mIG9uZSBvciBtb3JlIGFydGlzdHMuXG4gICAqIFNlZSBbRm9sbG93IEFydGlzdHMgb3IgVXNlcnNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZm9sbG93LWFydGlzdHMtdXNlcnMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYXJ0aXN0SWRzIFRoZSBpZHMgb2YgdGhlIGFydGlzdHMuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBhcnRpc3QgaWQgKGUuZy4gc3BvdGlmeTphcnRpc3Q6PGhlcmVfaXNfdGhlX2FydGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyBhbiBlbXB0eSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmZvbGxvd0FydGlzdHMgPSBmdW5jdGlvbiAoYXJ0aXN0SWRzLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL2ZvbGxvd2luZy8nLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWRzOiBhcnRpc3RJZHMuam9pbignLCcpLFxuICAgICAgICB0eXBlOiAnYXJ0aXN0J1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgY3VycmVudCB1c2VyIGFzIGEgZm9sbG93ZXIgb2Ygb25lIHBsYXlsaXN0LlxuICAgKiBTZWUgW0ZvbGxvdyBhIFBsYXlsaXN0XShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2ZvbGxvdy1wbGF5bGlzdC8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkLiBGb3IgaW5zdGFuY2UsXG4gICAqIHdoZXRoZXIgeW91IHdhbnQgdGhlIHBsYXlsaXN0IHRvIGJlIGZvbGxvd2VkIHByaXZhdGVseSAoe3B1YmxpYzogZmFsc2V9KVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgYW4gZW1wdHkgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5mb2xsb3dQbGF5bGlzdCA9IGZ1bmN0aW9uIChwbGF5bGlzdElkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvZm9sbG93ZXJzJyxcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgcG9zdERhdGE6IHt9XG4gICAgfTtcblxuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBjdXJyZW50IHVzZXIgYXMgYSBmb2xsb3dlciBvZiBvbmUgb3IgbW9yZSBvdGhlciBTcG90aWZ5IHVzZXJzLlxuICAgKiBTZWUgW1VuZm9sbG93IEFydGlzdHMgb3IgVXNlcnNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvdW5mb2xsb3ctYXJ0aXN0cy11c2Vycy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1c2VySWRzIFRoZSBpZHMgb2YgdGhlIHVzZXJzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgdXNlciBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6PGhlcmVfaXNfdGhlX3VzZXJfaWQ+KVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgYW4gZW1wdHkgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS51bmZvbGxvd1VzZXJzID0gZnVuY3Rpb24gKHVzZXJJZHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvZm9sbG93aW5nLycsXG4gICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZHM6IHVzZXJJZHMuam9pbignLCcpLFxuICAgICAgICB0eXBlOiAndXNlcidcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBjdXJyZW50IHVzZXIgYXMgYSBmb2xsb3dlciBvZiBvbmUgb3IgbW9yZSBhcnRpc3RzLlxuICAgKiBTZWUgW1VuZm9sbG93IEFydGlzdHMgb3IgVXNlcnNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvdW5mb2xsb3ctYXJ0aXN0cy11c2Vycy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBhcnRpc3RJZHMgVGhlIGlkcyBvZiB0aGUgYXJ0aXN0cy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIGFydGlzdCBpZCAoZS5nLiBzcG90aWZ5OmFydGlzdDo8aGVyZV9pc190aGVfYXJ0aXN0X2lkPilcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIGFuIGVtcHR5IHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUudW5mb2xsb3dBcnRpc3RzID0gZnVuY3Rpb24gKGFydGlzdElkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9mb2xsb3dpbmcvJyxcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkczogYXJ0aXN0SWRzLmpvaW4oJywnKSxcbiAgICAgICAgdHlwZTogJ2FydGlzdCdcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGN1cnJlbnQgdXNlciBhcyBhIGZvbGxvd2VyIG9mIG9uZSBwbGF5bGlzdC5cbiAgICogU2VlIFtVbmZvbGxvdyBhIFBsYXlsaXN0XShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3VuZm9sbG93LXBsYXlsaXN0Lykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgaWQgb2YgdGhlIHBsYXlsaXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBwbGF5bGlzdCBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6eHh4eDpwbGF5bGlzdDo8aGVyZV9pc190aGVfcGxheWxpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgYW4gZW1wdHkgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS51bmZvbGxvd1BsYXlsaXN0ID0gZnVuY3Rpb24gKHBsYXlsaXN0SWQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy9mb2xsb3dlcnMnLFxuICAgICAgdHlwZTogJ0RFTEVURSdcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgZm9sbG93aW5nIG9uZSBvciBtb3JlIG90aGVyIFNwb3RpZnkgdXNlcnMuXG4gICAqIFNlZSBbQ2hlY2sgaWYgQ3VycmVudCBVc2VyIEZvbGxvd3MgVXNlcnMgb3IgQXJ0aXN0c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9jaGVjay1jdXJyZW50LXVzZXItZm9sbG93cy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1c2VySWRzIFRoZSBpZHMgb2YgdGhlIHVzZXJzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgdXNlciBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6PGhlcmVfaXNfdGhlX3VzZXJfaWQ+KVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgYW4gYXJyYXkgb2YgYm9vbGVhbiB2YWx1ZXMgdGhhdCBpbmRpY2F0ZVxuICAgKiB3aGV0aGVyIHRoZSB1c2VyIGlzIGZvbGxvd2luZyB0aGUgdXNlcnMgc2VudCBpbiB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuaXNGb2xsb3dpbmdVc2VycyA9IGZ1bmN0aW9uICh1c2VySWRzLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL2ZvbGxvd2luZy9jb250YWlucycsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZHM6IHVzZXJJZHMuam9pbignLCcpLFxuICAgICAgICB0eXBlOiAndXNlcidcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgZm9sbG93aW5nIG9uZSBvciBtb3JlIGFydGlzdHMuXG4gICAqIFNlZSBbQ2hlY2sgaWYgQ3VycmVudCBVc2VyIEZvbGxvd3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvY2hlY2stY3VycmVudC11c2VyLWZvbGxvd3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYXJ0aXN0SWRzIFRoZSBpZHMgb2YgdGhlIGFydGlzdHMuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBhcnRpc3QgaWQgKGUuZy4gc3BvdGlmeTphcnRpc3Q6PGhlcmVfaXNfdGhlX2FydGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyBhbiBhcnJheSBvZiBib29sZWFuIHZhbHVlcyB0aGF0IGluZGljYXRlXG4gICAqIHdoZXRoZXIgdGhlIHVzZXIgaXMgZm9sbG93aW5nIHRoZSBhcnRpc3RzIHNlbnQgaW4gdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmlzRm9sbG93aW5nQXJ0aXN0cyA9IGZ1bmN0aW9uIChhcnRpc3RJZHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvZm9sbG93aW5nL2NvbnRhaW5zJyxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkczogYXJ0aXN0SWRzLmpvaW4oJywnKSxcbiAgICAgICAgdHlwZTogJ2FydGlzdCdcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayB0byBzZWUgaWYgb25lIG9yIG1vcmUgU3BvdGlmeSB1c2VycyBhcmUgZm9sbG93aW5nIGEgc3BlY2lmaWVkIHBsYXlsaXN0LlxuICAgKiBTZWUgW0NoZWNrIGlmIFVzZXJzIEZvbGxvdyBhIFBsYXlsaXN0XShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2NoZWNrLXVzZXItZm9sbG93aW5nLXBsYXlsaXN0Lykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgaWQgb2YgdGhlIHBsYXlsaXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBwbGF5bGlzdCBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6eHh4eDpwbGF5bGlzdDo8aGVyZV9pc190aGVfcGxheWxpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVzZXJJZHMgVGhlIGlkcyBvZiB0aGUgdXNlcnMuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciB1c2VyIGlkIChlLmcuIHNwb3RpZnk6dXNlcjo8aGVyZV9pc190aGVfdXNlcl9pZD4pXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyBhbiBhcnJheSBvZiBib29sZWFuIHZhbHVlcyB0aGF0IGluZGljYXRlXG4gICAqIHdoZXRoZXIgdGhlIHVzZXJzIGFyZSBmb2xsb3dpbmcgdGhlIHBsYXlsaXN0IHNlbnQgaW4gdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmFyZUZvbGxvd2luZ1BsYXlsaXN0ID0gZnVuY3Rpb24gKFxuICAgIHBsYXlsaXN0SWQsXG4gICAgdXNlcklkcyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL2ZvbGxvd2Vycy9jb250YWlucycsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZHM6IHVzZXJJZHMuam9pbignLCcpXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVzZXIncyBmb2xsb3dlZCBhcnRpc3RzLlxuICAgKiBTZWUgW0dldCBVc2VyJ3MgRm9sbG93ZWQgQXJ0aXN0c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtZm9sbG93ZWQtYXJ0aXN0cy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zLCBiZWluZyBhZnRlciBhbmQgbGltaXQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyBhbiBvYmplY3Qgd2l0aCBhIHBhZ2VkIG9iamVjdCBjb250YWluaW5nXG4gICAqIGFydGlzdHMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfHVuZGVmaW5lZH0gQSBwcm9taXNlIHRoYXQgaWYgc3VjY2Vzc2Z1bCwgcmVzb2x2ZXMgdG8gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBwYWdpbmcgb2JqZWN0IHdoaWNoIGNvbnRhaW5zXG4gICAqIGFydGlzdHMgb2JqZWN0cy4gTm90IHJldHVybmVkIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEZvbGxvd2VkQXJ0aXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL2ZvbGxvd2luZycsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0eXBlOiAnYXJ0aXN0J1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyB1c2VyLlxuICAgKiBTZWUgW0dldCBhIFVzZXIncyBQcm9maWxlXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC11c2Vycy1wcm9maWxlLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBpZCBvZiB0aGUgdXNlci4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOjxoZXJlX2lzX3RoZV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0VXNlciA9IGZ1bmN0aW9uICh1c2VySWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvdXNlcnMvJyArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBhIGxpc3Qgb2YgdGhlIGN1cnJlbnQgdXNlcidzIHBsYXlsaXN0cy5cbiAgICogU2VlIFtHZXQgYSBMaXN0IG9mIGEgVXNlcidzIFBsYXlsaXN0c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtbGlzdC11c2Vycy1wbGF5bGlzdHMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgQW4gb3B0aW9uYWwgaWQgb2YgdGhlIHVzZXIuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIGlkIChlLmcuIHNwb3RpZnk6dXNlcjo8aGVyZV9pc190aGVfaWQ+KS4gSWYgbm90IHByb3ZpZGVkLCB0aGUgaWQgb2YgdGhlIHVzZXIgdGhhdCBncmFudGVkXG4gICAqIHRoZSBwZXJtaXNzaW9ucyB3aWxsIGJlIHVzZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0VXNlclBsYXlsaXN0cyA9IGZ1bmN0aW9uICh1c2VySWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhO1xuICAgIGlmICh0eXBlb2YgdXNlcklkID09PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWVzdERhdGEgPSB7XG4gICAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3VzZXJzLycgKyBlbmNvZGVVUklDb21wb25lbnQodXNlcklkKSArICcvcGxheWxpc3RzJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdERhdGEgPSB7XG4gICAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXlsaXN0cydcbiAgICAgIH07XG4gICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0gdXNlcklkO1xuICAgIH1cbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBhIHNwZWNpZmljIHBsYXlsaXN0LlxuICAgKiBTZWUgW0dldCBhIFBsYXlsaXN0XShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1wbGF5bGlzdC8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRQbGF5bGlzdCA9IGZ1bmN0aW9uIChwbGF5bGlzdElkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZFxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIHRyYWNrcyBmcm9tIGEgc3BlY2lmaWMgcGxheWxpc3QuXG4gICAqIFNlZSBbR2V0IGEgUGxheWxpc3QncyBUcmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXBsYXlsaXN0cy10cmFja3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBpZCBvZiB0aGUgcGxheWxpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHBsYXlsaXN0IGlkIChlLmcuIHNwb3RpZnk6dXNlcjp4eHh4OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0UGxheWxpc3RUcmFja3MgPSBmdW5jdGlvbiAoXG4gICAgcGxheWxpc3RJZCxcbiAgICBvcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgaW1hZ2UgYXNzb2NpYXRlZCB3aXRoIGEgc3BlY2lmaWMgcGxheWxpc3QuXG4gICAqIFNlZSBbR2V0IGEgUGxheWxpc3QgQ292ZXIgSW1hZ2VdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL2RvY3VtZW50YXRpb24vd2ViLWFwaS9yZWZlcmVuY2UvcGxheWxpc3RzL2dldC1wbGF5bGlzdC1jb3Zlci8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTpwbGF5bGlzdDo8aGVyZV9pc190aGVfcGxheWxpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0UGxheWxpc3RDb3ZlckltYWdlID0gZnVuY3Rpb24gKHBsYXlsaXN0SWQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy9pbWFnZXMnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHBsYXlsaXN0IGFuZCBzdG9yZXMgaXQgaW4gdGhlIGN1cnJlbnQgdXNlcidzIGxpYnJhcnkuXG4gICAqIFNlZSBbQ3JlYXRlIGEgUGxheWxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvY3JlYXRlLXBsYXlsaXN0Lykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFRoZSBpZCBvZiB0aGUgdXNlci4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOjxoZXJlX2lzX3RoZV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuY3JlYXRlUGxheWxpc3QgPSBmdW5jdGlvbiAodXNlcklkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3VzZXJzLycgKyBlbmNvZGVVUklDb21wb25lbnQodXNlcklkKSArICcvcGxheWxpc3RzJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHBvc3REYXRhOiBvcHRpb25zXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hhbmdlIGEgcGxheWxpc3QncyBuYW1lIGFuZCBwdWJsaWMvcHJpdmF0ZSBzdGF0ZVxuICAgKiBTZWUgW0NoYW5nZSBhIFBsYXlsaXN0J3MgRGV0YWlsc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9jaGFuZ2UtcGxheWxpc3QtZGV0YWlscy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgQSBKU09OIG9iamVjdCB3aXRoIHRoZSBkYXRhIHRvIHVwZGF0ZS4gRS5nLiB7bmFtZTogJ0EgbmV3IG5hbWUnLCBwdWJsaWM6IHRydWV9XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5jaGFuZ2VQbGF5bGlzdERldGFpbHMgPSBmdW5jdGlvbiAoXG4gICAgcGxheWxpc3RJZCxcbiAgICBkYXRhLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCxcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgcG9zdERhdGE6IGRhdGFcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgZGF0YSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgdHJhY2tzIHRvIGEgcGxheWxpc3QuXG4gICAqIFNlZSBbQWRkIFRyYWNrcyB0byBhIFBsYXlsaXN0XShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2FkZC10cmFja3MtdG8tcGxheWxpc3QvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBpZCBvZiB0aGUgcGxheWxpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHBsYXlsaXN0IGlkIChlLmcuIHNwb3RpZnk6dXNlcjp4eHh4OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJpcyBBbiBhcnJheSBvZiBTcG90aWZ5IFVSSXMgZm9yIHRoZSB0cmFja3NcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5hZGRUcmFja3NUb1BsYXlsaXN0ID0gZnVuY3Rpb24gKFxuICAgIHBsYXlsaXN0SWQsXG4gICAgdXJpcyxcbiAgICBvcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHBvc3REYXRhOiB7XG4gICAgICAgIHVyaXM6IHVyaXNcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2ssIHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSB0cmFja3Mgb2YgYSBwbGF5bGlzdFxuICAgKiBTZWUgW1JlcGxhY2UgYSBQbGF5bGlzdCdzIFRyYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9yZXBsYWNlLXBsYXlsaXN0cy10cmFja3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBpZCBvZiB0aGUgcGxheWxpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHBsYXlsaXN0IGlkIChlLmcuIHNwb3RpZnk6dXNlcjp4eHh4OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJpcyBBbiBhcnJheSBvZiBTcG90aWZ5IFVSSXMgZm9yIHRoZSB0cmFja3NcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnJlcGxhY2VUcmFja3NJblBsYXlsaXN0ID0gZnVuY3Rpb24gKFxuICAgIHBsYXlsaXN0SWQsXG4gICAgdXJpcyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL3RyYWNrcycsXG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHBvc3REYXRhOiB7IHVyaXM6IHVyaXMgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCB7fSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW9yZGVyIHRyYWNrcyBpbiBhIHBsYXlsaXN0XG4gICAqIFNlZSBbUmVvcmRlciBhIFBsYXlsaXN04oCZcyBUcmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvcmVvcmRlci1wbGF5bGlzdHMtdHJhY2tzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgaWQgb2YgdGhlIHBsYXlsaXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBwbGF5bGlzdCBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6eHh4eDpwbGF5bGlzdDo8aGVyZV9pc190aGVfcGxheWxpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge251bWJlcn0gcmFuZ2VTdGFydCBUaGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IHRyYWNrIHRvIGJlIHJlb3JkZXJlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluc2VydEJlZm9yZSBUaGUgcG9zaXRpb24gd2hlcmUgdGhlIHRyYWNrcyBzaG91bGQgYmUgaW5zZXJ0ZWQuIFRvIHJlb3JkZXIgdGhlIHRyYWNrcyB0b1xuICAgKiB0aGUgZW5kIG9mIHRoZSBwbGF5bGlzdCwgc2ltcGx5IHNldCBpbnNlcnRfYmVmb3JlIHRvIHRoZSBwb3NpdGlvbiBhZnRlciB0aGUgbGFzdCB0cmFjay5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQW4gb2JqZWN0IHdpdGggb3B0aW9uYWwgcGFyYW1ldGVycyAocmFuZ2VfbGVuZ3RoLCBzbmFwc2hvdF9pZClcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnJlb3JkZXJUcmFja3NJblBsYXlsaXN0ID0gZnVuY3Rpb24gKFxuICAgIHBsYXlsaXN0SWQsXG4gICAgcmFuZ2VTdGFydCxcbiAgICBpbnNlcnRCZWZvcmUsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL3RyYWNrcycsXG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHBvc3REYXRhOiB7XG4gICAgICAgIHJhbmdlX3N0YXJ0OiByYW5nZVN0YXJ0LFxuICAgICAgICBpbnNlcnRfYmVmb3JlOiBpbnNlcnRCZWZvcmVcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0cmFja3MgZnJvbSBhIHBsYXlsaXN0XG4gICAqIFNlZSBbUmVtb3ZlIFRyYWNrcyBmcm9tIGEgUGxheWxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvcmVtb3ZlLXRyYWNrcy1wbGF5bGlzdC8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSB1cmlzIEFuIGFycmF5IG9mIHRyYWNrcyB0byBiZSByZW1vdmVkLiBFYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IGNhbiBiZSBlaXRoZXIgYVxuICAgKiBzdHJpbmcsIGluIHdoaWNoIGNhc2UgaXQgaXMgdHJlYXRlZCBhcyBhIFVSSSwgb3IgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgYHVyaWAgKHdoaWNoIGlzIGFcbiAgICogc3RyaW5nKSBhbmQgYHBvc2l0aW9uc2AgKHdoaWNoIGlzIGFuIGFycmF5IG9mIGludGVnZXJzKS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnJlbW92ZVRyYWNrc0Zyb21QbGF5bGlzdCA9IGZ1bmN0aW9uIChcbiAgICBwbGF5bGlzdElkLFxuICAgIHVyaXMsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIGRhdGFUb0JlU2VudCA9IHVyaXMubWFwKGZ1bmN0aW9uICh1cmkpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJpID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4geyB1cmk6IHVyaSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVyaTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJyxcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgcG9zdERhdGE6IHsgdHJhY2tzOiBkYXRhVG9CZVNlbnQgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCB7fSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdHJhY2tzIGZyb20gYSBwbGF5bGlzdCwgc3BlY2lmeWluZyBhIHNuYXBzaG90IGlkLlxuICAgKiBTZWUgW1JlbW92ZSBUcmFja3MgZnJvbSBhIFBsYXlsaXN0XShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3JlbW92ZS10cmFja3MtcGxheWxpc3QvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBpZCBvZiB0aGUgcGxheWxpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHBsYXlsaXN0IGlkIChlLmcuIHNwb3RpZnk6dXNlcjp4eHh4OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gdXJpcyBBbiBhcnJheSBvZiB0cmFja3MgdG8gYmUgcmVtb3ZlZC4gRWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSBjYW4gYmUgZWl0aGVyIGFcbiAgICogc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGlzIHRyZWF0ZWQgYXMgYSBVUkksIG9yIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIGB1cmlgICh3aGljaCBpcyBhXG4gICAqIHN0cmluZykgYW5kIGBwb3NpdGlvbnNgICh3aGljaCBpcyBhbiBhcnJheSBvZiBpbnRlZ2VycykuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzbmFwc2hvdElkIFRoZSBwbGF5bGlzdCdzIHNuYXBzaG90IElEIGFnYWluc3Qgd2hpY2ggeW91IHdhbnQgdG8gbWFrZSB0aGUgY2hhbmdlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUucmVtb3ZlVHJhY2tzRnJvbVBsYXlsaXN0V2l0aFNuYXBzaG90SWQgPSBmdW5jdGlvbiAoXG4gICAgcGxheWxpc3RJZCxcbiAgICB1cmlzLFxuICAgIHNuYXBzaG90SWQsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIGRhdGFUb0JlU2VudCA9IHVyaXMubWFwKGZ1bmN0aW9uICh1cmkpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJpID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4geyB1cmk6IHVyaSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVyaTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL3RyYWNrcycsXG4gICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgIHBvc3REYXRhOiB7XG4gICAgICAgIHRyYWNrczogZGF0YVRvQmVTZW50LFxuICAgICAgICBzbmFwc2hvdF9pZDogc25hcHNob3RJZFxuICAgICAgfVxuICAgIH07XG4gICAgLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIHt9LCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0cmFja3MgZnJvbSBhIHBsYXlsaXN0LCBzcGVjaWZ5aW5nIHRoZSBwb3NpdGlvbnMgb2YgdGhlIHRyYWNrcyB0byBiZSByZW1vdmVkLlxuICAgKiBTZWUgW1JlbW92ZSBUcmFja3MgZnJvbSBhIFBsYXlsaXN0XShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3JlbW92ZS10cmFja3MtcGxheWxpc3QvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBpZCBvZiB0aGUgcGxheWxpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHBsYXlsaXN0IGlkIChlLmcuIHNwb3RpZnk6dXNlcjp4eHh4OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gcG9zaXRpb25zIGFycmF5IG9mIGludGVnZXJzIGNvbnRhaW5pbmcgdGhlIHBvc2l0aW9ucyBvZiB0aGUgdHJhY2tzIHRvIHJlbW92ZVxuICAgKiBmcm9tIHRoZSBwbGF5bGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNuYXBzaG90SWQgVGhlIHBsYXlsaXN0J3Mgc25hcHNob3QgSUQgYWdhaW5zdCB3aGljaCB5b3Ugd2FudCB0byBtYWtlIHRoZSBjaGFuZ2VzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5yZW1vdmVUcmFja3NGcm9tUGxheWxpc3RJblBvc2l0aW9ucyA9IGZ1bmN0aW9uIChcbiAgICBwbGF5bGlzdElkLFxuICAgIHBvc2l0aW9ucyxcbiAgICBzbmFwc2hvdElkLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJyxcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgcG9zdERhdGE6IHtcbiAgICAgICAgcG9zaXRpb25zOiBwb3NpdGlvbnMsXG4gICAgICAgIHNuYXBzaG90X2lkOiBzbmFwc2hvdElkXG4gICAgICB9XG4gICAgfTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwge30sIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogVXBsb2FkIGEgY3VzdG9tIHBsYXlsaXN0IGNvdmVyIGltYWdlLlxuICAgKiBTZWUgW1VwbG9hZCBBIEN1c3RvbSBQbGF5bGlzdCBDb3ZlciBJbWFnZV0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS91cGxvYWQtYS1jdXN0b20tcGxheWxpc3QtY292ZXItaW1hZ2UvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBpZCBvZiB0aGUgcGxheWxpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHBsYXlsaXN0IGlkIChlLmcuIHNwb3RpZnk6dXNlcjp4eHh4OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZURhdGEgQmFzZTY0IGVuY29kZWQgSlBFRyBpbWFnZSBkYXRhLCBtYXhpbXVtIHBheWxvYWQgc2l6ZSBpcyAyNTYgS0IuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS51cGxvYWRDdXN0b21QbGF5bGlzdENvdmVySW1hZ2UgPSBmdW5jdGlvbiAoXG4gICAgcGxheWxpc3RJZCxcbiAgICBpbWFnZURhdGEsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy9pbWFnZXMnLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBwb3N0RGF0YTogaW1hZ2VEYXRhLnJlcGxhY2UoL15kYXRhOmltYWdlXFwvanBlZztiYXNlNjQsLywgJycpLFxuICAgICAgY29udGVudFR5cGU6ICdpbWFnZS9qcGVnJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCB7fSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGFuIGFsYnVtIGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZy5cbiAgICogU2VlIFtHZXQgYW4gQWxidW1dKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWFsYnVtLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWxidW1JZCBUaGUgaWQgb2YgdGhlIGFsYnVtLiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBhbGJ1bSBpZCAoZS5nLiBzcG90aWZ5OmFsYnVtOjxoZXJlX2lzX3RoZV9hbGJ1bV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0QWxidW0gPSBmdW5jdGlvbiAoYWxidW1JZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9hbGJ1bXMvJyArIGFsYnVtSWRcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSB0cmFja3Mgb2YgYW4gYWxidW0gZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBhbiBBbGJ1bSdzIFRyYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtYWxidW1zLXRyYWNrcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFsYnVtSWQgVGhlIGlkIG9mIHRoZSBhbGJ1bS4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgYWxidW0gaWQgKGUuZy4gc3BvdGlmeTphbGJ1bTo8aGVyZV9pc190aGVfYWxidW1faWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEFsYnVtVHJhY2tzID0gZnVuY3Rpb24gKGFsYnVtSWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvYWxidW1zLycgKyBhbGJ1bUlkICsgJy90cmFja3MnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBtdWx0aXBsZSBhbGJ1bXMgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBTZXZlcmFsIEFsYnVtc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtc2V2ZXJhbC1hbGJ1bXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYWxidW1JZHMgVGhlIGlkcyBvZiB0aGUgYWxidW1zLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgYWxidW0gaWQgKGUuZy4gc3BvdGlmeTphbGJ1bTo8aGVyZV9pc190aGVfYWxidW1faWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEFsYnVtcyA9IGZ1bmN0aW9uIChhbGJ1bUlkcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9hbGJ1bXMvJyxcbiAgICAgIHBhcmFtczogeyBpZHM6IGFsYnVtSWRzLmpvaW4oJywnKSB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBhIHRyYWNrIGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZy5cbiAgICogU2VlIFtHZXQgYSBUcmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtdHJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja0lkIFRoZSBpZCBvZiB0aGUgdHJhY2suIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHRyYWNrIGlkIChlLmcuIHNwb3RpZnk6dHJhY2s6PGhlcmVfaXNfdGhlX3RyYWNrX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRUcmFjayA9IGZ1bmN0aW9uICh0cmFja0lkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHt9O1xuICAgIHJlcXVlc3REYXRhLnVybCA9IF9iYXNlVXJpICsgJy90cmFja3MvJyArIHRyYWNrSWQ7XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgbXVsdGlwbGUgdHJhY2tzIGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZy5cbiAgICogU2VlIFtHZXQgU2V2ZXJhbCBUcmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXNldmVyYWwtdHJhY2tzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHRyYWNrSWRzIFRoZSBpZHMgb2YgdGhlIHRyYWNrcy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHRyYWNrIGlkIChlLmcuIHNwb3RpZnk6dHJhY2s6PGhlcmVfaXNfdGhlX3RyYWNrX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRUcmFja3MgPSBmdW5jdGlvbiAodHJhY2tJZHMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvdHJhY2tzLycsXG4gICAgICBwYXJhbXM6IHsgaWRzOiB0cmFja0lkcy5qb2luKCcsJykgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYW4gYXJ0aXN0IGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZy5cbiAgICogU2VlIFtHZXQgYW4gQXJ0aXN0XShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1hcnRpc3QvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcnRpc3RJZCBUaGUgaWQgb2YgdGhlIGFydGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgYXJ0aXN0IGlkIChlLmcuIHNwb3RpZnk6YXJ0aXN0OjxoZXJlX2lzX3RoZV9hcnRpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEFydGlzdCA9IGZ1bmN0aW9uIChhcnRpc3RJZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9hcnRpc3RzLycgKyBhcnRpc3RJZFxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgbXVsdGlwbGUgYXJ0aXN0cyBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cuXG4gICAqIFNlZSBbR2V0IFNldmVyYWwgQXJ0aXN0c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtc2V2ZXJhbC1hcnRpc3RzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGFydGlzdElkcyBUaGUgaWRzIG9mIHRoZSBhcnRpc3RzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgYXJ0aXN0IGlkIChlLmcuIHNwb3RpZnk6YXJ0aXN0OjxoZXJlX2lzX3RoZV9hcnRpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEFydGlzdHMgPSBmdW5jdGlvbiAoYXJ0aXN0SWRzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL2FydGlzdHMvJyxcbiAgICAgIHBhcmFtczogeyBpZHM6IGFydGlzdElkcy5qb2luKCcsJykgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGFsYnVtcyBvZiBhbiBhcnRpc3QgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBhbiBBcnRpc3QncyBBbGJ1bXNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWFydGlzdHMtYWxidW1zLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXJ0aXN0SWQgVGhlIGlkIG9mIHRoZSBhcnRpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIGFydGlzdCBpZCAoZS5nLiBzcG90aWZ5OmFydGlzdDo8aGVyZV9pc190aGVfYXJ0aXN0X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRBcnRpc3RBbGJ1bXMgPSBmdW5jdGlvbiAoYXJ0aXN0SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvYXJ0aXN0cy8nICsgYXJ0aXN0SWQgKyAnL2FsYnVtcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgbGlzdCBvZiB0b3AgdHJhY2tzIG9mIGFuIGFydGlzdCBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2csIGZvciBhIHNwZWNpZmljIGNvdW50cnkuXG4gICAqIFNlZSBbR2V0IGFuIEFydGlzdCdzIFRvcCBUcmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWFydGlzdHMtdG9wLXRyYWNrcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFydGlzdElkIFRoZSBpZCBvZiB0aGUgYXJ0aXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBhcnRpc3QgaWQgKGUuZy4gc3BvdGlmeTphcnRpc3Q6PGhlcmVfaXNfdGhlX2FydGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudHJ5SWQgVGhlIGlkIG9mIHRoZSBjb3VudHJ5IChlLmcuIEVTIGZvciBTcGFpbiBvciBVUyBmb3IgVW5pdGVkIFN0YXRlcylcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRBcnRpc3RUb3BUcmFja3MgPSBmdW5jdGlvbiAoXG4gICAgYXJ0aXN0SWQsXG4gICAgY291bnRyeUlkLFxuICAgIG9wdGlvbnMsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvYXJ0aXN0cy8nICsgYXJ0aXN0SWQgKyAnL3RvcC10cmFja3MnLFxuICAgICAgcGFyYW1zOiB7IGNvdW50cnk6IGNvdW50cnlJZCB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBhIGxpc3Qgb2YgYXJ0aXN0cyByZWxhdGVkIHdpdGggYSBnaXZlbiBvbmUgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBhbiBBcnRpc3QncyBSZWxhdGVkIEFydGlzdHNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXJlbGF0ZWQtYXJ0aXN0cy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFydGlzdElkIFRoZSBpZCBvZiB0aGUgYXJ0aXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBhcnRpc3QgaWQgKGUuZy4gc3BvdGlmeTphcnRpc3Q6PGhlcmVfaXNfdGhlX2FydGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0QXJ0aXN0UmVsYXRlZEFydGlzdHMgPSBmdW5jdGlvbiAoXG4gICAgYXJ0aXN0SWQsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9hcnRpc3RzLycgKyBhcnRpc3RJZCArICcvcmVsYXRlZC1hcnRpc3RzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBsaXN0IG9mIFNwb3RpZnkgZmVhdHVyZWQgcGxheWxpc3RzIChzaG93biwgZm9yIGV4YW1wbGUsIG9uIGEgU3BvdGlmeSBwbGF5ZXIncyBcIkJyb3dzZVwiIHRhYikuXG4gICAqIFNlZSBbR2V0IGEgTGlzdCBvZiBGZWF0dXJlZCBQbGF5bGlzdHNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWxpc3QtZmVhdHVyZWQtcGxheWxpc3RzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEZlYXR1cmVkUGxheWxpc3RzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvYnJvd3NlL2ZlYXR1cmVkLXBsYXlsaXN0cydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgbGlzdCBvZiBuZXcgYWxidW0gcmVsZWFzZXMgZmVhdHVyZWQgaW4gU3BvdGlmeSAoc2hvd24sIGZvciBleGFtcGxlLCBvbiBhIFNwb3RpZnkgcGxheWVyJ3MgXCJCcm93c2VcIiB0YWIpLlxuICAgKiBTZWUgW0dldCBhIExpc3Qgb2YgTmV3IFJlbGVhc2VzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1saXN0LW5ldy1yZWxlYXNlcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXROZXdSZWxlYXNlcyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL2Jyb3dzZS9uZXctcmVsZWFzZXMnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBjYXRlZ29yaWVzIHVzZWQgdG8gdGFnIGl0ZW1zIGluIFNwb3RpZnkgKG9uLCBmb3IgZXhhbXBsZSwgdGhlIFNwb3RpZnkgcGxheWVyJ3MgXCJCcm93c2VcIiB0YWIpLlxuICAgKiBTZWUgW0dldCBhIExpc3Qgb2YgQ2F0ZWdvcmllc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtbGlzdC1jYXRlZ29yaWVzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9icm93c2UvY2F0ZWdvcmllcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSBzaW5nbGUgY2F0ZWdvcnkgdXNlZCB0byB0YWcgaXRlbXMgaW4gU3BvdGlmeSAob24sIGZvciBleGFtcGxlLCB0aGUgU3BvdGlmeSBwbGF5ZXIncyBcIkJyb3dzZVwiIHRhYikuXG4gICAqIFNlZSBbR2V0IGEgQ2F0ZWdvcnldKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWNhdGVnb3J5Lykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlJZCBUaGUgaWQgb2YgdGhlIGNhdGVnb3J5LiBUaGVzZSBjYW4gYmUgZm91bmQgd2l0aCB0aGUgZ2V0Q2F0ZWdvcmllcyBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldENhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvYnJvd3NlL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5SWRcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIFNwb3RpZnkgcGxheWxpc3RzIHRhZ2dlZCB3aXRoIGEgcGFydGljdWxhciBjYXRlZ29yeS5cbiAgICogU2VlIFtHZXQgYSBDYXRlZ29yeSdzIFBsYXlsaXN0c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtY2F0ZWdvcnlzLXBsYXlsaXN0cy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5SWQgVGhlIGlkIG9mIHRoZSBjYXRlZ29yeS4gVGhlc2UgY2FuIGJlIGZvdW5kIHdpdGggdGhlIGdldENhdGVnb3JpZXMgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRDYXRlZ29yeVBsYXlsaXN0cyA9IGZ1bmN0aW9uIChcbiAgICBjYXRlZ29yeUlkLFxuICAgIG9wdGlvbnMsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvYnJvd3NlL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5SWQgKyAnL3BsYXlsaXN0cydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgU3BvdGlmeSBjYXRhbG9nIGluZm9ybWF0aW9uIGFib3V0IGFydGlzdHMsIGFsYnVtcywgdHJhY2tzIG9yIHBsYXlsaXN0cyB0aGF0IG1hdGNoIGEga2V5d29yZCBzdHJpbmcuXG4gICAqIFNlZSBbU2VhcmNoIGZvciBhbiBJdGVtXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NlYXJjaC1pdGVtLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHR5cGVzIEFuIGFycmF5IG9mIGl0ZW0gdHlwZXMgdG8gc2VhcmNoIGFjcm9zcy5cbiAgICogVmFsaWQgdHlwZXMgYXJlOiAnYWxidW0nLCAnYXJ0aXN0JywgJ3BsYXlsaXN0JywgYW5kICd0cmFjaycuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24gKHF1ZXJ5LCB0eXBlcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9zZWFyY2gvJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgdHlwZTogdHlwZXMuam9pbignLCcpXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBhbGJ1bXMgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nIGFjY29yZGluZyB0byBhIHF1ZXJ5LlxuICAgKiBTZWUgW1NlYXJjaCBmb3IgYW4gSXRlbV0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9zZWFyY2gtaXRlbS8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFRoZSBzZWFyY2ggcXVlcnlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5zZWFyY2hBbGJ1bXMgPSBmdW5jdGlvbiAocXVlcnksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKHF1ZXJ5LCBbJ2FsYnVtJ10sIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBhcnRpc3RzIGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZyBhY2NvcmRpbmcgdG8gYSBxdWVyeS5cbiAgICogU2VlIFtTZWFyY2ggZm9yIGFuIEl0ZW1dKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvc2VhcmNoLWl0ZW0vKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBUaGUgc2VhcmNoIHF1ZXJ5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2VhcmNoQXJ0aXN0cyA9IGZ1bmN0aW9uIChxdWVyeSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2gocXVlcnksIFsnYXJ0aXN0J10sIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyB0cmFja3MgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nIGFjY29yZGluZyB0byBhIHF1ZXJ5LlxuICAgKiBTZWUgW1NlYXJjaCBmb3IgYW4gSXRlbV0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9zZWFyY2gtaXRlbS8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFRoZSBzZWFyY2ggcXVlcnlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5zZWFyY2hUcmFja3MgPSBmdW5jdGlvbiAocXVlcnksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKHF1ZXJ5LCBbJ3RyYWNrJ10sIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBwbGF5bGlzdHMgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nIGFjY29yZGluZyB0byBhIHF1ZXJ5LlxuICAgKiBTZWUgW1NlYXJjaCBmb3IgYW4gSXRlbV0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9zZWFyY2gtaXRlbS8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFRoZSBzZWFyY2ggcXVlcnlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5zZWFyY2hQbGF5bGlzdHMgPSBmdW5jdGlvbiAocXVlcnksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKHF1ZXJ5LCBbJ3BsYXlsaXN0J10sIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBzaG93cyBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cgYWNjb3JkaW5nIHRvIGEgcXVlcnkuXG4gICAqIFNlZSBbU2VhcmNoIGZvciBhbiBJdGVtXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NlYXJjaC1pdGVtLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNlYXJjaFNob3dzID0gZnVuY3Rpb24gKHF1ZXJ5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaChxdWVyeSwgWydzaG93J10sIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBlcGlzb2RlcyBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cgYWNjb3JkaW5nIHRvIGEgcXVlcnkuXG4gICAqIFNlZSBbU2VhcmNoIGZvciBhbiBJdGVtXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NlYXJjaC1pdGVtLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNlYXJjaEVwaXNvZGVzID0gZnVuY3Rpb24gKHF1ZXJ5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaChxdWVyeSwgWydlcGlzb2RlJ10sIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGF1ZGlvIGZlYXR1cmVzIGZvciBhIHNpbmdsZSB0cmFjayBpZGVudGlmaWVkIGJ5IGl0cyB1bmlxdWUgU3BvdGlmeSBJRC5cbiAgICogU2VlIFtHZXQgQXVkaW8gRmVhdHVyZXMgZm9yIGEgVHJhY2tdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWF1ZGlvLWZlYXR1cmVzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhY2tJZCBUaGUgaWQgb2YgdGhlIHRyYWNrLiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSB0cmFjayBpZCAoZS5nLiBzcG90aWZ5OnRyYWNrOjxoZXJlX2lzX3RoZV90cmFja19pZD4pXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRBdWRpb0ZlYXR1cmVzRm9yVHJhY2sgPSBmdW5jdGlvbiAodHJhY2tJZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7fTtcbiAgICByZXF1ZXN0RGF0YS51cmwgPSBfYmFzZVVyaSArICcvYXVkaW8tZmVhdHVyZXMvJyArIHRyYWNrSWQ7XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCB7fSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYXVkaW8gZmVhdHVyZXMgZm9yIG11bHRpcGxlIHRyYWNrcyBiYXNlZCBvbiB0aGVpciBTcG90aWZ5IElEcy5cbiAgICogU2VlIFtHZXQgQXVkaW8gRmVhdHVyZXMgZm9yIFNldmVyYWwgVHJhY2tzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1zZXZlcmFsLWF1ZGlvLWZlYXR1cmVzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHRyYWNrSWRzIFRoZSBpZHMgb2YgdGhlIHRyYWNrcy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHRyYWNrIGlkIChlLmcuIHNwb3RpZnk6dHJhY2s6PGhlcmVfaXNfdGhlX3RyYWNrX2lkPilcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEF1ZGlvRmVhdHVyZXNGb3JUcmFja3MgPSBmdW5jdGlvbiAodHJhY2tJZHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvYXVkaW8tZmVhdHVyZXMnLFxuICAgICAgcGFyYW1zOiB7IGlkczogdHJhY2tJZHMgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCB7fSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYXVkaW8gYW5hbHlzaXMgZm9yIGEgc2luZ2xlIHRyYWNrIGlkZW50aWZpZWQgYnkgaXRzIHVuaXF1ZSBTcG90aWZ5IElELlxuICAgKiBTZWUgW0dldCBBdWRpbyBBbmFseXNpcyBmb3IgYSBUcmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtYXVkaW8tYW5hbHlzaXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja0lkIFRoZSBpZCBvZiB0aGUgdHJhY2suIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHRyYWNrIGlkIChlLmcuIHNwb3RpZnk6dHJhY2s6PGhlcmVfaXNfdGhlX3RyYWNrX2lkPilcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEF1ZGlvQW5hbHlzaXNGb3JUcmFjayA9IGZ1bmN0aW9uICh0cmFja0lkLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHt9O1xuICAgIHJlcXVlc3REYXRhLnVybCA9IF9iYXNlVXJpICsgJy9hdWRpby1hbmFseXNpcy8nICsgdHJhY2tJZDtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIHt9LCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHBsYXlsaXN0LXN0eWxlIGxpc3RlbmluZyBleHBlcmllbmNlIGJhc2VkIG9uIHNlZWQgYXJ0aXN0cywgdHJhY2tzIGFuZCBnZW5yZXMuXG4gICAqIFNlZSBbR2V0IFJlY29tbWVuZGF0aW9ucyBCYXNlZCBvbiBTZWVkc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtcmVjb21tZW5kYXRpb25zLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldFJlY29tbWVuZGF0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3JlY29tbWVuZGF0aW9ucydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIGxpc3Qgb2YgYXZhaWxhYmxlIGdlbnJlcyBzZWVkIHBhcmFtZXRlciB2YWx1ZXMgZm9yIHJlY29tbWVuZGF0aW9ucy5cbiAgICogU2VlIFtBdmFpbGFibGUgR2VucmUgU2VlZHNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXJlY29tbWVuZGF0aW9ucy8jYXZhaWxhYmxlLWdlbnJlLXNlZWRzKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRBdmFpbGFibGVHZW5yZVNlZWRzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcmVjb21tZW5kYXRpb25zL2F2YWlsYWJsZS1nZW5yZS1zZWVkcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwge30sIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgdXNlcuKAmXMgYXZhaWxhYmxlIGRldmljZXMuXG4gICAqIFNlZSBbR2V0IGEgVXNlcuKAmXMgQXZhaWxhYmxlIERldmljZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWEtdXNlcnMtYXZhaWxhYmxlLWRldmljZXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRNeURldmljZXMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9wbGF5ZXIvZGV2aWNlcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwge30sIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2Vy4oCZcyBjdXJyZW50IHBsYXliYWNrIHN0YXRlLCBpbmNsdWRpbmcgdHJhY2ssIHRyYWNrIHByb2dyZXNzLCBhbmQgYWN0aXZlIGRldmljZS5cbiAgICogU2VlIFtHZXQgSW5mb3JtYXRpb24gQWJvdXQgVGhlIFVzZXLigJlzIEN1cnJlbnQgUGxheWJhY2tdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWluZm9ybWF0aW9uLWFib3V0LXRoZS11c2Vycy1jdXJyZW50LXBsYXliYWNrLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWVyJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb2JqZWN0IGN1cnJlbnRseSBiZWluZyBwbGF5ZWQgb24gdGhlIHVzZXLigJlzIFNwb3RpZnkgYWNjb3VudC5cbiAgICogU2VlIFtHZXQgdGhlIFVzZXLigJlzIEN1cnJlbnRseSBQbGF5aW5nIFRyYWNrXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC10aGUtdXNlcnMtY3VycmVudGx5LXBsYXlpbmctdHJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldE15Q3VycmVudFBsYXlpbmdUcmFjayA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci9jdXJyZW50bHktcGxheWluZydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmFuc2ZlciBwbGF5YmFjayB0byBhIG5ldyBkZXZpY2UgYW5kIGRldGVybWluZSBpZiBpdCBzaG91bGQgc3RhcnQgcGxheWluZy5cbiAgICogU2VlIFtUcmFuc2ZlciBhIFVzZXLigJlzIFBsYXliYWNrXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3RyYW5zZmVyLWEtdXNlcnMtcGxheWJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZGV2aWNlSWRzIEEgSlNPTiBhcnJheSBjb250YWluaW5nIHRoZSBJRCBvZiB0aGUgZGV2aWNlIG9uIHdoaWNoIHBsYXliYWNrIHNob3VsZCBiZSBzdGFydGVkL3RyYW5zZmVycmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS50cmFuc2Zlck15UGxheWJhY2sgPSBmdW5jdGlvbiAoXG4gICAgZGV2aWNlSWRzLFxuICAgIG9wdGlvbnMsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHBvc3REYXRhID0gb3B0aW9ucyB8fCB7fTtcbiAgICBwb3N0RGF0YS5kZXZpY2VfaWRzID0gZGV2aWNlSWRzO1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWVyJyxcbiAgICAgIHBvc3REYXRhOiBwb3N0RGF0YVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBsYXkgYSB0cmFjayBvbiB0aGUgdXNlcidzIGFjdGl2ZSBkZXZpY2VcbiAgICogU2VlIFtTdGFydC9SZXN1bWUgYSBVc2VyJ3MgUGxheWJhY2tdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL2RvY3VtZW50YXRpb24vd2ViLWFwaS9yZWZlcmVuY2UvcGxheWVyL3N0YXJ0LWEtdXNlcnMtcGxheWJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcGFyYW1zID1cbiAgICAgICdkZXZpY2VfaWQnIGluIG9wdGlvbnMgPyB7IGRldmljZV9pZDogb3B0aW9ucy5kZXZpY2VfaWQgfSA6IG51bGw7XG4gICAgdmFyIHBvc3REYXRhID0ge307XG4gICAgWydjb250ZXh0X3VyaScsICd1cmlzJywgJ29mZnNldCcsICdwb3NpdGlvbl9tcyddLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICBpZiAoZmllbGQgaW4gb3B0aW9ucykge1xuICAgICAgICBwb3N0RGF0YVtmaWVsZF0gPSBvcHRpb25zW2ZpZWxkXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci9wbGF5JyxcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgcG9zdERhdGE6IHBvc3REYXRhXG4gICAgfTtcblxuICAgIC8vIG5lZWQgdG8gY2xlYXIgb3B0aW9ucyBzbyBpdCBkb2Vzbid0IGFkZCBhbGwgb2YgdGhlbSB0byB0aGUgcXVlcnkgcGFyYW1zXG4gICAgdmFyIG5ld09wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMgOiB7fTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG5ld09wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGFuIGl0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgdXNlcuKAmXMgY3VycmVudCBwbGF5YmFjayBxdWV1ZS5cbiAgICogU2VlIFtBZGQgYW4gSXRlbSB0byB0aGUgVXNlcidzIFBsYXliYWNrIFF1ZXVlXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS9kb2N1bWVudGF0aW9uL3dlYi1hcGkvcmVmZXJlbmNlL3BsYXllci9hZGQtdG8tcXVldWUvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmkgVGhlIHVyaSBvZiB0aGUgaXRlbSB0byBhZGQgdG8gdGhlIHF1ZXVlLiBNdXN0IGJlIGEgdHJhY2sgb3IgYW4gZXBpc29kZSB1cmkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnF1ZXVlID0gZnVuY3Rpb24gKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcGFyYW1zID1cbiAgICAgICdkZXZpY2VfaWQnIGluIG9wdGlvbnNcbiAgICAgICAgPyB7IHVyaTogdXJpLCBkZXZpY2VfaWQ6IG9wdGlvbnMuZGV2aWNlX2lkIH1cbiAgICAgICAgOiB7IHVyaTogdXJpIH07XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWVyL3F1ZXVlJyxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogUGF1c2UgcGxheWJhY2sgb24gdGhlIHVzZXLigJlzIGFjY291bnQuXG4gICAqIFNlZSBbUGF1c2UgYSBVc2Vy4oCZcyBQbGF5YmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9wYXVzZS1hLXVzZXJzLXBsYXliYWNrLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBwYXJhbXMgPVxuICAgICAgJ2RldmljZV9pZCcgaW4gb3B0aW9ucyA/IHsgZGV2aWNlX2lkOiBvcHRpb25zLmRldmljZV9pZCB9IDogbnVsbDtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci9wYXVzZScsXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNraXBzIHRvIG5leHQgdHJhY2sgaW4gdGhlIHVzZXLigJlzIHF1ZXVlLlxuICAgKiBTZWUgW1NraXAgVXNlcuKAmXMgUGxheWJhY2sgVG8gTmV4dCBUcmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9za2lwLXVzZXJzLXBsYXliYWNrLXRvLW5leHQtdHJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNraXBUb05leHQgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcGFyYW1zID1cbiAgICAgICdkZXZpY2VfaWQnIGluIG9wdGlvbnMgPyB7IGRldmljZV9pZDogb3B0aW9ucy5kZXZpY2VfaWQgfSA6IG51bGw7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWVyL25leHQnLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTa2lwcyB0byBwcmV2aW91cyB0cmFjayBpbiB0aGUgdXNlcuKAmXMgcXVldWUuXG4gICAqIE5vdGUgdGhhdCB0aGlzIHdpbGwgQUxXQVlTIHNraXAgdG8gdGhlIHByZXZpb3VzIHRyYWNrLCByZWdhcmRsZXNzIG9mIHRoZSBjdXJyZW50IHRyYWNr4oCZcyBwcm9ncmVzcy5cbiAgICogUmV0dXJuaW5nIHRvIHRoZSBzdGFydCBvZiB0aGUgY3VycmVudCB0cmFjayBzaG91bGQgYmUgcGVyZm9ybWVkIHVzaW5nIGAuc2VlaygpYFxuICAgKiBTZWUgW1NraXAgVXNlcuKAmXMgUGxheWJhY2sgVG8gUHJldmlvdXMgVHJhY2tdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvc2tpcC11c2Vycy1wbGF5YmFjay10by1uZXh0LXRyYWNrLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5za2lwVG9QcmV2aW91cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBwYXJhbXMgPVxuICAgICAgJ2RldmljZV9pZCcgaW4gb3B0aW9ucyA/IHsgZGV2aWNlX2lkOiBvcHRpb25zLmRldmljZV9pZCB9IDogbnVsbDtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9wbGF5ZXIvcHJldmlvdXMnLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZWVrcyB0byB0aGUgZ2l2ZW4gcG9zaXRpb24gaW4gdGhlIHVzZXLigJlzIGN1cnJlbnRseSBwbGF5aW5nIHRyYWNrLlxuICAgKiBTZWUgW1NlZWsgVG8gUG9zaXRpb24gSW4gQ3VycmVudGx5IFBsYXlpbmcgVHJhY2tdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvc2Vlay10by1wb3NpdGlvbi1pbi1jdXJyZW50bHktcGxheWluZy10cmFjay8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uX21zIFRoZSBwb3NpdGlvbiBpbiBtaWxsaXNlY29uZHMgdG8gc2VlayB0by4gTXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2VlayA9IGZ1bmN0aW9uIChwb3NpdGlvbl9tcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgcG9zaXRpb25fbXM6IHBvc2l0aW9uX21zXG4gICAgfTtcbiAgICBpZiAoJ2RldmljZV9pZCcgaW4gb3B0aW9ucykge1xuICAgICAgcGFyYW1zLmRldmljZV9pZCA9IG9wdGlvbnMuZGV2aWNlX2lkO1xuICAgIH1cbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci9zZWVrJyxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IHRoZSByZXBlYXQgbW9kZSBmb3IgdGhlIHVzZXLigJlzIHBsYXliYWNrLiBPcHRpb25zIGFyZSByZXBlYXQtdHJhY2ssIHJlcGVhdC1jb250ZXh0LCBhbmQgb2ZmLlxuICAgKiBTZWUgW1NldCBSZXBlYXQgTW9kZSBPbiBVc2Vy4oCZcyBQbGF5YmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9zZXQtcmVwZWF0LW1vZGUtb24tdXNlcnMtcGxheWJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBBIHN0cmluZyBzZXQgdG8gJ3RyYWNrJywgJ2NvbnRleHQnIG9yICdvZmYnLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5zZXRSZXBlYXQgPSBmdW5jdGlvbiAoc3RhdGUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZVxuICAgIH07XG4gICAgaWYgKCdkZXZpY2VfaWQnIGluIG9wdGlvbnMpIHtcbiAgICAgIHBhcmFtcy5kZXZpY2VfaWQgPSBvcHRpb25zLmRldmljZV9pZDtcbiAgICB9XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9wbGF5ZXIvcmVwZWF0JyxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0IHRoZSB2b2x1bWUgZm9yIHRoZSB1c2Vy4oCZcyBjdXJyZW50IHBsYXliYWNrIGRldmljZS5cbiAgICogU2VlIFtTZXQgVm9sdW1lIEZvciBVc2Vy4oCZcyBQbGF5YmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9zZXQtdm9sdW1lLWZvci11c2Vycy1wbGF5YmFjay8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZV9wZXJjZW50IFRoZSB2b2x1bWUgdG8gc2V0LiBNdXN0IGJlIGEgdmFsdWUgZnJvbSAwIHRvIDEwMCBpbmNsdXNpdmUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNldFZvbHVtZSA9IGZ1bmN0aW9uICh2b2x1bWVfcGVyY2VudCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgdm9sdW1lX3BlcmNlbnQ6IHZvbHVtZV9wZXJjZW50XG4gICAgfTtcbiAgICBpZiAoJ2RldmljZV9pZCcgaW4gb3B0aW9ucykge1xuICAgICAgcGFyYW1zLmRldmljZV9pZCA9IG9wdGlvbnMuZGV2aWNlX2lkO1xuICAgIH1cbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci92b2x1bWUnLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgc2h1ZmZsZSBvbiBvciBvZmYgZm9yIHVzZXLigJlzIHBsYXliYWNrLlxuICAgKiBTZWUgW1RvZ2dsZSBTaHVmZmxlIEZvciBVc2Vy4oCZcyBQbGF5YmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS90b2dnbGUtc2h1ZmZsZS1mb3ItdXNlcnMtcGxheWJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbH0gc3RhdGUgV2hldGhlciBvciBub3QgdG8gc2h1ZmZsZSB1c2VyJ3MgcGxheWJhY2suXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNldFNodWZmbGUgPSBmdW5jdGlvbiAoc3RhdGUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZVxuICAgIH07XG4gICAgaWYgKCdkZXZpY2VfaWQnIGluIG9wdGlvbnMpIHtcbiAgICAgIHBhcmFtcy5kZXZpY2VfaWQgPSBvcHRpb25zLmRldmljZV9pZDtcbiAgICB9XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9wbGF5ZXIvc2h1ZmZsZScsXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBzaG93IGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZy5cbiAgICogU2VlIFtHZXQgYSBTaG93XShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS9kb2N1bWVudGF0aW9uL3dlYi1hcGkvcmVmZXJlbmNlL3Nob3dzL2dldC1hLXNob3cvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzaG93SWQgVGhlIGlkIG9mIHRoZSBzaG93LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBzaG93IGlkIChlLmcuIHNwb3RpZnk6c2hvdzo8aGVyZV9pc190aGVfc2hvd19pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0U2hvdyA9IGZ1bmN0aW9uIChzaG93SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge307XG4gICAgcmVxdWVzdERhdGEudXJsID0gX2Jhc2VVcmkgKyAnL3Nob3dzLycgKyBzaG93SWQ7XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgbXVsdGlwbGUgc2hvd3MgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBTZXZlcmFsIFNob3dzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS9kb2N1bWVudGF0aW9uL3dlYi1hcGkvcmVmZXJlbmNlL3Nob3dzL2dldC1zZXZlcmFsLXNob3dzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHNob3dJZHMgVGhlIGlkcyBvZiB0aGUgc2hvd3MuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBzaG93IGlkIChlLmcuIHNwb3RpZnk6c2hvdzo8aGVyZV9pc190aGVfc2hvd19pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0U2hvd3MgPSBmdW5jdGlvbiAoc2hvd0lkcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9zaG93cy8nLFxuICAgICAgcGFyYW1zOiB7IGlkczogc2hvd0lkcy5qb2luKCcsJykgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgY3VycmVudCB1c2VyJ3Mgc2F2ZWQgc2hvd3MuXG4gICAqIFNlZSBbR2V0IEN1cnJlbnQgVXNlcidzIFNhdmVkIFNob3dzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS9kb2N1bWVudGF0aW9uL3dlYi1hcGkvcmVmZXJlbmNlL2xpYnJhcnkvZ2V0LXVzZXJzLXNhdmVkLXNob3dzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldE15U2F2ZWRTaG93cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3Nob3dzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBsaXN0IG9mIHNob3dzIHRvIHRoZSBjdXJyZW50IHVzZXIncyBzYXZlZCBzaG93cy5cbiAgICogU2VlIFtTYXZlIFNob3dzIGZvciBDdXJyZW50IFVzZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL2RvY3VtZW50YXRpb24vd2ViLWFwaS9yZWZlcmVuY2UvbGlicmFyeS9zYXZlLXNob3dzLXVzZXIvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2hvd0lkcyBUaGUgaWRzIG9mIHRoZSBzaG93cy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHNob3cgaWQgKGUuZy4gc3BvdGlmeTpzaG93OjxoZXJlX2lzX3RoZV9zaG93X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5hZGRUb015U2F2ZWRTaG93cyA9IGZ1bmN0aW9uIChzaG93SWRzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3Nob3dzJyxcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgcG9zdERhdGE6IHNob3dJZHNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBsaXN0IG9mIHNob3dzIGZyb20gdGhlIGN1cnJlbnQgdXNlcidzIHNhdmVkIHNob3dzLlxuICAgKiBTZWUgW1JlbW92ZSBTaG93cyBmb3IgQ3VycmVudCBVc2VyXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS9kb2N1bWVudGF0aW9uL3dlYi1hcGkvcmVmZXJlbmNlL2xpYnJhcnkvcmVtb3ZlLXNob3dzLXVzZXIvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2hvd0lkcyBUaGUgaWRzIG9mIHRoZSBzaG93cy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHNob3cgaWQgKGUuZy4gc3BvdGlmeTpzaG93OjxoZXJlX2lzX3RoZV9zaG93X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5yZW1vdmVGcm9tTXlTYXZlZFNob3dzID0gZnVuY3Rpb24gKFxuICAgIHNob3dJZHMsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9zaG93cycsXG4gICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgIHBvc3REYXRhOiBzaG93SWRzXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHVzZXIncyBzYXZlZCBzaG93cyBjb250YWlucyBhIGNlcnRhaW4gbGlzdCBvZiBzaG93cy5cbiAgICogU2VlIFtDaGVjayBDdXJyZW50IFVzZXIncyBTYXZlZCBTaG93c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vZG9jdW1lbnRhdGlvbi93ZWItYXBpL3JlZmVyZW5jZS9saWJyYXJ5L2NoZWNrLXVzZXJzLXNhdmVkLXNob3dzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHNob3dJZHMgVGhlIGlkcyBvZiB0aGUgc2hvd3MuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBzaG93IGlkIChlLmcuIHNwb3RpZnk6c2hvdzo8aGVyZV9pc190aGVfc2hvd19pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuY29udGFpbnNNeVNhdmVkU2hvd3MgPSBmdW5jdGlvbiAoXG4gICAgc2hvd0lkcyxcbiAgICBvcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3Nob3dzL2NvbnRhaW5zJyxcbiAgICAgIHBhcmFtczogeyBpZHM6IHNob3dJZHMuam9pbignLCcpIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBlcGlzb2RlcyBvZiBhIHNob3cgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBhIFNob3cncyBFcGlzb2Rlc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vZG9jdW1lbnRhdGlvbi93ZWItYXBpL3JlZmVyZW5jZS9zaG93cy9nZXQtc2hvd3MtZXBpc29kZXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzaG93SWQgVGhlIGlkIG9mIHRoZSBzaG93LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBzaG93IGlkIChlLmcuIHNwb3RpZnk6c2hvdzo8aGVyZV9pc190aGVfc2hvd19pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0U2hvd0VwaXNvZGVzID0gZnVuY3Rpb24gKHNob3dJZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9zaG93cy8nICsgc2hvd0lkICsgJy9lcGlzb2RlcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGFuIGVwaXNvZGUgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBhbiBFcGlzb2RlXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS9kb2N1bWVudGF0aW9uL3dlYi1hcGkvcmVmZXJlbmNlL2VwaXNvZGVzL2dldC1hbi1lcGlzb2RlLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXBpc29kZUlkIFRoZSBpZCBvZiB0aGUgZXBpc29kZS4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgZXBpc29kZSBpZCAoZS5nLiBzcG90aWZ5OmVwaXNvZGU6PGhlcmVfaXNfdGhlX2VwaXNvZGVfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEVwaXNvZGUgPSBmdW5jdGlvbiAoZXBpc29kZUlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHt9O1xuICAgIHJlcXVlc3REYXRhLnVybCA9IF9iYXNlVXJpICsgJy9lcGlzb2Rlcy8nICsgZXBpc29kZUlkO1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIG11bHRpcGxlIGVwaXNvZGVzIGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZy5cbiAgICogU2VlIFtHZXQgU2V2ZXJhbCBFcGlzb2Rlc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vZG9jdW1lbnRhdGlvbi93ZWItYXBpL3JlZmVyZW5jZS9lcGlzb2Rlcy9nZXQtc2V2ZXJhbC1lcGlzb2Rlcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBlcGlzb2RlSWRzIFRoZSBpZHMgb2YgdGhlIGVwaXNvZGVzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgZXBpc29kZSBpZCAoZS5nLiBzcG90aWZ5OmVwaXNvZGU6PGhlcmVfaXNfdGhlX2VwaXNvZGVfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEVwaXNvZGVzID0gZnVuY3Rpb24gKGVwaXNvZGVJZHMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvZXBpc29kZXMvJyxcbiAgICAgIHBhcmFtczogeyBpZHM6IGVwaXNvZGVJZHMuam9pbignLCcpIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBhY2Nlc3MgdG9rZW4gaW4gdXNlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IGFjY2Vzc1Rva2VuIFRoZSBhY2Nlc3MgdG9rZW5cbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0QWNjZXNzVG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9hY2Nlc3NUb2tlbjtcbiAgfTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgYWNjZXNzIHRva2VuIHRvIGJlIHVzZWQuXG4gICAqIFNlZSBbdGhlIEF1dGhvcml6YXRpb24gR3VpZGVdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvYXV0aG9yaXphdGlvbi1ndWlkZS8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IG9idGFpbmluZyBhbiBhY2Nlc3MgdG9rZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY2Nlc3NUb2tlbiBUaGUgYWNjZXNzIHRva2VuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNldEFjY2Vzc1Rva2VuID0gZnVuY3Rpb24gKGFjY2Vzc1Rva2VuKSB7XG4gICAgX2FjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsgdG8gYmUgdXNlZC4gRS5nLiBRLCB3aGVuLlxuICAgKiBTZWUgW0NvbmZvcm1hbnQgSW1wbGVtZW50YXRpb25zXShodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYy9ibG9iL21hc3Rlci9pbXBsZW1lbnRhdGlvbnMubWQpXG4gICAqIGZvciBhIGxpc3Qgb2Ygc29tZSBhdmFpbGFibGUgb3B0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gUHJvbWlzZUltcGxlbWVudGF0aW9uIEEgUHJvbWlzZXMvQSsgdmFsaWQgaW1wbGVtZW50YXRpb25cbiAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBpbXBsZW1lbnRhdGlvbiBiZWluZyBzZXQgZG9lc24ndCBjb25mb3JtIHdpdGggUHJvbWlzZXMvQStcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2V0UHJvbWlzZUltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gKFByb21pc2VJbXBsZW1lbnRhdGlvbikge1xuICAgIHZhciB2YWxpZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICB2YXIgcCA9IG5ldyBQcm9taXNlSW1wbGVtZW50YXRpb24oZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIHAudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBfcHJvbWlzZUltcGxlbWVudGF0aW9uID0gUHJvbWlzZUltcGxlbWVudGF0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDb25zdHI7XG59KSgpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICBtb2R1bGUuZXhwb3J0cyA9IFNwb3RpZnlXZWJBcGk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5cbi8vIFNwb3RpZnlcbmltcG9ydCBTcG90aWZ5V2ViQXBpIGZyb20gJ3Nwb3RpZnktd2ViLWFwaS1qcyc7XG5cbmxldCBzcG90aWZ5ID0gbmV3IFNwb3RpZnlXZWJBcGkoKTtcblxudmFyIGNsaWVudF9pZCA9ICc3NGFjOTQ5Y2E1ODc0MDI0ODRkY2VmMTQwOGI0ZDdmMyc7XG52YXIgY2xpZW50X3NlY3JldCA9ICczMTNhMmMxNWZjODQ0Y2E1YmMyMjc1NTU3Mjg3NGVlNyc7XG5cbi8vIHZhciBhdXRoT3B0aW9ucyA9IHtcbi8vICAgdXJsOiAnaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hcGkvdG9rZW4nLFxuLy8gICBoZWFkZXJzOiB7XG4vLyAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArIChuZXcgQnVmZmVyKGNsaWVudF9pZCArICc6JyArIGNsaWVudF9zZWNyZXQpLnRvU3RyaW5nKCdiYXNlNjQnKSlcbi8vICAgfSxcbi8vICAgZm9ybToge1xuLy8gICAgIGdyYW50X3R5cGU6ICdjbGllbnRfY3JlZGVudGlhbHMnXG4vLyAgIH0sXG4vLyAgIGpzb246IHRydWVcbi8vIH07XG5cbi8vIHJlcXVlc3QucG9zdChhdXRoT3B0aW9ucywgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4vLyAgIGlmICghZXJyb3IgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4vLyAgICAgdmFyIHRva2VuID0gYm9keS5hY2Nlc3NfdG9rZW47XG4vLyAgICAgc3BvdGlmeS5zZXRBY2Nlc3NUb2tlbih0b2tlbik7XG4vLyAgIH1cbi8vIH0pO1xuXG5zcG90aWZ5LmdldEFydGlzdEFsYnVtcygnNDNaSENUMGNBWkJJU2pPOERHOVBuRScpLnRoZW4oXG4gICAgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBcnRpc3QgYWxidW1zJywgZGF0YSk7XG4gICAgfSxcbiAgICBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICApO1xuXG4vLyBTcG90aWZ5IGFib3ZlIGhlcmVcblxubGV0IHRyYWNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhY2tzXCIpO1xuXG4vLyBMYXN0LkZNIEFQSVxuLy8gR2V0IGFsbCB0cmFja3MgZm9yIGEgc3BlY2lmaWMgZGF0ZVxuZnVuY3Rpb24gZ2V0VHJhY2tzKGRhdGUpIHtcblxuICAgIGxldCBmcm9tRGF0ZSA9IGRhdGU7XG4gICAgbGV0IHRvRGF0ZSA9IGRhdGUgKyA4NjM5OTsgLy8gMjQgaG91cnMgKC0xcykgaW4gc2Vjb25kc1xuXG4gICAgbGV0IGN1cnJlbnRQYWdlID0gMTtcbiAgICBsZXQgdG90YWxQYWdlcyA9IDI7IC8vIFBsYWNlaG9sZGVyIHZhbHVlLiBXaWxsIGJlIHJlcGxhY2Ugb24gdGhlIGZpcnN0IHdoaWxlIHJ1bi5cblxuICAgIGxldCB0cmFja3MgPSBbXTtcblxuICAgIC8vIHdoaWxlKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykge1xuXG4gICAgZmV0Y2goYGh0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wLz9tZXRob2Q9dXNlci5nZXRyZWNlbnR0cmFja3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdXNlcj1sZWdlbmRlYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZwYWdlPSR7Y3VycmVudFBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmZyb209JHtmcm9tRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdG89JHt0b0RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmxpbWl0PTIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZhcGlfa2V5PWQxZmU4MTU0ZGJiYmQyNjU2ZDk3NDg5OTJlZmZjOWNhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmZvcm1hdD1qc29uYCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGU6ICdjb3JzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgdG90YWxQYWdlcyA9IHJlc3BvbnNlLnJlY2VudHRyYWNrc1snQGF0dHInXS50b3RhbFBhZ2VzO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIHRyYWNrIGluIHRyYWNrcywgYWRkIHRoZSB0aXRsZSBhbmQgYXJ0aXN0IGFzIGFuIG9iamVjdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLnJlY2VudHRyYWNrcy50cmFjay5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICB0cmFja3MucHVzaCh7dHJhY2s6IHJlc3BvbnNlLnJlY2VudHRyYWNrcy50cmFja1tpXS5uYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGlzdDogcmVzcG9uc2UucmVjZW50dHJhY2tzLnRyYWNrW2ldLmFydGlzdFtcIiN0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codHJhY2tzW2ldKTtcblxuICAgICAgICAgICAgY29uc3QgdHJhY2tQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdHJhY2tQLnRleHRDb250ZW50ID0gdHJhY2tzW2ldLmFydGlzdCArIFwiIC0gXCIgKyB0cmFja3NbaV0udHJhY2s7XG4gICAgICAgICAgICB0cmFja3NDb250YWluZXIuYXBwZW5kQ2hpbGQodHJhY2tQKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBHZXQgYWxsIHRyYWNrcyBmb3IgZXZlcnkgaW5zdGFuY2Ugb2YgYSBkYXRlIHRocm91Z2ggdGhlIHllYXJzLCBmcm9tIHRvZGF5IGJhY2sgdG8gMjAwMFxuXG4vLyBDb252ZXJ0IGEgZGF0ZSBzdHJpbmcgdG8gVW5peCB0aW1lXG5leHBvcnQgY29uc3QgZGF0ZVRvVW5peFRpbWUgPSAoZGF0ZVN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICBjb25zdCB0aW1lSW5NcyA9IGRhdGUuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHVuaXhUaW1lc3RhbXAgPSBNYXRoLmZsb29yKHRpbWVJbk1zIC8gMTAwMCk7XG4gICAgcmV0dXJuIHVuaXhUaW1lc3RhbXA7XG59XG5cbi8vIFRha2UgYSB5ZWFyIG9mZiBhIFVuaXggZGF0ZVxuLy8gMzEsNTM2LDAwMCBzZWNvbmRzIGluIGEgeWVhclxuXG5cbmNvbnN0IGdvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nby1idXR0b25cIik7XG5cbmdvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cbiAgICAvLyBmb3IgZWFjaCB0cmFjaywgYWRkIHRoZSBuYW1lIGFzIGEgPHA+IHRvIC50cmFja3NcbiAgICBcbiAgICB0cmFja3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xuICAgIGxldCBkYXRlUGlja2VkID0gbmV3IERhdGUoZGF0ZVBpY2tlci52YWx1ZSk7XG5cbiAgICBsZXQgdW5peERhdGUgPSBkYXRlVG9Vbml4VGltZShkYXRlUGlja2VkKTtcblxuICAgIGdldFRyYWNrcyh1bml4RGF0ZSk7XG59KTtcblxuXG5cbi8vIE9LQVkhIFNvIG5vIG1vcmUgU3BvdGlmeSBBUEkuIExlYXJuIHdlYiBzY3JhcGluZyBhbmQgZ2V0IHRoZSBzcG90aWZ5IHVybCBmcm9tIHRoaXM6XG5cbi8vIDxhIGNsYXNzPVwiXG4vLyBoaWRkZW4teHMgcGxheS10aGlzLXRyYWNrLXBsYXlsaW5rIHBsYXktdGhpcy10cmFjay1wbGF5bGluay0tc3BvdGlmeVxuICAgICAgICBcbi8vIGpzLXBsYXlsaW5rXG5cbi8vIGhyZWY9XCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNDJZNnAwS2Mzc3V5Z05Cd1drbHYyVFwiIFxuLy8gICB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLXBsYXlsaW5rLWFmZmlsaWF0ZT1cInNwb3RpZnlcIiBkYXRhLXNwb3RpZnktaWQ9XCI0Mlk2cDBLYzNzdXlnTkJ3V2tsdjJUXCIgXG4vLyAgIGRhdGEtc3BvdGlmeS11cmw9XCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNDJZNnAwS2Mzc3V5Z05Cd1drbHYyVFwiIGRhdGEtdHJhY2stbmFtZT1cIkJhYnkgQ3JpbWluYWxcIiBcbi8vICAgZGF0YS10cmFjay11cmw9XCIvbXVzaWMvVmlhZ3JhK0JveXMvXy9CYWJ5K0NyaW1pbmFsXCIgXG4vLyAgIGRhdGEtYXJ0aXN0LW5hbWU9XCJWaWFncmEgQm95c1wiIGRhdGEtYXJ0aXN0LXVybD1cIi9tdXNpYy9WaWFncmErQm95c1wiIFxuLy8gICB0aXRsZT1cIlBsYXkgb24gU3BvdGlmeVwiIGRhdGEtc2luZ2xlLXRyYWNrPVwiXCIgZGF0YS1hbmFseXRpY3MtYWN0aW9uPVwiUGxheVRyYWNrT25QYWdlXCIgXG4vLyAgIGRhdGEtYW5hbHl0aWNzLWxhYmVsPVwic3BvdGlmeVwiPlxuLy8gU3BvdGlmeVxuLy8gPC9hPlxuXG4vLyBCVVQgbm90IGV2ZXJ5dGhpbmcgaGFzIHRoZSBsaW5rLCBzbyBzaG93IGluIHRoZSBHVUkgd2hhdCBpcyBsaW5rZWQgaW4gdGhlIGNvcHlwYXN0YSBhbmQgd2hhdCBpc24ndCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==