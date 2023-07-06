"use strict"

let count = (obj) => Object.values(obj).reduce((sum) => ++sum, 0);