### css


#### 什么是 BFC

W3C 定义：浮动，绝对定位元素，inline-blocks, table-cells, table-captions,和overflow的值不为visible的元素，（除了这个值已经被传到了视口的时候）将创建一个新的块级格式化上下

#### 产生条件

- float 的值不为 none
- position 的值不为 static 或者 relative
- display 的值为 table-cell, table-caption, inline-block, flex, 或者 inline-flex 中的其中一个
- overflow 的值不为 visible
- display:flow-root: 最安全无副作用的做法 （但是 兼容 头疼）


### 变量

	:root {
		--THEME: var(--USER-THEME-COLOR, #e5473c);
		--THEME-COLOR: var(--USER-THEME-COLOR, #e5473c);
	}

将全局自定义属性设置为 SASS 变量

	$theme-color: var(--THEME);
	$theme-bg: var(--THEME);

JS 修改全局自定义属性

	const elm = document.documentElement
	const colorArr = ['#e5473c', '#31c27c', '#0c8ed9', '#f60']
	elm.style.setProperty('--USER-THEME-COLOR', colorArr[i])
	i = (i + 1) % colorArr.length

#### filter

	filter:blur(2px);








### CSS 实现多行文字截断

	.wrap {
	    height: 40px;
	    line-height: 20px;
	    overflow: hidden;
	}
	
	.wrap .text {
	    float: right;
	    margin-left: -5px;
	    width: 100%;
	    word-break: break-all;
	}
	
	.wrap::before {
	    float: left;
	    width: 5px;
	    content: '';
	    height: 40px;
	}
	
	.wrap::after {
	    float: right;
	    text-align: right;
	    content: "...";
	    height: 20px;
	    line-height: 20px;
	    /* 为三个省略号的宽度 */
	    width: 3em;
	    /* 使盒子不占位置 */
	    margin-left: -3em;
	    /* 移动省略号位置 */
	    position: relative;
	    left: 100%;
	    top: -20px;
	    padding-right: 5px;
	    /* 显示更好的效果 */
	    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(white), color-stop(50%, white));
	    background: -moz-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
	    background: -o-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
	    background: -ms-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
	    background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
	}

### transition+fixed

如果transformEle使用了transform，而fixedEle使用了position: fixed，那么position: fixed不会有固定在visual viewport上，实际结果相当于相对transformEle元素定位，就是fixed相对的不是visual viewport，而是transformELe, 产生这样的原因主要是因为transform和position: fixed使用了不同的坐标系统

### 盒模型

盒模型由 4 部分组成，从内到外分别是：content padding border margin。

	// W3C 标准盒模型（浏览器默认）
	box-sizing: content-box;
	
	// IE 怪异盒模型
	box-sizing: border-box;

### BFC

BFC（Block Formatting Context）格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

#### 形成BFC的条件

	1、浮动元素，float 除 none 以外的值； 
	2、定位元素，position（absolute，fixed）； 
	3、display 为以下其中之一的值 inline-block，table-cell，table-caption； 
	4、overflow 除了 visible 以外的值（hidden，auto，scroll）；

#### BFC的特性

	1.内部的Box会在垂直方向上一个接一个的放置。
	2.垂直方向上的距离由margin决定
	3.bfc的区域不会与float的元素区域重叠。
	4.计算bfc的高度时，浮动元素也参与计算
	5.bfc就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。


### 3D效果

- rotate 旋转
- translate 定义 2D 转换
- translateZ 定义 3D 转换
- perspective 为 3D 转换元素定义透视视图。
- transform-style: preserve-3d; 指定子元素定位在三维空间内。另外，该属性是非继承的。

- perspective是指 从当前视角到所看平面的距离
- translateZ指的是 从所看平面到推进视角之间的距离，大白话就是从当前距离 把你看的拉进或者拉远的距离
- 人的视角在3D投影效果中是 近大远小













### css

#### dark

	.message-dark {
	    filter: invert(100) hue-rotate(180deg);
	}

### css

[css_tricks](https://qishaoxuan.github.io/css_tricks/)

获取元素在可视区域的位置

1. IntersectionObserver
2. getBoundingClientRect





### svg流程图

[有向无环图](https://user-gold-cdn.xitu.io/2018/11/25/1674aa56b435762f)

### css

1. background-blend-mode：用于混合元素背景图案、渐变和颜色
2. mix-blend-mode：用于元素与元素之间的混合
3. isolation：用户阻止某些元素在mix-blend-mode 使用时被混合

#### CSS 渐变和 background-blend-mode 组合

#### 1. 光谱背景

	.spectrum-background {
	    background:
	        linear-gradient(red, transparent),
	        linear-gradient(to top left, lime, transparent),
	        linear-gradient(to top right, blue, transparent);
	    background-blend-mode: screen;
	}

#### 2. 条纹网格背景

	.plaid-background {
	    background:
	        repeating-linear-gradient(
	            -45deg,
	            transparent 0,
	            transparent 25%,
	            dodgerblue 0,
	            dodgerblue 50%
	       ),
	       repeating-linear-gradient(
	            45deg,
	            transparent 0,
	            transparent 25%,
	            tomato 0,
	            tomato 50%
	        ),
	        repeating-linear-gradient(
	            transparent 0,
	            transparent 25%,
	            gold 0,
	            gold 50%
	        ), white;
	    background-blend-mode: multiply;
	    background-size: 100px 100px;
	}

#### 3. 圆圈环绕背景

	.circles-background {
	    background:
	        radial-gradient(
	            khaki 40px,
	            transparent 0,
	            transparent 100%
	        ),
	        radial-gradient(
	            skyblue 40px,
	            transparent 0,
	            transparent 100%
	        ),
	        radial-gradient(
	            pink 40px,
	            transparent 0,
	            transparent 100%
	        ), snow;
	    background-blend-mode: multiply;
	    background-size: 100px 100px;
	    background-position: 0 0, 33px 33px, -33px -33px;
	}

#### 图片效果和 background-blend-mode 组合

#### 混合模式

	.blend {
	    background: #fff;
	}
	.blend img {
	    mix-blend-mode: darken; 
	}

#### 渐变边框

	.box {
	  margin: 80px 30px;
	  width: 200px;
	  height: 200px;
	  position: relative;
	  background: #fff;
	  float: left;
	}
	.box:before {
	      content: '';
	      z-index: -1;
	      position: absolute;
	      width: 220px;
	      height: 220px;
	      top: -10px;
	      left: -10px;
	      background-image: linear-gradient(90deg, yellow, gold);
	}

#### currentColor

#### Object Fit

	.image__contain {
	  object-fit: contain; 
	} 
	.image__fill {
	  object-fit: fill; 
	}
	.image__cover {
	  object-fit: cover; 
	}
	.image__scale-down {
	  object-fit: scale-down;
	}

#### checkbox

	<!-- css -->
	input[type=checkbox] {display: none;}
	
	input[type=checkbox] + label:before {  
	    content: "";
	    border: 1px solid #000;
	    font-size: 11px;    
	    line-height: 10px;
	    margin: 0 5px 0 0;
	    height: 10px;
	    width: 10px;
	    text-align: center;
	    vertical-align: middle;
	}
	
	input[type=checkbox]:checked + label:before {  
	    content: "\2713";
	}

	<!-- checkbox -->
	input[type=checkbox] + label:before {  
	    content: "\2713";
	    color: transparent;
	    transition: color ease .3s;
	}
	input[type=checkbox]:checked + label:before {  
	    color: #000;
	}
	
	<!-- radio -->
	input[type=radio] + label:before {  
	    content: "\26AB";
	    border: 1px solid #000;
	    border-radius: 50%;
	    font-size: 0;    
	    transition: font-size ease .3s;
	}
	input[type=radio]:checked + label:before {  
	    font-size: 10px;    
	}

#### visibility: visible

	.hidden {
	  visibility: hidden;
	}
	.hidden .visible {
	  visibility: visible;
	}

#### vw、vh

- vw (viewport width) - 浏览器窗口宽度的1%。
- vh (viewport height) - 同上，只不过用来描述高度。
- vmin and vmax 设置介于vh和vw之间的最大最小值。

#### 文字修饰

	*::selection {
	    color: #fff;
	    background: #000;
	}
	*::-moz-selection {    
	    /*Only Firefox still needs a prefix*/
	    color: #fff;
	    background: #000;
	}

#### 使用硬件加速

	.block {
	    transform: translateZ(0);
	}

#### Color + Border = Border-Color

	input[type="text"] {  
	    color: red;
	    border: 1px solid;
	}

#### Houdini

















