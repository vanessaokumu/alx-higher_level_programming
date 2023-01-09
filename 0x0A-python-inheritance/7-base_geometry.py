#!/usr/bn/python3
"""This is a module container of the function 7-base_geometry.py
"""

BaseGeometry = __import__('7-base_geometry').BaseGeometry


class Rectangle(BaseGeometry):
    """A representation of a rectangle and
    Class that inherits from BaseGeometry
    """
    def __init__(self, width, height):
        """Initialising function
            Args:
                width: variable to be initialised
                height: variable to be initialised
        """
        self.integer_validator("width", width)
        self.__width = width
        self.integer_validator("height", height)
        self.__height = height
