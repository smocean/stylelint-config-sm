
'use strict';

module.exports = {
    rules: {

        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'never',
        'color-no-invalid-hex': true,

        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'never-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-before': 'never',
        'function-comma-space-after': 'always',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-space-inside': 'never',
        'function-whitespace-after': 'always',
        'length-zero-no-unit': true,

        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,

        'string-quotes': 'double',

        'unit-case': 'lower',
        'unit-no-unknown': true,

        'value-keyword-case': 'lower',
        'value-list-comma-newline-after': 'never-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-before': 'never',
        'value-list-comma-space-after': 'always-single-line',

        'shorthand-property-no-redundant-values': true,

        'property-case': 'lower',
        'property-no-unknown': true,

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',

        'declaration-block-no-ignored-properties': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',

        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-before': 'never',
        'block-no-empty': true,
        'block-no-single-line': true,

        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-newline-before': 'never-multi-line',
        'block-opening-brace-space-before': 'always',
        'block-opening-brace-space-after': 'never',

        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'selector-max-empty-lines': 0,
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-newline-before': 'never',
        'selector-list-comma-space-after': 'always',
        'selector-list-comma-space-before': 'never',

        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-no-missing-punctuation': true,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',

        'media-query-list-comma-space-after': 'always',
        'media-query-list-comma-space-before': 'never',
        'at-rule-empty-line-before': ['always', {
            except: ['blockless-group', 'first-nested'],
            ignore: ['after-comment']
        }],
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always',
        'at-rule-no-unknown': true,
        'at-rule-semicolon-newline-after': 'always',

        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',

        'indentation': 4,
        'max-empty-lines': 1,
        'max-nesting-depth': 4,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-eol-whitespace': [true, {
            ignore: ['empty-lines']
        }],
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,
        'no-unknown-animations': true,
        'no-unsupported-browser-features': true
    }
};
