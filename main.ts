radio.onReceivedNumber(function (receivedNumber) {
    speed = receivedNumber * SpeedMultiplier
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "LED_GREEN") {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.GREEN)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.GREEN)
    } else if (receivedString == "LED_YELLOW") {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.YELLOW)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.YELLOW)
    } else if (receivedString == "LED_RED") {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
    } else if (receivedString == "LED_BLUE") {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
    } else if (receivedString == "F") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, speed)
    } else if (receivedString == "B") {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, speed)
    } else if (receivedString == "L") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, speed/2)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, speed/2)
    } else if (receivedString == "R") {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, speed/2)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, speed/2)
    } else {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
    }
})
let SpeedMultiplier = 20
let speed = SpeedMultiplier
radio.setGroup(1)
basic.showNumber(1)
