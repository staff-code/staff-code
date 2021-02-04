import {Html, Link} from "@sagittal/general"

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
                ctx.drawImage(img, 0, 0)

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
