# Bundle Task

This example shows how to configure bundling and minification Grunt tasks together, as discussed in chapter 2 of the book. This example is a continuation of [example 02](https://github.com/bevacqua/buildfirst/ch02/02_bundle_task "Bundle Task Example").

In the example, we'll be bundling together all of the `*.js` files in `public/js`, and placing them in a bundled file at `build/js/bundle.js`. Then, we'll minify that file into `all.min.js`.

First, we want to concatenate our scripts. This way, we only need to minify them once, rather than each file individually.

```bash
grunt concat:js
```

Once the scripts are bundled together in `build/js/bundle.js`, we can run the next command, minifying the script.

```bash
grunt uglify:bundle
```

We could also streamline this using just one command in Grunt.

```bash
grunt concat:js uglify:bundle
```

An even better way, is to use an alias, like so:

```bash
grunt assets
```

This alias was declared on the Gruntfile to help us perform this common operation in one shot.