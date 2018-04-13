var gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  pug = require("gulp-pug"),
  plumber = require("gulp-plumber"),
  runSequence = require("run-sequence"),
  autoprefixer = require("gulp-autoprefixer");

/* general tasks */
gulp.task("dev:server", function() {
  browserSync.init({
    server: "./build/"
  });

  gulp.watch("build/**/*.html").on("change", browserSync.reload);
  gulp.watch("build/**/*.css").on("change", browserSync.reload);
  gulp.watch("build/**/*.js").on("change", browserSync.reload);

  gulp.watch("src/assets/**/*.*", ["dev:build-assets"]);
});

// gulp.task("dist:server", function() {
//   browserSync.init({
//     server: "./dist/"
//   });

//   gulp.watch("dist/**/*.html").on("change", browserSync.reload);
//   gulp.watch("dist/**/*.css").on("change", browserSync.reload);
//   gulp.watch("dist/**/*.js").on("change", browserSync.reload);

//   gulp.watch("src/assets/**/*.*", ["dist:build-assets"]);
// });

gulp.task("dev:build-assets", function() {
  return gulp.src("src/assets/**/*.*").pipe(gulp.dest("build/assets/"));
});

/* tasks for pages */
gulp.task("dev:build-page-1-pug", function() {
  return gulp
    .src("src/page-1/page-1.pug")
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("build/page-1/"))
    .pipe(browserSync.stream());
});
gulp.task("dev:build-page-1-scss", function() {
  return gulp
    .src("src/page-1/page-1.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("build/page-1/"))
    .pipe(browserSync.stream());
});

gulp.task("watch:page-1", function() {
  gulp.watch("src/page-1/components/**/*.pug", ["dev:build-page-1-pug"]);
  gulp.watch("src/page-1/components/**/*.scss", ["dev:build-page-1-scss"]);
  gulp.watch("src/page-1/page-1.pug", ["dev:build-page-1-pug"]);
  gulp.watch("src/page-1/page-1.scss", ["dev:build-page-1-scss"]);
  gulp.watch("src/shared/**/*.pug", ["dev:build-page-1-pug"]);
  gulp.watch("src/shared/**/*.scss", ["dev:build-page-1-scss"]);
  
  // переместить потом отдельно
  gulp.watch("src/shared/layout/**/*.pug", ["dev:build-page-1-pug"]);
  gulp.watch("src/shared/layout/**/*.scss", ["dev:build-page-1-scss"]);
});

gulp.task("dev:build-page-2-pug", function() {
  return gulp
    .src("src/page-2/page-2.pug")
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("build/page-2/"))
    .pipe(browserSync.stream());
});
gulp.task("dev:build-page-2-scss", function() {
  return gulp
    .src("src/page-2/page-2.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("build/page-2/"))
    .pipe(browserSync.stream());
});

gulp.task("watch:page-2", function() {
  gulp.watch("src/page-2/components/**/*.pug", ["dev:build-page-2-pug"]);
  gulp.watch("src/page-2/components/**/*.scss", ["dev:build-page-2-scss"]);
  gulp.watch("src/page-2/page-2.pug", ["dev:build-page-2-pug"]);
  gulp.watch("src/page-2/page-2.scss", ["dev:build-page-2-scss"]);
  gulp.watch("src/shared/**/*.pug", ["dev:build-page-2-pug"]);
  gulp.watch("src/shared/**/*.scss", ["dev:build-page-2-scss"]);
});

gulp.task("dev:build-page-3-pug", function() {
  return gulp
    .src("src/page-3/page-3.pug")
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("build/page-3/"))
    .pipe(browserSync.stream());
});
gulp.task("dev:build-page-3-scss", function() {
  return gulp
    .src("src/page-3/page-3.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("build/page-3/"))
    .pipe(browserSync.stream());
});

gulp.task("watch:page-3", function() {
  gulp.watch("src/page-3/components/**/*.pug", ["dev:build-page-3-pug"]);
  gulp.watch("src/page-3/components/**/*.scss", ["dev:build-page-3-scss"]);
  gulp.watch("src/page-3/page-3.pug", ["dev:build-page-3-pug"]);
  gulp.watch("src/page-3/page-3.scss", ["dev:build-page-3-scss"]);
  gulp.watch("src/shared/**/*.pug", ["dev:build-page-3-pug"]);
  gulp.watch("src/shared/**/*.scss", ["dev:build-page-3-scss"]);
});

gulp.task("dev:build-page-4-pug", function() {
  return gulp
    .src("src/page-4/page-4.pug")
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("build/page-4/"))
    .pipe(browserSync.stream());
});
gulp.task("dev:build-page-4-scss", function() {
  return gulp
    .src("src/page-4/page-4.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("build/page-4/"))
    .pipe(browserSync.stream());
});

gulp.task("watch:page-4", function() {
  gulp.watch("src/page-4/components/**/*.pug", ["dev:build-page-4-pug"]);
  gulp.watch("src/page-4/components/**/*.scss", ["dev:build-page-4-scss"]);
  gulp.watch("src/page-4/page-4.pug", ["dev:build-page-4-pug"]);
  gulp.watch("src/page-4/page-4.scss", ["dev:build-page-4-scss"]);
  gulp.watch("src/shared/**/*.pug", ["dev:build-page-4-pug"]);
  gulp.watch("src/shared/**/*.scss", ["dev:build-page-4-scss"]);
});

/* watch on all pages */
gulp.task("watch", ["watch:page-1", "watch:page-2", "watch:page-3", "watch:page-4"]);

/* task for build project */
gulp.task("dev:build-project", [
  "dev:build-assets",
  "dev:build-page-1-pug",
  "dev:build-page-1-scss",
  "dev:build-page-2-pug",
  "dev:build-page-2-scss",
  "dev:build-page-3-pug",
  "dev:build-page-3-scss",
  "dev:build-page-4-pug",
  "dev:build-page-4-scss"
]);

// gulp.task("dist:build-css", function() {
//   return gulp
//     .src("build/**/*.css")
//     .pipe(
//       autoprefixer({
//         browsers: ["last 5 versions"]
//       })
//     )
//     .pipe(gulp.dest("dist/"));
// });

// gulp.task("dist:build-html", function() {
//   return gulp.src("build/**/*.html").pipe(gulp.dest("dist/"));
// });

// gulp.task("dist:build-js", function() {
//   return gulp.src("build/**/*.js").pipe(gulp.dest("dist/"));
// });

// gulp.task("dist:build-assets", function() {
//   return gulp.src("build/assets/*.*").pipe(gulp.dest("dist/assets/"));
// });

// gulp.task("dist:build-project", [
//   "dist:build-html",
//   "dist:build-css",
//   "dist:build-js",
//   "dist:build-assets"
// ]);

gulp.task("default", ["dev:build-project", "watch", "dev:server"]);
