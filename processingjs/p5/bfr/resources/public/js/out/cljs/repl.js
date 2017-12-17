// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42910){
var map__42935 = p__42910;
var map__42935__$1 = ((((!((map__42935 == null)))?((((map__42935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42935):map__42935);
var m = map__42935__$1;
var n = cljs.core.get.call(null,map__42935__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42937_42959 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42938_42960 = null;
var count__42939_42961 = (0);
var i__42940_42962 = (0);
while(true){
if((i__42940_42962 < count__42939_42961)){
var f_42963 = cljs.core._nth.call(null,chunk__42938_42960,i__42940_42962);
cljs.core.println.call(null,"  ",f_42963);

var G__42964 = seq__42937_42959;
var G__42965 = chunk__42938_42960;
var G__42966 = count__42939_42961;
var G__42967 = (i__42940_42962 + (1));
seq__42937_42959 = G__42964;
chunk__42938_42960 = G__42965;
count__42939_42961 = G__42966;
i__42940_42962 = G__42967;
continue;
} else {
var temp__4657__auto___42968 = cljs.core.seq.call(null,seq__42937_42959);
if(temp__4657__auto___42968){
var seq__42937_42969__$1 = temp__4657__auto___42968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42937_42969__$1)){
var c__35155__auto___42970 = cljs.core.chunk_first.call(null,seq__42937_42969__$1);
var G__42971 = cljs.core.chunk_rest.call(null,seq__42937_42969__$1);
var G__42972 = c__35155__auto___42970;
var G__42973 = cljs.core.count.call(null,c__35155__auto___42970);
var G__42974 = (0);
seq__42937_42959 = G__42971;
chunk__42938_42960 = G__42972;
count__42939_42961 = G__42973;
i__42940_42962 = G__42974;
continue;
} else {
var f_42975 = cljs.core.first.call(null,seq__42937_42969__$1);
cljs.core.println.call(null,"  ",f_42975);

var G__42976 = cljs.core.next.call(null,seq__42937_42969__$1);
var G__42977 = null;
var G__42978 = (0);
var G__42979 = (0);
seq__42937_42959 = G__42976;
chunk__42938_42960 = G__42977;
count__42939_42961 = G__42978;
i__42940_42962 = G__42979;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42980 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34336__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42980);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42980)))?cljs.core.second.call(null,arglists_42980):arglists_42980));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42941_42981 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42942_42982 = null;
var count__42943_42983 = (0);
var i__42944_42984 = (0);
while(true){
if((i__42944_42984 < count__42943_42983)){
var vec__42945_42985 = cljs.core._nth.call(null,chunk__42942_42982,i__42944_42984);
var name_42986 = cljs.core.nth.call(null,vec__42945_42985,(0),null);
var map__42948_42987 = cljs.core.nth.call(null,vec__42945_42985,(1),null);
var map__42948_42988__$1 = ((((!((map__42948_42987 == null)))?((((map__42948_42987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42948_42987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42948_42987):map__42948_42987);
var doc_42989 = cljs.core.get.call(null,map__42948_42988__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42990 = cljs.core.get.call(null,map__42948_42988__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42986);

cljs.core.println.call(null," ",arglists_42990);

if(cljs.core.truth_(doc_42989)){
cljs.core.println.call(null," ",doc_42989);
} else {
}

var G__42991 = seq__42941_42981;
var G__42992 = chunk__42942_42982;
var G__42993 = count__42943_42983;
var G__42994 = (i__42944_42984 + (1));
seq__42941_42981 = G__42991;
chunk__42942_42982 = G__42992;
count__42943_42983 = G__42993;
i__42944_42984 = G__42994;
continue;
} else {
var temp__4657__auto___42995 = cljs.core.seq.call(null,seq__42941_42981);
if(temp__4657__auto___42995){
var seq__42941_42996__$1 = temp__4657__auto___42995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42941_42996__$1)){
var c__35155__auto___42997 = cljs.core.chunk_first.call(null,seq__42941_42996__$1);
var G__42998 = cljs.core.chunk_rest.call(null,seq__42941_42996__$1);
var G__42999 = c__35155__auto___42997;
var G__43000 = cljs.core.count.call(null,c__35155__auto___42997);
var G__43001 = (0);
seq__42941_42981 = G__42998;
chunk__42942_42982 = G__42999;
count__42943_42983 = G__43000;
i__42944_42984 = G__43001;
continue;
} else {
var vec__42950_43002 = cljs.core.first.call(null,seq__42941_42996__$1);
var name_43003 = cljs.core.nth.call(null,vec__42950_43002,(0),null);
var map__42953_43004 = cljs.core.nth.call(null,vec__42950_43002,(1),null);
var map__42953_43005__$1 = ((((!((map__42953_43004 == null)))?((((map__42953_43004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42953_43004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42953_43004):map__42953_43004);
var doc_43006 = cljs.core.get.call(null,map__42953_43005__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43007 = cljs.core.get.call(null,map__42953_43005__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43003);

cljs.core.println.call(null," ",arglists_43007);

if(cljs.core.truth_(doc_43006)){
cljs.core.println.call(null," ",doc_43006);
} else {
}

var G__43008 = cljs.core.next.call(null,seq__42941_42996__$1);
var G__43009 = null;
var G__43010 = (0);
var G__43011 = (0);
seq__42941_42981 = G__43008;
chunk__42942_42982 = G__43009;
count__42943_42983 = G__43010;
i__42944_42984 = G__43011;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__42955 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42956 = null;
var count__42957 = (0);
var i__42958 = (0);
while(true){
if((i__42958 < count__42957)){
var role = cljs.core._nth.call(null,chunk__42956,i__42958);
var temp__4657__auto___43012__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___43012__$1)){
var spec_43013 = temp__4657__auto___43012__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_43013));
} else {
}

var G__43014 = seq__42955;
var G__43015 = chunk__42956;
var G__43016 = count__42957;
var G__43017 = (i__42958 + (1));
seq__42955 = G__43014;
chunk__42956 = G__43015;
count__42957 = G__43016;
i__42958 = G__43017;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__42955);
if(temp__4657__auto____$1){
var seq__42955__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42955__$1)){
var c__35155__auto__ = cljs.core.chunk_first.call(null,seq__42955__$1);
var G__43018 = cljs.core.chunk_rest.call(null,seq__42955__$1);
var G__43019 = c__35155__auto__;
var G__43020 = cljs.core.count.call(null,c__35155__auto__);
var G__43021 = (0);
seq__42955 = G__43018;
chunk__42956 = G__43019;
count__42957 = G__43020;
i__42958 = G__43021;
continue;
} else {
var role = cljs.core.first.call(null,seq__42955__$1);
var temp__4657__auto___43022__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___43022__$2)){
var spec_43023 = temp__4657__auto___43022__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_43023));
} else {
}

var G__43024 = cljs.core.next.call(null,seq__42955__$1);
var G__43025 = null;
var G__43026 = (0);
var G__43027 = (0);
seq__42955 = G__43024;
chunk__42956 = G__43025;
count__42957 = G__43026;
i__42958 = G__43027;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1513020386686