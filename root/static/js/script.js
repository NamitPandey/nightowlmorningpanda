// Snowflakes
var sf = new Snowflakes({
    color: "#ffd700",
    minSize: 20
});

// Read name from URL
var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("name");

if (c != null) {
    document.getElementById("name").innerHTML = c;
    document.getElementById("nae").innerHTML = c;
}

// Hide main content initially
$(".main").fadeOut(1);

// Typed instance holder
var typedInstance = null;

// Start button click
$('#play').click(function () {

    // Transition screens
    $(".loader").fadeOut(1500);
    $(".main").fadeIn("slow");

    // Stop snowflakes
    sf.destroy();

    // Animate balloons
    $('.balloon-border').animate({
        top: -500
    }, 8000);

    // Play music
    var audio = $('.song')[0];
    audio.play();

    // Start typing only once
    if (!typedInstance) {
        typedInstance = new Typed("#typed", {
            stringsElement: '#typed-strings',
            typeSpeed: 30,
            backSpeed: 10,
            loop: true,
            showCursor: true
        });
    }
});


// ================= CONFETTI ENGINE ===================

var retina = window.devicePixelRatio,
    PI = Math.PI,
    sqrt = Math.sqrt,
    round = Math.round,
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,

    rAF = window.requestAnimationFrame,
    cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
    _now = Date.now || function () {
        return new Date().getTime();
    };

// Polyfill
(function (w) {
    var prev = _now();

    function fallback(fn) {
        var curr = _now();
        var ms = Math.max(0, 16 - (curr - prev));
        var req = setTimeout(fn, ms);
        prev = curr;
        return req;
    }

    var cancel = w.cancelAnimationFrame ||
        w.webkitCancelAnimationFrame ||
        w.clearTimeout;

    rAF = w.requestAnimationFrame ||
        w.webkitRequestAnimationFrame ||
        fallback;

    cAF = function (id) {
        cancel.call(w, id);
    };
}(window));

document.addEventListener("DOMContentLoaded", function () {

    var speed = 50,
        duration = (1.0 / speed),
        confettiRibbonCount = 10,
        ribbonPaperCount = 15,
        ribbonPaperDist = 8.0,
        ribbonPaperThick = 8.0,
        confettiPaperCount = 10,
        DEG_TO_RAD = PI / 180,
        colors = [
            ["#df0049", "#660671"],
            ["#00e857", "#005291"],
            ["#2bebbc", "#05798a"],
            ["#ffd200", "#b06c00"]
        ];

    function Vector2(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.Add = function (v) {
            this.x += v.x;
            this.y += v.y;
        };
        this.Sub = function (v) {
            this.x -= v.x;
            this.y -= v.y;
        };
        this.Mul = function (f) {
            this.x *= f;
            this.y *= f;
        };
        this.Normalize = function () {
            var len = sqrt(this.x * this.x + this.y * this.y);
            if (len != 0) {
                this.x /= len;
                this.y /= len;
            }
        };
    }

    function ConfettiPaper(x, y) {
        this.pos = new Vector2(x, y);
        this.rotationSpeed = random() * 600 + 800;
        this.angle = DEG_TO_RAD * random() * 360;
        this.rotation = DEG_TO_RAD * random() * 360;
        this.size = 5.0;
        this.oscillationSpeed = random() * 1.5 + 0.5;
        this.xSpeed = 40.0;
        this.ySpeed = random() * 60 + 50.0;
        this.time = random();
        var ci = round(random() * (colors.length - 1));
        this.frontColor = colors[ci][0];
        this.backColor = colors[ci][1];

        this.Update = function (dt) {
            this.time += dt;
            this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * dt;
            this.pos.y += this.ySpeed * dt;

            if (this.pos.y > ConfettiPaper.bounds.y) {
                this.pos.x = random() * ConfettiPaper.bounds.x;
                this.pos.y = 0;
            }
        };

        this.Draw = function (ctx) {
            ctx.fillStyle = this.frontColor;
            ctx.fillRect(this.pos.x * retina, this.pos.y * retina, this.size * retina, this.size * retina);
        };
    }

    ConfettiPaper.bounds = new Vector2(0, 0);

    function ConfettiContext(id) {
        var canvas = document.getElementById(id);
        var parent = canvas.parentNode;
        var width = parent.offsetWidth;
        var height = parent.offsetHeight;

        canvas.width = width * retina;
        canvas.height = height * retina;

        var ctx = canvas.getContext("2d");

        ConfettiPaper.bounds = new Vector2(width, height);

        var papers = [];
        for (var i = 0; i < confettiPaperCount; i++) {
            papers.push(new ConfettiPaper(random() * width, random() * height));
        }

        this.update = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < papers.length; i++) {
                papers[i].Update(duration);
                papers[i].Draw(ctx);
            }

            rAF(this.update.bind(this));
        };

        this.update();
    }

    new ConfettiContext("confetti");
});
