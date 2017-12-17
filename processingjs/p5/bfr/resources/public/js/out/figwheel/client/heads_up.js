// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__35456__auto__ = [];
var len__35449__auto___44791 = arguments.length;
var i__35450__auto___44792 = (0);
while(true){
if((i__35450__auto___44792 < len__35449__auto___44791)){
args__35456__auto__.push((arguments[i__35450__auto___44792]));

var G__44793 = (i__35450__auto___44792 + (1));
i__35450__auto___44792 = G__44793;
continue;
} else {
}
break;
}

var argseq__35457__auto__ = ((((2) < args__35456__auto__.length))?(new cljs.core.IndexedSeq(args__35456__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35457__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__44783_44794 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__44784_44795 = null;
var count__44785_44796 = (0);
var i__44786_44797 = (0);
while(true){
if((i__44786_44797 < count__44785_44796)){
var k_44798 = cljs.core._nth.call(null,chunk__44784_44795,i__44786_44797);
e.setAttribute(cljs.core.name.call(null,k_44798),cljs.core.get.call(null,attrs,k_44798));

var G__44799 = seq__44783_44794;
var G__44800 = chunk__44784_44795;
var G__44801 = count__44785_44796;
var G__44802 = (i__44786_44797 + (1));
seq__44783_44794 = G__44799;
chunk__44784_44795 = G__44800;
count__44785_44796 = G__44801;
i__44786_44797 = G__44802;
continue;
} else {
var temp__4657__auto___44803 = cljs.core.seq.call(null,seq__44783_44794);
if(temp__4657__auto___44803){
var seq__44783_44804__$1 = temp__4657__auto___44803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44783_44804__$1)){
var c__35155__auto___44805 = cljs.core.chunk_first.call(null,seq__44783_44804__$1);
var G__44806 = cljs.core.chunk_rest.call(null,seq__44783_44804__$1);
var G__44807 = c__35155__auto___44805;
var G__44808 = cljs.core.count.call(null,c__35155__auto___44805);
var G__44809 = (0);
seq__44783_44794 = G__44806;
chunk__44784_44795 = G__44807;
count__44785_44796 = G__44808;
i__44786_44797 = G__44809;
continue;
} else {
var k_44810 = cljs.core.first.call(null,seq__44783_44804__$1);
e.setAttribute(cljs.core.name.call(null,k_44810),cljs.core.get.call(null,attrs,k_44810));

var G__44811 = cljs.core.next.call(null,seq__44783_44804__$1);
var G__44812 = null;
var G__44813 = (0);
var G__44814 = (0);
seq__44783_44794 = G__44811;
chunk__44784_44795 = G__44812;
count__44785_44796 = G__44813;
i__44786_44797 = G__44814;
continue;
}
} else {
}
}
break;
}

var seq__44787_44815 = cljs.core.seq.call(null,children);
var chunk__44788_44816 = null;
var count__44789_44817 = (0);
var i__44790_44818 = (0);
while(true){
if((i__44790_44818 < count__44789_44817)){
var ch_44819 = cljs.core._nth.call(null,chunk__44788_44816,i__44790_44818);
e.appendChild(ch_44819);

var G__44820 = seq__44787_44815;
var G__44821 = chunk__44788_44816;
var G__44822 = count__44789_44817;
var G__44823 = (i__44790_44818 + (1));
seq__44787_44815 = G__44820;
chunk__44788_44816 = G__44821;
count__44789_44817 = G__44822;
i__44790_44818 = G__44823;
continue;
} else {
var temp__4657__auto___44824 = cljs.core.seq.call(null,seq__44787_44815);
if(temp__4657__auto___44824){
var seq__44787_44825__$1 = temp__4657__auto___44824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44787_44825__$1)){
var c__35155__auto___44826 = cljs.core.chunk_first.call(null,seq__44787_44825__$1);
var G__44827 = cljs.core.chunk_rest.call(null,seq__44787_44825__$1);
var G__44828 = c__35155__auto___44826;
var G__44829 = cljs.core.count.call(null,c__35155__auto___44826);
var G__44830 = (0);
seq__44787_44815 = G__44827;
chunk__44788_44816 = G__44828;
count__44789_44817 = G__44829;
i__44790_44818 = G__44830;
continue;
} else {
var ch_44831 = cljs.core.first.call(null,seq__44787_44825__$1);
e.appendChild(ch_44831);

var G__44832 = cljs.core.next.call(null,seq__44787_44825__$1);
var G__44833 = null;
var G__44834 = (0);
var G__44835 = (0);
seq__44787_44815 = G__44832;
chunk__44788_44816 = G__44833;
count__44789_44817 = G__44834;
i__44790_44818 = G__44835;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq44780){
var G__44781 = cljs.core.first.call(null,seq44780);
var seq44780__$1 = cljs.core.next.call(null,seq44780);
var G__44782 = cljs.core.first.call(null,seq44780__$1);
var seq44780__$2 = cljs.core.next.call(null,seq44780__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__44781,G__44782,seq44780__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__35269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35273__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__35269__auto__,prefer_table__35270__auto__,method_cache__35271__auto__,cached_hierarchy__35272__auto__,hierarchy__35273__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__35269__auto__,prefer_table__35270__auto__,method_cache__35271__auto__,cached_hierarchy__35272__auto__,hierarchy__35273__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35273__auto__,method_table__35269__auto__,prefer_table__35270__auto__,method_cache__35271__auto__,cached_hierarchy__35272__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_44836 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;")].join('')], null));
el_44836.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_44836.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_44836.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_44836);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__44837,st_map){
var map__44844 = p__44837;
var map__44844__$1 = ((((!((map__44844 == null)))?((((map__44844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44844):map__44844);
var container_el = cljs.core.get.call(null,map__44844__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__44844,map__44844__$1,container_el){
return (function (p__44846){
var vec__44847 = p__44846;
var k = cljs.core.nth.call(null,vec__44847,(0),null);
var v = cljs.core.nth.call(null,vec__44847,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__44844,map__44844__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__44850,dom_str){
var map__44853 = p__44850;
var map__44853__$1 = ((((!((map__44853 == null)))?((((map__44853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44853):map__44853);
var c = map__44853__$1;
var content_area_el = cljs.core.get.call(null,map__44853__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__44855){
var map__44858 = p__44855;
var map__44858__$1 = ((((!((map__44858 == null)))?((((map__44858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44858):map__44858);
var content_area_el = cljs.core.get.call(null,map__44858__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__){
return (function (state_44901){
var state_val_44902 = (state_44901[(1)]);
if((state_val_44902 === (1))){
var inst_44886 = (state_44901[(7)]);
var inst_44886__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_44887 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_44888 = ["10px","10px","100%","68px","1.0"];
var inst_44889 = cljs.core.PersistentHashMap.fromArrays(inst_44887,inst_44888);
var inst_44890 = cljs.core.merge.call(null,inst_44889,style);
var inst_44891 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44886__$1,inst_44890);
var inst_44892 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_44886__$1,msg);
var inst_44893 = cljs.core.async.timeout.call(null,(300));
var state_44901__$1 = (function (){var statearr_44903 = state_44901;
(statearr_44903[(8)] = inst_44892);

(statearr_44903[(9)] = inst_44891);

(statearr_44903[(7)] = inst_44886__$1);

return statearr_44903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44901__$1,(2),inst_44893);
} else {
if((state_val_44902 === (2))){
var inst_44886 = (state_44901[(7)]);
var inst_44895 = (state_44901[(2)]);
var inst_44896 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_44897 = ["auto"];
var inst_44898 = cljs.core.PersistentHashMap.fromArrays(inst_44896,inst_44897);
var inst_44899 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44886,inst_44898);
var state_44901__$1 = (function (){var statearr_44904 = state_44901;
(statearr_44904[(10)] = inst_44895);

return statearr_44904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44901__$1,inst_44899);
} else {
return null;
}
}
});})(c__37440__auto__))
;
return ((function (switch__37328__auto__,c__37440__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto____0 = (function (){
var statearr_44908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44908[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto__);

(statearr_44908[(1)] = (1));

return statearr_44908;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto____1 = (function (state_44901){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_44901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e44909){if((e44909 instanceof Object)){
var ex__37332__auto__ = e44909;
var statearr_44910_44912 = state_44901;
(statearr_44910_44912[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44913 = state_44901;
state_44901 = G__44913;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto__ = function(state_44901){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto____1.call(this,state_44901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__))
})();
var state__37442__auto__ = (function (){var statearr_44911 = f__37441__auto__.call(null);
(statearr_44911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_44911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__))
);

return c__37440__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args44914 = [];
var len__35449__auto___44917 = arguments.length;
var i__35450__auto___44918 = (0);
while(true){
if((i__35450__auto___44918 < len__35449__auto___44917)){
args44914.push((arguments[i__35450__auto___44918]));

var G__44919 = (i__35450__auto___44918 + (1));
i__35450__auto___44918 = G__44919;
continue;
} else {
}
break;
}

var G__44916 = args44914.length;
switch (G__44916) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44914.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__44921){
var map__44924 = p__44921;
var map__44924__$1 = ((((!((map__44924 == null)))?((((map__44924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44924):map__44924);
var file = cljs.core.get.call(null,map__44924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44924__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44924__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__34336__auto__ = file;
if(cljs.core.truth_(or__34336__auto__)){
return or__34336__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__44926){
var vec__44933 = p__44926;
var typ = cljs.core.nth.call(null,vec__44933,(0),null);
var line_number = cljs.core.nth.call(null,vec__44933,(1),null);
var line = cljs.core.nth.call(null,vec__44933,(2),null);
var pred__44936 = cljs.core._EQ_;
var expr__44937 = typ;
if(cljs.core.truth_(pred__44936.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__44937))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__44936.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__44937))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__44936.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__44937))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__44939_SHARP_){
return cljs.core.update_in.call(null,p1__44939_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; overflow: hidden; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__44942){
var map__44945 = p__44942;
var map__44945__$1 = ((((!((map__44945 == null)))?((((map__44945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44945):map__44945);
var exception = map__44945__$1;
var failed_compiling = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__44945__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__34324__auto__ = file;
if(cljs.core.truth_(and__34324__auto__)){
return line;
} else {
return and__34324__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__44945,map__44945__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__44940_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44940_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__44945,map__44945__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__44945,map__44945__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__44941_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__44941_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__44941_SHARP_)))].join('');
});})(last_message,map__44945,map__44945__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__44950 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__44950__$1 = ((((!((map__44950 == null)))?((((map__44950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44950):map__44950);
var head = cljs.core.get.call(null,map__44950__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__44950__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__44950__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__44950__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__44950__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44950__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44950__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__44953){
var map__44956 = p__44953;
var map__44956__$1 = ((((!((map__44956 == null)))?((((map__44956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44956):map__44956);
var warning_data = map__44956__$1;
var file = cljs.core.get.call(null,map__44956__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44956__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44956__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__44956__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__44956__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__34324__auto__ = file;
if(cljs.core.truth_(and__34324__auto__)){
return line;
} else {
return and__34324__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__44956,map__44956__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__44952_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44952_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__44956,map__44956__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.format_line.call(null,msg,cljs.core.PersistentArrayMap.EMPTY))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__44960 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__44960__$1 = ((((!((map__44960 == null)))?((((map__44960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44960):map__44960);
var head = cljs.core.get.call(null,map__44960__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__44960__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__44960__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__44960__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__44960__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44960__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44960__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__44962){
var map__44966 = p__44962;
var map__44966__$1 = ((((!((map__44966 == null)))?((((map__44966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44966):map__44966);
var warning_data = map__44966__$1;
var message = cljs.core.get.call(null,map__44966__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__44966__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44966__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44966__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44968 = message;
var G__44968__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44968),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44968);
var G__44968__$2 = (cljs.core.truth_((function (){var and__34324__auto__ = line;
if(cljs.core.truth_(and__34324__auto__)){
return column;
} else {
return and__34324__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44968__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__44968__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44968__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__44968__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__44969){
var map__44974 = p__44969;
var map__44974__$1 = ((((!((map__44974 == null)))?((((map__44974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44974):map__44974);
var warning_data = map__44974__$1;
var message = cljs.core.get.call(null,map__44974__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__44974__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44974__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44974__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__44976 = figwheel.client.heads_up.ensure_container.call(null);
var map__44976__$1 = ((((!((map__44976 == null)))?((((map__44976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44976):map__44976);
var content_area_el = cljs.core.get.call(null,map__44976__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
goog.dom.append(el,goog.dom.htmlToDocumentFragment(figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data)));

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__){
return (function (state_45024){
var state_val_45025 = (state_45024[(1)]);
if((state_val_45025 === (1))){
var inst_45007 = (state_45024[(7)]);
var inst_45007__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45008 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45009 = ["0.0"];
var inst_45010 = cljs.core.PersistentHashMap.fromArrays(inst_45008,inst_45009);
var inst_45011 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45007__$1,inst_45010);
var inst_45012 = cljs.core.async.timeout.call(null,(300));
var state_45024__$1 = (function (){var statearr_45026 = state_45024;
(statearr_45026[(8)] = inst_45011);

(statearr_45026[(7)] = inst_45007__$1);

return statearr_45026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45024__$1,(2),inst_45012);
} else {
if((state_val_45025 === (2))){
var inst_45007 = (state_45024[(7)]);
var inst_45014 = (state_45024[(2)]);
var inst_45015 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_45016 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_45017 = cljs.core.PersistentHashMap.fromArrays(inst_45015,inst_45016);
var inst_45018 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45007,inst_45017);
var inst_45019 = cljs.core.async.timeout.call(null,(200));
var state_45024__$1 = (function (){var statearr_45027 = state_45024;
(statearr_45027[(9)] = inst_45014);

(statearr_45027[(10)] = inst_45018);

return statearr_45027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45024__$1,(3),inst_45019);
} else {
if((state_val_45025 === (3))){
var inst_45007 = (state_45024[(7)]);
var inst_45021 = (state_45024[(2)]);
var inst_45022 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45007,"");
var state_45024__$1 = (function (){var statearr_45028 = state_45024;
(statearr_45028[(11)] = inst_45021);

return statearr_45028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45024__$1,inst_45022);
} else {
return null;
}
}
}
});})(c__37440__auto__))
;
return ((function (switch__37328__auto__,c__37440__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__37329__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__37329__auto____0 = (function (){
var statearr_45032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45032[(0)] = figwheel$client$heads_up$clear_$_state_machine__37329__auto__);

(statearr_45032[(1)] = (1));

return statearr_45032;
});
var figwheel$client$heads_up$clear_$_state_machine__37329__auto____1 = (function (state_45024){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_45024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e45033){if((e45033 instanceof Object)){
var ex__37332__auto__ = e45033;
var statearr_45034_45036 = state_45024;
(statearr_45034_45036[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45037 = state_45024;
state_45024 = G__45037;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__37329__auto__ = function(state_45024){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__37329__auto____1.call(this,state_45024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__37329__auto____0;
figwheel$client$heads_up$clear_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__37329__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__))
})();
var state__37442__auto__ = (function (){var statearr_45035 = f__37441__auto__.call(null);
(statearr_45035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_45035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__))
);

return c__37440__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__37440__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37440__auto__){
return (function (){
var f__37441__auto__ = (function (){var switch__37328__auto__ = ((function (c__37440__auto__){
return (function (state_45069){
var state_val_45070 = (state_45069[(1)]);
if((state_val_45070 === (1))){
var inst_45059 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_45069__$1 = state_45069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45069__$1,(2),inst_45059);
} else {
if((state_val_45070 === (2))){
var inst_45061 = (state_45069[(2)]);
var inst_45062 = cljs.core.async.timeout.call(null,(400));
var state_45069__$1 = (function (){var statearr_45071 = state_45069;
(statearr_45071[(7)] = inst_45061);

return statearr_45071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45069__$1,(3),inst_45062);
} else {
if((state_val_45070 === (3))){
var inst_45064 = (state_45069[(2)]);
var inst_45065 = figwheel.client.heads_up.clear.call(null);
var state_45069__$1 = (function (){var statearr_45072 = state_45069;
(statearr_45072[(8)] = inst_45064);

return statearr_45072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45069__$1,(4),inst_45065);
} else {
if((state_val_45070 === (4))){
var inst_45067 = (state_45069[(2)]);
var state_45069__$1 = state_45069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45069__$1,inst_45067);
} else {
return null;
}
}
}
}
});})(c__37440__auto__))
;
return ((function (switch__37328__auto__,c__37440__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto____0 = (function (){
var statearr_45076 = [null,null,null,null,null,null,null,null,null];
(statearr_45076[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto__);

(statearr_45076[(1)] = (1));

return statearr_45076;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto____1 = (function (state_45069){
while(true){
var ret_value__37330__auto__ = (function (){try{while(true){
var result__37331__auto__ = switch__37328__auto__.call(null,state_45069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37331__auto__;
}
break;
}
}catch (e45077){if((e45077 instanceof Object)){
var ex__37332__auto__ = e45077;
var statearr_45078_45080 = state_45069;
(statearr_45078_45080[(5)] = ex__37332__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45081 = state_45069;
state_45069 = G__45081;
continue;
} else {
return ret_value__37330__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto__ = function(state_45069){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto____1.call(this,state_45069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__37329__auto__;
})()
;})(switch__37328__auto__,c__37440__auto__))
})();
var state__37442__auto__ = (function (){var statearr_45079 = f__37441__auto__.call(null);
(statearr_45079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37440__auto__);

return statearr_45079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37442__auto__);
});})(c__37440__auto__))
);

return c__37440__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1513020389553