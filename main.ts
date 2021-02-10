radio.onReceivedString(function (receivedString) {
    if (receivedString == "Open") {
    	
    } else if (receivedString == "Close") {
    	
    } else if (receivedString == "LEDL") {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
    } else if (receivedString == "LEDR") {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
    } else if (receivedString == "F") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else if (receivedString == "B") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
    } else if (receivedString == "L") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 20)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
    } else if (receivedString == "R") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 20)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
    }
})
radio.setGroup(1)
