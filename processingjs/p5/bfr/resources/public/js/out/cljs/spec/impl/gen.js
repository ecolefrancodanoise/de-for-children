// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__34947__auto__,writer__34948__auto__,opt__34949__auto__){
return cljs.core._write.call(null,writer__34948__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41554 = arguments.length;
var i__35450__auto___41555 = (0);
while(true){
if((i__35450__auto___41555 < len__35449__auto___41554)){
args__35456__auto__.push((arguments[i__35450__auto___41555]));

var G__41556 = (i__35450__auto___41555 + (1));
i__35450__auto___41555 = G__41556;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq41553){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41553));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41558 = arguments.length;
var i__35450__auto___41559 = (0);
while(true){
if((i__35450__auto___41559 < len__35449__auto___41558)){
args__35456__auto__.push((arguments[i__35450__auto___41559]));

var G__41560 = (i__35450__auto___41559 + (1));
i__35450__auto___41559 = G__41560;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq41557){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41557));
});

var g_QMARK__41561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_41562 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__41561){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__41561))
,null));
var mkg_41563 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__41561,g_41562){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__41561,g_41562))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__41561,g_41562,mkg_41563){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__41561).call(null,x);
});})(g_QMARK__41561,g_41562,mkg_41563))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__41561,g_41562,mkg_41563){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_41563).call(null,gfn);
});})(g_QMARK__41561,g_41562,mkg_41563))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__41561,g_41562,mkg_41563){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_41562).call(null,generator);
});})(g_QMARK__41561,g_41562,mkg_41563))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__41525__auto___41583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__41525__auto___41583){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41584 = arguments.length;
var i__35450__auto___41585 = (0);
while(true){
if((i__35450__auto___41585 < len__35449__auto___41584)){
args__35456__auto__.push((arguments[i__35450__auto___41585]));

var G__41586 = (i__35450__auto___41585 + (1));
i__35450__auto___41585 = G__41586;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41583))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41583),args);
});})(g__41525__auto___41583))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__41525__auto___41583){
return (function (seq41564){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41564));
});})(g__41525__auto___41583))
;


var g__41525__auto___41587 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__41525__auto___41587){
return (function cljs$spec$impl$gen$list(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41588 = arguments.length;
var i__35450__auto___41589 = (0);
while(true){
if((i__35450__auto___41589 < len__35449__auto___41588)){
args__35456__auto__.push((arguments[i__35450__auto___41589]));

var G__41590 = (i__35450__auto___41589 + (1));
i__35450__auto___41589 = G__41590;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41587))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41587),args);
});})(g__41525__auto___41587))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__41525__auto___41587){
return (function (seq41565){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41565));
});})(g__41525__auto___41587))
;


var g__41525__auto___41591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__41525__auto___41591){
return (function cljs$spec$impl$gen$map(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41592 = arguments.length;
var i__35450__auto___41593 = (0);
while(true){
if((i__35450__auto___41593 < len__35449__auto___41592)){
args__35456__auto__.push((arguments[i__35450__auto___41593]));

var G__41594 = (i__35450__auto___41593 + (1));
i__35450__auto___41593 = G__41594;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41591))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41591){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41591),args);
});})(g__41525__auto___41591))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__41525__auto___41591){
return (function (seq41566){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41566));
});})(g__41525__auto___41591))
;


var g__41525__auto___41595 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__41525__auto___41595){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41596 = arguments.length;
var i__35450__auto___41597 = (0);
while(true){
if((i__35450__auto___41597 < len__35449__auto___41596)){
args__35456__auto__.push((arguments[i__35450__auto___41597]));

var G__41598 = (i__35450__auto___41597 + (1));
i__35450__auto___41597 = G__41598;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41595))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41595){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41595),args);
});})(g__41525__auto___41595))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__41525__auto___41595){
return (function (seq41567){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41567));
});})(g__41525__auto___41595))
;


var g__41525__auto___41599 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__41525__auto___41599){
return (function cljs$spec$impl$gen$set(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41600 = arguments.length;
var i__35450__auto___41601 = (0);
while(true){
if((i__35450__auto___41601 < len__35449__auto___41600)){
args__35456__auto__.push((arguments[i__35450__auto___41601]));

var G__41602 = (i__35450__auto___41601 + (1));
i__35450__auto___41601 = G__41602;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41599))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41599){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41599),args);
});})(g__41525__auto___41599))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__41525__auto___41599){
return (function (seq41568){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41568));
});})(g__41525__auto___41599))
;


var g__41525__auto___41603 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__41525__auto___41603){
return (function cljs$spec$impl$gen$vector(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41604 = arguments.length;
var i__35450__auto___41605 = (0);
while(true){
if((i__35450__auto___41605 < len__35449__auto___41604)){
args__35456__auto__.push((arguments[i__35450__auto___41605]));

var G__41606 = (i__35450__auto___41605 + (1));
i__35450__auto___41605 = G__41606;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41603))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41603){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41603),args);
});})(g__41525__auto___41603))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__41525__auto___41603){
return (function (seq41569){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41569));
});})(g__41525__auto___41603))
;


var g__41525__auto___41607 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__41525__auto___41607){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41608 = arguments.length;
var i__35450__auto___41609 = (0);
while(true){
if((i__35450__auto___41609 < len__35449__auto___41608)){
args__35456__auto__.push((arguments[i__35450__auto___41609]));

var G__41610 = (i__35450__auto___41609 + (1));
i__35450__auto___41609 = G__41610;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41607))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41607){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41607),args);
});})(g__41525__auto___41607))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__41525__auto___41607){
return (function (seq41570){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41570));
});})(g__41525__auto___41607))
;


var g__41525__auto___41611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__41525__auto___41611){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41612 = arguments.length;
var i__35450__auto___41613 = (0);
while(true){
if((i__35450__auto___41613 < len__35449__auto___41612)){
args__35456__auto__.push((arguments[i__35450__auto___41613]));

var G__41614 = (i__35450__auto___41613 + (1));
i__35450__auto___41613 = G__41614;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41611))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41611){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41611),args);
});})(g__41525__auto___41611))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__41525__auto___41611){
return (function (seq41571){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41571));
});})(g__41525__auto___41611))
;


var g__41525__auto___41615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__41525__auto___41615){
return (function cljs$spec$impl$gen$elements(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41616 = arguments.length;
var i__35450__auto___41617 = (0);
while(true){
if((i__35450__auto___41617 < len__35449__auto___41616)){
args__35456__auto__.push((arguments[i__35450__auto___41617]));

var G__41618 = (i__35450__auto___41617 + (1));
i__35450__auto___41617 = G__41618;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41615))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41615){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41615),args);
});})(g__41525__auto___41615))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__41525__auto___41615){
return (function (seq41572){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41572));
});})(g__41525__auto___41615))
;


var g__41525__auto___41619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__41525__auto___41619){
return (function cljs$spec$impl$gen$bind(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41620 = arguments.length;
var i__35450__auto___41621 = (0);
while(true){
if((i__35450__auto___41621 < len__35449__auto___41620)){
args__35456__auto__.push((arguments[i__35450__auto___41621]));

var G__41622 = (i__35450__auto___41621 + (1));
i__35450__auto___41621 = G__41622;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41619))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41619),args);
});})(g__41525__auto___41619))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__41525__auto___41619){
return (function (seq41573){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41573));
});})(g__41525__auto___41619))
;


var g__41525__auto___41623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__41525__auto___41623){
return (function cljs$spec$impl$gen$choose(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41624 = arguments.length;
var i__35450__auto___41625 = (0);
while(true){
if((i__35450__auto___41625 < len__35449__auto___41624)){
args__35456__auto__.push((arguments[i__35450__auto___41625]));

var G__41626 = (i__35450__auto___41625 + (1));
i__35450__auto___41625 = G__41626;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41623))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41623){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41623),args);
});})(g__41525__auto___41623))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__41525__auto___41623){
return (function (seq41574){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41574));
});})(g__41525__auto___41623))
;


var g__41525__auto___41627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__41525__auto___41627){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41628 = arguments.length;
var i__35450__auto___41629 = (0);
while(true){
if((i__35450__auto___41629 < len__35449__auto___41628)){
args__35456__auto__.push((arguments[i__35450__auto___41629]));

var G__41630 = (i__35450__auto___41629 + (1));
i__35450__auto___41629 = G__41630;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41627))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41627),args);
});})(g__41525__auto___41627))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__41525__auto___41627){
return (function (seq41575){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41575));
});})(g__41525__auto___41627))
;


var g__41525__auto___41631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__41525__auto___41631){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41632 = arguments.length;
var i__35450__auto___41633 = (0);
while(true){
if((i__35450__auto___41633 < len__35449__auto___41632)){
args__35456__auto__.push((arguments[i__35450__auto___41633]));

var G__41634 = (i__35450__auto___41633 + (1));
i__35450__auto___41633 = G__41634;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41631))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41631),args);
});})(g__41525__auto___41631))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__41525__auto___41631){
return (function (seq41576){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41576));
});})(g__41525__auto___41631))
;


var g__41525__auto___41635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__41525__auto___41635){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41636 = arguments.length;
var i__35450__auto___41637 = (0);
while(true){
if((i__35450__auto___41637 < len__35449__auto___41636)){
args__35456__auto__.push((arguments[i__35450__auto___41637]));

var G__41638 = (i__35450__auto___41637 + (1));
i__35450__auto___41637 = G__41638;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41635))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41635){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41635),args);
});})(g__41525__auto___41635))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__41525__auto___41635){
return (function (seq41577){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41577));
});})(g__41525__auto___41635))
;


var g__41525__auto___41639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__41525__auto___41639){
return (function cljs$spec$impl$gen$sample(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41640 = arguments.length;
var i__35450__auto___41641 = (0);
while(true){
if((i__35450__auto___41641 < len__35449__auto___41640)){
args__35456__auto__.push((arguments[i__35450__auto___41641]));

var G__41642 = (i__35450__auto___41641 + (1));
i__35450__auto___41641 = G__41642;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41639))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41639){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41639),args);
});})(g__41525__auto___41639))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__41525__auto___41639){
return (function (seq41578){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41578));
});})(g__41525__auto___41639))
;


var g__41525__auto___41643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__41525__auto___41643){
return (function cljs$spec$impl$gen$return(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41644 = arguments.length;
var i__35450__auto___41645 = (0);
while(true){
if((i__35450__auto___41645 < len__35449__auto___41644)){
args__35456__auto__.push((arguments[i__35450__auto___41645]));

var G__41646 = (i__35450__auto___41645 + (1));
i__35450__auto___41645 = G__41646;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41643))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41643){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41643),args);
});})(g__41525__auto___41643))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__41525__auto___41643){
return (function (seq41579){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41579));
});})(g__41525__auto___41643))
;


var g__41525__auto___41647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__41525__auto___41647){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41648 = arguments.length;
var i__35450__auto___41649 = (0);
while(true){
if((i__35450__auto___41649 < len__35449__auto___41648)){
args__35456__auto__.push((arguments[i__35450__auto___41649]));

var G__41650 = (i__35450__auto___41649 + (1));
i__35450__auto___41649 = G__41650;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41647))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41647){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41647),args);
});})(g__41525__auto___41647))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__41525__auto___41647){
return (function (seq41580){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41580));
});})(g__41525__auto___41647))
;


var g__41525__auto___41651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__41525__auto___41651){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41652 = arguments.length;
var i__35450__auto___41653 = (0);
while(true){
if((i__35450__auto___41653 < len__35449__auto___41652)){
args__35456__auto__.push((arguments[i__35450__auto___41653]));

var G__41654 = (i__35450__auto___41653 + (1));
i__35450__auto___41653 = G__41654;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41651))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41651){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41651),args);
});})(g__41525__auto___41651))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__41525__auto___41651){
return (function (seq41581){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41581));
});})(g__41525__auto___41651))
;


var g__41525__auto___41655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__41525__auto___41655){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41656 = arguments.length;
var i__35450__auto___41657 = (0);
while(true){
if((i__35450__auto___41657 < len__35449__auto___41656)){
args__35456__auto__.push((arguments[i__35450__auto___41657]));

var G__41658 = (i__35450__auto___41657 + (1));
i__35450__auto___41657 = G__41658;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41525__auto___41655))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41525__auto___41655){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41525__auto___41655),args);
});})(g__41525__auto___41655))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__41525__auto___41655){
return (function (seq41582){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41582));
});})(g__41525__auto___41655))
;

var g__41538__auto___41680 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__41538__auto___41680){
return (function cljs$spec$impl$gen$any(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41681 = arguments.length;
var i__35450__auto___41682 = (0);
while(true){
if((i__35450__auto___41682 < len__35449__auto___41681)){
args__35456__auto__.push((arguments[i__35450__auto___41682]));

var G__41683 = (i__35450__auto___41682 + (1));
i__35450__auto___41682 = G__41683;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41680))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41680){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41680);
});})(g__41538__auto___41680))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__41538__auto___41680){
return (function (seq41659){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41659));
});})(g__41538__auto___41680))
;


var g__41538__auto___41684 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__41538__auto___41684){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41685 = arguments.length;
var i__35450__auto___41686 = (0);
while(true){
if((i__35450__auto___41686 < len__35449__auto___41685)){
args__35456__auto__.push((arguments[i__35450__auto___41686]));

var G__41687 = (i__35450__auto___41686 + (1));
i__35450__auto___41686 = G__41687;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41684))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41684){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41684);
});})(g__41538__auto___41684))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__41538__auto___41684){
return (function (seq41660){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41660));
});})(g__41538__auto___41684))
;


var g__41538__auto___41688 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__41538__auto___41688){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41689 = arguments.length;
var i__35450__auto___41690 = (0);
while(true){
if((i__35450__auto___41690 < len__35449__auto___41689)){
args__35456__auto__.push((arguments[i__35450__auto___41690]));

var G__41691 = (i__35450__auto___41690 + (1));
i__35450__auto___41690 = G__41691;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41688))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41688){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41688);
});})(g__41538__auto___41688))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__41538__auto___41688){
return (function (seq41661){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41661));
});})(g__41538__auto___41688))
;


var g__41538__auto___41692 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__41538__auto___41692){
return (function cljs$spec$impl$gen$char(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41693 = arguments.length;
var i__35450__auto___41694 = (0);
while(true){
if((i__35450__auto___41694 < len__35449__auto___41693)){
args__35456__auto__.push((arguments[i__35450__auto___41694]));

var G__41695 = (i__35450__auto___41694 + (1));
i__35450__auto___41694 = G__41695;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41692))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41692){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41692);
});})(g__41538__auto___41692))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__41538__auto___41692){
return (function (seq41662){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41662));
});})(g__41538__auto___41692))
;


var g__41538__auto___41696 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__41538__auto___41696){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41697 = arguments.length;
var i__35450__auto___41698 = (0);
while(true){
if((i__35450__auto___41698 < len__35449__auto___41697)){
args__35456__auto__.push((arguments[i__35450__auto___41698]));

var G__41699 = (i__35450__auto___41698 + (1));
i__35450__auto___41698 = G__41699;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41696))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41696){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41696);
});})(g__41538__auto___41696))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__41538__auto___41696){
return (function (seq41663){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41663));
});})(g__41538__auto___41696))
;


var g__41538__auto___41700 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__41538__auto___41700){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41701 = arguments.length;
var i__35450__auto___41702 = (0);
while(true){
if((i__35450__auto___41702 < len__35449__auto___41701)){
args__35456__auto__.push((arguments[i__35450__auto___41702]));

var G__41703 = (i__35450__auto___41702 + (1));
i__35450__auto___41702 = G__41703;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41700))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41700){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41700);
});})(g__41538__auto___41700))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__41538__auto___41700){
return (function (seq41664){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41664));
});})(g__41538__auto___41700))
;


var g__41538__auto___41704 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__41538__auto___41704){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41705 = arguments.length;
var i__35450__auto___41706 = (0);
while(true){
if((i__35450__auto___41706 < len__35449__auto___41705)){
args__35456__auto__.push((arguments[i__35450__auto___41706]));

var G__41707 = (i__35450__auto___41706 + (1));
i__35450__auto___41706 = G__41707;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41704))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41704){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41704);
});})(g__41538__auto___41704))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__41538__auto___41704){
return (function (seq41665){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41665));
});})(g__41538__auto___41704))
;


var g__41538__auto___41708 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__41538__auto___41708){
return (function cljs$spec$impl$gen$double(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41709 = arguments.length;
var i__35450__auto___41710 = (0);
while(true){
if((i__35450__auto___41710 < len__35449__auto___41709)){
args__35456__auto__.push((arguments[i__35450__auto___41710]));

var G__41711 = (i__35450__auto___41710 + (1));
i__35450__auto___41710 = G__41711;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41708))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41708){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41708);
});})(g__41538__auto___41708))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__41538__auto___41708){
return (function (seq41666){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41666));
});})(g__41538__auto___41708))
;


var g__41538__auto___41712 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__41538__auto___41712){
return (function cljs$spec$impl$gen$int(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41713 = arguments.length;
var i__35450__auto___41714 = (0);
while(true){
if((i__35450__auto___41714 < len__35449__auto___41713)){
args__35456__auto__.push((arguments[i__35450__auto___41714]));

var G__41715 = (i__35450__auto___41714 + (1));
i__35450__auto___41714 = G__41715;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41712))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41712){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41712);
});})(g__41538__auto___41712))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__41538__auto___41712){
return (function (seq41667){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41667));
});})(g__41538__auto___41712))
;


var g__41538__auto___41716 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__41538__auto___41716){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41717 = arguments.length;
var i__35450__auto___41718 = (0);
while(true){
if((i__35450__auto___41718 < len__35449__auto___41717)){
args__35456__auto__.push((arguments[i__35450__auto___41718]));

var G__41719 = (i__35450__auto___41718 + (1));
i__35450__auto___41718 = G__41719;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41716))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41716){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41716);
});})(g__41538__auto___41716))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__41538__auto___41716){
return (function (seq41668){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41668));
});})(g__41538__auto___41716))
;


var g__41538__auto___41720 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__41538__auto___41720){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41721 = arguments.length;
var i__35450__auto___41722 = (0);
while(true){
if((i__35450__auto___41722 < len__35449__auto___41721)){
args__35456__auto__.push((arguments[i__35450__auto___41722]));

var G__41723 = (i__35450__auto___41722 + (1));
i__35450__auto___41722 = G__41723;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41720))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41720){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41720);
});})(g__41538__auto___41720))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__41538__auto___41720){
return (function (seq41669){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41669));
});})(g__41538__auto___41720))
;


var g__41538__auto___41724 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__41538__auto___41724){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41725 = arguments.length;
var i__35450__auto___41726 = (0);
while(true){
if((i__35450__auto___41726 < len__35449__auto___41725)){
args__35456__auto__.push((arguments[i__35450__auto___41726]));

var G__41727 = (i__35450__auto___41726 + (1));
i__35450__auto___41726 = G__41727;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41724))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41724){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41724);
});})(g__41538__auto___41724))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__41538__auto___41724){
return (function (seq41670){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41670));
});})(g__41538__auto___41724))
;


var g__41538__auto___41728 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__41538__auto___41728){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41729 = arguments.length;
var i__35450__auto___41730 = (0);
while(true){
if((i__35450__auto___41730 < len__35449__auto___41729)){
args__35456__auto__.push((arguments[i__35450__auto___41730]));

var G__41731 = (i__35450__auto___41730 + (1));
i__35450__auto___41730 = G__41731;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41728))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41728){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41728);
});})(g__41538__auto___41728))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__41538__auto___41728){
return (function (seq41671){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41671));
});})(g__41538__auto___41728))
;


var g__41538__auto___41732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__41538__auto___41732){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41733 = arguments.length;
var i__35450__auto___41734 = (0);
while(true){
if((i__35450__auto___41734 < len__35449__auto___41733)){
args__35456__auto__.push((arguments[i__35450__auto___41734]));

var G__41735 = (i__35450__auto___41734 + (1));
i__35450__auto___41734 = G__41735;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41732))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41732){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41732);
});})(g__41538__auto___41732))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__41538__auto___41732){
return (function (seq41672){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41672));
});})(g__41538__auto___41732))
;


var g__41538__auto___41736 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__41538__auto___41736){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41737 = arguments.length;
var i__35450__auto___41738 = (0);
while(true){
if((i__35450__auto___41738 < len__35449__auto___41737)){
args__35456__auto__.push((arguments[i__35450__auto___41738]));

var G__41739 = (i__35450__auto___41738 + (1));
i__35450__auto___41738 = G__41739;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41736))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41736){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41736);
});})(g__41538__auto___41736))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__41538__auto___41736){
return (function (seq41673){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41673));
});})(g__41538__auto___41736))
;


var g__41538__auto___41740 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__41538__auto___41740){
return (function cljs$spec$impl$gen$string(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41741 = arguments.length;
var i__35450__auto___41742 = (0);
while(true){
if((i__35450__auto___41742 < len__35449__auto___41741)){
args__35456__auto__.push((arguments[i__35450__auto___41742]));

var G__41743 = (i__35450__auto___41742 + (1));
i__35450__auto___41742 = G__41743;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41740))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41740){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41740);
});})(g__41538__auto___41740))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__41538__auto___41740){
return (function (seq41674){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41674));
});})(g__41538__auto___41740))
;


var g__41538__auto___41744 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__41538__auto___41744){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41745 = arguments.length;
var i__35450__auto___41746 = (0);
while(true){
if((i__35450__auto___41746 < len__35449__auto___41745)){
args__35456__auto__.push((arguments[i__35450__auto___41746]));

var G__41747 = (i__35450__auto___41746 + (1));
i__35450__auto___41746 = G__41747;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41744))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41744){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41744);
});})(g__41538__auto___41744))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__41538__auto___41744){
return (function (seq41675){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41675));
});})(g__41538__auto___41744))
;


var g__41538__auto___41748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__41538__auto___41748){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41749 = arguments.length;
var i__35450__auto___41750 = (0);
while(true){
if((i__35450__auto___41750 < len__35449__auto___41749)){
args__35456__auto__.push((arguments[i__35450__auto___41750]));

var G__41751 = (i__35450__auto___41750 + (1));
i__35450__auto___41750 = G__41751;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41748))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41748){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41748);
});})(g__41538__auto___41748))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__41538__auto___41748){
return (function (seq41676){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41676));
});})(g__41538__auto___41748))
;


var g__41538__auto___41752 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__41538__auto___41752){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41753 = arguments.length;
var i__35450__auto___41754 = (0);
while(true){
if((i__35450__auto___41754 < len__35449__auto___41753)){
args__35456__auto__.push((arguments[i__35450__auto___41754]));

var G__41755 = (i__35450__auto___41754 + (1));
i__35450__auto___41754 = G__41755;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41752))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41752){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41752);
});})(g__41538__auto___41752))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__41538__auto___41752){
return (function (seq41677){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41677));
});})(g__41538__auto___41752))
;


var g__41538__auto___41756 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__41538__auto___41756){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41757 = arguments.length;
var i__35450__auto___41758 = (0);
while(true){
if((i__35450__auto___41758 < len__35449__auto___41757)){
args__35456__auto__.push((arguments[i__35450__auto___41758]));

var G__41759 = (i__35450__auto___41758 + (1));
i__35450__auto___41758 = G__41759;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41756))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41756){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41756);
});})(g__41538__auto___41756))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__41538__auto___41756){
return (function (seq41678){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41678));
});})(g__41538__auto___41756))
;


var g__41538__auto___41760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__41538__auto___41760){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41761 = arguments.length;
var i__35450__auto___41762 = (0);
while(true){
if((i__35450__auto___41762 < len__35449__auto___41761)){
args__35456__auto__.push((arguments[i__35450__auto___41762]));

var G__41763 = (i__35450__auto___41762 + (1));
i__35450__auto___41762 = G__41763;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});})(g__41538__auto___41760))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41538__auto___41760){
return (function (args){
return cljs.core.deref.call(null,g__41538__auto___41760);
});})(g__41538__auto___41760))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__41538__auto___41760){
return (function (seq41679){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41679));
});})(g__41538__auto___41760))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__35456__auto__ = [];
var len__35449__auto___41766 = arguments.length;
var i__35450__auto___41767 = (0);
while(true){
if((i__35450__auto___41767 < len__35449__auto___41766)){
args__35456__auto__.push((arguments[i__35450__auto___41767]));

var G__41768 = (i__35450__auto___41767 + (1));
i__35450__auto___41767 = G__41768;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__41764_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__41764_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq41765){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41765));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__41769_SHARP_){
return (new Date(p1__41769_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1513020384987