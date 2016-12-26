//Step 1. 取消下面的注释开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');

//通过pack设置干预自动合并结果，将公用资源合并成一个文件，更加利于页面间的共用

//Step 2. 取消下面的注释开启pack人工干预
fis.config.set('pack', {
    'pkg/lib.css': [
        'demo.css',
        'style.css'
        
    ]
});

//Step 3. 取消下面的注释可以开启simple对零散资源的自动合并
//fis.config.set('settings.postpackager.simple.autoCombine', true);


//Step 4. 取消下面的注释开启图片合并功能
//启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
});

// 对 CSS 进行图片合并
fis.match('*.{css,less}', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});



// default settings. fis3 release

// Global start
fis.match("*.{jpg,gif,png,js,css,less}",{
    release:"/static/$0"
});

fis.match('*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});


fis.match("*.less",{
    rExt:".css",
    parser:fis.plugin("less-2.x",{}),
    useHash:true
});




// Global end

// default media is `dev`
fis.media('dev')
  .match('*', {
    useHash: false,
    optimizer: null
  });

// extends GLOBAL config
fis.media('production');
