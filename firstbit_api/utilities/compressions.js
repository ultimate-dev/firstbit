const configs = require("../configs");
const path = require("path");
const bufferSizes = require("buffer-image-size");
const fs = require("fs");
// Settings Compressions
const configsCompress = require("../configs.compress.json");
// Sharp
const sharp = require("sharp");
// Imagemin
const imagemin = require("imagemin");
const imageminGiflossy = require("imagemin-giflossy");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminGuetzli = require("imagemin-guetzli");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminOptipng = require("imagemin-optipng");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const imageminWebp = require("imagemin-webp");
// NodeFlif
const nodeFlif = require("node-flif");

// Compresions
module.exports = async (alg, data, settings, callback) => {
  let initial = await initialSettings(alg);
  let _settings = { ...initial, ...settings };
  await onlyMimeType(
    data.mimetype,
    await getOnlyType(alg, _settings.type),
    async (status, message) => {
      if (status) {
        switch (_settings.type) {
          // Sharp
          case "sharp":
            await sharp(data.buffer)
              [alg](
                alg == "jpeg"
                  ? _settings.lossy
                    ? {
                        quality: _settings.quality,
                        progressive: _settings.progressive,
                        mozjpeg: false,
                        quantizationTable: _settings.quantization,
                        chromaSubsampling: _settings.subsampling,
                      }
                    : {
                        progressive: _settings.progressive,
                        mozjpeg: true,
                        quantizationTable: _settings.quantization,
                        chromaSubsampling: _settings.subsampling,
                      }
                  : alg == "png"
                  ? _settings.lossy
                    ? {
                        progressive: _settings.progressive,
                        quality: _settings.quality,
                        compressionLevel: _settings.level,
                        palette: true,
                      }
                    : {
                        progressive: _settings.progressive,
                        compressionLevel: _settings.level,
                      }
                  : alg == "webp"
                  ? {
                      quality: _settings.quality,
                      alphaQuality: _settings.alphaQuality,
                      lossless: _settings.lossy,
                      reductionEffort: _settings.effort,
                    }
                  : alg == "tiff"
                  ? {
                      quality: _settings.quality,
                    }
                  : null
              )
              .toBuffer()
              .then((buffer) => {
                resize(
                  buffer,
                  _settings.info,
                  (buffer) => {
                    toFormat(buffer, _settings.format, (buffer) => {
                      let src = `data:image/${
                        _settings.format
                      };base64,${Buffer.from(buffer).toString("base64")}`;
                      let size = Buffer.from(buffer).byteLength;
                      let width = 0;
                      let height = 0;
                      if (_settings.format !== "tiff") {
                        width = bufferSizes(buffer).width;
                        height = bufferSizes(buffer).height;
                      }

                      callback(true, {
                        orginal: {
                          ...data,
                        },
                        mimetype: "image/" + _settings.format,
                        buffer,
                        width,
                        height,
                        size,
                        src,
                      });
                    });
                  },
                  _settings.format
                );
              });
            break;
          // Imagemin
          case "imagemin":
            await imagemin
              .buffer(data.buffer, {
                plugins: [
                  //
                  alg == "jpeg"
                    ? _settings.lossy
                      ? imageminMozjpeg({
                          quality: _settings.quality,
                          quantTable: _settings.quantization,
                          progressive: _settings.progressive,
                        })
                      : imageminJpegtran({ progressive: _settings.progressive })
                    : alg == "png"
                    ? _settings.lossy
                      ? imageminPngquant({
                          speed: _settings.speed,
                          quality: [
                            _settings.quality / 100,
                            _settings.quality / 100,
                          ],
                        })
                      : imageminOptipng({
                          optimizationLevel: _settings.optimize,
                        })
                    : alg == "svg"
                    ? imageminSvgo({
                        multipass: true,
                      })
                    : alg == "webp"
                    ? imageminWebp({
                        quality: _settings.quality,
                        alphaQuality: _settings.alphaQuality,
                        lossless: _settings.lossy,
                        method: _settings.effort,
                      })
                    : alg == "guetzli"
                    ? imageminGuetzli({
                        quality: _settings.quality,
                      })
                    : alg == "gif"
                    ? _settings.lossy && _settings.lossy > 0
                      ? imageminGiflossy({
                          colors: _settings.colors,
                          lossy: _settings.lossy,
                          optimizeLevel: _settings.optimize,
                          unoptimize: _settings.unoptimize,
                        })
                      : imageminGifsicle({
                          optimizeLevel: _settings.optimize,
                          colors: _settings.colors,
                        })
                    : null,
                ],
              })
              .then((buffer) => {
                resize(
                  buffer,
                  _settings.info,
                  (buffer) => {
                    toFormat(buffer, _settings.format, (buffer) => {
                      let src = `data:image/${
                        _settings.format
                      };base64,${Buffer.from(buffer).toString("base64")}`;
                      let size = Buffer.from(buffer).byteLength;
                      let width = 0;
                      let height = 0;
                      if (_settings.format !== "tiff") {
                        width = bufferSizes(buffer).width;
                        height = bufferSizes(buffer).height;
                      }
                      callback(true, {
                        orginal: {
                          ...data,
                        },
                        mimetype: "image/" + _settings.format,
                        buffer,
                        width,
                        height,
                        size,
                        src,
                      });
                    });
                  },
                  _settings.format
                );
              });
            break;
          // Node-flif
          case "node-flif":
            let name = Date.now() + ".flif";
            let params = {
              input: path.join(process.cwd(), data.path),
              output: path.join(process.cwd(), "compress/outputs/" + name),
              async: true,
              effort: _settings.effort,
              encodeQuality: _settings.quality,
            };
            await nodeFlif.encode(params, () => {
              var size = fs.statSync(params.output).size;
              callback(true, {
                orginal: {
                  ...data,
                },
                mimetype: "image/flif",
                buffer: false,
                size,
                src: configs.base_url + "compress/outputs/" + name,
              });
            });

            break;
          default:
            break;
        }
      } else {
        callback(false, {}, message);
      }
    }
  );
};

// Initial Settings
const initialSettings = async (alg) => {
  if (configsCompress[alg]["initial"]) return configsCompress[alg]["initial"];
  else return {};
};
// Get Only File ext
const getOnlyType = async (alg, type) => {
  if (configsCompress[alg][type]["onlyType"])
    return configsCompress[alg][type]["onlyType"];
  else return [];
};
// Only ext control
const onlyMimeType = async (mimeType, only = [], callback) => {
  let ext = "";
  if (mimeType) {
    ext = String(mimeType).split("/")[1];
    if (only.indexOf(ext) >= 0) {
      callback(true);
    } else {
      callback(false, "Bu Dosya Uzantısı Desteklenmemektedir");
    }
  } else {
    callback(false, "Bu Dosya Uzantısı Bulunamadı");
  }
};

const resize = async (buffer, info, cb, format) => {
  if (
    info &&
    info.width &&
    info.width > 0 &&
    info.height &&
    info.height > 0 &&
    format &&
    format !== "gif"
  )
    return await sharp(buffer)
      .resize({
        width: parseInt(info.width),
        height: parseInt(info.height),
      })
      .toBuffer()
      .then(cb);
  else cb(buffer);
};

const toFormat = async (buffer, format, cb) => {
  if (
    format &&
    format !== "gif" &&
    format !== "svg" &&
    format !== "svg+xml" &&
    format !== "flif"
  )
    return await sharp(buffer)
      .toFormat(format ? format : "jpeg")
      .toBuffer()
      .then(cb);
  else cb(buffer);
};
