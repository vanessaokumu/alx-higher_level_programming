#!/usr/bin/python3
"""
takes in a URL, sends a request to the URL, displays the body of the response
"""

from sys import argv
import requests


if __name__ == "__main__":
    r = requests.get(argv[1])
    if r.status_code < 400:
        print(r.text)
    else:
        print('Error code:', r.status_code)
