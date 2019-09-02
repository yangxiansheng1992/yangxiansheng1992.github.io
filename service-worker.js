/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f5048e506749645e9d9c2c70d4866196"
  },
  {
    "url": "accumulate/10分钟了解JS堆、栈以及事件循环的概念.html",
    "revision": "966d9bf4bbdd9006914f762adb465d99"
  },
  {
    "url": "accumulate/index.html",
    "revision": "10a885033a9c6c4161c8fc3c8fad18dd"
  },
  {
    "url": "assets/css/0.styles.2ddf092e.css",
    "revision": "89468ef5795f902812324016affcd658"
  },
  {
    "url": "assets/img/home-bg.f5396e30.jpg",
    "revision": "f5396e308f85adecbf70b6f59918b5bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8796d08b.js",
    "revision": "68bb4e646d514d1033ad32eb7a88aee5"
  },
  {
    "url": "assets/js/10.7d1eaf61.js",
    "revision": "7c3c1df1d4389801176ee9f526d74444"
  },
  {
    "url": "assets/js/11.6bc13b87.js",
    "revision": "38d95388f4e4bdbb6a188d448d89a6ba"
  },
  {
    "url": "assets/js/12.91dc5691.js",
    "revision": "58fab862b04c811d64381e9aebab088a"
  },
  {
    "url": "assets/js/13.fab1d208.js",
    "revision": "c8c6b6b4cd2ad13cceddf8db9608da57"
  },
  {
    "url": "assets/js/14.903dde32.js",
    "revision": "4684744febf2db1790b07ceca7f11890"
  },
  {
    "url": "assets/js/15.68e12a94.js",
    "revision": "08e16a11418324ab59fa55870be2ee28"
  },
  {
    "url": "assets/js/16.75e9ce68.js",
    "revision": "594b54d5e4b80c2dcc0ac656a56d86be"
  },
  {
    "url": "assets/js/17.c68da63a.js",
    "revision": "968591800c613c6ba7d95e810483cb90"
  },
  {
    "url": "assets/js/18.792986b1.js",
    "revision": "54ef13cda741bf9392a7445b796f98e6"
  },
  {
    "url": "assets/js/19.997e6579.js",
    "revision": "1682faff009bb9d3150f62bec083465a"
  },
  {
    "url": "assets/js/4.d62fad2e.js",
    "revision": "2b3ab0146e1023cc87557cc9d3ecf80b"
  },
  {
    "url": "assets/js/5.453854b4.js",
    "revision": "d4a35da4f9c363e221e5c72b3a91a3b5"
  },
  {
    "url": "assets/js/6.fb63a8f4.js",
    "revision": "6b05788d0a63d4901c7ee807c1ec043c"
  },
  {
    "url": "assets/js/7.6b7c419a.js",
    "revision": "21e60b6b7a221a0da5cd93c88d5ed1d0"
  },
  {
    "url": "assets/js/8.809915b8.js",
    "revision": "ac1839ffa402e35ddf7773823a68ac2e"
  },
  {
    "url": "assets/js/9.f82e9cf2.js",
    "revision": "02648314dbf8592fb318b5fe1ac60897"
  },
  {
    "url": "assets/js/app.d501342b.js",
    "revision": "a987cff2fbd8ee1367b3731d66617a8b"
  },
  {
    "url": "assets/js/vendors~flowchart.00ae71ab.js",
    "revision": "8b169b2d6d25377b7fe06df6b830e850"
  },
  {
    "url": "category/index.html",
    "revision": "b3487db350d520896c3a0a79feed6d0d"
  },
  {
    "url": "category/react.html",
    "revision": "cf65f3c3299ba278ea4823efa6fc81fb"
  },
  {
    "url": "category/RN.html",
    "revision": "abdb846eb4d269e128236696b35e228c"
  },
  {
    "url": "category/vue.html",
    "revision": "c35a39484bc3cabc48f496f163504c9a"
  },
  {
    "url": "guitar.jpg",
    "revision": "3dfa2f3dc388b49b6ee00c7aa64c18da"
  },
  {
    "url": "hobby/economy/简洁的人生建议.html",
    "revision": "94ef3c923840173bee3775e88ca50fa1"
  },
  {
    "url": "hobby/index.html",
    "revision": "3cec70838d0be213d9ab269d68d1d32e"
  },
  {
    "url": "image/home/dog.png",
    "revision": "f04b5b89bb349fdee153e80031ab39bf"
  },
  {
    "url": "image/home/jishu.png",
    "revision": "a6256f28263e95a9d448802ec3cf02c7"
  },
  {
    "url": "index.html",
    "revision": "d0223a55d3fb62508af89668ca8f85ef"
  },
  {
    "url": "me.png",
    "revision": "c4575f7126cb00dcd794a057fe050679"
  },
  {
    "url": "photo.png",
    "revision": "b9d49ffcae806b460633d9b1c958e85e"
  },
  {
    "url": "tag/index.html",
    "revision": "045fad78ffb92a043f510dbfe28f7531"
  },
  {
    "url": "tag/tag1.html",
    "revision": "f08d1d7820abdfbfad3d22a0b305e2cf"
  },
  {
    "url": "tag/tag2.html",
    "revision": "9f4efac2c57c7652c6d3f1cab59c2501"
  },
  {
    "url": "tag/tag3.html",
    "revision": "385b57a2c4b8aeb0f3392ca486292aed"
  },
  {
    "url": "timeLine/index.html",
    "revision": "5ce43ecf35082fe2c8ade5d2c3fbaaf1"
  },
  {
    "url": "views/other/guide.html",
    "revision": "8d736f6c44af29a0b55ebc1b8f3549a9"
  },
  {
    "url": "views/react-native/index.html",
    "revision": "12a777caf875d6514182770c890ab859"
  },
  {
    "url": "views/react/index.html",
    "revision": "18863834d9bdfdc3aa388c6b26028323"
  },
  {
    "url": "views/vue/index.html",
    "revision": "bc258b76406db676dba43ca276079713"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
