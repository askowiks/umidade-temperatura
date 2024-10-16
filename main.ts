input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.ShowString("Temp", 0, 0)
    I2C_LCD1602.ShowNumber(dht11_dht22.readData(dataType.temperature), 6, 0)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    I2C_LCD1602.clear()
})
input.onButtonPressed(Button.B, function () {
    I2C_LCD1602.ShowString("Umid", 0, 1)
    I2C_LCD1602.ShowNumber(dht11_dht22.readData(dataType.humidity), 6, 1)
    basic.pause(2000)
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.BacklightOn()
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P2,
    true,
    false,
    true
    )
    if (dht11_dht22.readDataSuccessful()) {
        basic.showIcon(IconNames.Yes)
        basic.pause(3000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(3000)
        basic.clearScreen()
    }
})
