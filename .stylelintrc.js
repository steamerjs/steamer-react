module.exports = {
	"extends": "stylelint-config-standard",
	"rules": {
		"indentation": null,
		"comment-empty-line-before":null,
	    "declaration-empty-line-before": [ "always", {
	    	except: [
	    		"first-nested",
	    	],
	      	ignore: [
	      		"after-declaration",
	        	"after-comment",
	        	"inside-single-line-block",
	      	],
	    }],
	    "rule-nested-empty-line-before": null,
	    "no-missing-end-of-source-newline": null,
	    "no-eol-whitespace": null,
	    "no-empty-source": null,
	    "media-feature-name-no-unknown": null,
	    "max-empty-lines": null,
	    "rule-non-nested-empty-line-before": null,
	    "length-zero-no-unit": null,
	    "function-whitespace-after": null
	}
}