module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //清除目录
    clean: {
      all: ['dist/**', 'dist/*.*'],
    },
    //语法检查
    jshint: {
      foo: {
        src: ["js/index.js"]
      }
    },
    //复制文件
    copy: {
      src: {
        files: [
          {expand: true, cwd: 'src', src: ['*.html'], dest: 'dist/html'}
        ]
      }
    },
    //压缩js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> version: <%=pkg.version %>*/\n'
      },
      //build: {
      //  src: 'js/*.js',
      //  dest: 'build/'
      //}
      /*my_target: {
        files: [
          {
            expand: true,
            //相对路径
            cwd: 'js/',
            src: '*.js',
            dest: 'dest/js/',
            rename: function (dest, src) {  
              var folder = src.substring(0, src.lastIndexOf('/'));  
              var filename = src.substring(src.lastIndexOf('/'), src.length);  
              //  var filename=src;  
              filename = filename.substring(0, filename.lastIndexOf('.'));  
              var fileresult=dest + folder + filename + '.min.js';  
              grunt.log.writeln("现处理文件："+src+"  处理后文件："+fileresult);  

              return fileresult;  
              //return  filename + '.min.js';  
            } 
          }
        ]
      }*/
      dist: {
        files: [
          {src:"js/index.js",dest:"dist/js/index.js"}
        ]
      }
    },
    //压缩html
    htmlmin: {
      dist: {
        options: {
          banner:  '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> version: <%=pkg.version %>*/\n',                           
          removeComments: true,
          collapseWhitespace: true,
          minifyJS : true,
          minifyCSS : true
        },
        files: {
          "dist/index.html":"index.html"
        }
      }
    },
    //压缩CSS
    cssmin: {
      dist: {
        options: {
          report: "gzip"
        },
        /*files: [{
          expand: true,
          cwd: "css",
          src: "*.css",
          dest: "dist/css"
        }]*/
        files: {
          "dist/css/index.css":["css/*.css"]
        }
      }
    },
    //压缩图片
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 5,
          pngquant: true
        },
        files: [
          {expand: true, cwd: './', src: ['image/*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dist'}
        ]
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['clean','jshint','uglify','htmlmin','cssmin','imagemin']);
  grunt.registerTask('cls', ['clean']);
  grunt.registerTask('publish', ['clean','jshint','uglify','htmlmin','cssmin','imagemin']);
};