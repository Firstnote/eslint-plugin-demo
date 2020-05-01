/**
 * @fileoverview prohibit xml request
 * @author firstname
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: "prohibit xml request",
			category: "Fill me in",
			recommended: false
		},
		fixable: null, // or "code" or "whitespace"
		schema: [
			// fill in your schema
		]
	},

	create: function(context) {
		// variables should be defined here

		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		// any helper functions should go here or else delete this section

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			Literal(node) {
				if (node.value.indexOf && node.value.indexOf("/reqlocal") != -1) {
					context.report({
						node: node,
						message: "禁止调用{{ identifier }}请求",
						data: {
							identifier: "reqlocal"
						}
					});
				}
				if (node.value.indexOf && node.value.indexOf("/reqreadfile") != -1) {
					context.report({
						node: node,
						message: "禁止调用{{ identifier }}请求",
						data: {
							identifier: "reqreadfile"
						}
					});
				}
				if (node.value.indexOf && node.value.indexOf("/reqreadmap") != -1) {
					context.report({
						node: node,
						message: "禁止调用{{ identifier }}请求",
						data: {
							identifier: "reqreadmap"
						}
					});
				}
			}
		};
	}
};
