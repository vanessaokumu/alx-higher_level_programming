#!/usr/bin/python3
"""
takes your GitHub credentials (username and password) and
uses the GitHub API to display your id
"""

import sys
import requests

if __name__ == "__main__":
    url = "https://swapi.co/api/people/?search={}".format(sys.argv[1])
    r = requests.get(url).json()
    print("Number of result: {}".format(r['count']))
    for c in r['results']:
        print(c['name'])
