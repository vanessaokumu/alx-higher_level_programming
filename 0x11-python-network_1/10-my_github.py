#!/usr/bin/python3
"""
takes your GitHub credentials (username and password) and
uses the GitHub API to display your id
"""

from sys import argv
import requests


if __name__ == "__main__":
    arg = ""
    if len(argv) == 2:
        arg = argv[1]
    try:
        r = requests.get('https://swapi.co/api/people/?search={}'.format(arg))
        j = r.json()
        if j:
            print('Number of results:', j['count'])
            for i in j.get('results'):
                print(i.get('name'))
        else:
            print('No result')
    except ValueError:
        print('Not a valid JSON')
