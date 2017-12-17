// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.4-6";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args45084 = [];
var len__35449__auto___45087 = arguments.length;
var i__35450__auto___45088 = (0);
while(true){
if((i__35450__auto___45088 < len__35449__auto___45087)){
args45084.push((arguments[i__35450__auto___45088]));

var G__45089 = (i__35450__auto___45088 + (1));
i__35450__auto___45088 = G__45089;
continue;
} else {
}
break;
}

var G__45086 = args45084.length;
switch (G__45086) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45084.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__35456__auto__ = [];
var len__35449__auto___45092 = arguments.length;
var i__35450__auto___45093 = (0);
while(true){
if((i__35450__auto___45093 < len__35449__auto___45092)){
args__35456__auto__.push((arguments[i__35450__auto___45093]));

var G__45094 = (i__35450__auto___45093 + (1));
i__35450__auto___45093 = G__45094;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq45091){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45091));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__35456__auto__ = [];
var len__35449__auto___45096 = arguments.length;
var i__35450__auto___45097 = (0);
while(true){
if((i__35450__auto___45097 < len__35449__auto___45096)){
args__35456__auto__.push((arguments[i__35450__auto___45097]));

var G__45098 = (i__35450__auto___45097 + (1));
i__35450__auto___45097 = G__45098;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq45095){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45095));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__45099 = cljs.core._EQ_;
var expr__45100 = (function (){var or__34336__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e45103){if((e45103 instanceof Error)){
var e = e45103;
return false;
} else {
throw e45103;

}
}})();
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__45099.call(null,"true",expr__45100))){
return true;
} else {
if(cljs.core.truth_(pred__45099.call(null,"false",expr__45100))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__45100)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e45105){if((e45105 instanceof Error)){
var e = e45105;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e45105;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45106){
var map__45109 = p__45106;
var map__45109__$1 = ((((!((map__45109 == null)))?((((map__45109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45109):map__45109);
var message = cljs.core.get.call(null,map__45109__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45109__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__34336__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__34324__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__34324__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__34324__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__37440__auto___45271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___45271,ch){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___45271,ch){
return (function (state_45240){
var state_val_45241 = (state_45240[(1)]);
if((state_val_45241 === (7))){
var inst_45236 = (state_45240[(2)]);
var state_45240__$1 = state_45240;
var statearr_45242_45272 = state_45240__$1;
(statearr_45242_45272[(2)] = inst_45236);

(statearr_45242_45272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (1))){
var state_45240__$1 = state_45240;
var statearr_45243_45273 = state_45240__$1;
(statearr_45243_45273[(2)] = null);

(statearr_45243_45273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (4))){
var inst_45193 = (state_45240[(7)]);
var inst_45193__$1 = (state_45240[(2)]);
var state_45240__$1 = (function (){var statearr_45244 = state_45240;
(statearr_45244[(7)] = inst_45193__$1);

return statearr_45244;
})();
if(cljs.core.truth_(inst_45193__$1)){
var statearr_45245_45274 = state_45240__$1;
(statearr_45245_45274[(1)] = (5));

} else {
var statearr_45246_45275 = state_45240__$1;
(statearr_45246_45275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (15))){
var inst_45200 = (state_45240[(8)]);
var inst_45215 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45200);
var inst_45216 = cljs.core.first.call(null,inst_45215);
var inst_45217 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45216);
var inst_45218 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45217)].join('');
var inst_45219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45218);
var state_45240__$1 = state_45240;
var statearr_45247_45276 = state_45240__$1;
(statearr_45247_45276[(2)] = inst_45219);

(statearr_45247_45276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (13))){
var inst_45224 = (state_45240[(2)]);
var state_45240__$1 = state_45240;
var statearr_45248_45277 = state_45240__$1;
(statearr_45248_45277[(2)] = inst_45224);

(statearr_45248_45277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (6))){
var state_45240__$1 = state_45240;
var statearr_45249_45278 = state_45240__$1;
(statearr_45249_45278[(2)] = null);

(statearr_45249_45278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (17))){
var inst_45222 = (state_45240[(2)]);
var state_45240__$1 = state_45240;
var statearr_45250_45279 = state_45240__$1;
(statearr_45250_45279[(2)] = inst_45222);

(statearr_45250_45279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (3))){
var inst_45238 = (state_45240[(2)]);
var state_45240__$1 = state_45240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45240__$1,inst_45238);
} else {
if((state_val_45241 === (12))){
var inst_45199 = (state_45240[(9)]);
var inst_45213 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45199,opts);
var state_45240__$1 = state_45240;
if(cljs.core.truth_(inst_45213)){
var statearr_45251_45280 = state_45240__$1;
(statearr_45251_45280[(1)] = (15));

} else {
var statearr_45252_45281 = state_45240__$1;
(statearr_45252_45281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (2))){
var state_45240__$1 = state_45240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45240__$1,(4),ch);
} else {
if((state_val_45241 === (11))){
var inst_45200 = (state_45240[(8)]);
var inst_45205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45206 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45200);
var inst_45207 = cljs.core.async.timeout.call(null,(1000));
var inst_45208 = [inst_45206,inst_45207];
var inst_45209 = (new cljs.core.PersistentVector(null,2,(5),inst_45205,inst_45208,null));
var state_45240__$1 = state_45240;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45240__$1,(14),inst_45209);
} else {
if((state_val_45241 === (9))){
var inst_45200 = (state_45240[(8)]);
var inst_45226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45227 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45200);
var inst_45228 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45227);
var inst_45229 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45228)].join('');
var inst_45230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45229);
var state_45240__$1 = (function (){var statearr_45253 = state_45240;
(statearr_45253[(10)] = inst_45226);

return statearr_45253;
})();
var statearr_45254_45282 = state_45240__$1;
(statearr_45254_45282[(2)] = inst_45230);

(statearr_45254_45282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (5))){
var inst_45193 = (state_45240[(7)]);
var inst_45195 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45196 = (new cljs.core.PersistentArrayMap(null,2,inst_45195,null));
var inst_45197 = (new cljs.core.PersistentHashSet(null,inst_45196,null));
var inst_45198 = figwheel.client.focus_msgs.call(null,inst_45197,inst_45193);
var inst_45199 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45198);
var inst_45200 = cljs.core.first.call(null,inst_45198);
var inst_45201 = figwheel.client.autoload_QMARK_.call(null);
var state_45240__$1 = (function (){var statearr_45255 = state_45240;
(statearr_45255[(9)] = inst_45199);

(statearr_45255[(8)] = inst_45200);

return statearr_45255;
})();
if(cljs.core.truth_(inst_45201)){
var statearr_45256_45283 = state_45240__$1;
(statearr_45256_45283[(1)] = (8));

} else {
var statearr_45257_45284 = state_45240__$1;
(statearr_45257_45284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (14))){
var inst_45211 = (state_45240[(2)]);
var state_45240__$1 = state_45240;
var statearr_45258_45285 = state_45240__$1;
(statearr_45258_45285[(2)] = inst_45211);

(statearr_45258_45285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (16))){
var state_45240__$1 = state_45240;
var statearr_45259_45286 = state_45240__$1;
(statearr_45259_45286[(2)] = null);

(statearr_45259_45286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (10))){
var inst_45232 = (state_45240[(2)]);
var state_45240__$1 = (function (){var statearr_45260 = state_45240;
(statearr_45260[(11)] = inst_45232);

return statearr_45260;
})();
var statearr_45261_45287 = state_45240__$1;
(statearr_45261_45287[(2)] = null);

(statearr_45261_45287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45241 === (8))){
var inst_45199 = (state_45240[(9)]);
var inst_45203 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45199,opts);
var state_45240__$1 = state_45240;
if(cljs.core.truth_(inst_45203)){
var statearr_45262_45288 = state_45240__$1;
(statearr_45262_45288[(1)] = (11));

} else {
var statearr_45263_45289 = state_45240__$1;
(statearr_45263_45289[(1)] = (12));

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
});})(c__37440__auto___45271,ch))
;
return ((function (switch__37328__auto__,c__37440__auto___45271,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37329__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37329__auto____0 = (function (){
var statearr_45267 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45267[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37329__auto__);

(statearr_45267[(1)] = (1));

return statearr_45267;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37329__auto____1 = (function (state_45240){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_45240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e45268){if((e45268 instanceof Object)){
var ex__37332__auto__ = e45268;
var statearr_45269_45290 = state_45240;
(statearr_45269_45290[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45291 = state_45240;
state_45240 = G__45291;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37329__auto__ = function(state_45240){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37329__auto____1.call(this,state_45240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37329__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37329__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___45271,ch))
})();
var state__37442__auto__ = (function (){var statearr_45270 = f__37441__auto__.call(null);
(statearr_45270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___45271);

return statearr_45270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___45271,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45292_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45292_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_45295 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45295){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e45294){if((e45294 instanceof Error)){
var e = e45294;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45295], null));
} else {
var e = e45294;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_45295))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45296){
var map__45305 = p__45296;
var map__45305__$1 = ((((!((map__45305 == null)))?((((map__45305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45305):map__45305);
var opts = map__45305__$1;
var build_id = cljs.core.get.call(null,map__45305__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45305,map__45305__$1,opts,build_id){
return (function (p__45307){
var vec__45308 = p__45307;
var seq__45309 = cljs.core.seq.call(null,vec__45308);
var first__45310 = cljs.core.first.call(null,seq__45309);
var seq__45309__$1 = cljs.core.next.call(null,seq__45309);
var map__45311 = first__45310;
var map__45311__$1 = ((((!((map__45311 == null)))?((((map__45311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45311):map__45311);
var msg = map__45311__$1;
var msg_name = cljs.core.get.call(null,map__45311__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45309__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45308,seq__45309,first__45310,seq__45309__$1,map__45311,map__45311__$1,msg,msg_name,_,map__45305,map__45305__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45308,seq__45309,first__45310,seq__45309__$1,map__45311,map__45311__$1,msg,msg_name,_,map__45305,map__45305__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45305,map__45305__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45319){
var vec__45320 = p__45319;
var seq__45321 = cljs.core.seq.call(null,vec__45320);
var first__45322 = cljs.core.first.call(null,seq__45321);
var seq__45321__$1 = cljs.core.next.call(null,seq__45321);
var map__45323 = first__45322;
var map__45323__$1 = ((((!((map__45323 == null)))?((((map__45323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45323):map__45323);
var msg = map__45323__$1;
var msg_name = cljs.core.get.call(null,map__45323__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45321__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45325){
var map__45337 = p__45325;
var map__45337__$1 = ((((!((map__45337 == null)))?((((map__45337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45337):map__45337);
var on_compile_warning = cljs.core.get.call(null,map__45337__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45337__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45337,map__45337__$1,on_compile_warning,on_compile_fail){
return (function (p__45339){
var vec__45340 = p__45339;
var seq__45341 = cljs.core.seq.call(null,vec__45340);
var first__45342 = cljs.core.first.call(null,seq__45341);
var seq__45341__$1 = cljs.core.next.call(null,seq__45341);
var map__45343 = first__45342;
var map__45343__$1 = ((((!((map__45343 == null)))?((((map__45343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45343):map__45343);
var msg = map__45343__$1;
var msg_name = cljs.core.get.call(null,map__45343__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45341__$1;
var pred__45345 = cljs.core._EQ_;
var expr__45346 = msg_name;
if(cljs.core.truth_(pred__45345.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45346))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45345.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45346))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45337,map__45337__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__,msg_hist,msg_names,msg){
return (function (state_45554){
var state_val_45555 = (state_45554[(1)]);
if((state_val_45555 === (7))){
var inst_45482 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
if(cljs.core.truth_(inst_45482)){
var statearr_45556_45602 = state_45554__$1;
(statearr_45556_45602[(1)] = (8));

} else {
var statearr_45557_45603 = state_45554__$1;
(statearr_45557_45603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (20))){
var inst_45548 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45558_45604 = state_45554__$1;
(statearr_45558_45604[(2)] = inst_45548);

(statearr_45558_45604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (27))){
var inst_45544 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45559_45605 = state_45554__$1;
(statearr_45559_45605[(2)] = inst_45544);

(statearr_45559_45605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (1))){
var inst_45475 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45554__$1 = state_45554;
if(cljs.core.truth_(inst_45475)){
var statearr_45560_45606 = state_45554__$1;
(statearr_45560_45606[(1)] = (2));

} else {
var statearr_45561_45607 = state_45554__$1;
(statearr_45561_45607[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (24))){
var inst_45546 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45562_45608 = state_45554__$1;
(statearr_45562_45608[(2)] = inst_45546);

(statearr_45562_45608[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (4))){
var inst_45552 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45554__$1,inst_45552);
} else {
if((state_val_45555 === (15))){
var inst_45550 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45563_45609 = state_45554__$1;
(statearr_45563_45609[(2)] = inst_45550);

(statearr_45563_45609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (21))){
var inst_45509 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45564_45610 = state_45554__$1;
(statearr_45564_45610[(2)] = inst_45509);

(statearr_45564_45610[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (31))){
var inst_45533 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45554__$1 = state_45554;
if(cljs.core.truth_(inst_45533)){
var statearr_45565_45611 = state_45554__$1;
(statearr_45565_45611[(1)] = (34));

} else {
var statearr_45566_45612 = state_45554__$1;
(statearr_45566_45612[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (32))){
var inst_45542 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45567_45613 = state_45554__$1;
(statearr_45567_45613[(2)] = inst_45542);

(statearr_45567_45613[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (33))){
var inst_45531 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45568_45614 = state_45554__$1;
(statearr_45568_45614[(2)] = inst_45531);

(statearr_45568_45614[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (13))){
var inst_45496 = figwheel.client.heads_up.clear.call(null);
var state_45554__$1 = state_45554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45554__$1,(16),inst_45496);
} else {
if((state_val_45555 === (22))){
var inst_45513 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45514 = figwheel.client.heads_up.append_warning_message.call(null,inst_45513);
var state_45554__$1 = state_45554;
var statearr_45569_45615 = state_45554__$1;
(statearr_45569_45615[(2)] = inst_45514);

(statearr_45569_45615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (36))){
var inst_45540 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45570_45616 = state_45554__$1;
(statearr_45570_45616[(2)] = inst_45540);

(statearr_45570_45616[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (29))){
var inst_45524 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45571_45617 = state_45554__$1;
(statearr_45571_45617[(2)] = inst_45524);

(statearr_45571_45617[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (6))){
var inst_45477 = (state_45554[(7)]);
var state_45554__$1 = state_45554;
var statearr_45572_45618 = state_45554__$1;
(statearr_45572_45618[(2)] = inst_45477);

(statearr_45572_45618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (28))){
var inst_45520 = (state_45554[(2)]);
var inst_45521 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45522 = figwheel.client.heads_up.display_warning.call(null,inst_45521);
var state_45554__$1 = (function (){var statearr_45573 = state_45554;
(statearr_45573[(8)] = inst_45520);

return statearr_45573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45554__$1,(29),inst_45522);
} else {
if((state_val_45555 === (25))){
var inst_45518 = figwheel.client.heads_up.clear.call(null);
var state_45554__$1 = state_45554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45554__$1,(28),inst_45518);
} else {
if((state_val_45555 === (34))){
var inst_45535 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45554__$1 = state_45554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45554__$1,(37),inst_45535);
} else {
if((state_val_45555 === (17))){
var inst_45502 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45574_45619 = state_45554__$1;
(statearr_45574_45619[(2)] = inst_45502);

(statearr_45574_45619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (3))){
var inst_45494 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45554__$1 = state_45554;
if(cljs.core.truth_(inst_45494)){
var statearr_45575_45620 = state_45554__$1;
(statearr_45575_45620[(1)] = (13));

} else {
var statearr_45576_45621 = state_45554__$1;
(statearr_45576_45621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (12))){
var inst_45490 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45577_45622 = state_45554__$1;
(statearr_45577_45622[(2)] = inst_45490);

(statearr_45577_45622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (2))){
var inst_45477 = (state_45554[(7)]);
var inst_45477__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45554__$1 = (function (){var statearr_45578 = state_45554;
(statearr_45578[(7)] = inst_45477__$1);

return statearr_45578;
})();
if(cljs.core.truth_(inst_45477__$1)){
var statearr_45579_45623 = state_45554__$1;
(statearr_45579_45623[(1)] = (5));

} else {
var statearr_45580_45624 = state_45554__$1;
(statearr_45580_45624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (23))){
var inst_45516 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45554__$1 = state_45554;
if(cljs.core.truth_(inst_45516)){
var statearr_45581_45625 = state_45554__$1;
(statearr_45581_45625[(1)] = (25));

} else {
var statearr_45582_45626 = state_45554__$1;
(statearr_45582_45626[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (35))){
var state_45554__$1 = state_45554;
var statearr_45583_45627 = state_45554__$1;
(statearr_45583_45627[(2)] = null);

(statearr_45583_45627[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (19))){
var inst_45511 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45554__$1 = state_45554;
if(cljs.core.truth_(inst_45511)){
var statearr_45584_45628 = state_45554__$1;
(statearr_45584_45628[(1)] = (22));

} else {
var statearr_45585_45629 = state_45554__$1;
(statearr_45585_45629[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (11))){
var inst_45486 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45586_45630 = state_45554__$1;
(statearr_45586_45630[(2)] = inst_45486);

(statearr_45586_45630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (9))){
var inst_45488 = figwheel.client.heads_up.clear.call(null);
var state_45554__$1 = state_45554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45554__$1,(12),inst_45488);
} else {
if((state_val_45555 === (5))){
var inst_45479 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45554__$1 = state_45554;
var statearr_45587_45631 = state_45554__$1;
(statearr_45587_45631[(2)] = inst_45479);

(statearr_45587_45631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (14))){
var inst_45504 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45554__$1 = state_45554;
if(cljs.core.truth_(inst_45504)){
var statearr_45588_45632 = state_45554__$1;
(statearr_45588_45632[(1)] = (18));

} else {
var statearr_45589_45633 = state_45554__$1;
(statearr_45589_45633[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (26))){
var inst_45526 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45554__$1 = state_45554;
if(cljs.core.truth_(inst_45526)){
var statearr_45590_45634 = state_45554__$1;
(statearr_45590_45634[(1)] = (30));

} else {
var statearr_45591_45635 = state_45554__$1;
(statearr_45591_45635[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (16))){
var inst_45498 = (state_45554[(2)]);
var inst_45499 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45500 = figwheel.client.heads_up.display_exception.call(null,inst_45499);
var state_45554__$1 = (function (){var statearr_45592 = state_45554;
(statearr_45592[(9)] = inst_45498);

return statearr_45592;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45554__$1,(17),inst_45500);
} else {
if((state_val_45555 === (30))){
var inst_45528 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45529 = figwheel.client.heads_up.display_warning.call(null,inst_45528);
var state_45554__$1 = state_45554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45554__$1,(33),inst_45529);
} else {
if((state_val_45555 === (10))){
var inst_45492 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45593_45636 = state_45554__$1;
(statearr_45593_45636[(2)] = inst_45492);

(statearr_45593_45636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (18))){
var inst_45506 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45507 = figwheel.client.heads_up.display_exception.call(null,inst_45506);
var state_45554__$1 = state_45554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45554__$1,(21),inst_45507);
} else {
if((state_val_45555 === (37))){
var inst_45537 = (state_45554[(2)]);
var state_45554__$1 = state_45554;
var statearr_45594_45637 = state_45554__$1;
(statearr_45594_45637[(2)] = inst_45537);

(statearr_45594_45637[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45555 === (8))){
var inst_45484 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45554__$1 = state_45554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45554__$1,(11),inst_45484);
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
});})(c__37440__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37328__auto__,c__37440__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto____0 = (function (){
var statearr_45598 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45598[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto__);

(statearr_45598[(1)] = (1));

return statearr_45598;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto____1 = (function (state_45554){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_45554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e45599){if((e45599 instanceof Object)){
var ex__37332__auto__ = e45599;
var statearr_45600_45638 = state_45554;
(statearr_45600_45638[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45639 = state_45554;
state_45554 = G__45639;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto__ = function(state_45554){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto____1.call(this,state_45554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__,msg_hist,msg_names,msg))
})();
var state__37442__auto__ = (function (){var statearr_45601 = f__37441__auto__.call(null);
(statearr_45601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_45601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__,msg_hist,msg_names,msg))
);

return c__37440__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37440__auto___45702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto___45702,ch){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto___45702,ch){
return (function (state_45685){
var state_val_45686 = (state_45685[(1)]);
if((state_val_45686 === (1))){
var state_45685__$1 = state_45685;
var statearr_45687_45703 = state_45685__$1;
(statearr_45687_45703[(2)] = null);

(statearr_45687_45703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45686 === (2))){
var state_45685__$1 = state_45685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45685__$1,(4),ch);
} else {
if((state_val_45686 === (3))){
var inst_45683 = (state_45685[(2)]);
var state_45685__$1 = state_45685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45685__$1,inst_45683);
} else {
if((state_val_45686 === (4))){
var inst_45673 = (state_45685[(7)]);
var inst_45673__$1 = (state_45685[(2)]);
var state_45685__$1 = (function (){var statearr_45688 = state_45685;
(statearr_45688[(7)] = inst_45673__$1);

return statearr_45688;
})();
if(cljs.core.truth_(inst_45673__$1)){
var statearr_45689_45704 = state_45685__$1;
(statearr_45689_45704[(1)] = (5));

} else {
var statearr_45690_45705 = state_45685__$1;
(statearr_45690_45705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45686 === (5))){
var inst_45673 = (state_45685[(7)]);
var inst_45675 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_45673);
var state_45685__$1 = state_45685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45685__$1,(8),inst_45675);
} else {
if((state_val_45686 === (6))){
var state_45685__$1 = state_45685;
var statearr_45691_45706 = state_45685__$1;
(statearr_45691_45706[(2)] = null);

(statearr_45691_45706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45686 === (7))){
var inst_45681 = (state_45685[(2)]);
var state_45685__$1 = state_45685;
var statearr_45692_45707 = state_45685__$1;
(statearr_45692_45707[(2)] = inst_45681);

(statearr_45692_45707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45686 === (8))){
var inst_45677 = (state_45685[(2)]);
var state_45685__$1 = (function (){var statearr_45693 = state_45685;
(statearr_45693[(8)] = inst_45677);

return statearr_45693;
})();
var statearr_45694_45708 = state_45685__$1;
(statearr_45694_45708[(2)] = null);

(statearr_45694_45708[(1)] = (2));


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
});})(c__37440__auto___45702,ch))
;
return ((function (switch__37328__auto__,c__37440__auto___45702,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37329__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37329__auto____0 = (function (){
var statearr_45698 = [null,null,null,null,null,null,null,null,null];
(statearr_45698[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37329__auto__);

(statearr_45698[(1)] = (1));

return statearr_45698;
});
var figwheel$client$heads_up_plugin_$_state_machine__37329__auto____1 = (function (state_45685){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_45685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e45699){if((e45699 instanceof Object)){
var ex__37332__auto__ = e45699;
var statearr_45700_45709 = state_45685;
(statearr_45700_45709[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45710 = state_45685;
state_45685 = G__45710;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37329__auto__ = function(state_45685){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37329__auto____1.call(this,state_45685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37329__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37329__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto___45702,ch))
})();
var state__37442__auto__ = (function (){var statearr_45701 = f__37441__auto__.call(null);
(statearr_45701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto___45702);

return statearr_45701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto___45702,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__){
return (function (state_45731){
var state_val_45732 = (state_45731[(1)]);
if((state_val_45732 === (1))){
var inst_45726 = cljs.core.async.timeout.call(null,(3000));
var state_45731__$1 = state_45731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45731__$1,(2),inst_45726);
} else {
if((state_val_45732 === (2))){
var inst_45728 = (state_45731[(2)]);
var inst_45729 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_45731__$1 = (function (){var statearr_45733 = state_45731;
(statearr_45733[(7)] = inst_45728);

return statearr_45733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45731__$1,inst_45729);
} else {
return null;
}
}
});})(c__37440__auto__))
;
return ((function (switch__37328__auto__,c__37440__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37329__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37329__auto____0 = (function (){
var statearr_45737 = [null,null,null,null,null,null,null,null];
(statearr_45737[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37329__auto__);

(statearr_45737[(1)] = (1));

return statearr_45737;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37329__auto____1 = (function (state_45731){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_45731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e45738){if((e45738 instanceof Object)){
var ex__37332__auto__ = e45738;
var statearr_45739_45741 = state_45731;
(statearr_45739_45741[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45742 = state_45731;
state_45731 = G__45742;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37329__auto__ = function(state_45731){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37329__auto____1.call(this,state_45731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37329__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37329__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__))
})();
var state__37442__auto__ = (function (){var statearr_45740 = f__37441__auto__.call(null);
(statearr_45740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_45740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__))
);

return c__37440__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__,figwheel_version,temp__4657__auto__){
return (function (state_45765){
var state_val_45766 = (state_45765[(1)]);
if((state_val_45766 === (1))){
var inst_45759 = cljs.core.async.timeout.call(null,(2000));
var state_45765__$1 = state_45765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45765__$1,(2),inst_45759);
} else {
if((state_val_45766 === (2))){
var inst_45761 = (state_45765[(2)]);
var inst_45762 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!")].join('');
var inst_45763 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_45762);
var state_45765__$1 = (function (){var statearr_45767 = state_45765;
(statearr_45767[(7)] = inst_45761);

return statearr_45767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45765__$1,inst_45763);
} else {
return null;
}
}
});})(c__37440__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__37328__auto__,c__37440__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto____0 = (function (){
var statearr_45771 = [null,null,null,null,null,null,null,null];
(statearr_45771[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto__);

(statearr_45771[(1)] = (1));

return statearr_45771;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto____1 = (function (state_45765){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_45765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e45772){if((e45772 instanceof Object)){
var ex__37332__auto__ = e45772;
var statearr_45773_45775 = state_45765;
(statearr_45773_45775[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45776 = state_45765;
state_45765 = G__45776;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto__ = function(state_45765){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto____1.call(this,state_45765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__,figwheel_version,temp__4657__auto__))
})();
var state__37442__auto__ = (function (){var statearr_45774 = f__37441__auto__.call(null);
(statearr_45774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_45774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__,figwheel_version,temp__4657__auto__))
);

return c__37440__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__45777){
var map__45781 = p__45777;
var map__45781__$1 = ((((!((map__45781 == null)))?((((map__45781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45781):map__45781);
var file = cljs.core.get.call(null,map__45781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__45781__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__45781__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__45783 = "";
var G__45783__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45783),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__45783);
var G__45783__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45783__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__45783__$1);
if(cljs.core.truth_((function (){var and__34324__auto__ = line;
if(cljs.core.truth_(and__34324__auto__)){
return column;
} else {
return and__34324__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45783__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__45783__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__45784){
var map__45791 = p__45784;
var map__45791__$1 = ((((!((map__45791 == null)))?((((map__45791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45791):map__45791);
var ed = map__45791__$1;
var formatted_exception = cljs.core.get.call(null,map__45791__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__45791__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__45791__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__45793_45797 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__45794_45798 = null;
var count__45795_45799 = (0);
var i__45796_45800 = (0);
while(true){
if((i__45796_45800 < count__45795_45799)){
var msg_45801 = cljs.core._nth.call(null,chunk__45794_45798,i__45796_45800);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45801);

var G__45802 = seq__45793_45797;
var G__45803 = chunk__45794_45798;
var G__45804 = count__45795_45799;
var G__45805 = (i__45796_45800 + (1));
seq__45793_45797 = G__45802;
chunk__45794_45798 = G__45803;
count__45795_45799 = G__45804;
i__45796_45800 = G__45805;
continue;
} else {
var temp__4657__auto___45806 = cljs.core.seq.call(null,seq__45793_45797);
if(temp__4657__auto___45806){
var seq__45793_45807__$1 = temp__4657__auto___45806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45793_45807__$1)){
var c__35155__auto___45808 = cljs.core.chunk_first.call(null,seq__45793_45807__$1);
var G__45809 = cljs.core.chunk_rest.call(null,seq__45793_45807__$1);
var G__45810 = c__35155__auto___45808;
var G__45811 = cljs.core.count.call(null,c__35155__auto___45808);
var G__45812 = (0);
seq__45793_45797 = G__45809;
chunk__45794_45798 = G__45810;
count__45795_45799 = G__45811;
i__45796_45800 = G__45812;
continue;
} else {
var msg_45813 = cljs.core.first.call(null,seq__45793_45807__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45813);

var G__45814 = cljs.core.next.call(null,seq__45793_45807__$1);
var G__45815 = null;
var G__45816 = (0);
var G__45817 = (0);
seq__45793_45797 = G__45814;
chunk__45794_45798 = G__45815;
count__45795_45799 = G__45816;
i__45796_45800 = G__45817;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__45818){
var map__45821 = p__45818;
var map__45821__$1 = ((((!((map__45821 == null)))?((((map__45821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45821):map__45821);
var w = map__45821__$1;
var message = cljs.core.get.call(null,map__45821__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__34324__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__34324__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__34324__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__45833 = cljs.core.seq.call(null,plugins);
var chunk__45834 = null;
var count__45835 = (0);
var i__45836 = (0);
while(true){
if((i__45836 < count__45835)){
var vec__45837 = cljs.core._nth.call(null,chunk__45834,i__45836);
var k = cljs.core.nth.call(null,vec__45837,(0),null);
var plugin = cljs.core.nth.call(null,vec__45837,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45843 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45833,chunk__45834,count__45835,i__45836,pl_45843,vec__45837,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45843.call(null,msg_hist);
});})(seq__45833,chunk__45834,count__45835,i__45836,pl_45843,vec__45837,k,plugin))
);
} else {
}

var G__45844 = seq__45833;
var G__45845 = chunk__45834;
var G__45846 = count__45835;
var G__45847 = (i__45836 + (1));
seq__45833 = G__45844;
chunk__45834 = G__45845;
count__45835 = G__45846;
i__45836 = G__45847;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45833);
if(temp__4657__auto__){
var seq__45833__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45833__$1)){
var c__35155__auto__ = cljs.core.chunk_first.call(null,seq__45833__$1);
var G__45848 = cljs.core.chunk_rest.call(null,seq__45833__$1);
var G__45849 = c__35155__auto__;
var G__45850 = cljs.core.count.call(null,c__35155__auto__);
var G__45851 = (0);
seq__45833 = G__45848;
chunk__45834 = G__45849;
count__45835 = G__45850;
i__45836 = G__45851;
continue;
} else {
var vec__45840 = cljs.core.first.call(null,seq__45833__$1);
var k = cljs.core.nth.call(null,vec__45840,(0),null);
var plugin = cljs.core.nth.call(null,vec__45840,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45852 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45833,chunk__45834,count__45835,i__45836,pl_45852,vec__45840,k,plugin,seq__45833__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45852.call(null,msg_hist);
});})(seq__45833,chunk__45834,count__45835,i__45836,pl_45852,vec__45840,k,plugin,seq__45833__$1,temp__4657__auto__))
);
} else {
}

var G__45853 = cljs.core.next.call(null,seq__45833__$1);
var G__45854 = null;
var G__45855 = (0);
var G__45856 = (0);
seq__45833 = G__45853;
chunk__45834 = G__45854;
count__45835 = G__45855;
i__45836 = G__45856;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args45857 = [];
var len__35449__auto___45864 = arguments.length;
var i__35450__auto___45865 = (0);
while(true){
if((i__35450__auto___45865 < len__35449__auto___45864)){
args45857.push((arguments[i__35450__auto___45865]));

var G__45866 = (i__35450__auto___45865 + (1));
i__35450__auto___45865 = G__45866;
continue;
} else {
}
break;
}

var G__45859 = args45857.length;
switch (G__45859) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45857.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__45860_45868 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__45861_45869 = null;
var count__45862_45870 = (0);
var i__45863_45871 = (0);
while(true){
if((i__45863_45871 < count__45862_45870)){
var msg_45872 = cljs.core._nth.call(null,chunk__45861_45869,i__45863_45871);
figwheel.client.socket.handle_incoming_message.call(null,msg_45872);

var G__45873 = seq__45860_45868;
var G__45874 = chunk__45861_45869;
var G__45875 = count__45862_45870;
var G__45876 = (i__45863_45871 + (1));
seq__45860_45868 = G__45873;
chunk__45861_45869 = G__45874;
count__45862_45870 = G__45875;
i__45863_45871 = G__45876;
continue;
} else {
var temp__4657__auto___45877 = cljs.core.seq.call(null,seq__45860_45868);
if(temp__4657__auto___45877){
var seq__45860_45878__$1 = temp__4657__auto___45877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45860_45878__$1)){
var c__35155__auto___45879 = cljs.core.chunk_first.call(null,seq__45860_45878__$1);
var G__45880 = cljs.core.chunk_rest.call(null,seq__45860_45878__$1);
var G__45881 = c__35155__auto___45879;
var G__45882 = cljs.core.count.call(null,c__35155__auto___45879);
var G__45883 = (0);
seq__45860_45868 = G__45880;
chunk__45861_45869 = G__45881;
count__45862_45870 = G__45882;
i__45863_45871 = G__45883;
continue;
} else {
var msg_45884 = cljs.core.first.call(null,seq__45860_45878__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_45884);

var G__45885 = cljs.core.next.call(null,seq__45860_45878__$1);
var G__45886 = null;
var G__45887 = (0);
var G__45888 = (0);
seq__45860_45868 = G__45885;
chunk__45861_45869 = G__45886;
count__45862_45870 = G__45887;
i__45863_45871 = G__45888;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__35456__auto__ = [];
var len__35449__auto___45893 = arguments.length;
var i__35450__auto___45894 = (0);
while(true){
if((i__35450__auto___45894 < len__35449__auto___45893)){
args__35456__auto__.push((arguments[i__35450__auto___45894]));

var G__45895 = (i__35450__auto___45894 + (1));
i__35450__auto___45894 = G__45895;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((0) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35457__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45890){
var map__45891 = p__45890;
var map__45891__$1 = ((((!((map__45891 == null)))?((((map__45891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45891):map__45891);
var opts = map__45891__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45889){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45889));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e45897){if((e45897 instanceof Error)){
var e = e45897;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e45897;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__45901){
var map__45902 = p__45901;
var map__45902__$1 = ((((!((map__45902 == null)))?((((map__45902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45902):map__45902);
var msg_name = cljs.core.get.call(null,map__45902__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513020390021