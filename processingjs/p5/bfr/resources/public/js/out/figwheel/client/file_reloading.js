// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__34336__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__34336__auto__){
return or__34336__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__34336__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40372_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40372_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40377 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40378 = null;
var count__40379 = (0);
var i__40380 = (0);
while(true){
if((i__40380 < count__40379)){
var n = cljs.core._nth.call(null,chunk__40378,i__40380);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40381 = seq__40377;
var G__40382 = chunk__40378;
var G__40383 = count__40379;
var G__40384 = (i__40380 + (1));
seq__40377 = G__40381;
chunk__40378 = G__40382;
count__40379 = G__40383;
i__40380 = G__40384;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40377);
if(temp__4657__auto__){
var seq__40377__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40377__$1)){
var c__35155__auto__ = cljs.core.chunk_first.call(null,seq__40377__$1);
var G__40385 = cljs.core.chunk_rest.call(null,seq__40377__$1);
var G__40386 = c__35155__auto__;
var G__40387 = cljs.core.count.call(null,c__35155__auto__);
var G__40388 = (0);
seq__40377 = G__40385;
chunk__40378 = G__40386;
count__40379 = G__40387;
i__40380 = G__40388;
continue;
} else {
var n = cljs.core.first.call(null,seq__40377__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40389 = cljs.core.next.call(null,seq__40377__$1);
var G__40390 = null;
var G__40391 = (0);
var G__40392 = (0);
seq__40377 = G__40389;
chunk__40378 = G__40390;
count__40379 = G__40391;
i__40380 = G__40392;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40443_40454 = cljs.core.seq.call(null,deps);
var chunk__40444_40455 = null;
var count__40445_40456 = (0);
var i__40446_40457 = (0);
while(true){
if((i__40446_40457 < count__40445_40456)){
var dep_40458 = cljs.core._nth.call(null,chunk__40444_40455,i__40446_40457);
topo_sort_helper_STAR_.call(null,dep_40458,(depth + (1)),state);

var G__40459 = seq__40443_40454;
var G__40460 = chunk__40444_40455;
var G__40461 = count__40445_40456;
var G__40462 = (i__40446_40457 + (1));
seq__40443_40454 = G__40459;
chunk__40444_40455 = G__40460;
count__40445_40456 = G__40461;
i__40446_40457 = G__40462;
continue;
} else {
var temp__4657__auto___40463 = cljs.core.seq.call(null,seq__40443_40454);
if(temp__4657__auto___40463){
var seq__40443_40464__$1 = temp__4657__auto___40463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40443_40464__$1)){
var c__35155__auto___40465 = cljs.core.chunk_first.call(null,seq__40443_40464__$1);
var G__40466 = cljs.core.chunk_rest.call(null,seq__40443_40464__$1);
var G__40467 = c__35155__auto___40465;
var G__40468 = cljs.core.count.call(null,c__35155__auto___40465);
var G__40469 = (0);
seq__40443_40454 = G__40466;
chunk__40444_40455 = G__40467;
count__40445_40456 = G__40468;
i__40446_40457 = G__40469;
continue;
} else {
var dep_40470 = cljs.core.first.call(null,seq__40443_40464__$1);
topo_sort_helper_STAR_.call(null,dep_40470,(depth + (1)),state);

var G__40471 = cljs.core.next.call(null,seq__40443_40464__$1);
var G__40472 = null;
var G__40473 = (0);
var G__40474 = (0);
seq__40443_40454 = G__40471;
chunk__40444_40455 = G__40472;
count__40445_40456 = G__40473;
i__40446_40457 = G__40474;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40447){
var vec__40451 = p__40447;
var seq__40452 = cljs.core.seq.call(null,vec__40451);
var first__40453 = cljs.core.first.call(null,seq__40452);
var seq__40452__$1 = cljs.core.next.call(null,seq__40452);
var x = first__40453;
var xs = seq__40452__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40451,seq__40452,first__40453,seq__40452__$1,x,xs,get_deps__$1){
return (function (p1__40393_SHARP_){
return clojure.set.difference.call(null,p1__40393_SHARP_,x);
});})(vec__40451,seq__40452,first__40453,seq__40452__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40487 = cljs.core.seq.call(null,provides);
var chunk__40488 = null;
var count__40489 = (0);
var i__40490 = (0);
while(true){
if((i__40490 < count__40489)){
var prov = cljs.core._nth.call(null,chunk__40488,i__40490);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40491_40499 = cljs.core.seq.call(null,requires);
var chunk__40492_40500 = null;
var count__40493_40501 = (0);
var i__40494_40502 = (0);
while(true){
if((i__40494_40502 < count__40493_40501)){
var req_40503 = cljs.core._nth.call(null,chunk__40492_40500,i__40494_40502);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40503,prov);

var G__40504 = seq__40491_40499;
var G__40505 = chunk__40492_40500;
var G__40506 = count__40493_40501;
var G__40507 = (i__40494_40502 + (1));
seq__40491_40499 = G__40504;
chunk__40492_40500 = G__40505;
count__40493_40501 = G__40506;
i__40494_40502 = G__40507;
continue;
} else {
var temp__4657__auto___40508 = cljs.core.seq.call(null,seq__40491_40499);
if(temp__4657__auto___40508){
var seq__40491_40509__$1 = temp__4657__auto___40508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40491_40509__$1)){
var c__35155__auto___40510 = cljs.core.chunk_first.call(null,seq__40491_40509__$1);
var G__40511 = cljs.core.chunk_rest.call(null,seq__40491_40509__$1);
var G__40512 = c__35155__auto___40510;
var G__40513 = cljs.core.count.call(null,c__35155__auto___40510);
var G__40514 = (0);
seq__40491_40499 = G__40511;
chunk__40492_40500 = G__40512;
count__40493_40501 = G__40513;
i__40494_40502 = G__40514;
continue;
} else {
var req_40515 = cljs.core.first.call(null,seq__40491_40509__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40515,prov);

var G__40516 = cljs.core.next.call(null,seq__40491_40509__$1);
var G__40517 = null;
var G__40518 = (0);
var G__40519 = (0);
seq__40491_40499 = G__40516;
chunk__40492_40500 = G__40517;
count__40493_40501 = G__40518;
i__40494_40502 = G__40519;
continue;
}
} else {
}
}
break;
}

var G__40520 = seq__40487;
var G__40521 = chunk__40488;
var G__40522 = count__40489;
var G__40523 = (i__40490 + (1));
seq__40487 = G__40520;
chunk__40488 = G__40521;
count__40489 = G__40522;
i__40490 = G__40523;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40487);
if(temp__4657__auto__){
var seq__40487__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40487__$1)){
var c__35155__auto__ = cljs.core.chunk_first.call(null,seq__40487__$1);
var G__40524 = cljs.core.chunk_rest.call(null,seq__40487__$1);
var G__40525 = c__35155__auto__;
var G__40526 = cljs.core.count.call(null,c__35155__auto__);
var G__40527 = (0);
seq__40487 = G__40524;
chunk__40488 = G__40525;
count__40489 = G__40526;
i__40490 = G__40527;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40487__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40495_40528 = cljs.core.seq.call(null,requires);
var chunk__40496_40529 = null;
var count__40497_40530 = (0);
var i__40498_40531 = (0);
while(true){
if((i__40498_40531 < count__40497_40530)){
var req_40532 = cljs.core._nth.call(null,chunk__40496_40529,i__40498_40531);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40532,prov);

var G__40533 = seq__40495_40528;
var G__40534 = chunk__40496_40529;
var G__40535 = count__40497_40530;
var G__40536 = (i__40498_40531 + (1));
seq__40495_40528 = G__40533;
chunk__40496_40529 = G__40534;
count__40497_40530 = G__40535;
i__40498_40531 = G__40536;
continue;
} else {
var temp__4657__auto___40537__$1 = cljs.core.seq.call(null,seq__40495_40528);
if(temp__4657__auto___40537__$1){
var seq__40495_40538__$1 = temp__4657__auto___40537__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40495_40538__$1)){
var c__35155__auto___40539 = cljs.core.chunk_first.call(null,seq__40495_40538__$1);
var G__40540 = cljs.core.chunk_rest.call(null,seq__40495_40538__$1);
var G__40541 = c__35155__auto___40539;
var G__40542 = cljs.core.count.call(null,c__35155__auto___40539);
var G__40543 = (0);
seq__40495_40528 = G__40540;
chunk__40496_40529 = G__40541;
count__40497_40530 = G__40542;
i__40498_40531 = G__40543;
continue;
} else {
var req_40544 = cljs.core.first.call(null,seq__40495_40538__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40544,prov);

var G__40545 = cljs.core.next.call(null,seq__40495_40538__$1);
var G__40546 = null;
var G__40547 = (0);
var G__40548 = (0);
seq__40495_40528 = G__40545;
chunk__40496_40529 = G__40546;
count__40497_40530 = G__40547;
i__40498_40531 = G__40548;
continue;
}
} else {
}
}
break;
}

var G__40549 = cljs.core.next.call(null,seq__40487__$1);
var G__40550 = null;
var G__40551 = (0);
var G__40552 = (0);
seq__40487 = G__40549;
chunk__40488 = G__40550;
count__40489 = G__40551;
i__40490 = G__40552;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40557_40561 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40558_40562 = null;
var count__40559_40563 = (0);
var i__40560_40564 = (0);
while(true){
if((i__40560_40564 < count__40559_40563)){
var ns_40565 = cljs.core._nth.call(null,chunk__40558_40562,i__40560_40564);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40565);

var G__40566 = seq__40557_40561;
var G__40567 = chunk__40558_40562;
var G__40568 = count__40559_40563;
var G__40569 = (i__40560_40564 + (1));
seq__40557_40561 = G__40566;
chunk__40558_40562 = G__40567;
count__40559_40563 = G__40568;
i__40560_40564 = G__40569;
continue;
} else {
var temp__4657__auto___40570 = cljs.core.seq.call(null,seq__40557_40561);
if(temp__4657__auto___40570){
var seq__40557_40571__$1 = temp__4657__auto___40570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40557_40571__$1)){
var c__35155__auto___40572 = cljs.core.chunk_first.call(null,seq__40557_40571__$1);
var G__40573 = cljs.core.chunk_rest.call(null,seq__40557_40571__$1);
var G__40574 = c__35155__auto___40572;
var G__40575 = cljs.core.count.call(null,c__35155__auto___40572);
var G__40576 = (0);
seq__40557_40561 = G__40573;
chunk__40558_40562 = G__40574;
count__40559_40563 = G__40575;
i__40560_40564 = G__40576;
continue;
} else {
var ns_40577 = cljs.core.first.call(null,seq__40557_40571__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40577);

var G__40578 = cljs.core.next.call(null,seq__40557_40571__$1);
var G__40579 = null;
var G__40580 = (0);
var G__40581 = (0);
seq__40557_40561 = G__40578;
chunk__40558_40562 = G__40579;
count__40559_40563 = G__40580;
i__40560_40564 = G__40581;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__34336__auto__ = goog.require__;
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40582__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40583__i = 0, G__40583__a = new Array(arguments.length -  0);
while (G__40583__i < G__40583__a.length) {G__40583__a[G__40583__i] = arguments[G__40583__i + 0]; ++G__40583__i;}
  args = new cljs.core.IndexedSeq(G__40583__a,0);
} 
return G__40582__delegate.call(this,args);};
G__40582.cljs$lang$maxFixedArity = 0;
G__40582.cljs$lang$applyTo = (function (arglist__40584){
var args = cljs.core.seq(arglist__40584);
return G__40582__delegate(args);
});
G__40582.cljs$core$IFn$_invoke$arity$variadic = G__40582__delegate;
return G__40582;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40586 = cljs.core._EQ_;
var expr__40587 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40586.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40587))){
var path_parts = ((function (pred__40586,expr__40587){
return (function (p1__40585_SHARP_){
return clojure.string.split.call(null,p1__40585_SHARP_,/[\/\\]/);
});})(pred__40586,expr__40587))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40586,expr__40587){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40589){if((e40589 instanceof Error)){
var e = e40589;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40589;

}
}})());
});
;})(path_parts,sep,root,pred__40586,expr__40587))
} else {
if(cljs.core.truth_(pred__40586.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40587))){
return ((function (pred__40586,expr__40587){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__40586,expr__40587){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40586,expr__40587))
);

return deferred.addErrback(((function (deferred,pred__40586,expr__40587){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40586,expr__40587))
);
});
;})(pred__40586,expr__40587))
} else {
return ((function (pred__40586,expr__40587){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40586,expr__40587))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40590,callback){
var map__40593 = p__40590;
var map__40593__$1 = ((((!((map__40593 == null)))?((((map__40593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40593):map__40593);
var file_msg = map__40593__$1;
var request_url = cljs.core.get.call(null,map__40593__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40593,map__40593__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40593,map__40593__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__){
return (function (state_40617){
var state_val_40618 = (state_40617[(1)]);
if((state_val_40618 === (7))){
var inst_40613 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
var statearr_40619_40639 = state_40617__$1;
(statearr_40619_40639[(2)] = inst_40613);

(statearr_40619_40639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (1))){
var state_40617__$1 = state_40617;
var statearr_40620_40640 = state_40617__$1;
(statearr_40620_40640[(2)] = null);

(statearr_40620_40640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (4))){
var inst_40597 = (state_40617[(7)]);
var inst_40597__$1 = (state_40617[(2)]);
var state_40617__$1 = (function (){var statearr_40621 = state_40617;
(statearr_40621[(7)] = inst_40597__$1);

return statearr_40621;
})();
if(cljs.core.truth_(inst_40597__$1)){
var statearr_40622_40641 = state_40617__$1;
(statearr_40622_40641[(1)] = (5));

} else {
var statearr_40623_40642 = state_40617__$1;
(statearr_40623_40642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (6))){
var state_40617__$1 = state_40617;
var statearr_40624_40643 = state_40617__$1;
(statearr_40624_40643[(2)] = null);

(statearr_40624_40643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (3))){
var inst_40615 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40617__$1,inst_40615);
} else {
if((state_val_40618 === (2))){
var state_40617__$1 = state_40617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40617__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40618 === (11))){
var inst_40609 = (state_40617[(2)]);
var state_40617__$1 = (function (){var statearr_40625 = state_40617;
(statearr_40625[(8)] = inst_40609);

return statearr_40625;
})();
var statearr_40626_40644 = state_40617__$1;
(statearr_40626_40644[(2)] = null);

(statearr_40626_40644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (9))){
var inst_40601 = (state_40617[(9)]);
var inst_40603 = (state_40617[(10)]);
var inst_40605 = inst_40603.call(null,inst_40601);
var state_40617__$1 = state_40617;
var statearr_40627_40645 = state_40617__$1;
(statearr_40627_40645[(2)] = inst_40605);

(statearr_40627_40645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (5))){
var inst_40597 = (state_40617[(7)]);
var inst_40599 = figwheel.client.file_reloading.blocking_load.call(null,inst_40597);
var state_40617__$1 = state_40617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40617__$1,(8),inst_40599);
} else {
if((state_val_40618 === (10))){
var inst_40601 = (state_40617[(9)]);
var inst_40607 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40601);
var state_40617__$1 = state_40617;
var statearr_40628_40646 = state_40617__$1;
(statearr_40628_40646[(2)] = inst_40607);

(statearr_40628_40646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (8))){
var inst_40597 = (state_40617[(7)]);
var inst_40603 = (state_40617[(10)]);
var inst_40601 = (state_40617[(2)]);
var inst_40602 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40603__$1 = cljs.core.get.call(null,inst_40602,inst_40597);
var state_40617__$1 = (function (){var statearr_40629 = state_40617;
(statearr_40629[(9)] = inst_40601);

(statearr_40629[(10)] = inst_40603__$1);

return statearr_40629;
})();
if(cljs.core.truth_(inst_40603__$1)){
var statearr_40630_40647 = state_40617__$1;
(statearr_40630_40647[(1)] = (9));

} else {
var statearr_40631_40648 = state_40617__$1;
(statearr_40631_40648[(1)] = (10));

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
});})(c__37440__auto__))
;
return ((function (switch__37328__auto__,c__37440__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37329__auto__ = null;
var figwheel$client$file_reloading$state_machine__37329__auto____0 = (function (){
var statearr_40635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40635[(0)] = figwheel$client$file_reloading$state_machine__37329__auto__);

(statearr_40635[(1)] = (1));

return statearr_40635;
});
var figwheel$client$file_reloading$state_machine__37329__auto____1 = (function (state_40617){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_40617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e40636){if((e40636 instanceof Object)){
var ex__37332__auto__ = e40636;
var statearr_40637_40649 = state_40617;
(statearr_40637_40649[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40650 = state_40617;
state_40617 = G__40650;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37329__auto__ = function(state_40617){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37329__auto____1.call(this,state_40617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37329__auto____0;
figwheel$client$file_reloading$state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37329__auto____1;
return figwheel$client$file_reloading$state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__))
})();
var state__37442__auto__ = (function (){var statearr_40638 = f__37441__auto__.call(null);
(statearr_40638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_40638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__))
);

return c__37440__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40651,callback){
var map__40654 = p__40651;
var map__40654__$1 = ((((!((map__40654 == null)))?((((map__40654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40654):map__40654);
var file_msg = map__40654__$1;
var namespace = cljs.core.get.call(null,map__40654__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40654,map__40654__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40654,map__40654__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40656){
var map__40659 = p__40656;
var map__40659__$1 = ((((!((map__40659 == null)))?((((map__40659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40659):map__40659);
var file_msg = map__40659__$1;
var namespace = cljs.core.get.call(null,map__40659__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__34324__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__34324__auto__){
var or__34336__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
var or__34336__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34336__auto____$1)){
return or__34336__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__34324__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40661,callback){
var map__40664 = p__40661;
var map__40664__$1 = ((((!((map__40664 == null)))?((((map__40664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40664):map__40664);
var file_msg = map__40664__$1;
var request_url = cljs.core.get.call(null,map__40664__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40664__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__37440__auto___40768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___40768,out){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___40768,out){
return (function (state_40750){
var state_val_40751 = (state_40750[(1)]);
if((state_val_40751 === (1))){
var inst_40724 = cljs.core.seq.call(null,files);
var inst_40725 = cljs.core.first.call(null,inst_40724);
var inst_40726 = cljs.core.next.call(null,inst_40724);
var inst_40727 = files;
var state_40750__$1 = (function (){var statearr_40752 = state_40750;
(statearr_40752[(7)] = inst_40726);

(statearr_40752[(8)] = inst_40725);

(statearr_40752[(9)] = inst_40727);

return statearr_40752;
})();
var statearr_40753_40769 = state_40750__$1;
(statearr_40753_40769[(2)] = null);

(statearr_40753_40769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40751 === (2))){
var inst_40733 = (state_40750[(10)]);
var inst_40727 = (state_40750[(9)]);
var inst_40732 = cljs.core.seq.call(null,inst_40727);
var inst_40733__$1 = cljs.core.first.call(null,inst_40732);
var inst_40734 = cljs.core.next.call(null,inst_40732);
var inst_40735 = (inst_40733__$1 == null);
var inst_40736 = cljs.core.not.call(null,inst_40735);
var state_40750__$1 = (function (){var statearr_40754 = state_40750;
(statearr_40754[(11)] = inst_40734);

(statearr_40754[(10)] = inst_40733__$1);

return statearr_40754;
})();
if(inst_40736){
var statearr_40755_40770 = state_40750__$1;
(statearr_40755_40770[(1)] = (4));

} else {
var statearr_40756_40771 = state_40750__$1;
(statearr_40756_40771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40751 === (3))){
var inst_40748 = (state_40750[(2)]);
var state_40750__$1 = state_40750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40750__$1,inst_40748);
} else {
if((state_val_40751 === (4))){
var inst_40733 = (state_40750[(10)]);
var inst_40738 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40733);
var state_40750__$1 = state_40750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40750__$1,(7),inst_40738);
} else {
if((state_val_40751 === (5))){
var inst_40744 = cljs.core.async.close_BANG_.call(null,out);
var state_40750__$1 = state_40750;
var statearr_40757_40772 = state_40750__$1;
(statearr_40757_40772[(2)] = inst_40744);

(statearr_40757_40772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40751 === (6))){
var inst_40746 = (state_40750[(2)]);
var state_40750__$1 = state_40750;
var statearr_40758_40773 = state_40750__$1;
(statearr_40758_40773[(2)] = inst_40746);

(statearr_40758_40773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40751 === (7))){
var inst_40734 = (state_40750[(11)]);
var inst_40740 = (state_40750[(2)]);
var inst_40741 = cljs.core.async.put_BANG_.call(null,out,inst_40740);
var inst_40727 = inst_40734;
var state_40750__$1 = (function (){var statearr_40759 = state_40750;
(statearr_40759[(12)] = inst_40741);

(statearr_40759[(9)] = inst_40727);

return statearr_40759;
})();
var statearr_40760_40774 = state_40750__$1;
(statearr_40760_40774[(2)] = null);

(statearr_40760_40774[(1)] = (2));


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
});})(c__37440__auto___40768,out))
;
return ((function (switch__37328__auto__,c__37440__auto___40768,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto____0 = (function (){
var statearr_40764 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40764[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto__);

(statearr_40764[(1)] = (1));

return statearr_40764;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto____1 = (function (state_40750){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_40750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e40765){if((e40765 instanceof Object)){
var ex__37332__auto__ = e40765;
var statearr_40766_40775 = state_40750;
(statearr_40766_40775[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40776 = state_40750;
state_40750 = G__40776;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto__ = function(state_40750){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto____1.call(this,state_40750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___40768,out))
})();
var state__37442__auto__ = (function (){var statearr_40767 = f__37441__auto__.call(null);
(statearr_40767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___40768);

return statearr_40767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___40768,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40777,opts){
var map__40781 = p__40777;
var map__40781__$1 = ((((!((map__40781 == null)))?((((map__40781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40781):map__40781);
var eval_body = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__34324__auto__ = eval_body;
if(cljs.core.truth_(and__34324__auto__)){
return typeof eval_body === 'string';
} else {
return and__34324__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40783){var e = e40783;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40784_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40784_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40793){
var vec__40794 = p__40793;
var k = cljs.core.nth.call(null,vec__40794,(0),null);
var v = cljs.core.nth.call(null,vec__40794,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40797){
var vec__40798 = p__40797;
var k = cljs.core.nth.call(null,vec__40798,(0),null);
var v = cljs.core.nth.call(null,vec__40798,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40804,p__40805){
var map__41053 = p__40804;
var map__41053__$1 = ((((!((map__41053 == null)))?((((map__41053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41053):map__41053);
var opts = map__41053__$1;
var before_jsload = cljs.core.get.call(null,map__41053__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41053__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41053__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41054 = p__40805;
var map__41054__$1 = ((((!((map__41054 == null)))?((((map__41054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41054):map__41054);
var msg = map__41054__$1;
var files = cljs.core.get.call(null,map__41054__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41054__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41054__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41208){
var state_val_41209 = (state_41208[(1)]);
if((state_val_41209 === (7))){
var inst_41071 = (state_41208[(7)]);
var inst_41070 = (state_41208[(8)]);
var inst_41068 = (state_41208[(9)]);
var inst_41069 = (state_41208[(10)]);
var inst_41076 = cljs.core._nth.call(null,inst_41069,inst_41071);
var inst_41077 = figwheel.client.file_reloading.eval_body.call(null,inst_41076,opts);
var inst_41078 = (inst_41071 + (1));
var tmp41210 = inst_41070;
var tmp41211 = inst_41068;
var tmp41212 = inst_41069;
var inst_41068__$1 = tmp41211;
var inst_41069__$1 = tmp41212;
var inst_41070__$1 = tmp41210;
var inst_41071__$1 = inst_41078;
var state_41208__$1 = (function (){var statearr_41213 = state_41208;
(statearr_41213[(11)] = inst_41077);

(statearr_41213[(7)] = inst_41071__$1);

(statearr_41213[(8)] = inst_41070__$1);

(statearr_41213[(9)] = inst_41068__$1);

(statearr_41213[(10)] = inst_41069__$1);

return statearr_41213;
})();
var statearr_41214_41300 = state_41208__$1;
(statearr_41214_41300[(2)] = null);

(statearr_41214_41300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (20))){
var inst_41111 = (state_41208[(12)]);
var inst_41119 = figwheel.client.file_reloading.sort_files.call(null,inst_41111);
var state_41208__$1 = state_41208;
var statearr_41215_41301 = state_41208__$1;
(statearr_41215_41301[(2)] = inst_41119);

(statearr_41215_41301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (27))){
var state_41208__$1 = state_41208;
var statearr_41216_41302 = state_41208__$1;
(statearr_41216_41302[(2)] = null);

(statearr_41216_41302[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (1))){
var inst_41060 = (state_41208[(13)]);
var inst_41057 = before_jsload.call(null,files);
var inst_41058 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41059 = (function (){return ((function (inst_41060,inst_41057,inst_41058,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40801_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40801_SHARP_);
});
;})(inst_41060,inst_41057,inst_41058,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41060__$1 = cljs.core.filter.call(null,inst_41059,files);
var inst_41061 = cljs.core.not_empty.call(null,inst_41060__$1);
var state_41208__$1 = (function (){var statearr_41217 = state_41208;
(statearr_41217[(14)] = inst_41058);

(statearr_41217[(15)] = inst_41057);

(statearr_41217[(13)] = inst_41060__$1);

return statearr_41217;
})();
if(cljs.core.truth_(inst_41061)){
var statearr_41218_41303 = state_41208__$1;
(statearr_41218_41303[(1)] = (2));

} else {
var statearr_41219_41304 = state_41208__$1;
(statearr_41219_41304[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (24))){
var state_41208__$1 = state_41208;
var statearr_41220_41305 = state_41208__$1;
(statearr_41220_41305[(2)] = null);

(statearr_41220_41305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (39))){
var inst_41161 = (state_41208[(16)]);
var state_41208__$1 = state_41208;
var statearr_41221_41306 = state_41208__$1;
(statearr_41221_41306[(2)] = inst_41161);

(statearr_41221_41306[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (46))){
var inst_41203 = (state_41208[(2)]);
var state_41208__$1 = state_41208;
var statearr_41222_41307 = state_41208__$1;
(statearr_41222_41307[(2)] = inst_41203);

(statearr_41222_41307[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (4))){
var inst_41105 = (state_41208[(2)]);
var inst_41106 = cljs.core.List.EMPTY;
var inst_41107 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41106);
var inst_41108 = (function (){return ((function (inst_41105,inst_41106,inst_41107,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40802_SHARP_){
var and__34324__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40802_SHARP_);
if(cljs.core.truth_(and__34324__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40802_SHARP_));
} else {
return and__34324__auto__;
}
});
;})(inst_41105,inst_41106,inst_41107,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41109 = cljs.core.filter.call(null,inst_41108,files);
var inst_41110 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41111 = cljs.core.concat.call(null,inst_41109,inst_41110);
var state_41208__$1 = (function (){var statearr_41223 = state_41208;
(statearr_41223[(12)] = inst_41111);

(statearr_41223[(17)] = inst_41105);

(statearr_41223[(18)] = inst_41107);

return statearr_41223;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41224_41308 = state_41208__$1;
(statearr_41224_41308[(1)] = (16));

} else {
var statearr_41225_41309 = state_41208__$1;
(statearr_41225_41309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (15))){
var inst_41095 = (state_41208[(2)]);
var state_41208__$1 = state_41208;
var statearr_41226_41310 = state_41208__$1;
(statearr_41226_41310[(2)] = inst_41095);

(statearr_41226_41310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (21))){
var inst_41121 = (state_41208[(19)]);
var inst_41121__$1 = (state_41208[(2)]);
var inst_41122 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41121__$1);
var state_41208__$1 = (function (){var statearr_41227 = state_41208;
(statearr_41227[(19)] = inst_41121__$1);

return statearr_41227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41208__$1,(22),inst_41122);
} else {
if((state_val_41209 === (31))){
var inst_41206 = (state_41208[(2)]);
var state_41208__$1 = state_41208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41208__$1,inst_41206);
} else {
if((state_val_41209 === (32))){
var inst_41161 = (state_41208[(16)]);
var inst_41166 = inst_41161.cljs$lang$protocol_mask$partition0$;
var inst_41167 = (inst_41166 & (64));
var inst_41168 = inst_41161.cljs$core$ISeq$;
var inst_41169 = (cljs.core.PROTOCOL_SENTINEL === inst_41168);
var inst_41170 = (inst_41167) || (inst_41169);
var state_41208__$1 = state_41208;
if(cljs.core.truth_(inst_41170)){
var statearr_41228_41311 = state_41208__$1;
(statearr_41228_41311[(1)] = (35));

} else {
var statearr_41229_41312 = state_41208__$1;
(statearr_41229_41312[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (40))){
var inst_41183 = (state_41208[(20)]);
var inst_41182 = (state_41208[(2)]);
var inst_41183__$1 = cljs.core.get.call(null,inst_41182,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41184 = cljs.core.get.call(null,inst_41182,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41185 = cljs.core.not_empty.call(null,inst_41183__$1);
var state_41208__$1 = (function (){var statearr_41230 = state_41208;
(statearr_41230[(21)] = inst_41184);

(statearr_41230[(20)] = inst_41183__$1);

return statearr_41230;
})();
if(cljs.core.truth_(inst_41185)){
var statearr_41231_41313 = state_41208__$1;
(statearr_41231_41313[(1)] = (41));

} else {
var statearr_41232_41314 = state_41208__$1;
(statearr_41232_41314[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (33))){
var state_41208__$1 = state_41208;
var statearr_41233_41315 = state_41208__$1;
(statearr_41233_41315[(2)] = false);

(statearr_41233_41315[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (13))){
var inst_41081 = (state_41208[(22)]);
var inst_41085 = cljs.core.chunk_first.call(null,inst_41081);
var inst_41086 = cljs.core.chunk_rest.call(null,inst_41081);
var inst_41087 = cljs.core.count.call(null,inst_41085);
var inst_41068 = inst_41086;
var inst_41069 = inst_41085;
var inst_41070 = inst_41087;
var inst_41071 = (0);
var state_41208__$1 = (function (){var statearr_41234 = state_41208;
(statearr_41234[(7)] = inst_41071);

(statearr_41234[(8)] = inst_41070);

(statearr_41234[(9)] = inst_41068);

(statearr_41234[(10)] = inst_41069);

return statearr_41234;
})();
var statearr_41235_41316 = state_41208__$1;
(statearr_41235_41316[(2)] = null);

(statearr_41235_41316[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (22))){
var inst_41129 = (state_41208[(23)]);
var inst_41124 = (state_41208[(24)]);
var inst_41125 = (state_41208[(25)]);
var inst_41121 = (state_41208[(19)]);
var inst_41124__$1 = (state_41208[(2)]);
var inst_41125__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41124__$1);
var inst_41126 = (function (){var all_files = inst_41121;
var res_SINGLEQUOTE_ = inst_41124__$1;
var res = inst_41125__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41129,inst_41124,inst_41125,inst_41121,inst_41124__$1,inst_41125__$1,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40803_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40803_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41129,inst_41124,inst_41125,inst_41121,inst_41124__$1,inst_41125__$1,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41127 = cljs.core.filter.call(null,inst_41126,inst_41124__$1);
var inst_41128 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41129__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41128);
var inst_41130 = cljs.core.not_empty.call(null,inst_41129__$1);
var state_41208__$1 = (function (){var statearr_41236 = state_41208;
(statearr_41236[(23)] = inst_41129__$1);

(statearr_41236[(24)] = inst_41124__$1);

(statearr_41236[(25)] = inst_41125__$1);

(statearr_41236[(26)] = inst_41127);

return statearr_41236;
})();
if(cljs.core.truth_(inst_41130)){
var statearr_41237_41317 = state_41208__$1;
(statearr_41237_41317[(1)] = (23));

} else {
var statearr_41238_41318 = state_41208__$1;
(statearr_41238_41318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (36))){
var state_41208__$1 = state_41208;
var statearr_41239_41319 = state_41208__$1;
(statearr_41239_41319[(2)] = false);

(statearr_41239_41319[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (41))){
var inst_41183 = (state_41208[(20)]);
var inst_41187 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41188 = cljs.core.map.call(null,inst_41187,inst_41183);
var inst_41189 = cljs.core.pr_str.call(null,inst_41188);
var inst_41190 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41189)].join('');
var inst_41191 = figwheel.client.utils.log.call(null,inst_41190);
var state_41208__$1 = state_41208;
var statearr_41240_41320 = state_41208__$1;
(statearr_41240_41320[(2)] = inst_41191);

(statearr_41240_41320[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (43))){
var inst_41184 = (state_41208[(21)]);
var inst_41194 = (state_41208[(2)]);
var inst_41195 = cljs.core.not_empty.call(null,inst_41184);
var state_41208__$1 = (function (){var statearr_41241 = state_41208;
(statearr_41241[(27)] = inst_41194);

return statearr_41241;
})();
if(cljs.core.truth_(inst_41195)){
var statearr_41242_41321 = state_41208__$1;
(statearr_41242_41321[(1)] = (44));

} else {
var statearr_41243_41322 = state_41208__$1;
(statearr_41243_41322[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (29))){
var inst_41129 = (state_41208[(23)]);
var inst_41124 = (state_41208[(24)]);
var inst_41161 = (state_41208[(16)]);
var inst_41125 = (state_41208[(25)]);
var inst_41121 = (state_41208[(19)]);
var inst_41127 = (state_41208[(26)]);
var inst_41157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41160 = (function (){var all_files = inst_41121;
var res_SINGLEQUOTE_ = inst_41124;
var res = inst_41125;
var files_not_loaded = inst_41127;
var dependencies_that_loaded = inst_41129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41129,inst_41124,inst_41161,inst_41125,inst_41121,inst_41127,inst_41157,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41159){
var map__41244 = p__41159;
var map__41244__$1 = ((((!((map__41244 == null)))?((((map__41244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41244):map__41244);
var namespace = cljs.core.get.call(null,map__41244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41129,inst_41124,inst_41161,inst_41125,inst_41121,inst_41127,inst_41157,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41161__$1 = cljs.core.group_by.call(null,inst_41160,inst_41127);
var inst_41163 = (inst_41161__$1 == null);
var inst_41164 = cljs.core.not.call(null,inst_41163);
var state_41208__$1 = (function (){var statearr_41246 = state_41208;
(statearr_41246[(16)] = inst_41161__$1);

(statearr_41246[(28)] = inst_41157);

return statearr_41246;
})();
if(inst_41164){
var statearr_41247_41323 = state_41208__$1;
(statearr_41247_41323[(1)] = (32));

} else {
var statearr_41248_41324 = state_41208__$1;
(statearr_41248_41324[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (44))){
var inst_41184 = (state_41208[(21)]);
var inst_41197 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41184);
var inst_41198 = cljs.core.pr_str.call(null,inst_41197);
var inst_41199 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41198)].join('');
var inst_41200 = figwheel.client.utils.log.call(null,inst_41199);
var state_41208__$1 = state_41208;
var statearr_41249_41325 = state_41208__$1;
(statearr_41249_41325[(2)] = inst_41200);

(statearr_41249_41325[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (6))){
var inst_41102 = (state_41208[(2)]);
var state_41208__$1 = state_41208;
var statearr_41250_41326 = state_41208__$1;
(statearr_41250_41326[(2)] = inst_41102);

(statearr_41250_41326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (28))){
var inst_41127 = (state_41208[(26)]);
var inst_41154 = (state_41208[(2)]);
var inst_41155 = cljs.core.not_empty.call(null,inst_41127);
var state_41208__$1 = (function (){var statearr_41251 = state_41208;
(statearr_41251[(29)] = inst_41154);

return statearr_41251;
})();
if(cljs.core.truth_(inst_41155)){
var statearr_41252_41327 = state_41208__$1;
(statearr_41252_41327[(1)] = (29));

} else {
var statearr_41253_41328 = state_41208__$1;
(statearr_41253_41328[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (25))){
var inst_41125 = (state_41208[(25)]);
var inst_41141 = (state_41208[(2)]);
var inst_41142 = cljs.core.not_empty.call(null,inst_41125);
var state_41208__$1 = (function (){var statearr_41254 = state_41208;
(statearr_41254[(30)] = inst_41141);

return statearr_41254;
})();
if(cljs.core.truth_(inst_41142)){
var statearr_41255_41329 = state_41208__$1;
(statearr_41255_41329[(1)] = (26));

} else {
var statearr_41256_41330 = state_41208__$1;
(statearr_41256_41330[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (34))){
var inst_41177 = (state_41208[(2)]);
var state_41208__$1 = state_41208;
if(cljs.core.truth_(inst_41177)){
var statearr_41257_41331 = state_41208__$1;
(statearr_41257_41331[(1)] = (38));

} else {
var statearr_41258_41332 = state_41208__$1;
(statearr_41258_41332[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (17))){
var state_41208__$1 = state_41208;
var statearr_41259_41333 = state_41208__$1;
(statearr_41259_41333[(2)] = recompile_dependents);

(statearr_41259_41333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (3))){
var state_41208__$1 = state_41208;
var statearr_41260_41334 = state_41208__$1;
(statearr_41260_41334[(2)] = null);

(statearr_41260_41334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (12))){
var inst_41098 = (state_41208[(2)]);
var state_41208__$1 = state_41208;
var statearr_41261_41335 = state_41208__$1;
(statearr_41261_41335[(2)] = inst_41098);

(statearr_41261_41335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (2))){
var inst_41060 = (state_41208[(13)]);
var inst_41067 = cljs.core.seq.call(null,inst_41060);
var inst_41068 = inst_41067;
var inst_41069 = null;
var inst_41070 = (0);
var inst_41071 = (0);
var state_41208__$1 = (function (){var statearr_41262 = state_41208;
(statearr_41262[(7)] = inst_41071);

(statearr_41262[(8)] = inst_41070);

(statearr_41262[(9)] = inst_41068);

(statearr_41262[(10)] = inst_41069);

return statearr_41262;
})();
var statearr_41263_41336 = state_41208__$1;
(statearr_41263_41336[(2)] = null);

(statearr_41263_41336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (23))){
var inst_41129 = (state_41208[(23)]);
var inst_41124 = (state_41208[(24)]);
var inst_41125 = (state_41208[(25)]);
var inst_41121 = (state_41208[(19)]);
var inst_41127 = (state_41208[(26)]);
var inst_41132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41134 = (function (){var all_files = inst_41121;
var res_SINGLEQUOTE_ = inst_41124;
var res = inst_41125;
var files_not_loaded = inst_41127;
var dependencies_that_loaded = inst_41129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41129,inst_41124,inst_41125,inst_41121,inst_41127,inst_41132,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41133){
var map__41264 = p__41133;
var map__41264__$1 = ((((!((map__41264 == null)))?((((map__41264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41264):map__41264);
var request_url = cljs.core.get.call(null,map__41264__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41129,inst_41124,inst_41125,inst_41121,inst_41127,inst_41132,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41135 = cljs.core.reverse.call(null,inst_41129);
var inst_41136 = cljs.core.map.call(null,inst_41134,inst_41135);
var inst_41137 = cljs.core.pr_str.call(null,inst_41136);
var inst_41138 = figwheel.client.utils.log.call(null,inst_41137);
var state_41208__$1 = (function (){var statearr_41266 = state_41208;
(statearr_41266[(31)] = inst_41132);

return statearr_41266;
})();
var statearr_41267_41337 = state_41208__$1;
(statearr_41267_41337[(2)] = inst_41138);

(statearr_41267_41337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (35))){
var state_41208__$1 = state_41208;
var statearr_41268_41338 = state_41208__$1;
(statearr_41268_41338[(2)] = true);

(statearr_41268_41338[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (19))){
var inst_41111 = (state_41208[(12)]);
var inst_41117 = figwheel.client.file_reloading.expand_files.call(null,inst_41111);
var state_41208__$1 = state_41208;
var statearr_41269_41339 = state_41208__$1;
(statearr_41269_41339[(2)] = inst_41117);

(statearr_41269_41339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (11))){
var state_41208__$1 = state_41208;
var statearr_41270_41340 = state_41208__$1;
(statearr_41270_41340[(2)] = null);

(statearr_41270_41340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (9))){
var inst_41100 = (state_41208[(2)]);
var state_41208__$1 = state_41208;
var statearr_41271_41341 = state_41208__$1;
(statearr_41271_41341[(2)] = inst_41100);

(statearr_41271_41341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (5))){
var inst_41071 = (state_41208[(7)]);
var inst_41070 = (state_41208[(8)]);
var inst_41073 = (inst_41071 < inst_41070);
var inst_41074 = inst_41073;
var state_41208__$1 = state_41208;
if(cljs.core.truth_(inst_41074)){
var statearr_41272_41342 = state_41208__$1;
(statearr_41272_41342[(1)] = (7));

} else {
var statearr_41273_41343 = state_41208__$1;
(statearr_41273_41343[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (14))){
var inst_41081 = (state_41208[(22)]);
var inst_41090 = cljs.core.first.call(null,inst_41081);
var inst_41091 = figwheel.client.file_reloading.eval_body.call(null,inst_41090,opts);
var inst_41092 = cljs.core.next.call(null,inst_41081);
var inst_41068 = inst_41092;
var inst_41069 = null;
var inst_41070 = (0);
var inst_41071 = (0);
var state_41208__$1 = (function (){var statearr_41274 = state_41208;
(statearr_41274[(7)] = inst_41071);

(statearr_41274[(8)] = inst_41070);

(statearr_41274[(32)] = inst_41091);

(statearr_41274[(9)] = inst_41068);

(statearr_41274[(10)] = inst_41069);

return statearr_41274;
})();
var statearr_41275_41344 = state_41208__$1;
(statearr_41275_41344[(2)] = null);

(statearr_41275_41344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (45))){
var state_41208__$1 = state_41208;
var statearr_41276_41345 = state_41208__$1;
(statearr_41276_41345[(2)] = null);

(statearr_41276_41345[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (26))){
var inst_41129 = (state_41208[(23)]);
var inst_41124 = (state_41208[(24)]);
var inst_41125 = (state_41208[(25)]);
var inst_41121 = (state_41208[(19)]);
var inst_41127 = (state_41208[(26)]);
var inst_41144 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41146 = (function (){var all_files = inst_41121;
var res_SINGLEQUOTE_ = inst_41124;
var res = inst_41125;
var files_not_loaded = inst_41127;
var dependencies_that_loaded = inst_41129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41129,inst_41124,inst_41125,inst_41121,inst_41127,inst_41144,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41145){
var map__41277 = p__41145;
var map__41277__$1 = ((((!((map__41277 == null)))?((((map__41277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41277):map__41277);
var namespace = cljs.core.get.call(null,map__41277__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41277__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41129,inst_41124,inst_41125,inst_41121,inst_41127,inst_41144,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41147 = cljs.core.map.call(null,inst_41146,inst_41125);
var inst_41148 = cljs.core.pr_str.call(null,inst_41147);
var inst_41149 = figwheel.client.utils.log.call(null,inst_41148);
var inst_41150 = (function (){var all_files = inst_41121;
var res_SINGLEQUOTE_ = inst_41124;
var res = inst_41125;
var files_not_loaded = inst_41127;
var dependencies_that_loaded = inst_41129;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41129,inst_41124,inst_41125,inst_41121,inst_41127,inst_41144,inst_41146,inst_41147,inst_41148,inst_41149,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41129,inst_41124,inst_41125,inst_41121,inst_41127,inst_41144,inst_41146,inst_41147,inst_41148,inst_41149,state_val_41209,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41151 = setTimeout(inst_41150,(10));
var state_41208__$1 = (function (){var statearr_41279 = state_41208;
(statearr_41279[(33)] = inst_41149);

(statearr_41279[(34)] = inst_41144);

return statearr_41279;
})();
var statearr_41280_41346 = state_41208__$1;
(statearr_41280_41346[(2)] = inst_41151);

(statearr_41280_41346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (16))){
var state_41208__$1 = state_41208;
var statearr_41281_41347 = state_41208__$1;
(statearr_41281_41347[(2)] = reload_dependents);

(statearr_41281_41347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (38))){
var inst_41161 = (state_41208[(16)]);
var inst_41179 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41161);
var state_41208__$1 = state_41208;
var statearr_41282_41348 = state_41208__$1;
(statearr_41282_41348[(2)] = inst_41179);

(statearr_41282_41348[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (30))){
var state_41208__$1 = state_41208;
var statearr_41283_41349 = state_41208__$1;
(statearr_41283_41349[(2)] = null);

(statearr_41283_41349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (10))){
var inst_41081 = (state_41208[(22)]);
var inst_41083 = cljs.core.chunked_seq_QMARK_.call(null,inst_41081);
var state_41208__$1 = state_41208;
if(inst_41083){
var statearr_41284_41350 = state_41208__$1;
(statearr_41284_41350[(1)] = (13));

} else {
var statearr_41285_41351 = state_41208__$1;
(statearr_41285_41351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (18))){
var inst_41115 = (state_41208[(2)]);
var state_41208__$1 = state_41208;
if(cljs.core.truth_(inst_41115)){
var statearr_41286_41352 = state_41208__$1;
(statearr_41286_41352[(1)] = (19));

} else {
var statearr_41287_41353 = state_41208__$1;
(statearr_41287_41353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (42))){
var state_41208__$1 = state_41208;
var statearr_41288_41354 = state_41208__$1;
(statearr_41288_41354[(2)] = null);

(statearr_41288_41354[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (37))){
var inst_41174 = (state_41208[(2)]);
var state_41208__$1 = state_41208;
var statearr_41289_41355 = state_41208__$1;
(statearr_41289_41355[(2)] = inst_41174);

(statearr_41289_41355[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41209 === (8))){
var inst_41081 = (state_41208[(22)]);
var inst_41068 = (state_41208[(9)]);
var inst_41081__$1 = cljs.core.seq.call(null,inst_41068);
var state_41208__$1 = (function (){var statearr_41290 = state_41208;
(statearr_41290[(22)] = inst_41081__$1);

return statearr_41290;
})();
if(inst_41081__$1){
var statearr_41291_41356 = state_41208__$1;
(statearr_41291_41356[(1)] = (10));

} else {
var statearr_41292_41357 = state_41208__$1;
(statearr_41292_41357[(1)] = (11));

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
}
});})(c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37328__auto__,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto____0 = (function (){
var statearr_41296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41296[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto__);

(statearr_41296[(1)] = (1));

return statearr_41296;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto____1 = (function (state_41208){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_41208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e41297){if((e41297 instanceof Object)){
var ex__37332__auto__ = e41297;
var statearr_41298_41358 = state_41208;
(statearr_41298_41358[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41359 = state_41208;
state_41208 = G__41359;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto__ = function(state_41208){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto____1.call(this,state_41208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37442__auto__ = (function (){var statearr_41299 = f__37441__auto__.call(null);
(statearr_41299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_41299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__,map__41053,map__41053__$1,opts,before_jsload,on_jsload,reload_dependents,map__41054,map__41054__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37440__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41362,link){
var map__41365 = p__41362;
var map__41365__$1 = ((((!((map__41365 == null)))?((((map__41365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41365):map__41365);
var file = cljs.core.get.call(null,map__41365__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41365,map__41365__$1,file){
return (function (p1__41360_SHARP_,p2__41361_SHARP_){
if(cljs.core._EQ_.call(null,p1__41360_SHARP_,p2__41361_SHARP_)){
return p1__41360_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41365,map__41365__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41371){
var map__41372 = p__41371;
var map__41372__$1 = ((((!((map__41372 == null)))?((((map__41372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41372):map__41372);
var match_length = cljs.core.get.call(null,map__41372__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41372__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41367_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41367_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args41374 = [];
var len__35449__auto___41377 = arguments.length;
var i__35450__auto___41378 = (0);
while(true){
if((i__35450__auto___41378 < len__35449__auto___41377)){
args41374.push((arguments[i__35450__auto___41378]));

var G__41379 = (i__35450__auto___41378 + (1));
i__35450__auto___41378 = G__41379;
continue;
} else {
}
break;
}

var G__41376 = args41374.length;
switch (G__41376) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41374.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41381_SHARP_,p2__41382_SHARP_){
return cljs.core.assoc.call(null,p1__41381_SHARP_,cljs.core.get.call(null,p2__41382_SHARP_,key),p2__41382_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41383){
var map__41386 = p__41383;
var map__41386__$1 = ((((!((map__41386 == null)))?((((map__41386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41386):map__41386);
var f_data = map__41386__$1;
var file = cljs.core.get.call(null,map__41386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41388,files_msg){
var map__41395 = p__41388;
var map__41395__$1 = ((((!((map__41395 == null)))?((((map__41395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41395):map__41395);
var opts = map__41395__$1;
var on_cssload = cljs.core.get.call(null,map__41395__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41397_41401 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41398_41402 = null;
var count__41399_41403 = (0);
var i__41400_41404 = (0);
while(true){
if((i__41400_41404 < count__41399_41403)){
var f_41405 = cljs.core._nth.call(null,chunk__41398_41402,i__41400_41404);
figwheel.client.file_reloading.reload_css_file.call(null,f_41405);

var G__41406 = seq__41397_41401;
var G__41407 = chunk__41398_41402;
var G__41408 = count__41399_41403;
var G__41409 = (i__41400_41404 + (1));
seq__41397_41401 = G__41406;
chunk__41398_41402 = G__41407;
count__41399_41403 = G__41408;
i__41400_41404 = G__41409;
continue;
} else {
var temp__4657__auto___41410 = cljs.core.seq.call(null,seq__41397_41401);
if(temp__4657__auto___41410){
var seq__41397_41411__$1 = temp__4657__auto___41410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41397_41411__$1)){
var c__35155__auto___41412 = cljs.core.chunk_first.call(null,seq__41397_41411__$1);
var G__41413 = cljs.core.chunk_rest.call(null,seq__41397_41411__$1);
var G__41414 = c__35155__auto___41412;
var G__41415 = cljs.core.count.call(null,c__35155__auto___41412);
var G__41416 = (0);
seq__41397_41401 = G__41413;
chunk__41398_41402 = G__41414;
count__41399_41403 = G__41415;
i__41400_41404 = G__41416;
continue;
} else {
var f_41417 = cljs.core.first.call(null,seq__41397_41411__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41417);

var G__41418 = cljs.core.next.call(null,seq__41397_41411__$1);
var G__41419 = null;
var G__41420 = (0);
var G__41421 = (0);
seq__41397_41401 = G__41418;
chunk__41398_41402 = G__41419;
count__41399_41403 = G__41420;
i__41400_41404 = G__41421;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41395,map__41395__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__41395,map__41395__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1513020384482