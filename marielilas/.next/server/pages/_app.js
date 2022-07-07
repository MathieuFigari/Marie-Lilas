(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8253:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__1IwEk"
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__LLaoY",
	"header": "Navbar_header__XBeLG",
	"link": "Navbar_link___aBTo",
	"link_active": "Navbar_link_active__ctUTE",
	"logo": "Navbar_logo__KhYAp"
};


/***/ }),

/***/ 1362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/NavBar/Navbar.module.css
var Navbar_module = __webpack_require__(7066);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.da3ac781.png","height":250,"width":250,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlElEQVR42mOAgXWpThxrU52UgJiNARkABRihtCAQKwAxBwMUoCtUBmIFBiBYmmDHwoAOtme7CW7OdBXflOGitq/AkwuomJkBBiS5WJiAFHuDp77AojhbrxkRljrr0pz5GJAAGz8rkxGQVgdiYyA2YkADjEAsLMLOLGGrICQowckiWeGqw8iABJiguvWAWBqIdaGaGAAaAh4cSCcCUwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/NavBar/index.js







function NavBar() {
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Navbar_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Navbar_module_default()).siteHeader,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (Navbar_module_default()).navbar,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).logo,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            width: "100",
                            height: "100"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: router.asPath == "/" ? (Navbar_module_default()).link_active : (Navbar_module_default()).link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Accueil"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: router.pathname == "/Articles" || router.pathname == "/Articles/[article]" ? (Navbar_module_default()).link_active : (Navbar_module_default()).link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/Articles",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Articles"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: router.asPath == "/#scrollToContact" ? (Navbar_module_default()).link_active : (Navbar_module_default()).link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/#scrollToContact",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Contact"
                            })
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(8253);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/index.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: "Marie Lilas Voyance - 7 Rue Olivier Brillouet - 17700 Surg\xe8res - marie-lilas@hotmail.fr"
    });
};

;// CONCATENATED MODULE: ./components/Container/index.js




function Container(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675], () => (__webpack_exec__(1362)));
module.exports = __webpack_exports__;

})();