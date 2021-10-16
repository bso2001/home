#!/bin/sh

watch=0

if [ "$1" = '-w' ]
then
	watch=1
fi

if [ -d ./sasquatch ]
then
	cd ./sasquatch
fi

npm run generate

if [ $watch = '1' ]
then
	npm run watch
fi
