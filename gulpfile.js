/*gulp file*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
//var vfs = require('vinyl-fs');


gulp.task('templates', function() {
  
  var YOUR_LOCALS = {};

  gulp.src('./templates/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty:true
    }))
    .pipe(gulp.dest('./views/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        //proxy:"localhost:3000",
        server: {
            baseDir: "./"
        },
        browser: "chrome",
        startPath: "/views"
    });
});


gulp.task('html', function () {
    return gulp.src('./views/*.html');
});

gulp.task('js', function () {
    return gulp.src('./*.js');
});

gulp.task('scss', function () {
    return gulp.src('./styles/*.scss');
});

gulp.task('jade', function () {
    return gulp.src('./templates/*.jade');
});


gulp.task('serve', ['html','js','scss'], function () {
    // add browserSync.reload to all js and html files
    gulp.watch(["templates/*.jade"], ['templates']);
    gulp.watch(["styles/scss/*.scss"], ['styles']).on('change', browserSync.reload);
    gulp.watch(["views/*.html", "js/*.js"]).on('change', browserSync.reload);
});


// Compile sass into CSS & auto-inject into browsers
/*gulp.task('sass', function() {
    return gulp.src("./styles/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./styles/css"))
        .pipe(browserSync.stream());
});*/




/***
TEKIÐ AF NETINU
//  https://gist.github.com/aaronwaldon/8657432
***/

var notifyInfo = {
    title: 'Gulp'
    //icon: path.join(__dirname, 'gulp.png')
};

//error notification settings for plumber
var plumberErrorHandler = { errorHandler: notify.onError({
        title: notifyInfo.title,
        icon: notifyInfo.icon,
        message: "Error: <%= error.message %>"
    })
};

//styles
gulp.task('styles', function() {
    return gulp.src(['styles/**/*.scss'])
        .pipe(plumber(plumberErrorHandler))
        .pipe(compass({
            css: 'styles/css',
            sass: 'styles/scss'
            //image: 'html/images'
        }))
        //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('styles/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('styles/css'))
        .pipe(browserSync.stream());
});

/*
gulp.task('js-hint', function(){

});*/

gulp.task('default', ['browser-sync','serve', 'templates', 'styles'/*, 'sass'*/]);




//////////////////////
//////////////////////
//////////////////////
/*
var http = require('http');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var lrserver = lr();
var minifyCSS = require('gulp-minify-css');
var embedlr = require('gulp-embedlr');
var ecstatic = require('ecstatic');
var imagemin = require('gulp-imagemin');*/
/*
var livereloadport = 35729,
    serverport = 5001;*/
/*
gulp.task('scripts', function() {
    return gulp.src(['app/src/\*\*\/\*.js'])
        .pipe(browserify())
        .pipe(concat('dest.js'))
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(lrserver));
});

gulp.task('styles', function() {
    return gulp.src(['app/css/style.less'])
        .pipe(less())
        .on('error', console.log)
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(lrserver));
});

gulp.task('serve', function() {
  //Set up your static fileserver, which serves files in the build dir
  http.createServer(ecstatic({ root: __dirname + '/dist' })).listen(serverport);

  //Set up your livereload server
  lrserver.listen(livereloadport);
});


gulp.task('html', function() {
    return gulp.src("app/*.html")
        .pipe(embedlr())
        .pipe(gulp.dest('dist/'))
        .pipe(refresh(lrserver));
})

gulp.task('assets', function() {
    return gulp.src("app/assets/**")
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('dist/assets/'))
        .pipe(refresh(lrserver));
});

// Requires gulp >=v3.5.0
gulp.task('watch', function () {
    gulp.watch('app/src/\**', ['scripts']);
    gulp.watch('app/css/\**', ['styles']);
    gulp.watch('app/\*\*\/\*.html', ['html']);
    gulp.watch('app/assets/\*\*', ['assets']);
});

gulp.task('default', ['scripts', 'styles', 'html', 'assets', 'serve', 'watch']);*/


/*I'm not against what you are doing, 
because in a way i'm doing the same thing 
with my classmates. */