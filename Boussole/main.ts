let cap = 0
basic.forever(function () {
    cap = 360 - input.compassHeading()
    if (cap > 337 || cap < 23) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else {
        if (cap > 22 && cap < 67) {
            images.arrowImage(ArrowNames.NorthEast).showImage(0)
        } else {
            if (cap > 66 && cap < 111) {
                images.arrowImage(ArrowNames.East).showImage(0)
            } else {
                if (cap > 110 && cap < 155) {
                    images.arrowImage(ArrowNames.SouthEast).showImage(0)
                } else {
                    if (cap > 154 && cap < 199) {
                        images.arrowImage(ArrowNames.South).showImage(0)
                    } else {
                        if (cap > 198 && cap < 243) {
                            images.arrowImage(ArrowNames.SouthWest).showImage(0)
                        } else {
                            if (cap > 242 && cap < 287) {
                                images.arrowImage(ArrowNames.West).showImage(0)
                            } else {
                                images.arrowImage(ArrowNames.NorthWest).showImage(0)
                            }
                        }
                    }
                }
            }
        }
    }
})
