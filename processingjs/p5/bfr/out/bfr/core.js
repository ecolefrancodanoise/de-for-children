// Compiled by ClojureScript 1.9.473 {}
goog.provide('bfr.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
bfr.core.setup = (function bfr$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"planets","planets",1711765443),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"ypp","ypp",-1780216926),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"xpp","xpp",-1649840315),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"yp","yp",-1270807217),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xp","xp",550374458)],[(0),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(160),(0)], null),(0),"mars",6.39E23,(-8.6871E7 / (3600)),(10),2.279E11,(0)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"ypp","ypp",-1780216926),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"xpp","xpp",-1649840315),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"yp","yp",-1270807217),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xp","xp",550374458)],[(0),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(200),(0)], null),(0),"earth",5.972E24,30000.0,(18),-1.496E11,(0)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"ypp","ypp",-1780216926),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"xpp","xpp",-1649840315),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"yp","yp",-1270807217),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xp","xp",550374458)],[(0),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(210),(0)], null),(0),"sun",1.989E30,(0),(40),(0),(0)])], null),new cljs.core.Keyword(null,"space-ship","space-ship",-335817587),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"ypp","ypp",-1780216926),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"xpp","xpp",-1649840315),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"brake-end","brake-end",1712751817),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"yp","yp",-1270807217),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xp","xp",550374458),new cljs.core.Keyword(null,"brake-start","brake-start",-62318274)],[((0) + 1000000.0),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(190),(190),(190)], null),(0),"bfr",4.59E7,1000000.0,(30000.0 + 12780.0),(4),(-1.496E11 - 1000000.0),((0) - 20000.0),4.32E7]),new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"dt","dt",-368444759),100000.0,new cljs.core.Keyword(null,"launch-t","launch-t",-1401250399),3.76E7,new cljs.core.Keyword(null,"G","G",-738544397),6.67408E-11], null);
});
bfr.core.sqrt = (function bfr$core$sqrt(x){
return Math.sqrt(x);
});
bfr.core.pow = (function bfr$core$pow(x,n){
return Math.pow(x,n);
});
bfr.core.draw_planets = (function bfr$core$draw_planets(planets){
var seq__9244_9248 = cljs.core.seq.call(null,planets);
var chunk__9245_9249 = null;
var count__9246_9250 = (0);
var i__9247_9251 = (0);
while(true){
if((i__9247_9251 < count__9246_9250)){
var planet_9252 = cljs.core._nth.call(null,chunk__9245_9249,i__9247_9251);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(planet_9252));

quil.core.ellipse.call(null,((200) + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(planet_9252) / 2.0E9)),((200) + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(planet_9252) / 2.0E9)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(planet_9252),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(planet_9252));

var G__9253 = seq__9244_9248;
var G__9254 = chunk__9245_9249;
var G__9255 = count__9246_9250;
var G__9256 = (i__9247_9251 + (1));
seq__9244_9248 = G__9253;
chunk__9245_9249 = G__9254;
count__9246_9250 = G__9255;
i__9247_9251 = G__9256;
continue;
} else {
var temp__4657__auto___9257 = cljs.core.seq.call(null,seq__9244_9248);
if(temp__4657__auto___9257){
var seq__9244_9258__$1 = temp__4657__auto___9257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9244_9258__$1)){
var c__7633__auto___9259 = cljs.core.chunk_first.call(null,seq__9244_9258__$1);
var G__9260 = cljs.core.chunk_rest.call(null,seq__9244_9258__$1);
var G__9261 = c__7633__auto___9259;
var G__9262 = cljs.core.count.call(null,c__7633__auto___9259);
var G__9263 = (0);
seq__9244_9248 = G__9260;
chunk__9245_9249 = G__9261;
count__9246_9250 = G__9262;
i__9247_9251 = G__9263;
continue;
} else {
var planet_9264 = cljs.core.first.call(null,seq__9244_9258__$1);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(planet_9264));

quil.core.ellipse.call(null,((200) + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(planet_9264) / 2.0E9)),((200) + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(planet_9264) / 2.0E9)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(planet_9264),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(planet_9264));

var G__9265 = cljs.core.next.call(null,seq__9244_9258__$1);
var G__9266 = null;
var G__9267 = (0);
var G__9268 = (0);
seq__9244_9248 = G__9265;
chunk__9245_9249 = G__9266;
count__9246_9250 = G__9267;
i__9247_9251 = G__9268;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,planets))){
var bfr__$1 = cljs.core.last.call(null,planets);
var mars = cljs.core.first.call(null,planets);
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(bfr__$1));

return quil.core.ellipse.call(null,((960) + ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bfr__$1) / 1000000.0) - (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mars) / 1000000.0))),((300) + ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bfr__$1) / 1000000.0) - (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mars) / 1000000.0))),(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(bfr__$1) * 1.7),(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(bfr__$1) * 1.7));
} else {
return null;
}
});
bfr.core.calc_xpp_and_ypp = (function bfr$core$calc_xpp_and_ypp(G){
return (function (p__9275,p__9276){
var map__9277 = p__9275;
var map__9277__$1 = ((((!((map__9277 == null)))?((((map__9277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9277):map__9277);
var p0 = map__9277__$1;
var x0 = cljs.core.get.call(null,map__9277__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var name0 = cljs.core.get.call(null,map__9277__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var xpp0 = cljs.core.get.call(null,map__9277__$1,new cljs.core.Keyword(null,"xpp","xpp",-1649840315));
var m = cljs.core.get.call(null,map__9277__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var xp0 = cljs.core.get.call(null,map__9277__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var ypp0 = cljs.core.get.call(null,map__9277__$1,new cljs.core.Keyword(null,"ypp","ypp",-1780216926));
var yp0 = cljs.core.get.call(null,map__9277__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
var y0 = cljs.core.get.call(null,map__9277__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9278 = p__9276;
var map__9278__$1 = ((((!((map__9278 == null)))?((((map__9278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9278):map__9278);
var x1 = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xp1 = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var yp1 = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
var m1 = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var name1 = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core._EQ_.call(null,name0,name1)){
return p0;
} else {
var d1 = bfr.core.sqrt.call(null,(((x1 - x0) * (x1 - x0)) + ((y1 - y0) * (y1 - y0))));
var xpp = (xpp0 + ((((- G) * m1) * (x0 - x1)) / bfr.core.pow.call(null,d1,(3))));
var ypp = (ypp0 + ((((- G) * m1) * (y0 - y1)) / bfr.core.pow.call(null,d1,(3))));
return cljs.core.assoc.call(null,p0,new cljs.core.Keyword(null,"xpp","xpp",-1649840315),xpp,new cljs.core.Keyword(null,"ypp","ypp",-1780216926),ypp);
}
});
});
bfr.core.update_planet = (function bfr$core$update_planet(dt){
return (function (p__9284){
var map__9285 = p__9284;
var map__9285__$1 = ((((!((map__9285 == null)))?((((map__9285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9285):map__9285);
var p = map__9285__$1;
var x = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xp = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var yp = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
var xpp = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"xpp","xpp",-1649840315));
var ypp = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"ypp","ypp",-1780216926));
var xp__$1 = (xp + (xpp * dt));
var yp__$1 = (yp + (ypp * dt));
var x__$1 = (x + (xp__$1 * dt));
var y__$1 = (y + (yp__$1 * dt));
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"xp","xp",550374458),xp__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217),yp__$1,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"xpp","xpp",-1649840315),(0),new cljs.core.Keyword(null,"ypp","ypp",-1780216926),(0));
});
});
bfr.core.braking_QMARK_ = (function bfr$core$braking_QMARK_(p__9287,t){
var map__9290 = p__9287;
var map__9290__$1 = ((((!((map__9290 == null)))?((((map__9290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9290):map__9290);
var brake_start = cljs.core.get.call(null,map__9290__$1,new cljs.core.Keyword(null,"brake-start","brake-start",-62318274));
var brake_end = cljs.core.get.call(null,map__9290__$1,new cljs.core.Keyword(null,"brake-end","brake-end",1712751817));
return ((t >= brake_start)) && ((t <= brake_end));
});
bfr.core.brake_ship = (function bfr$core$brake_ship(p__9292,p__9293){
var map__9298 = p__9292;
var map__9298__$1 = ((((!((map__9298 == null)))?((((map__9298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9298):map__9298);
var ship = map__9298__$1;
var sxp = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var syp = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
var sxpp = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"xpp","xpp",-1649840315));
var sypp = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"ypp","ypp",-1780216926));
var ship_name = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__9299 = p__9293;
var map__9299__$1 = ((((!((map__9299 == null)))?((((map__9299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9299):map__9299);
var mxp = cljs.core.get.call(null,map__9299__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var myp = cljs.core.get.call(null,map__9299__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
var planet_name = cljs.core.get.call(null,map__9299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var v = bfr.core.sqrt.call(null,(((sxp - mxp) * (sxp - mxp)) + ((syp - myp) * (syp - myp))));
var xpp = (sxpp + (((- (sxp - mxp)) / v) * 0.00467));
var ypp = (sypp + (((- (syp - myp)) / v) * 0.00467));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"xpp","xpp",-1649840315),xpp,new cljs.core.Keyword(null,"ypp","ypp",-1780216926),ypp);
});
bfr.core.update_state = (function bfr$core$update_state(p__9302){
var map__9312 = p__9302;
var map__9312__$1 = ((((!((map__9312 == null)))?((((map__9312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9312):map__9312);
var state = map__9312__$1;
var planets = cljs.core.get.call(null,map__9312__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var space_ship = cljs.core.get.call(null,map__9312__$1,new cljs.core.Keyword(null,"space-ship","space-ship",-335817587));
var dt = cljs.core.get.call(null,map__9312__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var t = cljs.core.get.call(null,map__9312__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var G = cljs.core.get.call(null,map__9312__$1,new cljs.core.Keyword(null,"G","G",-738544397));
var launch_t = cljs.core.get.call(null,map__9312__$1,new cljs.core.Keyword(null,"launch-t","launch-t",-1401250399));
var state__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"planets","planets",1711765443),cljs.core.vec.call(null,(function (){var iter__7602__auto__ = ((function (map__9312,map__9312__$1,state,planets,space_ship,dt,t,G,launch_t){
return (function bfr$core$update_state_$_iter__9314(s__9315){
return (new cljs.core.LazySeq(null,((function (map__9312,map__9312__$1,state,planets,space_ship,dt,t,G,launch_t){
return (function (){
var s__9315__$1 = s__9315;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9315__$1);
if(temp__4657__auto__){
var s__9315__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9315__$2)){
var c__7600__auto__ = cljs.core.chunk_first.call(null,s__9315__$2);
var size__7601__auto__ = cljs.core.count.call(null,c__7600__auto__);
var b__9317 = cljs.core.chunk_buffer.call(null,size__7601__auto__);
if((function (){var i__9316 = (0);
while(true){
if((i__9316 < size__7601__auto__)){
var planet = cljs.core._nth.call(null,c__7600__auto__,i__9316);
cljs.core.chunk_append.call(null,b__9317,(function (){var planet_upd_xpp_ypp = cljs.core.reduce.call(null,bfr.core.calc_xpp_and_ypp.call(null,G),planet,planets);
if(cljs.core.truth_((function (){var and__6802__auto__ = bfr.core.braking_QMARK_.call(null,space_ship,t);
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(planet),"bfr");
} else {
return and__6802__auto__;
}
})())){
return bfr.core.update_planet.call(null,dt).call(null,bfr.core.brake_ship.call(null,planet_upd_xpp_ypp,cljs.core.first.call(null,planets)));
} else {
return bfr.core.update_planet.call(null,dt).call(null,planet_upd_xpp_ypp);
}
})());

var G__9321 = (i__9316 + (1));
i__9316 = G__9321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9317),bfr$core$update_state_$_iter__9314.call(null,cljs.core.chunk_rest.call(null,s__9315__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9317),null);
}
} else {
var planet = cljs.core.first.call(null,s__9315__$2);
return cljs.core.cons.call(null,(function (){var planet_upd_xpp_ypp = cljs.core.reduce.call(null,bfr.core.calc_xpp_and_ypp.call(null,G),planet,planets);
if(cljs.core.truth_((function (){var and__6802__auto__ = bfr.core.braking_QMARK_.call(null,space_ship,t);
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(planet),"bfr");
} else {
return and__6802__auto__;
}
})())){
return bfr.core.update_planet.call(null,dt).call(null,bfr.core.brake_ship.call(null,planet_upd_xpp_ypp,cljs.core.first.call(null,planets)));
} else {
return bfr.core.update_planet.call(null,dt).call(null,planet_upd_xpp_ypp);
}
})(),bfr$core$update_state_$_iter__9314.call(null,cljs.core.rest.call(null,s__9315__$2)));
}
} else {
return null;
}
break;
}
});})(map__9312,map__9312__$1,state,planets,space_ship,dt,t,G,launch_t))
,null,null));
});})(map__9312,map__9312__$1,state,planets,space_ship,dt,t,G,launch_t))
;
return iter__7602__auto__.call(null,planets);
})())),new cljs.core.Keyword(null,"t","t",-1397832519),(t + dt));
var G__9318 = state__$1;
var G__9318__$1 = ((cljs.core._EQ_.call(null,t,4.2E7))?cljs.core.assoc.call(null,G__9318,new cljs.core.Keyword(null,"dt","dt",-368444759),(dt / (10))):G__9318);
var G__9318__$2 = ((cljs.core._EQ_.call(null,t,4.55E7))?cljs.core.assoc.call(null,G__9318__$1,new cljs.core.Keyword(null,"dt","dt",-368444759),(dt / (50))):G__9318__$1);
if(((t > launch_t)) && (((t - dt) <= launch_t))){
return cljs.core.update.call(null,G__9318__$2,new cljs.core.Keyword(null,"planets","planets",1711765443),cljs.core.conj,(function (){var map__9319 = cljs.core.second.call(null,planets);
var map__9319__$1 = ((((!((map__9319 == null)))?((((map__9319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9319):map__9319);
var x = cljs.core.get.call(null,map__9319__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9319__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xp = cljs.core.get.call(null,map__9319__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var yp = cljs.core.get.call(null,map__9319__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,space_ship,new cljs.core.Keyword(null,"x","x",2099068185),(x - 1000000.0)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + 1000000.0)),new cljs.core.Keyword(null,"xp","xp",550374458),(xp - 20000.0)),new cljs.core.Keyword(null,"yp","yp",-1270807217),(yp + 12780.0));
})());
} else {
return G__9318__$2;
}
});
bfr.core.draw_state = (function bfr$core$draw_state(state){
var mars = cljs.core.first.call(null,new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(state));
var mars_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(mars);
var planets = new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(state);
var t = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(state);
var dt = new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(state);
quil.core.background.call(null,(0),(0),(0));

quil.core.fill.call(null,(0),(0),(40));

quil.core.rect.call(null,(640),(0),(640),(720));

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(mars));

quil.core.ellipse.call(null,(960),(300),(mars_size * 1.5),(mars_size * 1.5));

quil.core.stroke.call(null,(255),(255),(255));

quil.core.fill.call(null,(255),(255),(255));

quil.core.text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Time: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),(10),(10));

quil.core.text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("DT: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt)].join(''),(10),(30));

quil.core.text_size.call(null,(32));

quil.core.text.call(null,"Solsystemet",(250),(30));

quil.core.text.call(null,"Mars Zoom",((250) + (640)),(30));

quil.core.stroke.call(null,(0),(0),(0));

return bfr.core.draw_planets.call(null,planets);
});
bfr.core.my = (function bfr$core$my(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"host",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,bfr.core.update_state))?(function() { 
var G__9322__delegate = function (args){
return cljs.core.apply.call(null,bfr.core.update_state,args);
};
var G__9322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9323__i = 0, G__9323__a = new Array(arguments.length -  0);
while (G__9323__i < G__9323__a.length) {G__9323__a[G__9323__i] = arguments[G__9323__i + 0]; ++G__9323__i;}
  args = new cljs.core.IndexedSeq(G__9323__a,0);
} 
return G__9322__delegate.call(this,args);};
G__9322.cljs$lang$maxFixedArity = 0;
G__9322.cljs$lang$applyTo = (function (arglist__9324){
var args = cljs.core.seq(arglist__9324);
return G__9322__delegate(args);
});
G__9322.cljs$core$IFn$_invoke$arity$variadic = G__9322__delegate;
return G__9322;
})()
:bfr.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1280),(600)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,bfr.core.setup))?(function() { 
var G__9325__delegate = function (args){
return cljs.core.apply.call(null,bfr.core.setup,args);
};
var G__9325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9326__i = 0, G__9326__a = new Array(arguments.length -  0);
while (G__9326__i < G__9326__a.length) {G__9326__a[G__9326__i] = arguments[G__9326__i + 0]; ++G__9326__i;}
  args = new cljs.core.IndexedSeq(G__9326__a,0);
} 
return G__9325__delegate.call(this,args);};
G__9325.cljs$lang$maxFixedArity = 0;
G__9325.cljs$lang$applyTo = (function (arglist__9327){
var args = cljs.core.seq(arglist__9327);
return G__9325__delegate(args);
});
G__9325.cljs$core$IFn$_invoke$arity$variadic = G__9325__delegate;
return G__9325;
})()
:bfr.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,bfr.core.draw_state))?(function() { 
var G__9328__delegate = function (args){
return cljs.core.apply.call(null,bfr.core.draw_state,args);
};
var G__9328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9329__i = 0, G__9329__a = new Array(arguments.length -  0);
while (G__9329__i < G__9329__a.length) {G__9329__a[G__9329__i] = arguments[G__9329__i + 0]; ++G__9329__i;}
  args = new cljs.core.IndexedSeq(G__9329__a,0);
} 
return G__9328__delegate.call(this,args);};
G__9328.cljs$lang$maxFixedArity = 0;
G__9328.cljs$lang$applyTo = (function (arglist__9330){
var args = cljs.core.seq(arglist__9330);
return G__9328__delegate(args);
});
G__9328.cljs$core$IFn$_invoke$arity$variadic = G__9328__delegate;
return G__9328;
})()
:bfr.core.draw_state));
});
goog.exportSymbol('bfr.core.my', bfr.core.my);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8011__8012__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8011__8012__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),bfr.core.my,new cljs.core.Keyword(null,"host-id","host-id",742376279),"host"], null));
}
