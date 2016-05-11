[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/bardius/deckOfCards.svg?branch=master)](https://travis-ci.org/bardius/deckOfCards)
[![Dependency Status](https://www.versioneye.com/user/projects/573331eaa0ca350034be76b8/badge.png)](https://www.versioneye.com/user/projects/573331eaa0ca350034be76b8)
[![Dependency Status](https://www.versioneye.com/user/projects/573331eca0ca35004cf77c41/badge.png)](https://www.versioneye.com/user/projects/573331eca0ca35004cf77c41)

Deck of Cards AngularJs Application
============================================================================

This is an AngularJS (v1.5.5) app project that emulates a deck of card dealing game with capability to be a fully 
responsive web application or website.

Bower and Grunt with custom build tasks are included for better workflow on development, testing and documentation 
generation.

Zurb Foundation 5 front end framework is already included and provides out of the box responsive functionality for the 
most common features. You can find the documentation for Zurb Foundation 5 here http://foundation.zurb.com/docs

Pages are generated with grunt assemble npm module from handlebars templates while Zurb Foundation 5 is integrated.
Good practices are being used for htaccess, favicons, html meta, og meta, twitter card meta, google analytics etc.

Editorconfig file and jshint is in place to ensure coding and formatting standards are in place, along with a gitignore 
file to filter the tracked files at will.

Travis CI service is used to test the build (running the grunt bundle task in the Travis Servers) as changes are 
getting committed.

Requirements

* [NodeJs]  (http://nodejs.org/) (+v4.4)
* [Ruby]    (http://www.rubyinstaller.org/)
* [Sass]    (http://sass-lang.com/install)
* [Grunt]   (http://gruntjs.com/)
* [Bower]   (https://github.com/bower/bower)


Quick Start
------------------------------------------------------

To setup and spin up a local server, use follow these steps 
(assuming no proxy is required, if one is in place add the details to the project .npmrc file)

    1. Checkout of the Git repo
    3. Run [sudo] npm install -g grunt
    4. Run [sudo] npm install -g grunt-cli
    5. Run [sudo] npm install -g bower
    6. Run npm install
    7. Run grunt serve
    8. Use the commands grunt [watch, dev, bundle, generate, serve, document, test:singlerun]


Dependencies
---------------------------------------------

    1. Install NodeJs +v4.4 and add it to you system PATH (http://nodejs.org/download/)
    2. Install Ruby or run gem update --system to ensure latest version (https://www.ruby-lang.org/en/downloads/)
    3. Install Sass by running gem install sass (http://sass-lang.com/install)


How To Use
---------------------------------------------

You can run the Grunt tasks from the root folder and all the compiled/generated assets will be placed to the /public_html 
folder.

The AngularJs application source files are found under /js/src and grunt tasks take care of the conversion of templates
from HTML to JS, angular annotations for dependency injections, concatenation, unit testing and end to end testing.

The HTML files are generated with Grunt tasks based on Assemble generator with the Handlebars templates found in 
/static-src folder. The templates are split into layouts, partials and pages. Partials can be included in a layout, 
page or another partial. Pages can have variables whose values are defined in the top part of the file (eg. page title).

In the /sass folder you can find the existing styles and place your own. Mind the existing Foundation variables and 
helper classes, no need to reinvent the wheel. For the documentation of this front end framework please check 
Zurb Foundation Docs.

All the custom non AngularJS application JavaScript (eg. Zurb Foundation declarations) are placed inside the /js/script.js 
file following structural pattern and self declaring variable/method names. Alternatively, you can write your own 
jQuery plugins with a module pattern that should then be placed in the proper folder and included in the Gruntfile to be 
compiled with the rest. Mind the existing Foundation scripts, no need to reinvent the wheel.


Grunt tasks
---------------------------------------------

Grunt tasks have been created to support the automated builds while developing and when releasing to environments.
The existing tasks can be found under the /grunt folder and are grouped in shorthand tasks withing Gulpfile.js

Essentially by running grunt serve all the assets are generated, a local server is spin up and tests are run, while 
watch rebuilds any required assets, runs test and uses live reload as necessary.
 
To generate the fully optimized assets that should be deployed for a release candidate, grunt bundle executed the 
required tasks.

    All available tasks:

    * grunt : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit
    * grunt watch : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, karma
    * grunt dev : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit
    * grunt jsdev : html2js, jshint, uglify, ngAnnotate
    * grunt bundle : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, combine_mq, csssplit, csso
    * grunt serve  : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, assemble, connect, karma, watch
    * grunt generate  : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, assemble
    * grunt document  : run ngdocs
    * grunt test:singlerun  : run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, csssplit, assemble, karma, connect, protractor
    * grunt travis :  run html2js, jshint, uglify, ngAnnotate, sass, autoprefixer, combine_mq, csssplit, csso


Testing, coverage & reports
---------------------------------------------

Karma is in place as a test runner with jasmine for unit tests and protractor for end to end AngularJs tests. 
Tests can be run with the corresponding grunt tasks. Upon the tests completion reports are getting generated for coverage
and end to end testing scenarios with screen shots and are placed within /test/test-reports.

Chrome is required for the protractor end to end tests. In case that the browser is not existing in the system or is not
able for selenium usage via the webdriver please edit the test/protractor-conf.js file an use the browser of prefference
at line 59.

    Related grunt tasks:
    
    * grunt karma:unit
    * grunt karma:continuous
    * grunt protractor:e2e
    * grunt protractor:continuous
    * grunt test:singlerun (will run once all the tests and generate screen shots & reports)


Documentation
---------------------------------------------

The AngularJs application documentation gan be generated in the docs folder with the corresponding grunt task and the 
help of NgDoc (https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation) by adding proper annotations 
to the code.

    Related grunt tasks:
    
    * grunt document


Deployment scripts
---------------------------------------------

Sample deployment shell scripts have been included in the /deployment folder. These scripts could be run as a deploy task 
within a CI solution like Jenkins or Teamcity to support continuous delivery/integration workflow.

This scripts will use rsync to:

* copy the files for the Jenkins job workspace to the provided target directory,
* excluding the files listed in exclude.txt (regular expressions list)
* setting proper file owner and permissions

This scripts accepts parameters to:

* 1 - Location of the build checkout - double quoted, no trailing slash
* 2 - Relative path to be deployed - no trailing slash (in this case is the public_html folder)
* 3 - Target server location - full server path
* 4 - Target server sudo user


Sample Virtual Host Settings
---------------------------------------------

Here is a sample setup for your virtual host configuration

	    <VirtualHost *:80>
               ServerAdmin support@domain.com

                ServerName domain.com
                ServerAlias domain.co.uk

                DocumentRoot /var/www/domain.com/httpdocs

                <Directory /var/www/domain.com/httpdocs>
                        Options -Indexes FollowSymLinks MultiViews
                        AllowOverride All
                        Order allow,deny
                        allow from all
                </Directory>

                ErrorLog ${APACHE_LOG_DIR}/domain.com.error.log

                # Possible values include: debug, info, notice, warn, error, crit,
                # alert, emerg.
                LogLevel warn

                CustomLog ${APACHE_LOG_DIR}/domain.com.access.log combined
        </VirtualHost>
        

Useful Links and Documentation
----------------------------------------------
NodeJs, Node Packaged Modules, Ruby, compass, sass, foundation gems and GIT and bower dependency manager

* http://git-scm.com/downloads				(GIT)
* http://nodejs.org/					    (NodeJs)
* https://npmjs.org/					    (Node Packaged Modules)
* http://www.rubyinstaller.org/				(Ruby)
* https://github.com/bower/bower			(Bower)
* http://sass-lang.com/install				(Sass)
* http://compass-style.org/install/			(Compass)
* http://gruntjs.com/			            (Grunt)
* http://foundation.zurb.com/docs/sass.html	(Foundation 5 - Sass based)
* https://angularjs.org/                    (AngularJS)
