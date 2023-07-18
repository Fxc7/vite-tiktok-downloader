function he(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Be } = Object.prototype, { getPrototypeOf: Z } = Object, H = ((e) => (t) => {
  const n = Be.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), O = (e) => (e = e.toLowerCase(), (t) => H(t) === e), M = (e) => (t) => typeof t === e, { isArray: P } = Array, F = M("undefined");
function Le(e) {
  return e !== null && !F(e) && e.constructor !== null && !F(e.constructor) && b(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const me = O("ArrayBuffer");
function Ue(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && me(e.buffer), t;
}
const je = M("string"), b = M("function"), ye = M("number"), q = (e) => e !== null && typeof e == "object", Ie = (e) => e === !0 || e === !1, B = (e) => {
  if (H(e) !== "object")
    return !1;
  const t = Z(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, He = O("Date"), Me = O("File"), qe = O("Blob"), $e = O("FileList"), ze = (e) => q(e) && b(e.pipe), Je = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || b(e.append) && ((t = H(e)) === "formdata" || // detect form-data instance
  t === "object" && b(e.toString) && e.toString() === "[object FormData]"));
}, Ve = O("URLSearchParams"), We = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function k(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), P(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let u;
    for (r = 0; r < i; r++)
      u = o[r], t.call(null, e[u], u, e);
  }
}
function we(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ee = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), be = (e) => !F(e) && e !== Ee;
function G() {
  const { caseless: e } = be(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && we(t, s) || s;
    B(t[o]) && B(r) ? t[o] = G(t[o], r) : B(r) ? t[o] = G({}, r) : P(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && k(arguments[r], n);
  return t;
}
const Ke = (e, t, n, { allOwnKeys: r } = {}) => (k(t, (s, o) => {
  n && b(s) ? e[o] = he(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), ve = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ge = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Xe = (e, t, n, r) => {
  let s, o, i;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
    e = n !== !1 && Z(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Qe = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ye = (e) => {
  if (!e)
    return null;
  if (P(e))
    return e;
  let t = e.length;
  if (!ye(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ze = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Z(Uint8Array)), et = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, tt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, nt = O("HTMLFormElement"), rt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), se = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), st = O("RegExp"), Se = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  k(n, (s, o) => {
    t(s, o, e) !== !1 && (r[o] = s);
  }), Object.defineProperties(e, r);
}, ot = (e) => {
  Se(e, (t, n) => {
    if (b(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (b(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, it = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return P(e) ? r(e) : r(String(e).split(t)), n;
}, at = () => {
}, ct = (e, t) => (e = +e, Number.isFinite(e) ? e : t), V = "abcdefghijklmnopqrstuvwxyz", oe = "0123456789", Re = {
  DIGIT: oe,
  ALPHA: V,
  ALPHA_DIGIT: V + V.toUpperCase() + oe
}, ut = (e = 16, t = Re.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function lt(e) {
  return !!(e && b(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ft = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (q(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = P(r) ? [] : {};
        return k(r, (i, u) => {
          const d = n(i, s + 1);
          !F(d) && (o[u] = d);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, dt = O("AsyncFunction"), pt = (e) => e && (q(e) || b(e)) && b(e.then) && b(e.catch), a = {
  isArray: P,
  isArrayBuffer: me,
  isBuffer: Le,
  isFormData: Je,
  isArrayBufferView: Ue,
  isString: je,
  isNumber: ye,
  isBoolean: Ie,
  isObject: q,
  isPlainObject: B,
  isUndefined: F,
  isDate: He,
  isFile: Me,
  isBlob: qe,
  isRegExp: st,
  isFunction: b,
  isStream: ze,
  isURLSearchParams: Ve,
  isTypedArray: Ze,
  isFileList: $e,
  forEach: k,
  merge: G,
  extend: Ke,
  trim: We,
  stripBOM: ve,
  inherits: Ge,
  toFlatObject: Xe,
  kindOf: H,
  kindOfTest: O,
  endsWith: Qe,
  toArray: Ye,
  forEachEntry: et,
  matchAll: tt,
  isHTMLForm: nt,
  hasOwnProperty: se,
  hasOwnProp: se,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Se,
  freezeMethods: ot,
  toObjectSet: it,
  toCamelCase: rt,
  noop: at,
  toFiniteNumber: ct,
  findKey: we,
  global: Ee,
  isContextDefined: be,
  ALPHABET: Re,
  generateString: ut,
  isSpecCompliantForm: lt,
  toJSONObject: ft,
  isAsyncFn: dt,
  isThenable: pt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Oe = m.prototype, Ae = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ae[e] = { value: e };
});
Object.defineProperties(m, Ae);
Object.defineProperty(Oe, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(Oe);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (u) => u !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const ht = null;
function X(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Te(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ie(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Te(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function mt(e) {
  return a.isArray(e) && !e.some(X);
}
const yt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, A) {
    return !a.isUndefined(A[h]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!d && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, h, A) {
    let S = f;
    if (f && !A && typeof f == "object") {
      if (a.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && mt(f) || (a.isFileList(f) || a.endsWith(h, "[]")) && (S = a.toArray(f)))
        return h = Te(h), S.forEach(function(_, _e) {
          !(a.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ie([h], _e, o) : i === null ? h : h + "[]",
            c(_)
          );
        }), !1;
    }
    return X(f) ? !0 : (t.append(ie(A, h, o), c(f)), !1);
  }
  const p = [], E = Object.assign(yt, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: X
  });
  function y(f, h) {
    if (!a.isUndefined(f)) {
      if (p.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(f), a.forEach(f, function(S, x) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(x) ? x.trim() : x,
          h,
          E
        )) === !0 && y(S, h ? h.concat(x) : [x]);
      }), p.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function ae(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ee(e, t) {
  this._pairs = [], e && $(e, this, t);
}
const ge = ee.prototype;
ge.append = function(t, n) {
  this._pairs.push([t, n]);
};
ge.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ae);
  } : ae;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function wt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xe(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || wt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ee(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Et {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ce = Et, Ne = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, bt = typeof URLSearchParams < "u" ? URLSearchParams : ee, St = typeof FormData < "u" ? FormData : null, Rt = typeof Blob < "u" ? Blob : null, Ot = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), At = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), R = {
  isBrowser: !0,
  classes: {
    URLSearchParams: bt,
    FormData: St,
    Blob: Rt
  },
  isStandardBrowserEnv: Ot,
  isStandardBrowserWebWorkerEnv: At,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Tt(e, t) {
  return $(e, new R.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return R.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function gt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Pe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const u = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !u) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = xt(s[i])), !u);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(gt(r), s, n, 0);
    }), n;
  }
  return null;
}
const Nt = {
  "Content-Type": void 0
};
function Pt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const z = {
  transitional: Ne,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(Pe(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tt(t, this.formSerializer).toString();
      if ((u = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return $(
          u ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Pt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || z.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (i)
          throw u.name === "SyntaxError" ? m.from(u, m.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: R.classes.FormData,
    Blob: R.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
a.forEach(["delete", "get", "head"], function(t) {
  z.headers[t] = {};
});
a.forEach(["post", "put", "patch"], function(t) {
  z.headers[t] = a.merge(Nt);
});
const te = z, Ct = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ft = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Ct[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ue = Symbol("internals");
function C(e) {
  return e && String(e).trim().toLowerCase();
}
function L(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(L) : String(e);
}
function kt(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Dt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function W(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function _t(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Bt(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class J {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(u, d, c) {
      const l = C(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = a.findKey(s, l);
      (!p || s[p] === void 0 || c === !0 || c === void 0 && s[p] !== !1) && (s[p || d] = L(u));
    }
    const i = (u, d) => a.forEach(u, (c, l) => o(c, l, d));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !Dt(t) ? i(Ft(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = C(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return kt(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = C(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || W(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = C(i), i) {
        const u = a.findKey(r, i);
        u && (!n || W(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || W(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = L(s), delete n[o];
        return;
      }
      const u = t ? _t(o) : String(o).trim();
      u !== o && delete n[o], n[u] = L(s), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[ue] = this[ue] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const u = C(i);
      r[u] || (Bt(s, i), r[u] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
J.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.freezeMethods(J.prototype);
a.freezeMethods(J);
const T = J;
function K(e, t) {
  const n = this || te, r = t || n, s = T.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(u) {
    o = u.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ce(e) {
  return !!(e && e.__CANCEL__);
}
function D(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(D, m, {
  __CANCEL__: !0
});
function Lt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ut = R.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, i, u) {
        const d = [];
        d.push(n + "=" + encodeURIComponent(r)), a.isNumber(s) && d.push("expires=" + new Date(s).toGMTString()), a.isString(o) && d.push("path=" + o), a.isString(i) && d.push("domain=" + i), u === !0 && d.push("secure"), document.cookie = d.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function jt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function It(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Fe(e, t) {
  return e && !jt(t) ? It(e, t) : t;
}
const Ht = R.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const u = a.isString(i) ? s(i) : i;
      return u.protocol === r.protocol && u.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Mt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qt(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const c = Date.now(), l = r[o];
    i || (i = c), n[s] = d, r[s] = c;
    let p = o, E = 0;
    for (; p !== s; )
      E += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const y = l && c - l;
    return y ? Math.round(E * 1e3 / y) : void 0;
  };
}
function le(e, t) {
  let n = 0;
  const r = qt(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, u = o - n, d = r(u), c = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: d || void 0,
      estimated: d && i && c ? (i - o) / d : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const $t = typeof XMLHttpRequest < "u", zt = $t && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = T.from(e.headers).normalize(), i = e.responseType;
    let u;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    a.isFormData(s) && (R.isStandardBrowserEnv || R.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
    let c = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(y + ":" + f));
    }
    const l = Fe(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), xe(l, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function p() {
      if (!c)
        return;
      const y = T.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), h = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: y,
        config: e,
        request: c
      };
      Lt(function(S) {
        n(S), d();
      }, function(S) {
        r(S), d();
      }, h), c = null;
    }
    if ("onloadend" in c ? c.onloadend = p : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, c.onabort = function() {
      c && (r(new m("Request aborted", m.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || Ne;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), r(new m(
        f,
        h.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        c
      )), c = null;
    }, R.isStandardBrowserEnv) {
      const y = (e.withCredentials || Ht(l)) && e.xsrfCookieName && Ut.read(e.xsrfCookieName);
      y && o.set(e.xsrfHeaderName, y);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && a.forEach(o.toJSON(), function(f, h) {
      c.setRequestHeader(h, f);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", le(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", le(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (y) => {
      c && (r(!y || y.type ? new D(null, e, c) : y), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const E = Mt(l);
    if (E && R.protocols.indexOf(E) === -1) {
      r(new m("Unsupported protocol " + E + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, U = {
  http: ht,
  xhr: zt
};
a.forEach(U, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Jt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let s = 0; s < t && (n = e[s], !(r = a.isString(n) ? U[n.toLowerCase()] : n)); s++)
      ;
    if (!r)
      throw r === !1 ? new m(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        a.hasOwnProp(U, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!a.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: U
};
function v(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new D(null, e);
}
function fe(e) {
  return v(e), e.headers = T.from(e.headers), e.data = K.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Jt.getAdapter(e.adapter || te.adapter)(e).then(function(r) {
    return v(e), r.data = K.call(
      e,
      e.transformResponse,
      r
    ), r.headers = T.from(r.headers), r;
  }, function(r) {
    return Ce(r) || (v(e), r && r.response && (r.response.data = K.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = T.from(r.response.headers))), Promise.reject(r);
  });
}
const de = (e) => e instanceof T ? e.toJSON() : e;
function N(e, t) {
  t = t || {};
  const n = {};
  function r(c, l, p) {
    return a.isPlainObject(c) && a.isPlainObject(l) ? a.merge.call({ caseless: p }, c, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(c, l, p) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(c))
        return r(void 0, c, p);
    } else
      return r(c, l, p);
  }
  function o(c, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(c, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, l);
  }
  function u(c, l, p) {
    if (p in t)
      return r(c, l);
    if (p in e)
      return r(void 0, c);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (c, l) => s(de(c), de(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const p = d[l] || s, E = p(e[l], t[l], l);
    a.isUndefined(E) && p !== u || (n[l] = E);
  }), n;
}
const ke = "1.4.0", ne = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ne[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const pe = {};
ne.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + ke + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, u) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !pe[i] && (pe[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, u) : !0;
  };
};
function Vt(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const u = e[o], d = u === void 0 || i(u, o, e);
      if (d !== !0)
        throw new m("option " + o + " must be " + d, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const Q = {
  assertOptions: Vt,
  validators: ne
}, g = Q.validators;
class I {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ce(),
      response: new ce()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = N(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Q.assertOptions(r, {
      silentJSONParsing: g.transitional(g.boolean),
      forcedJSONParsing: g.transitional(g.boolean),
      clarifyTimeoutError: g.transitional(g.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Q.assertOptions(s, {
      encode: g.function,
      serialize: g.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = o && a.merge(
      o.common,
      o[n.method]
    ), i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = T.concat(i, o);
    const u = [];
    let d = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (d = d && h.synchronous, u.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(h) {
      c.push(h.fulfilled, h.rejected);
    });
    let l, p = 0, E;
    if (!d) {
      const f = [fe.bind(this), void 0];
      for (f.unshift.apply(f, u), f.push.apply(f, c), E = f.length, l = Promise.resolve(n); p < E; )
        l = l.then(f[p++], f[p++]);
      return l;
    }
    E = u.length;
    let y = n;
    for (p = 0; p < E; ) {
      const f = u[p++], h = u[p++];
      try {
        y = f(y);
      } catch (A) {
        h.call(this, A);
        break;
      }
    }
    try {
      l = fe.call(this, y);
    } catch (f) {
      return Promise.reject(f);
    }
    for (p = 0, E = c.length; p < E; )
      l = l.then(c[p++], c[p++]);
    return l;
  }
  getUri(t) {
    t = N(this.defaults, t);
    const n = Fe(t.baseURL, t.url);
    return xe(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  I.prototype[t] = function(n, r) {
    return this.request(N(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, u) {
      return this.request(N(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  I.prototype[t] = n(), I.prototype[t + "Form"] = n(!0);
});
const j = I;
class re {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((u) => {
        r.subscribe(u), o = u;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, u) {
      r.reason || (r.reason = new D(o, i, u), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new re(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Wt = re;
function Kt(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function vt(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Y = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Y).forEach(([e, t]) => {
  Y[t] = e;
});
const Gt = Y;
function De(e) {
  const t = new j(e), n = he(j.prototype.request, t);
  return a.extend(n, j.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return De(N(e, s));
  }, n;
}
const w = De(te);
w.Axios = j;
w.CanceledError = D;
w.CancelToken = Wt;
w.isCancel = Ce;
w.VERSION = ke;
w.toFormData = $;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = Kt;
w.isAxiosError = vt;
w.mergeConfig = N;
w.AxiosHeaders = T;
w.formToJSON = (e) => Pe(a.isHTMLForm(e) ? new FormData(e) : e);
w.HttpStatusCode = Gt;
w.default = w;
const Xt = w, Qt = "APIKEY";
function Yt(e) {
  return /https?:\/\/.+?tiktok\.com\/(@.+|.+)/i.test(e);
}
async function Zt(e) {
  try {
    const n = (await Xt.get(`https://api-fxc7.cloud.okteto.net/api/download/tiktok?url=${e}&apikey=${Qt}`)).data;
    return n.status ? n.result : n;
  } catch (t) {
    return console.error(t), { status: !1, message: t == null ? void 0 : t.message };
  }
}
const en = (e, t, n, r, s) => `
  <img class="image-result" src="${e}" caption="">
  <p class="result-title">${t}</p>
  <button class="result-nowatermark"><a class="no-watermak" href="${r}"><i class="fa-solid fa-video"></i> Video no watermark</a></button>
  <button class="result-watermark"><a class="watermak" href="${n}"><i class="fa-sharp fa-solid fa-video"></i> Video watermark</a></button>
  <button class="result-audio"><a class="audio" href="${s}"><i class="fa-solid fa-music"></i> Audio</a></button>
`;
function tn(e) {
  const t = `@${e.username}`, n = e.title.split("#")[0].trim(), r = e.videoID;
  return `
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/${t}/video/${r}" data-video-id="${r}" style="max-width: 305px;min-width: 225px;">
      <section>
        <a target="_blank" title="${t}" href="https://www.tiktok.com/${t}?refer=embed">${t}</a> ${n.replaceAll('"', "")}
      </section>
    </blockquote>
  `;
}
export {
  Yt as checkUrl,
  Zt as downloadContent,
  tn as embedContent,
  en as resultContent
};
