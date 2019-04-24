function waitAsync(e, t) {
    return new Promise(function(r, i) {
        setTimeout(function() {
            t && t(), r()
        }, e)
    })
}

function closure(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return function() {
        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
        return e.apply(null, t.concat(r))
    }
}
var __reflect = this && this.__reflect || function(e, t, r) {
        e.__class__ = t, r ? r.push(t) : r = [t], e.__types__ = e.__types__ ? r.concat(e.__types__) : r
    },
    __extends = this && this.__extends || function(e, t) {
        function r() {
            this.constructor = e
        }
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        r.prototype = t.prototype, e.prototype = new r
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        return new(r || (r = Promise))(function(o, a) {
            function s(e) {
                try {
                    h(i.next(e))
                } catch (t) {
                    a(t)
                }
            }

            function n(e) {
                try {
                    h(i["throw"](e))
                } catch (t) {
                    a(t)
                }
            }

            function h(e) {
                e.done ? o(e.value) : new r(function(t) {
                    t(e.value)
                }).then(s, n)
            }
            h((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return i([e, t])
            }
        }

        function i(r) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; h;) try {
                if (o = 1, a && (s = a[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(s = s.call(a, r[1])).done) return s;
                switch (a = 0, s && (r = [0, s.value]), r[0]) {
                    case 0:
                    case 1:
                        s = r;
                        break;
                    case 4:
                        return h.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        h.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = h.ops.pop(), h.trys.pop();
                        continue;
                    default:
                        if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            h = 0;
                            continue
                        }
                        if (3 === r[0] && (!s || r[1] > s[0] && r[1] < s[3])) {
                            h.label = r[1];
                            break
                        }
                        if (6 === r[0] && h.label < s[1]) {
                            h.label = s[1], s = r;
                            break
                        }
                        if (s && h.label < s[2]) {
                            h.label = s[2], h.ops.push(r);
                            break
                        }
                        s[2] && h.ops.pop(), h.trys.pop();
                        continue
                }
                r = t.call(e, h)
            } catch (i) {
                r = [6, i], a = 0
            } finally {
                o = s = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var o, a, s, n, h = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: r(0),
            "throw": r(1),
            "return": r(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n
    },
    Emiter = function() {
        function e() {
            this.maps = {}, this.uid = 0, this._duringEmit = !1
        }
        return e.prototype.add = function(e, t, r, i, o) {
            r = r || null, i = i || 0;
            var a = this.uid++,
                s = this.maps[e] || [];
            return s.push([a, t, r, i, o]), this.maps[e] = s, s.sort(function(e, t) {
                return e[3] < t[3]
            }), a
        }, e.prototype.on = function(e, t, r, i) {
            return this.add(e, t, r, i, !1)
        }, e.prototype.once = function(e, t, r, i) {
            return this.add(e, t, r, i, !0)
        }, e.prototype.race = function(e, t, r, i) {
            for (var o = this, a = [], s = !1, n = function(e) {
                    for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
                    s = !0, a.forEach(function(e) {
                        return o.rm(e[0], e[1])
                    }), t.apply(r, [e].concat(i))
                }, h = 0, l = e; h < l.length; h++) {
                var c = l[h];
                if (s) break;
                a.push([this.once(c, closure(n, c), r, i), c])
            }
        }, e.prototype.rm = function(e, t) {
            for (var r = t ? [t] : Object.keys(this.maps), i = 0, o = r; i < o.length; i++) {
                var a = o[i],
                    s = this.maps[a];
                if (s) {
                    this._duringEmit && (this.maps[a] = s = s.concat());
                    for (var n = 0; n < s.length;) {
                        var h = s[n],
                            l = h[0];
                        h[1], h[2], h[3], h[4];
                        if (l == e) return s.splice(n, 1), !0;
                        n++
                    }
                }
            }
            return !1
        }, e.prototype.rmall = function(e) {
            void 0 == e ? this.maps = {} : delete this.maps[e]
        }, e.prototype.emit = function(t, r) {
            var i = this.maps[t];
            if (i && i.length > 0) {
                for (var o = 0; o < i.length;) {
                    var a = i[o],
                        s = (a[0], a[1]),
                        n = a[2],
                        h = (a[3], a[4]);
                    h ? i.splice(o, 1) : o++, this._duringEmit = !0;
                    var l = s.call(n, r);
                    if (this._duringEmit = !1, l == e.CONST["break"]) break
                }
                return !0
            }
            return !1
        }, e.CONST = {
            "break": {}
        }, e
    }();
__reflect(Emiter.prototype, "Emiter");
var Facade = function() {
    function e() {
        this._responders = [], this._commands = {}, e.inst = this, this.emiter = new Emiter
    }
    return e.prototype.registResponser = function(e) {
        if (this._responders.some(function(t) {
                return t.res == e
            })) throw "this responser has been registed already!";
        for (var t = e.listResponse(), r = [], i = function(t) {
                var i = o.emiter.on(t, function(r) {
                    e.doResponse(t, r)
                });
                r.push({
                    name: t,
                    id: i
                })
            }, o = this, a = 0, s = t; a < s.length; a++) {
            var n = s[a];
            i(n)
        }
        this._responders.push({
            res: e,
            ids: r
        })
    }, e.prototype.unregistResponser = function(e) {
        for (var t = 0, r = this._responders; t < r.length; t++) {
            var i = r[t];
            if (i.res == e) {
                for (var o = i.ids, a = 0, s = o; a < s.length; a++) {
                    var n = s[a];
                    this.emiter.rm(n.id, n.name)
                }
                this._responders.splice(this._responders.indexOf(i), 1);
                break
            }
        }
    }, e.prototype.registCommand = function(e, t) {
        if (this._commands[e]) throw "cmd has been registed already!!!";
        var r = this.emiter.on(e, function(r) {
            (new t).excute(r, e)
        });
        this._commands[e] = r
    }, e.prototype.unregistCommand = function(e) {
        var t = this._commands[e];
        t && this.emiter.rm(t, e)
    }, e.prototype.notify = function(e, t) {
        return this.emiter.emit(e, t)
    }, e.prototype.dispose = function() {
        this.emiter.rmall(), this._responders.length = 0
    }, e
}();
__reflect(Facade.prototype, "Facade"), egret.Bitmap.prototype.pos = function(e, t, r, i) {
    this.x = e, this.y = t, this.width = r, this.height = i, this.anchorOffsetX = r / 2, this.anchorOffsetY = i / 2
};
var GameScene = function(e) {
    function t() {
        var t = e.call(this) || this;
        if (t.RankArr = [], t.ArrLoad = [], t.HeroFirstState = [], t.HeroState = [], t.HeroNumState = [], t.HeroJumpState = [], t.HeroPositionX = [-4, -4, 0, -2, 0, 3, 0, -2, 0, 6, 6, 0, 0, 0, 6, 0, 29, 0, 0, -6, 0, 5], t.HeroPositionY = [1, 1, 2, 2, 0, 1, 1, 2, 0, 1, 3, 1, 1, 2, 6, 0, 0, 0, 0, 0, 3, 0], t.NumLockTT = [], t.NumLockTT_S = [], t.LineImage = [], t.RankImage = [], t.LoadImage = [], t.TreeImage = [], t.OverImage = [], t.HeroUnlock = [], t.HeroImage = [], t.HeroImage2 = [], t.HeroImage3 = [], t.InterImage = [], t.FloorImage = [], t.ChooseImage = [], t.Trailing = [], t.RankingNum = [], t.UILabel = [], t.HeroName = [], t.RankNum = [], t.RankScore = [], t.HeroBody = [], t.HeroShape = [], t.ice = [], t.RankLabel = [], t.UserName = [], t.UserID = [], t.UserImage = [], t.UserScore = [], t.UserRole = [], t.UserLoadState = [], t.UserTexture = [], t.LoadGameScore(), t.Connect = new GameConnect, 0 == t.NowHeroTT || void 0 == t.NowHeroTT) {
            t.NowHeroTT = 1, t.NumScoreTT = 1, t.NumVideoTT = 0;
            for (var r = 0; 2 > r; r++) t.NumLockTT[r] = 1;
            for (var r = 2; 22 > r; r++) t.NumLockTT[r] = 0;
            t.SaveGameScore(), t.Connect.UpLoadScore(t.NumScoreTT)
        }(0 == t.NumLockTT[0] || 0 == t.NumLockTT[1]) && (t.NumLockTT[0] = 1, t.NumLockTT[1] = 1), t.iPhoneW = t.Connect.GetiPhoneW(), t.PlatForm = t.Connect.GetPlatForm(), t.SuperMan = 0, console.log("SM: " + t.SuperMan), t.choose = 0, t.GameState = 1, t.FirstRound = 0, t.UserRankNum = 0, t.NumStyleAD = 0, t.MoveCanNot = 0, t.NumShowShare = 0, t.touchEnabled = !0, t.StageHeight = egret.MainContext.instance.stage.stageHeight, t.StageWidth = egret.MainContext.instance.stage.stageWidth, t.RankKill = 0;
        for (var i = t.Connect.GetUserScore(1), r = 0; r < i.length; r++) i[r] > 99e3 && t.RankKill++;
        var o = new egret.Timer(10);
        o.addEventListener(egret.TimerEvent.TIMER, t.TimerTick, t), o.start();
        var a = new egret.Timer(1e3);
        return a.addEventListener(egret.TimerEvent.TIMER, t.DrawAction, t), a.start(), t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.TouchBegin, t), t.addEventListener(egret.TouchEvent.TOUCH_MOVE, t.TouchMoved, t), t.addEventListener(egret.TouchEvent.TOUCH_END, t.TouchEnded, t), 0 != t.iPhoneW && (t.x = t.iPhoneW), t.CreateWorld(), t.InitGame(), t
    }
    return __extends(t, e), t.prototype.InitGame = function() {
        if (this.PutThePicture(), 0 == this.choose) {
            this.ShopNumState = 0, this.NumLoad = 0, this.NumFriends = this.Connect.getInviteCount(), this.IndexState = 0, this.InterImage[0].pos(568, 256, this.StageWidth, 512), this.InterImage[1].pos(568, 130, 509, 248), this.InterImage[2].pos(230, 540, 100, 96), this.InterImage[3].pos(429, 540, 256, 96), this.InterImage[4].pos(706, 540, 256, 96), this.InterImage[5].pos(568, 390, 83, 57), this.InterImage[6].pos(906, 540, 100, 96), this.InterImage[7].alpha = 0, this.InterImage[7].pos(233, 540, 100, 96), this.InterImage[8].pos(906, 535, 73, 51), this.InterImage[9].pos(1033 + this.iPhoneW, 120, 140, 180), 1 == this.PlatForm && (this.InterImage[9].visible = !1), this.ScoreLabel.font = RES.getRes("numimage_fnt"), this.ScoreLabel.text = "x" + this.NumScoreTT, this.ScoreLabel.x = 75 - this.iPhoneW, this.ScoreLabel.y = 60, this.ScoreLabel.scaleX = .7, this.ScoreLabel.scaleY = .7, this.ScoreLabel.anchorOffsetX = 0, this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2, this.Trailing[0].x = 568, this.Trailing[0].y = 0, this.Trailing[0].emitterY = 405, this.Trailing[0].start(), 0 == this.PlatForm && egret.Tween.get(this.InterImage[9], {
                loop: !0
            }).to({
                scaleX: .95,
                scaleY: .95
            }, 600).to({
                scaleX: 1,
                scaleY: 1
            }, 600), egret.Tween.get(this.InterImage[1], {
                loop: !0
            }).to({
                scaleX: .95,
                scaleY: .95
            }, 450).to({
                scaleX: 1,
                scaleY: 1
            }, 80), egret.Tween.get(this.InterImage[5], {
                loop: !0
            }).to({}, 300).to({
                rotation: 360
            }, 400).to({
                alpha: 1
            }, 1300), egret.Tween.get(this.InterImage[5], {
                loop: !0
            }).to({
                y: 280
            }, 500, egret.Ease.getBackOut(0)).to({
                y: 390
            }, 500, egret.Ease.getBackIn(0)).to({
                alpha: 1
            }, 1e3), egret.Tween.get(this.Trailing[0], {
                loop: !0
            }).to({
                emitterY: 280
            }, 500, egret.Ease.getBackOut(0)).to({
                emitterY: 390
            }, 500, egret.Ease.getBackIn(0)).to({}, 1e3);
            for (var e = 0; 3 > e; e++) this.FloorImage[e].pos(1136 * e, 640, 1138, 480);
            this.Connect.getLoginDays() >= 2 && 0 == this.NumLockTT[14] && (this.NumLockTT[14] = 1, egret.setTimeout(this.ShowTipView, this, 500, "Unlock New Role Now !"), this.SaveGameScore()), this.Connect.getLoginDays() >= 3 && 0 == this.NumLockTT[15] && (this.NumLockTT[15] = 1, egret.setTimeout(this.ShowTipView, this, 500, "Unlock New Role Now !"), this.SaveGameScore()), this.GetLoading();
            var t = RES.getRes("soundbg_mp3");
            this.Soundbg = t.play(0)
        } else if (1 == this.choose) {
            this.MapNum = 2, this.BeginState = 0, this.worldStep = 40, this.MapState = 0, this.factor = 50, this.DaoDa = -1, this.GameState = -1, this.CountDownStart = 0, this.CountDownNum = 3, this.MoveCanNot = 0, this.MapAngle = 0, this.NumScore = 0, this.IndexState = 0, this.NumLoad = 0, this.PropNum = -1, this.PropState = 0, this.PropNumState = 0, this.world.gravity = [0, 0], this.ice[0] = new p2.Material(1), this.ice[1] = new p2.Material(2);
            var r = new p2.ContactMaterial(this.ice[0], this.ice[0]);
            r.friction = 0, r.restitution = .5, this.world.addContactMaterial(r);
            var i = new p2.ContactMaterial(this.ice[0], this.ice[1]);
            i.friction = 0, i.restitution = 0, this.world.addContactMaterial(i);
            for (var e = 0; 6 > e; e++) this.HeroState[e] = 1, this.HeroFirstState[e] = 0, this.HeroNumState[e] = -1, this.HeroJumpState[e] = 0;
            this.InterImage[0].pos(568, 320, this.StageWidth + 100, 640), this.InterImage[1].pos(568, 37, 340, 13), this.InterImage[2].pos(398, 36, 1, 10), this.InterImage[2].anchorOffsetX = 0;
            for (var e = 0; 3 > e; e++) this.FloorImage[e].pos(-568 - this.iPhoneW + 1136 * e, 620, 1138, 480);
            for (var e = 0; 12 > e; e++) 6 > e ? (this.TreeImage[e].alpha = .4, this.TreeImage[e].pos(232 + 300 * e, 568, 575, 464)) : e % 2 == 0 ? this.TreeImage[e].pos(232 + 300 * (e - 5), 468, 475, 364) : this.TreeImage[e].pos(232 + 300 * (e - 5), 508, 475, 340);
            this.MapLayer.x = 568, this.CreateRect(0, 640, 3200, 480, 1, 0, "herocheck_png");
            var o = [70, 70, 70, 60, 70, 77, 80, 70, 80, 74, 76, 90, 68, 67, 80, 70, 80, 74, 78, 70, 70, 76],
                a = [62, 62, 58, 60, 60, 60, 62, 62, 62, 62, 56, 62, 56, 60, 58, 60, 60, 60, 60, 60, 60, 60],
                s = [600, 400, 200, 0, -200, -400],
                n = 0;
            if (0 == this.UserRankNum) n = Math.randInt(2, 3);
            else {
                n = this.UserRankNum - 1;
                var h = new egret.Bitmap(RES.getRes("gametips_png"));
                this.addChild(h), h.pos(568, 130, 330, 88), h.scaleX = .3, h.scaleY = .3, h.alpha = 0, egret.Tween.get(h).to({
                    scaleX: 1,
                    scaleY: 1
                }, 500, egret.Ease.getBackOut(1)), egret.Tween.get(h).to({
                    alpha: .9
                }, 400).to({}, 2e3).to({
                    y: h.y - 60,
                    alpha: 0
                }, 500)
            }
            this.CreateHero(s[n], 320, o[this.UserRole[0] - 1], a[this.UserRole[0] - 1], 1, 0, "herocheck_png"), s.splice(n, 1), s.sort(this.randomSort);
            for (var e = 1; 6 > e; e++) this.CreateHero(s[e - 1], 320, o[this.UserRole[e] - 1], a[this.UserRole[e] - 1], 1, e, "herocheck_png");
            for (var e = 6; 12 > e; e++) this.HeroImage[e].pos(this.HeroImage[e - 6].x, this.HeroImage[e - 6].y, 92, 64), 10 == this.UserRole[e - 6] || 11 == this.UserRole[e - 6] ? this.HeroImage[e].x = this.HeroImage[e].x - 10 : this.HeroImage[e].x = this.HeroImage[e].x;
            for (var e = 0; 6 > e; e++) 600 == this.HeroImage[e].x && this.HeroFirst.pos(this.HeroImage[e].x + this.HeroPositionX[this.UserRole[e] - 1], this.HeroImage[e].y - this.HeroImage[e].height / 2 - 14 + this.HeroPositionY[this.UserRole[e] - 1], 47, 28);
            for (var e = 1; 6 > e; e++) this.HeroName[e].size = 20, this.HeroName[e].textColor = 16777215, this.HeroName[e].bold = !0, this.HeroName[e].text = this.UserName[e].substring(0, 8), this.HeroName[e].x = this.HeroImage[e].x + 10, this.HeroName[e].y = this.HeroImage[e].y - this.HeroImage[e].height - 9, this.HeroName[e].anchorOffsetX = this.HeroName[e].width / 2, this.HeroName[e].anchorOffsetY = this.HeroName[e].height / 2;
            for (var e = 1; 6 > e; e++) this.HeroImage2[e].pos(this.HeroName[e].x - this.HeroName[e].width / 2 - 33, this.HeroImage[e].y - this.HeroImage[e].height - 9, 36, 36);
            this.LineImage[0].pos(46250, 390, 18, 1136), egret.Tween.get(this.MapLayer).to({
                rotation: 8
            }, 600), this.CountDownStart = 1;
            for (var e = 0; 6 > e; e++) this.RankImage[e].pos(1030 + this.iPhoneW, 25 + 35 * e, 192, 33);
            for (var e = 0; 6 > e; e++) this.RankScore[e].text = this.UserName[e].substring(0, 13), this.RankScore[e].size = 20, this.RankScore[e].textColor = 1781121, this.RankScore[e].x = 970 + this.iPhoneW, this.RankScore[e].y = 25 + 35 * e - 2, this.RankScore[e].anchorOffsetX = 0, this.RankScore[e].anchorOffsetY = this.RankScore[e].height / 2;
            for (var e = 1; 6 > e; e++) this.RankNum[e].text = e + 1 + "", this.RankNum[e].size = 20, this.RankNum[e].textColor = 1781121, this.RankNum[e].x = 950 + this.iPhoneW, this.RankNum[e].y = 25 + 35 * e - 2, this.RankNum[e].anchorOffsetX = this.RankNum[e].width / 2, this.RankNum[e].anchorOffsetY = this.RankNum[e].height / 2;
            this.CountLabel.font = RES.getRes("numimage_fnt"), this.CountLabel.x = 568, this.CountLabel.y = 220, this.CountLabel.scaleX = 1.6, this.CountLabel.scaleY = 1.6, this.TheFirst.pos(950 + this.iPhoneW, 23, 25, 20), this.SelfImage.pos(920 + this.iPhoneW, this.RankScore[0].y, 20, 20), this.PropImage.pos(-568, 160, 90, 47), this.PropImage.visible = !1, this.System = new particle.GravityParticleSystem(RES.getRes("xuehua_png"), RES.getRes("xuehua_json")), this.addChild(this.System), this.System.start(), this.System.x = 500, this.System.y = -400, this.RankArr = [{
                id: 0,
                x: this.HeroBody[0].position[0]
            }, {
                id: 1,
                x: this.HeroBody[1].position[0]
            }, {
                id: 2,
                x: this.HeroBody[2].position[0]
            }, {
                id: 3,
                x: this.HeroBody[3].position[0]
            }, {
                id: 4,
                x: this.HeroBody[4].position[0]
            }, {
                id: 5,
                x: this.HeroBody[5].position[0]
            }];
            for (var e = 0; 6 > e; e++) this.Trailing[e].x = this.HeroImage[e].x + this.HeroImage[e + 6].width / 2, this.Trailing[e].emitterY = this.HeroImage[e].y + this.HeroImage[e].height / 2;
            this.MapLayer.x = (568 - this.HeroImage[0].x) * Math.cos(8 * Math.PI / 180), this.MapLayer.y = -this.HeroBody[0].position[0] * this.factor * Math.sin(8 * Math.PI / 180) + (368 / Math.cos(8 * Math.PI / 180) - this.HeroImage[0].y), this.RankIng()
        }
    }, t.prototype.LoadResource = function() {
        if (0 == this.choose) {
            this.InterImage[0] = new egret.Bitmap(RES.getRes("titlebg_png")), this.InterImage[1] = new egret.Bitmap(RES.getRes("title_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("titlebtn3_png")), this.InterImage[3] = new egret.Bitmap(RES.getRes("titlebtn2_png")), this.InterImage[4] = new egret.Bitmap(RES.getRes("titlebtn1_png")), this.InterImage[5] = new egret.Bitmap(RES.getRes("hero" + this.NowHeroTT + "_png")), this.InterImage[6] = new egret.Bitmap(RES.getRes("titlebtn4_png")), this.InterImage[7] = new egret.Bitmap(RES.getRes("titlebtn4_png")), this.InterImage[8] = new egret.Bitmap(RES.getRes("hero1_png")), this.InterImage[9] = new egret.Bitmap(RES.getRes("moregame_png")), this.ScoreLabel = new egret.BitmapText, this.Trailing[0] = new particle.GravityParticleSystem(RES.getRes("trailing" + this.NowHeroTT + "_png"), RES.getRes("trailing_json"));
            for (var e = 0; 3 > e; e++) this.FloorImage[e] = new egret.Bitmap(RES.getRes("gamefloor_png"))
        } else if (100 == this.choose);
        else if (1 == this.choose) {
            this.MapLayer = new eui.Group, this.LineImage[0] = new egret.Bitmap(RES.getRes("texiao_png")), this.InterImage[0] = new egret.Bitmap(RES.getRes("gamebg_png")), this.InterImage[1] = new egret.Bitmap(RES.getRes("progress1_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("progress2_png"));
            for (var e = 0; 12 > e; e++) this.TreeImage[e] = new egret.Bitmap(RES.getRes("gamemount_png"));
            for (var e = 0; 6 > e; e++) this.RankImage[e] = new egret.Bitmap(RES.getRes("rankbg_png"));
            this.TheFirst = new egret.Bitmap(RES.getRes("first_png")), this.SelfImage = new egret.Bitmap(RES.getRes("firstmark_png"));
            for (var e = 0; 3 > e; e++) this.FloorImage[e] = new egret.Bitmap(RES.getRes("gamefloor_png"));
            for (var e = 0; 6 > e; e++) this.RankScore[e] = new egret.TextField;
            for (var e = 0; 6 > e; e++) this.RankNum[e] = new egret.TextField;
            for (var e = 1; 6 > e; e++) this.HeroImage2[e] = new egret.Bitmap(this.UserTexture[e]);
            for (var e = 1; 6 > e; e++) this.HeroName[e] = new egret.TextField;
            this.HeroFirst = new egret.Bitmap(RES.getRes("firsthero_png")), this.HeroImage[6] = new egret.Bitmap(RES.getRes("hero" + this.NowHeroTT + "_png")), this.Trailing[0] = new particle.GravityParticleSystem(RES.getRes("trailing" + this.NowHeroTT + "_png"), RES.getRes("trailing_json"));
            for (var e = 7; 12 > e; e++) this.HeroImage[e] = new egret.Bitmap(RES.getRes("hero" + this.UserRole[e - 6] + "_png")), this.Trailing[e - 6] = new particle.GravityParticleSystem(RES.getRes("trailing" + this.UserRole[e - 6] + "_png"), RES.getRes("trailing_json"));
            this.PropImage = new egret.Bitmap(RES.getRes("gameitem_png")), this.Trailing[6] = new particle.GravityParticleSystem(RES.getRes("speedup_png"), RES.getRes("speedup_json")), this.CountLabel = new egret.BitmapText
        }
    }, t.prototype.PutThePicture = function() {
        if (this.LoadResource(), 0 == this.choose) {
            this.addChild(this.InterImage[0]);
            for (var e = 0; 3 > e; e++) this.addChild(this.FloorImage[e]);
            this.addChild(this.Trailing[0]);
            for (var e = 1; 9 > e; e++) this.addChild(this.InterImage[e]);
            this.addChild(this.InterImage[9]), this.addChild(this.ScoreLabel)
        } else if (100 == this.choose);
        else if (1 == this.choose) {
            for (var e = 0; 3 > e; e++) this.addChild(this.InterImage[e]);
            for (var e = 0; 12 > e; e++) this.addChild(this.TreeImage[e]);
            this.addChild(this.MapLayer), this.addChild(this.CountLabel), this.MapLayer.addChild(this.PropImage);
            for (var e = 0; 6 > e; e++) this.addChild(this.RankImage[e]);
            this.addChild(this.TheFirst), this.addChild(this.SelfImage);
            for (var e = 0; 6 > e; e++) this.addChild(this.RankScore[e]);
            for (var e = 0; 6 > e; e++) this.addChild(this.RankNum[e]);
            for (var e = 1; 6 > e; e++) this.MapLayer.addChild(this.HeroImage2[e]);
            for (var e = 1; 6 > e; e++) this.MapLayer.addChild(this.HeroName[e]);
            for (var e = 0; 3 > e; e++) this.MapLayer.addChild(this.FloorImage[e]);
            for (var e = 0; 6 > e; e++) this.MapLayer.addChild(this.Trailing[e]);
            this.MapLayer.addChild(this.Trailing[6]);
            for (var e = 6; 12 > e; e++) this.MapLayer.addChild(this.HeroImage[e]);
            this.MapLayer.addChild(this.HeroFirst)
        }
    }, t.prototype.ReleaseGame = function() {
        0 == this.choose ? this.Soundbg.stop() : 1 == this.choose && this.world.clear(), egret.Tween.removeAllTweens(), this.removeChildren()
    }, t.prototype.ShowHero = function() {
        this.IndexState = 1, this.BeginX = 0, this.BuyHero = this.NowHeroTT, this.RankLayer = new eui.Group, this.Scroller = new egret.ScrollView, this.ChooseImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), this.ChooseImage[1] = new egret.Bitmap(RES.getRes("herobg_png")), this.ChooseImage[2] = new egret.Bitmap(RES.getRes("overbtn1_png"));
        for (var e = 3; 25 > e; e++) this.ChooseImage[e] = new egret.Bitmap(RES.getRes("hero" + (e - 2) + "_png"));
        this.ChooseImage[25] = new egret.Bitmap(RES.getRes("heroselect_png")), this.ChooseImage[26] = new egret.Bitmap(RES.getRes("herobtn1_png")), this.ChooseImage[27] = new egret.Bitmap(RES.getRes("herobtn2_png"));
        for (var e = 0; 22 > e; e++) this.LoadImage[e] = new egret.Bitmap(RES.getRes("rolebg_png"));
        for (var e = 0; 22 > e; e++) 16 > e ? this.HeroUnlock[e] = new egret.Bitmap(RES.getRes("unlock_png")) : this.HeroUnlock[e] = new egret.Bitmap(RES.getRes("unlock2_png"));
        for (var e = 0; 3 > e; e++) this.addChild(this.ChooseImage[e]);
        this.Scroller.setContent(this.RankLayer), this.addChild(this.Scroller);
        for (var e = 0; 22 > e; e++) this.RankLayer.addChild(this.LoadImage[e]);
        for (var e = 3; 25 > e; e++) this.RankLayer.addChild(this.ChooseImage[e]);
        for (var e = 0; 22 > e; e++) this.RankLayer.addChild(this.HeroUnlock[e]);
        this.RankLayer.addChild(this.ChooseImage[25]), this.addChild(this.ChooseImage[26]), this.addChild(this.ChooseImage[27]), this.ChooseImage[0].pos(568, 320, this.StageWidth + 40, 660), this.ChooseImage[1].pos(568, 320, 700, 540), this.ChooseImage[2].visible = !1, this.ChooseImage[2].pos(96, 90, 82, 88);
        for (var e = 0; 22 > e; e++) this.LoadImage[e].pos(70 + e % 11 * 150, 65 + 157 * Math.floor(e / 11), 130, 130), this.ChooseImage[e + 3].pos(70 + e % 11 * 150, 65 + 157 * Math.floor(e / 11), 92, 64);
        this.ChooseImage[26].pos(452, 502, 90, 80), this.ChooseImage[27].pos(672, 502, 250, 80);
        for (var e = 0; 22 > e; e++) this.HeroUnlock[e].pos(70 + e % 11 * 150, 65 + 157 * Math.floor(e / 11), 130, 130), 1 == this.NumLockTT[e] && (this.HeroUnlock[e].visible = !1);
        this.ChooseImage[25].pos(this.HeroUnlock[this.NowHeroTT - 1].x, this.HeroUnlock[this.NowHeroTT - 1].y, 130, 130), this.FriendsLabel = new egret.BitmapText, this.addChild(this.FriendsLabel), this.FriendsLabel.font = RES.getRes("numimage_fnt"), this.FriendsLabel.text = "12", this.FriendsLabel.x = 672, this.FriendsLabel.y = 496, this.FriendsLabel.scaleX = .6, this.FriendsLabel.scaleY = .6, this.FriendsLabel.visible = !1, this.FriendsLabel.anchorOffsetY = this.FriendsLabel.height / 2, this.UILabel[0] = new egret.TextField, this.addChild(this.UILabel[0]), this.UILabel[0].x = 568, this.UILabel[0].y = 83, this.UILabel[0].text = "Choose Role", this.UILabel[0].size = 26, this.UILabel[0].bold = !0, this.UILabel[0].textAlign = "center", this.UILabel[0].textColor = 16777215, this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2, this.RankLayer.width = 1640, this.RankLayer.height = 300, this.Scroller.x = 240, this.Scroller.y = 130, this.Scroller.width = 660, this.Scroller.height = 300, this.NowHeroTT >= 5 && this.NowHeroTT < 9 || this.NowHeroTT >= 16 && this.NowHeroTT < 19 ? this.Scroller.setScrollLeft(this.ChooseImage[6].x + 10) : (this.NowHeroTT >= 9 && this.NowHeroTT < 11 || this.NowHeroTT >= 19) && this.Scroller.setScrollLeft(this.ChooseImage[12].x + 10), this.CheckInviteRole()
    }, t.prototype.EndHero = function() {
        this.IndexState = 0;
        for (var e = 0; 3 > e; e++) this.removeChild(this.ChooseImage[e]);
        this.removeChild(this.ChooseImage[26]), this.removeChild(this.ChooseImage[27]), this.removeChild(this.FriendsLabel), this.removeChild(this.UILabel[0]), this.RankLayer.removeChildren(), this.removeChild(this.Scroller)
    }, t.prototype.ShowADNow = function(e) {
        0 == e ? 1 == platform.hasRAD() ? (this.Connect.ShowADVideo(), this.VideoState = -1) : this.ShowTipView("Ads is not ready") : 1 == e && (this.NumStyleAD++, 2 == this.NumStyleAD ? (this.NumStyleAD = 0, this.Connect.ShowADChaping()) : this.FirstRound = 1)
    }, t.prototype.CheckADVideo = function() {
        if (-1 == this.VideoState)
            if (this.VideoState = this.Connect.GetADVideoState(), console.log(this.VideoState + "LALA"), 0 == this.VideoState);
            else if (1 == this.VideoState)
            if (1 == this.IndexState) {
                if (this.BuyHero >= 17) 0 == this.NumLockTT[this.BuyHero - 1] && (this.NumLockTT[this.BuyHero - 1] = 1, this.HeroUnlock[this.BuyHero - 1].visible = !1, this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.ChooseImage[27].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"));
                else {
                    this.NumVideoTT++, this.FriendsLabel.visible = !0;
                    var e = 0;
                    6 == this.BuyHero ? e = 1 : 7 == this.BuyHero ? e = 5 : 8 == this.BuyHero ? e = 10 : 9 == this.BuyHero ? e = 15 : 10 == this.BuyHero && (e = 20), this.FriendsLabel.text = "v " + this.NumVideoTT + "l" + e, this.FriendsLabel.anchorOffsetX = this.FriendsLabel.width / 2, this.NumVideoTT >= 1 && 0 == this.NumLockTT[5] ? (this.NumLockTT[5] = 1, this.HeroUnlock[5].visible = !1, 6 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.ChooseImage[27].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"))) : this.NumVideoTT >= 5 && 0 == this.NumLockTT[6] ? (this.NumLockTT[6] = 1, this.HeroUnlock[6].visible = !1, 7 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.ChooseImage[27].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"))) : this.NumVideoTT >= 10 && 0 == this.NumLockTT[7] ? (this.NumLockTT[7] = 1, this.HeroUnlock[7].visible = !1, 8 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.ChooseImage[27].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"))) : this.NumVideoTT >= 15 && 0 == this.NumLockTT[8] ? (this.NumLockTT[8] = 1, this.HeroUnlock[8].visible = !1, 9 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.ChooseImage[27].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"))) : this.NumVideoTT >= 20 && 0 == this.NumLockTT[9] && (this.NumLockTT[9] = 1, this.HeroUnlock[9].visible = !1, 10 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.ChooseImage[27].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!")))
                }
                this.SaveGameScore()
            } else 2 == this.GameState && (this.NumLockTT[this.BuyHero - 1] = 1, this.NowHeroTT = this.BuyHero, this.EndAward(), egret.setTimeout(this.ShowTipView, this, 600, "Unlock Now!"), this.SaveGameScore(), egret.Tween.get(this.OverImage[3]).to({
                y: this.OverImage[3].y - 300
            }, 600), egret.Tween.get(this.OverImage[8]).to({
                y: this.OverImage[8].y - 300
            }, 600), egret.Tween.get(this.OverImage[12]).to({
                y: this.OverImage[12].y - 300
            }, 600), egret.Tween.get(this.InterImage[8]).to({
                y: this.InterImage[8].y - 300
            }, 600));
        this.NumScoreTT >= 300 && 0 == this.NumLockTT[12] ? (this.NumLockTT[12] = 1, this.SaveGameScore(), this.ShowTipView("Unlock New Role Now !")) : this.NumScoreTT >= 1e3 && 0 == this.NumLockTT[13] && (this.NumLockTT[13] = 1, this.SaveGameScore(), this.ShowTipView("Unlock New Role Now !"))
    }, t.prototype.CheckInviteRole = function() {
        if (this.Connect.pullInviteCount(), this.NumFriends = this.Connect.getInviteCount(), (3 == this.BuyHero || 4 == this.BuyHero || 5 == this.BuyHero || 11 == this.BuyHero || 12 == this.BuyHero) && 0 == this.NumLockTT[this.BuyHero - 1]) {
            var e = 0;
            3 == this.BuyHero ? e = 1 : 4 == this.BuyHero ? e = 5 : 5 == this.BuyHero ? e = 10 : 11 == this.BuyHero ? e = 15 : 12 == this.BuyHero && (e = 20), this.FriendsLabel.visible = !0, this.FriendsLabel.text = "s " + this.NumFriends + "l" + e, this.FriendsLabel.anchorOffsetX = this.FriendsLabel.width / 2
        }
        this.NumFriends >= 1 && 0 == this.NumLockTT[2] ? (this.NumLockTT[2] = 1, this.HeroUnlock[2].visible = !1, 3 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.UILabel[0].text = "Choose Role", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2, this.ChooseImage[21].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"))) : this.NumFriends >= 5 && 0 == this.NumLockTT[3] ? (this.NumLockTT[3] = 1, this.HeroUnlock[3].visible = !1, 4 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.UILabel[0].text = "Choose Role", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2, this.ChooseImage[21].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"))) : this.NumFriends >= 10 && 0 == this.NumLockTT[4] ? (this.NumLockTT[4] = 1, this.HeroUnlock[4].visible = !1, 5 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.UILabel[0].text = "Choose Role", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2, this.ChooseImage[21].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"))) : this.NumFriends >= 15 && 0 == this.NumLockTT[10] ? (this.NumLockTT[10] = 1, this.HeroUnlock[10].visible = !1, 11 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.UILabel[0].text = "Choose Role", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2, this.ChooseImage[21].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"))) : this.NumFriends >= 20 && 0 == this.NumLockTT[11] && (this.NumLockTT[11] = 1, this.HeroUnlock[11].visible = !1, 12 == this.BuyHero && (this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.UILabel[0].text = "Choose Role", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2, this.ChooseImage[21].texture = RES.getRes("herobtn2_png"), this.ShowTipView("Unlock Now!"))), this.SaveGameScore()
    }, t.prototype.ShowRank = function() {
        this.IndexState = 2, this.RankLayer = new eui.Group, this.Scroller = new egret.ScrollView, this.RankImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), this.RankImage[1] = new egret.Bitmap(RES.getRes("rankbtn_png")), this.RankImage[2] = new egret.Bitmap(RES.getRes("rankmine1_png")), this.RankImage[3] = new egret.Bitmap(RES.getRes("rankmine2_png")), this.addChild(this.RankImage[0]), this.addChild(this.RankImage[1]), this.addChild(this.RankImage[2]), this.addChild(this.RankImage[3]), this.CountLabel = new egret.BitmapText, this.addChild(this.CountLabel), this.RankImage[0].pos(568, 320, this.StageWidth + 20, this.StageHeight + 20), this.RankImage[1].pos(80 - this.iPhoneW, 570, 82, 88), this.RankImage[2].pos(1035 + this.iPhoneW, 515, 165, 38), this.RankImage[3].pos(1035 + this.iPhoneW, 575, 166, 64);
        var e = this.Connect.GetUserName(1),
            t = this.Connect.GetUserImage(1),
            r = this.Connect.GetUserScore(1);
        this.RankKill > 0 && (e.splice(0, this.RankKill), t.splice(0, this.RankKill), r.splice(0, this.RankKill)), this.CountLabel.font = RES.getRes("numimage_fnt"), this.CountLabel.x = 1035 + this.iPhoneW, this.CountLabel.y = 575, this.CountLabel.scaleX = .5, this.CountLabel.scaleY = .5, this.CountLabel.text = "s " + (this.Connect.GetMyRank() - this.RankKill), this.CountLabel.anchorOffsetX = this.CountLabel.width / 2, this.CountLabel.anchorOffsetY = this.CountLabel.height / 2;
        for (var i, o, a, s, n, h = function(h) {
                i = new egret.Bitmap(RES.getRes("rankviewbg_png")), l.RankLayer.addChild(i), i.pos(320, 50 + 100 * h, 480, 90), 3 > h ? (o = new egret.Bitmap(RES.getRes("rankview" + (h + 1) + "_png")), l.RankLayer.addChild(o), o.pos(115, 50 + 100 * h, 50, 56)) : (a = new egret.BitmapText, l.RankLayer.addChild(a), a.font = RES.getRes("numimage_fnt"), a.x = 115, a.y = 50 + 100 * h, a.text = h + 1 + "", a.scaleX = .75, a.scaleY = .75, a.anchorOffsetX = a.width / 2, a.anchorOffsetY = a.height / 2);
                var c = new egret.Bitmap;
                l.RankLayer.addChild(c), c.pos(190, 100 * h + 50, 66, 66), RES.getResByUrl(t[h], function(e) {
                    c.texture = e
                }, l, RES.ResourceItem.TYPE_IMAGE), s = new egret.TextField, l.RankLayer.addChild(s), s.x = 240, s.y = 100 * h + 50, s.size = 22, s.textColor = 16777215, s.text = "" + e[h], s.width > 180 && (s.width = 180), s.wordWrap = !0, s.anchorOffsetY = s.height / 2, n = new egret.BitmapText, l.RankLayer.addChild(n), n.font = RES.getRes("numimage_fnt"), n.x = 555, n.y = 100 * h + 50, n.scaleX = .5, n.scaleY = .5, n.text = "x" + r[h], n.anchorOffsetX = n.width, n.anchorOffsetY = n.height / 2
            }, l = this, c = 0; c < e.length; c++) h(c);
        this.RankLayer.x = 0, this.RankLayer.y = 50, this.RankLayer.width = 600, this.RankLayer.height = 100 * e.length + 50, this.Scroller.x = 248, this.Scroller.y = 0, this.Scroller.width = 640, this.Scroller.height = 640, this.Scroller.setContent(this.RankLayer), this.addChild(this.Scroller)
    }, t.prototype.CloseRank = function() {
        for (var e = 0; 4 > e; e++) this.removeChild(this.RankImage[e]);
        this.removeChild(this.Scroller), this.removeChild(this.CountLabel), this.RankLayer.removeChildren()
    }, t.prototype.ShowTipView = function(e) {
        var t = new egret.Bitmap(RES.getRes("showtips_png"));
        this.addChild(t), t.alpha = 0, t.scaleX = .3, t.scaleY = .3, t.pos(568, 320, 540, 80);
        var r = new egret.TextField;
        this.addChild(r), r.size = 30, r.x = 568, r.y = 315, r.text = e, r.textColor = 0, r.alpha = 0, r.scaleX = .3, r.scaleY = .3, r.anchorOffsetX = r.width / 2, r.anchorOffsetY = r.height / 2, egret.Tween.get(t).to({
            scaleX: 1,
            scaleY: 1
        }, 400, egret.Ease.getBackOut(1)), egret.Tween.get(r).to({
            scaleX: 1,
            scaleY: 1
        }, 400, egret.Ease.getBackOut(1)), egret.Tween.get(t).to({
            alpha: 1
        }, 300).to({}, 800).to({
            y: t.y - 120,
            alpha: 0
        }, 500), egret.Tween.get(r).to({
            alpha: 1
        }, 300).to({}, 800).to({
            y: r.y - 120,
            alpha: 0
        }, 500);
        var i = RES.getRes("soundwarn_mp3");
        i.play(0, 1)
    }, t.prototype.CreateWorld = function() {
        this.world = new p2.World({
            gravity: [0, 0]
        }), this.world.on("beginContact", this.BeginContact, this), this.world.on("endContact", this.EndContact, this), egret.Ticker.getInstance().register(function(e) {
            this.world.step(this.worldStep / 1e3);
            for (var t = this.world.bodies.length, r = 0; t > r; r++) {
                var i = this.world.bodies[r],
                    o = i.displays[0];
                o && (o.x = i.position[0] * this.factor, o.y = this.StageHeight - i.position[1] * this.factor, o.rotation = 360 - 180 * i.angle / Math.PI)
            }
            if (1 == this.choose && 0 == this.GameState) {
                this.DrawProp(), this.DaoDa < 2 && this.RankIng(), this.MapState++, 1 == this.MapAngle && (15 != this.MapLayer.rotation ? this.MapState / 40 >= 2 && (this.MapLayer.rotation += .25) : this.MapAngle = 3), 2 == this.MapAngle && (this.MapLayer.rotation > 0 ? this.MapState / 40 >= 2 && (this.MapLayer.rotation -= .25) : (this.MapLayer.rotation = 0, this.MapAngle = 3));
                for (var a = 0; 6 > a; a++) 10 == this.UserRole[a] || 11 == this.UserRole[a] ? this.HeroImage[a + 6].x = this.HeroImage[a].x - 10 : this.HeroImage[a + 6].x = this.HeroImage[a].x, this.HeroImage[a + 6].y = this.HeroImage[a].y;
                for (var s = 1; 6 > s; s++) this.HeroName[s].x = this.HeroImage[s].x + 10, this.HeroName[s].y = this.HeroImage[s].y - this.HeroImage[s].height - 10, this.HeroImage2[s].x = this.HeroName[s].x - this.HeroName[s].width / 2 - 33, this.HeroImage2[s].y = this.HeroImage[s].y - this.HeroImage[s].height - 10;
                this.HeroFirst.x = this.HeroImage[this.RankArr[0].id].x + this.HeroPositionX[this.UserRole[this.RankArr[0].id] - 1], 0 == this.HeroFirstState[this.RankArr[0].id] && (this.HeroFirst.y = this.HeroImage[this.RankArr[0].id].y - this.HeroImage[this.RankArr[0].id].height / 2 - 14 + this.HeroPositionY[this.UserRole[this.RankArr[0].id] - 1]), this.MapLayer.x = (568 - this.HeroImage[0].x) * Math.cos(this.MapLayer.rotation * Math.PI / 180), this.MapLayer.y = -this.HeroBody[0].position[0] * this.factor * Math.sin(this.MapLayer.rotation * Math.PI / 180) + (368 / Math.cos(this.MapLayer.rotation * Math.PI / 180) - this.HeroImage[0].y), this.FloorBody.position[0] = this.HeroBody[0].position[0], this.FloorBody.updateAABB()
            }
        }, this)
    }, t.prototype.BeginContact = function(e) {
        var t = this;
        if (0 == this.GameState) {
            var r = e.bodyA,
                i = e.bodyB;
            if (r.id >= 100 && i.id < 100) {
                3 != this.DaoDa && (this.HeroState[i.id] = 0), egret.Tween.get(this.HeroImage[i.id + 6]).to({
                    scaleX: 1.1,
                    scaleY: .9
                }, 100).to({
                    scaleX: .9,
                    scaleY: 1.1
                }, 100).to({
                    scaleX: 1,
                    scaleY: 1
                }, 50), i.id == this.RankArr[0].id && 0 == this.HeroImage[i.id + 6].rotation && (this.HeroFirstState[i.id] = 1, egret.Tween.get(this.HeroFirst).to({
                    y: 312 + this.HeroPositionY[this.UserRole[i.id] - 1]
                }, 100).to({
                    y: 322 + this.HeroPositionY[this.UserRole[i.id] - 1]
                }, 100), egret.setTimeout(function() {
                    t.HeroFirstState[i.id] = 0
                }, this, 200));
                var o = RES.getRes("soundland_mp3");
                o.play(0, 1)
            }
            if (i.id >= 100 && r.id < 100) {
                this.HeroState[r.id] = 0, egret.Tween.get(this.HeroImage[r.id + 6]).to({
                    scaleX: 1.1,
                    scaleY: .9
                }, 100).to({
                    scaleX: .9,
                    scaleY: 1.1
                }, 100).to({
                    scaleX: 1,
                    scaleY: 1
                }, 50), r.id == this.RankArr[0].id && 0 == this.HeroImage[r.id + 6].rotation && (this.HeroFirstState[r.id] = 1, egret.Tween.get(this.HeroFirst).to({
                    y: 312 + this.HeroPositionY[this.UserRole[r.id] - 1]
                }, 100).to({
                    y: 322 + this.HeroPositionY[this.UserRole[r.id] - 1]
                }, 100), egret.setTimeout(function() {
                    t.HeroFirstState[r.id] = 0
                }, this, 200));
                var o = RES.getRes("soundland_mp3");
                o.play(0, 1)
            }
            if (!(r.id >= 100 || i.id >= 100 || 1 == this.DaoDa)) {
                var o = RES.getRes("soundcollision_mp3");
                o.play(0, 1), this.SetColor(this.HeroImage[r.id + 6], 3), this.SetColor(this.HeroImage[i.id + 6], 3), egret.setTimeout(function() {
                    t.SetColor(t.HeroImage[r.id + 6], 1), t.SetColor(t.HeroImage[i.id + 6], 1)
                }, this, 200), Math.abs(this.HeroImage[r.id].y - this.HeroImage[i.id].y) <= 40 ? this.HeroImage[r.id].x > this.HeroImage[i.id].x ? 0 == r.id ? this.HeroNumState[i.id] = 0 : 0 == i.id ? this.HeroNumState[r.id] = 1 : (this.HeroNumState[r.id] = 1, this.HeroNumState[i.id] = 0) : 0 == r.id ? this.HeroNumState[i.id] = 1 : 0 == i.id ? this.HeroNumState[r.id] = 0 : (this.HeroNumState[r.id] = 0, this.HeroNumState[i.id] = 1) : this.StageHeight - r.position[1] * this.factor > 368.2 ? (this.HeroBody[i.id].velocity[1] = 0, this.HeroNumState[r.id] = 0) : this.StageHeight - i.position[1] * this.factor > 368.2 ? (this.HeroBody[r.id].velocity[1] = 0, this.HeroNumState[i.id] = 0) : r.position[1] > i.position[1] ? (this.HeroBody[r.id].velocity[1] = 6, egret.Tween.get(this.HeroImage[r.id + 6]).to({
                    rotation: -360
                }, 400)) : i.position[1] > r.position[1] && (this.HeroBody[i.id].velocity[1] = 6, egret.Tween.get(this.HeroImage[i.id + 6]).to({
                    rotation: -360
                }, 400))
            }
        }
    }, t.prototype.EndContact = function(e) {
        var t = e.bodyA,
            r = e.bodyB;
        t.id >= 100 || r.id >= 100 || 1 == this.DaoDa || (3 == this.HeroState[t.id] ? this.HeroState[t.id] = 0 : 3 == this.HeroState[r.id] && (this.HeroState[r.id] = 0))
    }, t.prototype.CreateHero = function(e, t, r, i, o, a, s) {
        this.HeroImage[a] = new egret.Bitmap(RES.getRes(s)), this.HeroImage[a].pos(e, t, r, i), this.MapLayer.addChild(this.HeroImage[a]), this.HeroImage[a].visible = !1, this.HeroShape[a] = new p2.Rectangle(r / this.factor, i / this.factor), this.HeroBody[a] = new p2.Body({
            mass: o,
            position: [e / this.factor, (this.StageHeight - t) / this.factor]
        }), this.HeroBody[a].damping = 0, this.HeroBody[a].fixedRotation = !0, this.HeroShape[a].material = this.ice[0], this.HeroBody[a].addShape(this.HeroShape[a]), this.HeroBody[a].displays = [this.HeroImage[a]], this.HeroBody[a].id = a, this.world.addBody(this.HeroBody[a])
    }, t.prototype.CreateRect = function(e, t, r, i, o, a, s) {
        var n = new egret.Bitmap(RES.getRes(s));
        n.pos(e, t, r, i), this.MapLayer.addChildAt(n, 0), this.FloorShape = new p2.Rectangle(r / this.factor, i / this.factor), this.FloorBody = new p2.Body({
            mass: 0,
            position: [e / this.factor, (this.StageHeight - t) / this.factor]
        }), this.FloorBody.damping = 0, this.FloorShape.material = this.ice[o], this.FloorBody.addShape(this.FloorShape), this.FloorBody.displays = [n], this.FloorBody.id = 100 + a, this.world.addBody(this.FloorBody)
    }, t.prototype.TimerTick = function() {
        if ((0 == this.choose || 4 == this.DaoDa) && (this.ShopNumState++, 25 == this.ShopNumState ? this.InterImage[8].texture = RES.getRes("hero3_png") : 50 == this.ShopNumState ? this.InterImage[8].texture = RES.getRes("hero7_png") : 75 == this.ShopNumState ? this.InterImage[8].texture = RES.getRes("hero13_png") : 100 == this.ShopNumState && (this.ShopNumState = 0, this.InterImage[8].texture = RES.getRes("hero15_png")), 0 == this.choose))
            for (var e = 0; 3 > e; e++) this.FloorImage[e].x -= 6, this.FloorImage[e].x < -1136 && (this.FloorImage[e].x += 3 * this.FloorImage[e].width - 6);
        1 == this.choose ? 0 == this.GameState && (this.DrawMap(), this.DrawHero(), this.DrawGuai()) : 100 == this.choose
    }, t.prototype.RankIng = function() {
        this.DaoDa < 2 && (this.RankArr = [{
            id: 0,
            x: this.HeroBody[0].position[0]
        }, {
            id: 1,
            x: this.HeroBody[1].position[0]
        }, {
            id: 2,
            x: this.HeroBody[2].position[0]
        }, {
            id: 3,
            x: this.HeroBody[3].position[0]
        }, {
            id: 4,
            x: this.HeroBody[4].position[0]
        }, {
            id: 5,
            x: this.HeroBody[5].position[0]
        }]);
        for (var e, t = 0; 6 > t; t++)
            for (var r = t + 1; 6 > r; r++) this.RankArr[t].x < this.RankArr[r].x && (e = this.RankArr[t], this.RankArr[t] = this.RankArr[r], this.RankArr[r] = e);
        for (var t = 0; 6 > t; t++)
            for (var i = 0; 6 > i; i++) this.RankArr[i].id === t && (this.RankScore[t].y = 25 + 35 * i - 2, this.SelfImage.y = this.RankScore[0].y)
    }, t.prototype.DrawAction = function() {
        if (0 == this.choose);
        else if (1 == this.choose && -1 == this.GameState && 1 == this.CountDownStart)
            if (this.CountDownNum < 0) {
                this.CountDownStart = 2, this.CountLabel.visible = !1, this.world.gravity = [0, -4];
                for (var e = 0; 6 > e; e++) this.HeroBody[this.RankArr[e].id].velocity[0] = .8 * e;
                this.GameState = 0;
                for (var e = 0; 6 > e; e++) this.Trailing[e].start()
            } else {
                var t = "";
                if (0 == this.CountDownNum) {
                    t = "g";
                    var r = RES.getRes("soundstart2_mp3");
                    r.play(0, 1)
                } else t = this.CountDownNum + "";
                this.CountLabel.text = t, this.CountLabel.anchorOffsetX = this.CountLabel.width / 2, this.CountLabel.anchorOffsetY = this.CountLabel.height / 2, this.CountDownNum--;
                var r = RES.getRes("soundstart_mp3");
                r.play(0, 1)
            }
        this.CheckADVideo()
    }, t.prototype.TimerProp = function() {
        (1 == this.choose || 0 != this.GameState) && 0 == this.PropState && (this.PropState = 1, this.Trailing[6].alpha = 1, this.PropImage.x = this.HeroImage[0].x - 750, this.PropImage.y = 150 + 10 * Math.randInt(-2, 3), this.PropImage.visible = !0)
    }, t.prototype.DrawProp = function() {
        var e = this;
        if (1 == this.PropState) {
            this.PropImage.x >= this.HeroImage[0].x + 800 ? (this.PropState = 0, this.PropImage.visible = !1) : this.PropImage.x += 2.4 * this.HeroBody[0].velocity[0];
            for (var t = 0; 6 > t; t++)
                if (this.ImageInImage(this.HeroImage[t], this.PropImage)) {
                    if (this.PropState = 0, this.PropImage.visible = !1, 0 == t) {
                        this.HeroBody[t].velocity[0] += 12;
                        var r = RES.getRes("soundprop_mp3");
                        r.play(0, 1);
                        var r = RES.getRes("soundspeed_mp3");
                        r.play(0, 1)
                    } else this.HeroBody[t].velocity[0] += 8;
                    this.PropNum = t, this.Trailing[6].start(), this.Trailing[6].x = this.HeroImage[t].x + 25, this.Trailing[6].emitterY = this.HeroImage[t].y, this.Trailing[6].emissionTime = 3e3;
                    break
                }
        } - 1 != this.PropNum && (this.Trailing[6].x = this.HeroImage[this.PropNum].x + 25, this.Trailing[6].emitterY = this.HeroImage[this.PropNum].y, 1 == this.Trailing[6].alpha && (this.Trailing[6].alpha = .9, egret.setTimeout(function() {
            0 == e.PropState && (e.PropNum = -1, egret.Tween.get(e.Trailing[6]).to({
                alpha: 0
            }, 100))
        }, this, 3e3)))
    }, t.prototype.DrawMap = function() {
        this.System.y = -400 - (this.StageHeight - this.HeroBody[0].position[1] * this.factor - 368), this.InterImage[2].width = (-this.MapLayer.x + 568) / 5e4 * 340, this.InterImage[2].width > 340 ? this.InterImage[2].width = 340 : this.InterImage[2].width > 100 && 0 == this.MapAngle && (this.MapAngle = 1, this.MapState = 0), this.MapLayer.x - 568 < -49e3 && -1 == this.DaoDa && (this.MapLayer.addChildAt(this.LineImage[0], 0), this.LineImage[0].x = 51450, this.LineImage[0].y = 0, this.DaoDa = 0, this.LineImage[1] = new egret.Bitmap(RES.getRes("overline_png")), this.MapLayer.addChild(this.LineImage[1]), this.LineImage[1].pos(51450, 315, 74, 192)), this.MapLayer.x < -8e3 && 0 == this.PropNumState ? (this.PropNumState = 1, this.TimerProp()) : this.MapLayer.x < -32e3 && 1 == this.PropNumState && (this.PropNumState = 2, this.TimerProp());
        for (var e = 0; 3 > e; e++) this.FloorImage[e].x -= this.MapNum * this.HeroBody[0].velocity[0], this.FloorImage[e].x + this.MapLayer.x / Math.cos(this.MapLayer.rotation * Math.PI / 180) < -1136 && (this.FloorImage[e].x += 3 * this.FloorImage[e].width - 6);
        if (0 == this.GameState)
            for (var e = 0; 12 > e; e++) 6 > e ? (this.TreeImage[e].x -= .3 * this.HeroBody[0].velocity[0], this.TreeImage[e].y = 520 + (368 - this.HeroImage[0].y)) : (this.TreeImage[e].x -= 1 * this.HeroBody[0].velocity[0], e % 2 == 0 ? this.TreeImage[e].y = 420 + (368 - this.HeroImage[0].y) : this.TreeImage[e].y = 460 + (368 - this.HeroImage[0].y)), this.TreeImage[e].x < -this.TreeImage[e].width / 2 && (this.TreeImage[e].x += 4 * this.TreeImage[e].width - 12)
    }, t.prototype.DrawGuai = function() {
        if (2 != this.DaoDa) {
            this.HeroBody[0].velocity[0] < 5 ? this.world.gravity[0] = 3 : this.HeroBody[0].velocity[0] > 5 && this.HeroBody[0].velocity[0] < 8 ? this.world.gravity[0] = .5 : this.HeroBody[0].velocity[0] >= 8 && this.HeroBody[0].velocity[0] < 10 ? this.world.gravity[0] = .1 : this.HeroBody[0].velocity[0] >= 10 && this.HeroBody[0].velocity[0] < 12 ? this.world.gravity[0] = 0 : this.HeroBody[0].velocity[0] >= 12 && (this.world.gravity[0] = -1);
            for (var e = 0; 6 > e; e++) {
                0 != e && this.DaoDa < 3 && (this.HeroBody[e].position[0] * this.factor - this.HeroBody[0].position[0] * this.factor > 1e3 && (this.HeroNumState[e] = 0, this.HeroBody[e].position[0] = this.HeroBody[0].position[0] + 1e3 / this.factor), this.HeroBody[e].position[0] * this.factor - this.HeroBody[0].position[0] * this.factor < -800 && (this.HeroNumState[e] = 1, this.HeroBody[e].position[0] = this.HeroBody[0].position[0] - 800 / this.factor), 0 != this.PropNum && (0 == this.HeroNumState[e] && (this.HeroBody[e].velocity[0] -= .03), 1 == this.HeroNumState[e] && (this.HeroBody[e].velocity[0] += .03))), 0 == this.RankArr[0].id && this.HeroBody[this.RankArr[0].id].velocity[0] - this.HeroBody[this.RankArr[1].id].velocity[0] >= 3 && (this.HeroBody[0].velocity[0] -= .02);
                for (var t = 0, r = 0; 6 > r; r++)
                    if (e != r) {
                        if (0 == this.HeroJumpState[e]) {
                            if (Math.abs(this.HeroImage[e].x - this.HeroImage[r].x) >= 240 && Math.abs(this.HeroImage[e].x - this.HeroImage[r].x) <= 260) {
                                var i = 0;
                                i = 2 == this.CountDownStart ? Math.floor(120 * Math.random()) : 0 == r && this.HeroImage[e].x > this.HeroImage[r].x ? Math.floor(200 * Math.random()) : Math.floor(100 * Math.random()), 70 > i ? 0 != e && (this.HeroBody[e].position[0] < this.HeroBody[r].position[0] && (this.HeroBody[e].velocity[0] - this.HeroBody[r].velocity[0] < 3 ? this.HeroBody[e].velocity[0] += 1 : this.HeroBody[e].velocity[0] - this.HeroBody[r].velocity[0] > 4 && (this.HeroBody[e].velocity[0] -= 1)), this.HeroBody[e].velocity[1] = 5, this.HeroJumpState[e] = 1) : this.HeroJumpState[e] = 1
                            }
                            if (0 != e && 1 == this.PropState && Math.abs(this.HeroImage[e].x - this.PropImage.x) <= 80 && Math.abs(this.HeroImage[e].x - this.PropImage.x) >= 20) {
                                var o = Math.floor(10 * Math.random());
                                2 > o && (this.HeroBody[e].velocity[1] = 5)
                            }
                        }
                        Math.abs(this.HeroImage[e].x - this.HeroImage[r].x) > 300 && t++
                    }
                t >= 5 && this.HeroImage[e].y > 368 && 3 != this.DaoDa && (this.HeroJumpState[e] = 0, 2 == this.CountDownStart && (this.CountDownStart = 3))
            }
        }
    }, t.prototype.DrawHero = function() {
        for (var e = this, t = 0; 6 > t; t++) this.Trailing[t].x = this.HeroImage[t].x, this.Trailing[t].emitterY = this.HeroImage[t].y;
        this.LineImage[0].x - this.HeroImage[0].x < 1e3 && 0 == this.DaoDa && (this.MapNum = 1, this.DaoDa = 1);
        for (var r = function(t) {
                if (i.ImageInImage(i.HeroImage[t], i.LineImage[0]) && .5 != i.HeroImage[t].alpha && i.DaoDa > 0) {
                    i.SetColor(i.HeroImage[t + 6], 3), i.HeroImage[t].alpha = .5, egret.setTimeout(function() {
                        e.SetColor(e.HeroImage[t + 6], 1)
                    }, i, 800), i.RankingNum[t] = new egret.BitmapText, i.MapLayer.addChild(i.RankingNum[t]), i.RankingNum[t].font = RES.getRes("numimage_fnt");
                    for (var r = 0; 6 > r; r++) i.RankArr[r].id == t && (i.RankingNum[t].text = r + 1 + "");
                    i.RankingNum[t].x = i.HeroImage[t].x + 80, i.RankingNum[t].y = i.HeroImage[t].y - 40, i.RankingNum[t].scaleX = 0, i.RankingNum[t].scaleY = 0, i.RankingNum[t].anchorOffsetX = i.RankingNum[t].width / 2, i.RankingNum[t].anchorOffsetY = i.RankingNum[t].height, egret.Tween.get(i.RankingNum[t]).to({
                        scaleX: .9,
                        scaleY: .9
                    }, 500).to({}, 1500).to({
                        scaleX: 0,
                        scaleY: 0
                    }, 500)
                } else .5 == i.HeroImage[t].alpha && (i.RankingNum[t].x = i.HeroImage[t].x + 80, i.RankingNum[t].y = i.HeroImage[t].y - 40)
            }, i = this, t = 0; 6 > t; t++) r(t);
        if (2 == this.DaoDa && (this.LineImage[1].x -= this.MapNum * this.HeroBody[0].velocity[0]), this.HeroImage[0].x > this.LineImage[0].x && 1 == this.DaoDa) {
            this.MapAngle = 2, this.MapState = 0, this.worldStep = 5, this.DaoDa = 2;
            for (var t = 0; 6 > t; t++) this.HeroJumpState[t] = 1;
            var o = RES.getRes("soundover_mp3");
            o.play(0, 1), this.LineImage[0].visible = !1;
            var a = new particle.GravityParticleSystem(RES.getRes("texiao_png"), RES.getRes("texiao_json"));
            a.start(), this.MapLayer.addChild(a), a.x = this.LineImage[0].x, a.y = -200, a.emissionTime = 600, egret.setTimeout(function() {
                e.worldStep = 20
            }, this, 1e3), this.NumShowShare++, 1 == this.NumShowShare ? egret.setTimeout(this.ShowAgain, this, 1500) : egret.setTimeout(this.ShowResult, this, 3e3)
        }
    }, t.prototype.MoveOrNot = function() {
        this.ReleaseGame(), this.choose = 1, this.InitGame()
    }, t.prototype.ShowAgain = function() {
        this.DaoDa = 3, this.InterImage[3] = new egret.Bitmap(RES.getRes("interbg_png")), this.InterImage[4] = new egret.Bitmap(RES.getRes("sharebg_png")), this.InterImage[5] = new egret.Bitmap(RES.getRes("sharetitle_png")), this.InterImage[6] = new egret.Bitmap(RES.getRes("shareclose_png")), this.InterImage[7] = new egret.Bitmap(RES.getRes("sharebtn_png")), this.InterImage[8] = new egret.Bitmap(RES.getRes("shareview_png")), this.addChild(this.InterImage[3]), this.Challenge = new eui.Group, this.addChild(this.Challenge);
        for (var e = 4; 9 > e; e++) this.Challenge.addChild(this.InterImage[e]);
        this.InterImage[3].pos(568, 320, this.StageWidth + 40, 660), this.InterImage[4].pos(568, 320, 440, 380), this.InterImage[5].pos(553, 172, 300, 30), this.InterImage[6].pos(743, 172, 37, 37), this.InterImage[7].pos(568, 430, 200, 96), this.InterImage[8].pos(568, 290, 263, 90), this.Challenge.y = -640, egret.Tween.get(this.Challenge).to({
            y: 0
        }, 500, egret.Ease.getBackOut(1))
    }, t.prototype.EndAgain = function() {
        this.removeChild(this.InterImage[3]), egret.Tween.removeTweens(this.Challenge), this.removeChild(this.Challenge)
    }, t.prototype.GetLoading = function() {
        for (var e = this, t = 0; 6 > t; t++) this.UserLoadState[t] = 0;
        var r = 0,
            i = [],
            o = [];
        i[0] = this.Connect.GetMyName(), o[0] = this.Connect.GetMyImage();
        var a = this.Connect.GetUserID(2),
            s = this.Connect.GetUserName(2),
            n = (this.Connect.GetUserScore(2), this.Connect.GetUserImage(2));
        if (a.length > 1 && 1 == this.SuperMan) {
            for (var t = 0; t < a.length; t++) {
                var h = Math.floor(Math.random() * (a.length - 1)),
                    l = a[t];
                a[t] = a[h], a[h] = l;
                var c = s[t];
                s[t] = s[h], s[h] = c;
                var u = n[t];
                n[t] = n[h], n[h] = u
            }
            for (var t = 0; t < a.length; t++)
                if (a[t] != this.Connect.GetMyID() && (r++, i[r] = s[t], o[r] = n[t], r >= 1)) {
                    console.log("最多取1名好友成绩");
                    break
                }
        }
        if (5 > r) {
            var g = this.Connect.GetUserID(1),
                p = this.Connect.GetUserName(1),
                d = this.Connect.GetUserImage(1);
            if (g.length <= 5)
                for (var t = r + 1; 6 > t; t++) i[t] = "SuperMan" + t, o[t] = "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1919308798192205&height=256&width=256&ext=1556338068&hash=AeT6AJodDv0PCryf";
            else {
                for (var t = 0; t < g.length; t++) {
                    var h = Math.floor(Math.random() * (g.length - 1)),
                        l = g[t];
                    g[t] = g[h], g[h] = l;
                    var c = p[t];
                    p[t] = p[h], p[h] = c;
                    var u = d[t];
                    d[t] = d[h], d[h] = u
                }
                for (var t = 0; t < g.length; t++)
                    if (g[t] != this.Connect.GetMyID() && (r++, i[r] = p[t], o[r] = d[t], r >= 5)) {
                        console.log("取到5名成绩了");
                        break
                    }
            }
        }
        this.UserName = i, this.UserImage = o;
        for (var m = function(t) {
                RES.getResByUrl(f.UserImage[t], function(r) {
                    e.UserTexture[t] = r, e.UserLoadState[t] = 1
                }, f, RES.ResourceItem.TYPE_IMAGE)
            }, f = this, t = 0; 6 > t; t++) m(t)
    }, t.prototype.ShowLoading = function() {
        this.MoveCanNot = 1, this.NumLoad = 0;
        var e = [];
        e[0] = this.NowHeroTT;
        for (var t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], r = 0; 16 > r; r++) this.NowHeroTT == t[r] && t.splice(r, 1);
        t.sort(this.randomSort);
        for (var r = 1; 6 > r; r++) e[r] = t[r];
        this.UserRole = e;
        for (var r = 0; 6 > r; r++) this.LoadImage[r] = new egret.Bitmap(RES.getRes("inter3_png"));
        this.LoadImage[6] = new egret.Bitmap(RES.getRes("interbg_png")), this.LoadImage[7] = new egret.Bitmap(RES.getRes("matchbg_png")), this.LoadImage[8] = new egret.Bitmap(RES.getRes("inter1_png")), this.LoadImage[9] = new egret.Bitmap(RES.getRes("inter2_png")), this.LoadImage[10] = new egret.Bitmap(RES.getRes("matchtitle_png")), this.addChild(this.LoadImage[6]), this.addChild(this.LoadImage[7]);
        for (var r = 0; 6 > r; r++) this.addChild(this.LoadImage[r]);
        this.addChild(this.LoadImage[8]), this.addChild(this.LoadImage[9]), this.addChild(this.LoadImage[10]), this.LoadImage[6].pos(568, 320, this.StageWidth + 40, 660), this.LoadImage[7].pos(568, 320, 440, 390), this.LoadImage[8].pos(568, 209, 300, 20), this.LoadImage[9].anchorOffsetX = 0, this.LoadImage[9].pos(418, 209, 0, 20), this.LoadImage[10].pos(568, 160, 278, 28);
        for (var r = 0; 6 > r; r++) this.LoadImage[r].pos(438 + r % 3 * 136, 316 + 120 * Math.floor(r / 3), 90, 90);
        this.ArrLoad = [0, 1, 2, 3, 4, 5], this.ArrLoad.sort(this.randomSort), console.log(this.ArrLoad);
        for (var r = 0; 6 > r; r++) egret.setTimeout(this.LoadAvatar, this, r * (200 + 100 * Math.randInt(1, 3)), r)
    }, t.prototype.randomSort = function(e, t) {
        return Math.random() > .5 ? -1 : 1
    }, t.prototype.LoadAvatar = function(e) {
        var t = this;
        0 == this.UserLoadState[this.ArrLoad[e]] ? (console.log("该头像还未加载好"), RES.getResByUrl(this.UserImage[this.ArrLoad[e]], function(r) {
            t.UserTexture[t.ArrLoad[e]] = r, t.UserLoadState[t.ArrLoad[e]] = 1, t.EndLoading(e, t.UserTexture[t.ArrLoad[e]])
        }, this, RES.ResourceItem.TYPE_IMAGE)) : this.EndLoading(e, this.UserTexture[this.ArrLoad[e]])
    }, t.prototype.EndLoading = function(e, t) {
        var r = this;
        e = this.NumLoad, this.LoadImage[this.ArrLoad[e]].texture = t;
        var i = new egret.Bitmap(RES.getRes("inter3_png"));
        this.addChild(i), i.pos(this.LoadImage[this.ArrLoad[e]].x, this.LoadImage[this.ArrLoad[e]].y, 90, 90), this.LoadImage[this.ArrLoad[e]].mask = i, this.NumLoad++, egret.Tween.get(this.LoadImage[9]).to({
            width: 50 * this.NumLoad
        }, 200), this.NumLoad >= 6 && egret.setTimeout(function() {
            r.ReleaseGame(), r.choose = 1, r.InitGame()
        }, this, 1e3)
    }, t.prototype.ShowAward = function(e) {
        this.GameState = 2, this.Challenge = new eui.Group, this.ChooseImage[0] = new egret.Bitmap(RES.getRes("sharebg_png")), this.ChooseImage[1] = new egret.Bitmap(RES.getRes("newtitle_png")), this.ChooseImage[2] = new egret.Bitmap(RES.getRes("newdouble_png")), this.ChooseImage[3] = new egret.Bitmap(RES.getRes("newcontent_png")), this.ChooseImage[4] = new egret.Bitmap(RES.getRes("newbtn1_png")), this.ChooseImage[5] = new egret.Bitmap(RES.getRes("newbtn2_png")), this.ChooseImage[6] = new egret.Bitmap(RES.getRes("hero" + e + "_png")), this.addChild(this.Challenge);
        for (var t = 0; 7 > t; t++) this.Challenge.addChild(this.ChooseImage[t]);
        this.Challenge.width = 1136, this.Challenge.height = 640, this.Challenge.x = 568, this.Challenge.y = 320, this.Challenge.scaleX = 0, this.Challenge.scaleY = 0, this.Challenge.anchorOffsetX = 568, this.Challenge.anchorOffsetY = 320, this.ChooseImage[2].scaleX = 0, this.ChooseImage[2].scaleY = 0, this.ChooseImage[0].pos(568, 320, 450, 390), this.ChooseImage[1].pos(575, 172, 220, 32), this.ChooseImage[2].pos(390, 214, 77, 77), this.ChooseImage[3].pos(568, 356, 340, 16), this.ChooseImage[4].pos(433, 440, 100, 96), this.ChooseImage[5].pos(638, 440, 230, 96), this.ChooseImage[6].pos(568, 320, 92, 64), this.ChooseImage[6].anchorOffsetY = 64, egret.Tween.get(this.Challenge).to({
            scaleX: 1,
            scaleY: 1
        }, 800, egret.Ease.getBackOut(2)), egret.Tween.get(this.ChooseImage[6], {
            loop: !0
        }).to({
            scaleX: 1.05,
            scaleY: .95
        }, 500).to({
            scaleX: .95,
            scaleY: 1.05
        }, 500).to({
            scaleX: 1,
            scaleY: 1
        }, 300), egret.Tween.get(this.ChooseImage[2]).to({}, 800).to({
            scaleX: 1,
            scaleY: 1
        }, 600, egret.Ease.getBackOut(2))
    }, t.prototype.EndAward = function() {
        this.GameState = 1, this.BeginResult(), egret.Tween.removeTweens(this.ChooseImage[6]), this.Challenge.removeChildren()
    }, t.prototype.ShowResult = function() {
        this.MoveCanNot = 0, this.ShopNumState = 0, this.DaoDa = 4, this.GameState = 1, this.BeginState = 1, this.ReleaseGame(), this.OverImage[0] = new egret.Bitmap(RES.getRes("titlebg_png")), this.OverImage[1] = new egret.Bitmap(RES.getRes("gamefloor_png")), this.OverImage[2] = new egret.Bitmap(RES.getRes("overbottom_png")), this.OverImage[3] = new egret.Bitmap(RES.getRes("overbtn1_png")), this.OverImage[4] = new egret.Bitmap(RES.getRes("overcrown_png")), this.OverImage[5] = new egret.Bitmap(RES.getRes("overwin_png")), this.OverImage[6] = new egret.Bitmap(RES.getRes("overcup1_png")), this.OverImage[7] = new egret.Bitmap(RES.getRes("overpodium_png")), this.OverImage[8] = new egret.Bitmap(RES.getRes("herobtn2_png")), this.OverImage[9] = new egret.Bitmap(RES.getRes("hero" + this.UserRole[this.RankArr[0].id] + "_png")), this.OverImage[10] = new egret.Bitmap(RES.getRes("hero" + this.UserRole[this.RankArr[1].id] + "_png")), this.OverImage[11] = new egret.Bitmap(RES.getRes("hero" + this.UserRole[this.RankArr[2].id] + "_png")), this.OverImage[12] = new egret.Bitmap(RES.getRes("titlebtn4_png")), this.OverImage[13] = new egret.Bitmap(RES.getRes("moregame_png")), this.InterImage[8] = new egret.Bitmap(RES.getRes("hero1_png"));
        for (var e = 0; 6 > e; e++) this.RankImage[e] = new egret.Bitmap(RES.getRes("rankbg_png")), this.RankScore[e] = new egret.TextField;
        for (var e = 1; 6 > e; e++) this.RankNum[e] = new egret.TextField;
        this.TheFirst = new egret.Bitmap(RES.getRes("first_png")), this.SelfImage = new egret.Bitmap(RES.getRes("firstmark_png"));
        for (var e = 0; 6 > e; e++) this.RankImage[e].pos(1030 + this.iPhoneW, 25 + 35 * e, 192, 33);
        for (var e = 0; 6 > e; e++) this.RankScore[e].text = this.UserName[this.RankArr[e].id].substring(0, 13), this.RankScore[e].size = 20, this.RankScore[e].textColor = 1781121, this.RankScore[e].x = 970 + this.iPhoneW, this.RankScore[e].y = 23 + 35 * e, this.RankScore[e].anchorOffsetX = 0, this.RankScore[e].anchorOffsetY = this.RankScore[e].height / 2, 0 == this.RankArr[e].id && this.SelfImage.pos(920 + this.iPhoneW, this.RankScore[e].y, 20, 20);
        for (var e = 1; 6 > e; e++) this.RankNum[e].text = e + 1 + "", this.RankNum[e].size = 20, this.RankNum[e].textColor = 1781121, this.RankNum[e].x = 950 + this.iPhoneW, this.RankNum[e].y = 25 + 35 * e - 2, this.RankNum[e].anchorOffsetX = this.RankNum[e].width / 2, this.RankNum[e].anchorOffsetY = this.RankNum[e].height / 2;
        this.TheFirst.pos(950 + this.iPhoneW, 23, 25, 20);
        for (var e = 0; 9 > e; e++) this.addChild(this.OverImage[e]);
        this.addChild(this.OverImage[12]), this.addChild(this.InterImage[8]);
        for (var e = 0; 6 > e; e++) this.addChild(this.RankImage[e]);
        for (var e = 0; 6 > e; e++) this.addChild(this.RankScore[e]);
        for (var e = 1; 6 > e; e++) this.addChild(this.RankNum[e]);
        for (var e = 9; 12 > e; e++) this.addChild(this.OverImage[e]);
        this.addChild(this.OverImage[13]), this.addChild(this.TheFirst), this.addChild(this.SelfImage), this.OverImage[0].pos(568, 320, this.StageWidth, 640), this.OverImage[1].pos(568, 630, this.StageWidth, 480), this.OverImage[2].pos(568, 545, this.StageWidth + 40, 208), this.OverImage[3].pos(363, 552, 100, 96), this.OverImage[4].pos(568, 50, 60, 49), this.OverImage[5].pos(205 - this.iPhoneW / 2, 198, 194, 58), this.OverImage[6].pos(201 - this.iPhoneW / 2, 319, 138, 146), this.OverImage[7].pos(568, 340, 360, 233), this.OverImage[8].pos(568, 552, 250, 96), this.OverImage[9].pos(568, 210, 92, 64), this.OverImage[10].pos(450, 286, 92, 64), this.OverImage[10].anchorOffsetY = 64, this.OverImage[11].pos(690, 325, 92, 64), this.OverImage[11].anchorOffsetY = 64, this.OverImage[12].pos(773, 552, 100, 96), 1 == this.PlatForm && (this.OverImage[13].visible = !1), this.OverImage[13].pos(1033 + this.iPhoneW, 328, 140, 180), this.InterImage[8].pos(773, 547, 73, 51);
        for (var e = 0; 6 > e; e++) 0 == this.RankArr[e].id && (this.HeroRank = e + 1, this.UserRankNum = e + 1);
        var t = RES.getRes("soundwin_mp3");
        if (t.play(0, 1), this.ScoreLabel = new egret.BitmapText, this.addChild(this.ScoreLabel), this.ScoreLabel.font = RES.getRes("numimage_fnt"), this.NowHeroTT >= 17) {
            var r = 2 * (14 - 2 * this.HeroRank);
            this.ScoreLabel.text = "x+" + r
        } else {
            var r = 14 - 2 * this.HeroRank;
            this.ScoreLabel.text = "x+" + r
        }
        r > 10 ? this.MapNum = 1 : this.MapNum = 0, this.ScoreLabel.x = 568, this.ScoreLabel.y = 470, this.ScoreLabel.alpha = 0, this.ScoreLabel.scaleX = .3, this.ScoreLabel.scaleY = .3, this.ScoreLabel.anchorOffsetX = this.ScoreLabel.width / 2, this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2, this.NowHeroTT >= 16 ? this.NumScore = this.NumScoreTT + 2 * (14 - 2 * this.HeroRank) : this.NumScore = this.NumScoreTT + (14 - 2 * this.HeroRank), this.CountLabel = new egret.BitmapText, this.addChild(this.CountLabel), this.CountLabel.font = RES.getRes("numimage_fnt"), this.CountLabel.text = "x" + this.NumScoreTT, this.CountLabel.x = 75 - this.iPhoneW, this.CountLabel.y = 50, this.CountLabel.scaleX = .7, this.CountLabel.scaleY = .7, this.CountLabel.anchorOffsetX = 0, this.CountLabel.anchorOffsetY = this.CountLabel.height / 2, this.RankingNum[0] = new egret.BitmapText, this.addChild(this.RankingNum[0]), this.RankingNum[0].font = RES.getRes("numimage_fnt"), this.RankingNum[0].text = "r" + (this.Connect.GetMyRank() - this.RankKill), this.RankingNum[0].x = 72 - this.iPhoneW, this.RankingNum[0].y = 100, this.RankingNum[0].scaleX = .6, this.RankingNum[0].scaleY = .6, this.RankingNum[0].anchorOffsetX = 0, this.RankingNum[0].anchorOffsetY = this.RankingNum[0].height / 2;
        for (var e = 0; 3 > e; e++) {
            var i = new egret.TextField;
            this.addChildAt(i, 2), i.text = this.UserName[this.RankArr[e].id].substring(0, 8), i.size = 20;
            var o = new egret.Bitmap(this.UserTexture[this.RankArr[e].id]);
            this.addChildAt(o, 2), 0 == e ? (o.pos(528, 137, 30, 30), i.x = 548, i.y = 137) : 1 == e ? (o.pos(410, 184, 30, 30), i.x = 430, i.y = 184) : (o.pos(650, 214, 30, 30), i.x = 675, i.y = 214), i.anchorOffsetX = 0, i.anchorOffsetY = i.height / 2, 0 == this.RankArr[e].id && (i.textColor = 16771100);
            var a = new egret.Shape;
            this.addChildAt(a, 2), a.graphics.beginFill(255), a.graphics.drawCircle(o.x, o.y, 15), a.graphics.endFill(), o.mask = a
        }
        this.HeroRank > 3 ? (this.OverImage[5].visible = !1, this.OverImage[6].visible = !1) : 1 == this.HeroRank ? egret.Tween.get(this.OverImage[5], {
            loop: !0
        }).to({
            rotation: 10
        }, 800).to({
            rotation: 0
        }, 800).to({
            rotation: -10
        }, 800).to({
            rotation: 0
        }, 800) : (this.OverImage[5].visible = !1, this.OverImage[6].texture = RES.getRes("overcup" + this.HeroRank + "_png")), 0 == this.PlatForm && egret.Tween.get(this.OverImage[13], {
            loop: !0
        }).to({
            scaleX: .95,
            scaleY: .95
        }, 600).to({
            scaleX: 1,
            scaleY: 1
        }, 600), egret.Tween.get(this.OverImage[4], {
            loop: !0
        }).to({
            y: 80
        }, 800).to({
            y: 50
        }, 800), egret.Tween.get(this.OverImage[10], {
            loop: !0
        }).to({
            scaleX: 1.05,
            scaleY: .95
        }, 500).to({
            scaleX: .95,
            scaleY: 1.05
        }, 500).to({
            scaleX: 1,
            scaleY: 1
        }, 300), egret.Tween.get(this.OverImage[11], {
            loop: !0
        }).to({
            scaleX: 1.05,
            scaleY: .95
        }, 600).to({
            scaleX: .95,
            scaleY: 1.05
        }, 600).to({
            scaleX: 1,
            scaleY: 1
        }, 300), egret.Tween.get(this.OverImage[9], {
            loop: !0
        }).to({
            scaleX: 1.1,
            scaleY: .9
        }, 600).to({
            scaleX: 1,
            scaleY: 1
        }, 300).to({}, 900), egret.Tween.get(this.OverImage[9], {
            loop: !0
        }).to({}, 1100).to({
            rotation: -360
        }, 500).to({}, 200), egret.Tween.get(this.OverImage[9], {
            loop: !0
        }).to({}, 800).to({
            y: 130
        }, 500, egret.Ease.getBackOut(0)).to({
            y: 210
        }, 500, egret.Ease.getBackIn(0)), egret.setTimeout(this.ShowADNow, this, 600, 1), this.NumScore > this.NumScoreTT && (this.NumScoreTT = this.NumScore, this.SaveGameScore(), this.Connect.UpLoadScore(this.NumScoreTT));
        var s = [17, 18, 19, 20, 21, 22],
            n = 0;
        if (1 == platform.hasRAD() && this.NumShowShare >= 3 && this.NumShowShare % 2 == 1) {
            for (var e = 0; 6 > e; e++) 1 == this.NumLockTT[s[e] - 1] && (s.splice(e, 1), n++, e--);
            if (6 > n) {
                this.OverImage[3].y = 852, this.OverImage[8].y = 852, this.OverImage[12].y = 852, this.InterImage[8].y = 847, this.OverImage[13].visible = !1;
                var h = Math.randInt(0, 5 - n);
                egret.setTimeout(this.ShowAward, this, 600, s[h]), this.BuyHero = s[h]
            } else this.BeginResult()
        } else this.BeginResult();
        this.GetLoading()
    }, t.prototype.BeginResult = function() {
        var e = this;
        if (this.BeginState = 0, 0 == this.MapNum) var t = 123;
        else var t = 135;
        if (0 == this.PlatForm && (this.OverImage[13].visible = !0), egret.Tween.get(this.ScoreLabel).to({}, 400).to({
                scaleX: .7,
                scaleY: .7,
                alpha: 1
            }, 400, egret.Ease.getBackOut(5)).to({}, 800).to({
                x: t - this.iPhoneW,
                y: 50,
                alpha: .6
            }, 1100, egret.Ease.getBackOut(0)).to({
                alpha: 0
            }, 0), this.HeroRank < 4) {
            var r = new particle.GravityParticleSystem(RES.getRes("texiao1_png"), RES.getRes("texiao1_json"));
            this.addChild(r), r.x = 568, r.y = 100, r.start(), r.emissionTime = 200
        }
        egret.setTimeout(function() {
            e.CountLabel.text = "x" + e.NumScore, e.RankingNum[0].text = "r" + (e.Connect.GetMyRank() - e.RankKill)
        }, this, 2600)
    }, t.prototype.EndResult = function() {
        egret.Tween.removeAllTweens();
        for (var e = 2; 14 > e; e++) this.removeChild(this.OverImage[e]);
        for (var e = 0; 6 > e; e++) this.removeChild(this.RankImage[e]), this.removeChild(this.RankScore[e]);
        for (var e = 1; 6 > e; e++) this.removeChild(this.RankNum[e]);
        this.removeChild(this.SelfImage), this.removeChild(this.TheFirst), this.removeChild(this.ScoreLabel), this.removeChild(this.InterImage[8])
    }, t.prototype.PointInImage = function(e, t, r) {
        return e > r.x - r.width / 2 && e < r.x + r.width / 2 && t > r.y - r.height / 2 && t < r.y + r.height / 2 ? !0 : !1
    }, t.prototype.ImageInImage2 = function(e, t) {
        var r = e.x * Math.cos(this.MapLayer.rotation * Math.PI / 180) + this.MapLayer.x,
            i = t.x * Math.cos(this.MapLayer.rotation * Math.PI / 180);
        return r - e.width / 2 < i + t.width / 2 && r + e.width / 2 > i - t.width / 2 && e.y - e.height / 2 < 160 + t.height / 2 && e.y + e.height / 2 > 160 - t.height / 2 ? !0 : !1
    }, t.prototype.ImageInImage = function(e, t) {
        return e.x - e.width / 2 < t.x + t.width / 2 && e.x + e.width / 2 > t.x - t.width / 2 && e.y - e.height / 2 < t.y + t.height / 2 && e.y + e.height / 2 > t.y - t.height / 2 ? !0 : !1
    }, t.prototype.PointInRect = function(e, t, r, i, o) {
        return o.x > e && o.x < e + r && o.y > t && o.y < t + i ? !0 : !1
    }, t.prototype.SetColor = function(e, t) {
        var r = [];
        1 == t ? r = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0] : 2 == t ? r = [1, 0, 0, 0, -60, 0, 1, 0, 0, -60, 0, 0, 1, 0, -60, 0, 0, 0, 1, 0] : 3 == t && (r = [1, 0, 0, 0, 80, 0, 1, 0, 0, 80, 0, 0, 1, 0, 80, 0, 0, 0, 1, 0]);
        var i = new egret.ColorMatrixFilter(r);
        e.filters = [i]
    }, t.prototype.SaveGameScore = function() {
        this.NowHeroTT != this.NowHeroTT_S && (egret.localStorage.setItem("NowHero", this.NowHeroTT + ""), this.NowHeroTT_S = this.NowHeroTT), this.NumVideoTT != this.NumVideoTT_S && (egret.localStorage.setItem("NumVideo", this.NumVideoTT + ""), this.NumVideoTT_S = this.NumVideoTT), this.NumScoreTT != this.NumScoreTT_S && (egret.localStorage.setItem("NumScore", this.NumScoreTT + ""), this.NumScoreTT_S = this.NumScoreTT);
        for (var e = 0; 22 > e; e++) this.NumLockTT[e] != this.NumLockTT_S[e] && (egret.localStorage.setItem("NumLock" + (e + 1), this.NumLockTT[e] + ""), this.NumLockTT_S[e] = this.NumLockTT[e]);
        this.Connect.setCurentScore(this.NumScoreTT)
    }, t.prototype.LoadGameScore = function() {
        this.NowHeroTT = +egret.localStorage.getItem("NowHero"), this.NowHeroTT_S = this.NowHeroTT, this.NumVideoTT = +egret.localStorage.getItem("NumVideo"), this.NumVideoTT_S = this.NumVideoTT, this.NumScoreTT = +egret.localStorage.getItem("NumScore"), this.NumScoreTT_S = this.NumScoreTT;
        for (var e = 0; 22 > e; e++) this.NumLockTT[e] = +egret.localStorage.getItem("NumLock" + (e + 1)), this.NumLockTT_S[e] = this.NumLockTT[e]
    }, t.prototype.TouchBegin = function(e) {
        if (0 == this.MoveCanNot) {
            var t = new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2);
            if (1 != this.IndexState) {
                if (0 == this.choose) {
                    if (0 == this.IndexState) {
                        if (this.PointInRect(90, 246, 50, 48, t)) {
                            this.SetColor(this.InterImage[2], 2);
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        } else if (this.PointInRect(150, 246, 128, 48, t)) {
                            this.SetColor(this.InterImage[3], 2);
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        } else if (this.PointInRect(284, 246, 128, 48, t)) {
                            this.SetColor(this.InterImage[4], 2);
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        } else if (this.PointInRect(428, 246, 50, 48, t)) {
                            this.SetColor(this.InterImage[6], 2), this.SetColor(this.InterImage[8], 2);
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        } else if (this.PointInRect(472 + this.iPhoneW / 2, 25, 70, 90, t) && 0 == this.PlatForm) {
                            this.InterImage[9].alpha = .7;
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        }
                    } else if (2 == this.IndexState)
                        if (this.PointInRect(20 - this.iPhoneW / 2, 262, 50, 50, t)) {
                            this.SetColor(this.RankImage[1], 2);
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        } else if (this.PointInRect(480 + this.iPhoneW / 2, 267, 80, 40, t)) {
                        this.SetColor(this.RankImage[3], 2);
                        var r = RES.getRes("soundpress_mp3");
                        r.play(0, 1)
                    }
                } else if (100 == this.choose) this.PointInRect(762, 7, 194, 91, t) && this.SetColor(this.InterImage[1], 2);
                else if (1 == this.choose)
                    if (0 == this.GameState) {
                        if (3 == this.DaoDa) {
                            if (this.PointInRect(353, 63, 40, 40, t)) {
                                this.SetColor(this.InterImage[6], 2);
                                var r = RES.getRes("soundpress_mp3");
                                r.play(0, 1)
                            } else if (this.PointInRect(237, 190, 100, 50, t)) {
                                this.SetColor(this.InterImage[7], 2);
                                var r = RES.getRes("soundpress_mp3");
                                r.play(0, 1)
                            }
                        } else if (this.HeroState[0] < 2) {
                            this.HeroState[0]++, 2 == this.HeroState[0] ? (this.HeroBody[0].velocity[1] = 5, egret.Tween.get(this.HeroImage[6]).to({
                                rotation: 360
                            }, 600)) : this.HeroBody[0].velocity[1] = 6, 0 == this.RankArr[0].id && egret.Tween.removeTweens(this.HeroFirst), this.HeroFirstState[0] = 0;
                            var r = RES.getRes("soundjump_mp3");
                            r.play(0, 1)
                        }
                    } else if (1 == this.GameState) {
                    if (this.PointInRect(156, 243, 50, 50, t) && 0 == this.BeginState) {
                        this.SetColor(this.OverImage[3], 2);
                        var r = RES.getRes("soundpress_mp3");
                        r.play(0, 1)
                    } else if (this.PointInRect(221, 243, 125, 50, t) && 0 == this.BeginState) {
                        this.SetColor(this.OverImage[8], 2);
                        var r = RES.getRes("soundpress_mp3");
                        r.play(0, 1)
                    } else if (this.PointInRect(361, 243, 50, 50, t) && 0 == this.BeginState) {
                        this.SetColor(this.OverImage[12], 2);
                        var r = RES.getRes("soundpress_mp3");
                        r.play(0, 1)
                    } else if (this.PointInRect(481 + this.iPhoneW / 2, 119, 70, 90, t) && 0 == this.PlatForm && 0 == this.BeginState) {
                        this.OverImage[13].alpha = .7;
                        var r = RES.getRes("soundpress_mp3");
                        r.play(0, 1)
                    }
                } else if (2 == this.GameState)
                    if (this.PointInRect(192, 196, 42, 48, t)) {
                        this.SetColor(this.ChooseImage[4], 2);
                        var r = RES.getRes("soundpress_mp3");
                        r.play(0, 1)
                    } else if (this.PointInRect(238, 190, 163, 58, t)) {
                    this.SetColor(this.ChooseImage[5], 2);
                    var r = RES.getRes("soundpress_mp3");
                    r.play(0, 1)
                }
            } else if (this.BeginX = t.x, this.PointInRect(203, 231, 45, 40, t)) {
                this.SetColor(this.ChooseImage[26], 2);
                var r = RES.getRes("soundpress_mp3");
                r.play(0, 1)
            } else if (this.PointInRect(261, 231, 125, 40, t)) {
                this.SetColor(this.ChooseImage[27], 2);
                var r = RES.getRes("soundpress_mp3");
                r.play(0, 1)
            } else if (this.PointInRect(120, 75, 330, 150, t))
                for (var i = 0; 22 > i; i++)
                    if (this.PointInRect(120 + i % 11 * 75 - this.Scroller.scrollLeft / 2, 65 + 78 * Math.floor(i / 11), 65, 65, t)) {
                        this.SetColor(this.ChooseImage[i + 3], 2);
                        var r = RES.getRes("soundpress_mp3");
                        r.play(0, 1)
                    }
        }
    }, t.prototype.TouchMoved = function(e) {
        if (0 == this.MoveCanNot) {
            new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2)
        }
    }, t.prototype.TouchEnded = function(e) {
        var t = this;
        if (0 == this.MoveCanNot) {
            var r = new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2);
            if (1 != this.IndexState)
                if (0 == this.choose) {
                    if (0 == this.IndexState) {
                        for (var i = 2; 5 > i; i++) this.SetColor(this.InterImage[i], 1);
                        if (this.SetColor(this.InterImage[6], 1), this.SetColor(this.InterImage[8], 1), this.InterImage[9].alpha = 1, this.PointInRect(90, 246, 50, 48, r)) {
                            for (var i = 1; 10 > i; i++) this.InterImage[i].visible = !1;
                            this.Trailing[0].visible = !1, this.ShowRank()
                        } else if (this.PointInRect(150, 246, 128, 48, r)) {
                            for (var i = 1; 10 > i; i++) this.InterImage[i].visible = !1;
                            this.Trailing[0].visible = !1, this.ShowLoading()
                        } else this.PointInRect(284, 246, 128, 48, r) ? this.Connect.showChoose().then(function() {
                            for (var e = 1; 10 > e; e++) t.InterImage[e].visible = !1;
                            t.Trailing[0].visible = !1, t.ShowLoading()
                        }) : this.PointInRect(428, 246, 50, 48, r) ? this.ShowHero() : this.PointInRect(478 + this.iPhoneW / 2, 30, 60, 77, r) && 0 == this.PlatForm && this.Connect.OpenMyGame2()
                    } else if (2 == this.IndexState)
                        if (this.SetColor(this.RankImage[1], 1), this.SetColor(this.RankImage[3], 1), this.PointInRect(20 - this.iPhoneW / 2, 262, 50, 50, r)) {
                            this.IndexState = 0;
                            for (var i = 1; 9 > i; i++) this.InterImage[i].visible = !0;
                            0 == this.PlatForm && (this.InterImage[9].visible = !0), this.Trailing[0].visible = !0, this.CloseRank()
                        } else this.PointInRect(480 + this.iPhoneW / 2, 267, 80, 40, r) && this.Connect.ShareGame()
                } else 100 == this.choose || 1 == this.choose && (0 == this.GameState ? 3 == this.DaoDa && (this.SetColor(this.InterImage[6], 1), this.SetColor(this.InterImage[7], 1), this.PointInRect(353, 63, 40, 40, r) ? (this.EndAgain(), this.ShowResult()) : this.PointInRect(237, 190, 100, 48, r) && this.Connect.ShareGame().then(function() {
                    t.EndAgain(), t.ShowResult()
                })) : 1 == this.GameState ? (this.SetColor(this.OverImage[3], 1), this.SetColor(this.OverImage[8], 1), this.SetColor(this.OverImage[12], 1), this.OverImage[13].alpha = 1, this.PointInRect(156, 243, 50, 50, r) && 0 == this.BeginState ? (this.EndResult(), this.ReleaseGame(), this.choose = 0, this.InitGame()) : this.PointInRect(221, 243, 125, 50, r) && 0 == this.BeginState ? (this.EndResult(), this.ShowLoading()) : this.PointInRect(361, 243, 50, 50, r) && 0 == this.BeginState ? this.ShowHero() : this.PointInRect(481 + this.iPhoneW / 2, 119, 70, 90, r) && 0 == this.PlatForm && 0 == this.BeginState && this.Connect.OpenMyGame2()) : 2 == this.GameState && (this.SetColor(this.ChooseImage[4], 1), this.SetColor(this.ChooseImage[5], 1), this.PointInRect(192, 196, 42, 48, r) ? (this.EndAward(), egret.Tween.get(this.OverImage[3]).to({
                    y: this.OverImage[3].y - 300
                }, 600), egret.Tween.get(this.OverImage[8]).to({
                    y: this.OverImage[8].y - 300
                }, 600), egret.Tween.get(this.OverImage[12]).to({
                    y: this.OverImage[12].y - 300
                }, 600), egret.Tween.get(this.InterImage[8]).to({
                    y: this.InterImage[8].y - 300
                }, 600)) : this.PointInRect(238, 190, 163, 58, r) && this.ShowADNow(0)));
            else {
                this.SetColor(this.ChooseImage[2], 1), this.SetColor(this.ChooseImage[26], 1), this.SetColor(this.ChooseImage[27], 1);
                for (var i = 0; 22 > i; i++) this.SetColor(this.ChooseImage[i + 3], 1);
                if (Math.abs(this.BeginX - r.x) >= 50) return;
                if (this.PointInRect(203, 231, 45, 40, r)) this.EndHero(), this.InterImage[5].texture = RES.getRes("hero" + this.NowHeroTT + "_png"), this.Trailing[0].changeTexture(RES.getRes("trailing" + this.NowHeroTT + "_png"));
                else if (this.PointInRect(261, 231, 125, 40, r))
                    if (1 == this.NumLockTT[this.BuyHero - 1]) {
                        if (0 == this.choose) {
                            for (var i = 1; 10 > i; i++) this.InterImage[i].visible = !1;
                            this.Trailing[0].visible = !1
                        } else this.EndResult();
                        this.EndHero(), this.ShowLoading()
                    } else this.BuyHero >= 3 && this.BuyHero <= 5 || this.BuyHero > 10 && this.BuyHero < 17 ? (this.Connect.inviteForSkin(), this.Connect.pullInviteCount(), this.CheckInviteRole()) : (this.BuyHero >= 6 && this.BuyHero <= 10 || this.BuyHero >= 17) && this.ShowADNow(0);
                else if (this.PointInRect(120, 75, 330, 150, r))
                    for (var i = 0; 22 > i; i++)
                        if (this.PointInRect(120 + i % 11 * 75 - this.Scroller.scrollLeft / 2, 65 + 78 * Math.floor(i / 11), 65, 65, r))
                            if (this.BuyHero = i + 1, 1 == this.NumLockTT[i]) this.NowHeroTT = i + 1, this.SaveGameScore(), this.ChooseImage[25].pos(this.HeroUnlock[i].x, this.HeroUnlock[i].y, 130, 130), this.ChooseImage[27].texture = RES.getRes("herobtn2_png"), this.FriendsLabel.visible = !1, this.UILabel[0].text = "Choose Role", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2;
                            else {
                                if (this.ChooseImage[27].texture = RES.getRes("herobtn3_png"), i >= 2 && 4 >= i || 10 == i || 11 == i) {
                                    this.FriendsLabel.visible = !0;
                                    var o = 0;
                                    2 == i ? o = 1 : 3 == i ? o = 5 : 4 == i ? o = 10 : 10 == i ? o = 15 : 11 == i && (o = 20), this.FriendsLabel.text = "s " + this.NumFriends + "l" + o, this.FriendsLabel.anchorOffsetX = this.FriendsLabel.width / 2, this.UILabel[0].text = "Refer " + o + " friends \n Only new player login could you get it", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2, this.CheckInviteRole()
                                } else if (i >= 5 && 10 > i) {
                                    var a = 0;
                                    a = 5 == i ? 1 : 6 == i ? 5 : 7 == i ? 10 : 8 == i ? 15 : 9 == i ? 20 : 1, this.FriendsLabel.visible = !0, this.FriendsLabel.text = "v " + this.NumVideoTT + "l" + a, this.FriendsLabel.anchorOffsetX = this.FriendsLabel.width / 2, this.UILabel[0].text = "Total Watch " + a + " Ads could you get it", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2
                                } else if (12 == i || 13 == i) {
                                    var s = 0;
                                    12 == i ? s = 300 : 13 == i && (s = 1e3), this.FriendsLabel.visible = !0, this.FriendsLabel.text = "x " + this.NumScoreTT + "l" + s, this.FriendsLabel.anchorOffsetX = this.FriendsLabel.width / 2, this.UILabel[0].text = "Get " + s + " Stars could you get it", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2
                                } else if (14 == i || 15 == i) {
                                    var n = 0;
                                    14 == i ? n = 2 : 15 == i && (n = 3), this.FriendsLabel.visible = !0, this.FriendsLabel.text = "d " + this.Connect.getLoginDays() + "l" + n, this.FriendsLabel.anchorOffsetX = this.FriendsLabel.width / 2, this.UILabel[0].text = "Play " + n + " consecutive days", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2
                                } else i > 15 && (this.FriendsLabel.visible = !0, this.FriendsLabel.text = "v 0l1", this.FriendsLabel.anchorOffsetX = this.FriendsLabel.width / 2, this.UILabel[0].text = "The Role Gets Double Stars Reward", this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].anchorOffsetY = this.UILabel[0].height / 2);
                                this.ChooseImage[25].pos(this.HeroUnlock[i].x, this.HeroUnlock[i].y, 130, 130)
                            }
            }
        }
    }, t
}(egret.Sprite);
__reflect(GameScene.prototype, "GameScene");
var BasePlatform = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.challenge_info = null, t.isNewPlayer = !1, t.playerType = "old", t.appId = "310205336271652", t.appName = "Snow Racing.io", t.switchGameInfo = null, t.invite_skin_data = null, t.entry = "normal", t.$remoteData = null, t
    }
    return __extends(t, e), t.prototype.needAccount = function() {
        return !1
    }, t.prototype.initSDK = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, this.initRemoteData()];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.setLoadingProgress = function(e) {}, t.prototype.startGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.getToken = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, null]
            })
        })
    }, Object.defineProperty(t.prototype, "userInfo", {
        get: function() {
            return {
                name: "terran",
                id: "122",
                photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1919308798192205&height=256&width=256&ext=1556338068&hash=AeT6AJodDv0PCryf",
                friends: [],
                lang: "en_US"
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getContextId = function() {
        return ""
    }, t.prototype.getPlayerId = function() {
        return "terran"
    }, t.prototype.hasIAD = function() {
        return !0
    }, t.prototype.showIAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.hasRAD = function() {
        return !0
    }, t.prototype.showRAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.suportAD = function() {
        return !0
    }, t.prototype.getFriends = function() {
        return []
    }, t.prototype.invite = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.share = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !0]
            })
        })
    }, t.prototype.choose = function(e, t, r) {
        return void 0 === t && (t = !1), void 0 === r && (r = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !1]
            })
        })
    }, t.prototype.switchCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !0]
            })
        })
    }, t.prototype.createCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !0]
            })
        })
    }, t.prototype.getContextPlayers = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, []]
            })
        })
    }, t.prototype.switchGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.updateStatues = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.listResponse = function() {
        return []
    }, t.prototype.doResponse = function(e, t) {}, t.prototype.log = function(e, t, r) {
        void 0 === r && (r = 1), console.log("name", e, "data", JSON.stringify(t))
    }, t.prototype.getPlatFormiOS = function() {
        return !1
    }, t.prototype.getWorldEntries = function() {
        return []
    }, t.prototype.getWorldEntriesAsync = function() {
        return Promise.resolve([])
    }, t.prototype.getWorldFriendEntries = function() {
        return []
    }, t.prototype.getWorldFriendEntriesAsync = function() {
        return Promise.resolve([])
    }, t.prototype.getWorldSelfEntry = function() {
        return null
    }, t.prototype.getHighScore = function() {
        return +egret.localStorage.getItem("hight_score1") || 0
    }, t.prototype.setHighScore = function(e, t) {
        egret.localStorage.setItem("hight_score1", e + "")
    }, t.prototype.initRemoteData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r, i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, this.getData(["user_info1"])];
                    case 1:
                        e = a.sent(), t = {};
                        try {
                            t = JSON.parse(e.user_info1)
                        } catch (s) {}
                        r = null;
                        try {
                            r = JSON.parse(localStorage.getItem("local_user_info_" + this.getPlayerId()))
                        } catch (s) {}
                        return i = r && +r.w__tsp || -1, o = t && +t.w__tsp || 0, i > o && (t = r, console.log("use local user_info", i, o)), this.$remoteData = t || {}, [2]
                }
            })
        })
    }, t.prototype.syncRemoteData = function(e) {
        return void 0 === e && (e = !1), __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return this.$remoteData.w__tsp = Date.now(), t = JSON.stringify(this.$remoteData), [4, this.setData({
                            user_info1: t
                        }, e)];
                    case 1:
                        return r.sent(), localStorage.setItem("local_user_info_" + this.getPlayerId(), t), [2]
                }
            })
        })
    }, t.prototype.cr = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.$remoteData = {}, [4, this.syncRemoteData(!0)];
                    case 1:
                        return e.sent(), this.emit("cr_data"), [2]
                }
            })
        })
    }, Object.defineProperty(t.prototype, "remoteData", {
        get: function() {
            return this.$remoteData
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getData = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, r, i, o;
            return __generator(this, function(a) {
                for (t = {}, r = 0, i = e; r < i.length; r++) o = i[r], t[o] = egret.localStorage.getItem(o);
                return [2, t]
            })
        })
    }, t.prototype.setData = function(e, t) {
        return void 0 === t && (t = !1), __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(r) {
                for (t in e) egret.localStorage.setItem(t, e[t]);
                return [2]
            })
        })
    }, t.prototype.canAdd2HomeScreen = function() {
        return !0
    }, t.prototype.add2HomeScreen = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, {
                    res: !0,
                    code: ""
                }]
            })
        })
    }, t.prototype.checkBotSubscribe = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, {
                    result: !0
                }]
            })
        })
    }, t.prototype.suportIAP = function() {
        return !1
    }, t.prototype.purchaseAsync = function(e, t) {
        return void 0 === t && (t = ""), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !1]
            })
        })
    }, t.prototype.hasPurchased = function(e) {
        return !1
    }, t
}(Emiter);
__reflect(BasePlatform.prototype, "BasePlatform", ["IResponder"]);
var Http = function() {
    function e() {}
    return e.prototype.encodeValue = function(e, t) {
        return t instanceof Array ? this.encodeArray(e, t) : encodeURIComponent(e) + "=" + encodeURIComponent(t)
    }, e.prototype.encodeArray = function(e, t) {
        return e ? 0 == t.length ? encodeURIComponent(e) + "=" : t.map(function(t) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }).join("&") : ""
    }, e.prototype.toString = function(e) {
        if (!e) return "";
        var t = [];
        for (var r in e) t.push(this.encodeValue(r, e[r]));
        return t.join("&")
    }, e.prototype.request = function(e) {
        var t = new XMLHttpRequest;
        t.responseType = "arraybuffer" !== e.responseType ? "text" : "arraybuffer", t.timeout = e.timeout || 0, t.onerror = function(r) {
            console.log("[http][" + e.method + "][error] [" + t.status + ":" + t.statusText + "] " + e.url), e.onerror && e.onerror(r)
        }, t.onabort = function(t) {
            console.log("[http][" + e.method + "][abort] " + e.url), e.onabort && e.onabort()
        }, t.onprogress = function(t) {
            t && t.lengthComputable && e.onprogress && e.onprogress(t.loaded / t.total)
        }, t.onload = function(r) {
            var i = void 0 !== t.status ? t.status : 200;
            if (200 === i || 204 === i || 0 === i) {
                var o = t.response || t.responseText;
                console.log("[http][" + e.method + "][loaded] " + e.url + ":" + o), e.onload(o)
            } else console.log("[http][" + e.method + "][error] [" + t.status + ":" + t.statusText + "] " + e.url), e.onerror && e.onerror(r)
        };
        var r = this.toString(e.data),
            i = e.url;
        if ("GET" == e.method && r && (i = e.url + "?" + r, r = null), t.open(e.method, i, !0), "POST" == e.method && (e.rawData ? (t.setRequestHeader("Content-Type", "application/json"), r = JSON.stringify(e.rawData)) : t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), e.headers)
            for (var o = 0; o < e.headers.length; o++) t.setRequestHeader(e.headers[o++], e.headers[o]);
        return t.send(r), console.log("[http][" + e.method + "] " + e.url + ":" + JSON.stringify(e.data)), t
    }, e.prototype.post = function(e, t) {
        var r = this;
        return new Promise(function(i, o) {
            r.request({
                url: e,
                data: t,
                method: "POST",
                onload: i,
                onerror: o,
                ontimeout: o
            })
        })
    }, e.prototype.get = function(e, t) {
        var r = this;
        return new Promise(function(i, o) {
            r.request({
                url: e,
                data: t,
                method: "GET",
                onload: i,
                onerror: o,
                ontimeout: o
            })
        })
    }, e
}();
__reflect(Http.prototype, "Http");
var Constant;
! function(e) {
    var t;
    ! function(e) {
        e[e.startup = 0] = "startup", e[e.game_ready = 1] = "game_ready", e[e.game_over = 2] = "game_over"
    }(t = e.Notify || (e.Notify = {})), e.context_template = {
        heart: "heart",
        challenge: "challenge",
        challenge_result: "challenge_result",
        auto_choose: "auto_choose",
        skin_invite: "skin_invite",
        home_share: "home_share"
    }, e.LogEvent = {
        add_home_screen: "add_home_screen",
        game_loading: "game_loading",
        play_times: "play_times",
        level: "level",
        dead: "dead"
    }, e.SAME_CONTEXT = "SAME_CONTEXT", e.USER_INPUT = "USER_INPUT"
}(Constant || (Constant = {}));
var GameModel = function() {
    function e() {
        this.lastContextualScore = 1, this.play_times = 0, this.isSuper = !1, this.invite_skin_share_count = 0
    }
    return e
}();
__reflect(GameModel.prototype, "GameModel");
var GameOverCmd = function() {
    function e() {}
    return e.prototype.excute = function(e, t) {
        var r = +e;
        console.log("enter GameOverCmd"), app.model.play_times++;
        var i = platform.isNewPlayer ? "New_Play_Times" : "Old_Play_Times";
        if (platform.log(Constant.LogEvent.play_times, {
                result: app.model.play_times,
                type: i
            }), platform.log(Constant.LogEvent.level, {
                result: r
            }), app.model.lastContextualScore = e, platform instanceof PlatformFB) {
            if (FBInstant.context.getID()) {
                var o = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1;
                o || ShareHelper.sendLeadboardUpdate(e)["catch"](function(e) {
                    console.log("challenge failed:", e)
                })
            }
            FBInstant.setSessionData({
                nickname: platform.userInfo.name,
                playerInfo: {
                    head: platform.userInfo.photo,
                    lang: platform.userInfo.lang,
                    score: platform.getHighScore()
                }
            })
        }
    }, e
}();
__reflect(GameOverCmd.prototype, "GameOverCmd", ["ICommand"]);
var GameReadyCmd = function() {
    function e() {
        this._lastContextId = null, this._contextLeaderBoard = null
    }
    return e.prototype.excute = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                return console.log("enter GameReadyCmd"), platform instanceof PlatformFB && (console.log("platform.entry", platform.entry), e = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1, e || this.watchContextIfChanged()), platform.getContextId() && 0 == platform.entry.indexOf("bot_") && (app.connect.pendingChallengePost = !0), !platform.getContextId() || platform.entry != Constant.context_template.auto_choose && platform.entry != Constant.context_template.skin_invite && platform.entry != Constant.context_template.home_share || (app.connect.pendingChallengePost = !0), platform.getContextId() && "group_rank" == platform.entry && (app.connect.pendingChallengePost = !0), app.http.reportFriends()["catch"](function(e) {
                    return console.log("report friends failed:", e)
                }), app.http.reportSwitchGame()["catch"](function(e) {}), app.http.getRecommendGames()["catch"](function(e) {}), app.http.reportIfFromSkinShare()["catch"](function(e) {}), app.http.getSkinShareCount()["catch"](function(e) {}), [2]
            })
        })
    }, e.prototype.showChoose = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB) || FBInstant.context.getID()) return [3, 5];
                        app.busy(), r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                    case 2:
                        return e = r.sent(), ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                    case 3:
                        return t = r.sent(), [3, 4];
                    case 4:
                        app.rmBusy(), r.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }, e.prototype.watchContextIfChanged = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r, i, o, a, s, n;
            return __generator(this, function(h) {
                switch (h.label) {
                    case 0:
                        e = FBInstant.player.getName(), t = app.model, h.label = 1;
                    case 1:
                        if (r = FBInstant.context.getID(), !r) return [3, 13];
                        if (i = "context." + r, r == this._lastContextId) return [3, 8];
                        console.log("context changes detected"), h.label = 2;
                    case 2:
                        return h.trys.push([2, 6, , 7]), this._lastContextId = r, o = this, [4, FBInstant.getLeaderboardAsync(i)];
                    case 3:
                        return o._contextLeaderBoard = h.sent(), t.lastContextualScore = 1, console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(t.lastContextualScore, "")];
                    case 4:
                        return h.sent(), console.log("sending update ..."), [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: i,
                            text: e + " joined this game"
                        })];
                    case 5:
                        return h.sent(), [3, 7];
                    case 6:
                        return a = h.sent(), console.log("rank msg failed:", a), [3, 7];
                    case 7:
                        console.log("all done!"), h.label = 8;
                    case 8:
                        if (s = app.connect.getCurentScore() || 0, !(s > t.lastContextualScore)) return [3, 13];
                        h.label = 9;
                    case 9:
                        return h.trys.push([9, 12, , 13]), console.log("score changed!"), t.lastContextualScore = s, console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(t.lastContextualScore, "")];
                    case 10:
                        return h.sent(), console.log("sending update ..."), [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: i,
                            text: e + " scored " + s,
                            data: {
                                ss: "hhh"
                            }
                        })];
                    case 11:
                        return h.sent(), console.log("all done!"), [3, 13];
                    case 12:
                        return n = h.sent(), console.log("score changed update failed:", n), [3, 13];
                    case 13:
                        return [4, waitAsync(3e3)];
                    case 14:
                        return h.sent(), [3, 1];
                    case 15:
                        return [2]
                }
            })
        })
    }, e
}();
__reflect(GameReadyCmd.prototype, "GameReadyCmd", ["ICommand"]);
var StartupCmd = function() {
    function e() {}
    return e.prototype.excute = function(e, t) {
        app.registCommand(Constant.Notify.game_over, GameOverCmd), app.registCommand(Constant.Notify.game_ready, GameReadyCmd)
    }, e
}();
__reflect(StartupCmd.prototype, "StartupCmd", ["ICommand"]);
var BusyIndicator = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.autoClose = !1;
        var r = RES.getRes("loading_indicator_png");
        return t._bmp = new egret.Bitmap(r), t._bmp.anchorOffsetX = r.textureWidth >> 1, t._bmp.anchorOffsetY = r.textureHeight >> 1, t.addChild(t._bmp), t.width = t.height = 0, t
    }
    return __extends(t, e), t.prototype.$onAddToStage = function(t, r) {
        e.prototype.$onAddToStage.call(this, t, r), egret.Tween.get(this._bmp, {
            loop: !0
        }).to({
            rotation: 180
        }, 1e3).to({
            rotation: 360
        }, 1e3)
    }, t.prototype.$onRemoveFromStage = function() {
        e.prototype.$onRemoveFromStage.call(this), egret.Tween.removeTweens(this._bmp)
    }, t
}(egret.Sprite);
__reflect(BusyIndicator.prototype, "BusyIndicator");
var GameConnect = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._deadCount = 0, t.pendingChallengePost = !1, t.Init(), t
    }
    return __extends(t, e), t.prototype.Init = function() {
        t.iPhoneH = 0, t.iPhoneW = 0, t.NowLanguage = 1, t.OpenAdWall = 0, t.ADVideoState = 0, t.NowGate = 1, this.LoginGame()
    }, t.prototype.LoginGame = function() {}, t.prototype.OpenWallOrNot = function() {
        return t.OpenAdWall
    }, t.prototype.GetiPhoneH = function() {
        var e = egret.MainContext.instance.stage.stageHeight;
        return (e - 640) / 2
    }, t.prototype.GetiPhoneW = function() {
        var e = egret.MainContext.instance.stage.stageWidth;
        return (e - 1136) / 2
    }, t.prototype.GetLanguage = function() {
        return t.NowLanguage
    }, t.prototype.OpenMyGame = function() {
        platform.switchGame("772118893148038")
    }, t.prototype.OpenMyGame2 = function() {
        platform.switchGame("315280339131798")
    }, t.prototype.GetPlatForm = function() {
        return 1 == platform.getPlatFormiOS() ? 1 : 0
    }, t.prototype.ShareGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, ShareHelper.sendGenericUpdate(Constant.context_template.home_share, null, !0)];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.ChallengeGame = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, platform.createCtx(e)];
                    case 1:
                        return t = r.sent(), this.pendingChallengePost = !0, [2, t]
                }
            })
        })
    }, t.prototype.ShowADChaping = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return console.log("开启插屏广告"), this.hasPurchasedRemoveAD() ? [2] : platform.hasIAD() ? [4, platform.showIAD()] : [2];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.ShowADVideo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return console.log("开启视频广告"), t.ADVideoState = -1, platform.hasRAD() ? platform.showRAD().then(function() {
                    t.ADVideoState = 1
                })["catch"](function() {
                    t.ADVideoState = 0
                }) : t.ADVideoState = 0, [2]
            })
        })
    }, t.prototype.GetADVideoState = function() {
        return t.ADVideoState
    }, t.prototype.SignInGameCenter = function() {
        console.log("登录排行榜")
    }, t.prototype.UpLoadScore = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return console.log("上传分数"), [4, platform.setHighScore(e)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, t.prototype.GetMyID = function() {
        return platform.userInfo.id
    }, t.prototype.GetMyName = function() {
        return platform.userInfo.name
    }, t.prototype.GetMyImage = function() {
        return platform.userInfo.photo
    }, t.prototype.GetMyRank = function() {
        var e = platform.getWorldSelfEntry();
        return e ? e.originalRank : 999999
    }, t.prototype.GetFriendRankList = function() {
        return platform.getWorldFriendEntries()
    }, t.prototype.GetWorldRankList = function() {
        return platform.getWorldEntries()
    }, t.prototype.GetUserName = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.name
        }) : this.GetFriendRankList().map(function(e) {
            return e.name
        })
    }, t.prototype.GetUserID = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.id
        }) : this.GetFriendRankList().map(function(e) {
            return e.id
        })
    }, t.prototype.GetUserImage = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.photo
        }) : this.GetFriendRankList().map(function(e) {
            return e.photo
        })
    }, t.prototype.GetUserScore = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.score
        }) : this.GetFriendRankList().map(function(e) {
            return e.score
        })
    }, t.prototype.canaAutoEnterGame = function() {
        return !platform.isNewPlayer && !!platform.getContextId()
    }, t.prototype.onGameStart = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, this.addShortcut()];
                    case 1:
                        return t.sent(), [3, 3];
                    case 2:
                        return e = t.sent(), console.log("shortcut error:", e), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.readData = function() {
        var e = platform.remoteData.game_db || {};
        return e
    }, t.prototype.setData = function(e) {
        platform.remoteData.game_db = e, platform.syncRemoteData()
    }, t.prototype.onGameOver = function(e) {
        app.notify(Constant.Notify.game_over, e)
    }, t.prototype.onDead = function(e) {
        platform.log(Constant.LogEvent.dead, {
            result: ++this._deadCount
        })
    }, t.prototype.setCurentScore = function(e) {
        t.NowGate = e
    }, t.prototype.getCurentScore = function() {
        var e = t.NowGate;
        return e
    }, t.prototype.getInviteCount = function() {
        return console.log("invite people：" + app.model.invite_skin_share_count), app.model.invite_skin_share_count
    }, t.prototype.pullInviteCount = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, app.http.getSkinShareCount()];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.inviteForSkin = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return platform.remoteData.skin_invites || (platform.remoteData.skin_invites = []), [4, platform.choose(["NEW_CONTEXT_ONLY"], !0, Constant.context_template.skin_invite)];
                    case 1:
                        return e = t.sent(), e && ShareHelper.sendGenericUpdate(Constant.context_template.skin_invite, {
                            invite_skin_data: {
                                playerId: platform.userInfo.id,
                                skinId: 1
                            }
                        }), [2, !0]
                }
            })
        })
    }, t.prototype.showChoose = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB)) return [3, 5];
                        app.busy(), r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                    case 2:
                        return e = r.sent(), ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                    case 3:
                        return t = r.sent(), [3, 4];
                    case 4:
                        app.rmBusy(), r.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }, t.prototype.suportIAP = function() {
        return !1
    }, t.prototype.purchaseRemoveAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, platform.purchaseAsync("1")];
                    case 1:
                        return e = t.sent(), [2, e]
                }
            })
        })
    }, t.prototype.hasPurchasedRemoveAD = function() {
        return platform.hasPurchased("1")
    }, t.prototype.getLeaderboardByLevel = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        this.leaderBoad && this.leaderBoad.name == "level_l_" + e || (this.leaderBoad = new LeaderBoard("level_l_" + e, "LOWER_IS_BETTER", 999), this.leaderBoad.setFriends(platform.getFriends())), r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, this.leaderBoad.initializeAsync(!1, !0)];
                    case 2:
                        return r.sent(), [3, 4];
                    case 3:
                        return t = r.sent(), console.log("fuck", t), [3, 4];
                    case 4:
                        return [2, this.leaderBoad]
                }
            })
        })
    }, t.prototype.onLevelStart = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return console.log("请求" + e + "关数据"), platform instanceof PlatformFB ? [4, this.getLeaderboardByLevel(e)] : [2];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, t.prototype.getLevelRanks = function(e, t, r) {
        return void 0 === r && (r = !1), __awaiter(this, void 0, void 0, function() {
            var i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return console.log("得到" + e + "关数据"), platform instanceof PlatformFB ? [4, this.getLeaderboardByLevel(e)] : (platform.setHighScore(t), [2, platform.getWorldFriendEntries()]);
                    case 1:
                        return i = a.sent(), r || this.leaderBoad.setScore(t), o = i.getConnectedPlayerEntries(), console.log("getLevelRanks", o.length), [2, o.length > 0 ? o : null]
                }
            })
        })
    }, t.prototype.getVersion = function() {
        return $T_GAME_VERSION
    }, t.prototype.challengePost = function(e, t) {
        ShareHelper.challengePost(e, t)
    }, t.prototype.challengeShare = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, ShareHelper.challengeShare(e, t)];
                    case 1:
                        return r.sent(), [2]
                }
            })
        })
    }, t.prototype.getChallengeLevel = function() {
        return platform.challenge_info && platform.challenge_info.level || -1
    }, t.prototype.hasContext = function() {
        return !!platform.getContextId()
    }, t.prototype.canAutoChallengePost = function() {
        var e = this.pendingChallengePost;
        return console.log("canAutoChallengePost", e), this.pendingChallengePost = !1, e
    }, t.prototype.getRecommendGamesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e = this;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return app.model.recommendGames ? [3, 2] : [4, new Promise(function(t) {
                            app.event.on("game_recommend_ready", function() {
                                t()
                            }, e)
                        })];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, app.model.recommendGames]
                }
            })
        })
    }, t.prototype.onRecommendGameTapped = function(e) {
        platform.switchGame(e)
    }, t.prototype.getLoginDays = function() {
        var e = platform.remoteData.login_day_count;
        return e ? e : 0
    }, t.prototype.isSuper = function() {
        return 1 == app.model.isSuper ? 1 : 0
    }, t.prototype.addShortcut = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return console.log("addShortcut...."), console.log(platform.remoteData.add_hs_refuse_count), console.log(platform.remoteData.add_hs), console.log(platform.canAdd2HomeScreen()), platform.remoteData.add_hs_refuse_count >= 2 ? [2] : 0 != platform.remoteData.add_hs ? [2] : (e = platform.canAdd2HomeScreen()) ? (t = platform.playerType, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: t,
                            result: -1
                        }), [4, platform.add2HomeScreen()]) : [2];
                    case 1:
                        return r = i.sent(), r.res ? (platform.remoteData.add_hs = 1, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: t,
                            result: 1
                        })) : (r.code == Constant.USER_INPUT ? platform.remoteData.add_hs_refuse_count++ : platform.remoteData.add_hs = 2, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: t,
                            result: 0,
                            code: r.code
                        })), platform.syncRemoteData(), [2]
                }
            })
        })
    }, t
}(eui.Component);
__reflect(GameConnect.prototype, "GameConnect"), Number.isFinite = Number.isFinite || function(e) {
    return "number" == typeof e && isFinite(e)
}, String.prototype.isFinite = Number.isFinite, Array.prototype.findIndex = Array.prototype.findIndex || function(e) {
    if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
    if ("function" != typeof e) throw new TypeError("callback must be a function");
    for (var t = Object(this), r = t.length >>> 0, i = arguments[1], o = 0; r > o; o++)
        if (e.call(i, t[o], o, t)) return o;
    return -1
}, Date.prototype.format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var r in t) new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[r] : ("00" + t[r]).substr(("" + t[r]).length)));
    return e
}, Date.week = function(e) {
    void 0 === e && (e = 2521);
    var t = -252e5,
        r = ~~((Date.now() + t + 864e5) / 6048e5) - e - 1;
    return r
}, Date.days = function(e) {
    void 0 === e && (e = 0);
    var t = -252e5,
        r = ~~((Date.now() + t + 864e5) / 864e5) - e - 1;
    return r
}, egret.DisplayObject.prototype.removeFromParent = function() {
    this.parent && this.parent.removeChild(this)
}, String.prototype.substitute = function(e) {
    return this.replace(/\{(.+?)\}/gi, function(t, r) {
        return e[r]
    })
}, Array.prototype.random = function(e) {
    if (void 0 === e && (e = !1), 0 == this.length) return null;
    var t = Math.floor(this.length * Math.random());
    this[t];
    return e && this.splice(t, 1), this[t]
}, Array.prototype.choice = function(e) {
    if (0 == this.length) return null;
    void 0 == e && (e = function(e) {
        return e
    });
    for (var t = this.reduce(function(t, r) {
            return t + e(r)
        }, 0) * Math.random(), r = this.length, i = 0; r > i; i++) {
        var o = e(this[i]);
        if (o > t) return this[i];
        t -= o
    }
    return this[r - 1]
}, Array.prototype.unique = function() {
    for (var e = [], t = 0; t < this.length;) {
        this[t];
        e.indexOf(this[t]) >= 0 ? this.splice(t, 1) : e.push(this[t++])
    }
    return this
}, Array.prototype.sorton = function(e, t) {
    return void 0 === t && (t = !0), this.sort(function(r, i) {
        var o = r[e] || 0,
            a = i[e] || 0,
            s = o > a ? 1 : a > o ? -1 : 0;
        return t || (s *= -1), s
    })
}, Array.prototype.shuffle = function() {
    for (var e = this.length - 1; e > 0; e--) {
        var t = Math.floor(Math.random() * (e + 1));
        r = [this[t], this[e]], this[e] = r[0], this[t] = r[1]
    }
    return this;
    var r
}, Array.prototype.rm = function(e) {
    for (var t = "function" == typeof e ? e : function(t) {
            return t == e
        }, r = 0; r < this.length;) {
        var i = this[r];
        if (t(i)) return this.splice(r, 1), !0;
        r++
    }
    return !1
}, Array.prototype.next = function() {
    return (void 0 == this._iter_index || this._iter_index >= this.length) && (this._iter_index = 0), this[this._iter_index++]
}, Math.randInt = function(e, t) {
    return void 0 === e && (e = 0), void 0 === t && (t = 10), Math.floor(Math.random() * (t - e + 1)) + e
}, Math.clamp = function(e, t, r) {
    return Math.max(t, Math.min(e, r))
};
var LoadingUI = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.createView(), t
    }
    return __extends(t, e), t.prototype.createView = function() {
        this.LoadImage = new egret.Bitmap(RES.getRes("loading_png")), this.addChild(this.LoadImage), this.StageWidth = egret.MainContext.instance.stage.stageWidth, this.LoadImage.x = (this.StageWidth - 1400) / 2, this.LoadImage.y = 0, this.LoadImage.width = 1400, this.LoadImage.height = 640;
        var e = new egret.Bitmap(RES.getRes("loading2_png"));
        this.addChild(e), e.x = this.StageWidth / 2, e.y = 320, e.width = 96, e.height = 96, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.rotation = 0, egret.Tween.get(e, {
            loop: !0
        }).to({
            rotation: 360
        }, 2e3)
    }, t.prototype.onProgress = function(e, t) {}, t
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var Main = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, t), egret.ImageLoader.crossOrigin = "anonymous", t
    }
    return __extends(t, e), t.prototype.onAddToStage = function(e) {
        this.applyConsole(), egret.lifecycle.addLifecycleListener(function(e) {
            e.onUpdate = function() {}
        }), egret.lifecycle.onPause = function() {
            egret.ticker.pause()
        }, egret.lifecycle.onResume = function() {
            egret.ticker.resume()
        }, this.runGame()["catch"](function(e) {
            console.log(e)
        })
    }, t.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return App.startup(this.stage), platform = PlatformFactory.create(), platform.log(Constant.LogEvent.game_loading, {
                            type: "initialized"
                        }), [4, this.loadResource()];
                    case 1:
                        return e.sent(), [4, RES.getResAsync("description_json")];
                    case 2:
                        return e.sent(), platform.setLoadingProgress(1), [4, platform.initSDK()];
                    case 3:
                        return e.sent(), console.log("init---"), [4, platform.startGame(["310205336271652_341327119826140"], ["310205336271652_341327216492797"])];
                    case 4:
                        return e.sent(), app.http.checkSuper()["catch"](function(e) {
                            return console.log("check super error")
                        }), [4, platform.checkBotSubscribe()];
                    case 5:
                        return e.sent(), [4, app.connect.addShortcut()];
                    case 6:
                        return e.sent(), this.PlayGame(), platform.log(Constant.LogEvent.game_loading, {
                            type: "ready"
                        }), app.notify(Constant.Notify.game_ready), [2]
                }
            })
        })
    }, t.prototype.PlayGame = function() {
        var e = new GameScene;
        this.addChild(e), this.stage.removeChild(this.LoadView);
        var t = new egret.TextField;
        this.addChild(t), t.x = egret.MainContext.instance.stage.stageWidth / 2, t.y = egret.MainContext.instance.stage.stageHeight - 25, t.size = 16, t.textColor = 1781121, t.alpha = .7, t.text = $T_GAME_VERSION, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2
    }, t.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 4, , 5]), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        return t.sent(), [4, RES.loadGroup("loading")];
                    case 2:
                        return t.sent(), platform.setLoadingProgress(.1), this.LoadView = new LoadingUI, this.stage.addChild(this.LoadView), [4, RES.loadGroup("preload", 0, this.LoadView)];
                    case 3:
                        return t.sent(), platform.setLoadingProgress(.8), [3, 5];
                    case 4:
                        return e = t.sent(), console.error(e), [3, 5];
                    case 5:
                        return [2]
                }
            })
        })
    }, t.prototype.applyConsole = function() {
        var e = this,
            t = (console.log, "e3sdsfs3eee"),
            r = "true" == egret.localStorage.getItem(t),
            i = null,
            o = function(e) {
                egret.Capabilities.runtimeType == egret.RuntimeType.WEB && egret.Capabilities.isMobile && (e ? i ? i.showSwitch() : i = new window.VConsole : i && i.hideSwitch())
            };
        o(r), Object.defineProperty(window, "$dev", {
            get: function() {
                return r
            },
            set: function(e) {
                egret.localStorage.setItem(t, e), r = e, o(e)
            },
            configurable: !0
        });
        var a = 0,
            s = 0;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function(t) {
            50 == Math.abs(Math.clamp(t.stageX - e.stage.stageWidth / 2, -50, 50)) || t.stageY >= 50 || (s++, clearTimeout(a), a = setTimeout(function() {
                s >= 5 && ($dev = !$dev), s = 0
            }, 200))
        }, this)
    }, t
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var Storager = function() {
    function e(e) {
        void 0 === e && (e = "global"), this.id = e
    }
    return e.prototype.set = function(e, t) {
        "object" == typeof t && (t = JSON.stringify(t)), egret.localStorage.setItem(this.id + "_" + e, t)
    }, e.prototype.get = function(e, t) {
        return egret.localStorage.getItem(this.id + "_" + e) || t || null
    }, e.prototype.rm = function(e) {
        egret.localStorage.removeItem(this.id + "_" + e)
    }, e.prototype.json = function(e, t) {
        void 0 === t && (t = null);
        var r, i = egret.localStorage.getItem(this.id + "_" + e);
        try {
            r = JSON.parse(i)
        } catch (o) {
            $dev && console.log("json failed")
        }
        return r || t || null
    }, e.clear = function() {
        egret.localStorage.clear()
    }, e
}();
__reflect(Storager.prototype, "Storager");
var ad;
! function(e) {
    var t = function(e) {
        function t(t, r) {
            void 0 === r && (r = !0);
            var i = e.call(this) || this;
            return i.ids = t, i._adInstance = null, i._isStart = !1, i._watch_count = 0, i.suportAD() && r && i.preloadAD(), i
        }
        return __extends(t, e), t.prototype.suportAD = function() {
            throw "should be implemented in subclass!"
        }, t.prototype.getName = function() {
            throw "should be implemented in subclass!"
        }, t.prototype.getADInstanceAsync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, null]
                })
            })
        }, t.prototype.hasAD = function() {
            return !!this._adInstance
        }, t.prototype.preloadAD = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t, r, i, o, a, s, n, h, l = this;
                return __generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            if (this._isStart) return [2];
                            this._isStart = !0, e = "", t = this.ids.concat(), r = 0, i = null, c.label = 1;
                        case 1:
                            if (i) return [3, 24];
                            o = r++ % t.length, c.label = 2;
                        case 2:
                            return c.trys.push([2, 22, , 23]), [4, this.getADInstanceAsync(t[o])];
                        case 3:
                            i = c.sent(), e = "", console.log(this.getName() + " create suc:" + o), a = 0, c.label = 4;
                        case 4:
                            if (this._adInstance || !i) return [3, 21];
                            c.label = 5;
                        case 5:
                            return c.trys.push([5, 14, , 20]), [4, i.loadAsync()];
                        case 6:
                            c.sent(), e = "", this._adInstance = i, this.emit("ad_ready"), console.log(this.getName() + " load suc"), c.label = 7;
                        case 7:
                            return [4, new Promise(function(e, t) {
                                return l.once("show_ad", e)
                            })];
                        case 8:
                            c.sent(), c.label = 9;
                        case 9:
                            return c.trys.push([9, 11, , 12]), [4, this._adInstance.showAsync()];
                        case 10:
                            return c.sent(), e = "", console.log(this.getName() + " show suc"), this.emit("show_result", {
                                result: !0,
                                level: o
                            }), r = 0, this._adInstance = null, i = null, [3, 13];
                        case 11:
                            return s = c.sent(), console.log(this.getName() + " show failed," + s.code + "," + s.message), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 2,
                                code: s.code,
                                msg: s.message,
                                lastError: e
                            }), e = s.code + ":2", this.emit("show_result", {
                                result: !1,
                                err: s,
                                level: o
                            }), "ADS_NOT_LOADED" == s.code ? (this._adInstance = null, a = 0, [3, 13]) : "PENDING_REQUEST" != s.code && "UNKNOWN" != s.code && "RATE_LIMITED" != s.code ? (this._adInstance = null, i = null, [3, 13]) : [3, 12];
                        case 12:
                            return [3, 7];
                        case 13:
                            return [3, 20];
                        case 14:
                            return n = c.sent(), console.log(this.getName() + " load failed," + n.code + "," + n.message), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 1,
                                code: n.code,
                                msg: n.message,
                                lastError: e
                            }), e = n.code + ":1", "ADS_FREQUENT_LOAD" != n.code ? [3, 16] : [4, new Promise(function(e) {
                                return setTimeout(e, 18e5)
                            })];
                        case 15:
                            return c.sent(), [3, 21];
                        case 16:
                            return "INVALID_PARAM" != n.code ? [3, 17] : (i = null, [3, 21]);
                        case 17:
                            return [4, new Promise(function(e) {
                                return setTimeout(e, 31e3)
                            })];
                        case 18:
                            c.sent(), c.label = 19;
                        case 19:
                            return [3, 20];
                        case 20:
                            return [3, 4];
                        case 21:
                            return [3, 23];
                        case 22:
                            return h = c.sent(), console.log(this.getName() + " create failed," + h.code + "," + o), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 0,
                                code: h.code,
                                msg: h.message,
                                lastError: e
                            }), e = h.code + ":0", "CLIENT_UNSUPPORTED_OPERATION" == h.code || "ADS_TOO_MANY_INSTANCES" == h.code ? [2] : [3, 23];
                        case 23:
                            return [3, 1];
                        case 24:
                            return [2]
                    }
                })
            })
        }, t.prototype.showAD = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t = this;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            if (!this.hasAD()) throw "no ad ready";
                            return e = this.emit("show_ad"), e ? [4, new Promise(function(e, r) {
                                t.once("show_result", function(i) {
                                    t.emit("ad_show", {
                                        type: t.getName(),
                                        result: ++t._watch_count,
                                        level: i.level
                                    }), i.result ? e() : r(i.err)
                                })
                            })] : [2];
                        case 1:
                            return r.sent(), [2]
                    }
                })
            })
        }, t
    }(Emiter);
    __reflect(t.prototype, "Advertise");
    var r = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.getName = function() {
            return "iad"
        }, t.prototype.suportAD = function() {
            var e = FBInstant.getSupportedAPIs();
            return e.indexOf("getInterstitialAdAsync") > -1
        }, t.prototype.getADInstanceAsync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, FBInstant.getInterstitialAdAsync(e)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        }, t
    }(t);
    e.InterstitialAD = r, __reflect(r.prototype, "ad.InterstitialAD");
    var i = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.getName = function() {
            return "rad"
        }, t.prototype.suportAD = function() {
            var e = FBInstant.getSupportedAPIs();
            return e.indexOf("getRewardedVideoAsync") > -1
        }, t.prototype.getADInstanceAsync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, FBInstant.getRewardedVideoAsync(e)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        }, t
    }(t);
    e.RewardedVideoAD = i, __reflect(i.prototype, "ad.RewardedVideoAD")
}(ad || (ad = {}));
var App = function(e) {
    function t(t) {
        var r = e.call(this) || this;
        return r.stage = t, r._busyCount = 0, r._busy_timer = 0, r.event = new Emiter, r
    }
    return __extends(t, e), t.prototype.init = function() {
        this.http = new HttpService, this.storager = new Storager, this.model = new GameModel, this.connect = new GameConnect
    }, t.startup = function(e) {
        var r = new t(e);
        return Object.defineProperty(window, "app", {
            get: function() {
                return r
            },
            configurable: !0
        }), r.init(), r.registCommand(Constant.Notify.startup, StartupCmd), r.notify(Constant.Notify.startup), r
    }, t.prototype.busy = function() {
        egret.clearTimeout(this._busy_timer), egret.setTimeout(this.busyTimerOut, this, 2e4), 0 == this._busyCount++ && (this._busyInst = new BusyIndicator, this.stage.addChild(this._busyInst), this._busyInst.x = this.stage.stageWidth >> 1, this._busyInst.y = this.stage.stageHeight >> 1)
    }, t.prototype.rmBusy = function() {
        --this._busyCount <= 0 && this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
    }, t.prototype.busyTimerOut = function() {
        this._busyCount = 0, this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
    }, t.prototype.toast = function(e, t, r) {
        void 0 === t && (t = 1e3), void 0 === r && (r = 200);
        var i = new eui.Label(e);
        i.textColor = 15471893, app.stage.addChild(i), i.x = app.stage.stageWidth - i.width >> 1, i.y = app.stage.stageHeight - i.height >> 1, egret.Tween.get(i).to({
            y: i.y - r / 2,
            alpha: 1
        }, t >> 1, egret.Ease.quadOut).to({
            alpha: 0,
            y: i.y - r
        }, t >> 1, egret.Ease.quadIn).call(function() {
            return i.removeFromParent()
        })
    }, t
}(Facade);
__reflect(App.prototype, "App");
var HttpService = function() {
    function e() {
        this.game_id = 53, this.host = "https://fb-api.capjoy.com", this._server = new Http
    }
    return Object.defineProperty(e.prototype, "server", {
        get: function() {
            return this._server
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.reportFriends = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return platform instanceof PlatformFB && platform.getFriends().length > 0 ? (e = {
                            action: "friends",
                            playerId: platform.getPlayerId(),
                            payload: platform.getFriends().map(function(e) {
                                return e.getID()
                            })
                        }, [4, this._server.post("https://fb-bot.capjoy.com/api/v0/upload_" + this.game_id, {
                            data: JSON.stringify(e)
                        })]) : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.reportSwitchGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return platform.switchGameInfo && platform.isNewPlayer ? [4, this._server.post(this.host + "/fbapi/v0/ads/report/" + platform.switchGameInfo.appId + "/" + platform.appId + "/" + platform.getPlayerId(), {
                            v: $T_GAME_VERSION
                        })["catch"](function(e) {
                            return console.log(e)
                        })] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.checkSuper = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r, i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        e = this.host + "/fbapi/v0/testCase_" + this.game_id, a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), i = (r = JSON).parse, [4, this._server.post(e, {
                            nickname: platform.userInfo.name,
                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                            timezoneOffset: (new Date).getTimezoneOffset(),
                            playerId: platform.getPlayerId(),
                            appId: platform.appId
                        })];
                    case 2:
                        return t = i.apply(r, [a.sent()]), 0 == t.error && (app.model.isSuper = 1 == +t.data), [3, 4];
                    case 3:
                        return o = a.sent(), console.log("check super failed"), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.getRecommendGames = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r, i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return e = this.host + "/fbapi/v0/getRecommendGames", t = {
                            playerId: platform.userInfo.id,
                            nickname: platform.userInfo.name,
                            appId: platform.appId,
                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                            deviceOS: platform instanceof PlatformFB ? FBInstant.getPlatform() : "IOS",
                            timezoneOffset: (new Date).getTimezoneOffset()
                        }, o = (i = JSON).parse, [4, this._server.post(e, t)];
                    case 1:
                        return r = o.apply(i, [a.sent()]), 0 == r.error ? (app.model.recommendGames = r.data && r.data.ads || null, app.event.emit("game_recommend_ready")) : console.log("getRecommendGames  error:", r.msg), [2]
                }
            })
        })
    }, e.prototype.reportIfFromSkinShare = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return platform.invite_skin_data && platform.isNewPlayer ? (e = this.host + "/api/game/v0/shareUpdate_" + this.game_id, [4, this._server.post(e, {
                            v: $T_GAME_VERSION,
                            playerId: platform.getPlayerId(),
                            sharePlayerId: platform.invite_skin_data.playerId,
                            type: "share"
                        })["catch"](function(e) {
                            return console.log(e)
                        })]) : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.getSkinShareCount = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r, i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        e = 0, a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), t = this.host + "/api/game/v0/shareGet_" + this.game_id, [4, this._server.post(t, {
                            v: $T_GAME_VERSION,
                            playerId: platform.getPlayerId(),
                            type: "share"
                        })];
                    case 2:
                        return r = a.sent(), i = JSON.parse(r), e = +i.data.count || 0, [3, 4];
                    case 3:
                        return o = a.sent(), console.log(o), console.log("getSkinShareCount catch"), [3, 4];
                    case 4:
                        return app.model.invite_skin_share_count = e, [2]
                }
            })
        })
    }, e
}();
__reflect(HttpService.prototype, "HttpService");
var LeaderBoard = function(e) {
    function t(t, r, i) {
        void 0 === r && (r = "HIGHER_IS_BETTER"), void 0 === i && (i = 0);
        var o = e.call(this) || this;
        return o.name = t, o.sortType = r, o.defaultScore = i, o._selfEntry = null, o._entries = null, o._friendEntries = null, o._preInitialized = !1, o._preInitializing = !1, o._initialized = !1, o._initializing = !1, o._friends = null, o
    }
    return __extends(t, e), t.prototype.preInitializeAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r = this;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return this._preInitialized ? [2] : this._preInitializing ? [4, new Promise(function(e) {
                            r.once("preInitialized", e)
                        })] : [3, 2];
                    case 1:
                        return i.sent(), [2];
                    case 2:
                        return this._preInitializing = !0, e = this, [4, FBInstant.getLeaderboardAsync(this.name)];
                    case 3:
                        return e._leaderboard = i.sent(), [4, this._leaderboard.getPlayerEntryAsync()];
                    case 4:
                        return t = i.sent(), t ? this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(t) : this._selfEntry = RankPlayerVO.createFromContextPlayer(FBInstant.player), this._preInitialized = !0, this._preInitializing = !1, this.emit("preInitialized"), console.log("leaderboard preInitialized", this.name), [2]
                }
            })
        })
    }, Object.defineProperty(t.prototype, "initialized", {
        get: function() {
            return this.initialized
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.initializeAsync = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var r, i, o, a = this;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return this._initialized ? [2] : this._initializing ? [4, new Promise(function(e) {
                            a.once("initialized", e)
                        })] : [3, 2];
                    case 1:
                        return s.sent(), [2];
                    case 2:
                        return this._initializing = !0, [4, this.preInitializeAsync()];
                    case 3:
                        s.sent(), s.label = 4;
                    case 4:
                        return s.trys.push([4, 9, , 10]), r = e, r ? [4, this.getEntriesAsync()] : [3, 6];
                    case 5:
                        r = s.sent(), s.label = 6;
                    case 6:
                        return i = t, i ? [4, this.getConnectedPlayerEntriesAsync()] : [3, 8];
                    case 7:
                        i = s.sent(), s.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        return o = s.sent(), console.log("排行榜数据错误"), console.log(o), [3, 10];
                    case 10:
                        return this._initialized = !0, this._initializing = !1, this.emit("initialized"), console.log("leaderboard initialized", this.name), [2]
                }
            })
        })
    }, t.prototype.getEntriesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, this.preInitializeAsync()];
                    case 1:
                        return r.sent(), this._entries ? [3, 3] : (e = this._leaderboard, [4, e.getEntriesAsync(100, 0)]);
                    case 2:
                        t = r.sent(), this._entries = t.map(function(e) {
                            return RankPlayerVO.createFromLeaderBoardEntry(e)
                        }), r.label = 3;
                    case 3:
                        return [2, this._entries || []]
                }
            })
        })
    }, t.prototype.getEntries = function() {
        return this._entries || []
    }, t.prototype.getConnectedPlayerEntriesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, this.preInitializeAsync()];
                    case 1:
                        return o.sent(), this._friendEntries ? [3, 3] : (e = this._leaderboard, [4, e.getConnectedPlayerEntriesAsync(100, 0)]);
                    case 2:
                        t = o.sent(), this._friendEntries = t.map(function(e) {
                            return RankPlayerVO.createFromLeaderBoardEntry(e)
                        }), r = FBInstant.player.getID(), i = this._friendEntries.findIndex(function(e) {
                            return e.id == r
                        }), -1 == i && (this._friendEntries.push(RankPlayerVO.createFromContextPlayer(FBInstant.player)), this._friendEntries.forEach(function(e, t) {
                            return e.originalRank = t + 1
                        })), this.bindFriends(), o.label = 3;
                    case 3:
                        return [2, this._friendEntries || []]
                }
            })
        })
    }, t.prototype.getConnectedPlayerEntries = function() {
        return this._friendEntries || []
    }, t.prototype.refreshRankList = function(e, t, r) {
        var i = FBInstant.player.getID(),
            o = e.findIndex(function(e) {
                return e.id == i
            });
        if (-1 != o) {
            var a = e[o];
            a.score = t, a.extraData = r, e.sorton("score", "LOWER_IS_BETTER" == this.sortType), e.forEach(function(e, t) {
                return e.originalRank = t + 1
            })
        } else if (e.length > 0 && t > e[e.length - 1].score) {
            var a = RankPlayerVO.createFromContextPlayer(FBInstant.player);
            a.score = t, a.extraData = r, e.push(a), e.sorton("score", "LOWER_IS_BETTER" == this.sortType), e.forEach(function(e, t) {
                return e.originalRank = t + 1
            })
        }
    }, t.prototype.setScore = function(e, t) {
        var r = this;
        if (!this._preInitialized) throw "doesn't preInitialized";
        if (!(e < this._selfEntry.score)) {
            this._selfEntry.score = e, this._selfEntry.extraData = t, this._entries && this.refreshRankList(this._entries, e, t), this._friendEntries && this.refreshRankList(this._friendEntries, e, t);
            var i = function() {
                return __awaiter(r, void 0, void 0, function() {
                    var r;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.preInitializeAsync()];
                            case 1:
                                return i.sent(), console.log("setScoreAsync", e), [4, this._leaderboard.setScoreAsync(e, JSON.stringify(t))];
                            case 2:
                                return r = i.sent(), this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(r), console.log("setScoreAsync suc"), [2]
                        }
                    })
                })
            };
            i()
        }
    }, t.prototype.getScore = function() {
        if (!this._preInitialized) throw "doesn't preInitialized";
        return this._selfEntry.score
    }, t.prototype.setFriends = function(e) {
        this._friends = e, this.bindFriends()
    }, t.prototype.bindFriends = function() {
        if (this._friends && this._friendEntries) {
            var e = {},
                t = this._friends;
            t.forEach(function(t) {
                return e[t.getID()] = RankPlayerVO.createFromContextPlayer(t)
            }), e[FBInstant.player.getID()] = RankPlayerVO.createFromContextPlayer(FBInstant.player);
            var r = this._friendEntries;
            r.forEach(function(t) {
                var r = e[t.id];
                r && (t.name = r.name, t.photo = r.photo, delete e[t.id])
            });
            for (var i in e) r.push(e[i]), e[i].score = this.defaultScore;
            r.sorton("score", "LOWER_IS_BETTER" == this.sortType), r.forEach(function(e, t) {
                return e.originalRank = t + 1
            })
        }
    }, t.prototype.getSelfEntry = function() {
        return this._selfEntry
    }, t
}(Emiter);
__reflect(LeaderBoard.prototype, "LeaderBoard");
var PlatformDev = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return __extends(t, e), t.prototype.needAccount = function() {
        return !0
    }, t.prototype.getWorldFriendEntries = function() {
        for (var e = [], t = 1; e.length < 10;) {
            var r = new RankPlayerVO;
            r.id = "player" + t, r.name = "abcdsfdlsjflsjkflsflsjjfslkfs" + t, r.photo = "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/48085910_729877150720268_7517485265393287168_n.jpg?_nc_cat=107&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=f64d74834d9acda51e9359186b6b55b9&oe=5C92D158", r.score = 1e4 + Math.floor(100 * Math.random()), e.push(r), t++
        }
        return e
    }, t
}(BasePlatform);
__reflect(PlatformDev.prototype, "PlatformDev");
var PlatformFactory = function() {
    function e() {}
    return e.create = function() {
        return window.FBInstant ? new PlatformFB : new PlatformDev
    }, e
}();
__reflect(PlatformFactory.prototype, "PlatformFactory");
var PlatformFB = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._canAdd2HomeScreen = !1, t._isDateReady = !1, t._isFetching = !1, t._userInfo = {
            name: "",
            id: "",
            photo: "",
            friends: [],
            lang: "en_US"
        }, t._isPaymentsReady = !1, t
    }
    return __extends(t, e), t.prototype.getFriends = function() {
        return this._friends || []
    }, t.prototype.initSDK = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r = this;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return $T_FB_INITIALIZED ? [3, 2] : [4, FBInstant.initializeAsync()];
                    case 1:
                        i.sent(), i.label = 2;
                    case 2:
                        return this._worldRank = new LeaderBoard("world"), e = function(e) {
                            e.code && (e.nick = FBInstant.player.getName(), r.log("platform_error", e))
                        }, this._worldRank.on("error", e, this), t = function(e) {
                            r.log("platform_api", e)
                        }, this._worldRank.on("api", t, this), this.fetchData(), [2]
                }
            })
        })
    }, t.prototype.fetchData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t = this;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return this._isDateReady ? [2] : this._isFetching ? [4, new Promise(function(e, r) {
                            t.once("data_ready", e)
                        })] : [3, 2];
                    case 1:
                        return r.sent(), [2];
                    case 2:
                        return r.trys.push([2, 4, , 5]), this._isFetching = !0, [4, this.initRemoteData()];
                    case 3:
                        return r.sent(), this._isDateReady = !0, [3, 5];
                    case 4:
                        return e = r.sent(), console.log("fetchData error", e.code || e.msg || e), [3, 5];
                    case 5:
                        return this._isFetching = !1, this.emit("data_ready"), [2]
                }
            })
        })
    }, t.prototype.setLoadingProgress = function(e) {
        $T_PROGRESS = Math.max($T_PROGRESS, 100 * e)
    }, t.prototype.startGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var r, i, o, a, s, n, h, l, c, u = this;
            return __generator(this, function(g) {
                switch (g.label) {
                    case 0:
                        return [4, FBInstant.startGameAsync()];
                    case 1:
                        return g.sent(), this.initPayments(), console.log("startGameAsync", Date.now()), r = FBInstant.getEntryPointData(), console.log("entry_data", JSON.stringify(r)), this.challenge_info = r && r.challenge_info, this.challenge_info ? [4, FBInstant.context.getPlayersAsync()] : [3, 3];
                    case 2:
                        i = g.sent(), o = {}, a = {}, i.forEach(function(e) {
                            o[e.getID()] = e.getPhoto(), a[e.getID()] = e.getName()
                        }), this.challenge_info.opponents.forEach(function(e) {
                            e.name = a[e.playerId] || "unkonw", e.photo = o[e.playerId] || "default-portrait_png"
                        }), g.label = 3;
                    case 3:
                        return this.switchGameInfo = r && r.switchGameInfo || null, this.invite_skin_data = r && r.invite_skin_data, this.invite_skin_data && this.invite_skin_data.playerId == FBInstant.player.getID() && (this.invite_skin_data = null), s = this, [4, FBInstant.player.getConnectedPlayersAsync()];
                    case 4:
                        s._friends = g.sent() || [], n = this._friends.map(function(e) {
                            return e.getID()
                        }), this._userInfo = {
                            id: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            photo: FBInstant.player.getPhoto(),
                            friends: n,
                            lang: FBInstant.getLocale()
                        }, g.label = 5;
                    case 5:
                        return g.trys.push([5, 7, , 8]), h = this, [4, FBInstant.canCreateShortcutAsync()];
                    case 6:
                        return h._canAdd2HomeScreen = g.sent(), [3, 8];
                    case 7:
                        return l = g.sent(), console.log("canCreateShortcutAsync failed"), [3, 8];
                    case 8:
                        return console.log("can add sc", this._canAdd2HomeScreen), [4, this.fetchData()];
                    case 9:
                        return g.sent(), this.isNewPlayer = void 0 == this.$remoteData.gold, this.playerType = this.isNewPlayer ? "new" : "old", this.isNewPlayer && (this.$remoteData.gold = 0, this.$remoteData.add_hs = 0, this.$remoteData.add_hs_refuse_count = 0, this.$remoteData.context_ids = [], this.$remoteData.h_score = 0, this.$remoteData.iap_inventory = [], this.$remoteData.game_db = {}, this.$remoteData.skin_invites = [], this.syncRemoteData()), this.$remoteData.last_login_dayth ? Date.days() != this.$remoteData.last_login_dayth && (this.$remoteData.login_day_count++, this.$remoteData.last_login_dayth = Date.days(), this.syncRemoteData()) : (this.$remoteData.last_login_dayth = Date.days(), this.$remoteData.login_day_count = 1, this.syncRemoteData()), console.log("login_days"), this._worldRank.setFriends(this._friends), [4, this._worldRank.initializeAsync(!0, !0)];
                    case 10:
                        return g.sent(), FBInstant.setSessionData({
                            nickname: this._userInfo.name,
                            playerInfo: {
                                head: this._userInfo.photo,
                                lang: this._userInfo.lang,
                                score: this.$remoteData.h_score
                            }
                        }), this.iad = new ad.InterstitialAD(e, !0), this.iad.on("ad_failed", function(e) {
                            return u.log("ad_failed", e)
                        }), this.iad.on("ad_show", function(e) {
                            return u.log("iad_times", e)
                        }), this.rad = new ad.RewardedVideoAD(t, !0), this.rad.on("ad_failed", function(e) {
                            return u.log("ad_failed", e)
                        }), this.rad.on("ad_show", function(e) {
                            return u.log("rad_times", e)
                        }), c = r ? r.type : "normal", "normal" == c && FBInstant.context.getID() && (c = "group_rank"), platform.log("entry_point", {
                            entry: c,
                            play_type: this.playerType
                        }), this.entry = c, console.log("entry", c), [2]
                }
            })
        })
    }, t.prototype.getWorldEntries = function() {
        return this._worldRank.getEntries()
    }, t.prototype.getWorldEntriesAsync = function() {
        return this._worldRank.getEntriesAsync()
    }, t.prototype.getWorldFriendEntries = function() {
        return this._worldRank.getConnectedPlayerEntries()
    }, t.prototype.getWorldFriendEntriesAsync = function() {
        return this._worldRank.getConnectedPlayerEntriesAsync()
    }, t.prototype.getWorldSelfEntry = function() {
        return this._worldRank.getSelfEntry()
    }, t.prototype.getHighScore = function() {
        return this._worldRank.getScore() || this.$remoteData.h_score
    }, t.prototype.setHighScore = function(e, t) {
        console.log("seth", e), e > this.$remoteData.h_score && (this.$remoteData.h_score = e, this.syncRemoteData()), this._worldRank.setScore(e, t)
    }, t.prototype.hasAD = function() {
        return this.hasRAD() || this.hasIAD()
    }, t.prototype.showAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.hasRAD() ? [4, this.showRAD()] : [3, 2];
                    case 1:
                        return e.sent(), [3, 4];
                    case 2:
                        return this.hasIAD() ? [4, this.showIAD()] : [3, 4];
                    case 3:
                        e.sent(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, t.prototype.hasRAD = function() {
        return this.rad && this.rad.hasAD()
    }, t.prototype.showRAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = this.rad, e ? [4, this.rad.showAD()] : [3, 2];
                    case 1:
                        e = t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, t.prototype.hasIAD = function() {
        return this.iad && this.iad.hasAD()
    }, t.prototype.showIAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = this.iad, e ? [4, this.iad.showAD()] : [3, 2];
                    case 1:
                        e = t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, t.prototype.getToken = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(r) {
                return e = FBInstant.player.getName() || "unknow", t = {
                    playerId: this._signedPlayerInfo.getPlayerID(),
                    signature: this._signedPlayerInfo.getSignature(),
                    photo: FBInstant.player.getPhoto(),
                    nickname: e
                }, [2, t]
            })
        })
    }, Object.defineProperty(t.prototype, "userInfo", {
        get: function() {
            return this._userInfo
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getContextId = function() {
        return FBInstant.context.getID()
    }, t.prototype.getPlayerId = function() {
        return FBInstant.player.getID()
    }, t.prototype.choose = function(e, t, r) {
        return void 0 === t && (t = !1), void 0 === r && (r = "default"), __awaiter(this, void 0, void 0, function() {
            var i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        this.log("create_detail", {
                            phase: 0,
                            place: r
                        }), void 0 == e && (e = ["NEW_CONTEXT_ONLY"]), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, FBInstant.context.chooseAsync({
                            filters: e,
                            minSize: t ? 3 : 2
                        })];
                    case 2:
                        return o.sent(), [3, 4];
                    case 3:
                        return i = o.sent(), console.log("choose result", JSON.stringify(i)), i.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.log("create_detail", {
                            phase: 1,
                            place: r
                        }), this.emit("context_changed"), [2, !0]
                }
            })
        })
    }, t.prototype.switchCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            var r;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        this.log("switch_detail", {
                            phase: 0,
                            place: t
                        }), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, FBInstant.context.switchAsync(e)];
                    case 2:
                        return i.sent(), [3, 4];
                    case 3:
                        return r = i.sent(), console.log("switchCtx result", JSON.stringify(r)), r.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.emit("context_changed"), this.log("switch_detail", {
                            phase: 1,
                            place: t
                        }), [2, !0]
                }
            })
        })
    }, t.prototype.createCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            var r;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        this.log("create_detail", {
                            phase: 0,
                            place: t
                        }), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, FBInstant.context.createAsync(e)];
                    case 2:
                        return i.sent(), [3, 4];
                    case 3:
                        return r = i.sent(), console.log("createCtx result", JSON.stringify(r)), r.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.emit("context_changed"), this.log("create_detail", {
                            phase: 1,
                            place: t
                        }), [2, !0]
                }
            })
        })
    }, t.prototype.getContextPlayers = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        e = [], r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, FBInstant.context.getPlayersAsync()];
                    case 2:
                        return e = r.sent(), [3, 4];
                    case 3:
                        return t = r.sent(), console.log("getContextPlayers error", JSON.stringify(t)), [3, 4];
                    case 4:
                        return [2, e]
                }
            })
        })
    }, t.prototype.switchGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var r;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return r = {
                            switchGameInfo: {
                                appId: this.appId,
                                appName: this.appName
                            },
                            type: this.appName
                        }, [4, FBInstant.switchGameAsync(e, Object.assign(r, t))];
                    case 1:
                        return i.sent(), [2]
                }
            })
        })
    }, t.prototype.getPlatFormiOS = function() {
        return "IOS" == FBInstant.getPlatform() ? !0 : !1
    }, t.prototype.updateStatues = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var r, i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        r = 0, a.label = 1;
                    case 1:
                        if (!(3 > r)) return [3, 8];
                        i = !1, a.label = 2;
                    case 2:
                        return a.trys.push([2, 4, , 5]), [4, FBInstant.updateAsync({
                            action: t.action || "CUSTOM",
                            cta: t.cta || "Play now",
                            image: t.image,
                            text: t.text || "Play with me!",
                            template: t.template || "game_result",
                            data: e,
                            strategy: t.strategy || "IMMEDIATE",
                            notification: t.notification || "NO_PUSH"
                        })];
                    case 3:
                        return a.sent(), [3, 5];
                    case 4:
                        return o = a.sent(), i = !0, console.log("updateStatues failed", r, JSON.stringify(o)), [3, 5];
                    case 5:
                        return i ? [4, waitAsync(500)] : [3, 8];
                    case 6:
                        a.sent(), a.label = 7;
                    case 7:
                        return r++, [3, 1];
                    case 8:
                        return [2]
                }
            })
        })
    }, t.prototype.share = function(e) {
        return void 0 === e && (e = {}), __awaiter(this, void 0, void 0, function() {
            var t, r;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        t = !0, i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), console.log("share..."), [4, FBInstant.shareAsync({
                            intent: "INVITE",
                            image: e.img || RES.getRes("share_png").toDataURL("image/png"),
                            text: e.text || "Hey buddy, I found an awesome game. I'm sure you'll love it.",
                            data: e.data || null
                        })];
                    case 2:
                        return i.sent(), [3, 4];
                    case 3:
                        return r = i.sent(), t = !1, [3, 4];
                    case 4:
                        return [2, t]
                }
            })
        })
    }, t.prototype.log = function(t, r, i) {
        void 0 === i && (i = 1), e.prototype.log.call(this, t, r, i), r = r || {}, r._appVersion = $T_GAME_VERSION, r.playerId = FBInstant.player.getID(), r.playerName = FBInstant.player.getName(), FBInstant.logEvent(t, i, r)
    }, t.prototype.getData = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, r, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        t = null, r = 5, o.label = 1;
                    case 1:
                        if (t || !(r-- > 0)) return [3, 6];
                        o.label = 2;
                    case 2:
                        return o.trys.push([2, 4, , 5]), [4, FBInstant.player.getDataAsync(e)];
                    case 3:
                        return t = o.sent(), [3, 5];
                    case 4:
                        return i = o.sent(), [3, 5];
                    case 5:
                        return [3, 1];
                    case 6:
                        return [2, t || {}]
                }
            })
        })
    }, t.prototype.setData = function(e, t) {
        return void 0 === t && (t = !1), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, FBInstant.player.setDataAsync(e)];
                    case 1:
                        return r.sent(), t ? [4, FBInstant.player.flushDataAsync()] : [3, 3];
                    case 2:
                        r.sent(), r.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.canAdd2HomeScreen = function() {
        return this._canAdd2HomeScreen
    }, t.prototype.add2HomeScreen = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, FBInstant.createShortcutAsync()];
                    case 1:
                        return t.sent(), [3, 3];
                    case 2:
                        return e = t.sent(), console.log("add 2 Home Screen result", JSON.stringify(e)), [2, {
                            res: !1,
                            code: e.code
                        }];
                    case 3:
                        return [2, {
                            res: !0,
                            code: ""
                        }]
                }
            })
        })
    }, t.prototype.suportIAP = function() {
        return this._isPaymentsReady
    }, t.prototype.getCatalogAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        e = null, r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, FBInstant.payments.getCatalogAsync()];
                    case 2:
                        return e = r.sent(), console.log(JSON.stringify(e)), [3, 4];
                    case 3:
                        return t = r.sent(), console.log("getCatalogAsync error:" + t.code || t.message || t), [3, 4];
                    case 4:
                        return [2, e]
                }
            })
        })
    }, t.prototype.purchaseAsync = function(e, t) {
        return void 0 === t && (t = ""), __awaiter(this, void 0, void 0, function() {
            var r, i, o, a, s;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!this._isPaymentsReady) return [2, !1];
                        r = !1, i = FBInstant.getPlatform(), this.log("buyProduct", {
                            phase: 0,
                            productId: e,
                            platform: i
                        }), n.label = 1;
                    case 1:
                        return n.trys.push([1, 4, , 5]), o = {}, o.productID = e, t && (o.developerPayload = o.developerPayload), [4, FBInstant.payments.purchaseAsync(o)];
                    case 2:
                        return a = n.sent(), this.log("buyProduct", {
                            phase: 1,
                            productId: e,
                            platform: i
                        }), [4, FBInstant.payments.consumePurchaseAsync(a.purchaseToken)];
                    case 3:
                        return n.sent(), this.addIAPInventroy(a.productID), this.log("buyProduct", {
                            phase: 2,
                            productId: e,
                            platform: i
                        }), r = !0, [3, 5];
                    case 4:
                        return s = n.sent(), console.log("purchaseAsync error:" + s.code || s.message || s), this.log("buyProduct", {
                            phase: -1,
                            productId: e,
                            platform: i,
                            code: s.code
                        }), [3, 5];
                    case 5:
                        return [2, r]
                }
            })
        })
    }, t.prototype.checkPurchaseAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r, i, o, a, s;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!this._isPaymentsReady) return [2, null];
                        e = FBInstant.getPlatform(), t = null, n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, FBInstant.payments.getPurchasesAsync()];
                    case 2:
                        return t = n.sent(), [3, 4];
                    case 3:
                        return r = n.sent(), console.log("getPurchasesAsync error:" + r.code || r.message || r), [3, 4];
                    case 4:
                        i = 0, o = t, n.label = 5;
                    case 5:
                        if (!(i < o.length)) return [3, 10];
                        a = o[i], n.label = 6;
                    case 6:
                        return n.trys.push([6, 8, , 9]), [4, FBInstant.payments.consumePurchaseAsync(a.purchaseToken)];
                    case 7:
                        return n.sent(), this.addIAPInventroy(a.productID), this.log("checkPurchase", {
                            phase: 1,
                            productId: a.productID,
                            platform: e
                        }), [3, 9];
                    case 8:
                        return s = n.sent(), console.log("checkPurchase error:" + s.code || s.message || s), this.log("checkPurchase", {
                            phase: -1,
                            platform: e,
                            code: s.code
                        }), [3, 9];
                    case 9:
                        return i++, [3, 5];
                    case 10:
                        return [2]
                }
            })
        })
    }, t.prototype.initPayments = function() {
        var e = this;
        if (-1 != FBInstant.getSupportedAPIs().indexOf("payments.purchaseAsync") && "IOS" != FBInstant.getPlatform()) {
            var t = FBInstant.getPlatform();
            this.log("paymentsReady", {
                phase: 0,
                platform: t
            }), FBInstant.payments.onReady(function() {
                e._isPaymentsReady = !0, e.log("paymentsReady", {
                    phase: 1,
                    platform: t
                }), e.checkPurchaseAsync()
            })
        }
    }, t.prototype.addIAPInventroy = function(e) {
        this.remoteData.iap_inventory || (this.remoteData.iap_inventory = []), this.remoteData.iap_inventory.push(e), this.syncRemoteData()
    }, t.prototype.hasPurchased = function(e) {
        var t = this.remoteData.iap_inventory;
        return t && -1 != t.indexOf(e)
    }, t.prototype.checkBotSubscribe = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, r, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        e = null, o.label = 1;
                    case 1:
                        return o.trys.push([1, 5, , 6]), [4, FBInstant.player.canSubscribeBotAsync()];
                    case 2:
                        return t = o.sent(), console.log("can subscribe:", t), t ? (this.log("bot_subscribe", {
                            result: -1
                        }), [4, FBInstant.player.subscribeBotAsync()]) : [3, 4];
                    case 3:
                        r = o.sent(), this.log("bot_subscribe", {
                            result: 1
                        }), e = {
                            result: !0
                        }, o.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        return i = o.sent(), this.log("bot_subscribe", {
                            result: 0
                        }), e = {
                            result: !1,
                            code: i.code,
                            msg: i.message
                        }, [3, 6];
                    case 6:
                        return [2, e]
                }
            })
        })
    }, t
}(BasePlatform);
__reflect(PlatformFB.prototype, "PlatformFB");
var RankPlayerVO = function() {
    function e() {
        this.name = "", this.photo = "", this.score = 0, this.id = "", this.tip = "", this.originalRank = 0
    }
    return Object.defineProperty(e.prototype, "skin", {
        get: function() {
            return this.extraData && this.extraData.skin || 1
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.toJSON = function() {
        return {
            id: this.id,
            score: this.score,
            extraData: this.extraData
        }
    }, e.createFromJSON = function(t) {
        var r = new e;
        if (r.id = t.id, r.score = t.score, "string" == typeof t.extraData) try {
            r.extraData = JSON.parse(t.extraData)
        } catch (i) {} else r.extraData = t.extraData;
        return r
    }, e.createFromLeaderBoardEntry = function(t) {
        var r = t.getPlayer(),
            i = new e;
        i.name = r.getName(), i.photo = r.getPhoto(), i.id = r.getID(), i.score = t.getScore();
        var o = t.getExtraData(),
            a = null;
        try {
            o && (a = JSON.parse(o))
        } catch (s) {
            console.log(s)
        }
        return i.extraData = a, i.originalRank = t.getRank(), i
    }, e.createFromContextPlayer = function(t) {
        var r = new e;
        return r.name = t.getName(), r.photo = t.getPhoto(), r.id = t.getID(), r
    }, e
}();
__reflect(RankPlayerVO.prototype, "RankPlayerVO");
var ShareHelper;
! function(e) {
    function t(e) {
        var t = this;
        return new Promise(function(r, i) {
            e.once("ready_2_draw", function() {
                console.log("ready_2_draw");
                var t = new egret.RenderTexture;
                t.drawToTexture(e, new egret.Rectangle(0, 0, 600, 314)), e.removeFromParent();
                var i = t.toDataURL("image/png");
                t.dispose(), r(i)
            }, t), app.stage.addChildAt(e, 0), e.y = app.stage.stageHeight + 10
        })
    }

    function r(e, r, i) {
        return __awaiter(this, void 0, void 0, function() {
            var o, a, s, n, h, l;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return o = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: r
                        }, a = {
                            level: e,
                            senderId: o.playerId,
                            opponents: [o]
                        }, s = i ? "Hey, " + i + ", m" : "M", n = s + "y score is " + r + "! Can you do better?", h = new ShareImage, [4, t(h.InitShareImage1(e, o.photo, r))];
                    case 1:
                        return l = c.sent(), console.log("r done"), a.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge"
                        }, {
                            challenge_info: a
                        }), {
                            image: l,
                            text: "[Level " + e + "] " + n,
                            template: "challenge",
                            cta: "CHALLENGE"
                        })];
                    case 2:
                        return c.sent(), [2]
                }
            })
        })
    }

    function i(e, r, i, o) {
        return __awaiter(this, void 0, void 0, function() {
            var a, s, n, h, l, c, u;
            return __generator(this, function(g) {
                switch (g.label) {
                    case 0:
                        return a = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: r
                        }, s = i || "you", n = "you" == s ? "you" : "they", h = a.name + " has challenged " + s + ", " + n + " are neck and neck!", a.score > o.score ? h = a.name + " has failed to challenge " + s + ", " + s + " win!" : a.score < o.score && (h = a.name + " has succeeded in passing " + s + ". Come and challenge " + a.name), console.log("r image"), l = new ShareImage, [4, t(l.InitShareImage2(e, [a.photo, o.photo], [r, o.score]))];
                    case 1:
                        return c = g.sent(), console.log("r done"), u = {
                            level: e,
                            senderId: a.playerId,
                            opponents: [o, a]
                        }, u.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge_result"
                        }, {
                            challenge_info: u
                        }), {
                            image: c,
                            text: "[Level " + e + "] " + h,
                            cta: "Play",
                            template: "challenge_result"
                        })];
                    case 2:
                        return g.sent(), [2]
                }
            })
        })
    }

    function o(e, r, i) {
        return __awaiter(this, void 0, void 0, function() {
            var o, a, s, n, h, l, c;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return o = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: r
                        }, a = i.find(function(e) {
                            return e.playerId == o.playerId
                        }), a ? o.score < a.score && Object.assign(a, o) : i.push(o), i.sorton("score", !0), i.forEach(function(e, t) {
                            return e.rankIndex = t
                        }), s = {
                            level: e,
                            senderId: o.playerId,
                            opponents: i
                        }, n = i.findIndex(function(e) {
                            return e.playerId == o.playerId
                        }), h = [], i.length <= 6 ? h = i : 6 > n ? h = i.slice(0, 6) : (h = i.slice(0, 5), h.push(i[n]), n = 5), l = new ShareImage, [4, t(l.InitShareImage(e, n, h))];
                    case 1:
                        return c = u.sent(), console.log("r done"), s.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge_leaderboard"
                        }, {
                            challenge_info: s
                        }), {
                            image: c,
                            text: "[Level " + e + "] " + platform.userInfo.name + " scored " + o.score + "s",
                            cta: "Play",
                            template: "challenge_leaderboard"
                        })];
                    case 2:
                        return u.sent(), [2]
                }
            })
        })
    }

    function a() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(r) {
                return e = [{
                    playerId: "1838821619562248",
                    name: "six",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.5
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.8
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.3
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 2.3
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 2.6
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: .3
                }], t = new ShareImage, app.stage.addChild(t.InitShareImage(10, 0, e)), [2]
            })
        })
    }

    function s(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var a, s, n, h, l, c, u, g, c, p, d;
            return __generator(this, function(m) {
                switch (m.label) {
                    case 0:
                        return platform instanceof PlatformFB ? "SOLO" == FBInstant.context.getType() ? [2] : (a = app.model, s = platform.challenge_info, platform.challenge_info = null, n = FBInstant.context.isSizeBetween(3, null), h = n && n.answer, [4, FBInstant.context.getPlayersAsync()]) : [2];
                    case 1:
                        if (l = m.sent() || [], l = l.filter(function(e) {
                                return e.getID() != FBInstant.player.getID()
                            }), s && !(s.senderId == platform.userInfo.id && s.opponents.length <= 2)) return [3, 6];
                        c = "", !h && l.length > 0 && (c = l[0].getName()), console.log("sending challenge"), m.label = 2;
                    case 2:
                        return m.trys.push([2, 4, , 5]), [4, r(e, t, c)];
                    case 3:
                        return m.sent(), [3, 5];
                    case 4:
                        return u = m.sent(), console.log("sending challenge failed", u), [3, 5];
                    case 5:
                        return console.log("sending challenge done"), [3, 16];
                    case 6:
                        if (1 != s.opponents.length) return [3, 11];
                        g = s.opponents[0], console.log("sending challenge result"), c = h ? g.name : "", m.label = 7;
                    case 7:
                        return m.trys.push([7, 9, , 10]), [4, i(e, t, c, g)];
                    case 8:
                        return m.sent(), [3, 10];
                    case 9:
                        return p = m.sent(), console.log("sending challenge result failed", p), [3, 10];
                    case 10:
                        return console.log("sending challenge result done"), [3, 16];
                    case 11:
                        console.log("sending challenge leaderbooard"), m.label = 12;
                    case 12:
                        return m.trys.push([12, 14, , 15]), [4, o(e, t, s.opponents)];
                    case 13:
                        return m.sent(), [3, 15];
                    case 14:
                        return d = m.sent(), console.log("sending challenge leaderbooard failed", d), [3, 15];
                    case 15:
                        console.log("sending challenge leaderbooard done"), m.label = 16;
                    case 16:
                        return [2]
                }
            })
        })
    }

    function n(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var r, i, o, a;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        r = new eui.Group, i = new eui.Image("bg_tips_png"), i.scale9Grid = new egret.Rectangle(27, 50, 5, 5), o = new eui.Label("SENDING SCORE"), o.size = 26, o.textColor = 1191558, o.horizontalCenter = i.left = i.right = i.top = i.bottom = 0, o.verticalCenter = -2, r.width = 250, r.height = 55, r.anchorOffsetX = r.width >> 1, r.anchorOffsetY = r.height >> 1, r.addChild(i), r.addChild(o), app.stage.addChild(r), r.x = app.stage.stageWidth >> 1, r.y = 200, egret.Tween.get(r).set({
                            scaleX: .3,
                            scaleY: .3
                        }).to({
                            scaleX: 1,
                            scaleY: 1
                        }, 300, egret.Ease.backOut), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, Promise.race([Promise.all([new Promise(function(e) {
                            return setTimeout(e, 3e3)
                        }), s(e, t)]), new Promise(function(e) {
                            return setTimeout(e, 6e3)
                        })])];
                    case 2:
                        return n.sent(), [3, 4];
                    case 3:
                        return a = n.sent(), console.log("error", a), [3, 4];
                    case 4:
                        return o.text = "SCORE SENT", egret.Tween.get(r).wait(1e3).to({
                            scaleX: 0,
                            scaleY: 0
                        }, 200, egret.Ease.backIn).call(function(e) {
                            e.removeFromParent()
                        }, null, [r]), egret.setTimeout(function(e) {
                            return e.removeFromParent()
                        }, null, 1300, r), [2]
                }
            })
        })
    }

    function h(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, r, i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB)) return [2];
                        if ("SOLO" == FBInstant.context.getType()) return [2];
                        t = app.model, r = "context." + FBInstant.context.getID(), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, FBInstant.getLeaderboardAsync(r)];
                    case 2:
                        return i = a.sent(), i.setScoreAsync(e, ""), [3, 4];
                    case 3:
                        return o = a.sent(), [3, 4];
                    case 4:
                        return [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: r
                        })];
                    case 5:
                        return a.sent(), [2]
                }
            })
        })
    }

    function l(e, r, i) {
        return void 0 === i && (i = !1), __awaiter(this, void 0, void 0, function() {
            var o, a, s, n, h;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        o = ["Wow, it's real cool.", "The skiing game is fantastic!", "I mean all I can say is, holy moly!"], l.label = 1;
                    case 1:
                        return l.trys.push([1, 7, , 8]), a = new ShareImage, s = a.InitShareCommon("share" + Math.randInt(1, 3) + "_jpg", FBInstant.player.getPhoto()), [4, t(s)];
                    case 2:
                        return n = l.sent(), console.log("r img done"), i ? [3, 4] : [4, platform.updateStatues(Object.assign({
                            type: e
                        }, r), {
                            text: o.random(),
                            image: n,
                            cta: "Play",
                            template: e
                        })];
                    case 3:
                        return l.sent(), [3, 6];
                    case 4:
                        return [4, platform.share({
                            img: n,
                            text: o.random(),
                            cta: "Play",
                            data: Object.assign({
                                type: e
                            }, r)
                        })];
                    case 5:
                        l.sent(), l.label = 6;
                    case 6:
                        return [3, 8];
                    case 7:
                        return h = l.sent(), console.log("update Failed" + JSON.stringify(h)), [3, 8];
                    case 8:
                        return [2]
                }
            })
        })
    }

    function c(e, r) {
        return __awaiter(this, void 0, void 0, function() {
            var i, o, a, s, n, h;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return i = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: r
                        }, o = {
                            level: e,
                            senderId: i.playerId,
                            opponents: [i]
                        }, a = "My score is " + r + "s! Can you do better?", console.log("r image"), s = new ShareImage, [4, t(s.InitShareImage1(e, i.photo, r))];
                    case 1:
                        return n = l.sent(), console.log("r done"), o.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.share({
                            img: n,
                            text: "[Level " + e + "] " + a,
                            cta: "CHALLENGE",
                            data: Object.assign({
                                type: "challenge"
                            }, {
                                challenge_info: o
                            })
                        })];
                    case 2:
                        return h = l.sent(), [2, h]
                }
            })
        })
    }
    e.testl = a, e.challengePost = n, e.sendLeadboardUpdate = h, e.sendGenericUpdate = l, e.challengeShare = c
}(ShareHelper || (ShareHelper = {})), egret.Bitmap.prototype.pos = function(e, t, r, i) {
    this.x = e, this.y = t, this.width = r, this.height = i, this.anchorOffsetX = r / 2, this.anchorOffsetY = i / 2
};
var ShareImage = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.UserName = [], t.UserID = [], t.UserImage = [], t.UserScore = [], t.x = 20, t.y = 500, t
    }
    return __extends(t, e), t.prototype.InitShareCommon = function(e, t) {
        this.NumReady = 1, this.NumReadyNow = 0;
        var r = new egret.Bitmap(RES.getRes(e));
        return this.addChild(r), r.pos(300, 157, 600, 314), this.CreateImageHead2(80, 80, t), this
    }, t.prototype.InitShareImage1 = function(e, t, r) {
        return this.NumReady = 1, this.NumReadyNow = 0, this.CreateImageBg("share_challenge_bg1_png", e, 1), this.CreateImageHead(300, 100, t, 1, 0), this.CreateLabelScore(25, 150, r, 1), this
    }, t.prototype.InitShareImage2 = function(e, t, r) {
        return this.NumReady = 2, this.NumReadyNow = 0, console.log("shareimgphoto:" + t), console.log("shareimgscore:" + r), this.CreateImageBg("share_challenge_bg2_png", e, 2), r[0] <= r[1] ? this.CreateImageKing(135, 167, 1) : this.CreateImageKing(465, 167, 2), this.CreateLabelScore(135, 280, r[0], 2), this.CreateLabelScore(465, 280, r[1], 2), this.CreateImageHead(135, 167, t[0], 1, 0), this.CreateImageHead(465, 167, t[1], 1, 0), this
    }, t.prototype.InitShareImage = function(e, t, r) {
        var i = r.length;
        i > 6 && (i = 6), this.NumIndex = t, this.NumReady = i, this.NumReadyNow = 0;
        var o = r.map(function(e) {
                return e.name
            }),
            a = r.map(function(e) {
                return e.photo
            }),
            s = r.map(function(e) {
                return e.score
            });
        return this.CreateImageBg("share_challenge_bg3_png", e, 3), 3 == i ? (this.CreateImageKing(300, 140, 2), this.CreateLabelScore(120, 280, s[1], 3), this.CreateLabelScore(300, 280, s[0], 3), this.CreateLabelScore(480, 280, s[2], 3), this.CreateLabelName(120, 238, o[1], 1), this.CreateLabelName(300, 238, o[0], 0), this.CreateLabelName(480, 238, o[2], 2), this.CreateImageHead(120, 140, a[1], 3, 2), this.CreateImageHead(300, 140, a[0], 2, 1), this.CreateImageHead(480, 140, a[2], 3, 3)) : 4 == i ? (this.CreateImageKing(90, 140, 2), this.CreateLabelScore(90, 280, s[0], 3), this.CreateLabelScore(230, 280, s[1], 3), this.CreateLabelScore(370, 280, s[2], 3), this.CreateLabelScore(510, 280, s[3], 3), this.CreateLabelName(90, 238, o[0], 0), this.CreateLabelName(230, 238, o[1], 1), this.CreateLabelName(370, 238, o[2], 2), this.CreateLabelName(510, 238, o[3], 3), this.CreateImageHead(90, 140, a[0], 2, 1), this.CreateImageHead(230, 140, a[1], 3, 2), this.CreateImageHead(370, 140, a[2], 3, 3), this.CreateImageHead(510, 140, a[3], 3, 4)) : 5 == i ? (this.CreateImageKing(80, 140, 2), this.CreateLabelScore(80, 280, s[0], 3), this.CreateLabelScore(340, 90, s[1], 3), this.CreateLabelScore(540, 90, s[2], 3), this.CreateLabelScore(340, 220, s[3], 3), this.CreateLabelScore(540, 220, s[4], 3), this.CreateLabelName(80, 238, o[0], 0), this.CreateLabelName(260, 155, o[1], 1), this.CreateLabelName(440, 155, o[2], 2), this.CreateLabelName(260, 285, o[3], 3), this.CreateLabelName(440, 285, o[4], 4), this.CreateImageHead(80, 140, a[0], 2, 1), this.CreateImageHead(260, 90, a[1], 3, 2), this.CreateImageHead(440, 90, a[2], 3, 3), this.CreateImageHead(260, 220, a[3], 3, 4), this.CreateImageHead(440, 220, a[4], 3, 5)) : (this.CreateImageKing(260, 90, 3), this.CreateLabelScore(160, 90, s[1], 3), this.CreateLabelScore(340, 90, s[0], 3), this.CreateLabelScore(520, 90, s[2], 3), this.CreateLabelScore(160, 220, s[3], 3), this.CreateLabelScore(340, 220, s[4], 3), this.CreateLabelScore(520, 220, s[5], 3), this.CreateLabelName(80, 150, o[1], 1), this.CreateLabelName(260, 150, o[0], 0), this.CreateLabelName(440, 150, o[2], 2), this.CreateLabelName(80, 280, o[3], 3), this.CreateLabelName(260, 280, o[4], 4), this.CreateLabelName(440, 280, o[5], 5), this.CreateImageHead(80, 90, a[1], 3, 2), this.CreateImageHead(260, 90, a[0], 3, 1), this.CreateImageHead(440, 90, a[2], 3, 3), this.CreateImageHead(80, 220, a[3], 3, 4), this.CreateImageHead(260, 220, a[4], 3, 5), this.CreateImageHead(440, 220, a[5], 3, 6)), this
    }, t.prototype.CreateImageBg = function(e, t, r) {
        var i = new egret.Bitmap(RES.getRes(e));
        this.addChild(i), i.pos(300, 157, 600, 314);
        var o = new egret.TextField;
        this.addChild(o), o.textColor = 16767243, o.size = 35, o.bold = !0, o.text = "LEVEL " + t, 1 == r ? (o.x = 25, o.y = 50, o.anchorOffsetX = 0) : 2 == r ? (o.x = 300, o.y = 50, o.size = 40, o.anchorOffsetX = o.width / 2) : 3 == r && (o.x = 580, o.y = 28, o.size = 32, o.anchorOffsetX = o.width), o.anchorOffsetY = o.height / 2
    }, t.prototype.CreateImageKing = function(e, t, r) {
        var i = new egret.Bitmap(RES.getRes("share_crown_png"));
        this.addChild(i), t -= 1 == r ? 105 : 2 == r ? 85 : 55, i.pos(e, t, 66, 58)
    }, t.prototype.CreateImageHead = function(e, t, r, i, o) {
        var a = this,
            s = 150;
        2 == i ? s = 104 : 3 == i && (s = 72);
        var n = new egret.Bitmap;
        this.addChild(n), n.pos(e, t, s, s), RES.getResByUrl(r, function(e) {
            n.texture = e;
            var t = new egret.Shape;
            t.graphics.beginFill(255), t.graphics.drawCircle(n.x, n.y, s / 2), t.graphics.endFill(), a.addChild(t), n.mask = t, a.NumReadyNow++, a.NumReadyNow >= a.NumReady && (console.log("准备好绘图了"), a.dispatchEventWith("ready_2_draw"))
        }, this, RES.ResourceItem.TYPE_IMAGE);
        var h = new egret.Bitmap(RES.getRes("share_challenge_head" + i + "_png"));
        if (this.addChild(h), h.pos(e, t, h.width, h.height), i > 1) {
            var l = new egret.TextField;
            this.addChild(l), l.x = e, 2 == i ? l.y = t + 53 : l.y = t + 30, l.bold = !0, l.text = o + "", l.size = 22, l.anchorOffsetX = l.width / 2, l.anchorOffsetY = l.height / 2
        }
    }, t.prototype.CreateImageHead2 = function(e, t, r) {
        var i = this,
            o = 100,
            a = new egret.Bitmap;
        this.addChild(a), a.pos(e, t, o, o), RES.getResByUrl(r, function(e) {
            a.texture = e;
            var t = new egret.Shape;
            t.graphics.beginFill(255), t.graphics.drawCircle(a.x, a.y, o / 2), t.graphics.endFill(), i.addChild(t), a.mask = t, i.NumReadyNow++, i.NumReadyNow >= i.NumReady && (console.log("准备好绘图了"), i.dispatchEventWith("ready_2_draw"))
        }, this, RES.ResourceItem.TYPE_IMAGE);
        var s = new egret.Bitmap(RES.getRes("sharehead_png"));
        this.addChild(s), s.pos(e, t, 118, 118)
    }, t.prototype.CreateLabelScore = function(e, t, r, i) {
        var o = new egret.TextField;
        this.addChild(o), o.x = e, o.y = t, o.bold = !0, o.text = r + " s", 1 == i ? (o.size = 40, o.anchorOffsetX = 0) : 2 == i ? (o.size = 36, o.anchorOffsetX = o.width / 2) : (o.size = 24, o.anchorOffsetX = o.width / 2), o.anchorOffsetY = o.height / 2
    }, t.prototype.CreateLabelName = function(e, t, r, i) {
        var o = new egret.TextField;
        this.addChild(o), o.x = e, o.y = t, o.text = r, o.size = 17, o.width > 130 && (o.width = 130), o.wordWrap = !0, i == this.NumIndex && (o.textColor = 16767243), o.anchorOffsetX = o.width / 2, o.anchorOffsetY = o.height / 2
    }, t
}(egret.Sprite);
__reflect(ShareImage.prototype, "ShareImage");