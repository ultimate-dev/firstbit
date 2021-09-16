import React from "react";
//Components
import { Content } from "../../../../components";

export default function Page({ Header }) {
  return (
    <>
      <Header.Dashboard />
      <div className="page-inner">
        <Content>
          <h4>Yüklü Tasarım Sistemleri</h4>
          <ul>
          <li>
              <a
                target="_blank"
                href="https://github.com/themekita/Atlantis-Lite"
              >
                Demo Template (Download)
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://demo.themekita.com/atlantis/livepreview/examples/demo1/"
              >
                Template Page
              </a>
            </li>
            <li>
              <a target="_blank" href="https://ant.design/components/overview/">
                Ant Design Components
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://react-bootstrap.github.io/components/alerts/"
              >
                React Bootstrap Components
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://getbootstrap.com/docs/4.5/components/alerts/"
              >
                Bootstrap Classes
              </a>
            </li>
          </ul>
        </Content>
      </div>
    </>
  );
}
