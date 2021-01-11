# JSON Generator

JSON Generator is a tool to generate sample data in JSON format for testing purposes. It includes a variety of data types to randomly generate and simple iteration configurations to generate massive amounts of data.

## Installation

```console
$ npm install -g mrr-json-generator
``` 

## Usage

To use the utility you need to create a simple JSON template and specify the properties and data types you want

```javascript
{
    "id": "uuid",
    "id2": "id",
    "id3": "id",
    "title": "title",
    "text": "paragraph",
    "todo": "text",
    "name": "first-name",
    "city": "city",
    "country": "country",
    "last-name": "last-name",
    "age": "age",
    "phone": "phone",
    "grade": "decimal",
    "price": "price",
    "card": "credit-card",
    "aniversary": "date",
    "color": "choice red blue yellow",
    "friends": [
        {"repeat": 5},
        {
            "id": "index",
            "name": "first-name",
            "last-name": "last-name",
            "company": "company",
            "email": "email"
        }
    ],
    "check-ins":{
        "id": "id",
        "name": "full-name",
        "opened": "date",
        "users": [
            {"repeat": 5},
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
$ json -i origin/template.json -o destination/output.json
```