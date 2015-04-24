# angular-iso-country-filter

An AngularJS filter to transform ISO abbreviations of countries to their full names.

## Install

bower install angular-iso-country-filter --save

## Usage Example

Inject in the dependencies:

```javascript
angular.module('app', [
        'isoCountryFilter'
    ])
```

And use the filter

* In a template

```html
{{ 'US' | isoCountryFromAbbreviation }}
```

* Or with the $filter service:

```javascript
$filter('isoCountryFromAbbreviation')('PT')
```
## Dependencies

This plugin uses AngularJS version 1.x.

## License

The code in this repository can be used under the MIT License.
