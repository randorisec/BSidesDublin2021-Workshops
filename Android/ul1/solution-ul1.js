Java.perform(function () {
  console.log("Starting uncrackable1...");

  // modify a(), b() and c() functions in order to return false
  var root_class = Java.use("sg.vantagepoint.a.c");
  root_class.a.implementation = function() {
    console.log("a() function was called!");
    return false;
  };

  root_class.b.implementation = function() {
    console.log("b() function was called!");
    return false;
  };

  root_class.c.implementation = function() {
    console.log("c() function was called!");
    return false;
  };

  var aaClass = Java.use("sg.vantagepoint.a.a");
  // We modify the code in order to execute the method
  aaClass.a.implementation = function(arg1, arg2) {
      var retval = this.a(arg1, arg2);
      // Then , we just translate the byte array in string
      var password = String.fromCharCode.apply(null, retval);

      console.log("[*] Decrypted: " + password);
      return retval;
  };
});
