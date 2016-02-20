var gulp = require('gulp');
var del = require('del');
var removeCode = require('gulp-remove-code');
var replace = require('gulp-replace');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['app/**/*', '!app/**/*.ts', 'index.html', 'css/**/*', '.htaccess' ], { base : './' })
        .pipe(gulp.dest('dist'))
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
    return gulp.src([
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.dev.js'
        ])
        .pipe(gulp.dest('dist/lib'))
});

gulp.task('prod', ['copy:libs', 'copy:assets'], function () {
    gulp.src('dist/index.html')
        .pipe(removeCode({production: true}))
        .pipe(replace('<!-- DIST###/', ''))
        .pipe(replace('/###DIST -->', ''))
        .pipe(replace('href="../css', 'href="http://marek-sonnabend.de/demos/angular-2-slide-show/'))
        .pipe(replace('base href="/"', 'base href="http://marek-sonnabend.de/demos/angular-2-slide-show/"'))
        .pipe(gulp.dest('./dist'));
});


gulp.task('build', ['prod']);
gulp.task('default', ['build']);
