## Sasquatch
A simple and quasi-codeless Node app to aid in WP development using Sass.

### What it Does
Uses the ``node-sass`` and ``nodemon`` NPM packages to provide a means to easily generate a **styles.css** from Sass, to be consumed by WP.

### Assumptions
1. The Sass input file is **themes/styling/master.scss**.
2. The **master.scss** file will *@import* whatever other Sass files are needed.
3. The output will be the CSS that is fed to WP to style your pages & posts.

It is assumed that the generated and minimized CSS will be "pasted" as _Custom CSS_ into WP.
Thus, the default behavior is that the generated CSS is placed on your clipboard.

> This is done with the Mac **pbcopy** command; those on other platforms will have to adapt to use this *Sasquatch* option. The default actions can be changed as needed by editing **package.json** and/or **sasq.sh**.

### sasq.sh

The **sasq.sh** shell script provides the user interface.

``$ sasq.sh`` will read your Sass and update **styles.css**.

``$ sasq.sh -w`` do the same, then watch for changes and continue to update **styles.css**.

#### How I use sasq.sh
As you've gathered, **sasq.sh** runs _relative_ to its own directory.  That is, its **package.json**
