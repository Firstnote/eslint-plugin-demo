/**
 * @fileoverview prohibit xml request
 * @author firstname
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-xmlrequest"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester(
    {
        parserOptions: {
            ecmaVersion: 7, // 默认支持语法为es5 
        },
    }
);
ruleTester.run("no-xmlrequest", rule, {

    valid: [

        // give me some code that won't trigger a warning
        {
            code:"let a = 12"
        }
    ],

    invalid: [
        {
            code: "const $ = { ajax:function(){$.ajax('12312/reqlocal')}}",
            errors: [{
                message: "禁止调用reqlocal请求",
                type: "Literal"
            }]
        }
    ]
});
