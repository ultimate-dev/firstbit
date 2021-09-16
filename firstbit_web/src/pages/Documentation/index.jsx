import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo-long.png";
import * as configs from "../../configs";

export default function Page() {
  return (
    <React.Fragment>
      <div className="app-header">
        <div className="app-header-body text-dark p-5">
          <Link className="logo" to="/home">
            <img src={LogoImg} />
          </Link>
          <div className="h4 text-muted">Dokumantasyon</div>
        </div>
      </div>
      <div className="app-content">
        <div className="section">
          <div className="row">
            <div className="col-md-12 p-3">
              <div className="card">
                <div className="card-body">
                  <div className="my-4">
                    <p>
                      Bir API anahtarına kaydolmak için hesap ayarları
                      sayfanızdaki <Link to="/account/api">Api Key</Link>{" "}
                      bölümüne tıklayın.
                    </p>
                    <h5>API Anahtarı</h5>
                    <p>
                      Size bir anahtar verildikten sonra, örnek bir istek şöyle
                      görünür( <code>&lt;&lt;api_key&gt;&gt;</code>metni kendi
                      API anahtarınızla değiştirin):
                      <pre className="bg-grey p-3">
                        {configs.api.url}&lt;&lt;api_key&gt;&gt;/test
                      </pre>
                    </p>
                  </div>
                  {docs.map((item) => (
                    <>
                      <div className="w-100 border-bottom"></div>
                      <div className="my-4">
                        <h5>{item.title}</h5>
                        <div>
                          <span className="h6 bg-grey px-3 fw-boldest">
                            <code>POST</code>
                          </span>
                          <pre className="bg-grey p-3">
                            {configs.api.url}&lt;&lt;api_key&gt;&gt;/{item.name}
                          </pre>
                        </div>
                        <h6 className="text-muted">Sorgu</h6>
                        <small>
                          <table class="table table-striped">
                            <tbody>
                              <tr>
                                <th
                                  className="text-primary text-start"
                                  style={{ width: "20%" }}
                                >
                                  api_key
                                </th>
                                <th
                                  className="text-success text-center"
                                  style={{ width: "20%" }}
                                >
                                  string
                                </th>
                                <th
                                  className="text-muted text-center"
                                  style={{ width: "40%" }}
                                >
                                  Test Key 000000000000
                                </th>
                                <th
                                  className="text-secondary text-end"
                                  style={{ width: "20%" }}
                                >
                                  zorunlu
                                </th>
                              </tr>
                              <tr>
                                <th
                                  className="text-primary text-start"
                                  style={{ width: "20%" }}
                                >
                                  image
                                </th>
                                <th
                                  className="text-success text-center"
                                  style={{ width: "20%" }}
                                >
                                  File
                                </th>
                                <th
                                  className="text-muted text-center"
                                  style={{ width: "40%" }}
                                ></th>
                                <th
                                  className="text-secondary text-end"
                                  style={{ width: "20%" }}
                                >
                                  zorunlu
                                </th>
                              </tr>
                              <tr>
                                <th
                                  className="text-primary text-start"
                                  style={{ width: "20%" }}
                                >
                                  settings
                                </th>
                                <th
                                  className="text-success text-center"
                                  style={{ width: "20%" }}
                                >
                                  object
                                </th>
                                <th
                                  className="text-muted text-center"
                                  style={{ width: "40%" }}
                                ></th>
                                <th
                                  className="text-secondary text-end"
                                  style={{ width: "20%" }}
                                >
                                  opsiyonel
                                </th>
                              </tr>
                            </tbody>
                          </table>
                          <div className="ps-5 w-100">
                            <table class="table table-striped">
                              <tbody>
                                {item.settings.map((item) => (
                                  <tr>
                                    <th
                                      className="text-primary text-start"
                                      style={{ width: "20%" }}
                                    >
                                      {item.name}
                                    </th>
                                    <th
                                      className="text-success text-center"
                                      style={{ width: "20%" }}
                                    >
                                      {item.type}
                                    </th>
                                    <th
                                      className="text-muted text-center"
                                      style={{ width: "40%" }}
                                    >
                                      {item.default}
                                    </th>
                                    <th
                                      className="text-secondary text-end"
                                      style={{ width: "20%" }}
                                    >
                                      {item.req}
                                    </th>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </small>
                        <h6 className="text-muted">Yanıt</h6>
                        <small>
                          <table class="table table-striped">
                            <tbody>
                              <tr>
                                <th
                                  className="text-primary text-start"
                                  style={{ width: "20%" }}
                                >
                                  error
                                </th>
                                <th
                                  className="text-success text-center"
                                  style={{ width: "20%" }}
                                >
                                  intiger(0-1)
                                </th>
                                <th
                                  className="text-muted text-end"
                                  style={{ width: "40%" }}
                                >
                                  0
                                </th>
                              </tr>
                              <tr>
                                <th
                                  className="text-primary text-start"
                                  style={{ width: "20%" }}
                                >
                                  output
                                </th>
                                <th
                                  className="text-success text-center"
                                  style={{ width: "20%" }}
                                >
                                  object
                                </th>
                                <th
                                  className="text-muted text-end"
                                  style={{ width: "40%" }}
                                ></th>
                              </tr>
                            </tbody>
                          </table>
                          <div className="ps-5 w-100">
                            <table class="table table-striped">
                              <tbody>
                                <tr>
                                  <th
                                    className="text-primary text-start"
                                    style={{ width: "20%" }}
                                  >
                                    src
                                  </th>
                                  <th
                                    className="text-success text-center"
                                    style={{ width: "20%" }}
                                  >
                                    string
                                  </th>
                                  <th
                                    className="text-muted text-center"
                                    style={{ width: "40%" }}
                                  >
                                   buffer dizisinin base 64 cevrilmis hali
                                  </th>
                                </tr>
                                <tr>
                                  <th
                                    className="text-primary text-start"
                                    style={{ width: "20%" }}
                                  >
                                    buffer
                                  </th>
                                  <th
                                    className="text-success text-center"
                                    style={{ width: "20%" }}
                                  >
                                    array
                                  </th>
                                  <th
                                    className="text-muted text-center"
                                    style={{ width: "40%" }}
                                  >
                                   Görüntunun buffer dizsi
                                  </th>
                                </tr>
                                <tr>
                                  <th
                                    className="text-primary text-start"
                                    style={{ width: "20%" }}
                                  >
                                    mimetype
                                  </th>
                                  <th
                                    className="text-success text-center"
                                    style={{ width: "20%" }}
                                  >
                                    string
                                  </th>
                                  <th
                                    className="text-muted text-center"
                                    style={{ width: "40%" }}
                                  >
                                   Görüntunun formatı
                                  </th>
                                </tr>
                                <tr>
                                  <th
                                    className="text-primary text-start"
                                    style={{ width: "20%" }}
                                  >
                                    width
                                  </th>
                                  <th
                                    className="text-success text-center"
                                    style={{ width: "20%" }}
                                  >
                                    intiger
                                  </th>
                                  <th
                                    className="text-muted text-center"
                                    style={{ width: "40%" }}
                                  >
                                   Görüntunun Genişliği
                                  </th>
                                </tr>
                                <tr>
                                  <th
                                    className="text-primary text-start"
                                    style={{ width: "20%" }}
                                  >
                                    height
                                  </th>
                                  <th
                                    className="text-success text-center"
                                    style={{ width: "20%" }}
                                  >
                                    intiger
                                  </th>
                                  <th
                                    className="text-muted text-center"
                                    style={{ width: "40%" }}
                                  >
                                   Görüntunun Yüksekliği
                                  </th>
                                </tr>
                                <tr>
                                  <th
                                    className="text-primary text-start"
                                    style={{ width: "20%" }}
                                  >
                                    size
                                  </th>
                                  <th
                                    className="text-success text-center"
                                    style={{ width: "20%" }}
                                  >
                                    intiger
                                  </th>
                                  <th
                                    className="text-muted text-center"
                                    style={{ width: "40%" }}
                                  >
                                   Görüntunun Boyutu
                                  </th>
                                </tr>
                                <tr>
                                  <th
                                    className="text-primary text-start"
                                    style={{ width: "20%" }}
                                  >
                                    orginal
                                  </th>
                                  <th
                                    className="text-success text-center"
                                    style={{ width: "20%" }}
                                  >
                                    object
                                  </th>
                                  <th
                                    className="text-muted text-center"
                                    style={{ width: "40%" }}
                                  >
                                   Görüntunun Orjinal Verilari
                                  </th>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </small>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const docs = [
  {
    title: "JPEG",
    name: "jpeg",
    settings: [
      {
        name: "type",
        type: "sharp | imagemin",
        default: "sharp",
        req: "opsiyonel",
      },
      {
        name: "format",
        type: "jpeg | png | webp | tiff",
        default: "jpeg",
        req: "opsiyonel",
      },
      {
        name: "progressive",
        type: "boolean",
        default: "false",
        req: "opsiyonel",
      },
      {
        name: "lossy",
        type: "boolean",
        default: "true",
        req: "opsiyonel",
      },
      {
        name: "quality",
        type: "intiger(0-100)",
        default: "80",
        req: "opsiyonel",
      },
      {
        name: "subsampling",
        type: "4:2:0 | 4:2:2",
        default: "4:2:0",
        req: "opsiyonel",
      },
      {
        name: "quantization",
        type: "intiger(0-8)",
        default: "0",
        req: "opsiyonel",
      },
    ],
  },
  {
    title: "PNG",
    name: "png",
    settings: [
      {
        name: "type",
        type: "sharp | imagemin",
        default: "sharp",
        req: "opsiyonel",
      },
      {
        name: "format",
        type: "jpeg | png | webp | tiff",
        default: "png",
        req: "opsiyonel",
      },
      {
        name: "progressive",
        type: "boolean",
        default: "false",
        req: "opsiyonel",
      },
      {
        name: "lossy",
        type: "boolean",
        default: "true",
        req: "opsiyonel",
      },
      {
        name: "quality",
        type: "intiger(0-100)",
        default: "80",
        req: "opsiyonel",
      },
      {
        name: "level",
        type: "intiger(0-9)",
        default: "6",
        req: "opsiyonel",
      },
      {
        name: "speed",
        type: "intiger(1-11)",
        default: "4",
        req: "opsiyonel",
      },
      {
        name: "optimize",
        type: "intiger(0-7)",
        default: "3",
        req: "opsiyonel",
      },
    ],
  },
  {
    title: "SVG",
    name: "svg",
    settings: [
      {
        name: "type",
        type: "imagemin",
        default: "imagemin",
        req: "opsiyonel",
      },
      {
        name: "format",
        type: "svg+xml",
        default: "svg+xml",
        req: "opsiyonel",
      },
    ],
  },
  {
    title: "WEBP",
    name: "webp",
    settings: [
      {
        name: "type",
        type: "sharp | imagemin",
        default: "sharp",
        req: "opsiyonel",
      },
      {
        name: "format",
        type: "jpeg | png | webp | tiff",
        default: "webp",
        req: "opsiyonel",
      },
      {
        name: "lossy",
        type: "boolean",
        default: "true",
        req: "opsiyonel",
      },
      {
        name: "quality",
        type: "intiger(0-100)",
        default: "80",
        req: "opsiyonel",
      },
      {
        name: "alphaQuality",
        type: "intiger(0-100)",
        default: "80",
        req: "opsiyonel",
      },
      {
        name: "effort",
        type: "intiger(0-6)",
        default: "4",
        req: "opsiyonel",
      },
    ],
  },
  {
    title: "TIFF",
    name: "tiff",
    settings: [
      {
        name: "type",
        type: "sharp",
        default: "sharp",
        req: "opsiyonel",
      },
      {
        name: "format",
        type: "tiff",
        default: "webp",
        req: "opsiyonel",
      },

      {
        name: "quality",
        type: "intiger(0-100)",
        default: "80",
        req: "opsiyonel",
      },
    ],
  },
  {
    title: "GIF",
    name: "gif",
    settings: [
      {
        name: "type",
        type: "imagemin",
        default: "imagemin",
        req: "opsiyonel",
      },
      {
        name: "format",
        type: "tiff",
        default: "gif",
        req: "opsiyonel",
      },
      {
        name: "lossy",
        type: "intiger(0-100)",
        default: "80",
        req: "opsiyonel",
      },
      {
        name: "colors",
        type: "intiger(0-256)",
        default: "256",
        req: "opsiyonel",
      },
      {
        name: "optimize",
        type: "intiger(1-3)",
        default: "1",
        req: "opsiyonel",
      },
      {
        name: "unoptimize",
        type: "boolean",
        default: "false",
        req: "opsiyonel",
      },
    ],
  },
  {
    title: "GUETZLI",
    name: "guetzli",
    settings: [
      {
        name: "type",
        type: "imagemin",
        default: "imagemin",
        req: "opsiyonel",
      },
      {
        name: "format",
        type: "jpeg | png",
        default: "jpeg",
        req: "opsiyonel",
      },
      {
        name: "quality",
        type: "intiger(84-100)",
        default: "95",
        req: "opsiyonel",
      },
    ],
  },
  {
    title: "FLIF",
    name: "flif",
    settings: [
      {
        name: "type",
        type: "node-flif",
        default: "node-flif",
        req: "opsiyonel",
      },
      {
        name: "format",
        type: "flif",
        default: "jpeg",
        req: "opsiyonel",
      },
      {
        name: "effort",
        type: "intiger(0-100)",
        default: "50",
        req: "opsiyonel",
      },
      {
        name: "quality",
        type: "intiger(0-100)",
        default: "50",
        req: "opsiyonel",
      },
    ],
  },
];
