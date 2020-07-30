# Super JSON Generator

Super JSON Generator is a tool to generate sample data in JSON format for testing purposes. It includes a variety of data types to randomly generate and simple iteration configurations to generate massive amounts of data.

## Installation

```console
$ npm install -g super-json-generator
``` 

## Usage

To use the utility you need to create a simple JSON template and specify the properties and data types you want

```javascript
{
    "id": "uuid",
    "age": "age",
    "phone": "phone",
    "price": "price",
    "card": "credit-card",
    "friends": [
        {"repeat": 5},
        {
            "id": "index",
            "name": "first-name",
            "last-name": "last-name"
        }
    ],
    "check-ins":{
        "id": "id",
        "name": "first-name",
        "opened": "date",
        "users": [
            {"repeat": 15},
            {
                "id": "uuid",
                "index": "index",
                "married": "boolean"
            }
        ]
    }
}
```

and then execute

```console
$ jsong -i origin/template.json -o destination/output.json
```