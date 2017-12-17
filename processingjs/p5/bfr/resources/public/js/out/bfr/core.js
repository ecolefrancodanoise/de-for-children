// Compiled by ClojureScript 1.9.473 {}
goog.provide('bfr.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
bfr.core.setup = (function bfr$core$setup(){
quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"planets","planets",1711765443),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"ypp","ypp",-1780216926),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"xpp","xpp",-1649840315),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"yp","yp",-1270807217),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xp","xp",550374458)],[(0),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(200),(0)], null),(0),"earth",5.972E24,30000.0,(18),-1.496E11,(0)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"ypp","ypp",-1780216926),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"xpp","xpp",-1649840315),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"yp","yp",-1270807217),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xp","xp",550374458)],[(0),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(160),(0)], null),(0),"mars",6.39E23,(-8.6871E7 / (3600)),(10),2.279E11,(0)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"ypp","ypp",-1780216926),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"xpp","xpp",-1649840315),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"yp","yp",-1270807217),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xp","xp",550374458)],[(0),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(210),(0)], null),(0),"sun",1.989E30,(0),(40),(0),(0)])], null),new cljs.core.Keyword(null,"space-ship","space-ship",-335817587),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ypp","ypp",-1780216926),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"xpp","xpp",-1649840315),new cljs.core.Keyword(null,"position-history","position-history",1638287624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"brake-end","brake-end",1712751817),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"brake-start","brake-start",-62318274)],[(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(190),(190),(190)], null),(0),cljs.core.PersistentVector.EMPTY,"bfr",4.59E7,1000000.0,(4),4.32E7]),new cljs.core.Keyword(null,"t","t",-1397832519),(0),new cljs.core.Keyword(null,"dt","dt",-368444759),100000.0,new cljs.core.Keyword(null,"launch-t","launch-t",-1401250399),3.76E7,new cljs.core.Keyword(null,"G","G",-738544397),6.67408E-11], null);
});
bfr.core.sqrt = Math.sqrt;
bfr.core.pow = Math.pow;
bfr.core.draw_planets = (function bfr$core$draw_planets(planets){
var seq__47679_47705 = cljs.core.seq.call(null,planets);
var chunk__47680_47706 = null;
var count__47681_47707 = (0);
var i__47682_47708 = (0);
while(true){
if((i__47682_47708 < count__47681_47707)){
var planet_47709 = cljs.core._nth.call(null,chunk__47680_47706,i__47682_47708);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(planet_47709));

quil.core.ellipse.call(null,((200) + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(planet_47709) / 2.0E9)),((200) + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(planet_47709) / 2.0E9)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(planet_47709),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(planet_47709));

var G__47710 = seq__47679_47705;
var G__47711 = chunk__47680_47706;
var G__47712 = count__47681_47707;
var G__47713 = (i__47682_47708 + (1));
seq__47679_47705 = G__47710;
chunk__47680_47706 = G__47711;
count__47681_47707 = G__47712;
i__47682_47708 = G__47713;
continue;
} else {
var temp__4657__auto___47714 = cljs.core.seq.call(null,seq__47679_47705);
if(temp__4657__auto___47714){
var seq__47679_47715__$1 = temp__4657__auto___47714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47679_47715__$1)){
var c__35389__auto___47716 = cljs.core.chunk_first.call(null,seq__47679_47715__$1);
var G__47717 = cljs.core.chunk_rest.call(null,seq__47679_47715__$1);
var G__47718 = c__35389__auto___47716;
var G__47719 = cljs.core.count.call(null,c__35389__auto___47716);
var G__47720 = (0);
seq__47679_47705 = G__47717;
chunk__47680_47706 = G__47718;
count__47681_47707 = G__47719;
i__47682_47708 = G__47720;
continue;
} else {
var planet_47721 = cljs.core.first.call(null,seq__47679_47715__$1);
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(planet_47721));

quil.core.ellipse.call(null,((200) + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(planet_47721) / 2.0E9)),((200) + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(planet_47721) / 2.0E9)),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(planet_47721),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(planet_47721));

var G__47722 = cljs.core.next.call(null,seq__47679_47715__$1);
var G__47723 = null;
var G__47724 = (0);
var G__47725 = (0);
seq__47679_47705 = G__47722;
chunk__47680_47706 = G__47723;
count__47681_47707 = G__47724;
i__47682_47708 = G__47725;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,planets))){
var bfr__$1 = cljs.core.last.call(null,planets);
var mars = cljs.core.second.call(null,planets);
var bfr_history = new cljs.core.Keyword(null,"position-history","position-history",1638287624).cljs$core$IFn$_invoke$arity$1(bfr__$1);
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(bfr__$1));

quil.core.ellipse.call(null,((960) + ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bfr__$1) / 1000000.0) - (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mars) / 1000000.0))),((300) + ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bfr__$1) / 1000000.0) - (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mars) / 1000000.0))),(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(bfr__$1) * 1.7),(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(bfr__$1) * 1.7));

quil.core.stroke.call(null,(190),(190),(190));

var seq__47683 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),(1),bfr_history));
var chunk__47684 = null;
var count__47685 = (0);
var i__47686 = (0);
while(true){
if((i__47686 < count__47685)){
var vec__47687 = cljs.core._nth.call(null,chunk__47684,i__47686);
var vec__47690 = cljs.core.nth.call(null,vec__47687,(0),null);
var bfr_x_1 = cljs.core.nth.call(null,vec__47690,(0),null);
var bfr_y_1 = cljs.core.nth.call(null,vec__47690,(1),null);
var mars_x_1 = cljs.core.nth.call(null,vec__47690,(2),null);
var mars_y_1 = cljs.core.nth.call(null,vec__47690,(3),null);
var vec__47693 = cljs.core.nth.call(null,vec__47687,(1),null);
var bfr_x_2 = cljs.core.nth.call(null,vec__47693,(0),null);
var bfr_y_2 = cljs.core.nth.call(null,vec__47693,(1),null);
var mars_x_2 = cljs.core.nth.call(null,vec__47693,(2),null);
var mars_y_2 = cljs.core.nth.call(null,vec__47693,(3),null);
quil.core.line.call(null,((960) + ((bfr_x_1 / 1000000.0) - (mars_x_1 / 1000000.0))),((300) + ((bfr_y_1 / 1000000.0) - (mars_y_1 / 1000000.0))),((960) + ((bfr_x_2 / 1000000.0) - (mars_x_2 / 1000000.0))),((300) + ((bfr_y_2 / 1000000.0) - (mars_y_2 / 1000000.0))));

var G__47726 = seq__47683;
var G__47727 = chunk__47684;
var G__47728 = count__47685;
var G__47729 = (i__47686 + (1));
seq__47683 = G__47726;
chunk__47684 = G__47727;
count__47685 = G__47728;
i__47686 = G__47729;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47683);
if(temp__4657__auto__){
var seq__47683__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47683__$1)){
var c__35389__auto__ = cljs.core.chunk_first.call(null,seq__47683__$1);
var G__47730 = cljs.core.chunk_rest.call(null,seq__47683__$1);
var G__47731 = c__35389__auto__;
var G__47732 = cljs.core.count.call(null,c__35389__auto__);
var G__47733 = (0);
seq__47683 = G__47730;
chunk__47684 = G__47731;
count__47685 = G__47732;
i__47686 = G__47733;
continue;
} else {
var vec__47696 = cljs.core.first.call(null,seq__47683__$1);
var vec__47699 = cljs.core.nth.call(null,vec__47696,(0),null);
var bfr_x_1 = cljs.core.nth.call(null,vec__47699,(0),null);
var bfr_y_1 = cljs.core.nth.call(null,vec__47699,(1),null);
var mars_x_1 = cljs.core.nth.call(null,vec__47699,(2),null);
var mars_y_1 = cljs.core.nth.call(null,vec__47699,(3),null);
var vec__47702 = cljs.core.nth.call(null,vec__47696,(1),null);
var bfr_x_2 = cljs.core.nth.call(null,vec__47702,(0),null);
var bfr_y_2 = cljs.core.nth.call(null,vec__47702,(1),null);
var mars_x_2 = cljs.core.nth.call(null,vec__47702,(2),null);
var mars_y_2 = cljs.core.nth.call(null,vec__47702,(3),null);
quil.core.line.call(null,((960) + ((bfr_x_1 / 1000000.0) - (mars_x_1 / 1000000.0))),((300) + ((bfr_y_1 / 1000000.0) - (mars_y_1 / 1000000.0))),((960) + ((bfr_x_2 / 1000000.0) - (mars_x_2 / 1000000.0))),((300) + ((bfr_y_2 / 1000000.0) - (mars_y_2 / 1000000.0))));

var G__47734 = cljs.core.next.call(null,seq__47683__$1);
var G__47735 = null;
var G__47736 = (0);
var G__47737 = (0);
seq__47683 = G__47734;
chunk__47684 = G__47735;
count__47685 = G__47736;
i__47686 = G__47737;
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
});
bfr.core.calc_xpp_and_ypp = (function bfr$core$calc_xpp_and_ypp(G){
return (function (p__47744,p__47745){
var map__47746 = p__47744;
var map__47746__$1 = ((((!((map__47746 == null)))?((((map__47746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47746):map__47746);
var p0 = map__47746__$1;
var x0 = cljs.core.get.call(null,map__47746__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__47746__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xpp0 = cljs.core.get.call(null,map__47746__$1,new cljs.core.Keyword(null,"xpp","xpp",-1649840315));
var ypp0 = cljs.core.get.call(null,map__47746__$1,new cljs.core.Keyword(null,"ypp","ypp",-1780216926));
var m = cljs.core.get.call(null,map__47746__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var name0 = cljs.core.get.call(null,map__47746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__47747 = p__47745;
var map__47747__$1 = ((((!((map__47747 == null)))?((((map__47747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47747):map__47747);
var x1 = cljs.core.get.call(null,map__47747__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__47747__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var m1 = cljs.core.get.call(null,map__47747__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var name1 = cljs.core.get.call(null,map__47747__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
bfr.core.braking_QMARK_ = (function bfr$core$braking_QMARK_(p__47750,t){
var map__47753 = p__47750;
var map__47753__$1 = ((((!((map__47753 == null)))?((((map__47753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47753):map__47753);
var brake_start = cljs.core.get.call(null,map__47753__$1,new cljs.core.Keyword(null,"brake-start","brake-start",-62318274));
var brake_end = cljs.core.get.call(null,map__47753__$1,new cljs.core.Keyword(null,"brake-end","brake-end",1712751817));
return ((t >= brake_start)) && ((t <= brake_end));
});
bfr.core.brake_ship = (function bfr$core$brake_ship(p__47755,p__47756){
var map__47761 = p__47755;
var map__47761__$1 = ((((!((map__47761 == null)))?((((map__47761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47761):map__47761);
var ship = map__47761__$1;
var sxp = cljs.core.get.call(null,map__47761__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var syp = cljs.core.get.call(null,map__47761__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
var sxpp = cljs.core.get.call(null,map__47761__$1,new cljs.core.Keyword(null,"xpp","xpp",-1649840315));
var sypp = cljs.core.get.call(null,map__47761__$1,new cljs.core.Keyword(null,"ypp","ypp",-1780216926));
var ship_name = cljs.core.get.call(null,map__47761__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__47762 = p__47756;
var map__47762__$1 = ((((!((map__47762 == null)))?((((map__47762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47762):map__47762);
var mxp = cljs.core.get.call(null,map__47762__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var myp = cljs.core.get.call(null,map__47762__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
var planet_name = cljs.core.get.call(null,map__47762__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var v = bfr.core.sqrt.call(null,(((sxp - mxp) * (sxp - mxp)) + ((syp - myp) * (syp - myp))));
var xpp = (sxpp + ((((-1) * (sxp - mxp)) / v) * 0.00467));
var ypp = (sypp + ((((-1) * (syp - myp)) / v) * 0.00467));
return cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"xpp","xpp",-1649840315),xpp,new cljs.core.Keyword(null,"ypp","ypp",-1780216926),ypp);
});
bfr.core.update_planet = (function bfr$core$update_planet(dt,G){
return (function (planet,planets,p__47770){
var map__47771 = p__47770;
var map__47771__$1 = ((((!((map__47771 == null)))?((((map__47771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47771):map__47771);
var t = cljs.core.get.call(null,map__47771__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var space_ship = cljs.core.get.call(null,map__47771__$1,new cljs.core.Keyword(null,"space-ship","space-ship",-335817587));
var planet__$1 = cljs.core.reduce.call(null,bfr.core.calc_xpp_and_ypp.call(null,G),planet,planets);
var mars = cljs.core.second.call(null,planets);
var planet__$2 = (cljs.core.truth_((function (){var and__34558__auto__ = cljs.core._EQ_.call(null,"bfr",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(planet__$1));
if(and__34558__auto__){
return bfr.core.braking_QMARK_.call(null,space_ship,t);
} else {
return and__34558__auto__;
}
})())?bfr.core.brake_ship.call(null,planet__$1,mars):planet__$1);
var map__47773 = planet__$2;
var map__47773__$1 = ((((!((map__47773 == null)))?((((map__47773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47773):map__47773);
var x = cljs.core.get.call(null,map__47773__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__47773__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xp = cljs.core.get.call(null,map__47773__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var yp = cljs.core.get.call(null,map__47773__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
var xpp = cljs.core.get.call(null,map__47773__$1,new cljs.core.Keyword(null,"xpp","xpp",-1649840315));
var ypp = cljs.core.get.call(null,map__47773__$1,new cljs.core.Keyword(null,"ypp","ypp",-1780216926));
var xp__$1 = (xp + (xpp * dt));
var yp__$1 = (yp + (ypp * dt));
var x__$1 = (x + (xp__$1 * dt));
var y__$1 = (y + (yp__$1 * dt));
return cljs.core.assoc.call(null,planet__$2,new cljs.core.Keyword(null,"xp","xp",550374458),xp__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217),yp__$1,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"xpp","xpp",-1649840315),(0),new cljs.core.Keyword(null,"ypp","ypp",-1780216926),(0));
});
});
bfr.core.update_state = (function bfr$core$update_state(p__47775){
var map__47787 = p__47775;
var map__47787__$1 = ((((!((map__47787 == null)))?((((map__47787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47787):map__47787);
var state = map__47787__$1;
var planets = cljs.core.get.call(null,map__47787__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var space_ship = cljs.core.get.call(null,map__47787__$1,new cljs.core.Keyword(null,"space-ship","space-ship",-335817587));
var dt = cljs.core.get.call(null,map__47787__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var t = cljs.core.get.call(null,map__47787__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var G = cljs.core.get.call(null,map__47787__$1,new cljs.core.Keyword(null,"G","G",-738544397));
var launch_t = cljs.core.get.call(null,map__47787__$1,new cljs.core.Keyword(null,"launch-t","launch-t",-1401250399));
var t__$1 = (dt + t);
var state__$1 = (function (){var G__47789 = state;
var G__47789__$1 = cljs.core.assoc.call(null,G__47789,new cljs.core.Keyword(null,"t","t",-1397832519),(new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(state) + dt))
;
var G__47789__$2 = ((((t__$1 > launch_t)) && (((t__$1 - dt) <= launch_t)))?cljs.core.update.call(null,G__47789__$1,new cljs.core.Keyword(null,"planets","planets",1711765443),cljs.core.conj,(function (){var map__47790 = cljs.core.first.call(null,planets);
var map__47790__$1 = ((((!((map__47790 == null)))?((((map__47790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47790):map__47790);
var x = cljs.core.get.call(null,map__47790__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__47790__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var xp = cljs.core.get.call(null,map__47790__$1,new cljs.core.Keyword(null,"xp","xp",550374458));
var yp = cljs.core.get.call(null,map__47790__$1,new cljs.core.Keyword(null,"yp","yp",-1270807217));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,space_ship,new cljs.core.Keyword(null,"x","x",2099068185),(x - 1000000.0)),new cljs.core.Keyword(null,"y","y",-1757859776),(y + 1000000.0)),new cljs.core.Keyword(null,"xp","xp",550374458),(xp - 20000.0)),new cljs.core.Keyword(null,"yp","yp",-1270807217),(yp + 12780.0));
})()):G__47789__$1);
var G__47789__$3 = ((cljs.core._EQ_.call(null,t__$1,4.2E7))?cljs.core.assoc.call(null,G__47789__$2,new cljs.core.Keyword(null,"dt","dt",-368444759),(dt / (10))):G__47789__$2);
if(cljs.core._EQ_.call(null,t__$1,4.55E7)){
return cljs.core.assoc.call(null,G__47789__$3,new cljs.core.Keyword(null,"dt","dt",-368444759),(dt / (50)));
} else {
return G__47789__$3;
}
})();
var map__47792 = state__$1;
var map__47792__$1 = ((((!((map__47792 == null)))?((((map__47792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47792):map__47792);
var dt__$1 = cljs.core.get.call(null,map__47792__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var planets__$1 = cljs.core.get.call(null,map__47792__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var new_planets = cljs.core.reduce_kv.call(null,((function (map__47792,map__47792__$1,dt__$1,planets__$1,t__$1,state__$1,map__47787,map__47787__$1,state,planets,space_ship,dt,t,G,launch_t){
return (function (planets__$2,i,planet){
return cljs.core.assoc.call(null,planets__$2,i,bfr.core.update_planet.call(null,dt__$1,G).call(null,planet,planets__$2,state__$1));
});})(map__47792,map__47792__$1,dt__$1,planets__$1,t__$1,state__$1,map__47787,map__47787__$1,state,planets,space_ship,dt,t,G,launch_t))
,planets__$1,planets__$1);
var new_planets__$1 = ((cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,planets__$1)))?(function (){var map__47794 = cljs.core.second.call(null,new_planets);
var map__47794__$1 = ((((!((map__47794 == null)))?((((map__47794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47794):map__47794);
var mars_x = cljs.core.get.call(null,map__47794__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var mars_y = cljs.core.get.call(null,map__47794__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__47795 = cljs.core.last.call(null,new_planets);
var map__47795__$1 = ((((!((map__47795 == null)))?((((map__47795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47795):map__47795);
var bfr_x = cljs.core.get.call(null,map__47795__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var bfr_y = cljs.core.get.call(null,map__47795__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.update_in.call(null,new_planets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),new cljs.core.Keyword(null,"position-history","position-history",1638287624)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfr_x,bfr_y,mars_x,mars_y], null));
})():new_planets);
return cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"planets","planets",1711765443),new_planets__$1);
});
bfr.core.draw_state = (function bfr$core$draw_state(state){
var mars = cljs.core.second.call(null,new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(state));
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

quil.core.text.call(null,"Solar System",(250),(30));

quil.core.text.call(null,"Mars Zoom",((250) + (640)),(30));

quil.core.stroke.call(null,(0),(0),(0));

return bfr.core.draw_planets.call(null,planets);
});
bfr.core.my = (function bfr$core$my(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"host",new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
return quil.core.smooth.call(null,(2));
}),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,bfr.core.update_state))?(function() { 
var G__47798__delegate = function (args){
return cljs.core.apply.call(null,bfr.core.update_state,args);
};
var G__47798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47799__i = 0, G__47799__a = new Array(arguments.length -  0);
while (G__47799__i < G__47799__a.length) {G__47799__a[G__47799__i] = arguments[G__47799__i + 0]; ++G__47799__i;}
  args = new cljs.core.IndexedSeq(G__47799__a,0);
} 
return G__47798__delegate.call(this,args);};
G__47798.cljs$lang$maxFixedArity = 0;
G__47798.cljs$lang$applyTo = (function (arglist__47800){
var args = cljs.core.seq(arglist__47800);
return G__47798__delegate(args);
});
G__47798.cljs$core$IFn$_invoke$arity$variadic = G__47798__delegate;
return G__47798;
})()
:bfr.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1280),(600)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,bfr.core.setup))?(function() { 
var G__47801__delegate = function (args){
return cljs.core.apply.call(null,bfr.core.setup,args);
};
var G__47801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47802__i = 0, G__47802__a = new Array(arguments.length -  0);
while (G__47802__i < G__47802__a.length) {G__47802__a[G__47802__i] = arguments[G__47802__i + 0]; ++G__47802__i;}
  args = new cljs.core.IndexedSeq(G__47802__a,0);
} 
return G__47801__delegate.call(this,args);};
G__47801.cljs$lang$maxFixedArity = 0;
G__47801.cljs$lang$applyTo = (function (arglist__47803){
var args = cljs.core.seq(arglist__47803);
return G__47801__delegate(args);
});
G__47801.cljs$core$IFn$_invoke$arity$variadic = G__47801__delegate;
return G__47801;
})()
:bfr.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,bfr.core.draw_state))?(function() { 
var G__47804__delegate = function (args){
return cljs.core.apply.call(null,bfr.core.draw_state,args);
};
var G__47804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47805__i = 0, G__47805__a = new Array(arguments.length -  0);
while (G__47805__i < G__47805__a.length) {G__47805__a[G__47805__i] = arguments[G__47805__i + 0]; ++G__47805__i;}
  args = new cljs.core.IndexedSeq(G__47805__a,0);
} 
return G__47804__delegate.call(this,args);};
G__47804.cljs$lang$maxFixedArity = 0;
G__47804.cljs$lang$applyTo = (function (arglist__47806){
var args = cljs.core.seq(arglist__47806);
return G__47804__delegate(args);
});
G__47804.cljs$core$IFn$_invoke$arity$variadic = G__47804__delegate;
return G__47804;
})()
:bfr.core.draw_state));
});
goog.exportSymbol('bfr.core.my', bfr.core.my);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__37154__37155__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__37154__37155__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),bfr.core.my,new cljs.core.Keyword(null,"host-id","host-id",742376279),"host"], null));
}

//# sourceMappingURL=core.js.map?rel=1513538263828