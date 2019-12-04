"use strict";
const fileFilter = function(dir, extName) {
  const fs = require("fs");
  const path = require("path");

  fs.readdir(dir, function(err, list) {
    if (err) {
      throw err;
    }

    
    list.forEach((file, index) => {
      if (path.extname(file) === "." + extName) {
        console.log(file);
      }
    });
  });
};   



fileFilter("/Users/kqs/Desktop/USTSV/VScode/SampleCode_8", "txt");
