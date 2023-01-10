#!/usr/bin/python3
""" Contains the "load_from_json_file" function"""


import json


def load_from_json_file(filename):
    """creates and object from a "JSON file" """
    with open(filename, 'r', encoding='utf-8') as file:
        create_obj = json.load(file)
        return create_obj