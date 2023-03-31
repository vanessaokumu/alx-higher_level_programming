#!/usr/bin/python3
"""takes in url and email, sends a post request to the passed url"""

import urllib.request
import urllib.parse
from sys import argv

if __name__ == "__main__":
    post_data = urllib.parse.urlencode({'email': argv[2]}).encode('ascii')
    with urllib.request.urlopen(url=argv[1], data=post_data) as response:
        print(response.read().decode('UTF-8'))
