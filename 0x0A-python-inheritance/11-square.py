#!/usr/bin/python3

""" Class that inherits from BaseGeometry """

Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """ class Square that inherits from Rectangle """

    def __init__(self, size):
        """Initialising function
            Args:
                width: breadth of a rectangle
                height: lenght of a rectangle
        """
        self.__size = size
        self.integer_validation("size", size)
        super().__init__(size, size)

    def area(self):
        """ Calculator area """
        return super().area()

    def __str__(self):
        """ Print info """
        return "[Square] {:d}/{:d}".format(self.__size, self.__size)
