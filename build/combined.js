/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
/*
 * Raphael 1.4.7 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael=function(){function l(){if(l.is(arguments[0],U)){for(var a=arguments[0],b=Ca[K](l,a.splice(0,3+l.is(a[0],P))),c=b.set(),d=0,f=a[o];d<f;d++){var e=a[d]||{};sb.test(e.type)&&c[F](b[e.type]().attr(e))}return c}return Ca[K](l,arguments)}l.version="1.4.7";var V=/[, ]+/,sb=/^(circle|rect|path|ellipse|text|image)$/,p="prototype",z="hasOwnProperty",C=document,aa=window,Qa={was:Object[p][z].call(aa,"Raphael"),is:aa.Raphael};function H(){}var x="appendChild",K="apply",M="concat",Da="createTouch"in C,
A="",N=" ",D=String,G="split",Ra="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[G](N),Ea={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},R="join",o="length",fa=String[p].toLowerCase,v=Math,Y=v.max,ba=v.min,P="number",ga="string",U="array",O="toString",ca="fill",tb=Object[p][O],E=v.pow,F="push",ja=/^(?=[\da-f]$)/,Sa=/^url\(['"]?([^\)]+?)['"]?\)$/i,ub=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+(?:\s*,\s*[\d\.]+)?)\s*\)|rgba?\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%(?:\s*,\s*[\d\.]+%)?)\s*\)|hsb\(\s*([\d\.]+(?:deg|\xb0)?\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hsb\(\s*([\d\.]+(?:deg|\xb0|%)\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\)|hsl\(\s*([\d\.]+(?:deg|\xb0)?\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hsl\(\s*([\d\.]+(?:deg|\xb0|%)\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i,
Q=v.round,W="setAttribute",y=parseFloat,ha=parseInt,Fa=" progid:DXImageTransform.Microsoft",sa=String[p].toUpperCase,ta={blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/",opacity:1,path:"M0,0",r:0,rotation:0,rx:0,ry:0,scale:"1 1",src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt",
"stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",translation:"0 0",width:0,x:0,y:0},Ga={along:"along",blur:P,"clip-rect":"csv",cx:P,cy:P,fill:"colour","fill-opacity":P,"font-size":P,height:P,opacity:P,path:"path",r:P,rotation:"csv",rx:P,ry:P,scale:"csv",stroke:"colour","stroke-opacity":P,"stroke-width":P,translation:"csv",width:P,x:P,y:P},I="replace";l.type=aa.SVGAngle||C.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure",
"1.1")?"SVG":"VML";if(l.type=="VML"){var da=C.createElement("div");da.innerHTML='<v:shape adj="1"/>';da=da.firstChild;da.style.behavior="url(#default#VML)";if(!(da&&typeof da.adj=="object"))return l.type=null;da=null}l.svg=!(l.vml=l.type=="VML");H[p]=l[p];l._id=0;l._oid=0;l.fn={};l.is=function(a,b){b=fa.call(b);return b=="object"&&a===Object(a)||b=="undefined"&&typeof a==b||b=="null"&&a==null||b=="array"&&Array.isArray&&Array.isArray(a)||fa.call(tb.call(a).slice(8,-1))==b};l.setWindow=function(a){aa=
a;C=aa.document};function ua(a){if(l.vml){var b=/^\s+|\s+$/g;ua=Z(function(d){var f;d=D(d)[I](b,A);try{var e=new aa.ActiveXObject("htmlfile");e.write("<body>");e.close();f=e.body}catch(g){f=aa.createPopup().document.body}e=f.createTextRange();try{f.style.color=d;var h=e.queryCommandValue("ForeColor");h=(h&255)<<16|h&65280|(h&16711680)>>>16;return"#"+("000000"+h[O](16)).slice(-6)}catch(i){return"none"}})}else{var c=C.createElement("i");c.title="Rapha\u00ebl Colour Picker";c.style.display="none";C.body[x](c);
ua=Z(function(d){c.style.color=d;return C.defaultView.getComputedStyle(c,A).getPropertyValue("color")})}return ua(a)}function Ta(){return"hsb("+[this.h,this.s,this.b]+")"}function vb(){return"hsl("+[this.h,this.s,this.l]+")"}function wb(){return this.hex}l.hsb2rgb=function(a,b,c){if(l.is(a,"object")&&"h"in a&&"s"in a&&"b"in a){c=a.b;b=a.s;a=a.h}return l.hsl2rgb(a,b,c/2)};l.hsl2rgb=function(a,b,c){if(l.is(a,"object")&&"h"in a&&"s"in a&&"l"in a){c=a.l;b=a.s;a=a.h}if(a>1||b>1||c>1){a/=255;b/=255;c/=
255}var d={},f=["r","g","b"],e;if(b){b=c<0.5?c*(1+b):c+b-c*b;c=2*c-b;for(var g=0,h=f.length;g<h;g++){e=a+1/3*-(g-1);e<0&&e++;e>1&&e--;d[f[g]]=e*6<1?c+(b-c)*6*e:e*2<1?b:e*3<2?c+(b-c)*(2/3-e)*6:c}}else d={r:c,g:c,b:c};d.r*=255;d.g*=255;d.b*=255;a=(~~d.r)[O](16);f=(~~d.g)[O](16);b=(~~d.b)[O](16);a=a[I](ja,"0");f=f[I](ja,"0");b=b[I](ja,"0");d.hex="#"+a+f+b;d.toString=wb;return d};l.rgb2hsb=function(a,b,c){if(b==null&&l.is(a,"object")&&"r"in a&&"g"in a&&"b"in a){c=a.b;b=a.g;a=a.r}if(b==null&&l.is(a,ga)){var d=
l.getRGB(a);a=d.r;b=d.g;c=d.b}if(a>1||b>1||c>1){a/=255;b/=255;c/=255}var f=Y(a,b,c),e=ba(a,b,c);d=f;if(e==f)return{h:0,s:0,b:f,toString:Ta};else{var g=f-e;e=g/f;a=a==f?(b-c)/g:b==f?2+(c-a)/g:4+(a-b)/g;a/=6;a<0&&a++;a>1&&a--}return{h:a,s:e,b:d,toString:Ta}};l.rgb2hsl=function(a,b,c){if(b==null&&l.is(a,"object")&&"r"in a&&"g"in a&&"b"in a){c=a.b;b=a.g;a=a.r}if(b==null&&l.is(a,ga)){var d=l.getRGB(a);a=d.r;b=d.g;c=d.b}if(a>1||b>1||c>1){a/=255;b/=255;c/=255}var f=Y(a,b,c),e=ba(a,b,c);d=(f+e)/2;if(e==f)a=
{h:0,s:0,l:d};else{var g=f-e;e=d<0.5?g/(f+e):g/(2-f-e);a=a==f?(b-c)/g:b==f?2+(c-a)/g:4+(a-b)/g;a/=6;a<0&&a++;a>1&&a--;a={h:a,s:e,l:d}}a.toString=vb;return a};var xb=/,?([achlmqrstvxz]),?/gi,ka=/\s*,\s*/,yb={hs:1,rg:1};l._path2string=function(){return this.join(",")[I](xb,"$1")};function Z(a,b,c){function d(){var f=Array[p].slice.call(arguments,0),e=f[R]("\u25ba"),g=d.cache=d.cache||{},h=d.count=d.count||[];if(g[z](e))return c?c(g[e]):g[e];h[o]>=1000&&delete g[h.shift()];h[F](e);g[e]=a[K](b,f);return c?
c(g[e]):g[e]}return d}l.getRGB=Z(function(a){if(!a||(a=D(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1};if(a=="none")return{r:-1,g:-1,b:-1,hex:"none"};!(yb[z](a.substring(0,2))||a.charAt()=="#")&&(a=ua(a));var b,c,d,f,e;if(a=a.match(ub)){if(a[2]){d=ha(a[2].substring(5),16);c=ha(a[2].substring(3,5),16);b=ha(a[2].substring(1,3),16)}if(a[3]){d=ha((e=a[3].charAt(3))+e,16);c=ha((e=a[3].charAt(2))+e,16);b=ha((e=a[3].charAt(1))+e,16)}if(a[4]){a=a[4][G](ka);b=y(a[0]);c=y(a[1]);d=y(a[2]);f=y(a[3])}if(a[5]){a=
a[5][G](ka);b=y(a[0])*2.55;c=y(a[1])*2.55;d=y(a[2])*2.55;f=y(a[3])}if(a[6]){a=a[6][G](ka);b=y(a[0]);c=y(a[1]);d=y(a[2]);(a[0].slice(-3)=="deg"||a[0].slice(-1)=="\u00b0")&&(b/=360);return l.hsb2rgb(b,c,d)}if(a[7]){a=a[7][G](ka);b=y(a[0])*2.55;c=y(a[1])*2.55;d=y(a[2])*2.55;(a[0].slice(-3)=="deg"||a[0].slice(-1)=="\u00b0")&&(b/=360*2.55);return l.hsb2rgb(b,c,d)}if(a[8]){a=a[8][G](ka);b=y(a[0]);c=y(a[1]);d=y(a[2]);(a[0].slice(-3)=="deg"||a[0].slice(-1)=="\u00b0")&&(b/=360);return l.hsl2rgb(b,c,d)}if(a[9]){a=
a[9][G](ka);b=y(a[0])*2.55;c=y(a[1])*2.55;d=y(a[2])*2.55;(a[0].slice(-3)=="deg"||a[0].slice(-1)=="\u00b0")&&(b/=360*2.55);return l.hsl2rgb(b,c,d)}a={r:b,g:c,b:d};b=(~~b)[O](16);c=(~~c)[O](16);d=(~~d)[O](16);b=b[I](ja,"0");c=c[I](ja,"0");d=d[I](ja,"0");a.hex="#"+b+c+d;isFinite(y(f))&&(a.o=f);return a}return{r:-1,g:-1,b:-1,hex:"none",error:1}},l);l.getColor=function(a){a=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||0.75};var b=this.hsb2rgb(a.h,a.s,a.b);a.h+=0.075;if(a.h>1){a.h=0;a.s-=0.2;
a.s<=0&&(this.getColor.start={h:0,s:1,b:a.b})}return b.hex};l.getColor.reset=function(){delete this.start};var zb=/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,Ab=/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig;l.parsePathString=Z(function(a){if(!a)return null;var b={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},c=[];if(l.is(a,U)&&l.is(a[0],U))c=va(a);c[o]||D(a)[I](zb,function(d,f,e){var g=[];d=fa.call(f);e[I](Ab,function(h,i){i&&g[F](+i)});if(d=="m"&&g[o]>2){c[F]([f][M](g.splice(0,2)));d="l";
f=f=="m"?"l":"L"}for(;g[o]>=b[d];){c[F]([f][M](g.splice(0,b[d])));if(!b[d])break}});c[O]=l._path2string;return c});l.findDotsAtSegment=function(a,b,c,d,f,e,g,h,i){var j=1-i,m=E(j,3)*a+E(j,2)*3*i*c+j*3*i*i*f+E(i,3)*g;j=E(j,3)*b+E(j,2)*3*i*d+j*3*i*i*e+E(i,3)*h;var n=a+2*i*(c-a)+i*i*(f-2*c+a),r=b+2*i*(d-b)+i*i*(e-2*d+b),q=c+2*i*(f-c)+i*i*(g-2*f+c),k=d+2*i*(e-d)+i*i*(h-2*e+d);a=(1-i)*a+i*c;b=(1-i)*b+i*d;f=(1-i)*f+i*g;e=(1-i)*e+i*h;h=90-v.atan((n-q)/(r-k))*180/v.PI;(n>q||r<k)&&(h+=180);return{x:m,y:j,
m:{x:n,y:r},n:{x:q,y:k},start:{x:a,y:b},end:{x:f,y:e},alpha:h}};var xa=Z(function(a){if(!a)return{x:0,y:0,width:0,height:0};a=wa(a);for(var b=0,c=0,d=[],f=[],e,g=0,h=a[o];g<h;g++){e=a[g];if(e[0]=="M"){b=e[1];c=e[2];d[F](b);f[F](c)}else{b=Bb(b,c,e[1],e[2],e[3],e[4],e[5],e[6]);d=d[M](b.min.x,b.max.x);f=f[M](b.min.y,b.max.y);b=e[5];c=e[6]}}a=ba[K](0,d);e=ba[K](0,f);return{x:a,y:e,width:Y[K](0,d)-a,height:Y[K](0,f)-e}});function va(a){var b=[];if(!l.is(a,U)||!l.is(a&&a[0],U))a=l.parsePathString(a);for(var c=
0,d=a[o];c<d;c++){b[c]=[];for(var f=0,e=a[c][o];f<e;f++)b[c][f]=a[c][f]}b[O]=l._path2string;return b}var Ha=Z(function(a){if(!l.is(a,U)||!l.is(a&&a[0],U))a=l.parsePathString(a);var b=[],c=0,d=0,f=0,e=0,g=0;if(a[0][0]=="M"){c=a[0][1];d=a[0][2];f=c;e=d;g++;b[F](["M",c,d])}g=g;for(var h=a[o];g<h;g++){var i=b[g]=[],j=a[g];if(j[0]!=fa.call(j[0])){i[0]=fa.call(j[0]);switch(i[0]){case "a":i[1]=j[1];i[2]=j[2];i[3]=j[3];i[4]=j[4];i[5]=j[5];i[6]=+(j[6]-c).toFixed(3);i[7]=+(j[7]-d).toFixed(3);break;case "v":i[1]=
+(j[1]-d).toFixed(3);break;case "m":f=j[1];e=j[2];default:for(var m=1,n=j[o];m<n;m++)i[m]=+(j[m]-(m%2?c:d)).toFixed(3)}}else{b[g]=[];if(j[0]=="m"){f=j[1]+c;e=j[2]+d}i=0;for(m=j[o];i<m;i++)b[g][i]=j[i]}j=b[g][o];switch(b[g][0]){case "z":c=f;d=e;break;case "h":c+=+b[g][j-1];break;case "v":d+=+b[g][j-1];break;default:c+=+b[g][j-2];d+=+b[g][j-1]}}b[O]=l._path2string;return b},0,va),oa=Z(function(a){if(!l.is(a,U)||!l.is(a&&a[0],U))a=l.parsePathString(a);var b=[],c=0,d=0,f=0,e=0,g=0;if(a[0][0]=="M"){c=
+a[0][1];d=+a[0][2];f=c;e=d;g++;b[0]=["M",c,d]}g=g;for(var h=a[o];g<h;g++){var i=b[g]=[],j=a[g];if(j[0]!=sa.call(j[0])){i[0]=sa.call(j[0]);switch(i[0]){case "A":i[1]=j[1];i[2]=j[2];i[3]=j[3];i[4]=j[4];i[5]=j[5];i[6]=+(j[6]+c);i[7]=+(j[7]+d);break;case "V":i[1]=+j[1]+d;break;case "H":i[1]=+j[1]+c;break;case "M":f=+j[1]+c;e=+j[2]+d;default:for(var m=1,n=j[o];m<n;m++)i[m]=+j[m]+(m%2?c:d)}}else{m=0;for(n=j[o];m<n;m++)b[g][m]=j[m]}switch(i[0]){case "Z":c=f;d=e;break;case "H":c=i[1];break;case "V":d=i[1];
break;case "M":f=b[g][b[g][o]-2];e=b[g][b[g][o]-1];default:c=b[g][b[g][o]-2];d=b[g][b[g][o]-1]}}b[O]=l._path2string;return b},null,va);function ya(a,b,c,d){return[a,b,c,d,c,d]}function Ua(a,b,c,d,f,e){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*f+h*c,g*e+h*d,f,e]}function Va(a,b,c,d,f,e,g,h,i,j){var m=v.PI,n=m*120/180,r=m/180*(+f||0),q=[],k,t=Z(function(J,ia,za){var Cb=J*v.cos(za)-ia*v.sin(za);J=J*v.sin(za)+ia*v.cos(za);return{x:Cb,y:J}});if(j){w=j[0];k=j[1];e=j[2];B=j[3]}else{k=t(a,b,-r);a=k.x;b=k.y;
k=t(h,i,-r);h=k.x;i=k.y;v.cos(m/180*f);v.sin(m/180*f);k=(a-h)/2;w=(b-i)/2;B=k*k/(c*c)+w*w/(d*d);if(B>1){B=v.sqrt(B);c=B*c;d=B*d}B=c*c;var L=d*d;B=(e==g?-1:1)*v.sqrt(v.abs((B*L-B*w*w-L*k*k)/(B*w*w+L*k*k)));e=B*c*w/d+(a+h)/2;var B=B*-d*k/c+(b+i)/2,w=v.asin(((b-B)/d).toFixed(7));k=v.asin(((i-B)/d).toFixed(7));w=a<e?m-w:w;k=h<e?m-k:k;w<0&&(w=m*2+w);k<0&&(k=m*2+k);if(g&&w>k)w-=m*2;if(!g&&k>w)k-=m*2}m=k-w;if(v.abs(m)>n){q=k;m=h;L=i;k=w+n*(g&&k>w?1:-1);h=e+c*v.cos(k);i=B+d*v.sin(k);q=Va(h,i,c,d,f,0,g,m,
L,[k,q,e,B])}m=k-w;f=v.cos(w);e=v.sin(w);g=v.cos(k);k=v.sin(k);m=v.tan(m/4);c=4/3*c*m;m=4/3*d*m;d=[a,b];a=[a+c*e,b-m*f];b=[h+c*k,i-m*g];h=[h,i];a[0]=2*d[0]-a[0];a[1]=2*d[1]-a[1];if(j)return[a,b,h][M](q);else{q=[a,b,h][M](q)[R]()[G](",");j=[];h=0;for(i=q[o];h<i;h++)j[h]=h%2?t(q[h-1],q[h],r).y:t(q[h],q[h+1],r).x;return j}}function la(a,b,c,d,f,e,g,h,i){var j=1-i;return{x:E(j,3)*a+E(j,2)*3*i*c+j*3*i*i*f+E(i,3)*g,y:E(j,3)*b+E(j,2)*3*i*d+j*3*i*i*e+E(i,3)*h}}var Bb=Z(function(a,b,c,d,f,e,g,h){var i=f-2*
c+a-(g-2*f+c),j=2*(c-a)-2*(f-c),m=a-c,n=(-j+v.sqrt(j*j-4*i*m))/2/i;i=(-j-v.sqrt(j*j-4*i*m))/2/i;var r=[b,h],q=[a,g];v.abs(n)>1000000000000&&(n=0.5);v.abs(i)>1000000000000&&(i=0.5);if(n>0&&n<1){n=la(a,b,c,d,f,e,g,h,n);q[F](n.x);r[F](n.y)}if(i>0&&i<1){n=la(a,b,c,d,f,e,g,h,i);q[F](n.x);r[F](n.y)}i=e-2*d+b-(h-2*e+d);j=2*(d-b)-2*(e-d);m=b-d;n=(-j+v.sqrt(j*j-4*i*m))/2/i;i=(-j-v.sqrt(j*j-4*i*m))/2/i;v.abs(n)>1000000000000&&(n=0.5);v.abs(i)>1000000000000&&(i=0.5);if(n>0&&n<1){n=la(a,b,c,d,f,e,g,h,n);q[F](n.x);
r[F](n.y)}if(i>0&&i<1){n=la(a,b,c,d,f,e,g,h,i);q[F](n.x);r[F](n.y)}return{min:{x:ba[K](0,q),y:ba[K](0,r)},max:{x:Y[K](0,q),y:Y[K](0,r)}}}),wa=Z(function(a,b){var c=oa(a),d=b&&oa(b);a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null};b={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null};function f(q,k){var t;if(!q)return["C",k.x,k.y,k.x,k.y,k.x,k.y];!(q[0]in{T:1,Q:1})&&(k.qx=k.qy=null);switch(q[0]){case "M":k.X=q[1];k.Y=q[2];break;case "A":q=["C"][M](Va[K](0,[k.x,k.y][M](q.slice(1))));break;case "S":t=k.x+(k.x-
(k.bx||k.x));k=k.y+(k.y-(k.by||k.y));q=["C",t,k][M](q.slice(1));break;case "T":k.qx=k.x+(k.x-(k.qx||k.x));k.qy=k.y+(k.y-(k.qy||k.y));q=["C"][M](Ua(k.x,k.y,k.qx,k.qy,q[1],q[2]));break;case "Q":k.qx=q[1];k.qy=q[2];q=["C"][M](Ua(k.x,k.y,q[1],q[2],q[3],q[4]));break;case "L":q=["C"][M](ya(k.x,k.y,q[1],q[2]));break;case "H":q=["C"][M](ya(k.x,k.y,q[1],k.y));break;case "V":q=["C"][M](ya(k.x,k.y,k.x,q[1]));break;case "Z":q=["C"][M](ya(k.x,k.y,k.X,k.Y));break}return q}function e(q,k){if(q[k][o]>7){q[k].shift();
for(var t=q[k];t[o];)q.splice(k++,0,["C"][M](t.splice(0,6)));q.splice(k,1);i=Y(c[o],d&&d[o]||0)}}function g(q,k,t,L,B){if(q&&k&&q[B][0]=="M"&&k[B][0]!="M"){k.splice(B,0,["M",L.x,L.y]);t.bx=0;t.by=0;t.x=q[B][1];t.y=q[B][2];i=Y(c[o],d&&d[o]||0)}}for(var h=0,i=Y(c[o],d&&d[o]||0);h<i;h++){c[h]=f(c[h],a);e(c,h);d&&(d[h]=f(d[h],b));d&&e(d,h);g(c,d,a,b,h);g(d,c,b,a,h);var j=c[h],m=d&&d[h],n=j[o],r=d&&m[o];a.x=j[n-2];a.y=j[n-1];a.bx=y(j[n-4])||a.x;a.by=y(j[n-3])||a.y;b.bx=d&&(y(m[r-4])||b.x);b.by=d&&(y(m[r-
3])||b.y);b.x=d&&m[r-2];b.y=d&&m[r-1]}return d?[c,d]:c},null,va),Wa=Z(function(a){for(var b=[],c=0,d=a[o];c<d;c++){var f={},e=a[c].match(/^([^:]*):?([\d\.]*)/);f.color=l.getRGB(e[1]);if(f.color.error)return null;f.color=f.color.hex;e[2]&&(f.offset=e[2]+"%");b[F](f)}c=1;for(d=b[o]-1;c<d;c++)if(!b[c].offset){a=y(b[c-1].offset||0);e=0;for(f=c+1;f<d;f++)if(b[f].offset){e=b[f].offset;break}if(!e){e=100;f=d}e=y(e);for(e=(e-a)/(f-c+1);c<f;c++){a+=e;b[c].offset=a+"%"}}return b});function Xa(a,b,c,d){if(l.is(a,
ga)||l.is(a,"object")){a=l.is(a,ga)?C.getElementById(a):a;if(a.tagName)return b==null?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:b,height:c}}else return{container:1,x:a,y:b,width:c,height:d}}function Ia(a,b){var c=this;for(var d in b)if(b[z](d)&&!(d in a))switch(typeof b[d]){case "function":(function(f){a[d]=a===c?f:function(){return f[K](c,arguments)}})(b[d]);break;case "object":a[d]=a[d]||{};Ia.call(this,a[d],b[d]);break;default:a[d]=
b[d];break}}function ma(a,b){a==b.top&&(b.top=a.prev);a==b.bottom&&(b.bottom=a.next);a.next&&(a.next.prev=a.prev);a.prev&&(a.prev.next=a.next)}function Ya(a,b){if(b.top!==a){ma(a,b);a.next=null;a.prev=b.top;b.top.next=a;b.top=a}}function Za(a,b){if(b.bottom!==a){ma(a,b);a.next=b.bottom;a.prev=null;b.bottom.prev=a;b.bottom=a}}function $a(a,b,c){ma(a,c);b==c.top&&(c.top=a);b.next&&(b.next.prev=a);a.next=b.next;a.prev=b;b.next=a}function ab(a,b,c){ma(a,c);b==c.bottom&&(c.bottom=a);b.prev&&(b.prev.next=
a);a.prev=b.prev;b.prev=a;a.next=b}function bb(a){return function(){throw new Error("Rapha\u00ebl: you are calling to method \u201c"+a+"\u201d of removed object");}}var cb=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/;l.pathToRelative=Ha;if(l.svg){H[p].svgns="http://www.w3.org/2000/svg";H[p].xlink="http://www.w3.org/1999/xlink";Q=function(a){return+a+(~~a===a)*0.5};var u=function(a,b){if(b)for(var c in b)b[z](c)&&a[W](c,D(b[c]));else{a=C.createElementNS(H[p].svgns,a);a.style.webkitTapHighlightColor="rgba(0,0,0,0)";
return a}};l[O]=function(){return"Your browser supports SVG.\nYou are running Rapha\u00ebl "+this.version};var db=function(a,b){var c=u("path");b.canvas&&b.canvas[x](c);b=new s(c,b);b.type="path";ea(b,{fill:"none",stroke:"#000",path:a});return b},pa=function(a,b,c){var d="linear",f=0.5,e=0.5,g=a.style;b=D(b)[I](cb,function(m,n,r){d="radial";if(n&&r){f=y(n);e=y(r);m=(e>0.5)*2-1;E(f-0.5,2)+E(e-0.5,2)>0.25&&(e=v.sqrt(0.25-E(f-0.5,2))*m+0.5)&&e!=0.5&&(e=e.toFixed(5)-1.0E-5*m)}return A});b=b[G](/\s*\-\s*/);
if(d=="linear"){var h=b.shift();h=-y(h);if(isNaN(h))return null;h=[0,0,v.cos(h*v.PI/180),v.sin(h*v.PI/180)];var i=1/(Y(v.abs(h[2]),v.abs(h[3]))||1);h[2]*=i;h[3]*=i;if(h[2]<0){h[0]=-h[2];h[2]=0}if(h[3]<0){h[1]=-h[3];h[3]=0}}b=Wa(b);if(!b)return null;i=a.getAttribute(ca);(i=i.match(/^url\(#(.*)\)$/))&&c.defs.removeChild(C.getElementById(i[1]));i=u(d+"Gradient");i.id="r"+(l._id++)[O](36);u(i,d=="radial"?{fx:f,fy:e}:{x1:h[0],y1:h[1],x2:h[2],y2:h[3]});c.defs[x](i);c=0;for(h=b[o];c<h;c++){var j=u("stop");
u(j,{offset:b[c].offset?b[c].offset:!c?"0%":"100%","stop-color":b[c].color||"#fff"});i[x](j)}u(a,{fill:"url(#"+i.id+")",opacity:1,"fill-opacity":1});g.fill=A;g.opacity=1;return g.fillOpacity=1},Ja=function(a){var b=a.getBBox();u(a.pattern,{patternTransform:l.format("translate({0},{1})",b.x,b.y)})},ea=function(a,b){var c={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},d=a.node,f=a.attrs,e=
a.rotate();function g(k,t){if(t=c[fa.call(t)]){var L=k.attrs["stroke-width"]||"1";k={round:L,square:L,butt:0}[k.attrs["stroke-linecap"]||b["stroke-linecap"]]||0;for(var B=[],w=t[o];w--;)B[w]=t[w]*L+(w%2?1:-1)*k;u(d,{"stroke-dasharray":B[R](",")})}}b[z]("rotation")&&(e=b.rotation);var h=D(e)[G](V);if(h.length-1){h[1]=+h[1];h[2]=+h[2]}else h=null;y(e)&&a.rotate(0,true);for(var i in b)if(b[z](i))if(ta[z](i)){var j=b[i];f[i]=j;switch(i){case "blur":a.blur(j);break;case "rotation":a.rotate(j,true);break;
case "href":case "title":case "target":var m=d.parentNode;if(fa.call(m.tagName)!="a"){var n=u("a");m.insertBefore(n,d);n[x](d);m=n}m.setAttributeNS(a.paper.xlink,i,j);break;case "cursor":d.style.cursor=j;break;case "clip-rect":m=D(j)[G](V);if(m[o]==4){a.clip&&a.clip.parentNode.parentNode.removeChild(a.clip.parentNode);var r=u("clipPath");n=u("rect");r.id="r"+(l._id++)[O](36);u(n,{x:m[0],y:m[1],width:m[2],height:m[3]});r[x](n);a.paper.defs[x](r);u(d,{"clip-path":"url(#"+r.id+")"});a.clip=n}if(!j){(j=
C.getElementById(d.getAttribute("clip-path")[I](/(^url\(#|\)$)/g,A)))&&j.parentNode.removeChild(j);u(d,{"clip-path":A});delete a.clip}break;case "path":if(a.type=="path")u(d,{d:j?(f.path=oa(j)):"M0,0"});break;case "width":d[W](i,j);if(f.fx){i="x";j=f.x}else break;case "x":if(f.fx)j=-f.x-(f.width||0);case "rx":if(i=="rx"&&a.type=="rect")break;case "cx":h&&(i=="x"||i=="cx")&&(h[1]+=j-f[i]);d[W](i,j);a.pattern&&Ja(a);break;case "height":d[W](i,j);if(f.fy){i="y";j=f.y}else break;case "y":if(f.fy)j=-f.y-
(f.height||0);case "ry":if(i=="ry"&&a.type=="rect")break;case "cy":h&&(i=="y"||i=="cy")&&(h[2]+=j-f[i]);d[W](i,j);a.pattern&&Ja(a);break;case "r":a.type=="rect"?u(d,{rx:j,ry:j}):d[W](i,j);break;case "src":a.type=="image"&&d.setAttributeNS(a.paper.xlink,"href",j);break;case "stroke-width":d.style.strokeWidth=j;d[W](i,j);f["stroke-dasharray"]&&g(a,f["stroke-dasharray"]);break;case "stroke-dasharray":g(a,j);break;case "translation":j=D(j)[G](V);j[0]=+j[0]||0;j[1]=+j[1]||0;if(h){h[1]+=j[0];h[2]+=j[1]}Aa.call(a,
j[0],j[1]);break;case "scale":j=D(j)[G](V);a.scale(+j[0]||1,+j[1]||+j[0]||1,isNaN(y(j[2]))?null:+j[2],isNaN(y(j[3]))?null:+j[3]);break;case ca:if(m=D(j).match(Sa)){r=u("pattern");var q=u("image");r.id="r"+(l._id++)[O](36);u(r,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});u(q,{x:0,y:0});q.setAttributeNS(a.paper.xlink,"href",m[1]);r[x](q);j=C.createElement("img");j.style.cssText="position:absolute;left:-9999em;top-9999em";j.onload=function(){u(r,{width:this.offsetWidth,height:this.offsetHeight});
u(q,{width:this.offsetWidth,height:this.offsetHeight});C.body.removeChild(this);a.paper.safari()};C.body[x](j);j.src=m[1];a.paper.defs[x](r);d.style.fill="url(#"+r.id+")";u(d,{fill:"url(#"+r.id+")"});a.pattern=r;a.pattern&&Ja(a);break}m=l.getRGB(j);if(m.error){if(({circle:1,ellipse:1}[z](a.type)||D(j).charAt()!="r")&&pa(d,j,a.paper)){f.gradient=j;f.fill="none";break}}else{delete b.gradient;delete f.gradient;!l.is(f.opacity,"undefined")&&l.is(b.opacity,"undefined")&&u(d,{opacity:f.opacity});!l.is(f["fill-opacity"],
"undefined")&&l.is(b["fill-opacity"],"undefined")&&u(d,{"fill-opacity":f["fill-opacity"]})}m[z]("o")&&u(d,{"fill-opacity":m.o>1?m.o/100:m.o});case "stroke":m=l.getRGB(j);d[W](i,m.hex);i=="stroke"&&m[z]("o")&&u(d,{"stroke-opacity":m.o>1?m.o/100:m.o});break;case "gradient":(({circle:1,ellipse:1})[z](a.type)||D(j).charAt()!="r")&&pa(d,j,a.paper);break;case "opacity":case "fill-opacity":if(f.gradient){if(m=C.getElementById(d.getAttribute(ca)[I](/^url\(#|\)$/g,A))){m=m.getElementsByTagName("stop");m[m[o]-
1][W]("stop-opacity",j)}break}default:i=="font-size"&&(j=ha(j,10)+"px");m=i[I](/(\-.)/g,function(k){return sa.call(k.substring(1))});d.style[m]=j;d[W](i,j);break}}Db(a,b);if(h)a.rotate(h.join(N));else y(e)&&a.rotate(e,true)},eb=1.2,Db=function(a,b){if(!(a.type!="text"||!(b[z]("text")||b[z]("font")||b[z]("font-size")||b[z]("x")||b[z]("y")))){var c=a.attrs,d=a.node,f=d.firstChild?ha(C.defaultView.getComputedStyle(d.firstChild,A).getPropertyValue("font-size"),10):10;if(b[z]("text")){for(c.text=b.text;d.firstChild;)d.removeChild(d.firstChild);
b=D(b.text)[G]("\n");for(var e=0,g=b[o];e<g;e++)if(b[e]){var h=u("tspan");e&&u(h,{dy:f*eb,x:c.x});h[x](C.createTextNode(b[e]));d[x](h)}}else{b=d.getElementsByTagName("tspan");e=0;for(g=b[o];e<g;e++)e&&u(b[e],{dy:f*eb,x:c.x})}u(d,{y:c.y});a=a.getBBox();(a=c.y-(a.y+a.height/2))&&isFinite(a)&&u(d,{y:c.y+a})}},s=function(a,b){this[0]=a;this.id=l._oid++;this.node=a;a.raphael=this;this.paper=b;this.attrs=this.attrs||{};this.transformations=[];this._={tx:0,ty:0,rt:{deg:0,cx:0,cy:0},sx:1,sy:1};!b.bottom&&
(b.bottom=this);(this.prev=b.top)&&(b.top.next=this);b.top=this;this.next=null};s[p].rotate=function(a,b,c){if(this.removed)return this;if(a==null){if(this._.rt.cx)return[this._.rt.deg,this._.rt.cx,this._.rt.cy][R](N);return this._.rt.deg}var d=this.getBBox();a=D(a)[G](V);if(a[o]-1){b=y(a[1]);c=y(a[2])}a=y(a[0]);if(b!=null)this._.rt.deg=a;else this._.rt.deg+=a;c==null&&(b=null);this._.rt.cx=b;this._.rt.cy=c;b=b==null?d.x+d.width/2:b;c=c==null?d.y+d.height/2:c;if(this._.rt.deg){this.transformations[0]=
l.format("rotate({0} {1} {2})",this._.rt.deg,b,c);this.clip&&u(this.clip,{transform:l.format("rotate({0} {1} {2})",-this._.rt.deg,b,c)})}else{this.transformations[0]=A;this.clip&&u(this.clip,{transform:A})}u(this.node,{transform:this.transformations[R](N)});return this};s[p].hide=function(){!this.removed&&(this.node.style.display="none");return this};s[p].show=function(){!this.removed&&(this.node.style.display="");return this};s[p].remove=function(){if(!this.removed){ma(this,this.paper);this.node.parentNode.removeChild(this.node);
for(var a in this)delete this[a];this.removed=true}};s[p].getBBox=function(){if(this.removed)return this;if(this.type=="path")return xa(this.attrs.path);if(this.node.style.display=="none"){this.show();var a=true}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}if(this.type=="text"){b={x:b.x,y:Infinity,width:0,height:0};for(var d=0,f=this.node.getNumberOfChars();d<f;d++){var e=this.node.getExtentOfChar(d);e.y<b.y&&(b.y=e.y);e.y+e.height-b.y>b.height&&(b.height=e.y+e.height-b.y);e.x+e.width-
b.x>b.width&&(b.width=e.x+e.width-b.x)}}a&&this.hide();return b};s[p].attr=function(a,b){if(this.removed)return this;if(a==null){a={};for(var c in this.attrs)if(this.attrs[z](c))a[c]=this.attrs[c];this._.rt.deg&&(a.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(a.scale=this.scale());a.gradient&&a.fill=="none"&&(a.fill=a.gradient)&&delete a.gradient;return a}if(b==null&&l.is(a,ga)){if(a=="translation")return Aa.call(this);if(a=="rotation")return this.rotate();if(a=="scale")return this.scale();
if(a==ca&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;return this.attrs[a]}if(b==null&&l.is(a,U)){b={};c=0;for(var d=a.length;c<d;c++)b[a[c]]=this.attr(a[c]);return b}if(b!=null){c={};c[a]=b;ea(this,c)}else a!=null&&l.is(a,"object")&&ea(this,a);return this};s[p].toFront=function(){if(this.removed)return this;this.node.parentNode[x](this.node);var a=this.paper;a.top!=this&&Ya(this,a);return this};s[p].toBack=function(){if(this.removed)return this;if(this.node.parentNode.firstChild!=
this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);Za(this,this.paper)}return this};s[p].insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length].node;b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode[x](this.node);$a(this,a,this.paper);return this};s[p].insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;b.parentNode.insertBefore(this.node,b);ab(this,a,this.paper);return this};s[p].blur=
function(a){var b=this;if(+a!==0){var c=u("filter"),d=u("feGaussianBlur");b.attrs.blur=a;c.id="r"+(l._id++)[O](36);u(d,{stdDeviation:+a||1.5});c.appendChild(d);b.paper.defs.appendChild(c);b._blur=c;u(b.node,{filter:"url(#"+c.id+")"})}else{if(b._blur){b._blur.parentNode.removeChild(b._blur);delete b._blur;delete b.attrs.blur}b.node.removeAttribute("filter")}};var fb=function(a,b,c,d){var f=u("circle");a.canvas&&a.canvas[x](f);a=new s(f,a);a.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"};a.type="circle";
u(f,a.attrs);return a},gb=function(a,b,c,d,f,e){var g=u("rect");a.canvas&&a.canvas[x](g);a=new s(g,a);a.attrs={x:b,y:c,width:d,height:f,r:e||0,rx:e||0,ry:e||0,fill:"none",stroke:"#000"};a.type="rect";u(g,a.attrs);return a},hb=function(a,b,c,d,f){var e=u("ellipse");a.canvas&&a.canvas[x](e);a=new s(e,a);a.attrs={cx:b,cy:c,rx:d,ry:f,fill:"none",stroke:"#000"};a.type="ellipse";u(e,a.attrs);return a},ib=function(a,b,c,d,f,e){var g=u("image");u(g,{x:c,y:d,width:f,height:e,preserveAspectRatio:"none"});g.setAttributeNS(a.xlink,
"href",b);a.canvas&&a.canvas[x](g);a=new s(g,a);a.attrs={x:c,y:d,width:f,height:e,src:b};a.type="image";return a},jb=function(a,b,c,d){var f=u("text");u(f,{x:b,y:c,"text-anchor":"middle"});a.canvas&&a.canvas[x](f);a=new s(f,a);a.attrs={x:b,y:c,"text-anchor":"middle",text:d,font:ta.font,stroke:"none",fill:"#000"};a.type="text";ea(a,a.attrs);return a},kb=function(a,b){this.width=a||this.width;this.height=b||this.height;this.canvas[W]("width",this.width);this.canvas[W]("height",this.height);return this},
Ca=function(){var a=Xa[K](0,arguments),b=a&&a.container,c=a.x,d=a.y,f=a.width;a=a.height;if(!b)throw new Error("SVG container not found.");var e=u("svg");c=c||0;d=d||0;f=f||512;a=a||342;u(e,{xmlns:"http://www.w3.org/2000/svg",version:1.1,width:f,height:a});if(b==1){e.style.cssText="position:absolute;left:"+c+"px;top:"+d+"px";C.body[x](e)}else b.firstChild?b.insertBefore(e,b.firstChild):b[x](e);b=new H;b.width=f;b.height=a;b.canvas=e;Ia.call(b,b,l.fn);b.clear();return b};H[p].clear=function(){for(var a=
this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null;(this.desc=u("desc"))[x](C.createTextNode("Created with Rapha\u00ebl"));a[x](this.desc);a[x](this.defs=u("defs"))};H[p].remove=function(){this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=bb(a)}}if(l.vml){var lb={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},Eb=/([clmz]),?([^clmz]*)/gi,Fb=/-?[^,\s-]+/g,qa=1000+N+1000,na=10,ra={path:1,rect:1},Gb=function(a){var b=/[ahqstv]/ig,
c=oa;D(a).match(b)&&(c=wa);b=/[clmz]/g;if(c==oa&&!D(a).match(b))return a=D(a)[I](Eb,function(i,j,m){var n=[],r=fa.call(j)=="m",q=lb[j];m[I](Fb,function(k){if(r&&n[o]==2){q+=n+lb[j=="m"?"l":"L"];n=[]}n[F](Q(k*na))});return q+n});b=c(a);var d;a=[];for(var f=0,e=b[o];f<e;f++){c=b[f];d=fa.call(b[f][0]);d=="z"&&(d="x");for(var g=1,h=c[o];g<h;g++)d+=Q(c[g]*na)+(g!=h-1?",":A);a[F](d)}return a[R](N)};l[O]=function(){return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\u00ebl "+
this.version};db=function(a,b){var c=S("group");c.style.cssText="position:absolute;left:0;top:0;width:"+b.width+"px;height:"+b.height+"px";c.coordsize=b.coordsize;c.coordorigin=b.coordorigin;var d=S("shape"),f=d.style;f.width=b.width+"px";f.height=b.height+"px";d.coordsize=qa;d.coordorigin=b.coordorigin;c[x](d);d=new s(d,c,b);f={fill:"none",stroke:"#000"};a&&(f.path=a);d.isAbsolute=true;d.type="path";d.path=[];d.Path=A;ea(d,f);b.canvas[x](c);return d};ea=function(a,b){a.attrs=a.attrs||{};var c=a.node,
d=a.attrs,f=c.style,e;e=(b.x!=d.x||b.y!=d.y||b.width!=d.width||b.height!=d.height||b.r!=d.r)&&a.type=="rect";var g=a;for(var h in b)if(b[z](h))d[h]=b[h];if(e){d.path=mb(d.x,d.y,d.width,d.height,d.r);a.X=d.x;a.Y=d.y;a.W=d.width;a.H=d.height}b.href&&(c.href=b.href);b.title&&(c.title=b.title);b.target&&(c.target=b.target);b.cursor&&(f.cursor=b.cursor);"blur"in b&&a.blur(b.blur);if(b.path&&a.type=="path"||e)c.path=Gb(d.path);b.rotation!=null&&a.rotate(b.rotation,true);if(b.translation){e=D(b.translation)[G](V);
Aa.call(a,e[0],e[1]);if(a._.rt.cx!=null){a._.rt.cx+=+e[0];a._.rt.cy+=+e[1];a.setBox(a.attrs,e[0],e[1])}}if(b.scale){e=D(b.scale)[G](V);a.scale(+e[0]||1,+e[1]||+e[0]||1,+e[2]||null,+e[3]||null)}if("clip-rect"in b){e=D(b["clip-rect"])[G](V);if(e[o]==4){e[2]=+e[2]+ +e[0];e[3]=+e[3]+ +e[1];h=c.clipRect||C.createElement("div");var i=h.style,j=c.parentNode;i.clip=l.format("rect({1}px {2}px {3}px {0}px)",e);if(!c.clipRect){i.position="absolute";i.top=0;i.left=0;i.width=a.paper.width+"px";i.height=a.paper.height+
"px";j.parentNode.insertBefore(h,j);h[x](j);c.clipRect=h}}if(!b["clip-rect"])c.clipRect&&(c.clipRect.style.clip=A)}if(a.type=="image"&&b.src)c.src=b.src;if(a.type=="image"&&b.opacity){c.filterOpacity=Fa+".Alpha(opacity="+b.opacity*100+")";f.filter=(c.filterMatrix||A)+(c.filterOpacity||A)}b.font&&(f.font=b.font);b["font-family"]&&(f.fontFamily='"'+b["font-family"][G](",")[0][I](/^['"]+|['"]+$/g,A)+'"');b["font-size"]&&(f.fontSize=b["font-size"]);b["font-weight"]&&(f.fontWeight=b["font-weight"]);b["font-style"]&&
(f.fontStyle=b["font-style"]);if(b.opacity!=null||b["stroke-width"]!=null||b.fill!=null||b.stroke!=null||b["stroke-width"]!=null||b["stroke-opacity"]!=null||b["fill-opacity"]!=null||b["stroke-dasharray"]!=null||b["stroke-miterlimit"]!=null||b["stroke-linejoin"]!=null||b["stroke-linecap"]!=null){c=a.shape||c;f=c.getElementsByTagName(ca)&&c.getElementsByTagName(ca)[0];e=false;!f&&(e=f=S(ca));if("fill-opacity"in b||"opacity"in b){a=((+d["fill-opacity"]+1||2)-1)*((+d.opacity+1||2)-1)*((+l.getRGB(b.fill).o+
1||2)-1);a<0&&(a=0);a>1&&(a=1);f.opacity=a}b.fill&&(f.on=true);if(f.on==null||b.fill=="none")f.on=false;if(f.on&&b.fill)if(a=b.fill.match(Sa)){f.src=a[1];f.type="tile"}else{f.color=l.getRGB(b.fill).hex;f.src=A;f.type="solid";if(l.getRGB(b.fill).error&&(g.type in{circle:1,ellipse:1}||D(b.fill).charAt()!="r")&&pa(g,b.fill)){d.fill="none";d.gradient=b.fill}}e&&c[x](f);f=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0];e=false;!f&&(e=f=S("stroke"));if(b.stroke&&b.stroke!="none"||
b["stroke-width"]||b["stroke-opacity"]!=null||b["stroke-dasharray"]||b["stroke-miterlimit"]||b["stroke-linejoin"]||b["stroke-linecap"])f.on=true;(b.stroke=="none"||f.on==null||b.stroke==0||b["stroke-width"]==0)&&(f.on=false);a=l.getRGB(b.stroke);f.on&&b.stroke&&(f.color=a.hex);a=((+d["stroke-opacity"]+1||2)-1)*((+d.opacity+1||2)-1)*((+a.o+1||2)-1);h=(y(b["stroke-width"])||1)*0.75;a<0&&(a=0);a>1&&(a=1);b["stroke-width"]==null&&(h=d["stroke-width"]);b["stroke-width"]&&(f.weight=h);h&&h<1&&(a*=h)&&(f.weight=
1);f.opacity=a;b["stroke-linejoin"]&&(f.joinstyle=b["stroke-linejoin"]||"miter");f.miterlimit=b["stroke-miterlimit"]||8;b["stroke-linecap"]&&(f.endcap=b["stroke-linecap"]=="butt"?"flat":b["stroke-linecap"]=="square"?"square":"round");if(b["stroke-dasharray"]){a={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};f.dashstyle=a[z](b["stroke-dasharray"])?a[b["stroke-dasharray"]]:
A}e&&c[x](f)}if(g.type=="text"){f=g.paper.span.style;d.font&&(f.font=d.font);d["font-family"]&&(f.fontFamily=d["font-family"]);d["font-size"]&&(f.fontSize=d["font-size"]);d["font-weight"]&&(f.fontWeight=d["font-weight"]);d["font-style"]&&(f.fontStyle=d["font-style"]);g.node.string&&(g.paper.span.innerHTML=D(g.node.string)[I](/</g,"&#60;")[I](/&/g,"&#38;")[I](/\n/g,"<br>"));g.W=d.w=g.paper.span.offsetWidth;g.H=d.h=g.paper.span.offsetHeight;g.X=d.x;g.Y=d.y+Q(g.H/2);switch(d["text-anchor"]){case "start":g.node.style["v-text-align"]=
"left";g.bbx=Q(g.W/2);break;case "end":g.node.style["v-text-align"]="right";g.bbx=-Q(g.W/2);break;default:g.node.style["v-text-align"]="center";break}}};pa=function(a,b){a.attrs=a.attrs||{};var c="linear",d=".5 .5";a.attrs.gradient=b;b=D(b)[I](cb,function(i,j,m){c="radial";if(j&&m){j=y(j);m=y(m);E(j-0.5,2)+E(m-0.5,2)>0.25&&(m=v.sqrt(0.25-E(j-0.5,2))*((m>0.5)*2-1)+0.5);d=j+N+m}return A});b=b[G](/\s*\-\s*/);if(c=="linear"){var f=b.shift();f=-y(f);if(isNaN(f))return null}var e=Wa(b);if(!e)return null;
a=a.shape||a.node;b=a.getElementsByTagName(ca)[0]||S(ca);!b.parentNode&&a.appendChild(b);if(e[o]){b.on=true;b.method="none";b.color=e[0].color;b.color2=e[e[o]-1].color;a=[];for(var g=0,h=e[o];g<h;g++)e[g].offset&&a[F](e[g].offset+N+e[g].color);b.colors&&(b.colors.value=a[o]?a[R]():"0% "+b.color);if(c=="radial"){b.type="gradientradial";b.focus="100%";b.focussize=d;b.focusposition=d}else{b.type="gradient";b.angle=(270-f)%360}}return 1};s=function(a,b,c){this[0]=a;this.id=l._oid++;this.node=a;a.raphael=
this;this.Y=this.X=0;this.attrs={};this.Group=b;this.paper=c;this._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1};!c.bottom&&(c.bottom=this);(this.prev=c.top)&&(c.top.next=this);c.top=this;this.next=null};s[p].rotate=function(a,b,c){if(this.removed)return this;if(a==null){if(this._.rt.cx)return[this._.rt.deg,this._.rt.cx,this._.rt.cy][R](N);return this._.rt.deg}a=D(a)[G](V);if(a[o]-1){b=y(a[1]);c=y(a[2])}a=y(a[0]);if(b!=null)this._.rt.deg=a;else this._.rt.deg+=a;c==null&&(b=null);this._.rt.cx=b;this._.rt.cy=c;
this.setBox(this.attrs,b,c);this.Group.style.rotation=this._.rt.deg;return this};s[p].setBox=function(a,b,c){if(this.removed)return this;var d=this.Group.style,f=this.shape&&this.shape.style||this.node.style;a=a||{};for(var e in a)if(a[z](e))this.attrs[e]=a[e];b=b||this._.rt.cx;c=c||this._.rt.cy;var g=this.attrs,h;switch(this.type){case "circle":a=g.cx-g.r;e=g.cy-g.r;h=g=g.r*2;break;case "ellipse":a=g.cx-g.rx;e=g.cy-g.ry;h=g.rx*2;g=g.ry*2;break;case "image":a=+g.x;e=+g.y;h=g.width||0;g=g.height||
0;break;case "text":this.textpath.v=["m",Q(g.x),", ",Q(g.y-2),"l",Q(g.x)+1,", ",Q(g.y-2)][R](A);a=g.x-Q(this.W/2);e=g.y-this.H/2;h=this.W;g=this.H;break;case "rect":case "path":if(this.attrs.path){g=xa(this.attrs.path);a=g.x;e=g.y;h=g.width;g=g.height}else{e=a=0;h=this.paper.width;g=this.paper.height}break;default:e=a=0;h=this.paper.width;g=this.paper.height;break}b=b==null?a+h/2:b;c=c==null?e+g/2:c;b=b-this.paper.width/2;c=c-this.paper.height/2;var i;d.left!=(i=b+"px")&&(d.left=i);d.top!=(i=c+"px")&&
(d.top=i);this.X=ra[z](this.type)?-b:a;this.Y=ra[z](this.type)?-c:e;this.W=h;this.H=g;if(ra[z](this.type)){f.left!=(i=-b*na+"px")&&(f.left=i);f.top!=(i=-c*na+"px")&&(f.top=i)}else if(this.type=="text"){f.left!=(i=-b+"px")&&(f.left=i);f.top!=(i=-c+"px")&&(f.top=i)}else{d.width!=(i=this.paper.width+"px")&&(d.width=i);d.height!=(i=this.paper.height+"px")&&(d.height=i);f.left!=(i=a-b+"px")&&(f.left=i);f.top!=(i=e-c+"px")&&(f.top=i);f.width!=(i=h+"px")&&(f.width=i);f.height!=(i=g+"px")&&(f.height=i)}};
s[p].hide=function(){!this.removed&&(this.Group.style.display="none");return this};s[p].show=function(){!this.removed&&(this.Group.style.display="block");return this};s[p].getBBox=function(){if(this.removed)return this;if(ra[z](this.type))return xa(this.attrs.path);return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H}};s[p].remove=function(){if(!this.removed){ma(this,this.paper);this.node.parentNode.removeChild(this.node);this.Group.parentNode.removeChild(this.Group);this.shape&&this.shape.parentNode.removeChild(this.shape);
for(var a in this)delete this[a];this.removed=true}};s[p].attr=function(a,b){if(this.removed)return this;if(a==null){a={};for(var c in this.attrs)if(this.attrs[z](c))a[c]=this.attrs[c];this._.rt.deg&&(a.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(a.scale=this.scale());a.gradient&&a.fill=="none"&&(a.fill=a.gradient)&&delete a.gradient;return a}if(b==null&&l.is(a,ga)){if(a=="translation")return Aa.call(this);if(a=="rotation")return this.rotate();if(a=="scale")return this.scale();if(a==ca&&
this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;return this.attrs[a]}if(this.attrs&&b==null&&l.is(a,U)){var d={};c=0;for(b=a[o];c<b;c++)d[a[c]]=this.attr(a[c]);return d}if(b!=null){d={};d[a]=b}b==null&&l.is(a,"object")&&(d=a);if(d){if(d.text&&this.type=="text")this.node.string=d.text;ea(this,d);if(d.gradient&&({circle:1,ellipse:1}[z](this.type)||D(d.gradient).charAt()!="r"))pa(this,d.gradient);(!ra[z](this.type)||this._.rt.deg)&&this.setBox(this.attrs)}return this};s[p].toFront=
function(){!this.removed&&this.Group.parentNode[x](this.Group);this.paper.top!=this&&Ya(this,this.paper);return this};s[p].toBack=function(){if(this.removed)return this;if(this.Group.parentNode.firstChild!=this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild);Za(this,this.paper)}return this};s[p].insertAfter=function(a){if(this.removed)return this;if(a.constructor==X)a=a[a.length];a.Group.nextSibling?a.Group.parentNode.insertBefore(this.Group,a.Group.nextSibling):
a.Group.parentNode[x](this.Group);$a(this,a,this.paper);return this};s[p].insertBefore=function(a){if(this.removed)return this;if(a.constructor==X)a=a[0];a.Group.parentNode.insertBefore(this.Group,a.Group);ab(this,a,this.paper);return this};var Hb=/ progid:\S+Blur\([^\)]+\)/g;s[p].blur=function(a){var b=this.node.runtimeStyle,c=b.filter;c=c.replace(Hb,A);if(+a!==0){this.attrs.blur=a;b.filter=c+N+Fa+".Blur(pixelradius="+(+a||1.5)+")";b.margin=l.format("-{0}px 0 0 -{0}px",Q(+a||1.5))}else{b.filter=
c;b.margin=0;delete this.attrs.blur}};fb=function(a,b,c,d){var f=S("group"),e=S("oval");f.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";f.coordsize=qa;f.coordorigin=a.coordorigin;f[x](e);e=new s(e,f,a);e.type="circle";ea(e,{stroke:"#000",fill:"none"});e.attrs.cx=b;e.attrs.cy=c;e.attrs.r=d;e.setBox({x:b-d,y:c-d,width:d*2,height:d*2});a.canvas[x](f);return e};function mb(a,b,c,d,f){return f?l.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",
a+f,b,c-f*2,f,-f,d-f*2,f*2-c,f*2-d):l.format("M{0},{1}l{2},0,0,{3},{4},0z",a,b,c,d,-c)}gb=function(a,b,c,d,f,e){var g=mb(b,c,d,f,e);a=a.path(g);var h=a.attrs;a.X=h.x=b;a.Y=h.y=c;a.W=h.width=d;a.H=h.height=f;h.r=e;h.path=g;a.type="rect";return a};hb=function(a,b,c,d,f){var e=S("group"),g=S("oval");e.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";e.coordsize=qa;e.coordorigin=a.coordorigin;e[x](g);g=new s(g,e,a);g.type="ellipse";ea(g,{stroke:"#000"});g.attrs.cx=
b;g.attrs.cy=c;g.attrs.rx=d;g.attrs.ry=f;g.setBox({x:b-d,y:c-f,width:d*2,height:f*2});a.canvas[x](e);return g};ib=function(a,b,c,d,f,e){var g=S("group"),h=S("image");g.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";g.coordsize=qa;g.coordorigin=a.coordorigin;h.src=b;g[x](h);h=new s(h,g,a);h.type="image";h.attrs.src=b;h.attrs.x=c;h.attrs.y=d;h.attrs.w=f;h.attrs.h=e;h.setBox({x:c,y:d,width:f,height:e});a.canvas[x](g);return h};jb=function(a,b,c,d){var f=S("group"),
e=S("shape"),g=e.style,h=S("path"),i=S("textpath");f.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";f.coordsize=qa;f.coordorigin=a.coordorigin;h.v=l.format("m{0},{1}l{2},{1}",Q(b*10),Q(c*10),Q(b*10)+1);h.textpathok=true;g.width=a.width;g.height=a.height;i.string=D(d);i.on=true;e[x](i);e[x](h);f[x](e);g=new s(i,f,a);g.shape=e;g.textpath=h;g.type="text";g.attrs.text=d;g.attrs.x=b;g.attrs.y=c;g.attrs.w=1;g.attrs.h=1;ea(g,{font:ta.font,stroke:"none",fill:"#000"});
g.setBox();a.canvas[x](f);return g};kb=function(a,b){var c=this.canvas.style;a==+a&&(a+="px");b==+b&&(b+="px");c.width=a;c.height=b;c.clip="rect(0 "+a+" "+b+" 0)";return this};var S;C.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!C.namespaces.rvml&&C.namespaces.add("rvml","urn:schemas-microsoft-com:vml");S=function(a){return C.createElement("<rvml:"+a+' class="rvml">')}}catch(Pb){S=function(a){return C.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}Ca=
function(){var a=Xa[K](0,arguments),b=a.container,c=a.height,d=a.width,f=a.x;a=a.y;if(!b)throw new Error("VML container not found.");var e=new H,g=e.canvas=C.createElement("div"),h=g.style;f=f||0;a=a||0;d=d||512;c=c||342;d==+d&&(d+="px");c==+c&&(c+="px");e.width=1000;e.height=1000;e.coordsize=na*1000+N+na*1000;e.coordorigin="0 0";e.span=C.createElement("span");e.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";g[x](e.span);h.cssText=
l.format("width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",d,c);if(b==1){C.body[x](g);h.left=f+"px";h.top=a+"px";h.position="absolute"}else b.firstChild?b.insertBefore(g,b.firstChild):b[x](g);Ia.call(e,e,l.fn);return e};H[p].clear=function(){this.canvas.innerHTML=A;this.span=C.createElement("span");this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";this.canvas[x](this.span);this.bottom=
this.top=null};H[p].remove=function(){this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=bb(a);return true}}H[p].safari=navigator.vendor=="Apple Computer, Inc."&&(navigator.userAgent.match(/Version\/(.*?)\s/)[1]<4||aa.navigator.platform.slice(0,2)=="iP")?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});aa.setTimeout(function(){a.remove()})}:function(){};function Ib(){this.returnValue=false}function Jb(){return this.originalEvent.preventDefault()}
function Kb(){this.cancelBubble=true}function Lb(){return this.originalEvent.stopPropagation()}var Mb=function(){if(C.addEventListener)return function(a,b,c,d){var f=Da&&Ea[b]?Ea[b]:b;function e(g){if(Da&&Ea[z](b))for(var h=0,i=g.targetTouches&&g.targetTouches.length;h<i;h++)if(g.targetTouches[h].target==a){i=g;g=g.targetTouches[h];g.originalEvent=i;g.preventDefault=Jb;g.stopPropagation=Lb;break}return c.call(d,g)}a.addEventListener(f,e,false);return function(){a.removeEventListener(f,e,false);return true}};
else if(C.attachEvent)return function(a,b,c,d){function f(g){g=g||aa.event;g.preventDefault=g.preventDefault||Ib;g.stopPropagation=g.stopPropagation||Kb;return c.call(d,g)}a.attachEvent("on"+b,f);function e(){a.detachEvent("on"+b,f);return true}return e}}(),$=[];function Ka(a){for(var b=a.clientX,c=a.clientY,d,f=$.length;f--;){d=$[f];if(Da)for(var e=a.touches.length,g;e--;){g=a.touches[e];if(g.identifier==d.el._drag.id){b=g.clientX;c=g.clientY;(a.originalEvent?a.originalEvent:a).preventDefault();
break}}else a.preventDefault();d.move&&d.move.call(d.el,b-d.el._drag.x,c-d.el._drag.y,b,c)}}function La(){l.unmousemove(Ka).unmouseup(La);for(var a=$.length,b;a--;){b=$[a];b.el._drag={};b.end&&b.end.call(b.el)}$=[]}for(da=Ra[o];da--;)(function(a){l[a]=s[p][a]=function(b){if(l.is(b,"function")){this.events=this.events||[];this.events.push({name:a,f:b,unbind:Mb(this.shape||this.node||C,a,b,this)})}return this};l["un"+a]=s[p]["un"+a]=function(b){for(var c=this.events,d=c[o];d--;)if(c[d].name==a&&c[d].f==
b){c[d].unbind();c.splice(d,1);!c.length&&delete this.events;return this}return this}})(Ra[da]);s[p].hover=function(a,b){return this.mouseover(a).mouseout(b)};s[p].unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};s[p].drag=function(a,b,c){this._drag={};this.mousedown(function(d){(d.originalEvent||d).preventDefault();this._drag.x=d.clientX;this._drag.y=d.clientY;this._drag.id=d.identifier;b&&b.call(this,d.clientX,d.clientY);!$.length&&l.mousemove(Ka).mouseup(La);$.push({el:this,move:a,
end:c})});return this};s[p].undrag=function(a,b,c){for(b=$.length;b--;){$[b].el==this&&$[b].move==a&&$[b].end==c&&$.splice(b,1);!$.length&&l.unmousemove(Ka).unmouseup(La)}};H[p].circle=function(a,b,c){return fb(this,a||0,b||0,c||0)};H[p].rect=function(a,b,c,d,f){return gb(this,a||0,b||0,c||0,d||0,f||0)};H[p].ellipse=function(a,b,c,d){return hb(this,a||0,b||0,c||0,d||0)};H[p].path=function(a){a&&!l.is(a,ga)&&!l.is(a[0],U)&&(a+=A);return db(l.format[K](l,arguments),this)};H[p].image=function(a,b,c,
d,f){return ib(this,a||"about:blank",b||0,c||0,d||0,f||0)};H[p].text=function(a,b,c){return jb(this,a||0,b||0,c||A)};H[p].set=function(a){arguments[o]>1&&(a=Array[p].splice.call(arguments,0,arguments[o]));return new X(a)};H[p].setSize=kb;H[p].top=H[p].bottom=null;H[p].raphael=l;function nb(){return this.x+N+this.y}s[p].resetScale=function(){if(this.removed)return this;this._.sx=1;this._.sy=1;this.attrs.scale="1 1"};s[p].scale=function(a,b,c,d){if(this.removed)return this;if(a==null&&b==null)return{x:this._.sx,
y:this._.sy,toString:nb};b=b||a;!+b&&(b=a);var f,e,g=this.attrs;if(a!=0){var h=this.getBBox(),i=h.x+h.width/2,j=h.y+h.height/2;f=a/this._.sx;e=b/this._.sy;c=+c||c==0?c:i;d=+d||d==0?d:j;h=~~(a/v.abs(a));var m=~~(b/v.abs(b)),n=this.node.style,r=c+(i-c)*f;j=d+(j-d)*e;switch(this.type){case "rect":case "image":var q=g.width*h*f,k=g.height*m*e;this.attr({height:k,r:g.r*ba(h*f,m*e),width:q,x:r-q/2,y:j-k/2});break;case "circle":case "ellipse":this.attr({rx:g.rx*h*f,ry:g.ry*m*e,r:g.r*ba(h*f,m*e),cx:r,cy:j});
break;case "text":this.attr({x:r,y:j});break;case "path":i=Ha(g.path);for(var t=true,L=0,B=i[o];L<B;L++){var w=i[L],J=sa.call(w[0]);if(!(J=="M"&&t)){t=false;if(J=="A"){w[i[L][o]-2]*=f;w[i[L][o]-1]*=e;w[1]*=h*f;w[2]*=m*e;w[5]=+!(h+m?!+w[5]:+w[5])}else if(J=="H"){J=1;for(var ia=w[o];J<ia;J++)w[J]*=f}else if(J=="V"){J=1;for(ia=w[o];J<ia;J++)w[J]*=e}else{J=1;for(ia=w[o];J<ia;J++)w[J]*=J%2?f:e}}}e=xa(i);f=r-e.x-e.width/2;e=j-e.y-e.height/2;i[0][1]+=f;i[0][2]+=e;this.attr({path:i});break}if(this.type in
{text:1,image:1}&&(h!=1||m!=1))if(this.transformations){this.transformations[2]="scale("[M](h,",",m,")");this.node[W]("transform",this.transformations[R](N));f=h==-1?-g.x-(q||0):g.x;e=m==-1?-g.y-(k||0):g.y;this.attr({x:f,y:e});g.fx=h-1;g.fy=m-1}else{this.node.filterMatrix=Fa+".Matrix(M11="[M](h,", M12=0, M21=0, M22=",m,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");n.filter=(this.node.filterMatrix||A)+(this.node.filterOpacity||A)}else if(this.transformations){this.transformations[2]=
A;this.node[W]("transform",this.transformations[R](N));g.fx=0;g.fy=0}else{this.node.filterMatrix=A;n.filter=(this.node.filterMatrix||A)+(this.node.filterOpacity||A)}g.scale=[a,b,c,d][R](N);this._.sx=a;this._.sy=b}return this};s[p].clone=function(){if(this.removed)return null;var a=this.attr();delete a.scale;delete a.translation;return this.paper[this.type]().attr(a)};var ob=Z(function(a,b,c,d,f,e,g,h,i){for(var j=0,m,n=0;n<1.01;n+=0.01){var r=la(a,b,c,d,f,e,g,h,n);n&&(j+=E(E(m.x-r.x,2)+E(m.y-r.y,
2),0.5));if(j>=i)return r;m=r}});function Ma(a,b){return function(c,d,f){c=wa(c);for(var e,g,h,i,j="",m={},n=0,r=0,q=c.length;r<q;r++){h=c[r];if(h[0]=="M"){e=+h[1];g=+h[2]}else{i=Nb(e,g,h[1],h[2],h[3],h[4],h[5],h[6]);if(n+i>d){if(b&&!m.start){e=ob(e,g,h[1],h[2],h[3],h[4],h[5],h[6],d-n);j+=["C",e.start.x,e.start.y,e.m.x,e.m.y,e.x,e.y];if(f)return j;m.start=j;j=["M",e.x,e.y+"C",e.n.x,e.n.y,e.end.x,e.end.y,h[5],h[6]][R]();n+=i;e=+h[5];g=+h[6];continue}if(!a&&!b){e=ob(e,g,h[1],h[2],h[3],h[4],h[5],h[6],
d-n);return{x:e.x,y:e.y,alpha:e.alpha}}}n+=i;e=+h[5];g=+h[6]}j+=h}m.end=j;e=a?n:b?m:l.findDotsAtSegment(e,g,h[1],h[2],h[3],h[4],h[5],h[6],1);e.alpha&&(e={x:e.x,y:e.y,alpha:e.alpha});return e}}var Nb=Z(function(a,b,c,d,f,e,g,h){for(var i={x:0,y:0},j=0,m=0;m<1.01;m+=0.01){var n=la(a,b,c,d,f,e,g,h,m);m&&(j+=E(E(i.x-n.x,2)+E(i.y-n.y,2),0.5));i=n}return j}),pb=Ma(1),Ba=Ma(),Na=Ma(0,1);s[p].getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return pb(this.attrs.path)}};
s[p].getPointAtLength=function(a){if(this.type=="path"){if(this.node.getPointAtLength)return this.node.getPointAtLength(a);return Ba(this.attrs.path,a)}};s[p].getSubpath=function(a,b){if(this.type=="path"){if(v.abs(this.getTotalLength()-b)<1.0E-6)return Na(this.attrs.path,a).end;b=Na(this.attrs.path,b,1);return a?Na(b,a).end:b}};l.easing_formulas={linear:function(a){return a},"<":function(a){return E(a,3)},">":function(a){return E(a-1,3)+1},"<>":function(a){a*=2;if(a<1)return E(a,3)/2;a-=2;return(E(a,
3)+2)/2},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==0||a==1)return a;var b=0.3,c=b/4;return E(2,-10*a)*v.sin((a-c)*2*v.PI/b)+1},bounce:function(a){var b=7.5625,c=2.75;if(a<1/c)a=b*a*a;else if(a<2/c){a-=1.5/c;a=b*a*a+0.75}else if(a<2.5/c){a-=2.25/c;a=b*a*a+0.9375}else{a-=2.625/c;a=b*a*a+0.984375}return a}};var T={length:0};function qb(){var a=+new Date;for(var b in T)if(b!="length"&&T[z](b)){var c=
T[b];if(c.stop||c.el.removed){delete T[b];T[o]--}else{var d=a-c.start,f=c.ms,e=c.easing,g=c.from,h=c.diff,i=c.to,j=c.t,m=c.prev||0,n=c.el,r=c.callback,q={},k;if(d<f){r=l.easing_formulas[e]?l.easing_formulas[e](d/f):d/f;for(var t in g)if(g[z](t)){switch(Ga[t]){case "along":k=r*f*h[t];i.back&&(k=i.len-k);e=Ba(i[t],k);n.translate(h.sx-h.x||0,h.sy-h.y||0);h.x=e.x;h.y=e.y;n.translate(e.x-h.sx,e.y-h.sy);i.rot&&n.rotate(h.r+e.alpha,e.x,e.y);break;case P:k=+g[t]+r*f*h[t];break;case "colour":k="rgb("+[Oa(Q(g[t].r+
r*f*h[t].r)),Oa(Q(g[t].g+r*f*h[t].g)),Oa(Q(g[t].b+r*f*h[t].b))][R](",")+")";break;case "path":k=[];e=0;for(var L=g[t][o];e<L;e++){k[e]=[g[t][e][0]];for(var B=1,w=g[t][e][o];B<w;B++)k[e][B]=+g[t][e][B]+r*f*h[t][e][B];k[e]=k[e][R](N)}k=k[R](N);break;case "csv":switch(t){case "translation":k=h[t][0]*(d-m);e=h[t][1]*(d-m);j.x+=k;j.y+=e;k=k+N+e;break;case "rotation":k=+g[t][0]+r*f*h[t][0];g[t][1]&&(k+=","+g[t][1]+","+g[t][2]);break;case "scale":k=[+g[t][0]+r*f*h[t][0],+g[t][1]+r*f*h[t][1],2 in i[t]?i[t][2]:
A,3 in i[t]?i[t][3]:A][R](N);break;case "clip-rect":k=[];for(e=4;e--;)k[e]=+g[t][e]+r*f*h[t][e];break}break}q[t]=k}n.attr(q);n._run&&n._run.call(n)}else{if(i.along){e=Ba(i.along,i.len*!i.back);n.translate(h.sx-(h.x||0)+e.x-h.sx,h.sy-(h.y||0)+e.y-h.sy);i.rot&&n.rotate(h.r+e.alpha,e.x,e.y)}(j.x||j.y)&&n.translate(-j.x,-j.y);i.scale&&(i.scale+=A);n.attr(i);delete T[b];T[o]--;n.in_animation=null;l.is(r,"function")&&r.call(n)}c.prev=d}}l.svg&&n&&n.paper&&n.paper.safari();T[o]&&aa.setTimeout(qb)}function Oa(a){return Y(ba(a,
255),0)}function Aa(a,b){if(a==null)return{x:this._.tx,y:this._.ty,toString:nb};this._.tx+=+a;this._.ty+=+b;switch(this.type){case "circle":case "ellipse":this.attr({cx:+a+this.attrs.cx,cy:+b+this.attrs.cy});break;case "rect":case "image":case "text":this.attr({x:+a+this.attrs.x,y:+b+this.attrs.y});break;case "path":var c=Ha(this.attrs.path);c[0][1]+=+a;c[0][2]+=+b;this.attr({path:c});break}return this}s[p].animateWith=function(a,b,c,d,f){T[a.id]&&(b.start=T[a.id].start);return this.animate(b,c,d,
f)};s[p].animateAlong=rb();s[p].animateAlongBack=rb(1);function rb(a){return function(b,c,d,f){var e={back:a};l.is(d,"function")?(f=d):(e.rot=d);b&&b.constructor==s&&(b=b.attrs.path);b&&(e.along=b);return this.animate(e,c,f)}}s[p].onAnimation=function(a){this._run=a||0;return this};s[p].animate=function(a,b,c,d){if(l.is(c,"function")||!c)d=c||null;var f={},e={},g={};for(var h in a)if(a[z](h))if(Ga[z](h)){f[h]=this.attr(h);f[h]==null&&(f[h]=ta[h]);e[h]=a[h];switch(Ga[h]){case "along":var i=pb(a[h]),
j=Ba(a[h],i*!!a.back),m=this.getBBox();g[h]=i/b;g.tx=m.x;g.ty=m.y;g.sx=j.x;g.sy=j.y;e.rot=a.rot;e.back=a.back;e.len=i;a.rot&&(g.r=y(this.rotate())||0);break;case P:g[h]=(e[h]-f[h])/b;break;case "colour":f[h]=l.getRGB(f[h]);i=l.getRGB(e[h]);g[h]={r:(i.r-f[h].r)/b,g:(i.g-f[h].g)/b,b:(i.b-f[h].b)/b};break;case "path":i=wa(f[h],e[h]);f[h]=i[0];j=i[1];g[h]=[];i=0;for(m=f[h][o];i<m;i++){g[h][i]=[0];for(var n=1,r=f[h][i][o];n<r;n++)g[h][i][n]=(j[i][n]-f[h][i][n])/b}break;case "csv":j=D(a[h])[G](V);i=D(f[h])[G](V);
switch(h){case "translation":f[h]=[0,0];g[h]=[j[0]/b,j[1]/b];break;case "rotation":f[h]=i[1]==j[1]&&i[2]==j[2]?i:[0,j[1],j[2]];g[h]=[(j[0]-f[h][0])/b,0,0];break;case "scale":a[h]=j;f[h]=D(f[h])[G](V);g[h]=[(j[0]-f[h][0])/b,(j[1]-f[h][1])/b,0,0];break;case "clip-rect":f[h]=D(f[h])[G](V);g[h]=[];for(i=4;i--;)g[h][i]=(j[i]-f[h][i])/b;break}e[h]=j}}this.stop();this.in_animation=1;T[this.id]={start:a.start||+new Date,ms:b,easing:c,from:f,diff:g,to:e,el:this,callback:d,t:{x:0,y:0}};++T[o]==1&&qb();return this};
s[p].stop=function(){T[this.id]&&T[o]--;delete T[this.id];return this};s[p].translate=function(a,b){return this.attr({translation:a+" "+b})};s[p][O]=function(){return"Rapha\u00ebl\u2019s object"};l.ae=T;function X(a){this.items=[];this[o]=0;this.type="set";if(a)for(var b=0,c=a[o];b<c;b++)if(a[b]&&(a[b].constructor==s||a[b].constructor==X)){this[this.items[o]]=this.items[this.items[o]]=a[b];this[o]++}}X[p][F]=function(){for(var a,b,c=0,d=arguments[o];c<d;c++)if((a=arguments[c])&&(a.constructor==s||
a.constructor==X)){b=this.items[o];this[b]=this.items[b]=a;this[o]++}return this};X[p].pop=function(){delete this[this[o]--];return this.items.pop()};for(var Pa in s[p])if(s[p][z](Pa))X[p][Pa]=function(a){return function(){for(var b=0,c=this.items[o];b<c;b++)this.items[b][a][K](this.items[b],arguments);return this}}(Pa);X[p].attr=function(a,b){if(a&&l.is(a,U)&&l.is(a[0],"object")){b=0;for(var c=a[o];b<c;b++)this.items[b].attr(a[b])}else{c=0;for(var d=this.items[o];c<d;c++)this.items[c].attr(a,b)}return this};
X[p].animate=function(a,b,c,d){(l.is(c,"function")||!c)&&(d=c||null);var f=this.items[o],e=f,g,h=this,i;d&&(i=function(){!--f&&d.call(h)});c=l.is(c,ga)?c:i;for(g=this.items[--e].animate(a,b,c,i);e--;)this.items[e].animateWith(g,a,b,c,i);return this};X[p].insertAfter=function(a){for(var b=this.items[o];b--;)this.items[b].insertAfter(a);return this};X[p].getBBox=function(){for(var a=[],b=[],c=[],d=[],f=this.items[o];f--;){var e=this.items[f].getBBox();a[F](e.x);b[F](e.y);c[F](e.x+e.width);d[F](e.y+
e.height)}a=ba[K](0,a);b=ba[K](0,b);return{x:a,y:b,width:Y[K](0,c)-a,height:Y[K](0,d)-b}};X[p].clone=function(a){a=new X;for(var b=0,c=this.items[o];b<c;b++)a[F](this.items[b].clone());return a};l.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)if(a.face[z](d))b.face[d]=a.face[d];if(this.fonts[c])this.fonts[c][F](b);else this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=ha(a.face["units-per-em"],10);
for(var f in a.glyphs)if(a.glyphs[z](f)){c=a.glyphs[f];b.glyphs[f]={w:c.w,k:{},d:c.d&&"M"+c.d[I](/[mlcxtrv]/g,function(g){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[g]||"M"})+"z"};if(c.k)for(var e in c.k)if(c[z](e))b.glyphs[f].k[e]=c.k[e]}}return a};H[p].getFont=function(a,b,c,d){d=d||"normal";c=c||"normal";b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400;if(l.fonts){var f=l.fonts[a];if(!f){a=new RegExp("(^|\\s)"+a[I](/[^\w\d\s+!~.:_-]/g,A)+"(\\s|$)","i");for(var e in l.fonts)if(l.fonts[z](e))if(a.test(e)){f=
l.fonts[e];break}}var g;if(f){e=0;for(a=f[o];e<a;e++){g=f[e];if(g.face["font-weight"]==b&&(g.face["font-style"]==c||!g.face["font-style"])&&g.face["font-stretch"]==d)break}}return g}};H[p].print=function(a,b,c,d,f,e){e=e||"middle";var g=this.set(),h=D(c)[G](A),i=0;l.is(d,c)&&(d=this.getFont(d));if(d){c=(f||16)/d.face["units-per-em"];var j=d.face.bbox.split(V);f=+j[0];e=+j[1]+(e=="baseline"?j[3]-j[1]+ +d.face.descent:(j[3]-j[1])/2);j=0;for(var m=h[o];j<m;j++){var n=j&&d.glyphs[h[j-1]]||{},r=d.glyphs[h[j]];
i+=j?(n.w||d.w)+(n.k&&n.k[h[j]]||0):0;r&&r.d&&g[F](this.path(r.d).attr({fill:"#000",stroke:"none",translation:[i,0]}))}g.scale(c,c,f,e).translate(a-f,b-e)}return g};var Ob=/\{(\d+)\}/g;l.format=function(a,b){var c=l.is(b,U)?[0][M](b):arguments;a&&l.is(a,ga)&&c[o]-1&&(a=a[I](Ob,function(d,f){return c[++f]==null?A:c[f]}));return a||A};l.ninja=function(){Qa.was?(Raphael=Qa.is):delete Raphael;return l};l.el=s[p];return l}();

(function() {

    window.webscenator = { };

})();

(function() {

    window.webscenator.ui = { };

})();

(function() {

    webscenator.ui.icons = {
        play: 'M15 14L38 24L15 34Z',
        rewind: 'M33 14L33 34M29 34L29 14L12 24Z',
        pause: 'M15 14L21 14L21 34L15 34Z M27 14L33 14L33 34L27 34Z'
    };

})();

(function($) {
    $.fn.button = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('Button'),
                args,
                action;

            if (!obj) return $().eq(-1);

            action = obj[options];

            if (typeof action === 'function') {
                args = Array.prototype.slice.call(arguments, 1);

                return action.apply(obj, args);
            } else {
                return $().eq(-1);
            }
        }

        options = $.extend($.fn.button.defaults, options);

        return this.each(function() {
            var $self = $(this),
                model = {
                    init: function(el) {
                        var self = this;

                        this.$context = el;
                        this.paper = Raphael(el.get(0), 48,48);
                        this.actors = this.paper.set();
                        this.circle = this.paper.circle(24, 24, 20);
                        this.icon = this.paper.path(options.icon);
                        this.$svg = $(this.paper.canvas);
                        this.options = options;

                        this.actors.push(
                            this.circle,
                            this.icon);

                        this.circle.attr('fill', '#000');
                        this.icon.attr('stroke-linejoin', 'round');
                        this.icon.attr('stroke-linecap', 'round');
                        this.actors.attr('fill-opacity', 0);
                        this.actors.attr('stroke-width', 3);
                        this.actors.attr('stroke', this.options.color);

                        this.$svg.css('cursor', 'pointer');
                        this.$svg.bind('mouseover.Button', function(event) {
                            self.actors.stop();
                            self.actors.animate({ 'stroke': self.options.hoverColor }, 1000, '>');
                        });
                        this.$svg.bind('mouseout.Button', function(event) {
                            self.actors.stop();
                            self.actors.animate({ 'stroke': self.options.color }, 1000, '>');
                        });
                        this.$svg.bind('click.Button', function() {
                            self.actors.stop();
                            self.actors.animate({ 'stroke': self.options.clickColor }, 500, '>');
                        });
                    },

                    destroy: function() {
                        this.$svg.unbind('.Button');
                    }
                };

            $self.data('Button', model);
            model.init($self);
        });

    };

    $.fn.button.defaults = {
        hoverColor: '#19f0fc',
        color: '#252525',
        clickColor: '#fff',
        icon: webscenator.ui.icons.rewind
    };

})(jQuery);
/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 *
 * Dual licensed under the MIT and GPL licenses
 *
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.call(cal, col, HSBToHex(col), HSBToRGB(col));
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			},
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			},
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {

				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);
/**
 *
 * Zoomimage
 * Author: Stefan Petre www.eyecon.ro
 *
 */
(function($){
	var EYE = window.EYE = function() {
		var _registered = {
			init: []
		};
		return {
			init: function() {
				$.each(_registered.init, function(nr, fn){
					fn.call();
				});
			},
			extend: function(prop) {
				for (var i in prop) {
					if (prop[i] != undefined) {
						this[i] = prop[i];
					}
				}
			},
			register: function(fn, type) {
				if (!_registered[type]) {
					_registered[type] = [];
				}
				_registered[type].push(fn);
			}
		};
	}();
	$(EYE.init);
})(jQuery);
/**
 *
 * Utilities
 * Author: Stefan Petre www.eyecon.ro
 *
 */
(function($) {
EYE.extend({
	getPosition : function(e, forceIt)
	{
		var x = 0;
		var y = 0;
		var es = e.style;
		var restoreStyles = false;
		if (forceIt && jQuery.curCSS(e,'display') == 'none') {
			var oldVisibility = es.visibility;
			var oldPosition = es.position;
			restoreStyles = true;
			es.visibility = 'hidden';
			es.display = 'block';
			es.position = 'absolute';
		}
		var el = e;
		if (el.getBoundingClientRect) { // IE
			var box = el.getBoundingClientRect();
			x = box.left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) - 2;
			y = box.top + Math.max(document.documentElement.scrollTop, document.body.scrollTop) - 2;
		} else {
			x = el.offsetLeft;
			y = el.offsetTop;
			el = el.offsetParent;
			if (e != el) {
				while (el) {
					x += el.offsetLeft;
					y += el.offsetTop;
					el = el.offsetParent;
				}
			}
			if (jQuery.browser.safari && jQuery.curCSS(e, 'position') == 'absolute' ) {
				x -= document.body.offsetLeft;
				y -= document.body.offsetTop;
			}
			el = e.parentNode;
			while (el && el.tagName.toUpperCase() != 'BODY' && el.tagName.toUpperCase() != 'HTML')
			{
				if (jQuery.curCSS(el, 'display') != 'inline') {
					x -= el.scrollLeft;
					y -= el.scrollTop;
				}
				el = el.parentNode;
			}
		}
		if (restoreStyles == true) {
			es.display = 'none';
			es.position = oldPosition;
			es.visibility = oldVisibility;
		}
		return {x:x, y:y};
	},
	getSize : function(e)
	{
		var w = parseInt(jQuery.curCSS(e,'width'), 10);
		var h = parseInt(jQuery.curCSS(e,'height'), 10);
		var wb = 0;
		var hb = 0;
		if (jQuery.curCSS(e, 'display') != 'none') {
			wb = e.offsetWidth;
			hb = e.offsetHeight;
		} else {
			var es = e.style;
			var oldVisibility = es.visibility;
			var oldPosition = es.position;
			es.visibility = 'hidden';
			es.display = 'block';
			es.position = 'absolute';
			wb = e.offsetWidth;
			hb = e.offsetHeight;
			es.display = 'none';
			es.position = oldPosition;
			es.visibility = oldVisibility;
		}
		return {w:w, h:h, wb:wb, hb:hb};
	},
	getClient : function(e)
	{
		var h, w;
		if (e) {
			w = e.clientWidth;
			h = e.clientHeight;
		} else {
			var de = document.documentElement;
			w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
			h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
		}
		return {w:w,h:h};
	},
	getScroll : function (e)
	{
		var t=0, l=0, w=0, h=0, iw=0, ih=0;
		if (e && e.nodeName.toLowerCase() != 'body') {
			t = e.scrollTop;
			l = e.scrollLeft;
			w = e.scrollWidth;
			h = e.scrollHeight;
		} else  {
			if (document.documentElement) {
				t = document.documentElement.scrollTop;
				l = document.documentElement.scrollLeft;
				w = document.documentElement.scrollWidth;
				h = document.documentElement.scrollHeight;
			} else if (document.body) {
				t = document.body.scrollTop;
				l = document.body.scrollLeft;
				w = document.body.scrollWidth;
				h = document.body.scrollHeight;
			}
			if (typeof pageYOffset != 'undefined') {
				t = pageYOffset;
				l = pageXOffset;
			}
			iw = self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
			ih = self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
		}
		return { t: t, l: l, w: w, h: h, iw: iw, ih: ih };
	},
	getMargins : function(e, toInteger)
	{
		var t = jQuery.curCSS(e,'marginTop') || '';
		var r = jQuery.curCSS(e,'marginRight') || '';
		var b = jQuery.curCSS(e,'marginBottom') || '';
		var l = jQuery.curCSS(e,'marginLeft') || '';
		if (toInteger)
			return {
				t: parseInt(t, 10)||0,
				r: parseInt(r, 10)||0,
				b: parseInt(b, 10)||0,
				l: parseInt(l, 10)
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getPadding : function(e, toInteger)
	{
		var t = jQuery.curCSS(e,'paddingTop') || '';
		var r = jQuery.curCSS(e,'paddingRight') || '';
		var b = jQuery.curCSS(e,'paddingBottom') || '';
		var l = jQuery.curCSS(e,'paddingLeft') || '';
		if (toInteger)
			return {
				t: parseInt(t, 10)||0,
				r: parseInt(r, 10)||0,
				b: parseInt(b, 10)||0,
				l: parseInt(l, 10)
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getBorder : function(e, toInteger)
	{
		var t = jQuery.curCSS(e,'borderTopWidth') || '';
		var r = jQuery.curCSS(e,'borderRightWidth') || '';
		var b = jQuery.curCSS(e,'borderBottomWidth') || '';
		var l = jQuery.curCSS(e,'borderLeftWidth') || '';
		if (toInteger)
			return {
				t: parseInt(t, 10)||0,
				r: parseInt(r, 10)||0,
				b: parseInt(b, 10)||0,
				l: parseInt(l, 10)||0
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	traverseDOM : function(nodeEl, func)
	{
		func(nodeEl);
		nodeEl = nodeEl.firstChild;
		while(nodeEl){
			EYE.traverseDOM(nodeEl, func);
			nodeEl = nodeEl.nextSibling;
		}
	},
	getInnerWidth :  function(el, scroll) {
		var offsetW = el.offsetWidth;
		return scroll ? Math.max(el.scrollWidth,offsetW) - offsetW + el.clientWidth:el.clientWidth;
	},
	getInnerHeight : function(el, scroll) {
		var offsetH = el.offsetHeight;
		return scroll ? Math.max(el.scrollHeight,offsetH) - offsetH + el.clientHeight:el.clientHeight;
	},
	getExtraWidth : function(el) {
		if($.boxModel)
			return (parseInt($.curCSS(el, 'paddingLeft'))||0)
				+ (parseInt($.curCSS(el, 'paddingRight'))||0)
				+ (parseInt($.curCSS(el, 'borderLeftWidth'))||0)
				+ (parseInt($.curCSS(el, 'borderRightWidth'))||0);
		return 0;
	},
	getExtraHeight : function(el) {
		if($.boxModel)
			return (parseInt($.curCSS(el, 'paddingTop'))||0)
				+ (parseInt($.curCSS(el, 'paddingBottom'))||0)
				+ (parseInt($.curCSS(el, 'borderTopWidth'))||0)
				+ (parseInt($.curCSS(el, 'borderBottomWidth'))||0);
		return 0;
	},
	isChildOf: function(parentEl, el, container) {
		if (parentEl == el) {
			return true;
		}
		if (!el || !el.nodeType || el.nodeType != 1) {
			return false;
		}
		if (parentEl.contains && !$.browser.safari) {
			return parentEl.contains(el);
		}
		if ( parentEl.compareDocumentPosition ) {
			return !!(parentEl.compareDocumentPosition(el) & 16);
		}
		var prEl = el.parentNode;
		while(prEl && prEl != container) {
			if (prEl == parentEl)
				return true;
			prEl = prEl.parentNode;
		}
		return false;
	},
	centerEl : function(el, axis)
	{
		var clientScroll = EYE.getScroll();
		var size = EYE.getSize(el);
		if (!axis || axis == 'vertically')
			$(el).css(
				{
					top: clientScroll.t + ((Math.min(clientScroll.h,clientScroll.ih) - size.hb)/2) + 'px'
				}
			);
		if (!axis || axis == 'horizontally')
			$(el).css(
				{
					left: clientScroll.l + ((Math.min(clientScroll.w,clientScroll.iw) - size.wb)/2) + 'px'
				}
			);
	}
});
if (!$.easing.easeout) {
	$.easing.easeout = function(p, n, firstNum, delta, duration) {
		return -delta * ((n=n/duration-1)*n*n*n - 1) + firstNum;
	};
}

})(jQuery);


(function($) {

    $.fn.colorPicker = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('ColorPicker'),
                args,
                action;

            if (!obj) return $().eq(-1);

            action = obj[options];

            if (typeof action === 'function') {
                args = Array.prototype.slice.call(arguments, 1);

                return action.apply(obj, args);
            } else {
                return $().eq(-1);
            }
        }

        options = $.extend($.fn.colorPicker.defaults, options);

        return this.each(function() {
            var $self = $(this),
                model = {
                    init: function(el) {
                        var self = this;

                        this.$context = el;
                        this.$opacity = this.$context.find(options.opacitySelector);
                        this.$transparencyViewer = $self.find(options.transparencyViewerSelector);
                        this.$colorPreview = $self.find(options.colorPreviewSelector);
                        this.selectedColor = Object.create(theater.Color);
                        this.selectedColor.init(0, 0, 255, this.opacity());

                        this.$transparencyViewer.css('opacity', this.opacity());

                        this.$transparencyViewer.css('backgroundColor', this.selectedColor.toHexString());

                        this.$opacity.bind('change.ColorPicker', function() {
                            self.$transparencyViewer.css('opacity', self.$opacity.val());
                            self.triggerColorChanged.call(self);
                        });

                        this.$context.find(options.colorPickerSelector).ColorPicker({
                            color: options.color,
                            onShow: function (el) {
                                $(el).fadeIn('fast');
                                return false;
                            },
                            onHide: function (el) {
                                $(el).fadeOut('fast');
                                return false;
                            },
                            onChange: function (hsb, hex, rgb) {
                                var color = Object.create(theater.Color),
                                    opacity = self.opacity();

                                color.init(rgb.r, rgb.g, rgb.b, opacity);

                                self.selectedColor = color;
                                self.$transparencyViewer.css('backgroundColor', '#' + hex);
                                self.triggerColorChanged.call(self);
                            }
                        });

                    },

                    triggerColorChanged: function() {
                        this.$context.trigger('ColorChanged', [ { newColor: this.color() } ]);
                    },

                    opacity: function() {
                        return parseFloat(this.$opacity.val());
                    },

                    color: function() {
                        return this.selectedColor;
                    },

                    destroy: function() {
                        this.$opacity.unbind('.ColorPicker');
                    }
                };

                model.init($self);
                $self.data('ColorPicker', model);

        });

    };

    $.fn.colorPicker.defaults = {
        title: '',
        color: '#0000ff',
        colorPickerSelector: '.color-picker',
        opacitySelector: '.opacity',
        colorPreviewSelector: 'div.color-preview',
        transparencyViewerSelector: 'div.transparency-viewer'
    };

    $.colorPicker = function(color, options) {
        options = $.extend($.fn.colorPicker.defaults, options);
        options.color = color.toHexString();

        var $container = $('<div></div>')
                            .addClass('rgba-picker'),
            $title = $('<span></span>')
                        .addClass('property-label')
                        .text(options.title),
            $transparencyBackground = $('<div></div>')
                                    .addClass('transparency-background'),
            $transparencyViewer = $('<div></div>').addClass('transparency-viewer')
                                    .css('background-color', color.toHexString())
                                    .css('opacity', color.alpha),
            $colorPreview = $('<div></div>')
                            .addClass('color-preview'),
            $colorPicker = $('<div></div>')
                            .addClass('color-picker'),
            $opacity = $('<input></input>')
                        .addClass('opacity')
                        .addClass('property-value')
                        .attr('type', 'text')
                        .val(color.alpha);

        return $container
                .append($title)
                .append($colorPicker
                        .append($transparencyBackground
                            .append($transparencyViewer)
                            .append($colorPreview)))
                .append($opacity)
                .colorPicker(options);
    };

})(jQuery);
/**
 * Chain.js
 * jQuery Plugin for Data Binding
 *
 * Copyright (c) 2008 Rizqi Ahmad
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* core.js */
(function($){

/**
 * Chain Namespace
 *
 * @alias jQuery.Chain
 * @namespace
 */
$.Chain =
{
	/**
	 * Version Number
	 *
	 * @alias jQuery.Chain.version
	 * @property {String}
	 */
	version: '0.2',

	/**
	 * Tag for use in @jQuery.Chain.parse@ (which is used in CustomUpdater).
	 * It is can be altered.
	 *
	 * @alias jQuery.Chain.tags
	 *
	 * @property {Array}
	 *
	 * @see jQuery.Chain.parse
	 */
	tag: ['{', '}'],

	/**
	 * Namespace containing all defined services.
	 *
	 * @namespace
	 *
	 * @alias jQuery.Chain.services
	 */
	services: {},

	/**
	 * Register a service to the service manager.
	 *
	 * @alias jQuery.Chain.service
	 *
	 * @param {String}	name	Service Name
	 * @param {Object}	proto 	Service Object Prototype
	 *
	 * @example Create a Custom Service
	 * $.Chain.service('test', {
	 * 		// Default command handler
	 * 		handler: function(option)
	 * 		{
	 * 			// do something
	 * 		},
	 * 		// $(selector).test('what', somearg)
	 * 		$what: function(somearg)
	 * 		{
	 * 			// do something
	 * 		}
	 * });
	 *
	 * $('#element').test();
	 *
	 * @see jQuery.Chain.extend
	 */
	service: function(name, proto)
	{
		this.services[name] = proto;

		$.fn[name] = function(options)
		{
			if(!this.length)
				{return this;}

			var instance = this.data('chain-'+name);

			var args = Array.prototype.slice.call(arguments, 1);

			if(!instance)
			{
				if(options == 'destroy')
					{return this;}
				instance = $.extend({element: this}, $.Chain.services[name]);
				this.data('chain-'+name, instance);
				if(instance.init)
					{instance.init();}
			}

			var result;

			if(typeof options == 'string' && instance['$'+options])
				{result = instance['$'+options].apply(instance, args);}

			else if(instance['handler'])
				{result = instance['handler'].apply(instance, [options].concat(args));}

			else
				{result = this;}

			if(options == 'destroy')
				{this.removeData('chain-'+name);}

			return result;
		};
	},

	/**
	 * Extends service functionalities.
	 *
	 * @alias jQuery.Chain.extend
	 *
	 * @param {String}	name	Service Name
	 * @param {Object}	proto 	Service Object Prototype
	 *
	 * @see jQuery.Chain.service
	 */
	extend: function(name, proto)
	{
		if(this.services[name])
			{this.services[name] = $.extend(this.services[name], proto);}
	},

	/**
	 * Check whether it is a jQuery Object
	 *
	 * @alias jQuery.Chain.jobject
	 *
	 * @param {Object} obj Object to be checked
	 *
	 * @example Using @jobject@
	 * $.Chain.jobject($()) // returns true
	 * $.Chain.jobject("test") // returns false
	 *
	 * @return {Boolean} True or False
	 *
	 * @see jQuery.Chain.jindentic
	 */
	jobject: function(obj)
	{
		return obj && obj.init == $.fn.init;
	},

	/**
	 * Check whether two jQuery Collection identic
	 *
	 * @alias jQuery.Chain.jidentic
	 *
	 * @param {Object}	j1	jQuery Object
	 * @param {Object}	j2	jQuery Object
	 *
	 * @example Using @jidentic@
	 * a = $('div');
	 * b = $('div');
	 * c = $('div.test');
	 *
	 * (a == b) //returns false
	 *
	 * $.Chain.jidentic(a, b) // returns true
	 * $.Chain.jidentic(a, c) // returns false
	 *
	 * @return {Boolean} True or False
	 *
	 * @see jQuery.Chain.jobject
	 */
	jidentic: function(j1, j2)
	{
		if(!j1 || !j2 || j1.length != j2.length)
			{return false;}

		var a1 = j1.get();
		var a2 = j2.get();

		for(var i=0; i<a1.length; i++)
		{
			if(a1[i] != a2[i])
				{return false;}
		}

		return true;

	},

	/**
	 * Parse string contained @{something}@ to a Function
	 * that when executed replace those with the data it refers to.
	 * You can change the @{}@ tag by modifying @jQuery.Chain.tag@
	 *
	 * @param {String} text String
	 *
	 * @example Using @
	 * var fn = $.Chain.parse("My name is {first} {last}");
	 * fn({first:'Rizqi', last:'Ahmad'}) // returns "My name is Rizqi Ahmad"
	 *
	 * @return {Function} template string.
	 *
	 * @see jQuery.Chain.tag
	 */
	parse: function()
	{
		var $this = {};
		$this.closure =
		[
			'function($data, $el){'
			+'var $text = [];\n'
			+'$text.print = function(text)'
			+'{this.push((typeof text == "number") ? text : ((typeof text != "undefined") ? text : ""));};\n'
			+'with($data){\n',

			'}\n'
			+'return $text.join("");'
			+'}'
		];

		$this.textPrint = function(text)
		{
			return '$text.print("'
				+text.split('\\').join('\\\\').split("'").join("\\'").split('"').join('\\"')
				+'");';
		};

		$this.scriptPrint = function(text)
		{
			return '$text.print('+text+');';
		};

		$this.parser = function(text){
			var tag = $.Chain.tag;

			var opener, closer, closer2 = null, result = [];

			while(text){

				opener = text.indexOf(tag[0]);
				closer = opener + text.substring(opener).indexOf(tag[1]);

				if(opener != -1)
				{
					if(text[opener-1] == '\\')
					{
						closer2 = opener+tag[0].length + text.substring(opener+tag[0].length).indexOf(tag[0]);
						if(closer2 != opener+tag[0].length-1 && text[closer2-1] == '\\')
							{closer2 = closer2-1;}
						else if(closer2 == opener+tag[0].length-1)
							{closer2 = text.length;}

						result.push($this.textPrint(text.substring(0, opener-1)));
						result.push($this.textPrint(text.substring(opener, closer2)));
					}
					else
					{
						closer2 = null;
						if(closer == opener-1)
							{closer = text.length;}

						result.push($this.textPrint(text.substring(0, opener)));
						result.push($this.scriptPrint(text.substring(opener+tag[0].length, closer)));
					}

					text = text.substring((closer2 === null) ? closer+tag[1].length : closer2);
				}
				else if(text)
				{
					result.push($this.textPrint(text));
					text = '';
				}
			}

			return result.join('\n');
		};


		/*
		 * Real function begins here.
		 * We use closure for private variables and function.
		 */
		return function($text)
		{
			var $fn = function(){};
			try
			{
				eval('$fn = '+ $this.closure[0]+$this.parser($text)+$this.closure[1]);
			}
			catch(e)
			{
				throw "Parsing Error";
			}

			return $fn;
		};
	}()
};

})(jQuery);

/* update.js */
/**
 * Chain Update Service
 *
 * @alias update
 *
 * @syntax $(selector).update(parameters);
 */

(function($){

/**
 * Chain Update Service Object - Providing methods of @update@.
 * All method listed here can only be used internally
 * using @jQuery.Chain.service@ or @jQuery.Chain.extend@
 *
 * @namespace
 *
 * @alias jQuery.Chain.services.update
 *
 * @see jQuery.Chain.service
 * @see jQuery.Chain.extend
 */

$.Chain.service('update', {
	/**
	 * Default Handler
	 *
	 * @alias jQuery.Chain.services.update.handler
	 *
	 * @see jQuery.Chain.service
	 * @see jQuery.Chain.services.update.bind
	 * @see jQuery.Chain.services.update.trigger
	 */
	handler: function(opt)
	{
		if(typeof opt == 'function')
			{return this.bind(opt);}
		else
			{return this.trigger(opt);}
	},

	/**
	 * If you pass a function to update, it will bind it to the update event.
	 * just like jQuerys @click()@ or @mouseover()@.
	 *
	 * @alias update(fn)
	 * @alias jQuery.Chain.services.update.bind
	 *
	 * @param {Function} fn Listener
	 *
	 * @example
	 * // assuming #person is already chained
	 * $('#person').update(function{
	 * 		alert($(this).item().name);
	 * });
	 *
	 * $('#person').item({name: 'Rizqi'})
	 *
	 * @return {Object} jQuery Object
	 *
	 * @see jQuery.Chain.services.update.handler
	 */
	bind: function(fn)
	{
		return this.element.bind('update', fn);
	},

	/**
	 * If no argument or "hard" is passed,
	 * it will update the element and trigger the update event.
	 *
	 * @alias update(opt)
	 * @alias jQuery.Chain.services.update.trigger
	 *
	 * @param {String} opt If 'hard', it will update each of items
	 *
	 * @example
	 * $('#person').update();
	 *
	 * @return {Object} jQuery Object
	 *
	 * @see jQuery.Chain.services.update.handler
	 */
	trigger: function(opt)
	{
		this.element.items('update');
		this.element.item('update');

		this.element.triggerHandler('preupdate', this.element.item());

		if(opt == 'hard')
			{this.element.items(true).each(function(){$(this).update();});}

		this.element.triggerHandler('update', this.element.item());

		return this.element;
	}
});

})(jQuery);

/* chain.js */
/**
 * Chain Binding Service.
 * Method to activate the chaining / element rendering service.
 *
 * @alias chain
 *
 * @syntax $(selector).chain(parameters);
 */

(function($){

/**
 * Chain Binding Service Object - Providing methods of @chain@.
 * All method listed here can only be used internally
 * using @jQuery.Chain.service@ or @jQuery.Chain.extend@
 *
 * @namespace
 *
 * @alias jQuery.Chain.services.chain
 *
 * @see jQuery.Chain.service
 * @see jQuery.Chain.extend
 */

$.Chain.service('chain', {
	/**
	 * Initializer. Executed once at the first time @chain@ invoked.
	 *
	 * @alias jQuery.Chain.services.chain.init
	 *
	 * @see jQuery.Chain.service
	 */
	init: function()
	{
		this.anchor = this.element;
		this.template = this.anchor.html();
		this.tplNumber = 0; // At Default it uses the first template.
		this.builder = this.createBuilder();
		this.plugins = {};
		this.isActive = false;
		this.destroyers = [];

		this.element.addClass('chain-element');
	},

	/**
	 * Default handler.
	 *
	 * @alias jQuery.Chain.services.chain.handler
	 *
	 * @param {Object} obj Object to be handled
	 *
	 * @return {Object} jQuery Object
	 *
	 * @see jQuery.Chain.service
	 * @see jQuery.Chain.services.chain.handleUpdater
	 * @see jQuery.Chain.services.chain.handleBuilder
	 */
	handler: function(obj)
	{
		this.element.items('backup');
		this.element.item('backup');

		if(typeof obj == 'object')
			{this.handleUpdater(obj);}
		else if(typeof obj == 'function')
			{this.handleBuilder(obj);}

		this.anchor.empty();

		this.isActive = true;
		this.element.update();

		return this.element;
	},

	/**
	 * Updater Handler.
	 * If you pass an object to @chain@, it will treated as a updater object.
	 * The updater is a hash of selector and value string:
	 * like @chain({'my css selector': 'My Content String'})@
	 * or @chain({'my css selector': {attributes}})@
	 *
	 * @alias chain(updater)
	 * @alias jQuery.Chain.services.chain.handleUpdater
	 *
	 * @param {Object} rules Updater rules to be parsed
	 *
	 * @example Usage
	 * $(selector)
	 * 		.chain({
	 * 			// Items anchor, where the Item iteration should be placed
	 * 			anchor: anchor,
	 * 			// If true, the default updater is overridden
	 * 			override: false,
	 * 			// Use custom builder
	 * 			builder: function(){},
	 * 			// Update the element self
	 * 			self: "This is my {data}",
	 * 			// Use css selector to update child element
	 * 			'.element.selector': "Using String Updater",
	 * 			// Use Function as updater
	 * 			'.element.selector': function(data, el){},
	 * 			// Updating Attributes
	 * 			'.element.selector': {
	 * 				attribute1: "{attribute}",
	 * 				className: "{className}",
	 * 				content: "This is the {content}",
	 * 				value: "This is the {value}"
	 * 			}
	 * 		});
	 *
	 * @example Using Default Updater
	 * $('<div><span class="name">Name</span></div>')
	 * 		.item({name: 'Steve Jobs'})
	 * 		.chain()
	 * 		.appendTo(document.body);
	 *
	 * @example Using Custom Updater
	 * $('<div><div class="name"><span class="first">First</span> <span class="last">Last</span></div></div>')
	 * 		.item({first:'Steve', last:'Jobs'})
	 * 		.chain({
	 * 			'.name .first': {
	 * 				style: 'color: blue;',
	 * 				content: 'First Name: {first}'
	 * 			},
	 * 			'.name .last': 'Family Name: {last}'
	 * 		})
	 * 		.appendTo(document.body);
	 *
	 * @example Attach Builder Inside Updater
	 * $('<div><div class="name">Name</div><div class="address">Address</div></div>')
	 * 		.item({name:'Steve Jobs', address:'Cupertino'})
	 * 		.chain({
	 * 			builder: function(){
	 * 				var data = this.item();
	 * 				this.find('.name').click(function(){alert(data.name)});
	 * 				this.find('.address').mouseout(function(){alert(data.address)});
	 * 			},
	 * 			'.name': '{name}',
	 * 			'.address': '{address}'
	 * 		})
	 * 		.appendTo(document.body);
	 */
	handleUpdater: function(rules)
	{
		var builder = rules.builder;
		delete rules.builder;

		if(rules.anchor)
			{this.setAnchor(rules.anchor);}
		delete rules.anchor;

		var override = rules.override;
		delete rules.override;

		for(var i in rules)
		{
			if(typeof rules[i] == 'string')
			{
				rules[i] = $.Chain.parse(rules[i]);
			}
			else if(typeof rules[i] == 'object')
			{
				for(var j in rules[i])
				{
					if(typeof rules[i][j] == 'string')
						{rules[i][j] = $.Chain.parse(rules[i][j]);}
				}
			}
		}

		var fn = function(event, data)
		{
			var el, val;
			var self = $(this);
			for(var i in rules)
			{
				if(i == 'self')
					{el = self;}
				else
					{el = $(i, self);}

				if (typeof rules[i] == 'function')
				{
					val = rules[i].apply(self, [data, el]);
					if(typeof val == 'string')
						{el.not(':input').html(val).end().filter(':input').val(val);}
				}
				else if(typeof rules[i] == 'object')
				{
					for(var j in rules[i])
					{
						if (typeof rules[i][j] == 'function')
						{
							val = rules[i][j].apply(self, [data, el]);
							if(typeof val == 'string')
							{
								if(j == 'content')
									{el.html(val);}
								else if(j == 'text')
									{el.text(val);}
								else if(j == 'value')
									{el.val(val);}
								else if(j == 'class' || j == 'className')
									{el.addClass(val);}
								else
									{el.attr(j, val);}
							}

						}
					}
				}
			}
		};

		var defBuilder = this.defaultBuilder;

		this.builder = function(root)
		{
			if(builder)
				{builder.apply(this, [root]);}

			if(!override)
				{defBuilder.apply(this);}

			this.update(fn);

			return false;
		};
	},

	/**
	 * Builder Handler.
	 * If you pass a function to @chain@, it will be handled
	 * as @{builder: function}@, enabling you to use the default
	 * updater while customizing the events etc.
	 *
	 * @alias chain(fn)
	 * @alias jQuery.Chain.services.chain.handleBuilder
	 *
	 * @param {Function} fn Builder Function
	 *
	 * @example
	 * $('<div><div class="name">Name</div><div class="address">Address</div></div>')
	 * 		.item({name:'Steve Jobs', address:'Cupertino'})
	 * 		.chain(function(){
	 * 			this.bind('click', function(){
	 * 				var data = this.item();
	 * 				alert('name:'+data.name+', address:'+data.address);
	 * 			});
	 *
	 * 			// if you return false, default builder wont be executed
	 * 			// You don't have to return true;
	 * 			return true;
	 * 		})
	 * 		.appendTo(document.body);
	 *
	 * @see jQuery.Chain.services.chain.handleUpdater
	 * @see jQuery.Chain.services.chain.createBuilder
	 */
	handleBuilder: function(fn)
	{
		this.builder = this.createBuilder(fn);
	},


	/**
	 * Default Builder - Automatic Data filler
	 *
	 * @alias jQuery.Chain.services.chain.defaultBuilder
	 *
	 * @param {Function} 	builder 	Builder Function
	 * @param {Object}		root		Root Element Object
	 *
	 * @see jQuery.Chain.services.chain.createBuilder
	 */
	defaultBuilder: function(builder, root)
	{

		var res = builder ? (builder.apply(this, [root]) !== false) : true;

		if(res)
		{
			this.bind('update', function(event, data){
				var self = $(this);
				for(var i in data)
				{
					if(typeof data[i] != 'object' && typeof data[i] != 'function')
					{
						self.find('> .'+i+', *:not(.chain-element) .'+i)
							.each(function(){
								var match = $(this);
								if(match.filter(':input').length)
									{match.val(data[i]);}
								else if(match.filter('img').length)
									{match.attr('src', data[i]);}
								else
									{match.html(data[i]);}
							});
					}
				}
			});
		}
	},

	/**
	 * Builder Generator (Wrapper).
	 *
	 * @alias jQuery.Chain.services.chain.createBuilder
	 *
	 * @param {Function} builder Builder
	 *
	 * @return {Function} Wrapped Builder
	 *
	 * @see jQuery.Chain.services.chain.defaultBuilder;
	 */
	createBuilder: function(builder)
	{
		var defBuilder = this.defaultBuilder;
		return function(root){
			defBuilder.apply(this, [builder, root]);
			return false;
		};
	},

	/**
	 * Set Anchor (Container for @items@ to be populated, default: @this.element@)
	 *
	 * @alias jQuery.Chain.services.chain.setAnchor
	 *
	 * @param {Object} anchor Anchor element
	 *
	 * @see jQuery.Chain.services.chain.$anchor
	 */
	setAnchor: function(anchor)
	{
		this.anchor.html(this.template);
		this.anchor = anchor == this.element ? anchor : this.element.find(anchor).eq(0);
		this.template = this.anchor.html();
		this.anchor.empty();
	},

	/**
	 * Set new Anchor and rerender if new anchor passed.
	 * Otherwise return current anchor.
	 *
	 * If you use @items()@ with @chain()@,
	 * you can use @chain('anchor', selector)@ to move the element,
	 * where the items will be generated.
	 *
	 * @alias chain('anchor')
	 * @alias jQuery.Chain.services.chain.$anchor
	 *
	 * @param {Object} anchor Anchor element or selector
	 *
	 * @return {Object} current element (if new Anchor passed), otherwise current anchor
	 *
	 * @example
	 * $('#persons').chain('anchor', '.wrapper');
	 *
	 * // Define Anchor directly while building
	 * $('#persons').items([...]).chain({anchor:'.wrapper', builder: ...});
	 */
	$anchor: function(anchor)
	{
		if(anchor)
		{
			this.element.items('backup');
			this.element.item('backup');

			this.setAnchor(anchor);
			this.element.update();

			return this.element;
		}
		else
		{
			return this.anchor;
		}
	},

	/**
	 * Getting/Switching Template.
	 *
	 * @alias chain('template')
	 * @alias jQuery.Chain.services.chain.$template
	 *
	 * @param {Number, String} arg Argument
	 *
	 * @return {Object} jQuery Object
	 *
	 * @example
	 * $(selector).chain('template') // Returns current Template (jQuery Object)
	 * $(selector).chain('template', 'raw') // Returns raw HTML Templates (all)
	 * $(selector).chain('template', nr) // Switch to template nr (read: Number)
	 * $(selector).chain('template', '.tree-column') // Switch by selector
	 */
	$template: function(arg)
	{
		if(!arguments.length)
			{return $('<div>').html(this.template).children().eq(this.tplNumber);}

		if(arg == 'raw')
			{return this.template;}

		if(typeof arg == 'number')
		{
			this.tplNumber = arg;
		}
		else
		{
			var tpl = $('<div>').html(this.template).children();
			var node = tpl.filter(arg).eq(0);

			if(node.length)
				{this.tplNumber = tpl.index(node);}
			else
				{return this.element;} // If not found do nothing
		}

		this.element.items('backup');
		this.element.item('backup');
		this.element.update();

		return this.element;
	},

	/**
	 * Get/Change Builder.
	 * If you don't pass any argument, it will return the created builder.
	 *
	 * @alias chain('builder')
	 * @alias jQuery.Chain.services.chain.$builder
	 *
	 * @param {Function, Object} builder (Optional)
	 *
	 * @return {Function, Object} returns builder function, or jQuery Object depends on arg
	 *
	 * @example
	 * $('#el').chain('builder') // returns builder function
	 * $('#el').chain('builder', newBuilder) // Replace Builder
	 */
	$builder: function(builder)
	{
		if(builder)
			{return this.handler(builder);}
		else
			{return this.builder;}
	},

	/**
	 * Check status
	 *
	 * @alias chain('active')
	 * @alias jQuery.Chain.services.chain.$active
	 *
	 * @return {Boolean} true if active
	 */
	$active: function()
	{
		return this.isActive;
	},

	/**
	 * Add/Remove Plugins that extend builder
	 *
	 * @alias chain('plugin')
	 * @alias jQuery.Chain.services.chain.$plugin
	 *
	 * @param {String} 				name 	Plugin Name
	 * @param {Function, Boolean} 	fn 		Plugin Function / False to remove
	 *
	 * @return {Object} jQuery Object
	 */
	$plugin: function(name, fn)
	{
		if(fn === null)
			{delete this.plugins[name];}
		else if(typeof fn == 'function')
			{this.plugins[name] = fn;}
		else if(name && !fn)
			{return this.plugins[name];}
		else
			{return this.plugins;}

		if(typeof fn == 'function')
		{
			this.element.items(true).each(function(){
				var self = $(this);
				fn.call(self, self.item('root'));
			});
		}

		this.element.update();

		return this.element;
	},

	/**
	 * Clone Element unchained, with ID removed.
	 *
	 * @alias chain('clone')
	 * @alias jQuery.Chain.services.chain.$clone
	 *
	 * @return {Object} jQuery Object containing cloned Element
	 */
	$clone: function()
	{
		var id = this.element.attr('id');
		this.element.attr('id', '');

		var clone = this.element.clone().empty().html(this.template);
		this.element.attr('id', id);

		return clone;
	},

	/**
	 * Destroy Chain, restore Element to previous condition.
	 *
	 * @alias chain('destroy')
	 * @alias jQuery.Chain.services.chain.$destroy
	 *
	 * @param {Boolean} nofollow If true, it won't destroy nested chain elements
	 *
	 * @return {Object} jQuery Object
	 */
	$destroy: function(nofollow)
	{
		this.element.removeClass('chain-element');

		if(!nofollow)
		{
			this.element.items('backup');
			this.element.item('backup');

			this.element.find('.chain-element').each(function(){
				$(this).chain('destroy', true);
			});
		}

		this.element.triggerHandler('destroy');

		this.isActive = false;

		this.anchor.html(this.template);

		return this.element;
	}
});

})(jQuery);

/* item.js */
/**
 * Chain Item Service.
 * Method to bind item to object.
 *
 * @alias item
 *
 * @syntax $(selector).item(parameters);
 */

(function($){

/**
 * Chain Item Manager - Providing methods of @item@.
 * All method listed here can only be used internally
 * using @jQuery.Chain.service@ or @jQuery.Chain.extend@
 *
 * @namespace
 *
 * @alias jQuery.Chain.services.item
 *
 * @see jQuery.Chain.service
 * @see jQuery.Chain.extend
 */

$.Chain.service('item', {
	/**
	 * Initializer. Executed once at the first time @item@ invoked.
	 *
	 * @alias jQuery.Chain.services.item.init
	 *
	 * @see jQuery.Chain.service
	 */
	init: function()
	{
		this.isActive = false;
		this.isBuilt = false;
		this.root = this.element;
		this.data = false;
		this.datafn = this.dataHandler;
	},

	/**
	 * Default handler.
	 *
	 * @alias jQuery.Chain.services.item.handler
	 *
	 * @param {Object} obj Object to be handled
	 *
	 * @return {Object} jQuery Object
	 *
	 * @see jQuery.Chain.service
	 * @see jQuery.Chain.services.item.handleObject
	 * @see jQuery.Chain.services.item.handleFunction
	 * @see jQuery.Chain.services.item.handleDefault
	 */
	handler: function(obj)
	{
		if(typeof obj == 'object')
			{return this.handleObject(obj);}
		else if(typeof obj == 'function')
			{return this.handleFunction(obj);}
		else
			{return this.handleDefault();}
	},

	/**
	 * Edit/Bind Item.
	 * If no Object defined, it will bind the object to the Item, otherwise
	 * it will alter the object using the provided object.
	 *
	 * @alias item(object)
	 * @alias jQuery.Chain.services.item.handleObject
	 *
	 * @param {Object} obj Object to be inserted
	 *
	 * @return {Object} jQuery Object
	 *
	 * @example
	 * $('#element').item({name:'Rizqi', country:'Germany'});
	 * $('#element').item({country:'Indonesia'});
	 * $('#element').item(); // Returns {name:'Rizqi', country:'Indonesia'}
	 *
	 * @see jQuery.Chain.services.item.handler
	 */
	handleObject: function(obj)
	{
		this.setData(obj);
		this.isActive = true;
		this.update();

		return this.element;
	},

	/**
	 * Add setter and getter to item.
	 * This function will change the way @item(object)@ and @item()@ works.
	 *
	 * @alias item(fn)
	 * @alias jQuery.Chain.services.item.handleFunction
	 *
	 * @param {Function} fn Getter&Setter Function
	 *
	 * @return {Object} jQuery Object
	 *
	 * @example
	 * $(element).item(function(oldval, newval){
	 * 		//setter
	 * 		if(newval)
	 * 			return $.extend(oldval, newval);
	 * 		//getter
	 *		else
	 * 			return oldval;
	 * })
	 */
	handleFunction: function(fn)
	{
		this.datafn = fn;

		return this.element;
	},

	/**
	 * Get Data if no argument passed.
	 *
	 * @alias item()
	 * @alias jQuery.Chain.services.item.handleDefault
	 *
	 * @return {Object, Boolean} Returns Data Object if exist, otherwise false
	 */
	handleDefault: function()
	{
		if(this.isActive)
			{return this.getData();}
		else
			{return false;}
	},

	/**
	 * Data Getter Wrapper Function
	 *
	 * @alias jQuery.Chain.services.item.getData
	 *
	 * @return {Object} data
	 */
	getData: function()
	{
		this.data = this.datafn.call(this.element, this.data);

		return this.data;
	},

	/**
	 * Data Setter Wrapper Function
	 *
	 * @alias jQuery.Chain.services.item.setData
	 */
	setData: function(obj)
	{
		var data;

		if($.Chain.jobject(obj) && obj.item())
			{data = $.extend({}, obj.item());}
		else if($.Chain.jobject(obj))
			{data = {};}
		else
			{data = obj;}

		this.data = this.datafn.call(this.element, this.data || data, data);

		if(this.linkElement && this.linkElement[0] != obj[0])
		{
			var el = this.linkFunction();
			if($.Chain.jobject(el) && el.length && el.item())
				{el.item(this.data);}
		}
	},

	/**
	 * Default Getter/Setter
	 *
	 * @alias jQuery.Chain.services.item.dataHandler
	 *
	 * @param {Object} oldval Old value
	 * @param {Object} newval New Value
	 *
	 * @return {Object} returns data value
	 */
	dataHandler: function(oldval, newval)
	{
		if(arguments.length == 2)
			{return $.extend(oldval, newval);}
		else
			{return oldval;}
	},

	/**
	 * Update element. Wrapper for @jQuery.Chain.services.item.element.update@
	 *
	 * @alias jQuery.Chain.services.item.update
	 *
	 * @return {Object} jQuery Object
	 */
	update: function()
	{
		return this.element.update();
	},

	/**
	 * Build item, apply builder and plugins
	 *
	 * @alias jQuery.Chain.services.item.build
	 *
	 * @see jQuery.Chain.services.item.$update
	 */
	build: function()
	{
		var fix = this.element.chain('template', 'raw').replace(/jQuery\d+\=\"null\"/gi, "");
		this.element.chain('anchor').html(fix);

		if(!$.Chain.jidentic(this.root, this.element))
		{
			var plugins = this.root.chain('plugin');
			for(var i in plugins)
			{
				plugins[i].apply(this.element, [this.root]);
			}

		}

		this.element.chain('builder').apply(this.element, [this.root]);
		this.isBuilt = true;
	},

	/**
	 * Item Updater, called within @$(element).update()@
	 *
	 * @alias item('update')
	 * @alias jQuery.Chain.services.item.$update
	 *
	 * @return {Object} jQuery Object
	 */
	$update: function()
	{
		if(this.element.chain('active') && this.isActive && !this.isBuilt && this.getData())
			{this.build();}

		return this.element;
	},

	/**
	 * Replace Data with new data
	 *
	 * @alias item('replace')
	 * @alias jQuery.Chain.services.item.$replace
	 *
	 * @param {Object} obj Data Object
	 *
	 * @return {Object} jQuery Object
	 *
	 * @example
	 * $(element).item('replace', data);
	 */
	$replace: function(obj)
	{
		this.data = {};
		this.setData(obj);
		this.isActive = true;
		this.update();
		return this.element;
	},

	/**
	 * Remove Item And destroy it.
	 *
	 * @alias item('remove')
	 * @alias jQuery.Chain.services.item.$remove
	 *
	 * @param {Boolean} noupdate If true it won't update the root element
	 */
	$remove: function(noupdate)
	{
		this.element.chain('destroy');
		this.element.remove();
		this.element.item('link', null);
		this.element.item('destroy');

		if(!$.Chain.jidentic(this.root, this.element) && !noupdate)
			{this.root.update();}
	},

	/**
	 * Check Status of @item@
	 *
	 * @alias item('active')
	 * @alias jQuery.Chain.services.item.$active
	 *
	 * @return {Boolean} Status
	 */
	$active: function()
	{
		return this.isActive;
	},

	/**
	 * Get/Set Root element.
	 *
	 * @alias item('root');
	 * @alias jQuery.Chain.services.item.$root
	 *
	 * @param {Object} root New Root element
	 *
	 * @return {Object} If a new root passed, it will be item Element. Otherwise current root.
	 */
	$root: function(root)
	{
		if(arguments.length)
		{
			this.root = root;
			this.update();
			return this.element;
		}
		else
		{
			return this.root;
		}
	},

	/**
	 * Backup Item to the state before being built.
	 *
	 * @alias item('backup')
	 * @alias jQuery.Chain.services.item.$backup
	 *
	 * @return {Object} jQuery Object
	 */
	$backup: function()
	{
		this.isBuilt = false;

		return this.element;
	},

	/**
	 * Bind Item to other (chained) element. If one of them is updated,
	 * the linked element will be updated.
	 *
	 * @alias item('link')
	 * @alias jQuery.Chain.services.item.$link
	 *
	 * @param {Object} element element/selector to be linked with
	 * @param {String} collection Collection to be linked with (has to be @"self"@ if linked to item)
	 *
	 * @return {Object} jQuery Element
	 *
	 * @see jQuery.Chain.services.items.collection
	 */
	$link: function(element, collection)
	{
		if(this.linkElement)
		{
			this.linkElement.unbind('update', this.linkUpdater);
			this.linkElement = null;
		}

		element = $(element);
		if(element.length)
		{
			var self = this;
			this.isActive = true;
			this.linkElement = element;
			this.linkFunction = function()
			{
				if(typeof collection == 'function')
				{
					try{
						return collection.call(self.element, self.linkElement);
					}catch(e){
						return $().eq(-1);
					}
				}
				else if(typeof collection == 'string')
				{
					return self.linkElement.items('collection', collection);
				}
				else
				{
					return $().eq(-1);
				}
			};

			this.linkUpdater = function()
			{
				var res = self.linkFunction();
				if(res && res.length)
					{self.element.item(res);}
			};

			this.linkElement.bind('update', this.linkUpdater);
			this.linkUpdater();
		}

		return this.element;
	},

	/**
	 * Destroy item service.
	 *
	 * @alias item('destroy')
	 * @alias jQuery.Chain.services.item.$destroy
	 *
	 * @return {Object} jQuery Element
	 */
	$destroy: function()
	{
		return this.element;
	}
});

})(jQuery);

/* items.js */
/**
 * Chain Items Service.
 * Method to bind items to object.
 *
 * @alias items
 *
 * @syntax $(selector).items(parameters);
 */

(function($){

/**
 * Chain Items Manager - Providing methods of @items@.
 * All method listed here can only be used internally
 * using @jQuery.Chain.service@ or @jQuery.Chain.extend@
 *
 * @namespace
 *
 * @alias jQuery.Chain.services.items
 *
 * @see jQuery.Chain.service
 * @see jQuery.Chain.extend
 */

$.Chain.service('items', {
	/**
	 * Collection of Function for getting items
	 *
	 * @namespace
	 * @alias jQuery.Chain.services.items.collections
	 *
	 * @see jQuery.Chain.services.items.collection
	 */
	collections:
	{
		/**
		 * Get all items, including hidden
		 *
		 * @alias jQuery.Chain.services.items.collections.all
		 *
		 * @return {Object} jQuery Object containing items
		 */
		all: function()
		{
			return this.element.chain('anchor').children('.chain-item');
		},

		/**
		 * Get all visible items
		 *
		 * @alias jQuery.Chain.services.items.collections.visible
		 *
		 * @return {Object} jQuery Object containing items
		 */
		visible: function()
		{
			return this.element.chain('anchor').children('.chain-item:visible');
		},

		/**
		 * Get all hidden items
		 *
		 * @alias jQuery.Chain.services.items.collections.hidden
		 *
		 * @return {Object} jQuery Object containing items
		 */
		hidden: function()
		{
			return this.element.chain('anchor').children('.chain-item:hidden');
		},

		/**
		 * Get self
		 *
		 * @alias jQuery.Chain.services.items.collections.self
		 *
		 * @return {Object} jQuery Object of the element
		 */
		self: function()
		{
			return this.element;
		}
	},

	/**
	 * Initializer. Executed once at the first time @items@ invoked.
	 *
	 * @alias jQuery.Chain.services.items.init
	 *
	 * @see jQuery.Chain.service
	 */
	init: function()
	{
		this.isActive = false;
		this.pushBuffer = [];
		this.shiftBuffer = [];
		this.collections = $.extend({}, this.collections);
	},

	/**
	 * Default handler.
	 *
	 * @alias jQuery.Chain.services.items.handler
	 *
	 * @param {Object} obj Object to be handled
	 *
	 * @return {Object} jQuery Object
	 *
	 * @see jQuery.Chain.service
	 * @see jQuery.Chain.services.items.handleObject
	 * @see jQuery.Chain.services.items.handleElement
	 * @see jQuery.Chain.services.items.handleArray
	 * @see jQuery.Chain.services.items.handleNumber
	 * @see jQuery.Chain.services.items.handleTrue
	 * @see jQuery.Chain.services.items.handleDefault
	 */
	handler: function(obj)
	{
		if(obj instanceof Array)
			{return this.handleArray(obj);}
		else if(!this.isActive)
			{return $().eq(-1);}
		else if($.Chain.jobject(obj))
			{return this.handleElement(obj);}
		else if(typeof obj == 'object')
			{return this.handleObject(obj);}
		else if(typeof obj == 'number')
			{return this.handleNumber(obj);}
		else if(obj === true)
			{return this.handleTrue();}
		else
			{return this.handleDefault();}
	},

	/**
	 * If a Data Object is given, it will return the item element
	 * containing the object if it exists, otherwise empty.
	 *
	 * @alias items(object)
	 * @alias jQuery.Chain.services.items.handleObject
	 *
	 * @param {Object} obj Data Object
	 *
	 * @return {Object} jQuery Object
	 */
	handleObject: function(obj)
	{
		return this.collection('all').filter(function(){return $(this).item() == obj;});
	},

	/**
	 * If a jQuery Element is given, it will return itself if it is part of the items,
	 * otherwise empty jQuery object.
	 *
	 * @alias items(element)
	 * @alias jQuery.Chain.services.items.handleElement
	 *
	 * @param {Object} obj jQuery Object
	 *
	 * @return {Object} jQuery Object
	 */
	handleElement: function(obj)
	{
		if(!$.Chain.jidentic(obj, obj.item('root')) && $.Chain.jidentic(this.element, obj.item('root')))
			{return obj;}
		else
			{return $().eq(-1);}
	},

	/**
	 * If array is given, it will merge it to current items
	 *
	 * @alias items(array)
	 * @alias jQuery.Chain.services.items.handleArray
	 *
	 * @param {Array} array Array of Data
	 *
	 * @return {Object} jQuery Object
	 */
	handleArray: function(array)
	{
		return this.$merge(array);
	},

	/**
	 * If number is given, it will get the object with the current number. Use -1 to get the last number.
	 *
	 * @alias items(number)
	 * @alias jQuery.Chain.services.items.handleNumber
	 *
	 * @param {Number} number Index
	 *
	 * @return {Object} jQuery Object
	 */
	handleNumber: function(number)
	{
		if(number == -1)
			{return this.collection('visible').filter(':last');}
		else
			{return this.collection('visible').eq(number);}
	},

	/**
	 * If @true@ is given, it will get all items including the hidden one.
	 *
	 * @alias items(true)
	 * @alias jQuery.Chain.services.items.handleTrue
	 *
	 * @return {Object} jQuery Object
	 *
	 * @see jQuery.Chain.services.items.collections.all
	 */
	handleTrue: function()
	{
		return this.collection('all');
	},

	/**
	 * If nothing is given, it will get all visible items.
	 *
	 * @alias items(true)
	 * @alias jQuery.Chain.services.items.handleTrue
	 *
	 * @return {Object} jQuery Object
	 *
	 * @see jQuery.Chain.services.items.collections.visible
	 */
	handleDefault: function()
	{
		return this.collection('visible');
	},

	/**
	 * Update element
	 *
	 * @alias jQuery.Chain.services.items.update
	 */
	update: function()
	{
		this.element.update();
	},

	/**
	 * Clear all items
	 *
	 * @alias jQuery.Chain.services.items.empty
	 */
	empty: function()
	{
		var all = this.collection('all');

		setTimeout(function(){all.each(function(){$(this).item('remove', true);});}, 1);

		this.element.chain('anchor').empty();
	},

	/**
	 * Get collection of items. Define a collection by adding a function argument
	 *
	 * @alias jQuery.Chain.services.items.collection
	 *
	 * @param {String} col Collection name
	 * @param {Function} fn Create a collection function
	 *
	 * @return {Object} jQuery Object
	 */
	collection: function(col, fn)
	{
		if(arguments.length > 1)
		{
			if(typeof fn == 'function')
				{this.collections[col] = fn;}

			return this.element;
		}
		else
		{
			if(this.collections[col])
				{return this.collections[col].apply(this);}
			else
				{return $().eq(-1);}
		}

	},

	/**
	 * Items Updater, called by @$(element).update()@
	 *
	 * @alias items('update')
	 * @alias jQuery.Chain.services.items.$update
	 *
	 * @return {Object} jQuery Element
	 */
	$update: function()
	{
		if(!this.element.chain('active') || !this.isActive)
			{return this.element;}

		var self = this;
		var builder = this.element.chain('builder');
		var template = this.element.chain('template');
		var push;

		var iterator = function(){
			var clone = template
				.clone()[push ? 'appendTo' :'prependTo'](self.element.chain('anchor'))
				.addClass('chain-item')
				.item('root', self.element);

			if(self.linkElement && $.Chain.jobject(this) && this.item())
				{clone.item('link', this, 'self');}
			else
				{clone.item(this);}

			clone.chain(builder);
		};

		push = false;
		$.each(this.shiftBuffer, iterator);
		push = true;
		$.each(this.pushBuffer, iterator);


		this.shiftBuffer = [];
		this.pushBuffer = [];

		return this.element;
	},

	/**
	 * Add item(s). use @items('add', 'shift', item)@ to add item at the top
	 *
	 * @alias items('add')
	 * @alias jQuery.Chain.services.items.$add
	 *
	 * @param {Object} item
	 *
	 * @return {Object} jQuery Object
	 */
	$add: function()
	{
		if(this.linkElement)
			{return this.element;}

		var cmd;
		var args = Array.prototype.slice.call(arguments);
		if(typeof args[0] == 'string')
			{cmd = args.shift();}

		var buffer = (cmd == 'shift') ? 'shiftBuffer' : 'pushBuffer';

		this.isActive = true;
		this[buffer] = this[buffer].concat(args);
		this.update();

		return this.element;
	},

	/**
	 * Merge items with array of item data
	 *
	 * @alias items('merge')
	 * @alias jQuery.Chain.services.items.$merge
	 *
	 * @param {String} cmd Switch for push/shift
	 * @param {Array} items Item Data
	 *
	 * @return {Object} jQuery Element
	 */
	$merge: function(cmd, items)
	{
		if(this.linkElement)
			{return this.element;}

		if(typeof cmd != 'string')
			{items = cmd;}
		var buffer = (cmd == 'shift') ? 'shiftBuffer' : 'pushBuffer';

		this.isActive = true;
		if($.Chain.jobject(items))
			{this[buffer] = this[buffer].concat(items.map(function(){return $(this);}).get());}
		else if(items instanceof Array)
			{this[buffer] = this[buffer].concat(items);}
		this.update();

		return this.element;
	},

	/**
	 * Replace items with new items array
	 *
	 * @alias items('replace')
	 * @alias jQuery.Chain.services.items.$replace
	 *
	 * @param {String} cmd Switch for push/shift
	 * @param {Array} items Item Data
	 *
	 * @return {Object} jQuery Element
	 */
	$replace: function(cmd, items)
	{
		if(this.linkElement && arguments.callee.caller != this.linkUpdater)
			{return this.element;}

		if(typeof cmd != 'string')
			{items = cmd;}
		var buffer = (cmd == 'shift') ? 'shiftBuffer' : 'pushBuffer';

		this.isActive = true;
		this.empty();

		if($.Chain.jobject(items))
			{this[buffer] = items.map(function(){return $(this);}).get();}
		else if(items instanceof Array)
			{this[buffer] = items;}

		this.update();

		return this.element;
	},

	/**
	 * Remove item
	 *
	 * @alias items('remove')
	 * @alias jQuery.Chain.services.items.$remove
	 *
	 * @param {Object, Number} item
	 *
	 * @return {Object} jQuery Object
	 */
	$remove: function()
	{
		if(this.linkElement)
			{return this.element;}

		for(var i=0; i<arguments.length; i++)
			{this.handler(arguments[i]).item('remove', true);}
		this.update();

		return this.element;
	},

	/**
	 * Reorder Item
	 *
	 * @alias items('reorder')
	 * @alias jQuery.Chain.services.items.$reorder
	 *
	 * @param {Object} item1 Item 1
	 * @param {Object} item2 Item 2
	 *
	 * @return {Object} jQuery object
	 */
	$reorder: function(item1, item2)
	{
		if(item2)
			{this.handler(item1).before(this.handler(item2));}
		else
			{this.handler(item1).appendTo(this.element.chain('anchor'));}
		this.update();

		return this.element;
	},

	/**
	 * Clear all items
	 *
	 * @alias items('empty')
	 * @alias jQuery.Chain.services.items.$empty
	 *
	 * @return {Object} jQuery object
	 */
	$empty: function()
	{
		if(this.linkElement)
			{return this.element;}

		this.empty();
		this.shiftBuffer = [];
		this.pushBuffer = [];
		this.update();

		return this.element;
	},

	/**
	 * Like @items()@ but returns array of data instead of the jQuery object.
	 *
	 * @alias items('data')
	 * @alias jQuery.Chain.services.items.$data
	 *
	 * @return {Array} list of data
	 */
	$data: function(x)
	{
		return this.handler(x).map(function(){return $(this).item();}).get();
	},

	/**
	 * Bind Items to other (chained) element. If one of them is updated,
	 * the linked element will be updated.
	 *
	 * @alias items('link')
	 * @alias jQuery.Chain.services.items.$link
	 *
	 * @param {Object} element element/selector to be linked with
	 * @param {String} collection Collection to be linked with (has to be @"self"@ if linked to item)
	 *
	 * @return {Object} jQuery Element
	 *
	 * @see jQuery.Chain.services.items.collection
	 */
	$link: function(element, collection)
	{
		if(this.linkElement)
		{
			this.linkElement.unbind('update', this.linkUpdater);
			this.linkElement = null;
		}

		element = $(element);
		if(element.length)
		{
			var self = this;
			this.linkElement = element;
			this.linkFunction = function()
			{
				if(typeof collection == 'function')
				{
					try{
						return collection.call(self.element, self.linkElement);
					}catch(e){
						return $().eq(-1);
					}
				}
				else if(typeof collection == 'string')
				{
					return self.linkElement.items('collection', collection);
				}
				else
				{
					return $().eq(-1);
				}
			};

			this.linkUpdater = function()
			{
				self.$replace(self.linkFunction());
			};

			this.linkElement.bind('update', this.linkUpdater);
			this.linkUpdater();
		}

		return this.element;
	},

	/**
	 * Get index of an Item
	 *
	 * @alias items('index')
	 * @alias jQuery.Chain.services.items.$index
	 *
	 * @param {Object} item
	 *
	 * @return {Number} index
	 */
	$index: function(item)
	{
		return this.collection('all').index(this.handler(item));
	},

	/**
	 * Get collection of items. Define a collection by adding a function argument
	 *
	 * @alias items('collection')
	 * @alias jQuery.Chain.services.items.$collection
	 *
	 * @param {String} col Collection name
	 * @param {Function} fn Create a collection function
	 *
	 * @return {Object} jQuery Object
	 */
	$collection: function()
	{
		return this.collection.apply(this, Array.prototype.slice.call(arguments));
	},

	/**
	 * Check Status of @items@
	 *
	 * @alias items('active')
	 * @alias jQuery.Chain.services.items.$active
	 *
	 * @return {Boolean} Status
	 */
	$active: function()
	{
		return this.isActive;
	},

	/**
	 * Backup Item to the state before being built.
	 *
	 * @alias items('backup')
	 * @alias jQuery.Chain.services.items.$backup
	 *
	 * @return {Object} jQuery Object
	 */
	$backup: function()
	{
		if(!this.element.chain('active') || !this.isActive)
			{return this.element;}

		var buffer = [];
		this.collection('all').each(function(){
			var item = $(this).item();
			if(item)
				{buffer.push(item);}
		});

		this.pushBuffer = buffer.concat(this.pushBuffer);

		this.empty();

		return this.element;
	},

	/**
	 * Destroy items service.
	 *
	 * @alias items('destroy')
	 * @alias jQuery.Chain.services.items.$destroy
	 *
	 * @return {Object} jQuery Element
	 */
	$destroy: function()
	{
		this.empty();
		return this.element;
	}
});

$.Chain.extend('items', {
	/**
	 * Filtering subroutine
	 *
	 * @alias jQuery.Chain.services.items.doFilter
	 */
	doFilter: function()
	{
		var props = this.searchProperties;
		var text = this.searchText;

		if(text)
		{
			if(typeof text == 'string')
				{text = text.toLowerCase();}

			var items = this.element.items(true).filter(function(){
				var data = $(this).item();
				if(props)
				{
					for(var i=0; i<props.length; i++)
					{
						if(typeof data[props[i]] == 'string'
							&& !!(typeof text == 'string' ? data[props[i]].toLowerCase() : data[props[i]]).match(text))
							{return true;}
					}
				}
				else
				{
					for(var prop in data)
					{
						if(typeof data[prop] == 'string'
							&& !!(typeof text == 'string' ? data[prop].toLowerCase() : data[prop]).match(text))
							{return true;}
					}
				}
			});
			this.element.items(true).not(items).hide();
			items.show();
		}
		else
		{
			this.element.items(true).show();
			this.element.unbind('preupdate', this.searchBinding);
			this.searchBinding = null;
		}
	},

	/**
	 * Filter items by criteria. Filtered items will be hidden.
	 *
	 * @alias items('filter')
	 * @alias jQuery.Chain.services.items.$filter
	 *
	 * @param {String, RegExp} text Search keyword
	 * @param {String, Array} properties Search properties
	 *
	 * @return {Object} jQuery Object
	 */
	$filter: function(text, properties)
	{
		if(!arguments.length)
			{return this.update();}

		this.searchText = text;

		if(typeof properties == 'string')
			{this.searchProperties = [properties];}
		else if(properties instanceof Array)
			{this.searchProperties = properties;}
		else
			{this.searchProperties = null;}

		if(!this.searchBinding)
		{
			var self = this;
			this.searchBinding = function(event, item){self.doFilter();};
			this.element.bind('preupdate', this.searchBinding);
		}

		return this.update();
	}
});

$.Chain.extend('items', {
	/**
	 * Sorting subroutine
	 *
	 * @alias jQuery.Chain.services.items.doSort
	 */
	doSort: function()
	{
		var name = this.sortName;
		var opt = this.sortOpt;

		var sorter =
		{
			'number': function(a, b){
				return parseFloat(($(a).item()[name]+'').match(/\d+/gi)[0])
					- parseFloat(($(b).item()[name]+'').match(/\d+/gi)[0]);
			},

			'default': function(a, b){
				return $(a).item()[name] > $(b).item()[name] ? 1 : -1;
			}
		};

		if(name)
		{
			var sortfn = opt.fn || sorter[opt.type] || sorter['default'];

			var array = this.element.items(true).get().sort(sortfn);

			array = opt.desc ? array.reverse() : array;

			for(var i=0; i<array.length; i++)
				{this.element.chain('anchor').append(array[i]);}

			opt.desc = opt.toggle ? !opt.desc : opt.desc;
		}
		else
		{
			this.element.unbind('preupdate', this.sortBinding);
			this.sortBinding = null;
		}
	},

	/**
	 * Sort items by property.
	 *
	 * @alias items('sort')
	 * @alias jQuery.Chain.services.items.$sort
	 *
	 * @param {String} name sorting property
	 * @param {Object} opt {toggle:true/false, desc:true/false, type:'number/default'}
	 *
	 * @return {Object} jQuery Object
	 */
	$sort: function(name, opt)
	{
		if(!name && name !== null && name !== false)
			{return this.update();}

		if(this.sortName != name)
			{this.sortOpt = $.extend({desc:false, type:'default', toggle:false}, opt);}
		else
			{$.extend(this.sortOpt, opt);}

		this.sortName = name;

		if(!this.sortBinding)
		{
			var self = this;
			this.sortBinding = function(event, item){self.doSort();};
			this.element.bind('preupdate', this.sortBinding);
		}

		return this.update();
	}
});

})(jQuery);

(function($) {

    $.fn.projectViewer = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('ProjectViewer'),
                args,
                action;

            if (!obj) return $().eq(-1);

            action = obj[options];

            if (typeof action === 'function') {
                args = Array.prototype.slice.call(arguments, 1);

                return action.apply(obj, args);
            } else {
                return $().eq(-1);
            }
        }

        options = $.extend($.fn.projectViewer.defaults, options);

        return this.each(function() {
            var $self = $(this);

            $self.items([]).chain(function() {
                var model = this.item();

                $(this).bind('click.projectViewer', function() {
                    var $clicked = $(this);
                    $self.find('li').removeClass(options.selectedClass);
                    $clicked.toggleClass(options.selectedClass);

                    $.isFunction(options.selectionChange) && options.selectionChange.call($self, model)
                });
            });

            $self.data('ProjectViewer', {
                $container: $self,

                add: function(item) {
                    return this.$container.items('add', item);
                },

                destroy: function() {
                    this.$container.children().unbind('.projectViewer');
                    return $().eq(-1);
                }
            });
        });
    };

    $.fn.projectViewer.defaults = {
        selectedClass: 'selected',

        selectionChange: null
    };

})(jQuery);



(function($) {

    $.fn.styleEditor = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('StyleEditor'),
                args,
                action;

            if (!obj) return $().eq(-1);

            action = obj[options];

            if (typeof action === 'function') {
                args = Array.prototype.slice.call(arguments, 1);

                return action.apply(obj, args);
            } else {
                return $().eq(-1);
            }
        }

        options = $.extend($.fn.styleEditor.defaults, options);

        return this.each(function() {
            var $self = $(this),
                model = {
                    init: function(el) {
                        var self = this;

                        this.$context = el;
                        this.$strokeColorPicker = this.$context.find(options.strokeColorSelector);
                        this.$fillColorPicker = this.$context.find(options.fillColorSelector);
                        this.$strokeWeight = this.$context.find(options.strokeWeightSelector);

                        if (!this.$strokeColorPicker.data('ColorPicker'))
                            this.$strokeColorPicker.colorPicker();

                        this.$strokeColorPicker.bind('ColorChanged', function(event, data) {
                            self.triggerStyleChanged.call(self);
                        });

                        if (!this.$fillColorPicker.data('ColorPicker'))
                            this.$fillColorPicker.colorPicker();

                        this.$fillColorPicker.bind('ColorChanged.StyleEditor', function() {
                            self.triggerStyleChanged.call(self);
                        });

                        this.$strokeWeight.bind('change.StyleEditor', function() {
                            self.triggerStyleChanged.call(self);
                        });
                    },

                    triggerStyleChanged: function() {
                        this.$context.trigger('StyleChanged', { newStyle: this.style() });
                    },

                    style: function() {
                        var selectedStyle = {};

                        selectedStyle.stroke = this.$strokeColorPicker.colorPicker('color');
                        selectedStyle.fill = this.$fillColorPicker.colorPicker('color');
                        selectedStyle.strokeWeight = parseFloat(this.$strokeWeight.val());

                        return selectedStyle;
                    },

                    destroy: function() {
                        this.$strokeColorPicker.unbind('.StyleEditor');
                        this.$fillColorPicker.unbind('.StyleEditor');
                        this.$strokeWeight.unbind('.StyleEditor');

                        this.$strokeColorPicker.colorPicker('destroy');
                        this.$fillColorPicker.colorPicker('destroy');
                    }
                };

            $self.data('StyleEditor', model);
            model.init($self);
        });

    };

    $.fn.styleEditor.defaults = {
        strokeColorSelector: '.stroke',
        fillColorSelector: '.fill',
        strokeWeightSelector: '.stroke-weight'
    };



    $.styleEditor = function(style, options) {
        options = $.extend($.fn.styleEditor.defaults, options);

        var $container =  $('<div></div>')
                            .addClass('style-editor'),
            $strokeColor = $.colorPicker(style.stroke, { title: 'Stroke' })
                            .addClass('stroke'),
            $fillColor = $.colorPicker(style.fill, { title: 'Fill' })
                            .addClass('fill'),
            $strokeWeightContainer = $('<p class="stroke-weight-container"></p>'),
            $strokeWeightLabel = $('<span></span>')
                                    .addClass('property-label')
                                    .text('Weight'),
            $strokeWeight = $('<input></input>')
                            .addClass('stroke-weight')
                            .addClass('property-value')
                            .attr('type', 'text')
                            .val(style.strokeWeight);

        return $container
                .append($strokeColor)
                .append($fillColor)
                .append($strokeWeightContainer
                        .append($strokeWeightLabel)
                        .append($strokeWeight))
                .styleEditor(options);;
    };

})(jQuery);

(function($) {

    $.fn.propertiesEditor = function(options) {
        var $self = this,
            $list = $('<ul></ul>'),
            $title = $('<h3></h3>').addClass(options.titleClass),
            $label,
            $item,
            $edit,
            $styleEditor;

        options = $.extend($.fn.propertiesEditor.defaults, options);

        if (!options.model) return this;

        this.data('PropertiesEditor', options.model);

        this.empty()

        $title.appendTo(this).html(options.title);
        for(var prop in options.model) {

            var propType = typeof options.model[prop]
                propName = prop;

            switch (propType) {
                case 'function':
                    break;
                case 'object':
                    console.log('creating styleeditor for ' + propName);
                    $item = $('<li></li>').css('clear', 'both');
                    $styleEditor = $.styleEditor(options.model[propName], {});
                    $item.append($styleEditor).appendTo($list);

                    $styleEditor.bind('StyleChanged.PropertiesEditor', function(event, data) {
                        options.model['style'] = data.newStyle;
                        console.log(options.model);
                        $.isFunction(options.propertyChange) && options.propertyChange.call($self);
                    });
                    break;
                default:
                    $edit = $('<input></input>')
                        .addClass(options.propertyValueClass)
                        .attr('type', 'text')
                        .attr('name', prop)
                        .attr('value', options.model[prop]);

                    if (typeof options.model[prop] === 'object')
                        $edit.attr('readonly', 'true');

                    $label = $('<label></labell>').attr('for', prop).addClass(options.propertyLabelClass).text(prop);
                    $item = $('<li></li>').css('clear', 'both');
                    $label.appendTo($item);
                    $edit.appendTo($item);
                    $item.appendTo($list);

                    $edit.blur(function() {
                        var oldValue = options.model[this.name],
                            newValue = $(this).val();

                        if (newValue != oldValue) {
                            if (typeof oldValue === 'number') newValue = parseInt(newValue);
                            options.model[this.name] = newValue;
                        }

                        $.isFunction(options.propertyChange) && options.propertyChange.call($self);
                    });

                    break;
            }

        }

        $list.appendTo(this);

        return this;
    }

    $.fn.propertiesEditor.defaults = {
        title: 'Properties',
        titleClass: 'name',
        propertyLabelClass: 'property-label',
        propertyValueClass: 'property-value',
        propertyChange: null
    }


})(jQuery);
/* Copyright (c) 2006 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * $LastChangedDate: 2007-12-20 09:02:08 -0600 (Thu, 20 Dec 2007) $
 * $Rev: 4265 $
 *
 * Version: 3.0
 *
 * Requires: $ 1.2.2+
 */

(function($) {

$.event.special.mousewheel = {
	setup: function() {
		var handler = $.event.special.mousewheel.handler;

		if ( $.browser.mozilla )
			$(this).bind('mousemove.mousewheel', function(event) {
				$.data(this, 'mwcursorposdata', {
					pageX: event.pageX,
					pageY: event.pageY,
					clientX: event.clientX,
					clientY: event.clientY
				});
			});

		if ( this.addEventListener )
			this.addEventListener( ($.browser.mozilla ? 'DOMMouseScroll' : 'mousewheel'), handler, false);
		else
			this.onmousewheel = handler;
	},

	teardown: function() {
		var handler = $.event.special.mousewheel.handler;

		$(this).unbind('mousemove.mousewheel');

		if ( this.removeEventListener )
			this.removeEventListener( ($.browser.mozilla ? 'DOMMouseScroll' : 'mousewheel'), handler, false);
		else
			this.onmousewheel = function(){};

		$.removeData(this, 'mwcursorposdata');
	},

	handler: function(event) {
		var args = Array.prototype.slice.call( arguments, 1 );

		event = $.event.fix(event || window.event);
		$.extend( event, $.data(this, 'mwcursorposdata') || {} );
		var delta = 0, returnValue = true;

		if ( event.wheelDelta ) delta = event.wheelDelta/120;
		if ( event.detail     ) delta = -event.detail/3;

		event.data  = event.data || {};
		event.type  = "mousewheel";

		args.unshift(delta);
		args.unshift(event);

		return $.event.handle.apply(this, args);
	}
};

$.fn.extend({
	mousewheel: function(fn) {
		return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
	},

	unmousewheel: function(fn) {
		return this.unbind("mousewheel", fn);
	}
});

})(jQuery);
(function(A){A.jScrollPane={active:[]};A.fn.jScrollPane=function(C){C=A.extend({},A.fn.jScrollPane.defaults,C);var B=function(){return false};return this.each(function(){var O=A(this);O.css("overflow","hidden");var X=this;if(A(this).parent().is(".jScrollPaneContainer")){var Ac=C.maintainPosition?O.position().top:0;var L=A(this).parent();var d=L.innerWidth();var Ad=L.outerHeight();var M=Ad;A(">.jScrollPaneTrack, >.jScrollArrowUp, >.jScrollArrowDown",L).remove();O.css({top:0})}else{var Ac=0;this.originalPadding=O.css("paddingTop")+" "+O.css("paddingRight")+" "+O.css("paddingBottom")+" "+O.css("paddingLeft");this.originalSidePaddingTotal=(parseInt(O.css("paddingLeft"))||0)+(parseInt(O.css("paddingRight"))||0);var d=O.innerWidth();var Ad=O.innerHeight();var M=Ad;O.wrap(A("<div></div>").attr({className:"jScrollPaneContainer"}).css({height:Ad+"px",width:d+"px"}));A(document).bind("emchange",function(Ae,Af,p){O.jScrollPane(C)})}if(C.reinitialiseOnImageLoad){var N=A.data(X,"jScrollPaneImagesToLoad")||A("img",O);var G=[];if(N.length){N.each(function(p,Ae){A(this).bind("load",function(){if(A.inArray(p,G)==-1){G.push(Ae);N=A.grep(N,function(Ag,Af){return Ag!=Ae});A.data(X,"jScrollPaneImagesToLoad",N);C.reinitialiseOnImageLoad=false;O.jScrollPane(C)}}).each(function(Af,Ag){if(this.complete||this.complete===undefined){this.src=this.src}})})}}var o=this.originalSidePaddingTotal;var l={height:"auto",width:d-C.scrollbarWidth-C.scrollbarMargin-o+"px"};if(C.scrollbarOnLeft){l.paddingLeft=C.scrollbarMargin+C.scrollbarWidth+"px"}else{l.paddingRight=C.scrollbarMargin+"px"}O.css(l);var m=O.outerHeight();var i=Ad/m;if(i<0.99){var H=O.parent();H.append(A("<div></div>").attr({className:"jScrollPaneTrack"}).css({width:C.scrollbarWidth+"px"}).append(A("<div></div>").attr({className:"jScrollPaneDrag"}).css({width:C.scrollbarWidth+"px"}).append(A("<div></div>").attr({className:"jScrollPaneDragTop"}).css({width:C.scrollbarWidth+"px"}),A("<div></div>").attr({className:"jScrollPaneDragBottom"}).css({width:C.scrollbarWidth+"px"}))));var z=A(">.jScrollPaneTrack",H);var P=A(">.jScrollPaneTrack .jScrollPaneDrag",H);if(C.showArrows){var g;var Ab;var S;var r;var j=function(){if(r>4||r%4==0){y(u+Ab*b)}r++};var K=function(p){A("html").unbind("mouseup",K);g.removeClass("jScrollActiveArrowButton");clearInterval(S)};var Z=function(){A("html").bind("mouseup",K);g.addClass("jScrollActiveArrowButton");r=0;j();S=setInterval(j,100)};H.append(A("<a></a>").attr({href:"javascript:;",className:"jScrollArrowUp"}).css({width:C.scrollbarWidth+"px"}).html("Scroll up").bind("mousedown",function(){g=A(this);Ab=-1;Z();this.blur();return false}).bind("click",B),A("<a></a>").attr({href:"javascript:;",className:"jScrollArrowDown"}).css({width:C.scrollbarWidth+"px"}).html("Scroll down").bind("mousedown",function(){g=A(this);Ab=1;Z();this.blur();return false}).bind("click",B));var Q=A(">.jScrollArrowUp",H);var J=A(">.jScrollArrowDown",H);if(C.arrowSize){M=Ad-C.arrowSize-C.arrowSize;z.css({height:M+"px",top:C.arrowSize+"px"})}else{var s=Q.height();C.arrowSize=s;M=Ad-s-J.height();z.css({height:M+"px",top:s+"px"})}}var w=A(this).css({position:"absolute",overflow:"visible"});var D;var Y;var b;var u=0;var V=i*Ad/2;var a=function(Ae,Ag){var Af=Ag=="X"?"Left":"Top";return Ae["page"+Ag]||(Ae["client"+Ag]+(document.documentElement["scroll"+Af]||document.body["scroll"+Af]))||0};var f=function(){return false};var v=function(){n();D=P.offset(false);D.top-=u;Y=M-P[0].offsetHeight;b=2*C.wheelSpeed*Y/m};var E=function(p){v();V=a(p,"Y")-u-D.top;A("html").bind("mouseup",T).bind("mousemove",h);if(A.browser.msie){A("html").bind("dragstart",f).bind("selectstart",f)}return false};var T=function(){A("html").unbind("mouseup",T).unbind("mousemove",h);V=i*Ad/2;if(A.browser.msie){A("html").unbind("dragstart",f).unbind("selectstart",f)}};var y=function(Ae){Ae=Ae<0?0:(Ae>Y?Y:Ae);u=Ae;P.css({top:Ae+"px"});var Af=Ae/Y;w.css({top:((Ad-m)*Af)+"px"});O.trigger("scroll");if(C.showArrows){Q[Ae==0?"addClass":"removeClass"]("disabled");J[Ae==Y?"addClass":"removeClass"]("disabled")}};var h=function(p){y(a(p,"Y")-D.top-V)};var q=Math.max(Math.min(i*(Ad-C.arrowSize*2),C.dragMaxHeight),C.dragMinHeight);P.css({height:q+"px"}).bind("mousedown",E);var k;var R;var I;var t=function(){if(R>8||R%4==0){y((u-((u-I)/2)))}R++};var Aa=function(){clearInterval(k);A("html").unbind("mouseup",Aa).unbind("mousemove",e)};var e=function(p){I=a(p,"Y")-D.top-V};var U=function(p){v();e(p);R=0;A("html").bind("mouseup",Aa).bind("mousemove",e);k=setInterval(t,100);t()};z.bind("mousedown",U);H.bind("mousewheel",function(Ae,Ag){v();n();var Af=u;y(u-Ag*b);var p=Af!=u;return !p});var F;var W;function c(){var p=(F-u)/C.animateStep;if(p>1||p<-1){y(u+p)}else{y(F);n()}}var n=function(){if(W){clearInterval(W);delete F}};var x=function(Af,p){if(typeof Af=="string"){$e=A(Af,O);if(!$e.length){return}Af=$e.offset().top-O.offset().top}H.scrollTop(0);n();var Ae=-Af/(Ad-m)*Y;if(p||!C.animateTo){y(Ae)}else{F=Ae;W=setInterval(c,C.animateInterval)}};O[0].scrollTo=x;O[0].scrollBy=function(Ae){var p=-parseInt(w.css("top"))||0;x(p+Ae)};v();x(-Ac,true);A("*",this).bind("focus",function(Ah){var Ag=A(this);var Aj=0;while(Ag[0]!=O[0]){Aj+=Ag.position().top;Ag=Ag.offsetParent()}var p=-parseInt(w.css("top"))||0;var Ai=p+Ad;var Af=Aj>p&&Aj<Ai;if(!Af){var Ae=Aj-C.scrollbarMargin;if(Aj>p){Ae+=A(this).height()+15+C.scrollbarMargin-Ad}x(Ae)}});if(location.hash){x(location.hash)}A(document).bind("click",function(Ae){$target=A(Ae.target);if($target.is("a")){var p=$target.attr("href");if(p.substr(0,1)=="#"){x(p)}}});A.jScrollPane.active.push(O[0])}else{O.css({height:Ad+"px",width:d-this.originalSidePaddingTotal+"px",padding:this.originalPadding});O.parent().unbind("mousewheel")}})};A.fn.jScrollPane.defaults={scrollbarWidth:10,scrollbarMargin:5,wheelSpeed:18,showArrows:false,arrowSize:0,animateTo:false,dragMinHeight:1,dragMaxHeight:99999,animateInterval:100,animateStep:3,maintainPosition:true,scrollbarOnLeft:false,reinitialiseOnImageLoad:false};A(window).bind("unload",function(){var C=A.jScrollPane.active;for(var B=0;B<C.length;B++){C[B].scrollTo=C[B].scrollBy=null}})})(jQuery);

(function($) {

    $.fn.scrollable = function(options) {
        var self = this,
            delayedInitId;

        options = $.extend($.fn.scrollable.defaults, options);

        if (options.reInitialiseOnResize) {
            $(window).resize(function() {
                var ctx = self;

                window.clearTimeout(delayedInitId);
                delayedInitId = window.setTimeout(function() {
                    initialiseJScrollPane(self);
                }, 10)
            });
        }
        return initialiseJScrollPane(self);

        function initialiseJScrollPane(ctx) {
            return ctx.each(function() {
                var $self = $(this);
                $self.jScrollPane({
                    scrollbarWidth: 5,
                    scrollbarMargin: 15,
                    showArrows: false
                });
            });
        }
    };

    $.fn.scrollable.defaults = {
        reInitialiseOnResize: false
    };

})(jQuery);

(function($) {

    $.fn.shapeSelector = function() {
        var $self = this,
            selectedShape = selectShape(this.children('li.selected').attr('id'));

        $self.data('SelectedShape', selectedShape);

        this.children('li').click(function() {
            $self.children('li').removeClass('selected');
            $(this).toggleClass('selected');
            $self.data('SelectedShape', selectShape(this.id));
        });

        function selectShape(id) {
            var result;

            switch (id) {
                case 'shape-circle':
                    return 'Circle';
                case 'shape-rectangle':
                    return 'Rectangle';
                default:
                    return 'Circle';
            }
        }

        return this;
    };

})(jQuery);
(function() {

    window.theater = { };

})();

(function() {

    theater.Stage = {

        animations: [],

        actors: [],

        init: function(canvasId, fps, size,
                    onDraw /*optional*/) {
            var self = this,
                canvas = document.getElementById(canvasId);

            if (!canvas.getContext) return;

            this.fps = fps;
            this.context = canvas.getContext('2d');
            this.onDraw = onDraw;
            this.boundCallback = function() {
                self.draw.call(self);
                if (self.onDraw)
                    self.onDraw.call(self);
            };
            this.size = size;
            this.isRunning = false;
            this.time = 0;

            return this;
        },

        start: function() {
            if (this.isRunning) return this;
            this.isRunning = true;

            if (this.context && this.boundCallback && !this.intervalId) {
                this.intervalId = window.setInterval(this.boundCallback, 1000 / this.fps);
            }

            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].start();
            }

            return this;
        },

        stop: function() {
            if (!this.isRunning) return this;
            this.isRunning = false;

            if (this.context && this.boundCallback && this.intervalId) {
                window.clearInterval(this.intervalId);
                this.intervalId = undefined;
            }

            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].stop();
            }

            return this;
        },

        rewind: function() {
            this.stop();
            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].reset(true);
            }
            this.time = 0;
            this.draw();
        },

        clear: function() {
            if (!this.context) return this;

            this.context.clearRect(0, 0, this.size, this.size);

            return this;
        },

        draw: function() {
            this.clear();

            for (var i = 0, l = this.actors.length; i < l; i++) {
                this.actors[i].draw(this);
            }
            for (var j = 0, m = this.animations.length; j < m; j++) {
                this.animations[j].advanceFrame();
            }

            this.time += 1000 / this.fps;
            return this;
        }

    };

})();

/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

    jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
        jQuery.fx.step[attr] = function(fx){
            if ( !fx.colorInit ) {
                fx.start = getColor( fx.elem, attr );
                fx.end = getRGB( fx.end );
                fx.colorInit = true;
            }

            fx.elem.style[attr] = "rgb(" + [
                Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
                Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
                Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
            ].join(",") + ")";
        }
    });


    function getRGB(color) {
        var result;

        if ( color && color.constructor == Array && color.length == 3 )
            return color;

        if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
            return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

        if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
            return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

        if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
            return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

        if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
            return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

        if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
            return colors['transparent'];

        return colors[jQuery.trim(color).toLowerCase()];
    }

    function getColor(elem, attr) {
        var color;

        do {
            color = jQuery.curCSS(elem, attr);

            if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
                break;

            attr = "backgroundColor";
        } while ( elem = elem.parentNode );

        return getRGB(color);
    };


    var colors = {
        aqua:[0,255,255],
        azure:[240,255,255],
        beige:[245,245,220],
        black:[0,0,0],
        blue:[0,0,255],
        brown:[165,42,42],
        cyan:[0,255,255],
        darkblue:[0,0,139],
        darkcyan:[0,139,139],
        darkgrey:[169,169,169],
        darkgreen:[0,100,0],
        darkkhaki:[189,183,107],
        darkmagenta:[139,0,139],
        darkolivegreen:[85,107,47],
        darkorange:[255,140,0],
        darkorchid:[153,50,204],
        darkred:[139,0,0],
        darksalmon:[233,150,122],
        darkviolet:[148,0,211],
        fuchsia:[255,0,255],
        gold:[255,215,0],
        green:[0,128,0],
        indigo:[75,0,130],
        khaki:[240,230,140],
        lightblue:[173,216,230],
        lightcyan:[224,255,255],
        lightgreen:[144,238,144],
        lightgrey:[211,211,211],
        lightpink:[255,182,193],
        lightyellow:[255,255,224],
        lime:[0,255,0],
        magenta:[255,0,255],
        maroon:[128,0,0],
        navy:[0,0,128],
        olive:[128,128,0],
        orange:[255,165,0],
        pink:[255,192,203],
        purple:[128,0,128],
        violet:[128,0,128],
        red:[255,0,0],
        silver:[192,192,192],
        white:[255,255,255],
        yellow:[255,255,0],
        transparent: [255,255,255]
    };

})(jQuery);

(function($) {

    $.fn.timer = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('timer'),
                args,
                action;

            if (!obj) return $().eq(-1);

            action = obj[options];

            if (typeof action === 'function') {
                args = Array.prototype.slice.call(arguments, 1);

                return action.apply(obj, args);
            } else {
                return $().eq(-1);
            }
        }

        options = $.extend($.fn.timer.defaults, options);

        return this.each(function() {
            var $self = $(this),
                $minutes = $self.find(options.minutesSelector),
                $seconds = $self.find(options.secondsSelector),
                $milliSeconds = $self.find(options.milliSecondsSelector),
                originalColor = $self.css('color');

            $self.data('timer', {
                $seconds: $seconds,
                $minutes: $minutes,
                $milliSeconds: $milliSeconds,
                originalColor: originalColor,

                update: function(newMilliSeconds) {
                    var newMinutes = Math.floor(newMilliSeconds / 60000),
                        newSeconds = Math.floor((newMilliSeconds - (newMinutes * 60000)) / 1000),
                        newMilliseconds = newMilliSeconds - ((newSeconds * 1000) + (newMinutes * 60000));

                    this.changeElement(this.$minutes, newMinutes);
                    this.changeElement(this.$seconds, newSeconds);
                    this.$milliSeconds.text(newMilliseconds);

                    return $self;
                },

                changeElement: function(el, val) {
                    if (el.text() != val) {
                        el.text(val);
                        el.stop()
                            .animate({ 'color': '#fff' }, 200)
                            .animate({ 'color': '#19f0fc' }, 200);
                    }
                },

                start: function() {
                    return $self.stop().animate({ 'color': '#19f0fc' }, 'fast');
                },

                stop: function() {
                    this.$minutes.css('color', this.originalColor);
                    this.$seconds.css('color', this.originalColor);
                    return $self.stop().animate({ 'color': this.originalColor }, 'fast');
                },

                rewind: function() {
                    this.update(0);
                    return this.stop();
                }
            });

        });

    };

    $.fn.timer.defaults = {
        minutesSelector: '.timer > .minutes',
        secondsSelector: '.timer > .seconds',
        milliSecondsSelector: '.timer > .milliseconds',
        startedClass: 'started'
    }

})(jQuery);


(function($) {

    $.fn.stageControl = function(options) {

        options = $.extend($.fn.stageControl.defaults, options);
        if (!options.stage) return $().eq(-1);

        return this.each(function() {
            var $self = $(this),
                $timer = $self.find(options.timerSelector),
                $play = $(options.startSelector),
                $rewind = $(options.rewindSelector),
                $pause = $(options.stopSelector);


            $play.button({ icon: webscenator.ui.icons.play });
            $rewind.button({ icon: webscenator.ui.icons.rewind });
            $pause.button({ icon: webscenator.ui.icons.pause });
            $timer.timer();

            options.stage.onDraw = function() {
                $timer.timer('update', this.time);
            };

            $play.click(function() {
                stage.start();
                $timer.timer('start');
            });
            $pause.click(function() {
                stage.stop();
                $timer.timer('stop');
            });
            $rewind.click(function() {
                stage.rewind();
                $timer.timer('rewind');
            });
            $self.find(options.refreshSelector).click(function() {
                stage.draw();
            });
        });

    };

    $.fn.stageControl.defaults = {
        timerSelector: '#stage-timer',
        startSelector: '.play',
        stopSelector: '.pause',
        rewindSelector: '.rewind',
        refreshSelector: '.refresh'
    };

})(jQuery);
(function() {
    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }
})();

(function() {

    theater.Easing = {

        linear: function(time, startValue, endValue, duration) {
            return endValue * time / duration + startValue;
        },

        easeInQuad: function (time, startValue, endValue, duration) {
            time /= duration;
            return endValue * time * time + startValue;
        },

        easeOutQuad: function (time, startValue, endValue, duration) {
            time /= duration;
            return -endValue * time*(time-2) + startValue;
        },

        easeInOutQuad: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return endValue/2*time*time + startValue;
            time--;
            return -endValue/2 * (time*(time-2) - 1) + startValue;
        },

        easeInCubic: function (time, startValue, endValue, duration) {
            time /= duration;
            return endValue*time*time*time + startValue;
        },

        easeOutCubic: function (time, startValue, endValue, duration) {
            time /= duration;
            time--;
            return endValue*(time*time*time + 1) + startValue;
        },

        easeInOutCubic: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return endValue/2*time*time*time + startValue;
            time -= 2;
            return endValue/2*(time*time*time + 2) + startValue;
        },

        easeInQuart: function (time, startValue, endValue, duration) {
            time /= duration;
            return endValue*time*time*time*time + startValue;
        },

        easeOutQuart: function (time, startValue, endValue, duration) {
            time /= duration;
            time--;
            return -endValue * (time*time*time*time - 1) + startValue;
        },

        easeInOutQuart: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return endValue/2*time*time*time*time + startValue;
            time -= 2;
            return -endValue/2 * (time*time*time*time - 2) + startValue;
        },

        easeInQuint: function (time, startValue, endValue, duration) {
            time /= duration;
            return endValue*time*time*time*time*time + startValue;
        },

        easeOutQuint: function (time, startValue, endValue, duration) {
            time /= duration;
            time--;
            return endValue*(time*time*time*time*time + 1) + startValue;
        },

        easeInSine: function (time, startValue, endValue, duration) {
            return -endValue * Math.cos(time/duration * (Math.PI/2)) + endValue + startValue;
        },

        easeOutSine: function (time, startValue, endValue, duration) {
            return endValue * Math.sin(time/duration * (Math.PI/2)) + startValue;
        },

        easeInOutSine: function (time, startValue, endValue, duration) {
            return -endValue/2 * (Math.cos(Math.PI*time/duration) - 1) + startValue;
        },

        easeInExpo: function (time, startValue, endValue, duration) {
            return endValue * Math.pow( 2, 10 * (time/duration - 1) ) + startValue;
        },

        easeOutExpo: function (time, startValue, endValue, duration) {
            return endValue * ( -Math.pow( 2, -10 * time/duration ) + 1 ) + startValue;
        },

        easeInOutExpo: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return endValue/2 * Math.pow( 2, 10 * (time - 1) ) + startValue;
            time--;
            return endValue/2 * ( -Math.pow( 2, -10 * time) + 2 ) + startValue;
        },

        easeInCirc: function (time, startValue, endValue, duration) {
            time /= duration;
            return -endValue * (Math.sqrt(1 - time*time) - 1) + startValue;
        },

        easeOutCirc: function (time, startValue, endValue, duration) {
            time /= duration;
            time--;
            return endValue * Math.sqrt(1 - time*time) + startValue;
        },

        easeInOutCirc: function (time, startValue, endValue, duration) {
            time /= duration/2;
            if (time < 1) return -endValue/2 * (Math.sqrt(1 - time*time) - 1) + startValue;
            time -= 2;
            return endValue/2 * (Math.sqrt(1 - time*time) + 1) + startValue;
        }

    }

})();

(function() {

    theater.Animation = {

        init: function(stage, duration, startValue,
                       endValue, targetObject, targetProperty,
                       revertOnStop /*optional*/, easingFunction /*optional */) {
            if (!(targetProperty in targetObject)) throw new Error("targetProperty is not a property of targetObject");
            this.originalValue = targetObject[targetProperty];
            this.stage = stage;
            this.duration = duration;
            this.startValue = startValue;
            this.endValue = endValue;
            this.targetObject = targetObject;
            this.targetProperty = targetProperty;
            this.totalFrames = stage.fps * duration / 1000;
            this.currentFrame = 0;
            this.isRunning = false;
            this.revertOnStop = revertOnStop || false;
            this.easingFunction = easingFunction || Easing.linear;

            return this;
        },

        start: function() {
            if (this.isRunning) return this;

            this.isRunning = true;
            if (this.currentFrame === 0) {
                this.originalValue = this.targetObject[this.targetProperty];
                this.targetObject[this.targetProperty] = this.startValue;
            }

            return this;
        },

        stop: function() {
            if (!this.isRunning) return this;

            this.isRunning = false;

            return this;
        },

        reset: function(rewind) {
            if (this.isRunning) this.stop();

            this.targetObject[this.targetProperty] = (rewind) ? this.startValue : this.originalValue;
            this.currentFrame = 0;

            return this;
        },

        advanceFrame: function() {
            if (!this.isRunning) return this;

            if (this.currentFrame == this.totalFrames) {
                this.isRunning = false;
                if (this.revertOnStop) {
                    this.targetObject[this.targetProperty] = this.originalValue;
                }
            } else {
                this.targetObject[this.targetProperty] = this.easingFunction(this.currentFrame, this.startValue, this.endValue, this.totalFrames);
                this.currentFrame++;
            }

            return this;
        }
    }

})();

(function() {

    theater.Color = {
        init: function(red, green, blue, alpha) {
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.alpha = alpha || 1;

            return this;
        },

        toRGBAString: function() {
            return 'rgba(' + this.red + ',' + this.green + ',' + this.blue + ',' + this.alpha + ')';
        },

        toRGBString: function() {
            return 'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
        },

        toHexString: function() {
            var hex = [
                this.red.toString(16),
                this.green.toString(16),
                this.blue.toString(16)
            ];

            for (var i = 0, l = hex.length; i < l; i++) {
                hex[i] = (hex[i].length == 1)
                    ? '0' + hex[i]
                    : hex[i];
            }

            return '#' + hex.join('');
        }
    }

})();

(function() {

    theater.Circle = {

        init: function(x, y, size, style) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.style = style;

            return this;
        },

        draw: function(stage) {
            var radius = this.size / 2;

            stage.context.strokeStyle = this.style.stroke.toRGBAString(25, 240, 252, 0.5);
            stage.context.lineWidth = this.style.strokeWeight;
            stage.context.fillStyle = this.style.fill.toRGBAString(25, 240, 252, 0.5);
            stage.context.beginPath();
            stage.context.arc(this.x, this.y, radius, 0, Math.PI * 2, true);

            if (this.style.fill.alpha != 0)
                stage.context.fill();
            if (this.style.stroke.alpha != 0)
                stage.context.stroke();

            return this;
        }
    };

})();

(function() {

    theater.Rectangle = {

        init: function(x, y, width, height, style) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.style = style;

            return this;
        },

        draw: function(stage) {
            var halfWidth = this.width / 2;
            var halfHeight = this.height / 2;

            stage.context.strokeStyle = this.style.stroke.toRGBAString(25, 240, 252, 0.5);
            stage.context.lineWidth = this.style.strokeWeight;
            stage.context.fillStyle = this.style.fill.toRGBAString(25, 240, 252, 0.5);
            stage.context.beginPath();

            stage.context.moveTo(this.x - halfWidth, this.y - halfHeight);
            stage.context.lineTo(this.x + halfWidth, this.y - halfHeight);
            stage.context.lineTo(this.x + halfWidth, this.y + halfHeight);
            stage.context.lineTo(this.x - halfWidth, this.y + halfHeight);
            stage.context.lineTo(this.x - halfWidth, this.y - halfHeight);

            if (this.style.fill.alpha != 0)
                stage.context.fill();
            if (this.style.stroke.alpha != 0)
                stage.context.stroke();

            return this;
        }
    };

})();



(function() {

    window.webscenator.services = { };

})();


(function($) {

    window.webscenator.services.ToolboxService = {


        init: function(environment) {
            console.log('Initialising webscenator.services.ToolboxService');
            this.environment = environment;

            console.log(' Initialising ToolboxService UI');
            this.$styleEditor = $('#style-palette .style-editor').styleEditor();
            this.$strokeWeight = $('#stroke-weight');
            this.$shapeSelector = $('#shapes').shapeSelector();
        },

        getSelectedTool: function() {
            return this.$shapeSelector.data('SelectedShape');
        },

        getSelectedStyle: function() {
            return this.$styleEditor.styleEditor('style');
        },

        destroy: function() {
        }

    };

})(jQuery);

(function($) {
    var services = webscenator.services;

    window.webscenator.Environment = {

        init: function() {
            console.log('Initialising Environment');
            this.initialiseEditor();
            this.initaliseServices();
        },

        initialiseEditor: function() {

        },

        initaliseServices: function() {
            this.toolboxService = Object.create(services.ToolboxService);
            this.toolboxService.init(this);
        }

    };

})(jQuery);

(function($) {

    $(document).ready(function() {
        var $canvas = $('#tile-canvas'),
            $projectViewer = $('#project-viewer'),
            stage = Object.create(theater.Stage),
            environment = Object.create(webscenator.Environment),
            redrawStage;

        environment.init();

        stage.init('tile-canvas', 20, 400);

        window.stage = stage;
        window.environ = environment;

        redrawStage = function() {
            stage.draw();
        }

        $canvas.click(function(evt) {
            var selectedShape = environment.toolboxService.getSelectedTool(),
                selectedStyle = environment.toolboxService.getSelectedStyle(),
                newShape,
                newShapeAnimation = Object.create(theater.Animation),
                newX = evt.pageX - $canvas.offset().left,
                newY = evt.pageY - $canvas.offset().top;

            switch (selectedShape) {
                case 'Circle':
                    newShape = Object.create(theater.Circle);
                    newShape.init(newX, newY, 50, selectedStyle);
                    break;
                case 'Rectangle':
                    newShape = Object.create(theater.Rectangle);
                    newShape.init(newX, newY, 75, 50, selectedStyle);
                    break;
            }

            newShapeAnimation.init(stage, 2000, newX, newX + 300, newShape, 'x', false, theater.Easing.easeOutSine);

            $projectViewer.projectViewer('add', { name: selectedShape, obj: newShape, animations: [ newShapeAnimation ] });

            $('.palette .content').scrollable();

            stage.actors.push(newShape);
            stage.animations.push(newShapeAnimation);
            newShape.draw(stage);
            if (stage.isRunning) newShapeAnimation.start();
        });


        console.log('Initialising palettes');
        $('.palette .content').scrollable();


        console.log('Initialising editor');
        function resizeViewport() {
            var editorHeight = $(window).height() - $('#top-activity-bar').height() - $('#bottom-dock').height() - 20;
            var editorWidth = $(window).width() - $('#right-dock').width();
            $('#editor').height(editorHeight);
            $('#editor').width(editorWidth);
        }
        resizeViewport();
        $(window).resize(resizeViewport);
        $('#editor').scrollable();


        console.log('Initialising docks');
        $('.dock > .content').scrollable({ reInitialiseOnResize: true });


        console.log('Initialising actors palette');
        $projectViewer.projectViewer({
            selectionChange: function(item) {
                $('#properties-palette').propertiesEditor({
                    title: item.name + ' Properties',
                    model: item.obj,
                    propertyChange: redrawStage
                });
            }
        });

        console.log('Initialising stage controls');
        $('#stage-control').stageControl({ stage: stage });
    });
})(jQuery);

(function() {

    window.Style = {

        init: function(strokeColor, fillColor) {
            this.strokeColor = strokeColor;
            this.fillColor = fillColor;

            return this;
        }

    }

})();
