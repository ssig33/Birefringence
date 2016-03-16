require 'fileutils'

FileUtils.cp './template/package.json', 'workdir'

ary = open("template/app.js").read.split("\n")

ary[2] = "var url = '#{ARGV[0]}';"

open('workdir/app.js','w'){|x| x.puts ary.join("\n")}

FileUtils.cd "./workdir"

system "npm i"
system "./node_modules/.bin/electron-packager . #{ARGV[1]} --platform=win32 --arch=x64 --version=0.37.2 --overwrite"
system "./node_modules/.bin/electron-packager . #{ARGV[1]} --platform=darwin --arch=x64 --version=0.37.2 --overwrite"
system "./node_modules/.bin/electron-packager . #{ARGV[1]} --platform=linux --arch=x64 --version=0.37.2 --overwrite"
system "./node_modules/.bin/electron-packager . #{ARGV[1]} --platform=win32 --arch=ia32 --version=0.37.2 --overwrite"
