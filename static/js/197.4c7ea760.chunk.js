(this["webpackJsonpnpm-unpkg"]=this["webpackJsonpnpm-unpkg"]||[]).push([[197],{339:function(n,a){!function(n){var a=n.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,e){"string"===typeof a&&(a=[a]),a.forEach((function(a){!function(a,e){var t="doc-comment",o=n.languages[a];if(o){var r=o[t];if(!r){var i={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};r=(o=n.languages.insertBefore(a,"comment",i))[t]}if(r instanceof RegExp&&(r=o[t]={pattern:r}),Array.isArray(r))for(var p=0,s=r.length;p<s;p++)r[p]instanceof RegExp&&(r[p]={pattern:r[p]}),e(r[p]);else e(r)}}(a,(function(n){n.inside||(n.inside={}),n.inside.rest=e}))}))}}),a.addSupport(["java","javascript","php"],a)}(Prism)}}]);
//# sourceMappingURL=197.4c7ea760.chunk.js.map