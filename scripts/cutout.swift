// Usage: swiftc -O scripts/cutout.swift -o /tmp/cutout && /tmp/cutout <input photo> <output.png>
// Removes the background (macOS Vision) and crops to chest level around the face, 4:5 portrait.
import Foundation
import Vision
import CoreImage
import CoreGraphics

let args = CommandLine.arguments
guard args.count == 3 else { print("usage: cutout <in> <out.png>"); exit(1) }
guard let ci = CIImage(contentsOf: URL(fileURLWithPath: args[1]), options: [.applyOrientationProperty: true]) else { print("load fail"); exit(1) }
let handler = VNImageRequestHandler(ciImage: ci)
let fg = VNGenerateForegroundInstanceMaskRequest()
let face = VNDetectFaceRectanglesRequest()
try handler.perform([fg, face])
guard let obs = fg.results?.first else { print("no subject"); exit(2) }
let buf = try obs.generateMaskedImage(ofInstances: obs.allInstances, from: handler, croppedToInstancesExtent: false)
var out = CIImage(cvPixelBuffer: buf)
let e = ci.extent
var crop = out.extent
if let f = face.results?.max(by: { $0.boundingBox.height < $1.boundingBox.height }) {
    let b = f.boundingBox
    let fh = b.height * e.height, fw = b.width * e.width
    let cx = e.minX + (b.minX + b.width / 2) * e.width
    let faceTop = e.minY + b.maxY * e.height
    let h = fh * 3.5, w = h * 0.8
    let top = faceTop + fh * 0.85  // Vision's box starts at the brow, so leave room for hair
    _ = fw
    crop = CGRect(x: cx - w / 2, y: top - h, width: w, height: h)
} else { print("no face, using subject extent") }
let canvas = CIImage(color: .clear).cropped(to: crop)
out = out.composited(over: canvas).cropped(to: crop)
out = out.transformed(by: CGAffineTransform(translationX: -crop.minX, y: -crop.minY))
let s = 1000 / out.extent.height
if s < 1 { out = out.transformed(by: CGAffineTransform(scaleX: s, y: s)) }
try CIContext().writePNGRepresentation(of: out, to: URL(fileURLWithPath: args[2]), format: CIFormat.RGBA8, colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!)
