#!/usr/bin/python3
"""The container for class_to_json" function"""


def class_to_json(obj):
    """returns the dictionary description with simple data structure
    (string, dictionary, integer, list and boolean)
    for JSON serialisation of an object"""
    return obj.__dict__
