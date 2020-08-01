export abstract class GetAllEmployees {

    public static allEmployeeSchema =
    {
        "definitions": {},
        "$schema": "http://json-schema.org/draft-07/schema#", 
        "$id": "https://example.com/object1596296747.json", 
        "title": "Root", 
        "type": "object",
        "required": [
            "status",
            "data",
            "message"
        ],
        "properties": {
            "status": {
                "$id": "#root/status", 
                "title": "Status", 
                "type": "string",
                "default": "",
                "examples": [
                    "success"
                ],
                "pattern": "^.*$"
            },
            "data": {
                "$id": "#root/data", 
                "title": "Data", 
                "type": "array",
                "default": [],
                "items":{
                    "$id": "#root/data/items", 
                    "title": "Items", 
                    "type": "object",
                    "required": [
                        "id",
                        "employee_name",
                        "employee_salary",
                        "employee_age",
                        "profile_image"
                    ],
                    "properties": {
                        "id": {
                            "$id": "#root/data/items/id", 
                            "title": "Id", 
                            "type": "integer",
                            "examples": [
                                1
                            ],
                            "default": 0
                        },
                        "employee_name": {
                            "$id": "#root/data/items/employee_name", 
                            "title": "Employee_name", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                "Tiger Nixon"
                            ],
                            "pattern": "^.*$"
                        },
                        "employee_salary": {
                            "$id": "#root/data/items/employee_salary", 
                            "title": "Employee_salary", 
                            "type": "integer",
                            "examples": [
                                320800
                            ],
                            "default": 0
                        },
                        "employee_age": {
                            "$id": "#root/data/items/employee_age", 
                            "title": "Employee_age", 
                            "type": "integer",
                            "examples": [
                                61
                            ],
                            "default": 0
                        },
                        "profile_image": {
                            "$id": "#root/data/items/profile_image", 
                            "title": "Profile_image", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                ""
                            ],
                            "pattern": "^.*$"
                        }
                    }
                }
    
            },
            "message": {
                "$id": "#root/message", 
                "title": "Message", 
                "type": "string",
                "default": "",
                "examples": [
                    "Successfully! All records has been fetched."
                ],
                "pattern": "^.*$"
            }
        }
    };    
 
    public static getSchema() {
        return this.allEmployeeSchema;
      }

}