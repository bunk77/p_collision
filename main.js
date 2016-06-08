var AM = new AssetManager();

AM.queueDownload("./img/RobotUnicorn.png");
AM.queueDownload("./img/dead_robot.png");
AM.queueDownload("./img/dead_robot_flip.png");
AM.queueDownload("./img/mushroomdude.png");
AM.queueDownload("./img/gundam.png");
AM.queueDownload("./img/background.jpg");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    //gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background.jpg")));

    //blue guy
    gameEngine.addEntity(new MushroomDude(gameEngine, AM.getAsset("./img/dead_robot_flip.png")));

    //silver guy
    gameEngine.addEntity(new Cheetah(gameEngine, AM.getAsset("./img/gundam.png")));

    //blue guy, walk backward
    //gameEngine.addEntity(new Guy(gameEngine, AM.getAsset("./img/dead_robot.png")));
    
    //megaman
    //gameEngine.addEntity();


    console.log("All Done!");
});












































