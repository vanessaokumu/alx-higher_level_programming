#!/bin/bash
# sends a JSON POST request to a url passed as the first argument
curl -sL -H "content-type:application/json"  -d @"$2" -X POST "$1"
