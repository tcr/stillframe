# works on t2

```
npm install
```

And `node test.js` should work on OSX.

It will work on T2 if you run this:

```
cd node_modules/camera-usb
rm -rf build; 
tar xvf ../../mips-camera-usb.tar.gz
cd ../..

cd node_modules/jpeg
rm -rf build; 
tar xvf ../../mips-jpeg.tar.gz
cd ../..
```

And `t2 run index.js` should work on prime with a camera.
