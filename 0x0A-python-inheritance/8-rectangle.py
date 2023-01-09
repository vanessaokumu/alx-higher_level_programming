#!/usr/bin/python3
"""This is a module container of the function 8-rectangle.py
"""

BaseGeometry = __import__('7-base_geometry').BaseGeometry


class Rectangle(BaseGeometry):
    """A representation of a rectangle and
    Class that inherits from BaseGeometry
    """
    def __init__(self, width, height):
        """Instance
        Arguments:
            width {int} -- [width of rectangle]
            height {int} -- [height of rectangle]
        """
        super().integer_validator("width", width)
        self.__width = width
        super().integer_validator("height", height)
        self.__height = height
