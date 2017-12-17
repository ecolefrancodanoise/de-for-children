// Compiled by ClojureScript 1.9.473 {}
goog.provide('devtools.custom_formatters');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.format');
goog.require('devtools.util');
goog.require('goog.labs.userAgent.browser');
devtools.custom_formatters._STAR_installed_STAR_ = false;
devtools.custom_formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.custom_formatters._STAR_monitor_enabled_STAR_ = false;
devtools.custom_formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.custom_formatters.available_QMARK_ = (function devtools$custom_formatters$available_QMARK_(){
var and__34552__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__34552__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__34552__auto__;
}
});

/**
* @constructor
*/
devtools.custom_formatters.CLJSDevtoolsFormatter = (function (){
})

devtools.custom_formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.custom_formatters.CLJSDevtoolsFormatter.cljs$lang$type = true;

devtools.custom_formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.custom-formatters/CLJSDevtoolsFormatter";

devtools.custom_formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__35175__auto__,writer__35176__auto__,opt__35177__auto__){
return cljs.core._write.call(null,writer__35176__auto__,"devtools.custom-formatters/CLJSDevtoolsFormatter");
});

devtools.custom_formatters.__GT_CLJSDevtoolsFormatter = (function devtools$custom_formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.custom_formatters.CLJSDevtoolsFormatter());
});

devtools.custom_formatters.find_fn_in_debug_ns = (function devtools$custom_formatters$find_fn_in_debug_ns(fn_name){
try{return (window["devtools"]["debug"][fn_name]);
}catch (e39642){var _ = e39642;
return null;
}});
devtools.custom_formatters.monitor_api_call_if_avail = (function devtools$custom_formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__4655__auto__ = devtools.custom_formatters.find_fn_in_debug_ns.call(null,"monitor_api_call");
if(cljs.core.truth_(temp__4655__auto__)){
var monitor_api_call = temp__4655__auto__;
return monitor_api_call.call(null,name,api_call,args);
} else {
return cljs.core.apply.call(null,api_call,args);
}
});
devtools.custom_formatters.log_exception_if_avail = (function devtools$custom_formatters$log_exception_if_avail(var_args){
var args__35684__auto__ = [];
var len__35677__auto___39644 = arguments.length;
var i__35678__auto___39645 = (0);
while(true){
if((i__35678__auto___39645 < len__35677__auto___39644)){
args__35684__auto__.push((arguments[i__35678__auto___39645]));

var G__39646 = (i__35678__auto___39645 + (1));
i__35678__auto___39645 = G__39646;
continue;
} else {
}
break;
}

var argseq__35685__auto__ = ((((0) < args__35684__auto__.length))?(new cljs.core.IndexedSeq(args__35684__auto__.slice((0)),(0),null)):null);
return devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__35685__auto__);
});

devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4655__auto__ = devtools.custom_formatters.find_fn_in_debug_ns.call(null,"log_exception");
if(cljs.core.truth_(temp__4655__auto__)){
var log_exception = temp__4655__auto__;
return cljs.core.apply.call(null,log_exception,args);
} else {
return null;
}
});

devtools.custom_formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0);

devtools.custom_formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq39643){
return devtools.custom_formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39643));
});

devtools.custom_formatters.monitor_api_calls = (function devtools$custom_formatters$monitor_api_calls(name,api_call){
return (function() { 
var G__39647__delegate = function (args){
if(!(devtools.custom_formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
return devtools.custom_formatters.monitor_api_call_if_avail.call(null,name,api_call,args);
}
};
var G__39647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39648__i = 0, G__39648__a = new Array(arguments.length -  0);
while (G__39648__i < G__39648__a.length) {G__39648__a[G__39648__i] = arguments[G__39648__i + 0]; ++G__39648__i;}
  args = new cljs.core.IndexedSeq(G__39648__a,0);
} 
return G__39647__delegate.call(this,args);};
G__39647.cljs$lang$maxFixedArity = 0;
G__39647.cljs$lang$applyTo = (function (arglist__39649){
var args = cljs.core.seq(arglist__39649);
return G__39647__delegate(args);
});
G__39647.cljs$core$IFn$_invoke$arity$variadic = G__39647__delegate;
return G__39647;
})()
;
});
devtools.custom_formatters.sanitize = (function devtools$custom_formatters$sanitize(name,api_call){
return (function() { 
var G__39652__delegate = function (args){
if(!(devtools.custom_formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
try{return cljs.core.apply.call(null,api_call,args);
}catch (e39651){var e = e39651;
devtools.custom_formatters.log_exception_if_avail.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));

return null;
}}
};
var G__39652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39653__i = 0, G__39653__a = new Array(arguments.length -  0);
while (G__39653__i < G__39653__a.length) {G__39653__a[G__39653__i] = arguments[G__39653__i + 0]; ++G__39653__i;}
  args = new cljs.core.IndexedSeq(G__39653__a,0);
} 
return G__39652__delegate.call(this,args);};
G__39652.cljs$lang$maxFixedArity = 0;
G__39652.cljs$lang$applyTo = (function (arglist__39654){
var args = cljs.core.seq(arglist__39654);
return G__39652__delegate(args);
});
G__39652.cljs$core$IFn$_invoke$arity$variadic = G__39652__delegate;
return G__39652;
})()
;
});
devtools.custom_formatters.build_cljs_formatter = (function devtools$custom_formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.call(null,devtools.custom_formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.call(null,devtools.custom_formatters.sanitize,name);
cljs.core.comp.call(null,monitor,sanitizer).call(null,api_call);

return api_call;
});
var formatter = (new devtools.custom_formatters.CLJSDevtoolsFormatter());
var define_BANG_ = ((function (wrap,formatter){
return (function (name,fn){
return (formatter[name] = wrap.call(null,name,fn));
});})(wrap,formatter))
;
define_BANG_.call(null,"header",devtools.format.header_api_call);

define_BANG_.call(null,"hasBody",devtools.format.has_body_api_call);

define_BANG_.call(null,"body",devtools.format.body_api_call);

return formatter;
});
devtools.custom_formatters.is_ours_QMARK_ = (function devtools$custom_formatters$is_ours_QMARK_(o){
return (o instanceof devtools.custom_formatters.CLJSDevtoolsFormatter);
});
devtools.custom_formatters.present_QMARK_ = (function devtools$custom_formatters$present_QMARK_(){
var formatters = devtools.util.get_formatters_safe.call(null);
return cljs.core.boolean$.call(null,cljs.core.some.call(null,devtools.custom_formatters.is_ours_QMARK_,formatters));
});
devtools.custom_formatters.install_our_formatter_BANG_ = (function devtools$custom_formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.util.get_formatters_safe.call(null).slice();
formatters.push(formatter);

devtools.util.set_formatters_safe_BANG_.call(null,formatters);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"legacy-formatter","legacy-formatter",-1954119499)))){
return (window[devtools.custom_formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.custom_formatters.uninstall_our_formatters_BANG_ = (function devtools$custom_formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.call(null,devtools.custom_formatters.is_ours_QMARK_,cljs.core.vec.call(null,devtools.util.get_formatters_safe.call(null)));
var new_formatters_js = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:cljs.core.into_array.call(null,new_formatters));
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters_js);
});
devtools.custom_formatters.installed_QMARK_ = (function devtools$custom_formatters$installed_QMARK_(){
return devtools.custom_formatters._STAR_installed_STAR_;
});
devtools.custom_formatters.install_BANG_ = (function devtools$custom_formatters$install_BANG_(){
if(devtools.custom_formatters._STAR_installed_STAR_){
return null;
} else {
devtools.custom_formatters._STAR_installed_STAR_ = true;

devtools.custom_formatters.install_our_formatter_BANG_.call(null,devtools.custom_formatters.build_cljs_formatter.call(null));

return true;
}
});
devtools.custom_formatters.uninstall_BANG_ = (function devtools$custom_formatters$uninstall_BANG_(){
if(devtools.custom_formatters._STAR_installed_STAR_){
devtools.custom_formatters._STAR_installed_STAR_ = false;

return devtools.custom_formatters.uninstall_our_formatters_BANG_.call(null);
} else {
return null;
}
});

//# sourceMappingURL=custom_formatters.js.map?rel=1513021397921