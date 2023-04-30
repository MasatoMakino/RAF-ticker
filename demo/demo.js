(()=>{"use strict";var __webpack_modules__={318:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// UNUSED EXPORTS: Demo\n\n// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js\nvar eventemitter3 = __webpack_require__(34);\nvar eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);\n;// CONCATENATED MODULE: ./esm/RAFTickerEvent.js\nclass RAFTickerEventContext {\n  constructor(timestamp, delta) {\n    this.timestamp = timestamp;\n    this.delta = delta;\n  }\n}\n;// CONCATENATED MODULE: ./esm/RAFTicker.js\nvar _a;\n\n\nclass RAFTicker {\n  static initialize() {\n    if (this._dispatcher == null) {\n      this._dispatcher = new (eventemitter3_default())();\n    }\n    this.start();\n  }\n  static reset() {\n    this._dispatcher.removeAllListeners();\n    this.stop();\n    this.start();\n  }\n  static start() {\n    if (!RAFTicker._id) {\n      this._lastUpdateTimestamp = undefined;\n      RAFTicker.onTick(performance.now());\n    }\n  }\n  static stop() {\n    cancelAnimationFrame(RAFTicker._id);\n    this._id = undefined;\n    this._lastUpdateTimestamp = undefined;\n  }\n  static addListener(type, listener) {\n    this._dispatcher.on(type, listener);\n  }\n  /**\n   *\n   * @param type\n   * @param listener\n   */\n  static hasListener(type, listener) {\n    const listeners = this._dispatcher.listeners(type);\n    return listeners.includes(listener);\n  }\n  /**\n   * Removes the specified listener\n   *\n   * @param type\n   * @param listener\n   */\n  static removeListener(type, listener) {\n    this._dispatcher.removeListener(type, listener);\n  }\n  /**\n   * イベントを発効する。\n   * この関数はアプリケーションから利用することはなく、主に単体テストのために使用する。\n   *\n   * @param type\n   * @param event\n   */\n  static emit(type, event) {\n    this._dispatcher.emit(type, event);\n  }\n  static emitTickEvent(timestamp) {\n    if (RAFTicker._lastUpdateTimestamp == null) {\n      RAFTicker._lastUpdateTimestamp = timestamp;\n    }\n    const delta = timestamp - RAFTicker._lastUpdateTimestamp;\n    this._dispatcher.emit("onBeforeTick", new RAFTickerEventContext(timestamp, delta));\n    this._dispatcher.emit("tick", new RAFTickerEventContext(timestamp, delta));\n    this._dispatcher.emit("onAfterTick", new RAFTickerEventContext(timestamp, delta));\n    RAFTicker._lastUpdateTimestamp = timestamp;\n  }\n}\n_a = RAFTicker;\n/**\n * Alias for addListener\n *\n * @param type\n * @param listener\n */\nRAFTicker.on = RAFTicker.addListener;\n/**\n * Alias for removeListener\n *\n * @param type\n * @param listener\n */\nRAFTicker.off = RAFTicker.removeListener;\nRAFTicker.onTick = timestamp => {\n  _a.emitTickEvent(timestamp);\n  RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);\n};\n\nRAFTicker.initialize();\n;// CONCATENATED MODULE: ./esm/index.js\n\n\n;// CONCATENATED MODULE: ./demoSrc/demo.js\n\nclass Demo {\n  constructor() {\n    const types = ["onBeforeTick", "tick", "onAfterTick"];\n    types.forEach(type => {\n      RAFTicker.on(type, e => {\n        consoleEvent(type, e);\n      });\n    });\n  }\n}\nconst consoleEvent = (type, e) => {\n  console.log(`${type} : ${e.delta}, ${e.timestamp}`);\n};\nwindow.onload = () => {\n  const demo = new Demo();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxxQkFBcUIsQ0FBQztFQUMvQkMsV0FBV0EsQ0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEVBQUU7SUFDMUIsSUFBSSxDQUFDRCxTQUFTLEdBQUdBLFNBQVM7SUFDMUIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7RUFDdEI7QUFDSixDOztBQ0xBLElBQUlDLEVBQUU7QUFDbUM7QUFDZ0I7QUFDekQsTUFBTUUsU0FBUyxDQUFDO0VBQ1osT0FBT0MsVUFBVUEsQ0FBQSxFQUFHO0lBQ2hCLElBQUksSUFBSSxDQUFDQyxXQUFXLElBQUksSUFBSSxFQUFFO01BQzFCLElBQUksQ0FBQ0EsV0FBVyxHQUFHLElBQUlILHlCQUFZLENBQUMsQ0FBQztJQUN6QztJQUNBLElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUM7RUFDaEI7RUFDQSxPQUFPQyxLQUFLQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNGLFdBQVcsQ0FBQ0csa0JBQWtCLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQ1gsSUFBSSxDQUFDSCxLQUFLLENBQUMsQ0FBQztFQUNoQjtFQUNBLE9BQU9BLEtBQUtBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ0gsU0FBUyxDQUFDTyxHQUFHLEVBQUU7TUFDaEIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0MsU0FBUztNQUNyQ1QsU0FBUyxDQUFDVSxNQUFNLENBQUNDLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QztFQUNKO0VBQ0EsT0FBT04sSUFBSUEsQ0FBQSxFQUFHO0lBQ1ZPLG9CQUFvQixDQUFDYixTQUFTLENBQUNPLEdBQUcsQ0FBQztJQUNuQyxJQUFJLENBQUNBLEdBQUcsR0FBR0UsU0FBUztJQUNwQixJQUFJLENBQUNELG9CQUFvQixHQUFHQyxTQUFTO0VBQ3pDO0VBQ0EsT0FBT0ssV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUU7SUFDL0IsSUFBSSxDQUFDZCxXQUFXLENBQUNlLEVBQUUsQ0FBQ0YsSUFBSSxFQUFFQyxRQUFRLENBQUM7RUFDdkM7RUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksT0FBT0UsV0FBV0EsQ0FBQ0gsSUFBSSxFQUFFQyxRQUFRLEVBQUU7SUFDL0IsTUFBTUcsU0FBUyxHQUFHLElBQUksQ0FBQ2pCLFdBQVcsQ0FBQ2lCLFNBQVMsQ0FBQ0osSUFBSSxDQUFDO0lBQ2xELE9BQU9JLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDSixRQUFRLENBQUM7RUFDdkM7RUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxPQUFPSyxjQUFjQSxDQUFDTixJQUFJLEVBQUVDLFFBQVEsRUFBRTtJQUNsQyxJQUFJLENBQUNkLFdBQVcsQ0FBQ21CLGNBQWMsQ0FBQ04sSUFBSSxFQUFFQyxRQUFRLENBQUM7RUFDbkQ7RUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJLE9BQU9NLElBQUlBLENBQUNQLElBQUksRUFBRVEsS0FBSyxFQUFFO0lBQ3JCLElBQUksQ0FBQ3JCLFdBQVcsQ0FBQ29CLElBQUksQ0FBQ1AsSUFBSSxFQUFFUSxLQUFLLENBQUM7RUFDdEM7RUFDQSxPQUFPQyxhQUFhQSxDQUFDNUIsU0FBUyxFQUFFO0lBQzVCLElBQUlJLFNBQVMsQ0FBQ1Esb0JBQW9CLElBQUksSUFBSSxFQUFFO01BQ3hDUixTQUFTLENBQUNRLG9CQUFvQixHQUFHWixTQUFTO0lBQzlDO0lBQ0EsTUFBTUMsS0FBSyxHQUFHRCxTQUFTLEdBQUdJLFNBQVMsQ0FBQ1Esb0JBQW9CO0lBQ3hELElBQUksQ0FBQ04sV0FBVyxDQUFDb0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJNUIscUJBQXFCLENBQUNFLFNBQVMsRUFBRUMsS0FBSyxDQUFDLENBQUM7SUFDbEYsSUFBSSxDQUFDSyxXQUFXLENBQUNvQixJQUFJLENBQUMsTUFBTSxFQUFFLElBQUk1QixxQkFBcUIsQ0FBQ0UsU0FBUyxFQUFFQyxLQUFLLENBQUMsQ0FBQztJQUMxRSxJQUFJLENBQUNLLFdBQVcsQ0FBQ29CLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSTVCLHFCQUFxQixDQUFDRSxTQUFTLEVBQUVDLEtBQUssQ0FBQyxDQUFDO0lBQ2pGRyxTQUFTLENBQUNRLG9CQUFvQixHQUFHWixTQUFTO0VBQzlDO0FBQ0o7QUFDQUUsRUFBRSxHQUFHRSxTQUFTO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLFNBQVMsQ0FBQ2lCLEVBQUUsR0FBR2pCLFNBQVMsQ0FBQ2MsV0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWQsU0FBUyxDQUFDeUIsR0FBRyxHQUFHekIsU0FBUyxDQUFDcUIsY0FBYztBQUN4Q3JCLFNBQVMsQ0FBQ1UsTUFBTSxHQUFJZCxTQUFTLElBQUs7RUFDOUJFLEVBQUUsQ0FBQzBCLGFBQWEsQ0FBQzVCLFNBQVMsQ0FBQztFQUMzQkksU0FBUyxDQUFDTyxHQUFHLEdBQUdtQixxQkFBcUIsQ0FBQzFCLFNBQVMsQ0FBQ1UsTUFBTSxDQUFDO0FBQzNELENBQUM7QUFDb0I7QUFDckJWLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsQzs7QUN4Rk07OztBQ0FHO0FBRXhCLE1BQU0wQixJQUFJLENBQUM7RUFDaEJoQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixNQUFNaUMsS0FBSyxHQUFHLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUM7SUFDckRBLEtBQUssQ0FBQ0MsT0FBTyxDQUFFZCxJQUFJLElBQUs7TUFDdEJmLFlBQVksQ0FBQ2UsSUFBSSxFQUFHZSxDQUFDLElBQUs7UUFDeEJDLFlBQVksQ0FBQ2hCLElBQUksRUFBRWUsQ0FBQyxDQUFDO01BQ3ZCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxNQUFNQyxZQUFZLEdBQUdBLENBQUNoQixJQUFJLEVBQUVlLENBQUMsS0FBSztFQUNoQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUUsR0FBRWxCLElBQUssTUFBS2UsQ0FBQyxDQUFDakMsS0FBTSxLQUFJaUMsQ0FBQyxDQUFDbEMsU0FBVSxFQUFDLENBQUM7QUFDckQsQ0FBQztBQUVEc0MsTUFBTSxDQUFDQyxNQUFNLEdBQUcsTUFBTTtFQUNwQixNQUFNQyxJQUFJLEdBQUcsSUFBSVQsSUFBSSxDQUFDLENBQUM7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BtYXNhdG9tYWtpbm8vcmFmLXRpY2tlci8uL2VzbS9SQUZUaWNrZXJFdmVudC5qcz82ZDY0Iiwid2VicGFjazovL0BtYXNhdG9tYWtpbm8vcmFmLXRpY2tlci8uL2VzbS9SQUZUaWNrZXIuanM/NDc5ZCIsIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3JhZi10aWNrZXIvLi9lc20vaW5kZXguanM/YjIzOSIsIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3JhZi10aWNrZXIvLi9kZW1vU3JjL2RlbW8uanM/Mzk5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUkFGVGlja2VyRXZlbnRDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aW1lc3RhbXAsIGRlbHRhKSB7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgICB0aGlzLmRlbHRhID0gZGVsdGE7XG4gICAgfVxufVxuIiwidmFyIF9hO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRlbWl0dGVyM1wiO1xuaW1wb3J0IHsgUkFGVGlja2VyRXZlbnRDb250ZXh0IH0gZnJvbSBcIi4vUkFGVGlja2VyRXZlbnRcIjtcbmNsYXNzIFJBRlRpY2tlciB7XG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaXNwYXRjaGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgICBzdGF0aWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuICAgIHN0YXRpYyBzdGFydCgpIHtcbiAgICAgICAgaWYgKCFSQUZUaWNrZXIuX2lkKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVGltZXN0YW1wID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgUkFGVGlja2VyLm9uVGljayhwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHN0b3AoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKFJBRlRpY2tlci5faWQpO1xuICAgICAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZVRpbWVzdGFtcCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc3RhdGljIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIub24odHlwZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICovXG4gICAgc3RhdGljIGhhc0xpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2Rpc3BhdGNoZXIubGlzdGVuZXJzKHR5cGUpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXJzLmluY2x1ZGVzKGxpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIGxpc3RlbmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog44Kk44OZ44Oz44OI44KS55m65Yq544GZ44KL44CCXG4gICAgICog44GT44Gu6Zai5pWw44Gv44Ki44OX44Oq44Kx44O844K344On44Oz44GL44KJ5Yip55So44GZ44KL44GT44Go44Gv44Gq44GP44CB5Li744Gr5Y2Y5L2T44OG44K544OI44Gu44Gf44KB44Gr5L2/55So44GZ44KL44CCXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIHN0YXRpYyBlbWl0KHR5cGUsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuZW1pdCh0eXBlLCBldmVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBlbWl0VGlja0V2ZW50KHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoUkFGVGlja2VyLl9sYXN0VXBkYXRlVGltZXN0YW1wID09IG51bGwpIHtcbiAgICAgICAgICAgIFJBRlRpY2tlci5fbGFzdFVwZGF0ZVRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWx0YSA9IHRpbWVzdGFtcCAtIFJBRlRpY2tlci5fbGFzdFVwZGF0ZVRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hlci5lbWl0KFwib25CZWZvcmVUaWNrXCIsIG5ldyBSQUZUaWNrZXJFdmVudENvbnRleHQodGltZXN0YW1wLCBkZWx0YSkpO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLmVtaXQoXCJ0aWNrXCIsIG5ldyBSQUZUaWNrZXJFdmVudENvbnRleHQodGltZXN0YW1wLCBkZWx0YSkpO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLmVtaXQoXCJvbkFmdGVyVGlja1wiLCBuZXcgUkFGVGlja2VyRXZlbnRDb250ZXh0KHRpbWVzdGFtcCwgZGVsdGEpKTtcbiAgICAgICAgUkFGVGlja2VyLl9sYXN0VXBkYXRlVGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgIH1cbn1cbl9hID0gUkFGVGlja2VyO1xuLyoqXG4gKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcbiAqXG4gKiBAcGFyYW0gdHlwZVxuICogQHBhcmFtIGxpc3RlbmVyXG4gKi9cblJBRlRpY2tlci5vbiA9IFJBRlRpY2tlci5hZGRMaXN0ZW5lcjtcbi8qKlxuICogQWxpYXMgZm9yIHJlbW92ZUxpc3RlbmVyXG4gKlxuICogQHBhcmFtIHR5cGVcbiAqIEBwYXJhbSBsaXN0ZW5lclxuICovXG5SQUZUaWNrZXIub2ZmID0gUkFGVGlja2VyLnJlbW92ZUxpc3RlbmVyO1xuUkFGVGlja2VyLm9uVGljayA9ICh0aW1lc3RhbXApID0+IHtcbiAgICBfYS5lbWl0VGlja0V2ZW50KHRpbWVzdGFtcCk7XG4gICAgUkFGVGlja2VyLl9pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShSQUZUaWNrZXIub25UaWNrKTtcbn07XG5leHBvcnQgeyBSQUZUaWNrZXIgfTtcblJBRlRpY2tlci5pbml0aWFsaXplKCk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9SQUZUaWNrZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1JBRlRpY2tlckV2ZW50XCI7XG4iLCJpbXBvcnQgeyBSQUZUaWNrZXIgfSBmcm9tIFwiLi5cIjtcblxuZXhwb3J0IGNsYXNzIERlbW8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtcIm9uQmVmb3JlVGlja1wiLCBcInRpY2tcIiwgXCJvbkFmdGVyVGlja1wiXTtcbiAgICB0eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICBSQUZUaWNrZXIub24odHlwZSwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZUV2ZW50KHR5cGUsIGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgY29uc29sZUV2ZW50ID0gKHR5cGUsIGUpID0+IHtcbiAgY29uc29sZS5sb2coYCR7dHlwZX0gOiAke2UuZGVsdGF9LCAke2UudGltZXN0YW1wfWApO1xufTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgZGVtbyA9IG5ldyBEZW1vKCk7XG59O1xuIl0sIm5hbWVzIjpbIlJBRlRpY2tlckV2ZW50Q29udGV4dCIsImNvbnN0cnVjdG9yIiwidGltZXN0YW1wIiwiZGVsdGEiLCJfYSIsIkV2ZW50RW1pdHRlciIsIlJBRlRpY2tlciIsImluaXRpYWxpemUiLCJfZGlzcGF0Y2hlciIsInN0YXJ0IiwicmVzZXQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJzdG9wIiwiX2lkIiwiX2xhc3RVcGRhdGVUaW1lc3RhbXAiLCJ1bmRlZmluZWQiLCJvblRpY2siLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYWRkTGlzdGVuZXIiLCJ0eXBlIiwibGlzdGVuZXIiLCJvbiIsImhhc0xpc3RlbmVyIiwibGlzdGVuZXJzIiwiaW5jbHVkZXMiLCJyZW1vdmVMaXN0ZW5lciIsImVtaXQiLCJldmVudCIsImVtaXRUaWNrRXZlbnQiLCJvZmYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJEZW1vIiwidHlwZXMiLCJmb3JFYWNoIiwiZSIsImNvbnNvbGVFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJvbmxvYWQiLCJkZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///318\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var F=__webpack_module_cache__[Q];if(void 0!==F)return F.exports;var U=__webpack_module_cache__[Q]={exports:{}};return __webpack_modules__[Q](U,U.exports,__webpack_require__),U.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,F,U,e)=>{if(!F){var B=1/0;for(I=0;I<deferred.length;I++){for(var[F,U,e]=deferred[I],t=!0,i=0;i<F.length;i++)(!1&e||B>=e)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](F[i])))?F.splice(i--,1):(t=!1,e<B&&(B=e));if(t){deferred.splice(I--,1);var s=U();void 0!==s&&(Q=s)}}return Q}e=e||0;for(var I=deferred.length;I>0&&deferred[I-1][2]>e;I--)deferred[I]=deferred[I-1];deferred[I]=[F,U,e]},__webpack_require__.n=Q=>{var F=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(F,{a:F}),F},__webpack_require__.d=(Q,F)=>{for(var U in F)__webpack_require__.o(F,U)&&!__webpack_require__.o(Q,U)&&Object.defineProperty(Q,U,{enumerable:!0,get:F[U]})},__webpack_require__.o=(Q,F)=>Object.prototype.hasOwnProperty.call(Q,F),(()=>{var Q={577:0};__webpack_require__.O.j=F=>0===Q[F];var F=(F,U)=>{var e,B,[t,i,s]=U,I=0;if(t.some((F=>0!==Q[F]))){for(e in i)__webpack_require__.o(i,e)&&(__webpack_require__.m[e]=i[e]);if(s)var l=s(__webpack_require__)}for(F&&F(U);I<t.length;I++)B=t[I],__webpack_require__.o(Q,B)&&Q[B]&&Q[B][0](),Q[B]=0;return __webpack_require__.O(l)},U=self.webpackChunk_masatomakino_raf_ticker=self.webpackChunk_masatomakino_raf_ticker||[];U.forEach(F.bind(null,0)),U.push=F.bind(null,U.push.bind(U))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(318)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();