// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37485 = [];
var len__35449__auto___37491 = arguments.length;
var i__35450__auto___37492 = (0);
while(true){
if((i__35450__auto___37492 < len__35449__auto___37491)){
args37485.push((arguments[i__35450__auto___37492]));

var G__37493 = (i__35450__auto___37492 + (1));
i__35450__auto___37492 = G__37493;
continue;
} else {
}
break;
}

var G__37487 = args37485.length;
switch (G__37487) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37485.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37488 = (function (f,blockable,meta37489){
this.f = f;
this.blockable = blockable;
this.meta37489 = meta37489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37490,meta37489__$1){
var self__ = this;
var _37490__$1 = this;
return (new cljs.core.async.t_cljs$core$async37488(self__.f,self__.blockable,meta37489__$1));
});

cljs.core.async.t_cljs$core$async37488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37490){
var self__ = this;
var _37490__$1 = this;
return self__.meta37489;
});

cljs.core.async.t_cljs$core$async37488.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37489","meta37489",187020231,null)], null);
});

cljs.core.async.t_cljs$core$async37488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37488";

cljs.core.async.t_cljs$core$async37488.cljs$lang$ctorPrWriter = (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async37488");
});

cljs.core.async.__GT_t_cljs$core$async37488 = (function cljs$core$async$__GT_t_cljs$core$async37488(f__$1,blockable__$1,meta37489){
return (new cljs.core.async.t_cljs$core$async37488(f__$1,blockable__$1,meta37489));
});

}

return (new cljs.core.async.t_cljs$core$async37488(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args37497 = [];
var len__35449__auto___37500 = arguments.length;
var i__35450__auto___37501 = (0);
while(true){
if((i__35450__auto___37501 < len__35449__auto___37500)){
args37497.push((arguments[i__35450__auto___37501]));

var G__37502 = (i__35450__auto___37501 + (1));
i__35450__auto___37501 = G__37502;
continue;
} else {
}
break;
}

var G__37499 = args37497.length;
switch (G__37499) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37497.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37504 = [];
var len__35449__auto___37507 = arguments.length;
var i__35450__auto___37508 = (0);
while(true){
if((i__35450__auto___37508 < len__35449__auto___37507)){
args37504.push((arguments[i__35450__auto___37508]));

var G__37509 = (i__35450__auto___37508 + (1));
i__35450__auto___37508 = G__37509;
continue;
} else {
}
break;
}

var G__37506 = args37504.length;
switch (G__37506) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37504.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37511 = [];
var len__35449__auto___37514 = arguments.length;
var i__35450__auto___37515 = (0);
while(true){
if((i__35450__auto___37515 < len__35449__auto___37514)){
args37511.push((arguments[i__35450__auto___37515]));

var G__37516 = (i__35450__auto___37515 + (1));
i__35450__auto___37515 = G__37516;
continue;
} else {
}
break;
}

var G__37513 = args37511.length;
switch (G__37513) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37511.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37518 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37518);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37518,ret){
return (function (){
return fn1.call(null,val_37518);
});})(val_37518,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37519 = [];
var len__35449__auto___37522 = arguments.length;
var i__35450__auto___37523 = (0);
while(true){
if((i__35450__auto___37523 < len__35449__auto___37522)){
args37519.push((arguments[i__35450__auto___37523]));

var G__37524 = (i__35450__auto___37523 + (1));
i__35450__auto___37523 = G__37524;
continue;
} else {
}
break;
}

var G__37521 = args37519.length;
switch (G__37521) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37519.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__35259__auto___37526 = n;
var x_37527 = (0);
while(true){
if((x_37527 < n__35259__auto___37526)){
(a[x_37527] = (0));

var G__37528 = (x_37527 + (1));
x_37527 = G__37528;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37529 = (i + (1));
i = G__37529;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37533 = (function (flag,meta37534){
this.flag = flag;
this.meta37534 = meta37534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37535,meta37534__$1){
var self__ = this;
var _37535__$1 = this;
return (new cljs.core.async.t_cljs$core$async37533(self__.flag,meta37534__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37535){
var self__ = this;
var _37535__$1 = this;
return self__.meta37534;
});})(flag))
;

cljs.core.async.t_cljs$core$async37533.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37533.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37534","meta37534",-1406804378,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37533";

cljs.core.async.t_cljs$core$async37533.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async37533");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37533 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37533(flag__$1,meta37534){
return (new cljs.core.async.t_cljs$core$async37533(flag__$1,meta37534));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37533(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37539 = (function (flag,cb,meta37540){
this.flag = flag;
this.cb = cb;
this.meta37540 = meta37540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37541,meta37540__$1){
var self__ = this;
var _37541__$1 = this;
return (new cljs.core.async.t_cljs$core$async37539(self__.flag,self__.cb,meta37540__$1));
});

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37541){
var self__ = this;
var _37541__$1 = this;
return self__.meta37540;
});

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37540","meta37540",-1197757847,null)], null);
});

cljs.core.async.t_cljs$core$async37539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37539";

cljs.core.async.t_cljs$core$async37539.cljs$lang$ctorPrWriter = (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async37539");
});

cljs.core.async.__GT_t_cljs$core$async37539 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37539(flag__$1,cb__$1,meta37540){
return (new cljs.core.async.t_cljs$core$async37539(flag__$1,cb__$1,meta37540));
});

}

return (new cljs.core.async.t_cljs$core$async37539(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37542_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37543_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37543_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34336__auto__ = wport;
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37544 = (i + (1));
i = G__37544;
continue;
}
} else {
return null;
}
break;
}
})();
var or__34336__auto__ = ret;
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__34324__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__34324__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__34324__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__35456__auto__ = [];
var len__35449__auto___37550 = arguments.length;
var i__35450__auto___37551 = (0);
while(true){
if((i__35450__auto___37551 < len__35449__auto___37550)){
args__35456__auto__.push((arguments[i__35450__auto___37551]));

var G__37552 = (i__35450__auto___37551 + (1));
i__35450__auto___37551 = G__37552;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((1) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35457__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37547){
var map__37548 = p__37547;
var map__37548__$1 = ((((!((map__37548 == null)))?((((map__37548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37548):map__37548);
var opts = map__37548__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37545){
var G__37546 = cljs.core.first.call(null,seq37545);
var seq37545__$1 = cljs.core.next.call(null,seq37545);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37546,seq37545__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37553 = [];
var len__35449__auto___37603 = arguments.length;
var i__35450__auto___37604 = (0);
while(true){
if((i__35450__auto___37604 < len__35449__auto___37603)){
args37553.push((arguments[i__35450__auto___37604]));

var G__37605 = (i__35450__auto___37604 + (1));
i__35450__auto___37604 = G__37605;
continue;
} else {
}
break;
}

var G__37555 = args37553.length;
switch (G__37555) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37553.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37440__auto___37607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___37607){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___37607){
return (function (state_37579){
var state_val_37580 = (state_37579[(1)]);
if((state_val_37580 === (7))){
var inst_37575 = (state_37579[(2)]);
var state_37579__$1 = state_37579;
var statearr_37581_37608 = state_37579__$1;
(statearr_37581_37608[(2)] = inst_37575);

(statearr_37581_37608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (1))){
var state_37579__$1 = state_37579;
var statearr_37582_37609 = state_37579__$1;
(statearr_37582_37609[(2)] = null);

(statearr_37582_37609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (4))){
var inst_37558 = (state_37579[(7)]);
var inst_37558__$1 = (state_37579[(2)]);
var inst_37559 = (inst_37558__$1 == null);
var state_37579__$1 = (function (){var statearr_37583 = state_37579;
(statearr_37583[(7)] = inst_37558__$1);

return statearr_37583;
})();
if(cljs.core.truth_(inst_37559)){
var statearr_37584_37610 = state_37579__$1;
(statearr_37584_37610[(1)] = (5));

} else {
var statearr_37585_37611 = state_37579__$1;
(statearr_37585_37611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (13))){
var state_37579__$1 = state_37579;
var statearr_37586_37612 = state_37579__$1;
(statearr_37586_37612[(2)] = null);

(statearr_37586_37612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (6))){
var inst_37558 = (state_37579[(7)]);
var state_37579__$1 = state_37579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37579__$1,(11),to,inst_37558);
} else {
if((state_val_37580 === (3))){
var inst_37577 = (state_37579[(2)]);
var state_37579__$1 = state_37579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37579__$1,inst_37577);
} else {
if((state_val_37580 === (12))){
var state_37579__$1 = state_37579;
var statearr_37587_37613 = state_37579__$1;
(statearr_37587_37613[(2)] = null);

(statearr_37587_37613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (2))){
var state_37579__$1 = state_37579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37579__$1,(4),from);
} else {
if((state_val_37580 === (11))){
var inst_37568 = (state_37579[(2)]);
var state_37579__$1 = state_37579;
if(cljs.core.truth_(inst_37568)){
var statearr_37588_37614 = state_37579__$1;
(statearr_37588_37614[(1)] = (12));

} else {
var statearr_37589_37615 = state_37579__$1;
(statearr_37589_37615[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (9))){
var state_37579__$1 = state_37579;
var statearr_37590_37616 = state_37579__$1;
(statearr_37590_37616[(2)] = null);

(statearr_37590_37616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (5))){
var state_37579__$1 = state_37579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37591_37617 = state_37579__$1;
(statearr_37591_37617[(1)] = (8));

} else {
var statearr_37592_37618 = state_37579__$1;
(statearr_37592_37618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (14))){
var inst_37573 = (state_37579[(2)]);
var state_37579__$1 = state_37579;
var statearr_37593_37619 = state_37579__$1;
(statearr_37593_37619[(2)] = inst_37573);

(statearr_37593_37619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (10))){
var inst_37565 = (state_37579[(2)]);
var state_37579__$1 = state_37579;
var statearr_37594_37620 = state_37579__$1;
(statearr_37594_37620[(2)] = inst_37565);

(statearr_37594_37620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37580 === (8))){
var inst_37562 = cljs.core.async.close_BANG_.call(null,to);
var state_37579__$1 = state_37579;
var statearr_37595_37621 = state_37579__$1;
(statearr_37595_37621[(2)] = inst_37562);

(statearr_37595_37621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___37607))
;
return ((function (switch__37328__auto__,c__37440__auto___37607){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_37599 = [null,null,null,null,null,null,null,null];
(statearr_37599[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_37599[(1)] = (1));

return statearr_37599;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_37579){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_37579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e37600){if((e37600 instanceof Object)){
var ex__37332__auto__ = e37600;
var statearr_37601_37622 = state_37579;
(statearr_37601_37622[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37623 = state_37579;
state_37579 = G__37623;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_37579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_37579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___37607))
})();
var state__37442__auto__ = (function (){var statearr_37602 = f__37441__auto__.call(null);
(statearr_37602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___37607);

return statearr_37602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___37607))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37811){
var vec__37812 = p__37811;
var v = cljs.core.nth.call(null,vec__37812,(0),null);
var p = cljs.core.nth.call(null,vec__37812,(1),null);
var job = vec__37812;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37440__auto___37998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___37998,res,vec__37812,v,p,job,jobs,results){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___37998,res,vec__37812,v,p,job,jobs,results){
return (function (state_37819){
var state_val_37820 = (state_37819[(1)]);
if((state_val_37820 === (1))){
var state_37819__$1 = state_37819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37819__$1,(2),res,v);
} else {
if((state_val_37820 === (2))){
var inst_37816 = (state_37819[(2)]);
var inst_37817 = cljs.core.async.close_BANG_.call(null,res);
var state_37819__$1 = (function (){var statearr_37821 = state_37819;
(statearr_37821[(7)] = inst_37816);

return statearr_37821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37819__$1,inst_37817);
} else {
return null;
}
}
});})(c__37440__auto___37998,res,vec__37812,v,p,job,jobs,results))
;
return ((function (switch__37328__auto__,c__37440__auto___37998,res,vec__37812,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0 = (function (){
var statearr_37825 = [null,null,null,null,null,null,null,null];
(statearr_37825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__);

(statearr_37825[(1)] = (1));

return statearr_37825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1 = (function (state_37819){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_37819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e37826){if((e37826 instanceof Object)){
var ex__37332__auto__ = e37826;
var statearr_37827_37999 = state_37819;
(statearr_37827_37999[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38000 = state_37819;
state_37819 = G__38000;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = function(state_37819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1.call(this,state_37819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___37998,res,vec__37812,v,p,job,jobs,results))
})();
var state__37442__auto__ = (function (){var statearr_37828 = f__37441__auto__.call(null);
(statearr_37828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___37998);

return statearr_37828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___37998,res,vec__37812,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37829){
var vec__37830 = p__37829;
var v = cljs.core.nth.call(null,vec__37830,(0),null);
var p = cljs.core.nth.call(null,vec__37830,(1),null);
var job = vec__37830;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__35259__auto___38001 = n;
var __38002 = (0);
while(true){
if((__38002 < n__35259__auto___38001)){
var G__37833_38003 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37833_38003) {
case "compute":
var c__37440__auto___38005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38002,c__37440__auto___38005,G__37833_38003,n__35259__auto___38001,jobs,results,process,async){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (__38002,c__37440__auto___38005,G__37833_38003,n__35259__auto___38001,jobs,results,process,async){
return (function (state_37846){
var state_val_37847 = (state_37846[(1)]);
if((state_val_37847 === (1))){
var state_37846__$1 = state_37846;
var statearr_37848_38006 = state_37846__$1;
(statearr_37848_38006[(2)] = null);

(statearr_37848_38006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (2))){
var state_37846__$1 = state_37846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37846__$1,(4),jobs);
} else {
if((state_val_37847 === (3))){
var inst_37844 = (state_37846[(2)]);
var state_37846__$1 = state_37846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37846__$1,inst_37844);
} else {
if((state_val_37847 === (4))){
var inst_37836 = (state_37846[(2)]);
var inst_37837 = process.call(null,inst_37836);
var state_37846__$1 = state_37846;
if(cljs.core.truth_(inst_37837)){
var statearr_37849_38007 = state_37846__$1;
(statearr_37849_38007[(1)] = (5));

} else {
var statearr_37850_38008 = state_37846__$1;
(statearr_37850_38008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (5))){
var state_37846__$1 = state_37846;
var statearr_37851_38009 = state_37846__$1;
(statearr_37851_38009[(2)] = null);

(statearr_37851_38009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (6))){
var state_37846__$1 = state_37846;
var statearr_37852_38010 = state_37846__$1;
(statearr_37852_38010[(2)] = null);

(statearr_37852_38010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (7))){
var inst_37842 = (state_37846[(2)]);
var state_37846__$1 = state_37846;
var statearr_37853_38011 = state_37846__$1;
(statearr_37853_38011[(2)] = inst_37842);

(statearr_37853_38011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38002,c__37440__auto___38005,G__37833_38003,n__35259__auto___38001,jobs,results,process,async))
;
return ((function (__38002,switch__37328__auto__,c__37440__auto___38005,G__37833_38003,n__35259__auto___38001,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0 = (function (){
var statearr_37857 = [null,null,null,null,null,null,null];
(statearr_37857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__);

(statearr_37857[(1)] = (1));

return statearr_37857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1 = (function (state_37846){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_37846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e37858){if((e37858 instanceof Object)){
var ex__37332__auto__ = e37858;
var statearr_37859_38012 = state_37846;
(statearr_37859_38012[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38013 = state_37846;
state_37846 = G__38013;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = function(state_37846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1.call(this,state_37846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__;
})()
;})(__38002,switch__37328__auto__,c__37440__auto___38005,G__37833_38003,n__35259__auto___38001,jobs,results,process,async))
})();
var state__37442__auto__ = (function (){var statearr_37860 = f__37441__auto__.call(null);
(statearr_37860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___38005);

return statearr_37860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(__38002,c__37440__auto___38005,G__37833_38003,n__35259__auto___38001,jobs,results,process,async))
);


break;
case "async":
var c__37440__auto___38014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38002,c__37440__auto___38014,G__37833_38003,n__35259__auto___38001,jobs,results,process,async){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (__38002,c__37440__auto___38014,G__37833_38003,n__35259__auto___38001,jobs,results,process,async){
return (function (state_37873){
var state_val_37874 = (state_37873[(1)]);
if((state_val_37874 === (1))){
var state_37873__$1 = state_37873;
var statearr_37875_38015 = state_37873__$1;
(statearr_37875_38015[(2)] = null);

(statearr_37875_38015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37874 === (2))){
var state_37873__$1 = state_37873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37873__$1,(4),jobs);
} else {
if((state_val_37874 === (3))){
var inst_37871 = (state_37873[(2)]);
var state_37873__$1 = state_37873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37873__$1,inst_37871);
} else {
if((state_val_37874 === (4))){
var inst_37863 = (state_37873[(2)]);
var inst_37864 = async.call(null,inst_37863);
var state_37873__$1 = state_37873;
if(cljs.core.truth_(inst_37864)){
var statearr_37876_38016 = state_37873__$1;
(statearr_37876_38016[(1)] = (5));

} else {
var statearr_37877_38017 = state_37873__$1;
(statearr_37877_38017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37874 === (5))){
var state_37873__$1 = state_37873;
var statearr_37878_38018 = state_37873__$1;
(statearr_37878_38018[(2)] = null);

(statearr_37878_38018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37874 === (6))){
var state_37873__$1 = state_37873;
var statearr_37879_38019 = state_37873__$1;
(statearr_37879_38019[(2)] = null);

(statearr_37879_38019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37874 === (7))){
var inst_37869 = (state_37873[(2)]);
var state_37873__$1 = state_37873;
var statearr_37880_38020 = state_37873__$1;
(statearr_37880_38020[(2)] = inst_37869);

(statearr_37880_38020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38002,c__37440__auto___38014,G__37833_38003,n__35259__auto___38001,jobs,results,process,async))
;
return ((function (__38002,switch__37328__auto__,c__37440__auto___38014,G__37833_38003,n__35259__auto___38001,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0 = (function (){
var statearr_37884 = [null,null,null,null,null,null,null];
(statearr_37884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__);

(statearr_37884[(1)] = (1));

return statearr_37884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1 = (function (state_37873){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_37873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e37885){if((e37885 instanceof Object)){
var ex__37332__auto__ = e37885;
var statearr_37886_38021 = state_37873;
(statearr_37886_38021[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38022 = state_37873;
state_37873 = G__38022;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = function(state_37873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1.call(this,state_37873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__;
})()
;})(__38002,switch__37328__auto__,c__37440__auto___38014,G__37833_38003,n__35259__auto___38001,jobs,results,process,async))
})();
var state__37442__auto__ = (function (){var statearr_37887 = f__37441__auto__.call(null);
(statearr_37887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___38014);

return statearr_37887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(__38002,c__37440__auto___38014,G__37833_38003,n__35259__auto___38001,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__38023 = (__38002 + (1));
__38002 = G__38023;
continue;
} else {
}
break;
}

var c__37440__auto___38024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___38024,jobs,results,process,async){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___38024,jobs,results,process,async){
return (function (state_37909){
var state_val_37910 = (state_37909[(1)]);
if((state_val_37910 === (1))){
var state_37909__$1 = state_37909;
var statearr_37911_38025 = state_37909__$1;
(statearr_37911_38025[(2)] = null);

(statearr_37911_38025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (2))){
var state_37909__$1 = state_37909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37909__$1,(4),from);
} else {
if((state_val_37910 === (3))){
var inst_37907 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37909__$1,inst_37907);
} else {
if((state_val_37910 === (4))){
var inst_37890 = (state_37909[(7)]);
var inst_37890__$1 = (state_37909[(2)]);
var inst_37891 = (inst_37890__$1 == null);
var state_37909__$1 = (function (){var statearr_37912 = state_37909;
(statearr_37912[(7)] = inst_37890__$1);

return statearr_37912;
})();
if(cljs.core.truth_(inst_37891)){
var statearr_37913_38026 = state_37909__$1;
(statearr_37913_38026[(1)] = (5));

} else {
var statearr_37914_38027 = state_37909__$1;
(statearr_37914_38027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (5))){
var inst_37893 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37909__$1 = state_37909;
var statearr_37915_38028 = state_37909__$1;
(statearr_37915_38028[(2)] = inst_37893);

(statearr_37915_38028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (6))){
var inst_37895 = (state_37909[(8)]);
var inst_37890 = (state_37909[(7)]);
var inst_37895__$1 = cljs.core.async.chan.call(null,(1));
var inst_37896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37897 = [inst_37890,inst_37895__$1];
var inst_37898 = (new cljs.core.PersistentVector(null,2,(5),inst_37896,inst_37897,null));
var state_37909__$1 = (function (){var statearr_37916 = state_37909;
(statearr_37916[(8)] = inst_37895__$1);

return statearr_37916;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37909__$1,(8),jobs,inst_37898);
} else {
if((state_val_37910 === (7))){
var inst_37905 = (state_37909[(2)]);
var state_37909__$1 = state_37909;
var statearr_37917_38029 = state_37909__$1;
(statearr_37917_38029[(2)] = inst_37905);

(statearr_37917_38029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37910 === (8))){
var inst_37895 = (state_37909[(8)]);
var inst_37900 = (state_37909[(2)]);
var state_37909__$1 = (function (){var statearr_37918 = state_37909;
(statearr_37918[(9)] = inst_37900);

return statearr_37918;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37909__$1,(9),results,inst_37895);
} else {
if((state_val_37910 === (9))){
var inst_37902 = (state_37909[(2)]);
var state_37909__$1 = (function (){var statearr_37919 = state_37909;
(statearr_37919[(10)] = inst_37902);

return statearr_37919;
})();
var statearr_37920_38030 = state_37909__$1;
(statearr_37920_38030[(2)] = null);

(statearr_37920_38030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___38024,jobs,results,process,async))
;
return ((function (switch__37328__auto__,c__37440__auto___38024,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0 = (function (){
var statearr_37924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__);

(statearr_37924[(1)] = (1));

return statearr_37924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1 = (function (state_37909){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_37909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e37925){if((e37925 instanceof Object)){
var ex__37332__auto__ = e37925;
var statearr_37926_38031 = state_37909;
(statearr_37926_38031[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38032 = state_37909;
state_37909 = G__38032;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = function(state_37909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1.call(this,state_37909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___38024,jobs,results,process,async))
})();
var state__37442__auto__ = (function (){var statearr_37927 = f__37441__auto__.call(null);
(statearr_37927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___38024);

return statearr_37927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___38024,jobs,results,process,async))
);


var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__,jobs,results,process,async){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__,jobs,results,process,async){
return (function (state_37965){
var state_val_37966 = (state_37965[(1)]);
if((state_val_37966 === (7))){
var inst_37961 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
var statearr_37967_38033 = state_37965__$1;
(statearr_37967_38033[(2)] = inst_37961);

(statearr_37967_38033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (20))){
var state_37965__$1 = state_37965;
var statearr_37968_38034 = state_37965__$1;
(statearr_37968_38034[(2)] = null);

(statearr_37968_38034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (1))){
var state_37965__$1 = state_37965;
var statearr_37969_38035 = state_37965__$1;
(statearr_37969_38035[(2)] = null);

(statearr_37969_38035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (4))){
var inst_37930 = (state_37965[(7)]);
var inst_37930__$1 = (state_37965[(2)]);
var inst_37931 = (inst_37930__$1 == null);
var state_37965__$1 = (function (){var statearr_37970 = state_37965;
(statearr_37970[(7)] = inst_37930__$1);

return statearr_37970;
})();
if(cljs.core.truth_(inst_37931)){
var statearr_37971_38036 = state_37965__$1;
(statearr_37971_38036[(1)] = (5));

} else {
var statearr_37972_38037 = state_37965__$1;
(statearr_37972_38037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (15))){
var inst_37943 = (state_37965[(8)]);
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37965__$1,(18),to,inst_37943);
} else {
if((state_val_37966 === (21))){
var inst_37956 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
var statearr_37973_38038 = state_37965__$1;
(statearr_37973_38038[(2)] = inst_37956);

(statearr_37973_38038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (13))){
var inst_37958 = (state_37965[(2)]);
var state_37965__$1 = (function (){var statearr_37974 = state_37965;
(statearr_37974[(9)] = inst_37958);

return statearr_37974;
})();
var statearr_37975_38039 = state_37965__$1;
(statearr_37975_38039[(2)] = null);

(statearr_37975_38039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (6))){
var inst_37930 = (state_37965[(7)]);
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37965__$1,(11),inst_37930);
} else {
if((state_val_37966 === (17))){
var inst_37951 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
if(cljs.core.truth_(inst_37951)){
var statearr_37976_38040 = state_37965__$1;
(statearr_37976_38040[(1)] = (19));

} else {
var statearr_37977_38041 = state_37965__$1;
(statearr_37977_38041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (3))){
var inst_37963 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37965__$1,inst_37963);
} else {
if((state_val_37966 === (12))){
var inst_37940 = (state_37965[(10)]);
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37965__$1,(14),inst_37940);
} else {
if((state_val_37966 === (2))){
var state_37965__$1 = state_37965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37965__$1,(4),results);
} else {
if((state_val_37966 === (19))){
var state_37965__$1 = state_37965;
var statearr_37978_38042 = state_37965__$1;
(statearr_37978_38042[(2)] = null);

(statearr_37978_38042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (11))){
var inst_37940 = (state_37965[(2)]);
var state_37965__$1 = (function (){var statearr_37979 = state_37965;
(statearr_37979[(10)] = inst_37940);

return statearr_37979;
})();
var statearr_37980_38043 = state_37965__$1;
(statearr_37980_38043[(2)] = null);

(statearr_37980_38043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (9))){
var state_37965__$1 = state_37965;
var statearr_37981_38044 = state_37965__$1;
(statearr_37981_38044[(2)] = null);

(statearr_37981_38044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (5))){
var state_37965__$1 = state_37965;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37982_38045 = state_37965__$1;
(statearr_37982_38045[(1)] = (8));

} else {
var statearr_37983_38046 = state_37965__$1;
(statearr_37983_38046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (14))){
var inst_37945 = (state_37965[(11)]);
var inst_37943 = (state_37965[(8)]);
var inst_37943__$1 = (state_37965[(2)]);
var inst_37944 = (inst_37943__$1 == null);
var inst_37945__$1 = cljs.core.not.call(null,inst_37944);
var state_37965__$1 = (function (){var statearr_37984 = state_37965;
(statearr_37984[(11)] = inst_37945__$1);

(statearr_37984[(8)] = inst_37943__$1);

return statearr_37984;
})();
if(inst_37945__$1){
var statearr_37985_38047 = state_37965__$1;
(statearr_37985_38047[(1)] = (15));

} else {
var statearr_37986_38048 = state_37965__$1;
(statearr_37986_38048[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (16))){
var inst_37945 = (state_37965[(11)]);
var state_37965__$1 = state_37965;
var statearr_37987_38049 = state_37965__$1;
(statearr_37987_38049[(2)] = inst_37945);

(statearr_37987_38049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (10))){
var inst_37937 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
var statearr_37988_38050 = state_37965__$1;
(statearr_37988_38050[(2)] = inst_37937);

(statearr_37988_38050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (18))){
var inst_37948 = (state_37965[(2)]);
var state_37965__$1 = state_37965;
var statearr_37989_38051 = state_37965__$1;
(statearr_37989_38051[(2)] = inst_37948);

(statearr_37989_38051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37966 === (8))){
var inst_37934 = cljs.core.async.close_BANG_.call(null,to);
var state_37965__$1 = state_37965;
var statearr_37990_38052 = state_37965__$1;
(statearr_37990_38052[(2)] = inst_37934);

(statearr_37990_38052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto__,jobs,results,process,async))
;
return ((function (switch__37328__auto__,c__37440__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0 = (function (){
var statearr_37994 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__);

(statearr_37994[(1)] = (1));

return statearr_37994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1 = (function (state_37965){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_37965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e37995){if((e37995 instanceof Object)){
var ex__37332__auto__ = e37995;
var statearr_37996_38053 = state_37965;
(statearr_37996_38053[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38054 = state_37965;
state_37965 = G__38054;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__ = function(state_37965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1.call(this,state_37965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__,jobs,results,process,async))
})();
var state__37442__auto__ = (function (){var statearr_37997 = f__37441__auto__.call(null);
(statearr_37997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_37997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__,jobs,results,process,async))
);

return c__37440__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args38055 = [];
var len__35449__auto___38058 = arguments.length;
var i__35450__auto___38059 = (0);
while(true){
if((i__35450__auto___38059 < len__35449__auto___38058)){
args38055.push((arguments[i__35450__auto___38059]));

var G__38060 = (i__35450__auto___38059 + (1));
i__35450__auto___38059 = G__38060;
continue;
} else {
}
break;
}

var G__38057 = args38055.length;
switch (G__38057) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38055.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args38062 = [];
var len__35449__auto___38065 = arguments.length;
var i__35450__auto___38066 = (0);
while(true){
if((i__35450__auto___38066 < len__35449__auto___38065)){
args38062.push((arguments[i__35450__auto___38066]));

var G__38067 = (i__35450__auto___38066 + (1));
i__35450__auto___38066 = G__38067;
continue;
} else {
}
break;
}

var G__38064 = args38062.length;
switch (G__38064) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38062.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args38069 = [];
var len__35449__auto___38122 = arguments.length;
var i__35450__auto___38123 = (0);
while(true){
if((i__35450__auto___38123 < len__35449__auto___38122)){
args38069.push((arguments[i__35450__auto___38123]));

var G__38124 = (i__35450__auto___38123 + (1));
i__35450__auto___38123 = G__38124;
continue;
} else {
}
break;
}

var G__38071 = args38069.length;
switch (G__38071) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38069.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37440__auto___38126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___38126,tc,fc){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___38126,tc,fc){
return (function (state_38097){
var state_val_38098 = (state_38097[(1)]);
if((state_val_38098 === (7))){
var inst_38093 = (state_38097[(2)]);
var state_38097__$1 = state_38097;
var statearr_38099_38127 = state_38097__$1;
(statearr_38099_38127[(2)] = inst_38093);

(statearr_38099_38127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (1))){
var state_38097__$1 = state_38097;
var statearr_38100_38128 = state_38097__$1;
(statearr_38100_38128[(2)] = null);

(statearr_38100_38128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (4))){
var inst_38074 = (state_38097[(7)]);
var inst_38074__$1 = (state_38097[(2)]);
var inst_38075 = (inst_38074__$1 == null);
var state_38097__$1 = (function (){var statearr_38101 = state_38097;
(statearr_38101[(7)] = inst_38074__$1);

return statearr_38101;
})();
if(cljs.core.truth_(inst_38075)){
var statearr_38102_38129 = state_38097__$1;
(statearr_38102_38129[(1)] = (5));

} else {
var statearr_38103_38130 = state_38097__$1;
(statearr_38103_38130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (13))){
var state_38097__$1 = state_38097;
var statearr_38104_38131 = state_38097__$1;
(statearr_38104_38131[(2)] = null);

(statearr_38104_38131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (6))){
var inst_38074 = (state_38097[(7)]);
var inst_38080 = p.call(null,inst_38074);
var state_38097__$1 = state_38097;
if(cljs.core.truth_(inst_38080)){
var statearr_38105_38132 = state_38097__$1;
(statearr_38105_38132[(1)] = (9));

} else {
var statearr_38106_38133 = state_38097__$1;
(statearr_38106_38133[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (3))){
var inst_38095 = (state_38097[(2)]);
var state_38097__$1 = state_38097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38097__$1,inst_38095);
} else {
if((state_val_38098 === (12))){
var state_38097__$1 = state_38097;
var statearr_38107_38134 = state_38097__$1;
(statearr_38107_38134[(2)] = null);

(statearr_38107_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (2))){
var state_38097__$1 = state_38097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38097__$1,(4),ch);
} else {
if((state_val_38098 === (11))){
var inst_38074 = (state_38097[(7)]);
var inst_38084 = (state_38097[(2)]);
var state_38097__$1 = state_38097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38097__$1,(8),inst_38084,inst_38074);
} else {
if((state_val_38098 === (9))){
var state_38097__$1 = state_38097;
var statearr_38108_38135 = state_38097__$1;
(statearr_38108_38135[(2)] = tc);

(statearr_38108_38135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (5))){
var inst_38077 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38078 = cljs.core.async.close_BANG_.call(null,fc);
var state_38097__$1 = (function (){var statearr_38109 = state_38097;
(statearr_38109[(8)] = inst_38077);

return statearr_38109;
})();
var statearr_38110_38136 = state_38097__$1;
(statearr_38110_38136[(2)] = inst_38078);

(statearr_38110_38136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (14))){
var inst_38091 = (state_38097[(2)]);
var state_38097__$1 = state_38097;
var statearr_38111_38137 = state_38097__$1;
(statearr_38111_38137[(2)] = inst_38091);

(statearr_38111_38137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (10))){
var state_38097__$1 = state_38097;
var statearr_38112_38138 = state_38097__$1;
(statearr_38112_38138[(2)] = fc);

(statearr_38112_38138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38098 === (8))){
var inst_38086 = (state_38097[(2)]);
var state_38097__$1 = state_38097;
if(cljs.core.truth_(inst_38086)){
var statearr_38113_38139 = state_38097__$1;
(statearr_38113_38139[(1)] = (12));

} else {
var statearr_38114_38140 = state_38097__$1;
(statearr_38114_38140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___38126,tc,fc))
;
return ((function (switch__37328__auto__,c__37440__auto___38126,tc,fc){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_38118 = [null,null,null,null,null,null,null,null,null];
(statearr_38118[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_38118[(1)] = (1));

return statearr_38118;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_38097){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_38097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e38119){if((e38119 instanceof Object)){
var ex__37332__auto__ = e38119;
var statearr_38120_38141 = state_38097;
(statearr_38120_38141[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38142 = state_38097;
state_38097 = G__38142;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_38097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_38097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___38126,tc,fc))
})();
var state__37442__auto__ = (function (){var statearr_38121 = f__37441__auto__.call(null);
(statearr_38121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___38126);

return statearr_38121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___38126,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__){
return (function (state_38206){
var state_val_38207 = (state_38206[(1)]);
if((state_val_38207 === (7))){
var inst_38202 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
var statearr_38208_38229 = state_38206__$1;
(statearr_38208_38229[(2)] = inst_38202);

(statearr_38208_38229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (1))){
var inst_38186 = init;
var state_38206__$1 = (function (){var statearr_38209 = state_38206;
(statearr_38209[(7)] = inst_38186);

return statearr_38209;
})();
var statearr_38210_38230 = state_38206__$1;
(statearr_38210_38230[(2)] = null);

(statearr_38210_38230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (4))){
var inst_38189 = (state_38206[(8)]);
var inst_38189__$1 = (state_38206[(2)]);
var inst_38190 = (inst_38189__$1 == null);
var state_38206__$1 = (function (){var statearr_38211 = state_38206;
(statearr_38211[(8)] = inst_38189__$1);

return statearr_38211;
})();
if(cljs.core.truth_(inst_38190)){
var statearr_38212_38231 = state_38206__$1;
(statearr_38212_38231[(1)] = (5));

} else {
var statearr_38213_38232 = state_38206__$1;
(statearr_38213_38232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (6))){
var inst_38189 = (state_38206[(8)]);
var inst_38193 = (state_38206[(9)]);
var inst_38186 = (state_38206[(7)]);
var inst_38193__$1 = f.call(null,inst_38186,inst_38189);
var inst_38194 = cljs.core.reduced_QMARK_.call(null,inst_38193__$1);
var state_38206__$1 = (function (){var statearr_38214 = state_38206;
(statearr_38214[(9)] = inst_38193__$1);

return statearr_38214;
})();
if(inst_38194){
var statearr_38215_38233 = state_38206__$1;
(statearr_38215_38233[(1)] = (8));

} else {
var statearr_38216_38234 = state_38206__$1;
(statearr_38216_38234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (3))){
var inst_38204 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38206__$1,inst_38204);
} else {
if((state_val_38207 === (2))){
var state_38206__$1 = state_38206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38206__$1,(4),ch);
} else {
if((state_val_38207 === (9))){
var inst_38193 = (state_38206[(9)]);
var inst_38186 = inst_38193;
var state_38206__$1 = (function (){var statearr_38217 = state_38206;
(statearr_38217[(7)] = inst_38186);

return statearr_38217;
})();
var statearr_38218_38235 = state_38206__$1;
(statearr_38218_38235[(2)] = null);

(statearr_38218_38235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (5))){
var inst_38186 = (state_38206[(7)]);
var state_38206__$1 = state_38206;
var statearr_38219_38236 = state_38206__$1;
(statearr_38219_38236[(2)] = inst_38186);

(statearr_38219_38236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (10))){
var inst_38200 = (state_38206[(2)]);
var state_38206__$1 = state_38206;
var statearr_38220_38237 = state_38206__$1;
(statearr_38220_38237[(2)] = inst_38200);

(statearr_38220_38237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38207 === (8))){
var inst_38193 = (state_38206[(9)]);
var inst_38196 = cljs.core.deref.call(null,inst_38193);
var state_38206__$1 = state_38206;
var statearr_38221_38238 = state_38206__$1;
(statearr_38221_38238[(2)] = inst_38196);

(statearr_38221_38238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto__))
;
return ((function (switch__37328__auto__,c__37440__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37329__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37329__auto____0 = (function (){
var statearr_38225 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38225[(0)] = cljs$core$async$reduce_$_state_machine__37329__auto__);

(statearr_38225[(1)] = (1));

return statearr_38225;
});
var cljs$core$async$reduce_$_state_machine__37329__auto____1 = (function (state_38206){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_38206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e38226){if((e38226 instanceof Object)){
var ex__37332__auto__ = e38226;
var statearr_38227_38239 = state_38206;
(statearr_38227_38239[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38240 = state_38206;
state_38206 = G__38240;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37329__auto__ = function(state_38206){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37329__auto____1.call(this,state_38206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37329__auto____0;
cljs$core$async$reduce_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37329__auto____1;
return cljs$core$async$reduce_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__))
})();
var state__37442__auto__ = (function (){var statearr_38228 = f__37441__auto__.call(null);
(statearr_38228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_38228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__))
);

return c__37440__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args38241 = [];
var len__35449__auto___38293 = arguments.length;
var i__35450__auto___38294 = (0);
while(true){
if((i__35450__auto___38294 < len__35449__auto___38293)){
args38241.push((arguments[i__35450__auto___38294]));

var G__38295 = (i__35450__auto___38294 + (1));
i__35450__auto___38294 = G__38295;
continue;
} else {
}
break;
}

var G__38243 = args38241.length;
switch (G__38243) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38241.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__){
return (function (state_38268){
var state_val_38269 = (state_38268[(1)]);
if((state_val_38269 === (7))){
var inst_38250 = (state_38268[(2)]);
var state_38268__$1 = state_38268;
var statearr_38270_38297 = state_38268__$1;
(statearr_38270_38297[(2)] = inst_38250);

(statearr_38270_38297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (1))){
var inst_38244 = cljs.core.seq.call(null,coll);
var inst_38245 = inst_38244;
var state_38268__$1 = (function (){var statearr_38271 = state_38268;
(statearr_38271[(7)] = inst_38245);

return statearr_38271;
})();
var statearr_38272_38298 = state_38268__$1;
(statearr_38272_38298[(2)] = null);

(statearr_38272_38298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (4))){
var inst_38245 = (state_38268[(7)]);
var inst_38248 = cljs.core.first.call(null,inst_38245);
var state_38268__$1 = state_38268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38268__$1,(7),ch,inst_38248);
} else {
if((state_val_38269 === (13))){
var inst_38262 = (state_38268[(2)]);
var state_38268__$1 = state_38268;
var statearr_38273_38299 = state_38268__$1;
(statearr_38273_38299[(2)] = inst_38262);

(statearr_38273_38299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (6))){
var inst_38253 = (state_38268[(2)]);
var state_38268__$1 = state_38268;
if(cljs.core.truth_(inst_38253)){
var statearr_38274_38300 = state_38268__$1;
(statearr_38274_38300[(1)] = (8));

} else {
var statearr_38275_38301 = state_38268__$1;
(statearr_38275_38301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (3))){
var inst_38266 = (state_38268[(2)]);
var state_38268__$1 = state_38268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38268__$1,inst_38266);
} else {
if((state_val_38269 === (12))){
var state_38268__$1 = state_38268;
var statearr_38276_38302 = state_38268__$1;
(statearr_38276_38302[(2)] = null);

(statearr_38276_38302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (2))){
var inst_38245 = (state_38268[(7)]);
var state_38268__$1 = state_38268;
if(cljs.core.truth_(inst_38245)){
var statearr_38277_38303 = state_38268__$1;
(statearr_38277_38303[(1)] = (4));

} else {
var statearr_38278_38304 = state_38268__$1;
(statearr_38278_38304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (11))){
var inst_38259 = cljs.core.async.close_BANG_.call(null,ch);
var state_38268__$1 = state_38268;
var statearr_38279_38305 = state_38268__$1;
(statearr_38279_38305[(2)] = inst_38259);

(statearr_38279_38305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (9))){
var state_38268__$1 = state_38268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38280_38306 = state_38268__$1;
(statearr_38280_38306[(1)] = (11));

} else {
var statearr_38281_38307 = state_38268__$1;
(statearr_38281_38307[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (5))){
var inst_38245 = (state_38268[(7)]);
var state_38268__$1 = state_38268;
var statearr_38282_38308 = state_38268__$1;
(statearr_38282_38308[(2)] = inst_38245);

(statearr_38282_38308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (10))){
var inst_38264 = (state_38268[(2)]);
var state_38268__$1 = state_38268;
var statearr_38283_38309 = state_38268__$1;
(statearr_38283_38309[(2)] = inst_38264);

(statearr_38283_38309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38269 === (8))){
var inst_38245 = (state_38268[(7)]);
var inst_38255 = cljs.core.next.call(null,inst_38245);
var inst_38245__$1 = inst_38255;
var state_38268__$1 = (function (){var statearr_38284 = state_38268;
(statearr_38284[(7)] = inst_38245__$1);

return statearr_38284;
})();
var statearr_38285_38310 = state_38268__$1;
(statearr_38285_38310[(2)] = null);

(statearr_38285_38310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto__))
;
return ((function (switch__37328__auto__,c__37440__auto__){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_38289 = [null,null,null,null,null,null,null,null];
(statearr_38289[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_38289[(1)] = (1));

return statearr_38289;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_38268){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_38268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e38290){if((e38290 instanceof Object)){
var ex__37332__auto__ = e38290;
var statearr_38291_38311 = state_38268;
(statearr_38291_38311[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38312 = state_38268;
state_38268 = G__38312;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_38268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_38268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__))
})();
var state__37442__auto__ = (function (){var statearr_38292 = f__37441__auto__.call(null);
(statearr_38292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_38292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__))
);

return c__37440__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__35004__auto__ = (((_ == null))?null:_);
var m__35005__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,_);
} else {
var m__35005__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__35004__auto__ = (((m == null))?null:m);
var m__35005__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__35005__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__35004__auto__ = (((m == null))?null:m);
var m__35005__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,m,ch);
} else {
var m__35005__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__35004__auto__ = (((m == null))?null:m);
var m__35005__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,m);
} else {
var m__35005__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38538 = (function (ch,cs,meta38539){
this.ch = ch;
this.cs = cs;
this.meta38539 = meta38539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38540,meta38539__$1){
var self__ = this;
var _38540__$1 = this;
return (new cljs.core.async.t_cljs$core$async38538(self__.ch,self__.cs,meta38539__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38540){
var self__ = this;
var _38540__$1 = this;
return self__.meta38539;
});})(cs))
;

cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38538.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38539","meta38539",-792876822,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38538";

cljs.core.async.t_cljs$core$async38538.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async38538");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38538 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38538(ch__$1,cs__$1,meta38539){
return (new cljs.core.async.t_cljs$core$async38538(ch__$1,cs__$1,meta38539));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38538(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37440__auto___38763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___38763,cs,m,dchan,dctr,done){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___38763,cs,m,dchan,dctr,done){
return (function (state_38675){
var state_val_38676 = (state_38675[(1)]);
if((state_val_38676 === (7))){
var inst_38671 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38677_38764 = state_38675__$1;
(statearr_38677_38764[(2)] = inst_38671);

(statearr_38677_38764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (20))){
var inst_38574 = (state_38675[(7)]);
var inst_38586 = cljs.core.first.call(null,inst_38574);
var inst_38587 = cljs.core.nth.call(null,inst_38586,(0),null);
var inst_38588 = cljs.core.nth.call(null,inst_38586,(1),null);
var state_38675__$1 = (function (){var statearr_38678 = state_38675;
(statearr_38678[(8)] = inst_38587);

return statearr_38678;
})();
if(cljs.core.truth_(inst_38588)){
var statearr_38679_38765 = state_38675__$1;
(statearr_38679_38765[(1)] = (22));

} else {
var statearr_38680_38766 = state_38675__$1;
(statearr_38680_38766[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (27))){
var inst_38618 = (state_38675[(9)]);
var inst_38623 = (state_38675[(10)]);
var inst_38616 = (state_38675[(11)]);
var inst_38543 = (state_38675[(12)]);
var inst_38623__$1 = cljs.core._nth.call(null,inst_38616,inst_38618);
var inst_38624 = cljs.core.async.put_BANG_.call(null,inst_38623__$1,inst_38543,done);
var state_38675__$1 = (function (){var statearr_38681 = state_38675;
(statearr_38681[(10)] = inst_38623__$1);

return statearr_38681;
})();
if(cljs.core.truth_(inst_38624)){
var statearr_38682_38767 = state_38675__$1;
(statearr_38682_38767[(1)] = (30));

} else {
var statearr_38683_38768 = state_38675__$1;
(statearr_38683_38768[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (1))){
var state_38675__$1 = state_38675;
var statearr_38684_38769 = state_38675__$1;
(statearr_38684_38769[(2)] = null);

(statearr_38684_38769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (24))){
var inst_38574 = (state_38675[(7)]);
var inst_38593 = (state_38675[(2)]);
var inst_38594 = cljs.core.next.call(null,inst_38574);
var inst_38552 = inst_38594;
var inst_38553 = null;
var inst_38554 = (0);
var inst_38555 = (0);
var state_38675__$1 = (function (){var statearr_38685 = state_38675;
(statearr_38685[(13)] = inst_38552);

(statearr_38685[(14)] = inst_38553);

(statearr_38685[(15)] = inst_38593);

(statearr_38685[(16)] = inst_38555);

(statearr_38685[(17)] = inst_38554);

return statearr_38685;
})();
var statearr_38686_38770 = state_38675__$1;
(statearr_38686_38770[(2)] = null);

(statearr_38686_38770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (39))){
var state_38675__$1 = state_38675;
var statearr_38690_38771 = state_38675__$1;
(statearr_38690_38771[(2)] = null);

(statearr_38690_38771[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (4))){
var inst_38543 = (state_38675[(12)]);
var inst_38543__$1 = (state_38675[(2)]);
var inst_38544 = (inst_38543__$1 == null);
var state_38675__$1 = (function (){var statearr_38691 = state_38675;
(statearr_38691[(12)] = inst_38543__$1);

return statearr_38691;
})();
if(cljs.core.truth_(inst_38544)){
var statearr_38692_38772 = state_38675__$1;
(statearr_38692_38772[(1)] = (5));

} else {
var statearr_38693_38773 = state_38675__$1;
(statearr_38693_38773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (15))){
var inst_38552 = (state_38675[(13)]);
var inst_38553 = (state_38675[(14)]);
var inst_38555 = (state_38675[(16)]);
var inst_38554 = (state_38675[(17)]);
var inst_38570 = (state_38675[(2)]);
var inst_38571 = (inst_38555 + (1));
var tmp38687 = inst_38552;
var tmp38688 = inst_38553;
var tmp38689 = inst_38554;
var inst_38552__$1 = tmp38687;
var inst_38553__$1 = tmp38688;
var inst_38554__$1 = tmp38689;
var inst_38555__$1 = inst_38571;
var state_38675__$1 = (function (){var statearr_38694 = state_38675;
(statearr_38694[(13)] = inst_38552__$1);

(statearr_38694[(14)] = inst_38553__$1);

(statearr_38694[(18)] = inst_38570);

(statearr_38694[(16)] = inst_38555__$1);

(statearr_38694[(17)] = inst_38554__$1);

return statearr_38694;
})();
var statearr_38695_38774 = state_38675__$1;
(statearr_38695_38774[(2)] = null);

(statearr_38695_38774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (21))){
var inst_38597 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38699_38775 = state_38675__$1;
(statearr_38699_38775[(2)] = inst_38597);

(statearr_38699_38775[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (31))){
var inst_38623 = (state_38675[(10)]);
var inst_38627 = done.call(null,null);
var inst_38628 = cljs.core.async.untap_STAR_.call(null,m,inst_38623);
var state_38675__$1 = (function (){var statearr_38700 = state_38675;
(statearr_38700[(19)] = inst_38627);

return statearr_38700;
})();
var statearr_38701_38776 = state_38675__$1;
(statearr_38701_38776[(2)] = inst_38628);

(statearr_38701_38776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (32))){
var inst_38618 = (state_38675[(9)]);
var inst_38615 = (state_38675[(20)]);
var inst_38617 = (state_38675[(21)]);
var inst_38616 = (state_38675[(11)]);
var inst_38630 = (state_38675[(2)]);
var inst_38631 = (inst_38618 + (1));
var tmp38696 = inst_38615;
var tmp38697 = inst_38617;
var tmp38698 = inst_38616;
var inst_38615__$1 = tmp38696;
var inst_38616__$1 = tmp38698;
var inst_38617__$1 = tmp38697;
var inst_38618__$1 = inst_38631;
var state_38675__$1 = (function (){var statearr_38702 = state_38675;
(statearr_38702[(9)] = inst_38618__$1);

(statearr_38702[(20)] = inst_38615__$1);

(statearr_38702[(22)] = inst_38630);

(statearr_38702[(21)] = inst_38617__$1);

(statearr_38702[(11)] = inst_38616__$1);

return statearr_38702;
})();
var statearr_38703_38777 = state_38675__$1;
(statearr_38703_38777[(2)] = null);

(statearr_38703_38777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (40))){
var inst_38643 = (state_38675[(23)]);
var inst_38647 = done.call(null,null);
var inst_38648 = cljs.core.async.untap_STAR_.call(null,m,inst_38643);
var state_38675__$1 = (function (){var statearr_38704 = state_38675;
(statearr_38704[(24)] = inst_38647);

return statearr_38704;
})();
var statearr_38705_38778 = state_38675__$1;
(statearr_38705_38778[(2)] = inst_38648);

(statearr_38705_38778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (33))){
var inst_38634 = (state_38675[(25)]);
var inst_38636 = cljs.core.chunked_seq_QMARK_.call(null,inst_38634);
var state_38675__$1 = state_38675;
if(inst_38636){
var statearr_38706_38779 = state_38675__$1;
(statearr_38706_38779[(1)] = (36));

} else {
var statearr_38707_38780 = state_38675__$1;
(statearr_38707_38780[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (13))){
var inst_38564 = (state_38675[(26)]);
var inst_38567 = cljs.core.async.close_BANG_.call(null,inst_38564);
var state_38675__$1 = state_38675;
var statearr_38708_38781 = state_38675__$1;
(statearr_38708_38781[(2)] = inst_38567);

(statearr_38708_38781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (22))){
var inst_38587 = (state_38675[(8)]);
var inst_38590 = cljs.core.async.close_BANG_.call(null,inst_38587);
var state_38675__$1 = state_38675;
var statearr_38709_38782 = state_38675__$1;
(statearr_38709_38782[(2)] = inst_38590);

(statearr_38709_38782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (36))){
var inst_38634 = (state_38675[(25)]);
var inst_38638 = cljs.core.chunk_first.call(null,inst_38634);
var inst_38639 = cljs.core.chunk_rest.call(null,inst_38634);
var inst_38640 = cljs.core.count.call(null,inst_38638);
var inst_38615 = inst_38639;
var inst_38616 = inst_38638;
var inst_38617 = inst_38640;
var inst_38618 = (0);
var state_38675__$1 = (function (){var statearr_38710 = state_38675;
(statearr_38710[(9)] = inst_38618);

(statearr_38710[(20)] = inst_38615);

(statearr_38710[(21)] = inst_38617);

(statearr_38710[(11)] = inst_38616);

return statearr_38710;
})();
var statearr_38711_38783 = state_38675__$1;
(statearr_38711_38783[(2)] = null);

(statearr_38711_38783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (41))){
var inst_38634 = (state_38675[(25)]);
var inst_38650 = (state_38675[(2)]);
var inst_38651 = cljs.core.next.call(null,inst_38634);
var inst_38615 = inst_38651;
var inst_38616 = null;
var inst_38617 = (0);
var inst_38618 = (0);
var state_38675__$1 = (function (){var statearr_38712 = state_38675;
(statearr_38712[(9)] = inst_38618);

(statearr_38712[(27)] = inst_38650);

(statearr_38712[(20)] = inst_38615);

(statearr_38712[(21)] = inst_38617);

(statearr_38712[(11)] = inst_38616);

return statearr_38712;
})();
var statearr_38713_38784 = state_38675__$1;
(statearr_38713_38784[(2)] = null);

(statearr_38713_38784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (43))){
var state_38675__$1 = state_38675;
var statearr_38714_38785 = state_38675__$1;
(statearr_38714_38785[(2)] = null);

(statearr_38714_38785[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (29))){
var inst_38659 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38715_38786 = state_38675__$1;
(statearr_38715_38786[(2)] = inst_38659);

(statearr_38715_38786[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (44))){
var inst_38668 = (state_38675[(2)]);
var state_38675__$1 = (function (){var statearr_38716 = state_38675;
(statearr_38716[(28)] = inst_38668);

return statearr_38716;
})();
var statearr_38717_38787 = state_38675__$1;
(statearr_38717_38787[(2)] = null);

(statearr_38717_38787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (6))){
var inst_38607 = (state_38675[(29)]);
var inst_38606 = cljs.core.deref.call(null,cs);
var inst_38607__$1 = cljs.core.keys.call(null,inst_38606);
var inst_38608 = cljs.core.count.call(null,inst_38607__$1);
var inst_38609 = cljs.core.reset_BANG_.call(null,dctr,inst_38608);
var inst_38614 = cljs.core.seq.call(null,inst_38607__$1);
var inst_38615 = inst_38614;
var inst_38616 = null;
var inst_38617 = (0);
var inst_38618 = (0);
var state_38675__$1 = (function (){var statearr_38718 = state_38675;
(statearr_38718[(9)] = inst_38618);

(statearr_38718[(20)] = inst_38615);

(statearr_38718[(30)] = inst_38609);

(statearr_38718[(21)] = inst_38617);

(statearr_38718[(29)] = inst_38607__$1);

(statearr_38718[(11)] = inst_38616);

return statearr_38718;
})();
var statearr_38719_38788 = state_38675__$1;
(statearr_38719_38788[(2)] = null);

(statearr_38719_38788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (28))){
var inst_38615 = (state_38675[(20)]);
var inst_38634 = (state_38675[(25)]);
var inst_38634__$1 = cljs.core.seq.call(null,inst_38615);
var state_38675__$1 = (function (){var statearr_38720 = state_38675;
(statearr_38720[(25)] = inst_38634__$1);

return statearr_38720;
})();
if(inst_38634__$1){
var statearr_38721_38789 = state_38675__$1;
(statearr_38721_38789[(1)] = (33));

} else {
var statearr_38722_38790 = state_38675__$1;
(statearr_38722_38790[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (25))){
var inst_38618 = (state_38675[(9)]);
var inst_38617 = (state_38675[(21)]);
var inst_38620 = (inst_38618 < inst_38617);
var inst_38621 = inst_38620;
var state_38675__$1 = state_38675;
if(cljs.core.truth_(inst_38621)){
var statearr_38723_38791 = state_38675__$1;
(statearr_38723_38791[(1)] = (27));

} else {
var statearr_38724_38792 = state_38675__$1;
(statearr_38724_38792[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (34))){
var state_38675__$1 = state_38675;
var statearr_38725_38793 = state_38675__$1;
(statearr_38725_38793[(2)] = null);

(statearr_38725_38793[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (17))){
var state_38675__$1 = state_38675;
var statearr_38726_38794 = state_38675__$1;
(statearr_38726_38794[(2)] = null);

(statearr_38726_38794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (3))){
var inst_38673 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38675__$1,inst_38673);
} else {
if((state_val_38676 === (12))){
var inst_38602 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38727_38795 = state_38675__$1;
(statearr_38727_38795[(2)] = inst_38602);

(statearr_38727_38795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (2))){
var state_38675__$1 = state_38675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38675__$1,(4),ch);
} else {
if((state_val_38676 === (23))){
var state_38675__$1 = state_38675;
var statearr_38728_38796 = state_38675__$1;
(statearr_38728_38796[(2)] = null);

(statearr_38728_38796[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (35))){
var inst_38657 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38729_38797 = state_38675__$1;
(statearr_38729_38797[(2)] = inst_38657);

(statearr_38729_38797[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (19))){
var inst_38574 = (state_38675[(7)]);
var inst_38578 = cljs.core.chunk_first.call(null,inst_38574);
var inst_38579 = cljs.core.chunk_rest.call(null,inst_38574);
var inst_38580 = cljs.core.count.call(null,inst_38578);
var inst_38552 = inst_38579;
var inst_38553 = inst_38578;
var inst_38554 = inst_38580;
var inst_38555 = (0);
var state_38675__$1 = (function (){var statearr_38730 = state_38675;
(statearr_38730[(13)] = inst_38552);

(statearr_38730[(14)] = inst_38553);

(statearr_38730[(16)] = inst_38555);

(statearr_38730[(17)] = inst_38554);

return statearr_38730;
})();
var statearr_38731_38798 = state_38675__$1;
(statearr_38731_38798[(2)] = null);

(statearr_38731_38798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (11))){
var inst_38552 = (state_38675[(13)]);
var inst_38574 = (state_38675[(7)]);
var inst_38574__$1 = cljs.core.seq.call(null,inst_38552);
var state_38675__$1 = (function (){var statearr_38732 = state_38675;
(statearr_38732[(7)] = inst_38574__$1);

return statearr_38732;
})();
if(inst_38574__$1){
var statearr_38733_38799 = state_38675__$1;
(statearr_38733_38799[(1)] = (16));

} else {
var statearr_38734_38800 = state_38675__$1;
(statearr_38734_38800[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (9))){
var inst_38604 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38735_38801 = state_38675__$1;
(statearr_38735_38801[(2)] = inst_38604);

(statearr_38735_38801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (5))){
var inst_38550 = cljs.core.deref.call(null,cs);
var inst_38551 = cljs.core.seq.call(null,inst_38550);
var inst_38552 = inst_38551;
var inst_38553 = null;
var inst_38554 = (0);
var inst_38555 = (0);
var state_38675__$1 = (function (){var statearr_38736 = state_38675;
(statearr_38736[(13)] = inst_38552);

(statearr_38736[(14)] = inst_38553);

(statearr_38736[(16)] = inst_38555);

(statearr_38736[(17)] = inst_38554);

return statearr_38736;
})();
var statearr_38737_38802 = state_38675__$1;
(statearr_38737_38802[(2)] = null);

(statearr_38737_38802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (14))){
var state_38675__$1 = state_38675;
var statearr_38738_38803 = state_38675__$1;
(statearr_38738_38803[(2)] = null);

(statearr_38738_38803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (45))){
var inst_38665 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38739_38804 = state_38675__$1;
(statearr_38739_38804[(2)] = inst_38665);

(statearr_38739_38804[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (26))){
var inst_38607 = (state_38675[(29)]);
var inst_38661 = (state_38675[(2)]);
var inst_38662 = cljs.core.seq.call(null,inst_38607);
var state_38675__$1 = (function (){var statearr_38740 = state_38675;
(statearr_38740[(31)] = inst_38661);

return statearr_38740;
})();
if(inst_38662){
var statearr_38741_38805 = state_38675__$1;
(statearr_38741_38805[(1)] = (42));

} else {
var statearr_38742_38806 = state_38675__$1;
(statearr_38742_38806[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (16))){
var inst_38574 = (state_38675[(7)]);
var inst_38576 = cljs.core.chunked_seq_QMARK_.call(null,inst_38574);
var state_38675__$1 = state_38675;
if(inst_38576){
var statearr_38743_38807 = state_38675__$1;
(statearr_38743_38807[(1)] = (19));

} else {
var statearr_38744_38808 = state_38675__$1;
(statearr_38744_38808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (38))){
var inst_38654 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38745_38809 = state_38675__$1;
(statearr_38745_38809[(2)] = inst_38654);

(statearr_38745_38809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (30))){
var state_38675__$1 = state_38675;
var statearr_38746_38810 = state_38675__$1;
(statearr_38746_38810[(2)] = null);

(statearr_38746_38810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (10))){
var inst_38553 = (state_38675[(14)]);
var inst_38555 = (state_38675[(16)]);
var inst_38563 = cljs.core._nth.call(null,inst_38553,inst_38555);
var inst_38564 = cljs.core.nth.call(null,inst_38563,(0),null);
var inst_38565 = cljs.core.nth.call(null,inst_38563,(1),null);
var state_38675__$1 = (function (){var statearr_38747 = state_38675;
(statearr_38747[(26)] = inst_38564);

return statearr_38747;
})();
if(cljs.core.truth_(inst_38565)){
var statearr_38748_38811 = state_38675__$1;
(statearr_38748_38811[(1)] = (13));

} else {
var statearr_38749_38812 = state_38675__$1;
(statearr_38749_38812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (18))){
var inst_38600 = (state_38675[(2)]);
var state_38675__$1 = state_38675;
var statearr_38750_38813 = state_38675__$1;
(statearr_38750_38813[(2)] = inst_38600);

(statearr_38750_38813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (42))){
var state_38675__$1 = state_38675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38675__$1,(45),dchan);
} else {
if((state_val_38676 === (37))){
var inst_38634 = (state_38675[(25)]);
var inst_38543 = (state_38675[(12)]);
var inst_38643 = (state_38675[(23)]);
var inst_38643__$1 = cljs.core.first.call(null,inst_38634);
var inst_38644 = cljs.core.async.put_BANG_.call(null,inst_38643__$1,inst_38543,done);
var state_38675__$1 = (function (){var statearr_38751 = state_38675;
(statearr_38751[(23)] = inst_38643__$1);

return statearr_38751;
})();
if(cljs.core.truth_(inst_38644)){
var statearr_38752_38814 = state_38675__$1;
(statearr_38752_38814[(1)] = (39));

} else {
var statearr_38753_38815 = state_38675__$1;
(statearr_38753_38815[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38676 === (8))){
var inst_38555 = (state_38675[(16)]);
var inst_38554 = (state_38675[(17)]);
var inst_38557 = (inst_38555 < inst_38554);
var inst_38558 = inst_38557;
var state_38675__$1 = state_38675;
if(cljs.core.truth_(inst_38558)){
var statearr_38754_38816 = state_38675__$1;
(statearr_38754_38816[(1)] = (10));

} else {
var statearr_38755_38817 = state_38675__$1;
(statearr_38755_38817[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___38763,cs,m,dchan,dctr,done))
;
return ((function (switch__37328__auto__,c__37440__auto___38763,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37329__auto__ = null;
var cljs$core$async$mult_$_state_machine__37329__auto____0 = (function (){
var statearr_38759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38759[(0)] = cljs$core$async$mult_$_state_machine__37329__auto__);

(statearr_38759[(1)] = (1));

return statearr_38759;
});
var cljs$core$async$mult_$_state_machine__37329__auto____1 = (function (state_38675){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_38675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e38760){if((e38760 instanceof Object)){
var ex__37332__auto__ = e38760;
var statearr_38761_38818 = state_38675;
(statearr_38761_38818[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38819 = state_38675;
state_38675 = G__38819;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37329__auto__ = function(state_38675){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37329__auto____1.call(this,state_38675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37329__auto____0;
cljs$core$async$mult_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37329__auto____1;
return cljs$core$async$mult_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___38763,cs,m,dchan,dctr,done))
})();
var state__37442__auto__ = (function (){var statearr_38762 = f__37441__auto__.call(null);
(statearr_38762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___38763);

return statearr_38762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___38763,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args38820 = [];
var len__35449__auto___38823 = arguments.length;
var i__35450__auto___38824 = (0);
while(true){
if((i__35450__auto___38824 < len__35449__auto___38823)){
args38820.push((arguments[i__35450__auto___38824]));

var G__38825 = (i__35450__auto___38824 + (1));
i__35450__auto___38824 = G__38825;
continue;
} else {
}
break;
}

var G__38822 = args38820.length;
switch (G__38822) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38820.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__35004__auto__ = (((m == null))?null:m);
var m__35005__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,m,ch);
} else {
var m__35005__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__35004__auto__ = (((m == null))?null:m);
var m__35005__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,m,ch);
} else {
var m__35005__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__35004__auto__ = (((m == null))?null:m);
var m__35005__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,m);
} else {
var m__35005__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__35004__auto__ = (((m == null))?null:m);
var m__35005__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,m,state_map);
} else {
var m__35005__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__35004__auto__ = (((m == null))?null:m);
var m__35005__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,m,mode);
} else {
var m__35005__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__35456__auto__ = [];
var len__35449__auto___38837 = arguments.length;
var i__35450__auto___38838 = (0);
while(true){
if((i__35450__auto___38838 < len__35449__auto___38837)){
args__35456__auto__.push((arguments[i__35450__auto___38838]));

var G__38839 = (i__35450__auto___38838 + (1));
i__35450__auto___38838 = G__38839;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((3) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35457__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38831){
var map__38832 = p__38831;
var map__38832__$1 = ((((!((map__38832 == null)))?((((map__38832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38832):map__38832);
var opts = map__38832__$1;
var statearr_38834_38840 = state;
(statearr_38834_38840[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38832,map__38832__$1,opts){
return (function (val){
var statearr_38835_38841 = state;
(statearr_38835_38841[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38832,map__38832__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38836_38842 = state;
(statearr_38836_38842[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38827){
var G__38828 = cljs.core.first.call(null,seq38827);
var seq38827__$1 = cljs.core.next.call(null,seq38827);
var G__38829 = cljs.core.first.call(null,seq38827__$1);
var seq38827__$2 = cljs.core.next.call(null,seq38827__$1);
var G__38830 = cljs.core.first.call(null,seq38827__$2);
var seq38827__$3 = cljs.core.next.call(null,seq38827__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38828,G__38829,G__38830,seq38827__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39010 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta39011){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta39011 = meta39011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39012,meta39011__$1){
var self__ = this;
var _39012__$1 = this;
return (new cljs.core.async.t_cljs$core$async39010(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta39011__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39012){
var self__ = this;
var _39012__$1 = this;
return self__.meta39011;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39010.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39010.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta39011","meta39011",381755500,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39010";

cljs.core.async.t_cljs$core$async39010.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async39010");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39010 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39010(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39011){
return (new cljs.core.async.t_cljs$core$async39010(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39011));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39010(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37440__auto___39177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___39177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___39177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39114){
var state_val_39115 = (state_39114[(1)]);
if((state_val_39115 === (7))){
var inst_39029 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
var statearr_39116_39178 = state_39114__$1;
(statearr_39116_39178[(2)] = inst_39029);

(statearr_39116_39178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (20))){
var inst_39041 = (state_39114[(7)]);
var state_39114__$1 = state_39114;
var statearr_39117_39179 = state_39114__$1;
(statearr_39117_39179[(2)] = inst_39041);

(statearr_39117_39179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (27))){
var state_39114__$1 = state_39114;
var statearr_39118_39180 = state_39114__$1;
(statearr_39118_39180[(2)] = null);

(statearr_39118_39180[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (1))){
var inst_39016 = (state_39114[(8)]);
var inst_39016__$1 = calc_state.call(null);
var inst_39018 = (inst_39016__$1 == null);
var inst_39019 = cljs.core.not.call(null,inst_39018);
var state_39114__$1 = (function (){var statearr_39119 = state_39114;
(statearr_39119[(8)] = inst_39016__$1);

return statearr_39119;
})();
if(inst_39019){
var statearr_39120_39181 = state_39114__$1;
(statearr_39120_39181[(1)] = (2));

} else {
var statearr_39121_39182 = state_39114__$1;
(statearr_39121_39182[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (24))){
var inst_39088 = (state_39114[(9)]);
var inst_39065 = (state_39114[(10)]);
var inst_39074 = (state_39114[(11)]);
var inst_39088__$1 = inst_39065.call(null,inst_39074);
var state_39114__$1 = (function (){var statearr_39122 = state_39114;
(statearr_39122[(9)] = inst_39088__$1);

return statearr_39122;
})();
if(cljs.core.truth_(inst_39088__$1)){
var statearr_39123_39183 = state_39114__$1;
(statearr_39123_39183[(1)] = (29));

} else {
var statearr_39124_39184 = state_39114__$1;
(statearr_39124_39184[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (4))){
var inst_39032 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
if(cljs.core.truth_(inst_39032)){
var statearr_39125_39185 = state_39114__$1;
(statearr_39125_39185[(1)] = (8));

} else {
var statearr_39126_39186 = state_39114__$1;
(statearr_39126_39186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (15))){
var inst_39059 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
if(cljs.core.truth_(inst_39059)){
var statearr_39127_39187 = state_39114__$1;
(statearr_39127_39187[(1)] = (19));

} else {
var statearr_39128_39188 = state_39114__$1;
(statearr_39128_39188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (21))){
var inst_39064 = (state_39114[(12)]);
var inst_39064__$1 = (state_39114[(2)]);
var inst_39065 = cljs.core.get.call(null,inst_39064__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39066 = cljs.core.get.call(null,inst_39064__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39067 = cljs.core.get.call(null,inst_39064__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39114__$1 = (function (){var statearr_39129 = state_39114;
(statearr_39129[(12)] = inst_39064__$1);

(statearr_39129[(13)] = inst_39066);

(statearr_39129[(10)] = inst_39065);

return statearr_39129;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39114__$1,(22),inst_39067);
} else {
if((state_val_39115 === (31))){
var inst_39096 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
if(cljs.core.truth_(inst_39096)){
var statearr_39130_39189 = state_39114__$1;
(statearr_39130_39189[(1)] = (32));

} else {
var statearr_39131_39190 = state_39114__$1;
(statearr_39131_39190[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (32))){
var inst_39073 = (state_39114[(14)]);
var state_39114__$1 = state_39114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39114__$1,(35),out,inst_39073);
} else {
if((state_val_39115 === (33))){
var inst_39064 = (state_39114[(12)]);
var inst_39041 = inst_39064;
var state_39114__$1 = (function (){var statearr_39132 = state_39114;
(statearr_39132[(7)] = inst_39041);

return statearr_39132;
})();
var statearr_39133_39191 = state_39114__$1;
(statearr_39133_39191[(2)] = null);

(statearr_39133_39191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (13))){
var inst_39041 = (state_39114[(7)]);
var inst_39048 = inst_39041.cljs$lang$protocol_mask$partition0$;
var inst_39049 = (inst_39048 & (64));
var inst_39050 = inst_39041.cljs$core$ISeq$;
var inst_39051 = (cljs.core.PROTOCOL_SENTINEL === inst_39050);
var inst_39052 = (inst_39049) || (inst_39051);
var state_39114__$1 = state_39114;
if(cljs.core.truth_(inst_39052)){
var statearr_39134_39192 = state_39114__$1;
(statearr_39134_39192[(1)] = (16));

} else {
var statearr_39135_39193 = state_39114__$1;
(statearr_39135_39193[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (22))){
var inst_39074 = (state_39114[(11)]);
var inst_39073 = (state_39114[(14)]);
var inst_39072 = (state_39114[(2)]);
var inst_39073__$1 = cljs.core.nth.call(null,inst_39072,(0),null);
var inst_39074__$1 = cljs.core.nth.call(null,inst_39072,(1),null);
var inst_39075 = (inst_39073__$1 == null);
var inst_39076 = cljs.core._EQ_.call(null,inst_39074__$1,change);
var inst_39077 = (inst_39075) || (inst_39076);
var state_39114__$1 = (function (){var statearr_39136 = state_39114;
(statearr_39136[(11)] = inst_39074__$1);

(statearr_39136[(14)] = inst_39073__$1);

return statearr_39136;
})();
if(cljs.core.truth_(inst_39077)){
var statearr_39137_39194 = state_39114__$1;
(statearr_39137_39194[(1)] = (23));

} else {
var statearr_39138_39195 = state_39114__$1;
(statearr_39138_39195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (36))){
var inst_39064 = (state_39114[(12)]);
var inst_39041 = inst_39064;
var state_39114__$1 = (function (){var statearr_39139 = state_39114;
(statearr_39139[(7)] = inst_39041);

return statearr_39139;
})();
var statearr_39140_39196 = state_39114__$1;
(statearr_39140_39196[(2)] = null);

(statearr_39140_39196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (29))){
var inst_39088 = (state_39114[(9)]);
var state_39114__$1 = state_39114;
var statearr_39141_39197 = state_39114__$1;
(statearr_39141_39197[(2)] = inst_39088);

(statearr_39141_39197[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (6))){
var state_39114__$1 = state_39114;
var statearr_39142_39198 = state_39114__$1;
(statearr_39142_39198[(2)] = false);

(statearr_39142_39198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (28))){
var inst_39084 = (state_39114[(2)]);
var inst_39085 = calc_state.call(null);
var inst_39041 = inst_39085;
var state_39114__$1 = (function (){var statearr_39143 = state_39114;
(statearr_39143[(7)] = inst_39041);

(statearr_39143[(15)] = inst_39084);

return statearr_39143;
})();
var statearr_39144_39199 = state_39114__$1;
(statearr_39144_39199[(2)] = null);

(statearr_39144_39199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (25))){
var inst_39110 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
var statearr_39145_39200 = state_39114__$1;
(statearr_39145_39200[(2)] = inst_39110);

(statearr_39145_39200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (34))){
var inst_39108 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
var statearr_39146_39201 = state_39114__$1;
(statearr_39146_39201[(2)] = inst_39108);

(statearr_39146_39201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (17))){
var state_39114__$1 = state_39114;
var statearr_39147_39202 = state_39114__$1;
(statearr_39147_39202[(2)] = false);

(statearr_39147_39202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (3))){
var state_39114__$1 = state_39114;
var statearr_39148_39203 = state_39114__$1;
(statearr_39148_39203[(2)] = false);

(statearr_39148_39203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (12))){
var inst_39112 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39114__$1,inst_39112);
} else {
if((state_val_39115 === (2))){
var inst_39016 = (state_39114[(8)]);
var inst_39021 = inst_39016.cljs$lang$protocol_mask$partition0$;
var inst_39022 = (inst_39021 & (64));
var inst_39023 = inst_39016.cljs$core$ISeq$;
var inst_39024 = (cljs.core.PROTOCOL_SENTINEL === inst_39023);
var inst_39025 = (inst_39022) || (inst_39024);
var state_39114__$1 = state_39114;
if(cljs.core.truth_(inst_39025)){
var statearr_39149_39204 = state_39114__$1;
(statearr_39149_39204[(1)] = (5));

} else {
var statearr_39150_39205 = state_39114__$1;
(statearr_39150_39205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (23))){
var inst_39073 = (state_39114[(14)]);
var inst_39079 = (inst_39073 == null);
var state_39114__$1 = state_39114;
if(cljs.core.truth_(inst_39079)){
var statearr_39151_39206 = state_39114__$1;
(statearr_39151_39206[(1)] = (26));

} else {
var statearr_39152_39207 = state_39114__$1;
(statearr_39152_39207[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (35))){
var inst_39099 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
if(cljs.core.truth_(inst_39099)){
var statearr_39153_39208 = state_39114__$1;
(statearr_39153_39208[(1)] = (36));

} else {
var statearr_39154_39209 = state_39114__$1;
(statearr_39154_39209[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (19))){
var inst_39041 = (state_39114[(7)]);
var inst_39061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39041);
var state_39114__$1 = state_39114;
var statearr_39155_39210 = state_39114__$1;
(statearr_39155_39210[(2)] = inst_39061);

(statearr_39155_39210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (11))){
var inst_39041 = (state_39114[(7)]);
var inst_39045 = (inst_39041 == null);
var inst_39046 = cljs.core.not.call(null,inst_39045);
var state_39114__$1 = state_39114;
if(inst_39046){
var statearr_39156_39211 = state_39114__$1;
(statearr_39156_39211[(1)] = (13));

} else {
var statearr_39157_39212 = state_39114__$1;
(statearr_39157_39212[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (9))){
var inst_39016 = (state_39114[(8)]);
var state_39114__$1 = state_39114;
var statearr_39158_39213 = state_39114__$1;
(statearr_39158_39213[(2)] = inst_39016);

(statearr_39158_39213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (5))){
var state_39114__$1 = state_39114;
var statearr_39159_39214 = state_39114__$1;
(statearr_39159_39214[(2)] = true);

(statearr_39159_39214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (14))){
var state_39114__$1 = state_39114;
var statearr_39160_39215 = state_39114__$1;
(statearr_39160_39215[(2)] = false);

(statearr_39160_39215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (26))){
var inst_39074 = (state_39114[(11)]);
var inst_39081 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39074);
var state_39114__$1 = state_39114;
var statearr_39161_39216 = state_39114__$1;
(statearr_39161_39216[(2)] = inst_39081);

(statearr_39161_39216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (16))){
var state_39114__$1 = state_39114;
var statearr_39162_39217 = state_39114__$1;
(statearr_39162_39217[(2)] = true);

(statearr_39162_39217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (38))){
var inst_39104 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
var statearr_39163_39218 = state_39114__$1;
(statearr_39163_39218[(2)] = inst_39104);

(statearr_39163_39218[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (30))){
var inst_39066 = (state_39114[(13)]);
var inst_39065 = (state_39114[(10)]);
var inst_39074 = (state_39114[(11)]);
var inst_39091 = cljs.core.empty_QMARK_.call(null,inst_39065);
var inst_39092 = inst_39066.call(null,inst_39074);
var inst_39093 = cljs.core.not.call(null,inst_39092);
var inst_39094 = (inst_39091) && (inst_39093);
var state_39114__$1 = state_39114;
var statearr_39164_39219 = state_39114__$1;
(statearr_39164_39219[(2)] = inst_39094);

(statearr_39164_39219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (10))){
var inst_39016 = (state_39114[(8)]);
var inst_39037 = (state_39114[(2)]);
var inst_39038 = cljs.core.get.call(null,inst_39037,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39039 = cljs.core.get.call(null,inst_39037,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39040 = cljs.core.get.call(null,inst_39037,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39041 = inst_39016;
var state_39114__$1 = (function (){var statearr_39165 = state_39114;
(statearr_39165[(7)] = inst_39041);

(statearr_39165[(16)] = inst_39040);

(statearr_39165[(17)] = inst_39038);

(statearr_39165[(18)] = inst_39039);

return statearr_39165;
})();
var statearr_39166_39220 = state_39114__$1;
(statearr_39166_39220[(2)] = null);

(statearr_39166_39220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (18))){
var inst_39056 = (state_39114[(2)]);
var state_39114__$1 = state_39114;
var statearr_39167_39221 = state_39114__$1;
(statearr_39167_39221[(2)] = inst_39056);

(statearr_39167_39221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (37))){
var state_39114__$1 = state_39114;
var statearr_39168_39222 = state_39114__$1;
(statearr_39168_39222[(2)] = null);

(statearr_39168_39222[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39115 === (8))){
var inst_39016 = (state_39114[(8)]);
var inst_39034 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39016);
var state_39114__$1 = state_39114;
var statearr_39169_39223 = state_39114__$1;
(statearr_39169_39223[(2)] = inst_39034);

(statearr_39169_39223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___39177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37328__auto__,c__37440__auto___39177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37329__auto__ = null;
var cljs$core$async$mix_$_state_machine__37329__auto____0 = (function (){
var statearr_39173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39173[(0)] = cljs$core$async$mix_$_state_machine__37329__auto__);

(statearr_39173[(1)] = (1));

return statearr_39173;
});
var cljs$core$async$mix_$_state_machine__37329__auto____1 = (function (state_39114){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_39114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e39174){if((e39174 instanceof Object)){
var ex__37332__auto__ = e39174;
var statearr_39175_39224 = state_39114;
(statearr_39175_39224[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39225 = state_39114;
state_39114 = G__39225;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37329__auto__ = function(state_39114){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37329__auto____1.call(this,state_39114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37329__auto____0;
cljs$core$async$mix_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37329__auto____1;
return cljs$core$async$mix_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___39177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37442__auto__ = (function (){var statearr_39176 = f__37441__auto__.call(null);
(statearr_39176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___39177);

return statearr_39176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___39177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__35004__auto__ = (((p == null))?null:p);
var m__35005__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__35005__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__35004__auto__ = (((p == null))?null:p);
var m__35005__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,p,v,ch);
} else {
var m__35005__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args39226 = [];
var len__35449__auto___39229 = arguments.length;
var i__35450__auto___39230 = (0);
while(true){
if((i__35450__auto___39230 < len__35449__auto___39229)){
args39226.push((arguments[i__35450__auto___39230]));

var G__39231 = (i__35450__auto___39230 + (1));
i__35450__auto___39230 = G__39231;
continue;
} else {
}
break;
}

var G__39228 = args39226.length;
switch (G__39228) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39226.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__35004__auto__ = (((p == null))?null:p);
var m__35005__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,p);
} else {
var m__35005__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__35004__auto__ = (((p == null))?null:p);
var m__35005__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35004__auto__)]);
if(!((m__35005__auto__ == null))){
return m__35005__auto__.call(null,p,v);
} else {
var m__35005__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35005__auto____$1 == null))){
return m__35005__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args39234 = [];
var len__35449__auto___39359 = arguments.length;
var i__35450__auto___39360 = (0);
while(true){
if((i__35450__auto___39360 < len__35449__auto___39359)){
args39234.push((arguments[i__35450__auto___39360]));

var G__39361 = (i__35450__auto___39360 + (1));
i__35450__auto___39360 = G__39361;
continue;
} else {
}
break;
}

var G__39236 = args39234.length;
switch (G__39236) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39234.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__34336__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34336__auto__,mults){
return (function (p1__39233_SHARP_){
if(cljs.core.truth_(p1__39233_SHARP_.call(null,topic))){
return p1__39233_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39233_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34336__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39237 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39238){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39238 = meta39238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39239,meta39238__$1){
var self__ = this;
var _39239__$1 = this;
return (new cljs.core.async.t_cljs$core$async39237(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39238__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39239){
var self__ = this;
var _39239__$1 = this;
return self__.meta39238;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39237.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39237.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39237.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39237.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39237.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39238","meta39238",-889930195,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39237";

cljs.core.async.t_cljs$core$async39237.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async39237");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39237 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39238){
return (new cljs.core.async.t_cljs$core$async39237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39238));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39237(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37440__auto___39363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___39363,mults,ensure_mult,p){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___39363,mults,ensure_mult,p){
return (function (state_39311){
var state_val_39312 = (state_39311[(1)]);
if((state_val_39312 === (7))){
var inst_39307 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39313_39364 = state_39311__$1;
(statearr_39313_39364[(2)] = inst_39307);

(statearr_39313_39364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (20))){
var state_39311__$1 = state_39311;
var statearr_39314_39365 = state_39311__$1;
(statearr_39314_39365[(2)] = null);

(statearr_39314_39365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (1))){
var state_39311__$1 = state_39311;
var statearr_39315_39366 = state_39311__$1;
(statearr_39315_39366[(2)] = null);

(statearr_39315_39366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (24))){
var inst_39290 = (state_39311[(7)]);
var inst_39299 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39290);
var state_39311__$1 = state_39311;
var statearr_39316_39367 = state_39311__$1;
(statearr_39316_39367[(2)] = inst_39299);

(statearr_39316_39367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (4))){
var inst_39242 = (state_39311[(8)]);
var inst_39242__$1 = (state_39311[(2)]);
var inst_39243 = (inst_39242__$1 == null);
var state_39311__$1 = (function (){var statearr_39317 = state_39311;
(statearr_39317[(8)] = inst_39242__$1);

return statearr_39317;
})();
if(cljs.core.truth_(inst_39243)){
var statearr_39318_39368 = state_39311__$1;
(statearr_39318_39368[(1)] = (5));

} else {
var statearr_39319_39369 = state_39311__$1;
(statearr_39319_39369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (15))){
var inst_39284 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39320_39370 = state_39311__$1;
(statearr_39320_39370[(2)] = inst_39284);

(statearr_39320_39370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (21))){
var inst_39304 = (state_39311[(2)]);
var state_39311__$1 = (function (){var statearr_39321 = state_39311;
(statearr_39321[(9)] = inst_39304);

return statearr_39321;
})();
var statearr_39322_39371 = state_39311__$1;
(statearr_39322_39371[(2)] = null);

(statearr_39322_39371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (13))){
var inst_39266 = (state_39311[(10)]);
var inst_39268 = cljs.core.chunked_seq_QMARK_.call(null,inst_39266);
var state_39311__$1 = state_39311;
if(inst_39268){
var statearr_39323_39372 = state_39311__$1;
(statearr_39323_39372[(1)] = (16));

} else {
var statearr_39324_39373 = state_39311__$1;
(statearr_39324_39373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (22))){
var inst_39296 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
if(cljs.core.truth_(inst_39296)){
var statearr_39325_39374 = state_39311__$1;
(statearr_39325_39374[(1)] = (23));

} else {
var statearr_39326_39375 = state_39311__$1;
(statearr_39326_39375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (6))){
var inst_39242 = (state_39311[(8)]);
var inst_39290 = (state_39311[(7)]);
var inst_39292 = (state_39311[(11)]);
var inst_39290__$1 = topic_fn.call(null,inst_39242);
var inst_39291 = cljs.core.deref.call(null,mults);
var inst_39292__$1 = cljs.core.get.call(null,inst_39291,inst_39290__$1);
var state_39311__$1 = (function (){var statearr_39327 = state_39311;
(statearr_39327[(7)] = inst_39290__$1);

(statearr_39327[(11)] = inst_39292__$1);

return statearr_39327;
})();
if(cljs.core.truth_(inst_39292__$1)){
var statearr_39328_39376 = state_39311__$1;
(statearr_39328_39376[(1)] = (19));

} else {
var statearr_39329_39377 = state_39311__$1;
(statearr_39329_39377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (25))){
var inst_39301 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39330_39378 = state_39311__$1;
(statearr_39330_39378[(2)] = inst_39301);

(statearr_39330_39378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (17))){
var inst_39266 = (state_39311[(10)]);
var inst_39275 = cljs.core.first.call(null,inst_39266);
var inst_39276 = cljs.core.async.muxch_STAR_.call(null,inst_39275);
var inst_39277 = cljs.core.async.close_BANG_.call(null,inst_39276);
var inst_39278 = cljs.core.next.call(null,inst_39266);
var inst_39252 = inst_39278;
var inst_39253 = null;
var inst_39254 = (0);
var inst_39255 = (0);
var state_39311__$1 = (function (){var statearr_39331 = state_39311;
(statearr_39331[(12)] = inst_39254);

(statearr_39331[(13)] = inst_39255);

(statearr_39331[(14)] = inst_39253);

(statearr_39331[(15)] = inst_39277);

(statearr_39331[(16)] = inst_39252);

return statearr_39331;
})();
var statearr_39332_39379 = state_39311__$1;
(statearr_39332_39379[(2)] = null);

(statearr_39332_39379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (3))){
var inst_39309 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39311__$1,inst_39309);
} else {
if((state_val_39312 === (12))){
var inst_39286 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39333_39380 = state_39311__$1;
(statearr_39333_39380[(2)] = inst_39286);

(statearr_39333_39380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (2))){
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39311__$1,(4),ch);
} else {
if((state_val_39312 === (23))){
var state_39311__$1 = state_39311;
var statearr_39334_39381 = state_39311__$1;
(statearr_39334_39381[(2)] = null);

(statearr_39334_39381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (19))){
var inst_39242 = (state_39311[(8)]);
var inst_39292 = (state_39311[(11)]);
var inst_39294 = cljs.core.async.muxch_STAR_.call(null,inst_39292);
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39311__$1,(22),inst_39294,inst_39242);
} else {
if((state_val_39312 === (11))){
var inst_39266 = (state_39311[(10)]);
var inst_39252 = (state_39311[(16)]);
var inst_39266__$1 = cljs.core.seq.call(null,inst_39252);
var state_39311__$1 = (function (){var statearr_39335 = state_39311;
(statearr_39335[(10)] = inst_39266__$1);

return statearr_39335;
})();
if(inst_39266__$1){
var statearr_39336_39382 = state_39311__$1;
(statearr_39336_39382[(1)] = (13));

} else {
var statearr_39337_39383 = state_39311__$1;
(statearr_39337_39383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (9))){
var inst_39288 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39338_39384 = state_39311__$1;
(statearr_39338_39384[(2)] = inst_39288);

(statearr_39338_39384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (5))){
var inst_39249 = cljs.core.deref.call(null,mults);
var inst_39250 = cljs.core.vals.call(null,inst_39249);
var inst_39251 = cljs.core.seq.call(null,inst_39250);
var inst_39252 = inst_39251;
var inst_39253 = null;
var inst_39254 = (0);
var inst_39255 = (0);
var state_39311__$1 = (function (){var statearr_39339 = state_39311;
(statearr_39339[(12)] = inst_39254);

(statearr_39339[(13)] = inst_39255);

(statearr_39339[(14)] = inst_39253);

(statearr_39339[(16)] = inst_39252);

return statearr_39339;
})();
var statearr_39340_39385 = state_39311__$1;
(statearr_39340_39385[(2)] = null);

(statearr_39340_39385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (14))){
var state_39311__$1 = state_39311;
var statearr_39344_39386 = state_39311__$1;
(statearr_39344_39386[(2)] = null);

(statearr_39344_39386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (16))){
var inst_39266 = (state_39311[(10)]);
var inst_39270 = cljs.core.chunk_first.call(null,inst_39266);
var inst_39271 = cljs.core.chunk_rest.call(null,inst_39266);
var inst_39272 = cljs.core.count.call(null,inst_39270);
var inst_39252 = inst_39271;
var inst_39253 = inst_39270;
var inst_39254 = inst_39272;
var inst_39255 = (0);
var state_39311__$1 = (function (){var statearr_39345 = state_39311;
(statearr_39345[(12)] = inst_39254);

(statearr_39345[(13)] = inst_39255);

(statearr_39345[(14)] = inst_39253);

(statearr_39345[(16)] = inst_39252);

return statearr_39345;
})();
var statearr_39346_39387 = state_39311__$1;
(statearr_39346_39387[(2)] = null);

(statearr_39346_39387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (10))){
var inst_39254 = (state_39311[(12)]);
var inst_39255 = (state_39311[(13)]);
var inst_39253 = (state_39311[(14)]);
var inst_39252 = (state_39311[(16)]);
var inst_39260 = cljs.core._nth.call(null,inst_39253,inst_39255);
var inst_39261 = cljs.core.async.muxch_STAR_.call(null,inst_39260);
var inst_39262 = cljs.core.async.close_BANG_.call(null,inst_39261);
var inst_39263 = (inst_39255 + (1));
var tmp39341 = inst_39254;
var tmp39342 = inst_39253;
var tmp39343 = inst_39252;
var inst_39252__$1 = tmp39343;
var inst_39253__$1 = tmp39342;
var inst_39254__$1 = tmp39341;
var inst_39255__$1 = inst_39263;
var state_39311__$1 = (function (){var statearr_39347 = state_39311;
(statearr_39347[(12)] = inst_39254__$1);

(statearr_39347[(13)] = inst_39255__$1);

(statearr_39347[(14)] = inst_39253__$1);

(statearr_39347[(17)] = inst_39262);

(statearr_39347[(16)] = inst_39252__$1);

return statearr_39347;
})();
var statearr_39348_39388 = state_39311__$1;
(statearr_39348_39388[(2)] = null);

(statearr_39348_39388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (18))){
var inst_39281 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39349_39389 = state_39311__$1;
(statearr_39349_39389[(2)] = inst_39281);

(statearr_39349_39389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (8))){
var inst_39254 = (state_39311[(12)]);
var inst_39255 = (state_39311[(13)]);
var inst_39257 = (inst_39255 < inst_39254);
var inst_39258 = inst_39257;
var state_39311__$1 = state_39311;
if(cljs.core.truth_(inst_39258)){
var statearr_39350_39390 = state_39311__$1;
(statearr_39350_39390[(1)] = (10));

} else {
var statearr_39351_39391 = state_39311__$1;
(statearr_39351_39391[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___39363,mults,ensure_mult,p))
;
return ((function (switch__37328__auto__,c__37440__auto___39363,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_39355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39355[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_39355[(1)] = (1));

return statearr_39355;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_39311){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_39311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e39356){if((e39356 instanceof Object)){
var ex__37332__auto__ = e39356;
var statearr_39357_39392 = state_39311;
(statearr_39357_39392[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39393 = state_39311;
state_39311 = G__39393;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_39311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_39311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___39363,mults,ensure_mult,p))
})();
var state__37442__auto__ = (function (){var statearr_39358 = f__37441__auto__.call(null);
(statearr_39358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___39363);

return statearr_39358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___39363,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args39394 = [];
var len__35449__auto___39397 = arguments.length;
var i__35450__auto___39398 = (0);
while(true){
if((i__35450__auto___39398 < len__35449__auto___39397)){
args39394.push((arguments[i__35450__auto___39398]));

var G__39399 = (i__35450__auto___39398 + (1));
i__35450__auto___39398 = G__39399;
continue;
} else {
}
break;
}

var G__39396 = args39394.length;
switch (G__39396) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39394.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args39401 = [];
var len__35449__auto___39404 = arguments.length;
var i__35450__auto___39405 = (0);
while(true){
if((i__35450__auto___39405 < len__35449__auto___39404)){
args39401.push((arguments[i__35450__auto___39405]));

var G__39406 = (i__35450__auto___39405 + (1));
i__35450__auto___39405 = G__39406;
continue;
} else {
}
break;
}

var G__39403 = args39401.length;
switch (G__39403) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39401.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args39408 = [];
var len__35449__auto___39479 = arguments.length;
var i__35450__auto___39480 = (0);
while(true){
if((i__35450__auto___39480 < len__35449__auto___39479)){
args39408.push((arguments[i__35450__auto___39480]));

var G__39481 = (i__35450__auto___39480 + (1));
i__35450__auto___39480 = G__39481;
continue;
} else {
}
break;
}

var G__39410 = args39408.length;
switch (G__39410) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39408.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37440__auto___39483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___39483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___39483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39449){
var state_val_39450 = (state_39449[(1)]);
if((state_val_39450 === (7))){
var state_39449__$1 = state_39449;
var statearr_39451_39484 = state_39449__$1;
(statearr_39451_39484[(2)] = null);

(statearr_39451_39484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (1))){
var state_39449__$1 = state_39449;
var statearr_39452_39485 = state_39449__$1;
(statearr_39452_39485[(2)] = null);

(statearr_39452_39485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (4))){
var inst_39413 = (state_39449[(7)]);
var inst_39415 = (inst_39413 < cnt);
var state_39449__$1 = state_39449;
if(cljs.core.truth_(inst_39415)){
var statearr_39453_39486 = state_39449__$1;
(statearr_39453_39486[(1)] = (6));

} else {
var statearr_39454_39487 = state_39449__$1;
(statearr_39454_39487[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (15))){
var inst_39445 = (state_39449[(2)]);
var state_39449__$1 = state_39449;
var statearr_39455_39488 = state_39449__$1;
(statearr_39455_39488[(2)] = inst_39445);

(statearr_39455_39488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (13))){
var inst_39438 = cljs.core.async.close_BANG_.call(null,out);
var state_39449__$1 = state_39449;
var statearr_39456_39489 = state_39449__$1;
(statearr_39456_39489[(2)] = inst_39438);

(statearr_39456_39489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (6))){
var state_39449__$1 = state_39449;
var statearr_39457_39490 = state_39449__$1;
(statearr_39457_39490[(2)] = null);

(statearr_39457_39490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (3))){
var inst_39447 = (state_39449[(2)]);
var state_39449__$1 = state_39449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39449__$1,inst_39447);
} else {
if((state_val_39450 === (12))){
var inst_39435 = (state_39449[(8)]);
var inst_39435__$1 = (state_39449[(2)]);
var inst_39436 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39435__$1);
var state_39449__$1 = (function (){var statearr_39458 = state_39449;
(statearr_39458[(8)] = inst_39435__$1);

return statearr_39458;
})();
if(cljs.core.truth_(inst_39436)){
var statearr_39459_39491 = state_39449__$1;
(statearr_39459_39491[(1)] = (13));

} else {
var statearr_39460_39492 = state_39449__$1;
(statearr_39460_39492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (2))){
var inst_39412 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39413 = (0);
var state_39449__$1 = (function (){var statearr_39461 = state_39449;
(statearr_39461[(7)] = inst_39413);

(statearr_39461[(9)] = inst_39412);

return statearr_39461;
})();
var statearr_39462_39493 = state_39449__$1;
(statearr_39462_39493[(2)] = null);

(statearr_39462_39493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (11))){
var inst_39413 = (state_39449[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39449,(10),Object,null,(9));
var inst_39422 = chs__$1.call(null,inst_39413);
var inst_39423 = done.call(null,inst_39413);
var inst_39424 = cljs.core.async.take_BANG_.call(null,inst_39422,inst_39423);
var state_39449__$1 = state_39449;
var statearr_39463_39494 = state_39449__$1;
(statearr_39463_39494[(2)] = inst_39424);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39449__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (9))){
var inst_39413 = (state_39449[(7)]);
var inst_39426 = (state_39449[(2)]);
var inst_39427 = (inst_39413 + (1));
var inst_39413__$1 = inst_39427;
var state_39449__$1 = (function (){var statearr_39464 = state_39449;
(statearr_39464[(10)] = inst_39426);

(statearr_39464[(7)] = inst_39413__$1);

return statearr_39464;
})();
var statearr_39465_39495 = state_39449__$1;
(statearr_39465_39495[(2)] = null);

(statearr_39465_39495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (5))){
var inst_39433 = (state_39449[(2)]);
var state_39449__$1 = (function (){var statearr_39466 = state_39449;
(statearr_39466[(11)] = inst_39433);

return statearr_39466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39449__$1,(12),dchan);
} else {
if((state_val_39450 === (14))){
var inst_39435 = (state_39449[(8)]);
var inst_39440 = cljs.core.apply.call(null,f,inst_39435);
var state_39449__$1 = state_39449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39449__$1,(16),out,inst_39440);
} else {
if((state_val_39450 === (16))){
var inst_39442 = (state_39449[(2)]);
var state_39449__$1 = (function (){var statearr_39467 = state_39449;
(statearr_39467[(12)] = inst_39442);

return statearr_39467;
})();
var statearr_39468_39496 = state_39449__$1;
(statearr_39468_39496[(2)] = null);

(statearr_39468_39496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (10))){
var inst_39417 = (state_39449[(2)]);
var inst_39418 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39449__$1 = (function (){var statearr_39469 = state_39449;
(statearr_39469[(13)] = inst_39417);

return statearr_39469;
})();
var statearr_39470_39497 = state_39449__$1;
(statearr_39470_39497[(2)] = inst_39418);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39449__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39450 === (8))){
var inst_39431 = (state_39449[(2)]);
var state_39449__$1 = state_39449;
var statearr_39471_39498 = state_39449__$1;
(statearr_39471_39498[(2)] = inst_39431);

(statearr_39471_39498[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___39483,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37328__auto__,c__37440__auto___39483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_39475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39475[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_39475[(1)] = (1));

return statearr_39475;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_39449){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_39449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e39476){if((e39476 instanceof Object)){
var ex__37332__auto__ = e39476;
var statearr_39477_39499 = state_39449;
(statearr_39477_39499[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39500 = state_39449;
state_39449 = G__39500;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_39449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_39449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___39483,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37442__auto__ = (function (){var statearr_39478 = f__37441__auto__.call(null);
(statearr_39478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___39483);

return statearr_39478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___39483,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args39502 = [];
var len__35449__auto___39560 = arguments.length;
var i__35450__auto___39561 = (0);
while(true){
if((i__35450__auto___39561 < len__35449__auto___39560)){
args39502.push((arguments[i__35450__auto___39561]));

var G__39562 = (i__35450__auto___39561 + (1));
i__35450__auto___39561 = G__39562;
continue;
} else {
}
break;
}

var G__39504 = args39502.length;
switch (G__39504) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39502.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37440__auto___39564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___39564,out){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___39564,out){
return (function (state_39536){
var state_val_39537 = (state_39536[(1)]);
if((state_val_39537 === (7))){
var inst_39515 = (state_39536[(7)]);
var inst_39516 = (state_39536[(8)]);
var inst_39515__$1 = (state_39536[(2)]);
var inst_39516__$1 = cljs.core.nth.call(null,inst_39515__$1,(0),null);
var inst_39517 = cljs.core.nth.call(null,inst_39515__$1,(1),null);
var inst_39518 = (inst_39516__$1 == null);
var state_39536__$1 = (function (){var statearr_39538 = state_39536;
(statearr_39538[(7)] = inst_39515__$1);

(statearr_39538[(9)] = inst_39517);

(statearr_39538[(8)] = inst_39516__$1);

return statearr_39538;
})();
if(cljs.core.truth_(inst_39518)){
var statearr_39539_39565 = state_39536__$1;
(statearr_39539_39565[(1)] = (8));

} else {
var statearr_39540_39566 = state_39536__$1;
(statearr_39540_39566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (1))){
var inst_39505 = cljs.core.vec.call(null,chs);
var inst_39506 = inst_39505;
var state_39536__$1 = (function (){var statearr_39541 = state_39536;
(statearr_39541[(10)] = inst_39506);

return statearr_39541;
})();
var statearr_39542_39567 = state_39536__$1;
(statearr_39542_39567[(2)] = null);

(statearr_39542_39567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (4))){
var inst_39506 = (state_39536[(10)]);
var state_39536__$1 = state_39536;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39536__$1,(7),inst_39506);
} else {
if((state_val_39537 === (6))){
var inst_39532 = (state_39536[(2)]);
var state_39536__$1 = state_39536;
var statearr_39543_39568 = state_39536__$1;
(statearr_39543_39568[(2)] = inst_39532);

(statearr_39543_39568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (3))){
var inst_39534 = (state_39536[(2)]);
var state_39536__$1 = state_39536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39536__$1,inst_39534);
} else {
if((state_val_39537 === (2))){
var inst_39506 = (state_39536[(10)]);
var inst_39508 = cljs.core.count.call(null,inst_39506);
var inst_39509 = (inst_39508 > (0));
var state_39536__$1 = state_39536;
if(cljs.core.truth_(inst_39509)){
var statearr_39545_39569 = state_39536__$1;
(statearr_39545_39569[(1)] = (4));

} else {
var statearr_39546_39570 = state_39536__$1;
(statearr_39546_39570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (11))){
var inst_39506 = (state_39536[(10)]);
var inst_39525 = (state_39536[(2)]);
var tmp39544 = inst_39506;
var inst_39506__$1 = tmp39544;
var state_39536__$1 = (function (){var statearr_39547 = state_39536;
(statearr_39547[(11)] = inst_39525);

(statearr_39547[(10)] = inst_39506__$1);

return statearr_39547;
})();
var statearr_39548_39571 = state_39536__$1;
(statearr_39548_39571[(2)] = null);

(statearr_39548_39571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (9))){
var inst_39516 = (state_39536[(8)]);
var state_39536__$1 = state_39536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39536__$1,(11),out,inst_39516);
} else {
if((state_val_39537 === (5))){
var inst_39530 = cljs.core.async.close_BANG_.call(null,out);
var state_39536__$1 = state_39536;
var statearr_39549_39572 = state_39536__$1;
(statearr_39549_39572[(2)] = inst_39530);

(statearr_39549_39572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (10))){
var inst_39528 = (state_39536[(2)]);
var state_39536__$1 = state_39536;
var statearr_39550_39573 = state_39536__$1;
(statearr_39550_39573[(2)] = inst_39528);

(statearr_39550_39573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (8))){
var inst_39515 = (state_39536[(7)]);
var inst_39506 = (state_39536[(10)]);
var inst_39517 = (state_39536[(9)]);
var inst_39516 = (state_39536[(8)]);
var inst_39520 = (function (){var cs = inst_39506;
var vec__39511 = inst_39515;
var v = inst_39516;
var c = inst_39517;
return ((function (cs,vec__39511,v,c,inst_39515,inst_39506,inst_39517,inst_39516,state_val_39537,c__37440__auto___39564,out){
return (function (p1__39501_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39501_SHARP_);
});
;})(cs,vec__39511,v,c,inst_39515,inst_39506,inst_39517,inst_39516,state_val_39537,c__37440__auto___39564,out))
})();
var inst_39521 = cljs.core.filterv.call(null,inst_39520,inst_39506);
var inst_39506__$1 = inst_39521;
var state_39536__$1 = (function (){var statearr_39551 = state_39536;
(statearr_39551[(10)] = inst_39506__$1);

return statearr_39551;
})();
var statearr_39552_39574 = state_39536__$1;
(statearr_39552_39574[(2)] = null);

(statearr_39552_39574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___39564,out))
;
return ((function (switch__37328__auto__,c__37440__auto___39564,out){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_39556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39556[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_39556[(1)] = (1));

return statearr_39556;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_39536){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_39536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e39557){if((e39557 instanceof Object)){
var ex__37332__auto__ = e39557;
var statearr_39558_39575 = state_39536;
(statearr_39558_39575[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39576 = state_39536;
state_39536 = G__39576;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_39536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_39536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___39564,out))
})();
var state__37442__auto__ = (function (){var statearr_39559 = f__37441__auto__.call(null);
(statearr_39559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___39564);

return statearr_39559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___39564,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args39577 = [];
var len__35449__auto___39626 = arguments.length;
var i__35450__auto___39627 = (0);
while(true){
if((i__35450__auto___39627 < len__35449__auto___39626)){
args39577.push((arguments[i__35450__auto___39627]));

var G__39628 = (i__35450__auto___39627 + (1));
i__35450__auto___39627 = G__39628;
continue;
} else {
}
break;
}

var G__39579 = args39577.length;
switch (G__39579) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39577.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37440__auto___39630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___39630,out){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___39630,out){
return (function (state_39603){
var state_val_39604 = (state_39603[(1)]);
if((state_val_39604 === (7))){
var inst_39585 = (state_39603[(7)]);
var inst_39585__$1 = (state_39603[(2)]);
var inst_39586 = (inst_39585__$1 == null);
var inst_39587 = cljs.core.not.call(null,inst_39586);
var state_39603__$1 = (function (){var statearr_39605 = state_39603;
(statearr_39605[(7)] = inst_39585__$1);

return statearr_39605;
})();
if(inst_39587){
var statearr_39606_39631 = state_39603__$1;
(statearr_39606_39631[(1)] = (8));

} else {
var statearr_39607_39632 = state_39603__$1;
(statearr_39607_39632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39604 === (1))){
var inst_39580 = (0);
var state_39603__$1 = (function (){var statearr_39608 = state_39603;
(statearr_39608[(8)] = inst_39580);

return statearr_39608;
})();
var statearr_39609_39633 = state_39603__$1;
(statearr_39609_39633[(2)] = null);

(statearr_39609_39633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39604 === (4))){
var state_39603__$1 = state_39603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39603__$1,(7),ch);
} else {
if((state_val_39604 === (6))){
var inst_39598 = (state_39603[(2)]);
var state_39603__$1 = state_39603;
var statearr_39610_39634 = state_39603__$1;
(statearr_39610_39634[(2)] = inst_39598);

(statearr_39610_39634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39604 === (3))){
var inst_39600 = (state_39603[(2)]);
var inst_39601 = cljs.core.async.close_BANG_.call(null,out);
var state_39603__$1 = (function (){var statearr_39611 = state_39603;
(statearr_39611[(9)] = inst_39600);

return statearr_39611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39603__$1,inst_39601);
} else {
if((state_val_39604 === (2))){
var inst_39580 = (state_39603[(8)]);
var inst_39582 = (inst_39580 < n);
var state_39603__$1 = state_39603;
if(cljs.core.truth_(inst_39582)){
var statearr_39612_39635 = state_39603__$1;
(statearr_39612_39635[(1)] = (4));

} else {
var statearr_39613_39636 = state_39603__$1;
(statearr_39613_39636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39604 === (11))){
var inst_39580 = (state_39603[(8)]);
var inst_39590 = (state_39603[(2)]);
var inst_39591 = (inst_39580 + (1));
var inst_39580__$1 = inst_39591;
var state_39603__$1 = (function (){var statearr_39614 = state_39603;
(statearr_39614[(8)] = inst_39580__$1);

(statearr_39614[(10)] = inst_39590);

return statearr_39614;
})();
var statearr_39615_39637 = state_39603__$1;
(statearr_39615_39637[(2)] = null);

(statearr_39615_39637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39604 === (9))){
var state_39603__$1 = state_39603;
var statearr_39616_39638 = state_39603__$1;
(statearr_39616_39638[(2)] = null);

(statearr_39616_39638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39604 === (5))){
var state_39603__$1 = state_39603;
var statearr_39617_39639 = state_39603__$1;
(statearr_39617_39639[(2)] = null);

(statearr_39617_39639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39604 === (10))){
var inst_39595 = (state_39603[(2)]);
var state_39603__$1 = state_39603;
var statearr_39618_39640 = state_39603__$1;
(statearr_39618_39640[(2)] = inst_39595);

(statearr_39618_39640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39604 === (8))){
var inst_39585 = (state_39603[(7)]);
var state_39603__$1 = state_39603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39603__$1,(11),out,inst_39585);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___39630,out))
;
return ((function (switch__37328__auto__,c__37440__auto___39630,out){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_39622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39622[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_39622[(1)] = (1));

return statearr_39622;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_39603){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_39603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e39623){if((e39623 instanceof Object)){
var ex__37332__auto__ = e39623;
var statearr_39624_39641 = state_39603;
(statearr_39624_39641[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39642 = state_39603;
state_39603 = G__39642;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_39603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_39603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___39630,out))
})();
var state__37442__auto__ = (function (){var statearr_39625 = f__37441__auto__.call(null);
(statearr_39625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___39630);

return statearr_39625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___39630,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39650 = (function (f,ch,meta39651){
this.f = f;
this.ch = ch;
this.meta39651 = meta39651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39652,meta39651__$1){
var self__ = this;
var _39652__$1 = this;
return (new cljs.core.async.t_cljs$core$async39650(self__.f,self__.ch,meta39651__$1));
});

cljs.core.async.t_cljs$core$async39650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39652){
var self__ = this;
var _39652__$1 = this;
return self__.meta39651;
});

cljs.core.async.t_cljs$core$async39650.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39650.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39653 = (function (f,ch,meta39651,_,fn1,meta39654){
this.f = f;
this.ch = ch;
this.meta39651 = meta39651;
this._ = _;
this.fn1 = fn1;
this.meta39654 = meta39654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39655,meta39654__$1){
var self__ = this;
var _39655__$1 = this;
return (new cljs.core.async.t_cljs$core$async39653(self__.f,self__.ch,self__.meta39651,self__._,self__.fn1,meta39654__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39655){
var self__ = this;
var _39655__$1 = this;
return self__.meta39654;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39643_SHARP_){
return f1.call(null,(((p1__39643_SHARP_ == null))?null:self__.f.call(null,p1__39643_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39653.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39651","meta39651",-583549821,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39650","cljs.core.async/t_cljs$core$async39650",-629460709,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39654","meta39654",-22102884,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39653";

cljs.core.async.t_cljs$core$async39653.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async39653");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39653 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39653(f__$1,ch__$1,meta39651__$1,___$2,fn1__$1,meta39654){
return (new cljs.core.async.t_cljs$core$async39653(f__$1,ch__$1,meta39651__$1,___$2,fn1__$1,meta39654));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39653(self__.f,self__.ch,self__.meta39651,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__34324__auto__ = ret;
if(cljs.core.truth_(and__34324__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__34324__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39650.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39651","meta39651",-583549821,null)], null);
});

cljs.core.async.t_cljs$core$async39650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39650";

cljs.core.async.t_cljs$core$async39650.cljs$lang$ctorPrWriter = (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async39650");
});

cljs.core.async.__GT_t_cljs$core$async39650 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39650(f__$1,ch__$1,meta39651){
return (new cljs.core.async.t_cljs$core$async39650(f__$1,ch__$1,meta39651));
});

}

return (new cljs.core.async.t_cljs$core$async39650(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39659 = (function (f,ch,meta39660){
this.f = f;
this.ch = ch;
this.meta39660 = meta39660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39661,meta39660__$1){
var self__ = this;
var _39661__$1 = this;
return (new cljs.core.async.t_cljs$core$async39659(self__.f,self__.ch,meta39660__$1));
});

cljs.core.async.t_cljs$core$async39659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39661){
var self__ = this;
var _39661__$1 = this;
return self__.meta39660;
});

cljs.core.async.t_cljs$core$async39659.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39659.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39659.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39660","meta39660",1783190816,null)], null);
});

cljs.core.async.t_cljs$core$async39659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39659";

cljs.core.async.t_cljs$core$async39659.cljs$lang$ctorPrWriter = (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async39659");
});

cljs.core.async.__GT_t_cljs$core$async39659 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39659(f__$1,ch__$1,meta39660){
return (new cljs.core.async.t_cljs$core$async39659(f__$1,ch__$1,meta39660));
});

}

return (new cljs.core.async.t_cljs$core$async39659(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39665 = (function (p,ch,meta39666){
this.p = p;
this.ch = ch;
this.meta39666 = meta39666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39667,meta39666__$1){
var self__ = this;
var _39667__$1 = this;
return (new cljs.core.async.t_cljs$core$async39665(self__.p,self__.ch,meta39666__$1));
});

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39667){
var self__ = this;
var _39667__$1 = this;
return self__.meta39666;
});

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39666","meta39666",524942310,null)], null);
});

cljs.core.async.t_cljs$core$async39665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39665";

cljs.core.async.t_cljs$core$async39665.cljs$lang$ctorPrWriter = (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.core.async/t_cljs$core$async39665");
});

cljs.core.async.__GT_t_cljs$core$async39665 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39665(p__$1,ch__$1,meta39666){
return (new cljs.core.async.t_cljs$core$async39665(p__$1,ch__$1,meta39666));
});

}

return (new cljs.core.async.t_cljs$core$async39665(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39668 = [];
var len__35449__auto___39712 = arguments.length;
var i__35450__auto___39713 = (0);
while(true){
if((i__35450__auto___39713 < len__35449__auto___39712)){
args39668.push((arguments[i__35450__auto___39713]));

var G__39714 = (i__35450__auto___39713 + (1));
i__35450__auto___39713 = G__39714;
continue;
} else {
}
break;
}

var G__39670 = args39668.length;
switch (G__39670) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39668.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37440__auto___39716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___39716,out){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___39716,out){
return (function (state_39691){
var state_val_39692 = (state_39691[(1)]);
if((state_val_39692 === (7))){
var inst_39687 = (state_39691[(2)]);
var state_39691__$1 = state_39691;
var statearr_39693_39717 = state_39691__$1;
(statearr_39693_39717[(2)] = inst_39687);

(statearr_39693_39717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39692 === (1))){
var state_39691__$1 = state_39691;
var statearr_39694_39718 = state_39691__$1;
(statearr_39694_39718[(2)] = null);

(statearr_39694_39718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39692 === (4))){
var inst_39673 = (state_39691[(7)]);
var inst_39673__$1 = (state_39691[(2)]);
var inst_39674 = (inst_39673__$1 == null);
var state_39691__$1 = (function (){var statearr_39695 = state_39691;
(statearr_39695[(7)] = inst_39673__$1);

return statearr_39695;
})();
if(cljs.core.truth_(inst_39674)){
var statearr_39696_39719 = state_39691__$1;
(statearr_39696_39719[(1)] = (5));

} else {
var statearr_39697_39720 = state_39691__$1;
(statearr_39697_39720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39692 === (6))){
var inst_39673 = (state_39691[(7)]);
var inst_39678 = p.call(null,inst_39673);
var state_39691__$1 = state_39691;
if(cljs.core.truth_(inst_39678)){
var statearr_39698_39721 = state_39691__$1;
(statearr_39698_39721[(1)] = (8));

} else {
var statearr_39699_39722 = state_39691__$1;
(statearr_39699_39722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39692 === (3))){
var inst_39689 = (state_39691[(2)]);
var state_39691__$1 = state_39691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39691__$1,inst_39689);
} else {
if((state_val_39692 === (2))){
var state_39691__$1 = state_39691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39691__$1,(4),ch);
} else {
if((state_val_39692 === (11))){
var inst_39681 = (state_39691[(2)]);
var state_39691__$1 = state_39691;
var statearr_39700_39723 = state_39691__$1;
(statearr_39700_39723[(2)] = inst_39681);

(statearr_39700_39723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39692 === (9))){
var state_39691__$1 = state_39691;
var statearr_39701_39724 = state_39691__$1;
(statearr_39701_39724[(2)] = null);

(statearr_39701_39724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39692 === (5))){
var inst_39676 = cljs.core.async.close_BANG_.call(null,out);
var state_39691__$1 = state_39691;
var statearr_39702_39725 = state_39691__$1;
(statearr_39702_39725[(2)] = inst_39676);

(statearr_39702_39725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39692 === (10))){
var inst_39684 = (state_39691[(2)]);
var state_39691__$1 = (function (){var statearr_39703 = state_39691;
(statearr_39703[(8)] = inst_39684);

return statearr_39703;
})();
var statearr_39704_39726 = state_39691__$1;
(statearr_39704_39726[(2)] = null);

(statearr_39704_39726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39692 === (8))){
var inst_39673 = (state_39691[(7)]);
var state_39691__$1 = state_39691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39691__$1,(11),out,inst_39673);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___39716,out))
;
return ((function (switch__37328__auto__,c__37440__auto___39716,out){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_39708 = [null,null,null,null,null,null,null,null,null];
(statearr_39708[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_39708[(1)] = (1));

return statearr_39708;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_39691){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_39691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e39709){if((e39709 instanceof Object)){
var ex__37332__auto__ = e39709;
var statearr_39710_39727 = state_39691;
(statearr_39710_39727[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39728 = state_39691;
state_39691 = G__39728;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_39691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_39691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___39716,out))
})();
var state__37442__auto__ = (function (){var statearr_39711 = f__37441__auto__.call(null);
(statearr_39711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___39716);

return statearr_39711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___39716,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39729 = [];
var len__35449__auto___39732 = arguments.length;
var i__35450__auto___39733 = (0);
while(true){
if((i__35450__auto___39733 < len__35449__auto___39732)){
args39729.push((arguments[i__35450__auto___39733]));

var G__39734 = (i__35450__auto___39733 + (1));
i__35450__auto___39733 = G__39734;
continue;
} else {
}
break;
}

var G__39731 = args39729.length;
switch (G__39731) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39729.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__){
return (function (state_39901){
var state_val_39902 = (state_39901[(1)]);
if((state_val_39902 === (7))){
var inst_39897 = (state_39901[(2)]);
var state_39901__$1 = state_39901;
var statearr_39903_39944 = state_39901__$1;
(statearr_39903_39944[(2)] = inst_39897);

(statearr_39903_39944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (20))){
var inst_39867 = (state_39901[(7)]);
var inst_39878 = (state_39901[(2)]);
var inst_39879 = cljs.core.next.call(null,inst_39867);
var inst_39853 = inst_39879;
var inst_39854 = null;
var inst_39855 = (0);
var inst_39856 = (0);
var state_39901__$1 = (function (){var statearr_39904 = state_39901;
(statearr_39904[(8)] = inst_39855);

(statearr_39904[(9)] = inst_39853);

(statearr_39904[(10)] = inst_39878);

(statearr_39904[(11)] = inst_39856);

(statearr_39904[(12)] = inst_39854);

return statearr_39904;
})();
var statearr_39905_39945 = state_39901__$1;
(statearr_39905_39945[(2)] = null);

(statearr_39905_39945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (1))){
var state_39901__$1 = state_39901;
var statearr_39906_39946 = state_39901__$1;
(statearr_39906_39946[(2)] = null);

(statearr_39906_39946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (4))){
var inst_39842 = (state_39901[(13)]);
var inst_39842__$1 = (state_39901[(2)]);
var inst_39843 = (inst_39842__$1 == null);
var state_39901__$1 = (function (){var statearr_39907 = state_39901;
(statearr_39907[(13)] = inst_39842__$1);

return statearr_39907;
})();
if(cljs.core.truth_(inst_39843)){
var statearr_39908_39947 = state_39901__$1;
(statearr_39908_39947[(1)] = (5));

} else {
var statearr_39909_39948 = state_39901__$1;
(statearr_39909_39948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (15))){
var state_39901__$1 = state_39901;
var statearr_39913_39949 = state_39901__$1;
(statearr_39913_39949[(2)] = null);

(statearr_39913_39949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (21))){
var state_39901__$1 = state_39901;
var statearr_39914_39950 = state_39901__$1;
(statearr_39914_39950[(2)] = null);

(statearr_39914_39950[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (13))){
var inst_39855 = (state_39901[(8)]);
var inst_39853 = (state_39901[(9)]);
var inst_39856 = (state_39901[(11)]);
var inst_39854 = (state_39901[(12)]);
var inst_39863 = (state_39901[(2)]);
var inst_39864 = (inst_39856 + (1));
var tmp39910 = inst_39855;
var tmp39911 = inst_39853;
var tmp39912 = inst_39854;
var inst_39853__$1 = tmp39911;
var inst_39854__$1 = tmp39912;
var inst_39855__$1 = tmp39910;
var inst_39856__$1 = inst_39864;
var state_39901__$1 = (function (){var statearr_39915 = state_39901;
(statearr_39915[(8)] = inst_39855__$1);

(statearr_39915[(14)] = inst_39863);

(statearr_39915[(9)] = inst_39853__$1);

(statearr_39915[(11)] = inst_39856__$1);

(statearr_39915[(12)] = inst_39854__$1);

return statearr_39915;
})();
var statearr_39916_39951 = state_39901__$1;
(statearr_39916_39951[(2)] = null);

(statearr_39916_39951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (22))){
var state_39901__$1 = state_39901;
var statearr_39917_39952 = state_39901__$1;
(statearr_39917_39952[(2)] = null);

(statearr_39917_39952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (6))){
var inst_39842 = (state_39901[(13)]);
var inst_39851 = f.call(null,inst_39842);
var inst_39852 = cljs.core.seq.call(null,inst_39851);
var inst_39853 = inst_39852;
var inst_39854 = null;
var inst_39855 = (0);
var inst_39856 = (0);
var state_39901__$1 = (function (){var statearr_39918 = state_39901;
(statearr_39918[(8)] = inst_39855);

(statearr_39918[(9)] = inst_39853);

(statearr_39918[(11)] = inst_39856);

(statearr_39918[(12)] = inst_39854);

return statearr_39918;
})();
var statearr_39919_39953 = state_39901__$1;
(statearr_39919_39953[(2)] = null);

(statearr_39919_39953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (17))){
var inst_39867 = (state_39901[(7)]);
var inst_39871 = cljs.core.chunk_first.call(null,inst_39867);
var inst_39872 = cljs.core.chunk_rest.call(null,inst_39867);
var inst_39873 = cljs.core.count.call(null,inst_39871);
var inst_39853 = inst_39872;
var inst_39854 = inst_39871;
var inst_39855 = inst_39873;
var inst_39856 = (0);
var state_39901__$1 = (function (){var statearr_39920 = state_39901;
(statearr_39920[(8)] = inst_39855);

(statearr_39920[(9)] = inst_39853);

(statearr_39920[(11)] = inst_39856);

(statearr_39920[(12)] = inst_39854);

return statearr_39920;
})();
var statearr_39921_39954 = state_39901__$1;
(statearr_39921_39954[(2)] = null);

(statearr_39921_39954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (3))){
var inst_39899 = (state_39901[(2)]);
var state_39901__$1 = state_39901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39901__$1,inst_39899);
} else {
if((state_val_39902 === (12))){
var inst_39887 = (state_39901[(2)]);
var state_39901__$1 = state_39901;
var statearr_39922_39955 = state_39901__$1;
(statearr_39922_39955[(2)] = inst_39887);

(statearr_39922_39955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (2))){
var state_39901__$1 = state_39901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39901__$1,(4),in$);
} else {
if((state_val_39902 === (23))){
var inst_39895 = (state_39901[(2)]);
var state_39901__$1 = state_39901;
var statearr_39923_39956 = state_39901__$1;
(statearr_39923_39956[(2)] = inst_39895);

(statearr_39923_39956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (19))){
var inst_39882 = (state_39901[(2)]);
var state_39901__$1 = state_39901;
var statearr_39924_39957 = state_39901__$1;
(statearr_39924_39957[(2)] = inst_39882);

(statearr_39924_39957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (11))){
var inst_39853 = (state_39901[(9)]);
var inst_39867 = (state_39901[(7)]);
var inst_39867__$1 = cljs.core.seq.call(null,inst_39853);
var state_39901__$1 = (function (){var statearr_39925 = state_39901;
(statearr_39925[(7)] = inst_39867__$1);

return statearr_39925;
})();
if(inst_39867__$1){
var statearr_39926_39958 = state_39901__$1;
(statearr_39926_39958[(1)] = (14));

} else {
var statearr_39927_39959 = state_39901__$1;
(statearr_39927_39959[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (9))){
var inst_39889 = (state_39901[(2)]);
var inst_39890 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39901__$1 = (function (){var statearr_39928 = state_39901;
(statearr_39928[(15)] = inst_39889);

return statearr_39928;
})();
if(cljs.core.truth_(inst_39890)){
var statearr_39929_39960 = state_39901__$1;
(statearr_39929_39960[(1)] = (21));

} else {
var statearr_39930_39961 = state_39901__$1;
(statearr_39930_39961[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (5))){
var inst_39845 = cljs.core.async.close_BANG_.call(null,out);
var state_39901__$1 = state_39901;
var statearr_39931_39962 = state_39901__$1;
(statearr_39931_39962[(2)] = inst_39845);

(statearr_39931_39962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (14))){
var inst_39867 = (state_39901[(7)]);
var inst_39869 = cljs.core.chunked_seq_QMARK_.call(null,inst_39867);
var state_39901__$1 = state_39901;
if(inst_39869){
var statearr_39932_39963 = state_39901__$1;
(statearr_39932_39963[(1)] = (17));

} else {
var statearr_39933_39964 = state_39901__$1;
(statearr_39933_39964[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (16))){
var inst_39885 = (state_39901[(2)]);
var state_39901__$1 = state_39901;
var statearr_39934_39965 = state_39901__$1;
(statearr_39934_39965[(2)] = inst_39885);

(statearr_39934_39965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39902 === (10))){
var inst_39856 = (state_39901[(11)]);
var inst_39854 = (state_39901[(12)]);
var inst_39861 = cljs.core._nth.call(null,inst_39854,inst_39856);
var state_39901__$1 = state_39901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39901__$1,(13),out,inst_39861);
} else {
if((state_val_39902 === (18))){
var inst_39867 = (state_39901[(7)]);
var inst_39876 = cljs.core.first.call(null,inst_39867);
var state_39901__$1 = state_39901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39901__$1,(20),out,inst_39876);
} else {
if((state_val_39902 === (8))){
var inst_39855 = (state_39901[(8)]);
var inst_39856 = (state_39901[(11)]);
var inst_39858 = (inst_39856 < inst_39855);
var inst_39859 = inst_39858;
var state_39901__$1 = state_39901;
if(cljs.core.truth_(inst_39859)){
var statearr_39935_39966 = state_39901__$1;
(statearr_39935_39966[(1)] = (10));

} else {
var statearr_39936_39967 = state_39901__$1;
(statearr_39936_39967[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto__))
;
return ((function (switch__37328__auto__,c__37440__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37329__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37329__auto____0 = (function (){
var statearr_39940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39940[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37329__auto__);

(statearr_39940[(1)] = (1));

return statearr_39940;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37329__auto____1 = (function (state_39901){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_39901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e39941){if((e39941 instanceof Object)){
var ex__37332__auto__ = e39941;
var statearr_39942_39968 = state_39901;
(statearr_39942_39968[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39969 = state_39901;
state_39901 = G__39969;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37329__auto__ = function(state_39901){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37329__auto____1.call(this,state_39901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37329__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37329__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__))
})();
var state__37442__auto__ = (function (){var statearr_39943 = f__37441__auto__.call(null);
(statearr_39943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_39943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__))
);

return c__37440__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39970 = [];
var len__35449__auto___39973 = arguments.length;
var i__35450__auto___39974 = (0);
while(true){
if((i__35450__auto___39974 < len__35449__auto___39973)){
args39970.push((arguments[i__35450__auto___39974]));

var G__39975 = (i__35450__auto___39974 + (1));
i__35450__auto___39974 = G__39975;
continue;
} else {
}
break;
}

var G__39972 = args39970.length;
switch (G__39972) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39970.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args39977 = [];
var len__35449__auto___39980 = arguments.length;
var i__35450__auto___39981 = (0);
while(true){
if((i__35450__auto___39981 < len__35449__auto___39980)){
args39977.push((arguments[i__35450__auto___39981]));

var G__39982 = (i__35450__auto___39981 + (1));
i__35450__auto___39981 = G__39982;
continue;
} else {
}
break;
}

var G__39979 = args39977.length;
switch (G__39979) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39977.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args39984 = [];
var len__35449__auto___40035 = arguments.length;
var i__35450__auto___40036 = (0);
while(true){
if((i__35450__auto___40036 < len__35449__auto___40035)){
args39984.push((arguments[i__35450__auto___40036]));

var G__40037 = (i__35450__auto___40036 + (1));
i__35450__auto___40036 = G__40037;
continue;
} else {
}
break;
}

var G__39986 = args39984.length;
switch (G__39986) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39984.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37440__auto___40039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___40039,out){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___40039,out){
return (function (state_40010){
var state_val_40011 = (state_40010[(1)]);
if((state_val_40011 === (7))){
var inst_40005 = (state_40010[(2)]);
var state_40010__$1 = state_40010;
var statearr_40012_40040 = state_40010__$1;
(statearr_40012_40040[(2)] = inst_40005);

(statearr_40012_40040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (1))){
var inst_39987 = null;
var state_40010__$1 = (function (){var statearr_40013 = state_40010;
(statearr_40013[(7)] = inst_39987);

return statearr_40013;
})();
var statearr_40014_40041 = state_40010__$1;
(statearr_40014_40041[(2)] = null);

(statearr_40014_40041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (4))){
var inst_39990 = (state_40010[(8)]);
var inst_39990__$1 = (state_40010[(2)]);
var inst_39991 = (inst_39990__$1 == null);
var inst_39992 = cljs.core.not.call(null,inst_39991);
var state_40010__$1 = (function (){var statearr_40015 = state_40010;
(statearr_40015[(8)] = inst_39990__$1);

return statearr_40015;
})();
if(inst_39992){
var statearr_40016_40042 = state_40010__$1;
(statearr_40016_40042[(1)] = (5));

} else {
var statearr_40017_40043 = state_40010__$1;
(statearr_40017_40043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (6))){
var state_40010__$1 = state_40010;
var statearr_40018_40044 = state_40010__$1;
(statearr_40018_40044[(2)] = null);

(statearr_40018_40044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (3))){
var inst_40007 = (state_40010[(2)]);
var inst_40008 = cljs.core.async.close_BANG_.call(null,out);
var state_40010__$1 = (function (){var statearr_40019 = state_40010;
(statearr_40019[(9)] = inst_40007);

return statearr_40019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40010__$1,inst_40008);
} else {
if((state_val_40011 === (2))){
var state_40010__$1 = state_40010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40010__$1,(4),ch);
} else {
if((state_val_40011 === (11))){
var inst_39990 = (state_40010[(8)]);
var inst_39999 = (state_40010[(2)]);
var inst_39987 = inst_39990;
var state_40010__$1 = (function (){var statearr_40020 = state_40010;
(statearr_40020[(10)] = inst_39999);

(statearr_40020[(7)] = inst_39987);

return statearr_40020;
})();
var statearr_40021_40045 = state_40010__$1;
(statearr_40021_40045[(2)] = null);

(statearr_40021_40045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (9))){
var inst_39990 = (state_40010[(8)]);
var state_40010__$1 = state_40010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40010__$1,(11),out,inst_39990);
} else {
if((state_val_40011 === (5))){
var inst_39990 = (state_40010[(8)]);
var inst_39987 = (state_40010[(7)]);
var inst_39994 = cljs.core._EQ_.call(null,inst_39990,inst_39987);
var state_40010__$1 = state_40010;
if(inst_39994){
var statearr_40023_40046 = state_40010__$1;
(statearr_40023_40046[(1)] = (8));

} else {
var statearr_40024_40047 = state_40010__$1;
(statearr_40024_40047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (10))){
var inst_40002 = (state_40010[(2)]);
var state_40010__$1 = state_40010;
var statearr_40025_40048 = state_40010__$1;
(statearr_40025_40048[(2)] = inst_40002);

(statearr_40025_40048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (8))){
var inst_39987 = (state_40010[(7)]);
var tmp40022 = inst_39987;
var inst_39987__$1 = tmp40022;
var state_40010__$1 = (function (){var statearr_40026 = state_40010;
(statearr_40026[(7)] = inst_39987__$1);

return statearr_40026;
})();
var statearr_40027_40049 = state_40010__$1;
(statearr_40027_40049[(2)] = null);

(statearr_40027_40049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___40039,out))
;
return ((function (switch__37328__auto__,c__37440__auto___40039,out){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_40031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40031[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_40031[(1)] = (1));

return statearr_40031;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_40010){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_40010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e40032){if((e40032 instanceof Object)){
var ex__37332__auto__ = e40032;
var statearr_40033_40050 = state_40010;
(statearr_40033_40050[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40051 = state_40010;
state_40010 = G__40051;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_40010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_40010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___40039,out))
})();
var state__37442__auto__ = (function (){var statearr_40034 = f__37441__auto__.call(null);
(statearr_40034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___40039);

return statearr_40034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___40039,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40052 = [];
var len__35449__auto___40122 = arguments.length;
var i__35450__auto___40123 = (0);
while(true){
if((i__35450__auto___40123 < len__35449__auto___40122)){
args40052.push((arguments[i__35450__auto___40123]));

var G__40124 = (i__35450__auto___40123 + (1));
i__35450__auto___40123 = G__40124;
continue;
} else {
}
break;
}

var G__40054 = args40052.length;
switch (G__40054) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40052.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37440__auto___40126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___40126,out){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___40126,out){
return (function (state_40092){
var state_val_40093 = (state_40092[(1)]);
if((state_val_40093 === (7))){
var inst_40088 = (state_40092[(2)]);
var state_40092__$1 = state_40092;
var statearr_40094_40127 = state_40092__$1;
(statearr_40094_40127[(2)] = inst_40088);

(statearr_40094_40127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (1))){
var inst_40055 = (new Array(n));
var inst_40056 = inst_40055;
var inst_40057 = (0);
var state_40092__$1 = (function (){var statearr_40095 = state_40092;
(statearr_40095[(7)] = inst_40056);

(statearr_40095[(8)] = inst_40057);

return statearr_40095;
})();
var statearr_40096_40128 = state_40092__$1;
(statearr_40096_40128[(2)] = null);

(statearr_40096_40128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (4))){
var inst_40060 = (state_40092[(9)]);
var inst_40060__$1 = (state_40092[(2)]);
var inst_40061 = (inst_40060__$1 == null);
var inst_40062 = cljs.core.not.call(null,inst_40061);
var state_40092__$1 = (function (){var statearr_40097 = state_40092;
(statearr_40097[(9)] = inst_40060__$1);

return statearr_40097;
})();
if(inst_40062){
var statearr_40098_40129 = state_40092__$1;
(statearr_40098_40129[(1)] = (5));

} else {
var statearr_40099_40130 = state_40092__$1;
(statearr_40099_40130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (15))){
var inst_40082 = (state_40092[(2)]);
var state_40092__$1 = state_40092;
var statearr_40100_40131 = state_40092__$1;
(statearr_40100_40131[(2)] = inst_40082);

(statearr_40100_40131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (13))){
var state_40092__$1 = state_40092;
var statearr_40101_40132 = state_40092__$1;
(statearr_40101_40132[(2)] = null);

(statearr_40101_40132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (6))){
var inst_40057 = (state_40092[(8)]);
var inst_40078 = (inst_40057 > (0));
var state_40092__$1 = state_40092;
if(cljs.core.truth_(inst_40078)){
var statearr_40102_40133 = state_40092__$1;
(statearr_40102_40133[(1)] = (12));

} else {
var statearr_40103_40134 = state_40092__$1;
(statearr_40103_40134[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (3))){
var inst_40090 = (state_40092[(2)]);
var state_40092__$1 = state_40092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40092__$1,inst_40090);
} else {
if((state_val_40093 === (12))){
var inst_40056 = (state_40092[(7)]);
var inst_40080 = cljs.core.vec.call(null,inst_40056);
var state_40092__$1 = state_40092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40092__$1,(15),out,inst_40080);
} else {
if((state_val_40093 === (2))){
var state_40092__$1 = state_40092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40092__$1,(4),ch);
} else {
if((state_val_40093 === (11))){
var inst_40072 = (state_40092[(2)]);
var inst_40073 = (new Array(n));
var inst_40056 = inst_40073;
var inst_40057 = (0);
var state_40092__$1 = (function (){var statearr_40104 = state_40092;
(statearr_40104[(10)] = inst_40072);

(statearr_40104[(7)] = inst_40056);

(statearr_40104[(8)] = inst_40057);

return statearr_40104;
})();
var statearr_40105_40135 = state_40092__$1;
(statearr_40105_40135[(2)] = null);

(statearr_40105_40135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (9))){
var inst_40056 = (state_40092[(7)]);
var inst_40070 = cljs.core.vec.call(null,inst_40056);
var state_40092__$1 = state_40092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40092__$1,(11),out,inst_40070);
} else {
if((state_val_40093 === (5))){
var inst_40060 = (state_40092[(9)]);
var inst_40065 = (state_40092[(11)]);
var inst_40056 = (state_40092[(7)]);
var inst_40057 = (state_40092[(8)]);
var inst_40064 = (inst_40056[inst_40057] = inst_40060);
var inst_40065__$1 = (inst_40057 + (1));
var inst_40066 = (inst_40065__$1 < n);
var state_40092__$1 = (function (){var statearr_40106 = state_40092;
(statearr_40106[(12)] = inst_40064);

(statearr_40106[(11)] = inst_40065__$1);

return statearr_40106;
})();
if(cljs.core.truth_(inst_40066)){
var statearr_40107_40136 = state_40092__$1;
(statearr_40107_40136[(1)] = (8));

} else {
var statearr_40108_40137 = state_40092__$1;
(statearr_40108_40137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (14))){
var inst_40085 = (state_40092[(2)]);
var inst_40086 = cljs.core.async.close_BANG_.call(null,out);
var state_40092__$1 = (function (){var statearr_40110 = state_40092;
(statearr_40110[(13)] = inst_40085);

return statearr_40110;
})();
var statearr_40111_40138 = state_40092__$1;
(statearr_40111_40138[(2)] = inst_40086);

(statearr_40111_40138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (10))){
var inst_40076 = (state_40092[(2)]);
var state_40092__$1 = state_40092;
var statearr_40112_40139 = state_40092__$1;
(statearr_40112_40139[(2)] = inst_40076);

(statearr_40112_40139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40093 === (8))){
var inst_40065 = (state_40092[(11)]);
var inst_40056 = (state_40092[(7)]);
var tmp40109 = inst_40056;
var inst_40056__$1 = tmp40109;
var inst_40057 = inst_40065;
var state_40092__$1 = (function (){var statearr_40113 = state_40092;
(statearr_40113[(7)] = inst_40056__$1);

(statearr_40113[(8)] = inst_40057);

return statearr_40113;
})();
var statearr_40114_40140 = state_40092__$1;
(statearr_40114_40140[(2)] = null);

(statearr_40114_40140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___40126,out))
;
return ((function (switch__37328__auto__,c__37440__auto___40126,out){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_40118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40118[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_40118[(1)] = (1));

return statearr_40118;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_40092){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_40092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e40119){if((e40119 instanceof Object)){
var ex__37332__auto__ = e40119;
var statearr_40120_40141 = state_40092;
(statearr_40120_40141[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40142 = state_40092;
state_40092 = G__40142;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_40092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_40092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___40126,out))
})();
var state__37442__auto__ = (function (){var statearr_40121 = f__37441__auto__.call(null);
(statearr_40121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___40126);

return statearr_40121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___40126,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40143 = [];
var len__35449__auto___40217 = arguments.length;
var i__35450__auto___40218 = (0);
while(true){
if((i__35450__auto___40218 < len__35449__auto___40217)){
args40143.push((arguments[i__35450__auto___40218]));

var G__40219 = (i__35450__auto___40218 + (1));
i__35450__auto___40218 = G__40219;
continue;
} else {
}
break;
}

var G__40145 = args40143.length;
switch (G__40145) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40143.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37440__auto___40221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___40221,out){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___40221,out){
return (function (state_40187){
var state_val_40188 = (state_40187[(1)]);
if((state_val_40188 === (7))){
var inst_40183 = (state_40187[(2)]);
var state_40187__$1 = state_40187;
var statearr_40189_40222 = state_40187__$1;
(statearr_40189_40222[(2)] = inst_40183);

(statearr_40189_40222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (1))){
var inst_40146 = [];
var inst_40147 = inst_40146;
var inst_40148 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40187__$1 = (function (){var statearr_40190 = state_40187;
(statearr_40190[(7)] = inst_40147);

(statearr_40190[(8)] = inst_40148);

return statearr_40190;
})();
var statearr_40191_40223 = state_40187__$1;
(statearr_40191_40223[(2)] = null);

(statearr_40191_40223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (4))){
var inst_40151 = (state_40187[(9)]);
var inst_40151__$1 = (state_40187[(2)]);
var inst_40152 = (inst_40151__$1 == null);
var inst_40153 = cljs.core.not.call(null,inst_40152);
var state_40187__$1 = (function (){var statearr_40192 = state_40187;
(statearr_40192[(9)] = inst_40151__$1);

return statearr_40192;
})();
if(inst_40153){
var statearr_40193_40224 = state_40187__$1;
(statearr_40193_40224[(1)] = (5));

} else {
var statearr_40194_40225 = state_40187__$1;
(statearr_40194_40225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (15))){
var inst_40177 = (state_40187[(2)]);
var state_40187__$1 = state_40187;
var statearr_40195_40226 = state_40187__$1;
(statearr_40195_40226[(2)] = inst_40177);

(statearr_40195_40226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (13))){
var state_40187__$1 = state_40187;
var statearr_40196_40227 = state_40187__$1;
(statearr_40196_40227[(2)] = null);

(statearr_40196_40227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (6))){
var inst_40147 = (state_40187[(7)]);
var inst_40172 = inst_40147.length;
var inst_40173 = (inst_40172 > (0));
var state_40187__$1 = state_40187;
if(cljs.core.truth_(inst_40173)){
var statearr_40197_40228 = state_40187__$1;
(statearr_40197_40228[(1)] = (12));

} else {
var statearr_40198_40229 = state_40187__$1;
(statearr_40198_40229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (3))){
var inst_40185 = (state_40187[(2)]);
var state_40187__$1 = state_40187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40187__$1,inst_40185);
} else {
if((state_val_40188 === (12))){
var inst_40147 = (state_40187[(7)]);
var inst_40175 = cljs.core.vec.call(null,inst_40147);
var state_40187__$1 = state_40187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40187__$1,(15),out,inst_40175);
} else {
if((state_val_40188 === (2))){
var state_40187__$1 = state_40187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40187__$1,(4),ch);
} else {
if((state_val_40188 === (11))){
var inst_40151 = (state_40187[(9)]);
var inst_40155 = (state_40187[(10)]);
var inst_40165 = (state_40187[(2)]);
var inst_40166 = [];
var inst_40167 = inst_40166.push(inst_40151);
var inst_40147 = inst_40166;
var inst_40148 = inst_40155;
var state_40187__$1 = (function (){var statearr_40199 = state_40187;
(statearr_40199[(7)] = inst_40147);

(statearr_40199[(8)] = inst_40148);

(statearr_40199[(11)] = inst_40167);

(statearr_40199[(12)] = inst_40165);

return statearr_40199;
})();
var statearr_40200_40230 = state_40187__$1;
(statearr_40200_40230[(2)] = null);

(statearr_40200_40230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (9))){
var inst_40147 = (state_40187[(7)]);
var inst_40163 = cljs.core.vec.call(null,inst_40147);
var state_40187__$1 = state_40187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40187__$1,(11),out,inst_40163);
} else {
if((state_val_40188 === (5))){
var inst_40151 = (state_40187[(9)]);
var inst_40155 = (state_40187[(10)]);
var inst_40148 = (state_40187[(8)]);
var inst_40155__$1 = f.call(null,inst_40151);
var inst_40156 = cljs.core._EQ_.call(null,inst_40155__$1,inst_40148);
var inst_40157 = cljs.core.keyword_identical_QMARK_.call(null,inst_40148,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40158 = (inst_40156) || (inst_40157);
var state_40187__$1 = (function (){var statearr_40201 = state_40187;
(statearr_40201[(10)] = inst_40155__$1);

return statearr_40201;
})();
if(cljs.core.truth_(inst_40158)){
var statearr_40202_40231 = state_40187__$1;
(statearr_40202_40231[(1)] = (8));

} else {
var statearr_40203_40232 = state_40187__$1;
(statearr_40203_40232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (14))){
var inst_40180 = (state_40187[(2)]);
var inst_40181 = cljs.core.async.close_BANG_.call(null,out);
var state_40187__$1 = (function (){var statearr_40205 = state_40187;
(statearr_40205[(13)] = inst_40180);

return statearr_40205;
})();
var statearr_40206_40233 = state_40187__$1;
(statearr_40206_40233[(2)] = inst_40181);

(statearr_40206_40233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (10))){
var inst_40170 = (state_40187[(2)]);
var state_40187__$1 = state_40187;
var statearr_40207_40234 = state_40187__$1;
(statearr_40207_40234[(2)] = inst_40170);

(statearr_40207_40234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40188 === (8))){
var inst_40151 = (state_40187[(9)]);
var inst_40155 = (state_40187[(10)]);
var inst_40147 = (state_40187[(7)]);
var inst_40160 = inst_40147.push(inst_40151);
var tmp40204 = inst_40147;
var inst_40147__$1 = tmp40204;
var inst_40148 = inst_40155;
var state_40187__$1 = (function (){var statearr_40208 = state_40187;
(statearr_40208[(7)] = inst_40147__$1);

(statearr_40208[(8)] = inst_40148);

(statearr_40208[(14)] = inst_40160);

return statearr_40208;
})();
var statearr_40209_40235 = state_40187__$1;
(statearr_40209_40235[(2)] = null);

(statearr_40209_40235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37440__auto___40221,out))
;
return ((function (switch__37328__auto__,c__37440__auto___40221,out){
return (function() {
var cljs$core$async$state_machine__37329__auto__ = null;
var cljs$core$async$state_machine__37329__auto____0 = (function (){
var statearr_40213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40213[(0)] = cljs$core$async$state_machine__37329__auto__);

(statearr_40213[(1)] = (1));

return statearr_40213;
});
var cljs$core$async$state_machine__37329__auto____1 = (function (state_40187){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_40187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e40214){if((e40214 instanceof Object)){
var ex__37332__auto__ = e40214;
var statearr_40215_40236 = state_40187;
(statearr_40215_40236[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40237 = state_40187;
state_40187 = G__40237;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
cljs$core$async$state_machine__37329__auto__ = function(state_40187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37329__auto____1.call(this,state_40187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37329__auto____0;
cljs$core$async$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37329__auto____1;
return cljs$core$async$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___40221,out))
})();
var state__37442__auto__ = (function (){var statearr_40216 = f__37441__auto__.call(null);
(statearr_40216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___40221);

return statearr_40216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___40221,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513020383673