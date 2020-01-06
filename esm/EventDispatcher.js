/**
 * Based on mrdoob/eventdispatcher.js
 * https://github.com/mrdoob/eventdispatcher.js
 * Copyright（c）mrdoob / http://mrdoob.com/
 * Licensed under MIT ( https://github.com/mrdoob/eventdispatcher.js/blob/master/LICENSE )
 */
export class EventDispatcher {
  addEventListener(type, listener) {
    if (this._listeners === undefined) this._listeners = {};
    const listeners = this._listeners;
    if (listeners[type] === undefined) {
      listeners[type] = [];
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  }
  hasEventListener(type, listener) {
    if (this._listeners === undefined) return false;
    const listeners = this._listeners;
    return (
      listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1
    );
  }
  removeEventListener(type, listener) {
    if (this._listeners === undefined) return;
    const listeners = this._listeners;
    const listenerArray = listeners[type];
    if (listenerArray !== undefined) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  }
  dispatchEvent(event) {
    if (this._listeners === undefined) return;
    const listeners = this._listeners;
    const listenerArray = listeners[event.type];
    if (listenerArray !== undefined) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (var i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
    }
  }
}
