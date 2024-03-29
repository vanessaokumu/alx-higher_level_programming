#!/usr/bin/python3
"""takes in a URL, sends a request to the URL, displays the variable's value"""

import sys
import requests

if __name__ == "__main__":
    url = sys.argv[1]
    r = requests.get(url)
    print(r.headers.get('x-request-id'))
