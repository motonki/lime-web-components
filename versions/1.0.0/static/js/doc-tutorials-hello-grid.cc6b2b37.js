(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./doc/tutorials/hello-grid.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"hello-grid"}},"Hello, Grid!"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This guide will show you how to use the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limel-grid")," component to control which widgets to display on a given area, and how to handle different screen sizes."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"creating-a-plugin"}},"Creating a Plugin"),o.a.createElement(r.MDXTag,{name:"p",components:n},"While you can use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limel-grid")," in an existing plugin, you will most likely want to separate your widgets and your grid. So we'll start by creating a new plugin."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lime-project")," to create a new plugin"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"lime-project new plugin\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"It can be named anything, but in this guide we'll name it ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"My Grid"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Enter the plugin directory and generate a new web component:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"cd my-grid\nlime-project generate web-component hello-grid\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"When the first component is created, some project setup is needed which might take a while to complete."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"setting-up-our-example"}},"Setting up Our Example"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Once the setup is complete, we can change directory to the root directory of the web components, and start our favorite editor."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh",metaString:""}},"cd frontend\ncode .\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Our hello-grid component is located in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/components/lwc-my-grid-hello-grid/lwc-my-grid-hello-grid.tsx"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Remove the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limel-button")," component from the scaffolded component, and replace it with a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"limel-grid")," component, and some mock content, like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"    public render() {\n        return (\n            <limel-grid>\n                <my-deep-red-component />\n                <my-red-component />\n                <my-orange-component />\n                <my-yellow-component />\n                <my-green-component />\n                <my-turquoise-component />\n                <my-blue-component />\n                <my-dark-blue-component />\n                <my-magenta-component />\n                <my-light-grey-component />\n                <my-dark-grey-component />\n            </limel-grid>\n        );\n    }\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"We'll use these mock components for this example, but you can replace them with actual components if you like."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note that when using a real component, you need to pass the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"platform")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"context")," properties to it, like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"<my-deep-red-component\n    platform={this.platform}\n    context={this.context} />\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Now we need to add a few things to the stylesheet for this component. Open ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/components/lwc-my-grid-hello-grid/lwc-my-grid-hello-grid.scss"),". The file should be empty. Since we're using mock components, we need to add a little bit of styling to be able to see them, and tell the difference between them. Add the following to the file, and add some blank lines above, so you have somewhere to put the real code we'll add in a moment. If you decided to use real components instead of the mocks, go ahead and skip this step."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss",metaString:""}},"// Below is stuff that's only here for the boxes in the grid\n// to look nice in this example. You wouldn't use any of this\n// when placing real components into a grid.\n\nmy-deep-red-component { background-color: var(--lime-deep-red); }\nmy-red-component { background-color: var(--lime-red); }\nmy-orange-component { background-color: var(--lime-orange); }\nmy-yellow-component { background-color: var(--lime-yellow); }\nmy-green-component { background-color: var(--lime-green); }\nmy-turquoise-component { background-color: var(--lime-turquoise); }\nmy-blue-component { background-color: var(--lime-blue); }\nmy-dark-blue-component { background-color: var(--lime-dark-blue); }\nmy-magenta-component { background-color: var(--lime-magenta); }\nmy-light-grey-component { background-color: var(--lime-light-grey); }\nmy-dark-grey-component { background-color: var(--lime-dark-grey); }\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"configuring-the-grid"}},"Configuring the Grid"),o.a.createElement(r.MDXTag,{name:"p",components:n},'Now, we get to actually configuring the grid. First, we need to give each component in the grid a "name", by which we can reference it later. You can name each component anything you want, like ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"salespipe"),", or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"infotile-active-support-tickets"),", but keeping the names to a fixed number of characters helps when we configure the grid in a moment. One to three characters is probably a good number for most cases."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Add this to the top of the scss-file:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss",metaString:""}},"my-deep-red-component { grid-area: drd; }\nmy-red-component { grid-area: red; }\nmy-orange-component { grid-area: ora; }\nmy-yellow-component { grid-area: yel; }\nmy-green-component { grid-area: grn; }\nmy-turquoise-component { grid-area: trq; }\nmy-blue-component { grid-area: blu; }\nmy-dark-blue-component { grid-area: dbl; }\nmy-magenta-component { grid-area: mag; }\nmy-light-grey-component { grid-area: lgr; }\nmy-dark-grey-component { grid-area: dgr; }\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"And now we can finally configure our grid. Add this just below the above segment:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss",metaString:""}},'limel-grid {\n    --lime-grid-columns: 4;\n\n    --lime-grid-area:\n        "drd drd blu dbl"\n        "trq trq blu dbl"\n        "red red red red"\n        "dgr mag mag lgr"\n        "ora ora yel yel"\n        "grn grn .   .  "\n        "grn grn .   .  ";\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note how we are using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".")," to signify empty cells of the grid."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"different-configurations-for-different-screen-sizes"}},"Different Configurations for Different Screen Sizes"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Using the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@Device")," decorator, we can update the grid configuration to suit the circumstances."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Add ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"State")," to the imports from ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@stencil/core"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"import { Component, Element, Prop, State } from '@stencil/core';\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Then import ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Device")," from ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@limetech/lime-web-components-decorators"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"import { Device } from '@limetech/lime-web-components-decorators';\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Then use these two decorators as follows:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"@Device()\n@State()\nprivate device;\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note that the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"State")," decorator ensures that the component is re-rendered whenever the value of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"this.device")," is changed."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx",metaString:""}},"public render() {\n    return (\n        <limel-grid class={`${this.device && this.device.type}`}>\n            <my-deep-red-component />\n            <my-red-component />\n            <my-orange-component />\n            <my-yellow-component />\n            <my-green-component />\n            <my-turquoise-component />\n            <my-blue-component />\n            <my-dark-blue-component />\n            <my-magenta-component />\n            <my-light-grey-component />\n            <my-dark-grey-component />\n        </limel-grid>\n    );\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The reason we use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"this.device && this.device.type")," instead of just ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"this.device.type")," is so that we don't get an error if ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"this.device")," is ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"null")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"undefined"),". At the time of writing, the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Device")," decorator is not implemented in the dev-app, so there the value of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"this.device")," will always be ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"undefined"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},'Now, we can configure the grid for each state. Note that we set a "default" configuration, which we override when a certain class is set on the element. This is so that if the ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Device")," decorator is updated to supply a new state name we don't know about, we still have that default configuration to fall back on, instead of showing nothing."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss",metaString:""}},'limel-grid {\n    --lime-grid-columns: 2;\n\n    --lime-grid-area:\n        "drd drd"\n        "trq trq"\n        "red red"\n        "dgr lgr"\n        "ora ora"\n        "grn grn"\n        "grn grn"\n        "blu dbl"\n        "blu dbl"\n        "mag mag"\n        "yel yel";\n\n    &.tablet {\n        --lime-grid-columns: 4;\n\n        --lime-grid-area:\n            "drd drd blu dbl"\n            "trq trq blu dbl"\n            "red red red red"\n            "dgr mag mag lgr"\n            "ora ora yel yel"\n            "grn grn .   .  "\n            "grn grn .   .  ";\n    }\n\n    &.desktop {\n        --lime-grid-columns: 8;\n\n        --lime-grid-area:\n            "drd drd blu dbl red red red red"\n            "trq trq blu dbl dgr mag mag lgr"\n            "ora ora yel yel grn grn grn grn"\n            "ora ora yel yel grn grn grn grn";\n    }\n}\n')),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"configuring-a-slot"}},"Configuring a Slot"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To add our grid to the dashboard, all we need to do is edit ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lwc.config.json")," and set our desired slot:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json",metaString:""}},'[\n    {\n        "name": "lwc-my-grid-hello-grid",\n        "slot": "dashboard"\n    }\n]\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Then install the plugin containing this grid component, and all plugins used in the grid, restart the server, and your new grid should be there to greet you next time you log in."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Note: Do")," not ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"set a slot for the components used in the grid, or they will be loaded and displayed twice\u2014once by the grid component, and once by the slot itself.")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"further-reading"}},"Further reading"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The grid layout is further explained in the Grid section of the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"lime-elements")," ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://lundalogik.github.io/lime-elements/"}},"documentation"),"."))}}}]);