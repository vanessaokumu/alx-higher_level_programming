#!/usr/bin/python3
"""Module for class Student"""


class Student:
    """Class for json"""
    def __init__(self, first_name, last_name, age):
        """Constructor"""
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """retrieves dictionary with filter."""
        if type(attrs) is list and all([type(x) == str for x in attrs]):
            return {k: v for k, v in self.__dict__.(items() if k in attrs}
        else:
            return self.__dict__.copy()

    def reload_from_json(self, json):
        """loads attributes from json."""
        for key, value in json.items():
            self.__dict__[key] = value
