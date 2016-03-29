System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: "./www/ts"
  },
  //packages defines our app package
  packages: {
    app: {
      main: './www/ts/app.ts',
      defaultExtension: 'ts'
    }
  }
});
