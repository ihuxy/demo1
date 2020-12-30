import React,{useEffect,useRef} from 'react';

import ContentLoader from 'react-content-loader';

import * as demos from './demos';

import {facebook,instagram,code,bulletList} from './utils/presets';

import './index.less';

const Loading = props => (
  <ContentLoader
    speed={2}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#ddd"
    foregroundColor="#eee"
    style={{ margin: '1em 0.5em 3em' }}
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
    <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
    <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
    <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
    <rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
    <rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
    <rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
    <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
  </ContentLoader>
);

const Index=props=>{
  
  return <div className="test1">
    <div>
      
    </div>
    <div>
      <h4>Loading</h4>
      <Loading />
    </div>
    <div>
      <h4>mytest</h4>
      <ContentLoader
        speed={2}
        width={'100%'}
        height={84}
        viewBox="0 0 100% 84"
        backgroundColor="#ddd"
        foregroundColor="#eee"
        style={{ margin: '1em 0.5em 3em' }}
      >
        <circle cx="40" cy="40" r="40" />
        <rect x="88" y="8" width="calc(100% - 88px)" height="20" rx="3" />
        <rect x="88" y="50" width="calc(100% - 88px)" height="20" rx="3" />
      </ContentLoader>
    </div>
    <div>
      <h4>EventsLoader</h4>
      <ContentLoader
        speed={2}
        width={700}
        height={300}
        viewBox="0 0 700 300"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
        {...props}
      >
        <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
        <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
        <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
        <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
        <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
        <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
        <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
        <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
        <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
        <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
        <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
        <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
        <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
      </ContentLoader>
    </div>
    <div>
      <h4>HelpLinksLoader</h4>
      <ContentLoader
        speed={2}
        width={700}
        height={350}
        viewBox="0 0 700 350"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
        {...props}
      >
        <rect x="4" y="8" rx="3" ry="3" width="8" height="317" />
        <rect x="7" y="317" rx="3" ry="3" width="669" height="8" />
        <rect x="669" y="9" rx="3" ry="3" width="7" height="313" />
        <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
        <rect x="114" y="52" rx="6" ry="6" width="483" height="15" />
        <circle cx="77" cy="60" r="15" />
        <rect x="116" y="105" rx="6" ry="6" width="420" height="15" />
        <circle cx="78" cy="113" r="15" />
        <rect x="115" y="158" rx="6" ry="6" width="483" height="15" />
        <circle cx="78" cy="166" r="15" />
        <rect x="117" y="211" rx="6" ry="6" width="444" height="15" />
        <circle cx="79" cy="219" r="15" />
        <rect x="117" y="263" rx="6" ry="6" width="483" height="15" />
        <circle cx="80" cy="271" r="15" />
      </ContentLoader>
    </div>
    <div>
      <h4>PieChart</h4>
      <ContentLoader
        viewBox="0 0 400 200"
        height={200}
        width={400}
        speed={2}
        {...props}
      >
        <rect x="100" y="5" rx="0" ry="0" width="200" height="15" />
        <circle cx="140" cy="110" r="70" />
        <rect x="230" y="50" rx="0" ry="0" width="7" height="7" />
        <rect x="250" y="50" rx="0" ry="0" width="30" height="7" />
        <rect x="230" y="64" rx="0" ry="0" width="7" height="7" />
        <rect x="250" y="64" rx="0" ry="0" width="30" height="7" />
        <rect x="230" y="78" rx="0" ry="0" width="7" height="7" />
        <rect x="250" y="78" rx="0" ry="0" width="30" height="7" />
        <rect x="230" y="92" rx="0" ry="0" width="7" height="7" />
        <rect x="250" y="92" rx="0" ry="0" width="30" height="7" />
      </ContentLoader>
    </div>
    <div>
      <h4>PieChart1</h4>
      <ContentLoader
        viewBox="0 0 380 600"
        height={380}
        width={600}
        speed={2}
        {...props}
      >
        <rect x="20px" y="5" rx="0" ry="0" width="2" height="375" />
        <rect x="20px" y="375" rx="0" ry="0" width="580" height="2" />

        <rect x="40px" y="75" rx="0" ry="0" width="20%" height="300" />
        <rect x="calc(20% + 60px)" y="125" rx="0" ry="0" width="20%" height="250" />
        <rect x="calc(40% + 80px)" y="105" rx="0" ry="0" width="20%" height="270" />
        <rect x="calc(60% + 100px)" y="35" rx="0" ry="0" width="20%" height="340" />
        <rect x="calc(80% + 120px)" y="55" rx="0" ry="0" width="20%" height="320" />
        {/* <rect x="240" y="15" rx="0" ry="0" width="35" height="360" /> */}
        {/* <rect x="280" y="135" rx="0" ry="0" width="35" height="240" /> */}
        {/* <rect x="320" y="85" rx="0" ry="0" width="35" height="290" /> */}
      </ContentLoader>
    </div>
    <div>
      <h4>bulletList</h4>
      <ContentLoader
        height={465}
        width={600}
        className="showcase-item__new-loader"
        viewBox="0 0 600 465"
      >
        <circle cx="10" cy="20" r="8" />
        <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="50" r="8" />
        <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="80" r="8" />
        <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="110" r="8" />
        <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
      </ContentLoader>
    </div>
    <div>
      <h4>demo</h4>
      <ContentLoader
        height={465}
        width={600}
        className="showcase-item__new-loader"
        viewBox="0 0 600 465"
      >
        <rect x="0" y="402" rx="8" ry="8" width="172" height="18" />
        <rect x="0" y="448" rx="8" ry="8" width="123" height="13" />
        <rect x="430" y="410" rx="8" ry="8" width="123" height="13" />
        <rect x="0" y="378" rx="0" ry="0" width="559" height="2" />
      </ContentLoader>
    </div>
    <div>
      {
        Object.keys(demos).map(key=>{
          const Comp=demos[key];
          const { name, github, description, filename } = Comp.metadata;
          return <div style={{border:'1px solid #777'}}>
            <h4>{name}-{filename}-{description}</h4>
            <Comp />
          </div>;
        })
      }
    </div>
  </div>;
};

export default Index;

















