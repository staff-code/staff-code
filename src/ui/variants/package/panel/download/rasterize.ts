import {Html, Link} from "@sagittal/general"

const OFFSET_FOR_CLEANER_STAFF_LINES_AT_SIZE_1 = 0.5

const convertSvgToPng = (svgString: Html, svgDataUrl: Link): Promise<Link> => {
    return new Promise((resolve: (pngDataUrl: Link) => void): void => {
        try {
            let match = svgString.match(/height=\"(\d+)/m)
            const height = match && match[1] ? parseInt(match[1], 10) : 200
            match = svgString.match(/width=\"(\d+)/m)
            const width = match && match[1] ? parseInt(match[1], 10) : 200

            const canvas = document.createElement("canvas")
            canvas.width = width
            canvas.height = height
            const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

            const img = new Image
            img.onload = (): void => {
                ctx.drawImage(img, 0, OFFSET_FOR_CLEANER_STAFF_LINES_AT_SIZE_1)

                URL.revokeObjectURL(svgDataUrl)

                const pngDataUrl = canvas.toDataURL() as Link
                resolve(pngDataUrl)
            }
            img.src = svgDataUrl
        } catch {
        }
    })
}

export {
    convertSvgToPng,
}
