(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{277:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_10分钟了解js堆、栈以及事件循环的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10分钟了解js堆、栈以及事件循环的概念","aria-hidden":"true"}},[s._v("#")]),s._v(" 10分钟了解JS堆、栈以及事件循环的概念")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[s._v("其实一开始对栈、堆的概念特别模糊，只知道好像跟内存有关，又好像事件循环也沾一点边。面试薄荷的时候，面试官正好也问到了这个问题，当时只能大方的承认不会。痛定思痛，回去好好的研究一番。\n我们将从JS的内存机制以及事件机制和大量的🌰（例子）来了解栈、堆究竟是个什么玩意。概念比较多，不用死读，所有的🌰心里想一遍，浏览器console看一遍就很清楚了。\nlet's go")])]),s._v(" "),a("h3",{attrs:{id:"js内存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js内存机制","aria-hidden":"true"}},[s._v("#")]),s._v(" JS内存机制")]),s._v(" "),a("p",[s._v("因为JavaScript具有自动垃圾回收机制，所以对于前端开发来说，内存空间并不是一个经常被提及的概念，很容易被大家忽视。特别是很多不专业的朋友在进入到前端之后，会对内存空间的认知比较模糊。在JS中，每一个数据都需要一个内存空间。内存空间又被分为两种，"),a("strong",[s._v("栈内存(stack)与堆内存(heap)")]),s._v("。")]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("栈内存一般储存基础数据类型")]),s._v(" "),a("p",[s._v("Number String Null Undefined Boolean\n(es6新引入了一种数据类型，Symbol)")])]),s._v(" "),a("p",[s._v("最简单的🌰")]),s._v(" "),a("blockquote",[a("p",[s._v("var a = 1")])]),s._v(" "),a("p",[s._v("我们定义一个变量a，系统自动分配存储空间。我们可以直接操作保存在栈内存空间的值，因此基础数据类型都是按值访问。")]),s._v(" "),a("p",[s._v("数据在栈内存中的存储与使用方式类似于数据结构中的堆栈数据结构，遵循后进先出的原则。")]),s._v(" "),a("p",[a("strong",[s._v("堆内存一般储存引用数据类型")])]),s._v(" "),a("p",[s._v("堆内存的🌰")]),s._v(" "),a("blockquote",[a("p",[s._v("var b = { xi : 20 }")])]),s._v(" "),a("p",[s._v("与其他语言不同，JS的引用数据类型，比如数组Array，它们值的大小是不固定的。引用数据类型的值是保存在堆内存中的对象。JavaScript不允许直接访问堆内存中的位置，因此我们不能直接操作对象的堆内存空间。看一下下面的图，加深理解")]),s._v(" "),a("img",{staticStyle:{width:"100%",display:"block",margin:"0 auto"},attrs:{src:"/images/accumulate/2019-8-31/stack.png"}}),s._v(" "),a("blockquote",[a("p",[s._v("var a1 = 0;   // 栈"),a("br"),s._v("\nvar a2 = 'this is string'; // 栈"),a("br"),s._v("\nvar a3 = null; // 栈"),a("br"),s._v("\nvar b = { m: 20 }; // 变量b存在于栈中，{m: 20} 作为对象存在于堆内存中"),a("br"),s._v("\nvar c = [1, 2, 3]; // 变量c存在于栈中，[1, 2, 3] 作为对象存在于堆内存中")])]),s._v(" "),a("p",[s._v("因此当我们要访问堆内存中的引用数据类型时，实际上我们首先是"),a("strong",[s._v("从栈中获取了该对象的地址引用（或者地址指针）")]),s._v("，然后再从堆内存中取得我们需要的数据。")]),s._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("测试")]),s._v(" "),a("ul",[a("li",[s._v("var a = 20;")]),s._v(" "),a("li",[s._v("var b = a;")]),s._v(" "),a("li",[s._v("b = 30;")]),s._v(" "),a("li",[s._v("console.log(a)")])]),s._v(" "),a("blockquote"),s._v(" "),a("ul",[a("li",[s._v("var m = { a: 10, b: 20 }")]),s._v(" "),a("li",[s._v("var n = m;")]),s._v(" "),a("li",[s._v("n.a = 15;")]),s._v(" "),a("li",[s._v("console.log(m.a)")])])]),s._v(" "),a("p",[s._v("同学们自己在console里打一遍，再结合下面的图例，就很好理解了")]),s._v(" "),a("img",{staticStyle:{width:"100%",display:"block",margin:"0 auto"},attrs:{src:"/images/accumulate/2019-8-31/stack1.png"}}),s._v(" "),a("img",{staticStyle:{width:"100%",display:"block",margin:"0 auto"},attrs:{src:"/images/accumulate/2019-8-31/stack2.png"}}),s._v("\n内存机制我们了解了，又引出一个新的问题，栈里只能存基础数据类型吗，我们经常用的function存在哪里呢？\n"),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("上面这个demo的结果值是")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1\n3\n2\n100\n4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("img",{staticStyle:{width:"100%",display:"block",margin:"0 auto"},attrs:{src:"/images/accumulate/2019-8-31/stack3.png"}}),s._v(" "),a("p",[a("strong",[s._v("对象")]),s._v("放在"),a("strong",[s._v("heap（堆")]),s._v("）里，常见的基础类型和函数放在"),a("strong",[s._v("stack（栈）"),a("strong",[s._v("里，函数执行的时候在栈里执行。栈里函数执行的时候可能会调一些Dom操作，ajax操作和setTimeout定时器，这时候要等stack（栈）里面的所有程序先走")]),s._v("（注意：栈里的代码是先进后出）")]),s._v("，走完后再走WebAPIs，WebAPIs执行后的结果放在callback queue（回调的队列里，注意：队列里的代码先放进去的先执行），也就是当栈里面的程序走完之后，再从任务队列中读取事件，将队列中的事件放到执行栈中依次执行，这个过程是循环不断的。")]),s._v(" "),a("ul",[a("li",[s._v("所有同步任务都在主线程上执行，形成一个执行栈")]),s._v(" "),a("li",[s._v("主线程之外，还存在一个任务队列。只要异步任务有了运行结果，就在任务队列之中放置一个事件。")]),s._v(" "),a("li",[s._v("一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列,将队列中的事件放到执行栈中依次执行\n4.主线程从任务队列中读取事件，这个过程是循环不断的")])]),s._v(" "),a("p",[a("strong",[s._v("举一个🌰说明栈的执行方式")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var a = "aa";\nfunction one(){\n    let a = 1;\n    two();\n    function two(){\n        let b = 2;\n        three();\n        function three(){\n            console.log(b)\n        }\n    }\n}\nconsole.log(a);\none();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("demo的结果是\naa\n2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"图解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图解","aria-hidden":"true"}},[s._v("#")]),s._v(" 图解")]),s._v(" "),a("img",{staticStyle:{width:"100%",display:"block",margin:"0 auto"},attrs:{src:"/images/accumulate/2019-8-31/stack4.png"}}),s._v(" "),a("p",[s._v("执行栈里面最先放的是全局作用域（代码执行有一个全局文本的环境），然后再放one， one执行再把two放进来，two执行再把three放进来，一层叠一层。")]),s._v(" "),a("p",[s._v("最先走的肯定是three，因为two要是先销毁了，那three的代码b就拿不到了，所以是先进后出（先进的后出），所以，three最先出，然后是two出，再是one出。")]),s._v(" "),a("h3",{attrs:{id:"那队列又是怎么一回事呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那队列又是怎么一回事呢？","aria-hidden":"true"}},[s._v("#")]),s._v(" 那队列又是怎么一回事呢？")]),s._v(" "),a("h4",{attrs:{id:"再举一个🌰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再举一个🌰","aria-hidden":"true"}},[s._v("#")]),s._v(" 再举一个🌰")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(1);\nconsole.log(2);\nsetTimeout(function(){\n    console.log(3);\n})\nsetTimeout(function(){\n    console.log(4);\n})\nconsole.log(5);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("blockquote",[a("p",[s._v("首先执行了栈里的代码，1 2 5。"),a("br"),s._v("\n前面说到的settimeout会被放在队列里，当栈执行完了之后，从队列里添加到栈里执行（此时是依次执行），得到 3 4")])]),s._v(" "),a("h4",{attrs:{id:"再再举一个🌰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再再举一个🌰","aria-hidden":"true"}},[s._v("#")]),s._v(" 再再举一个🌰")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(1);\nconsole.log(2);\n\nsetTimeout(function(){\n    console.log(3);\n    setTimeout(function(){\n        console.log(6);\n    })\n})\nsetTimeout(function(){\n    console.log(4);\n    setTimeout(function(){\n        console.log(7);\n    })\n})\nconsole.log(5)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("blockquote",[a("p",[s._v("同样，先执行栈里的同步代码 1 2 5."),a("br"),s._v("\n再同样，最外层的settimeout会放在队列里，当栈里面执行完成以后，放在栈中执行，3 4。"),a("br"),s._v("\n而嵌套的2个settimeout，会放在一个新的队列中，去执行 6 7.")])]),s._v(" "),a("h4",{attrs:{id:"再再再看一个🌰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再再再看一个🌰","aria-hidden":"true"}},[s._v("#")]),s._v(" 再再再看一个🌰")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(1);\nconsole.log(2);\n\nsetTimeout(function(){\n    console.log(3);\n    setTimeout(function(){\n        console.log(6);\n    })\n},400)\nsetTimeout(function(){\n    console.log(4);\n    setTimeout(function(){\n        console.log(7);\n    })\n},100)\nconsole.log(5)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("blockquote",[a("p",[s._v("如上：这里的顺序是1，2，5，4，7，3，6。也就是只要两个set时间不一样的时候 ，就set时间短的先走完，包括set里面的回调函数，再走set时间慢的。（因为只有当时间到了的时候，才会把set放到队列里面去）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("setTimeout(function(){\n    console.log('setTimeout')\n},0)\nfor(var i = 0;i<10;i++){\n    console.log(i)\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("这个demo的结果是"),a("br"),s._v("\n0 1 2 3 4 5 6 7 8 9"),a("br"),s._v("\nsetTimeout")])]),s._v(" "),a("p",[s._v("所以，得出结论，永远都是"),a("strong",[s._v("栈里的代码先行执行")]),s._v("，再从队列中依次读事件，加入栈中执行")]),s._v(" "),a("p",[s._v("stack（栈）里面都走完之后，就会依次读取任务队列,将队列中的事件放到执行栈中依次执行，这个时候栈中又出现了事件，这个事件又去调用了WebAPIs里的异步方法，那这些异步方法会在再被调用的时候放在队列里，然后这个主线程（也就是stack）执行完后又将从任务队列中依次读取事件，这个过程是循环不断的。")]),s._v(" "),a("h4",{attrs:{id:"再回到我们的第一个🌰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再回到我们的第一个🌰","aria-hidden":"true"}},[s._v("#")]),s._v(" 再回到我们的第一个🌰")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(1)\nlet promise = new Promise(function(resolve,reject){\n    console.log(3)\n    resolve(100)\n}).then(function(data){\n    console.log(100)\n})\nsetTimeout(function(){\n    console.log(4);\n})\nconsole.log(2)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("上面这个demo的结果值是"),a("br"),s._v("\n1"),a("br"),s._v("\n3"),a("br"),s._v("\n2"),a("br"),s._v("\n100"),a("br"),s._v("\n4"),a("br")])]),s._v(" "),a("ul",[a("li",[s._v("为什么setTimeout要在Promise.then之后执行呢？")]),s._v(" "),a("li",[s._v("为什么new Promise又在console.log(2)之前执行呢？")])]),s._v(" "),a("p",[s._v("setTimeout是宏任务,而Promise.then是微任务"),a("br"),s._v("\n这里的new Promise()是同步的,所以是立即执行的。")]),s._v(" "),a("p",[a("strong",[s._v("这就要引入一个新的话题宏任务和微任务（面试也会经常提及到）")])]),s._v(" "),a("h3",{attrs:{id:"宏任务和微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务和微任务","aria-hidden":"true"}},[s._v("#")]),s._v(" 宏任务和微任务")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考 Tasks, microtasks, queues and schedules"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("概念：微任务和宏任务都是属于队列，而不是放在栈中")]),a("br"),s._v(" "),a("strong",[s._v("一个新的🌰")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log('1');\n\nsetTimeout(function() {\n  console.log('setTimeout');\n}, 0);\n\nPromise.resolve().then(function() {\n  console.log('promise1');\n}).then(function() {\n  console.log('promise2');\n});\n\nconsole.log('2');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("blockquote",[a("p",[s._v("1"),a("br"),s._v("\n2"),a("br"),s._v("\npromise1"),a("br"),s._v("\npromise2"),a("br"),s._v("\nsetTimeout")])]),s._v(" "),a("p",[a("strong",[s._v("宏任务（task）")]),s._v("\n浏览器为了能够使得JS内部宏任务与DOM任务能够有序的执行，会在一个task执行结束后，在下一个 task 执行开始前，对页面进行重新渲染 （task->渲染->task->…）\n鼠标点击会触发一个事件回调，需要执行一个宏任务，然后解析HTMl。但是，setTimeout不一样，setTimeout的作用是等待给定的时间后为它的回调产生一个新的宏任务。这就是为什么打印‘setTimeout’在‘promise1 , promise2’之后。因为打印‘promise1 , promise2’是第一个宏任务里面的事情，而‘setTimeout’是另一个新的独立的任务里面打印的。")]),s._v(" "),a("p",[a("strong",[s._v("微任务 (Microtasks)")]),s._v("\n微任务通常来说就是需要在当前 task 执行结束后立即执行的任务\n比如对一系列动作做出反馈，或者是需要异步的执行任务而又不需要分配一个新的 task，这样便可以减小一点性能的开销。只要执行栈中没有其他的js代码正在执行且每个宏任务执行完，微任务队列会立即执行。如果在微任务执行期间微任务队列加入了新的微任务，会将新的微任务加入队列尾部，之后也会被执行。微任务包括了mutation observe的回调还有接下来的例子promise的回调。")]),s._v(" "),a("p",[s._v("一旦一个pormise有了结果，或者早已有了结果（有了结果是指这个promise到了fulfilled或rejected状态），他就会为它的回调产生一个微任务，这就保证了回调异步的执行即使这个promise早已有了结果。所以对一个已经有了结果的**promise调用.then()**会立即产生一个微任务。这就是为什么‘promise1’,'promise2’会打印在‘script end’之后，因为所有微任务执行的时候，当前执行栈的代码必须已经执行完毕。‘promise1’,'promise2’会打印在‘setTimeout’之前是因为所有微任务总会在下一个宏任务之前全部执行完毕。")]),s._v(" "),a("p",[a("strong",[s._v("还是🌰")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div class="outer">\n  <div class="inner"></div>\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//  elements\nvar outer = document.querySelector('.outer');\nvar inner = document.querySelector('.inner');\n\n\n//监听element属性变化\nnew MutationObserver(function() {\n  console.log('mutate');\n}).observe(outer, {\n  attributes: true\n});\n\n// click listener…\nfunction onClick() {\n  console.log('click');\n\n  setTimeout(function() {\n    console.log('timeout');\n  }, 0);\n\n  Promise.resolve().then(function() {\n    console.log('promise');\n  });\n\n  outer.setAttribute('data-random', Math.random());\n}\n\n// \ninner.addEventListener('click', onClick);\nouter.addEventListener('click', onClick);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("blockquote",[a("p",[s._v("click"),a("br"),s._v("\npromise"),a("br"),s._v("\nmutate"),a("br"),s._v("\nclick"),a("br"),s._v("\npromise"),a("br"),s._v("\nmutate"),a("br"),s._v("\n(2) timeout")])]),s._v(" "),a("p",[s._v("很好的解释了，setTimeout会在微任务（Promise.then、MutationObserver.observe）执行完成之后，加入一个新的宏任务中")]),s._v(" "),a("p",[a("strong",[s._v("多看一些🌰")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(1);\nsetTimeout(function(){\n    console.log(2);\n    Promise.resolve(1).then(function(){\n        console.log('promise1')\n    })\n})\nsetTimeout(function(){\n    console.log(3)\n    Promise.resolve(1).then(function(){\n        console.log('promise2')\n    })\n})\nsetTimeout(function(){\n    console.log(4)\n    Promise.resolve(1).then(function(){\n        console.log('promise3')\n    })\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("blockquote",[a("p",[s._v("1"),a("br"),s._v("\n2"),a("br"),s._v("\npromise1"),a("br"),s._v("\n3"),a("br"),s._v("\npromise2"),a("br"),s._v("\n4"),a("br"),s._v("\npromise3")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("console.log(1);\nsetTimeout(function(){\n    console.log(2);\n    Promise.resolve(1).then(function(){\n        console.log('promise1')\n\n        setTimeout(function(){\n            console.log(3)\n            Promise.resolve(1).then(function(){\n                console.log('promise2')\n            })\n        })\n\n    })\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("blockquote",[a("p",[s._v("1"),a("br"),s._v("\n2"),a("br"),s._v("\npromise1"),a("br"),s._v("\n3"),a("br"),s._v("\npromise2")])]),s._v(" "),a("h3",{attrs:{id:"总结回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结回顾","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结回顾")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("栈：")]),s._v(" "),a("ul",[a("li",[s._v("存储基础数据类型")]),s._v(" "),a("li",[s._v("按值访问")]),s._v(" "),a("li",[s._v("存储的值大小固定")]),s._v(" "),a("li",[s._v("由系统自动分配内存空间")]),s._v(" "),a("li",[s._v("空间小，运行效率高")]),s._v(" "),a("li",[s._v("先进后出，后进先出")]),s._v(" "),a("li",[s._v("栈中的DOM，ajax，setTimeout会依次进入到队列中,当栈中代码执行完毕后，再将队列中的事件放到执行栈中依次执行。")]),s._v(" "),a("li",[s._v("微任务和宏任务")])])]),s._v(" "),a("li",[a("p",[s._v("堆:")]),s._v(" "),a("ul",[a("li",[s._v("存储引用数据类型")]),s._v(" "),a("li",[s._v("按引用访问")]),s._v(" "),a("li",[s._v("存储的值大小不定，可动态调整")]),s._v(" "),a("li",[s._v("主要用来存放对象")]),s._v(" "),a("li",[s._v("空间大，但是运行效率相对较低")]),s._v(" "),a("li",[s._v("无序存储，可根据引用直接获取")])])])])])},[],!1,null,null,null);n.default=e.exports}}]);